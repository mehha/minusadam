<?php

/*
  Plugin Name: E-Abi Woocommerce Itella Shipping method plugin
  Plugin URI: http://www.e-abi.ee/
  Description: Adds Itella Shipping methods to Woocommerce instance
  Version: 1.13
  Author: Matis Halmann, Aktsiamaailm LLC
  Author URI: http://www.e-abi.ee/
  Copyright: (c) Aktsiamaailm LLC
  License: Aktsiamaailm LLC License
  License URI: http://www.e-abi.ee/litsentsitingimused
 */

/*
   *  (c) 2017 Aktsiamaailm OÜ - Kõik õigused kaitstud
 *  Litsentsitingimused on saadaval http://www.e-abi.ee/litsentsitingimused
 *  
 *  (c) 2017 Aktsiamaailm OÜ - All rights reserved
 *  Licence terms are available at http://en.e-abi.ee/litsentsitingimused
 *  

 */

/**
 * Description of smartpost-estonia
 *
 * @author matishalmann
 */
if (!function_exists('is_woocommerce_active')) {
    require_once('woo-includes/woo-functions.php');
}
if (!function_exists('is_eabi_postoffice_active')) {
    require_once('includes/postoffice-functions.php');
}

if (is_eabi_postoffice_active()) {
    load_plugin_textdomain('wc_itella_smartpost_estonia', false, dirname(plugin_basename(__FILE__)) . '/');

    function woocommerce_shipping_smartpost_estonia_init() {
        if (!class_exists('WC_Itella_Smartpost_Estonia')) {


            class WC_Itella_Smartpost_Estonia extends WC_Eabi_Postoffice {
                
                protected $_forceCurl = true;

                protected $_version = '1.13';

                const URL = 'https://iseteenindus.smartpost.ee/api/?request=destinations&country=EE&type=APT';
                const URL_FI = 'https://iseteenindus.smartpost.ee/api/?request=destinations&country=FI&type=APT';

                protected $_classPrefix = 'Eabi_Woocommerce_Itella_';

                const PLUGIN_TEXT_DOMAIN = 'wc_itella_smartpost_estonia';

                public function __construct($disableAction = false) {
                    $this->init();
                    parent::__construct($disableAction);
                    $pluginTextDomain = WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN;
                    $this->_choosePickupLocationText = __('Choose parcel terminal', $pluginTextDomain);
                    $this->_chosenPickupLocationText = __('Chosen parcel terminal', $pluginTextDomain);
                    $this->_selectPickupLocationErrorText = __('Please select a parcel terminal', $pluginTextDomain);
                    $this->_selectPickupLocationRefreshPageErrorText = __('Please refresh the page and select a different parcel terminal', $pluginTextDomain);
                    $this->_chosenPickupLocationChangedText = __('Parcel terminal changed to %s', $pluginTextDomain);
                }

                /**
                 * <p>This needs to exist, otherwise models won't be loaded properly</p>
                 * @return system
                 */
                protected function _getFilePath() {
                    return __FILE__;
                }

                public function init() {
                    $this->supportedAdditionalIds = array('itella_smartpost_finland', 'itella_smartpost_estonia');
                    $this->id = 'eabi_itella_smartpost';
//                    $this->id = 'itella_smartpost_estonia';
                    $this->method_title = __('Itella SmartPOST', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);
                    $this->admin_page_description = __('Allows customer to choose Itella SmartPOST as a shipping method', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);


                    $this->init_form_fields();
                    $this->init_settings();



                    add_filter('woocommerce_shipping_methods', array(&$this, 'add_itella_smartpost_estonia'));
                }

                public function getSupportedCountries() {
                    return array('EE', 'FI');
                }

                protected function getDefaultPrices() {
                    $defaultPrices = array(
                        '_1436644244750_750' => array(
                            'country_id' => 'EE',
                            'xs_price' => '2',
                            's_price' => '2.4917',
                            'm_price' => '3.1583',
                            'l_price' => '3.9083',
                            'xl_price' => '5.1667',
                            'free_from' => '',
                        ),
                        '_1436644244751_751' => array(
                            'country_id' => 'FI',
                            'xs_price' => '8.3333',
                            's_price' => '9.1667',
                            'm_price' => '10.8333',
                            'l_price' => '11.6667',
                            'xl_price' => '12.5',
                            'free_from' => '',
                        ),
                    );
                    return json_encode($defaultPrices);
                }

                protected function __curl_get_file_contents($URL) {
                    $c = curl_init();
                    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($c, CURLOPT_URL, $URL);
                    $contents = curl_exec($c);
                    curl_close($c);

                    if ($contents) {
                        return $contents;
                    } else {
                        return FALSE;
                    }
                }

                protected function _get_file_contents($url, &$responseHeaders = array()) {
                    if ((!ini_get('allow_url_fopen') || $this->_forceCurl) && function_exists('curl_version')) {
                        $result = $this->__curl_get_file_contents($url);
                        return $result;
                    }
                    $result = file_get_contents($url);
                    $responseHeaders = $http_response_header;
                    return $result;
                }
                
                protected function getDefaultCost() {
                    $prices = json_decode($this->getDefaultPrices(), true);
                    
                    foreach ($prices as $priceData) {
                        if (isset($priceData['xxl_price'])) {
                            return $priceData['xxl_price'];
                        }
                        if (isset($priceData['xl_price'])) {
                            return $priceData['xl_price'];
                        }
                    }
                    return '15';
                }

                public function getGroupSort($group_name) {
                    $group_name = strtolower($group_name);
                    $sorts = array(
                        /* EE */
                        'tallinn' => 20,
                        'tartu' => 19,
                        'pärnu' => 18,
                        //Finland
                        'helsinki' => 20,
                        'helsingfors' => 20,
                        'espoo' => 19,
                        'vantaa' => 18,
                        'vanda' => 18,
                        'kauniainen' => 17,
                        'grankulla' => 17,
                        'tampere' => 16,
                        'tammefors' => 16,
                        'turku' => 15,
                        'åbo' => 15,
                    );
                    if (isset($sorts[$group_name])) {
                        return $sorts[$group_name];
                    }
                    if (strpos($group_name, '/') > 0) {
                        return 0;
                    }
                    return 0;
                }

                public function getOfficeList() {
                    $result = array();

//                    $body = (file_get_contents(self::URL));
                    $body = $this->_get_file_contents(self::URL);
                    $hasTerminals = false;
                    try {
                        $eeParcelTerminals = $this->helper()->getXmlParser()->fromXml($body);
                        foreach ($eeParcelTerminals['destinations']['item'] as $eeParcelTerminal) {
                            if ($eeParcelTerminal['country'] == 'EE') {
                                $hasTerminals = true;
                                $result[] = array(
                                    'place_id' => (int) $eeParcelTerminal['place_id'],
                                    'name' => $eeParcelTerminal['name'],
                                    'city' => $eeParcelTerminal['city'],
                                    'county' => '',
                                    'description' => $eeParcelTerminal['availability'] . ' (' . $eeParcelTerminal['description'] . ')',
                                    'country' => $eeParcelTerminal['country'],
                                    'zip' => $eeParcelTerminal['postalcode'],
//                    'group_sort' => $this->getGroupSort($eeParcelTerminal['city']),
                                    'extra' => $eeParcelTerminal,
                                );
                            }
                        }
                        if (!$hasTerminals) {
                            return false;
                        }

                        //reset
                        $hasTerminals = false;

//                        $body = (file_get_contents(self::URL_FI));
                        $body = $this->_get_file_contents(self::URL_FI);
                        
                        $fiParcelTerminals = $this->helper()->getXmlParser()->fromXml($body);


                        foreach ($fiParcelTerminals['destinations']['item'] as $fiParcelTerminal) {
                            if ($fiParcelTerminal['country'] == 'FI') {
                                $hasTerminals = true;
                                $result[] = array(
                                    'place_id' => (int) $fiParcelTerminal['place_id'],
                                    'name' => $fiParcelTerminal['name'],
                                    'city' => $fiParcelTerminal['city'],
                                    'county' => '',
                                    'description' => $fiParcelTerminal['availability'] . '(' . $fiParcelTerminal['description'] . ')',
                                    'country' => $fiParcelTerminal['country'],
                                    'zip' => $fiParcelTerminal['postalcode'],
//                    'group_sort' => $this->getGroupSort($eeParcelTerminal['city']),
                                    'extra' => $fiParcelTerminal,
                                );
                            }
                        }
                        
                    } catch (Exception $ex) {
                        $this->getLogger()
                                ->error(array('could not update terminals' => $ex->__toString()));
                        return false;

                    }

                    if (!$hasTerminals) {
                        return false;
                    }



                    if (count($result) == 0) {
                        return false;
                    }


                    return $result;
                }

                public function init_form_fields() {
                    $woocommerce = $this->helper()->getWooCommerce();
                    $this->form_fields = array(
                        'licence' => array(
                            'title' => __('Licence', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'licence_state',
                            'label' => __('Status of current plugins licence', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => '',
//                            'methods' => array('itella_smartpost_estonia', 'itella_smartexpress_estonia', 'itella_smartkuller_estonia', 'eabi_itella_postoffice')
                        ),
                        'enabled' => array(
                            'title' => __('Enable/Disable', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('Enable this shipping method', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no'
                        ),
                        'title' => array(
                            'title' => __('Method Title', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'description' => __('This controls the title which the user sees during checkout.', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => $this->method_title,
                        ),
                        'price_per_country' => array(
                            'title' => __('Shipping Fee per country', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'countryprice',
                            'description' => __('Shipping fee excluding tax. Enter an amount, e.g. 2.50.', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => $this->getDefaultPrices(),
                        ),
                        'cost' => array(
                            'title' => __('Shipping Fee', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'description' => __('Shipping fee excluding tax. Enter an amount, e.g. 2.50. (used, when fee for country is not found)', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => $this->getDefaultCost(),
                        ),
                        
                        'availability' => array(
                            'title' => __('Method availability', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'default' => 'specific',
                            'class' => 'availability',
                            'options' => array(
                                'all' => __('All allowed countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                'specific' => __('Specific Countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                            )
                        ),
                        'countries' => array(
                            'title' => __('Specific Countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'multiselect',
                            'class' => 'chosen_select',
                            'css' => 'width: 450px;',
                            'default' => $this->getSupportedCountries(),
                            'options' => $woocommerce->countries->countries
                        ),
                        'max_weight' => array(
                            'title' => __('Maximum weight allowed', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'description' => __('If cart contains product over the weight, this shipping method is not available', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => '25'
                        ),
                        'use_per_item_weights' => array(
                            'title' => __('Maximum weight limits are calculated per each item', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('When disabled, then weight of whole cart is checked against maximum weight limit', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'yes'
                        ),
                        
                        'min_amount' => array(
                            'title' => __('Enable this method from cart subtotal', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'description' => __('Empty or 0 disables this setting', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => ''
                        ),
                        'type' => array(
                            'title' => __('Calculation Type', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'description' => '',
                            'default' => 'order',
                            'options' => array(
                                'order' => __('Per Order - charge shipping for the entire order as a whole', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                'item' => __('Per Item - charge shipping for each item individually', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            )
                        ),
                        'free_boxes' => array(
                            'title' => __('Amount of free boxes per each paid box', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'description' => __('Used only when calcultion type is *Per Item*', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => ''
                        ),
                        'tax_status' => array(
                            'title' => __('Tax Status', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'description' => '',
                            'default' => 'taxable',
                            'options' => array(
                                'taxable' => __('Taxable', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                'none' => __('None', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                            )
                        ),
                        'enable_free' => array(
                            'title' => __('Enable free shipping', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('Allow free shipping', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no'
                        ),
                        'free_from' => array(
                            'title' => __('Free shipping from cart subtotal', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'description' => __('Free shipping if cart subtotal is equal or greater than amount specified', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => ''
                        ),
                        'free_from_qty' => array(
                            'title' => __('Free shipping from cart quantity', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'description' => __('Free shipping if number of items in cart is equal or greater than amount specified. Empty or 0 disables this setting', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => ''
                        ),
                        'show_names' => array(
                            'title' => __('Show pickup points names', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'description' => '',
                            'default' => 'short',
                            'options' => array(
                                'short' => __('Only pickup points names', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                'long' => __('Pickup points names with description and address', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                            )
                        ),
                        'sort_terminals' => array(
                            'title' => __('Sort pickup points by priority', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'description' => '',
                            'default' => 'yes',
                            'options' => array(
                                'yes' => __('Pickup points from larger cities displayed first, rest sorted alphabetically', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                'no' => __('Pickup points sorted alphabetically', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                            )
                        ),
                        'group_width' => array(
                            'title' => __('City selection menu width in pixels', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '200'
                        ),
                        'office_width' => array(
                            'title' => __('Pickup points selection menu width in pixels', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '250'
                        ),
                        'drop_menu_selection' => array(
                            'title' => __('Show all pickup points in a single select menu', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('When disabled, user has to pick city/county first and then a suitable pickup point from previously selected city/county', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'yes'
                        ),
                        'hide_group_titles' => array(
                            'title' => __('Hide group titles', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('Affects Cities/Counties grouping in pickup point select menu', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no'
                        ),
                        'setting_override' => array(
                            'title' => __('Country specific settings overrides', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'countryoverride',
                            'label' => __('Country specific settings overrides', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => ''
                        ),
                        'enable_log' => array(
                            'title' => __('Enable logging', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'eabi_log',
                            'label' => __('Enable logging', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no'
                        ),
                    );
                }

                public function getTerminalTitle($office) {
                    if ($this->get_option('show_names') == 'long') {
                        return htmlspecialchars($office['name'] . ' (' . $office['description'] . ')');
                    }
                    return htmlspecialchars($office['name']);
                }

                public function getFullTerminalTitle($office) {
                    if ($this->get_option('show_names') == 'long') {
                        return htmlspecialchars($office['group_name'] . ', ' . $office['name'] . ' (' . $office['description'] . ')');
                    }
                    return htmlspecialchars($office['group_name'] . ', ' . $office['name']);
                }

                /**
                 * 
                 * @param array $package
                 * @param Eabi_Woocommerce_Postoffice_Model_Shippingprice $priceCalculationModel
                 * @return float
                 */
                public function order_shipping($package, $priceCalculationModel, $priceData) {
                    $cost = null;
                    $shippingCosts = array();

                    if ($priceData) {
                        if (isset($priceData['xs_price'])) {
                            $productSizes = $priceCalculationModel->getProductSizes($package);
                            $priceInfo = array(
                                $priceData['xs_price'],
                                $priceData['s_price'],
                                $priceData['m_price'],
                                $priceData['l_price'],
                                $priceData['xl_price'],
                            );

                            foreach ($productSizes as $productSize) {
                                $sizeCost = $priceCalculationModel->getFeeFromSize($productSize, $priceInfo);
                                $shippingCosts[] = $sizeCost;
                            }
                            $cost = max($shippingCosts);
                        }
                    }
                    // Default rates
                    if (is_null($cost)) {
                        $cost = $this->get_option('cost');
                    }

                    // Shipping for whole order
                    return $cost;
                }

                /**
                 * 
                 * @param array $package
                 * @param Eabi_Woocommerce_Postoffice_Model_Shippingprice $priceCalculationModel
                 * @return float
                 */
                public function item_shipping($package, $priceCalculationModel, $priceData) {
                    // Per item shipping so we pass an array of costs (per item) instead of a single value
                    $amountOfFreeBoxes = (int) $this->get_option('free_boxes');

                    $weightSet = 1;
                    $packageWeight = array_sum($this->_getPackageWeights($package));
                    $shippingCosts = array();

                    $packageWeights = $this->_getPackageWeights($package);
                    $cost = null;

                    if ($priceData) {
                        if (isset($priceData['xs_price'])) {

                            $productSizes = $priceCalculationModel->getProductSizes($package);
                            $priceInfo = array(
                                $priceData['xs_price'],
                                $priceData['s_price'],
                                $priceData['m_price'],
                                $priceData['l_price'],
                                $priceData['xl_price'],
                            );
                            foreach ($productSizes as $productSize) {
                                $sizeCost = $priceCalculationModel->getFeeFromSize($productSize, $priceInfo);
                                for ($i = 0; $i < $productSize['q']; $i++) {
                                    $shippingCosts[] = $sizeCost;
                                }
                            }
                            if ($amountOfFreeBoxes > 0) {
                                $numberOfDesiredItems = ceil(1 / (1 + $amountOfFreeBoxes) * count($shippingCosts));
//                                $cost = 0;
                                $desiredCosts = array();
                                $temporaryCollectedCosts = array_chunk($shippingCosts, 1 + $amountOfFreeBoxes);
                                foreach ($temporaryCollectedCosts as $temporaryCollectedCostValues) {
                                    $desiredCosts[] = max($temporaryCollectedCostValues);
                                }
                                $cost = array_sum($desiredCosts);
//                                for ($i = 0; $i < $numberOfDesiredItems; $i++) {
//                                    $cost += $shippingCosts[$i];
//                                }
                            } else {
                                $cost = array_sum($shippingCosts);
                            }
                            

                            
                            
                            
                            
                        }
                    }

                    if (is_null($cost)) {
                        // Shipping per item
                        $costs = array();
                        foreach ($package['contents'] as $item_id => $values) {
                            $_product = $values['data'];

                            if ($values['quantity'] > 0 && $_product->needs_shipping()) {
                                $itemcost = $this->get_option('cost');

                                for ($q = 0; $q < $values['quantity']; $q++) {
                                    $costs[] = $itemcost;
                                }
//                            $costs[$item_id] = ( ( $cost ) * $values['quantity'] );
                            }
                        }

                        if ($amountOfFreeBoxes > 0) {
                            $cost = 0;
                            $numberOfDesiredItems = ceil(1 / (1 + $amountOfFreeBoxes) * count($costs));
                            for ($i = 0; $i < $numberOfDesiredItems; $i++) {
                                $cost += $costs[$i];
                            }
                        } else {
                            $cost = array_sum($costs);
                        }
                    }




                    return $cost;
                }

                public function add_itella_smartpost_estonia($methods) {
                    $methods[$this->id] = &$this;
//                    $methods[] = &$this;
                    return $methods;
                }

            }

        } //end 

        //
        
        class WC_Itella_Smartexpress_Estonia extends WC_Itella_Smartpost_Estonia {

            const URL = 'http://iseteenindus.smartpost.ee/api/?request=destinations&country=EE&type=APT&filter=express';

            /**
             * <p>This needs to exist, otherwise models won't be loaded properly</p>
             * @return system
             */
            protected function _getFilePath() {
                return __FILE__;
            }

            public function init() {
                $this->id = 'eabi_itella_smartexpress';
                $this->method_title = __('Itella SmartEXPRESS', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);
                $this->admin_page_description = __('Allows customer to choose Itella SmartEXPRESS as a shipping method', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);


                $this->init_form_fields();
                $this->init_settings();

                add_filter('woocommerce_shipping_methods', array(&$this, 'add_itella_smartexpress_estonia'));
            }

            protected function getDefaultPrices() {
                $defaultPrices = array(
                    '_1436644244750_750' => array(
                        'country_id' => 'EE',
                        'xs_price' => '3',
                        's_price' => '3.4917',
                        'm_price' => '4.1583',
                        'l_price' => '4.9083',
                        'xl_price' => '6.1667',
                        'free_from' => '',
                    ),
                );
                return json_encode($defaultPrices);
            }

            public function getOfficeList() {
                $result = array();

//                $body = (file_get_contents(self::URL));
                $body = $this->_get_file_contents(self::URL);
                
                $eeParcelTerminals = $this->helper()->getXmlParser()->fromXml($body);
                foreach ($eeParcelTerminals['destinations']['item'] as $eeParcelTerminal) {
                    if ($eeParcelTerminal['country'] == 'EE') {
                        $result[] = array(
                            'place_id' => (int) $eeParcelTerminal['place_id'],
                            'name' => $eeParcelTerminal['name'],
                            'city' => $eeParcelTerminal['city'],
                            'county' => '',
                            'description' => $eeParcelTerminal['availability'] . ' (' . $eeParcelTerminal['description'] . ')',
                            'country' => $eeParcelTerminal['country'],
                            'zip' => $eeParcelTerminal['postalcode'],
//                    'group_sort' => $this->getGroupSort($eeParcelTerminal['city']),
                            'extra' => $eeParcelTerminal,
                        );
                    }
                }


                if (count($result) == 0) {
                    return false;
                }


                return $result;
            }

            public function getSupportedCountries() {
                return array('EE');
            }

            public function add_itella_smartexpress_estonia($methods) {
                $methods[] = &$this;
                return $methods;
            }

        }

        class WC_Itella_Postoffice_Finland extends WC_Itella_Smartpost_Estonia {

            const URL = 'http://iseteenindus.smartpost.ee/api/?request=destinations&country=FI&type=PO&filter=';

            public function __construct($disableAction = false) {
                $this->init();
                parent::__construct($disableAction);
                $pluginTextDomain = WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN;
                $this->_choosePickupLocationText = __('Choose postal office', $pluginTextDomain);
                $this->_chosenPickupLocationText = __('Chosen postal office', $pluginTextDomain);
                $this->_selectPickupLocationErrorText = __('Please select a postal office', $pluginTextDomain);
                $this->_selectPickupLocationRefreshPageErrorText = __('Please refresh the page and select a different postal office', $pluginTextDomain);
                $this->_chosenPickupLocationChangedText = __('Postal office changed to %s', $pluginTextDomain);
            }
            
                public function init_form_fields() {
                    parent::init_form_fields();
                    $this->form_fields['drop_menu_selection']['default'] = 'no';
                }
            

            /**
             * <p>This needs to exist, otherwise models won't be loaded properly</p>
             * @return system
             */
            protected function _getFilePath() {
                return __FILE__;
            }


            public function init() {
                $this->id = 'eabi_itella_postoffice';
                $this->method_title = __('Itella Postal Office', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);
                $this->admin_page_description = __('Allows customer to choose Itella Postal Office as a shipping method', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);


                $this->init_form_fields();
                $this->init_settings();

                add_filter('woocommerce_shipping_methods', array(&$this, 'add_itella_postoffice'));
            }

            protected function getDefaultPrices() {
                $defaultPrices = array(
                    '_1436644244750_750' => array(
                        'country_id' => 'FI',
                        'xs_price' => '10',
                        's_price' => '11.46',
                        'm_price' => '12.25',
                        'l_price' => '13.58',
                        'xl_price' => '14.12',
                        'free_from' => '',
                    ),
                );
                return json_encode($defaultPrices);
            }

            public function getOfficeList() {
                $result = array();

//                $body = (file_get_contents(self::URL));
                $body = $this->_get_file_contents(self::URL);
                try {
                    $eeParcelTerminals = $this->helper()->getXmlParser()->fromXml($body);
                    foreach ($eeParcelTerminals['destinations']['item'] as $eeParcelTerminal) {
                        if ($eeParcelTerminal['country'] == 'FI') {
                            $result[] = array(
                                'place_id' => (int) $eeParcelTerminal['place_id'],
                                'name' => $eeParcelTerminal['name'],
                                'city' => $eeParcelTerminal['city'],
                                'county' => '',
                                'description' => $eeParcelTerminal['availability'] . ' (' . $eeParcelTerminal['description'] . ')',
                                'country' => $eeParcelTerminal['country'],
                                'zip' => $eeParcelTerminal['postalcode'],
//                    'group_sort' => $this->getGroupSort($eeParcelTerminal['city']),
                                'extra' => $eeParcelTerminal,
                            );
                        }
                    }
                } catch (Exception $ex) {
                    $this->getLogger()
                                ->error(array('could not update terminals' => $ex->__toString()));
                        return false;

                }


                if (count($result) == 0) {
                    return false;
                }


                return $result;
            }

            public function getSupportedCountries() {
                return array('FI');
            }

            public function add_itella_postoffice($methods) {
                $methods[] = &$this;
                return $methods;
            }

        }

        class WC_Itella_Smartkuller_Estonia extends WC_Itella_Smartpost_Estonia {

            protected $_calculationModel = 'shippingpricekuller';

            public function __construct($disableAction = false) {
                $this->init();
                parent::__construct($disableAction);
                $pluginTextDomain = WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN;
                $this->_choosePickupLocationText = __('Choose pickup time', $pluginTextDomain);
                $this->_chosenPickupLocationText = __('Chosen pickup time', $pluginTextDomain);
                $this->_selectPickupLocationErrorText = __('Please select a pickup time', $pluginTextDomain);
                $this->_selectPickupLocationRefreshPageErrorText = __('Please refresh the page and select a different pickup time', $pluginTextDomain);
                $this->_chosenPickupLocationChangedText = __('Pickup time changed to %s', $pluginTextDomain);
            }

            /**
             * <p>This needs to exist, otherwise models won't be loaded properly</p>
             * @return system
             */
            protected function _getFilePath() {
                return __FILE__;
            }

            public function init() {
                $this->id = 'eabi_itella_smartkuller';
                $this->method_title = __('Itella SmartKULLER', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);
                $this->admin_page_description = __('Allows customer to choose Itella SmartKULLER as a shipping method', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN);


                $this->init_form_fields();
                $this->init_settings();

                add_filter('woocommerce_shipping_methods', array(&$this, 'add_itella_smartkuller_estonia'));
            }

            protected function getDefaultPrices() {
                $defaultPrices = array(
                    '_1436644244750_750' => array(
                        'country_id' => 'EE',
                        'xs_price' => '4',
                        's_price' => '4.50',
                        'm_price' => '5.50',
                        'l_price' => '6.95',
                        'xl_price' => '8.95',
                        'xxl_price' => '11.95',
                        'free_from' => '',
                    ),
                );
                return json_encode($defaultPrices);
            }

            public function getTerminals($groupId = null, $addressId = null) {
                $groupIdQuery = '';
                $db = $this->helper()->getWpdbModel();
                if ($groupId) {
                    $groupIdQuery .= " and group_id = '" . esc_sql($groupId) . "' ";
                }
                if ($addressId) {
                    $groupIdQuery .= " and country = '" . esc_sql($addressId) . "'";
                }

                $query = "select * from " . $db->prefix . "eabi_postoffice where remote_module_name = '" . esc_sql($this->id) . "' "
                        . $groupIdQuery
                        . " order by group_sort DESC, group_name ASC, remote_place_id ASC ";



                $terminalsCollection = $db->get_results($query, ARRAY_A);

                foreach ($terminalsCollection as $i => $term) {
                    if ($term['cached_attributes']) {
                        $data = @json_decode($term['cached_attributes'], true);
                        if ($data) {
                            $terminalsCollection[$i]['cached_attributes'] = $data;
                        }
                    }
                }

                return $terminalsCollection;
            }

            public function getOfficeList() {
                $result = array();

                $eeParcelTerminals = array(
                    array(
                        'place_id' => '1',
                        'name' => 'Any time',
                        'city' => '',
                        'country' => 'EE',
                    ),
                    array(
                        'place_id' => '2',
                        'name' => '9-17',
                        'city' => '',
                        'country' => 'EE',
                    ),
                    array(
                        'place_id' => '3',
                        'name' => '17-21',
                        'city' => '',
                        'country' => 'EE',
                    ),
                );
                foreach ($eeParcelTerminals as $eeParcelTerminal) {
                    if ($eeParcelTerminal['country'] == 'EE') {
                        $result[] = array(
                            'place_id' => (int) $eeParcelTerminal['place_id'],
                            'name' => $eeParcelTerminal['name'],
                            'city' => $eeParcelTerminal['city'],
                            'county' => '',
                            'description' => '',
                            'country' => $eeParcelTerminal['country'],
                            'zip' => '',
                            'extra' => $eeParcelTerminal,
                        );
                    }
                }


                if (count($result) == 0) {
                    return false;
                }


                return $result;
            }

            /**
             * 
             * @param array $package
             * @param Eabi_Woocommerce_Postoffice_Model_Shippingprice $priceCalculationModel
             * @return float
             */
            public function order_shipping($package, $priceCalculationModel, $priceData) {
                $cost = null;
                $shippingCosts = array();

                if ($priceData) {
                    if (isset($priceData['xs_price'])) {
                        $productSizes = $priceCalculationModel->getProductSizes($package);
                        $priceInfo = array(
                            $priceData['xs_price'],
                            $priceData['s_price'],
                            $priceData['m_price'],
                            $priceData['l_price'],
                            $priceData['xl_price'],
                            $priceData['xxl_price'],
                        );

                        foreach ($productSizes as $productSize) {
                            $sizeCost = $priceCalculationModel->getFeeFromSize($productSize, $priceInfo);
                            $shippingCosts[] = $sizeCost;
                        }
                        $cost = max($shippingCosts);
                    }
                }
                // Default rates
                if (is_null($cost)) {
                    $cost = $this->get_option('cost');
                }


                // Shipping for whole order
                return $cost;
            }

            /**
             * 
             * @param array $package
             * @param Eabi_Woocommerce_Postoffice_Model_Shippingprice $priceCalculationModel
             * @return float
             */
            public function item_shipping($package, $priceCalculationModel, $priceData) {
                // Per item shipping so we pass an array of costs (per item) instead of a single value
                $amountOfFreeBoxes = (int) $this->get_option('free_boxes');

                $weightSet = 1;
                $packageWeight = array_sum($this->_getPackageWeights($package));
                $shippingCosts = array();

                $packageWeights = $this->_getPackageWeights($package);
                $cost = null;

                if ($priceData) {
                    if (isset($priceData['xs_price'])) {

                        $productSizes = $priceCalculationModel->getProductSizes($package);
                        $priceInfo = array(
                            $priceData['xs_price'],
                            $priceData['s_price'],
                            $priceData['m_price'],
                            $priceData['l_price'],
                            $priceData['xl_price'],
                            $priceData['xxl_price'],
                        );
                        foreach ($productSizes as $productSize) {
                            $sizeCost = $priceCalculationModel->getFeeFromSize($productSize, $priceInfo);
                            for ($i = 0; $i < $productSize['q']; $i++) {
                                $shippingCosts[] = $sizeCost;
                            }
                        }
                        if ($amountOfFreeBoxes > 0) {
                            $numberOfDesiredItems = ceil(1 / (1 + $amountOfFreeBoxes) * count($shippingCosts));
                            $cost = 0;
                            for ($i = 0; $i < $numberOfDesiredItems; $i++) {
                                $cost += $shippingCosts[$i];
                            }
                        } else {
                            $cost = array_sum($shippingCosts);
                        }
                    }
                }

                if (is_null($cost)) {
                    // Shipping per item
                    $costs = array();
                    foreach ($package['contents'] as $item_id => $values) {
                        $_product = $values['data'];

                        if ($values['quantity'] > 0 && $_product->needs_shipping()) {
                            $itemcost = $this->get_option('cost');

                            for ($q = 0; $q < $values['quantity']; $q++) {
                                $costs[] = $itemcost;
                            }
//                            $costs[$item_id] = ( ( $cost ) * $values['quantity'] );
                        }
                    }

                    if ($amountOfFreeBoxes > 0) {
                        $cost = 0;
                        $numberOfDesiredItems = ceil(1 / (1 + $amountOfFreeBoxes) * count($costs));
                        for ($i = 0; $i < $numberOfDesiredItems; $i++) {
                            $cost += $costs[$i];
                        }
                    } else {
                        $cost = array_sum($costs);
                    }
                }




                return $cost;
            }

            public function init_form_fields() {
                $woocommerce = $this->helper()->getWooCommerce();

                $columnsBlock = $this->helper()->getBlock('countryprice');
                /* @var $columnsBlock Eabi_Woocommerce_Itella_Block_Countryprice */
                $origColumns = $columnsBlock->getColumns();
                $xxlValue = array(
                    'label' => __('XXL price', WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN),
                    'name' => 'xxl_price',
                    'type' => 'text',
                    'class' => '',
                    'style' => '',
                );
                array_splice($origColumns, 6, 0, array($xxlValue));
                $columns = $origColumns;


                $this->form_fields = array(
                    'licence' => array(
                        'title' => __('Licence', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'licence_state',
                        'label' => __('Status of current plugins licence', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => '',
//                        'methods' => array('itella_smartpost_estonia', 'itella_smartexpress_estonia', 'itella_smartkuller_estonia', 'eabi_itella_postoffice'),
                    ),
                    'enabled' => array(
                        'title' => __('Enable/Disable', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'checkbox',
                        'label' => __('Enable this shipping method', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => 'no'
                    ),
                    'title' => array(
                        'title' => __('Method Title', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'description' => __('This controls the title which the user sees during checkout.', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => $this->method_title,
                    ),
                    'price_per_country' => array(
                        'title' => __('Shipping Fee per country', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'countryprice',
                        'description' => __('Shipping fee excluding tax. Enter an amount, e.g. 2.50.', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'columns' => $columns,
                        'default' => $this->getDefaultPrices(),
                    ),
                    'cost' => array(
                        'title' => __('Shipping Fee', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'description' => __('Shipping fee excluding tax. Enter an amount, e.g. 2.50. (used, when fee for country is not found)', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => $this->getDefaultCost(),
                    ),
                    
                    'availability' => array(
                        'title' => __('Method availability', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'select',
                        'default' => 'specific',
                        'class' => 'availability',
                        'options' => array(
                            'all' => __('All allowed countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'specific' => __('Specific Countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                        )
                    ),
                    'countries' => array(
                        'title' => __('Specific Countries', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'multiselect',
                        'class' => 'chosen_select',
                        'css' => 'width: 450px;',
                        'default' => $this->getSupportedCountries(),
                        'options' => $woocommerce->countries->countries
                    ),
                    'max_weight' => array(
                        'title' => __('Maximum weight allowed', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'description' => __('If cart contains product over the weight, this shipping method is not available', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => '25'
                    ),
                    'use_per_item_weights' => array(
                        'title' => __('Maximum weight limits are calculated per each item', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'checkbox',
                        'label' => __('When disabled, then weight of whole cart is checked against maximum weight limit', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => 'yes'
                    ),
                    'min_amount' => array(
                        'title' => __('Enable this method from cart subtotal', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'description' => __('Empty or 0 disables this setting', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'default' => ''
                    ),
                    'type' => array(
                        'title' => __('Calculation Type', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'select',
                        'description' => '',
                        'default' => 'order',
                        'options' => array(
                            'order' => __('Per Order - charge shipping for the entire order as a whole', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'item' => __('Per Item - charge shipping for each item individually', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        )
                    ),
                    'free_boxes' => array(
                        'title' => __('Amount of free boxes per each paid box', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'description' => __('Used only when calcultion type is *Per Item*', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'default' => ''
                    ),
                    'tax_status' => array(
                        'title' => __('Tax Status', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'select',
                        'description' => '',
                        'default' => 'taxable',
                        'options' => array(
                            'taxable' => __('Taxable', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'none' => __('None', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)
                        )
                    ),
                    'enable_free' => array(
                        'title' => __('Enable free shipping', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'checkbox',
                        'label' => __('Allow free shipping', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => 'no'
                    ),
                    'free_from' => array(
                        'title' => __('Free shipping from cart subtotal', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'description' => __('Free shipping if cart subtotal is equal or greater than amount specified', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => ''
                    ),
                    'free_from_qty' => array(
                        'title' => __('Free shipping from cart quantity', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'description' => __('Free shipping if number of items in cart is equal or greater than amount specified. Empty or 0 disables this setting', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => ''
                    ),
                    'office_width' => array(
                        'title' => __('Pickup points selection menu width in pixels', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'text',
                        'default' => '250'
                    ),
                    'enable_log' => array(
                        'title' => __('Enable logging', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'type' => 'eabi_log',
                        'label' => __('Enable logging', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'default' => 'no'
                    ),
                    
                );
            }

            public function getTerminalTitle($office) {
                return htmlspecialchars(__($office['name'], WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN));
            }

            public function getFullTerminalTitle($office) {
                return htmlspecialchars(__($office['name'], WC_Itella_Smartpost_Estonia::PLUGIN_TEXT_DOMAIN));
            }

            public function getSupportedCountries() {
                return array('EE');
            }

            public function add_itella_smartkuller_estonia($methods) {
                $methods[] = &$this;
                return $methods;
            }

        }

        new WC_Itella_Smartpost_Estonia();
        new WC_Itella_Smartexpress_Estonia();
        new WC_Itella_Smartkuller_Estonia();
        new WC_Itella_Postoffice_Finland();
    }

    add_action('woocommerce_shipping_init', 'woocommerce_shipping_smartpost_estonia_init');
}