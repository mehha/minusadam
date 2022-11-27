<?php
/*
  Plugin Name: E-Abi Woocommerce Itella Estonia Autosend method plugin
  Plugin URI: https://www.e-abi.ee/
  Description: Adds Itella Estonian automatic data sending methods to Woocommerce instance
  Version: 1.9
  Author: Matis Halmann, Aktsiamaailm LLC
  Author URI: https://www.e-abi.ee/
  Copyright: (c) Aktsiamaailm LLC
  License: Aktsiamaailm LLC License
  License URI: https://www.e-abi.ee/litsentsitingimused
 */

/* 
 *    *  (c) 2017 Aktsiamaailm OÜ - Kõik õigused kaitstud
 *  Litsentsitingimused on saadaval http://www.e-abi.ee/litsentsitingimused
 *  
 *  (c) 2017 Aktsiamaailm OÜ - All rights reserved
 *  Licence terms are available at http://en.e-abi.ee/litsentsitingimused
 *  

 */


if (!function_exists('is_eabi_postoffice_active')) {
    require_once('includes/postoffice-functions.php');
}

if (is_eabi_postoffice_active()) {
    load_plugin_textdomain('wc_itella_smartpost_estonia_autosend', false, dirname(plugin_basename(__FILE__)) . '/');
    
    function woocommerce_shipping_eabi_smartpost_estonia_autosend_init() {
        if (version_compare(WC_Eabi_Postoffice::instance()->getVersion(), '1.7', '<')) {
            //if postoffice version less than 1.7, then return
            return;
        }
        if (!class_exists('WC_Itella_Smartpost_Estonia_Autosend')) {
            if (!class_exists('Eabi_Itella_Smartpost_Estonia_Api')) {
                require_once 'includes/class-itella-smartpost-estonia-api.php';
            }
            
            
            class WC_Itella_Smartpost_Estonia_Autosend {
                public $id = 'eabi_itella_smartpost';
                const PLUGIN_TEXT_DOMAIN = 'wc_itella_smartpost_estonia_autosend';
                public function __construct() {
                    
                    if (is_admin()) {

                        //add extra form fields
                        add_filter('woocommerce_settings_api_form_fields_' . $this->id, array(&$this, 'addSettingsToForm'), 10, 1);
                        add_filter('woocommerce_settings_api_form_fields_eabi_itella_smartexpress', array(&$this, 'addServicesToFormE'), 10, 1);
                        add_filter('woocommerce_settings_api_form_fields_eabi_itella_smartkuller', array(&$this, 'addServicesToFormK'), 10, 1);
                        add_filter('woocommerce_settings_api_form_fields_eabi_itella_postoffice', array(&$this, 'addServicesToFormP'), 10, 1);

                        //add extra licence fields
                        add_action('eabi_woocommerce_postoffice_eabi_itella_smartpost_licence_status_display', array(&$this, 'addAutosendLicenceDisplay'), 10, 2);
                        add_action('eabi_woocommerce_postoffice_eabi_itella_smartexpress_licence_status_display', array(&$this, 'addAutosendLicenceDisplay'), 10, 2);
                        add_action('eabi_woocommerce_postoffice_eabi_itella_smartkuller_licence_status_display', array(&$this, 'addAutosendLicenceDisplay'), 10, 2);
                        add_action('eabi_woocommerce_postoffice_eabi_itella_postoffice_licence_status_display', array(&$this, 'addAutosendLicenceDisplay'), 10, 2);
                    }
                    //add automatic datasend actions
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_AUTOSEND . '_eabi_itella_smartpost', array(&$this, 'autoSendData'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_AUTOSEND . '_eabi_itella_smartexpress', array(&$this, 'autoSendData'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_AUTOSEND . '_eabi_itella_smartkuller', array(&$this, 'autoSendData'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_AUTOSEND . '_eabi_itella_postoffice', array(&$this, 'autoSendData'), 10, 5);

                    //add print packing slip actions
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_PRINT_PACKING_SLIP . '_eabi_itella_smartpost', array(&$this, 'printPackingSlip'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_PRINT_PACKING_SLIP . '_eabi_itella_smartexpress', array(&$this, 'printPackingSlip'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_PRINT_PACKING_SLIP . '_eabi_itella_smartkuller', array(&$this, 'printPackingSlip'), 10, 5);
                    add_filter('eabi_postoffice_action_' . WC_Eabi_Postoffice::ACTION_PRINT_PACKING_SLIP . '_eabi_itella_postoffice', array(&$this, 'printPackingSlip'), 10, 5);
                    
                    
                    add_filter('eabi_itella_autosend_data_before', array($this, 'addServicesFromConfiguration'), 10, 7);
                    
                }
                
                /**
                 * 
                 * @param WC_Order $order
                 * @param WC_Eabi_Postoffice $instance
                 * @return string
                 */
                protected function _getShippingCountry($order, $instance) {
                    $shipping_country = $this->_getWooOrderProperty($order, 'shipping_country');
                    if (!$shipping_country) {
                        $shipping_country = get_option('woocommerce_default_country');
                    }
                    if (!$shipping_country) {
                        $shipping_country = $instance->getFirstSupportedCountry();
                    }
                    return $shipping_country;
                }
                

                /**
                 * 
                 * @param array $autoSendResult
                 * @param WC_Order $order
                 * @param string $pickupLocationId
                 * @param WC_Eabi_Postoffice $shippingModel
                 * @param WC_Eabi_Postoffice $mainShippingModel
                 * @return array
                 */
                public function autoSendData($autoSendResult, $order, $pickupLocationId, $shippingModel, $mainShippingModel) {
                    $comment = '';
                    $barCodes = array();
                    $items = array();
                    
                    $parcelQty = $this->_getNumberOfPackagesForOrder($order, $shippingModel);
                    $selectedOffice = $shippingModel->getTerminal($pickupLocationId);
                    $order_shipping_country = $this->_getShippingCountry($order, $shippingModel);
                    
                    $phoneNumbers = WC_Eabi_Postoffice::instance()->helper()->getDialCodeHelper()
                            ->separatePhoneNumberFromCountryCode($this->_getWooOrderProperty($order, 'billing_phone'), $this->_getWooOrderProperty($order, 'shipping_country'));
                    
                    $phone = $phoneNumbers['dial_code'].$phoneNumbers['phone_number'];
                    
                    $servicesDefinitions = $this->_decodeServiceMatrix($shippingModel->get_option('senddata_service_country'));
                    
                    $senderCountry = 'EE'; //only EE is supported for now
                    $senderPhoneNumbers = WC_Eabi_Postoffice::instance()->helper()->getDialCodeHelper()
                            ->separatePhoneNumberFromCountryCode($mainShippingModel->get_option('sender_phone'), $senderCountry);
                    $senderPhoneNumbers['phone_number'] = preg_replace("/[^0-9]/", '', $senderPhoneNumbers['phone_number']);
                    $senderPhone = $senderPhoneNumbers['dial_code'].$senderPhoneNumbers['phone_number'];
                    
                    
                    
                    if (!isset($servicesDefinitions[$order_shipping_country])) {
                        $message = sprintf(__('Services have not been defined for country %s, please verify your Itella configuration', self::PLUGIN_TEXT_DOMAIN), $this->_getWooOrderProperty($order, 'shipping_country'));
                        throw new Eabi_Woocommerce_Postoffice_Exception($message);
                    }

                    $serviceDefinition = $servicesDefinitions[$order_shipping_country];
                    
                    if ($shippingModel->id == 'eabi_itella_smartexpress') {
                        //SmartEXPRESS is extra service compared to original service, so we add it to the list anyway
                        $serviceDefinition['add_service'] .= ',Express';
                    }
                    


                    $codCurrency = trim($serviceDefinition['currency']);
                    $orderItemSets = $this->_getOrderItemsInSets($order);
                    $codAmount = 0;
                    
                    if (!$order->is_paid()) {
                        $codAmount = WC_Eabi_Postoffice::instance()
                                ->helper()
                                ->toTargetCurrency($order->get_total(), get_woocommerce_currency(), $codCurrency);
                    }

                    $parentItem = array(
                        //no more self sending of barcodes
//            'barcode' => $this->_getBarCode($order->getIncrementId(), $this->getConfigData('sendpackage_smartid')),
                        'reference' => (string)$this->_getWooOrderProperty($order, 'id'),
//            'content' => '', //TODO maybe list of ordered items go here
//            'orderparent' => '',
                        'weight' => $this->_getOrderItemsWeight($orderItemSets[0]),
                        'size' => $this->_getOrderItemsParcelSize($orderItemSets[0]),
                        'sender' => array(
                            'name' => $mainShippingModel->get_option('sender_name'),
                            'phone' => $mainShippingModel->get_option('sender_phone'),
                            'email' => $mainShippingModel->get_option('sender_email'),
                            'cash' => '0',
                        ),
                        'recipient' => array(
                            'name' => implode(' ', array_filter(array($this->_getWooOrderProperty($order, 'shipping_company'), $this->_getWooOrderProperty($order, 'shipping_first_name'), $this->_getWooOrderProperty($order, 'shipping_last_name')), 'strlen')),
                            'phone' => $phone,
                            'email' => $this->_getWooOrderProperty($order, 'billing_email'),
                            'cash' => (string) $codAmount,
                        ),
                        'destination' => array(
//                'place_id' => $selectedOfficeId,
//                'postalcode' => $selectedOffice->getZipCode(),
//                'routingcode' => $targetTerminalOrigData['routingcode'],
                        ),
                        'additionalservices' => array(
                            'express' => 'false',
                            'idcheck' => 'false',
                            'agecheck' => 'false',
                            'notifyemail' => '',
                            'notifyphone' => '',
                            'paidbyrecipient' => 'false',
                        )
                    );
                    if ($shippingModel->id == 'eabi_itella_smartkuller') {
                        $parentItem['destination'] = $this->_fillAddress($selectedOffice, $order, $mainShippingModel, $order_shipping_country);
                        
                    } else {
                        $parentItem['destination'] = $this->_fillDestination($selectedOffice, $order, $order_shipping_country);
                        
                    }

                    $extraServices = $this->_splitExtraServices($serviceDefinition['add_service']);

                    if (count($extraServices)) {
                        $this->_processExtraServices($extraServices, $parentItem['additionalservices'], $mainShippingModel->get_option('sender_email'), $senderPhone);
                    }
                    
                    if ($mainShippingModel->get_option('add_sender_info') != 'yes') {
                        unset($parentItem['sender']);
                    }


                    $items[] = $parentItem;

                    //TODO: add other items to list as well

                    $requestData = array(
                        'orders' => array(
                            'item' => $items,
                        ),
                    );
                    



                    $packageValue = WC_Eabi_Postoffice::instance()
                                ->helper()
                                ->toTargetCurrency($order->get_total(), get_woocommerce_currency(), $codCurrency);
                    
                    $api = $this->_getApi($shippingModel, $mainShippingModel);
                    
                    $requestData = apply_filters('eabi_itella_autosend_data_before', $requestData, $order, $packageValue, $selectedOffice, $codCurrency, $shippingModel, $mainShippingModel);
                    
                    $requestResult = $api->sendParcelData($requestData);

                    if (count($requestResult)) {
                        foreach ($requestResult as $r) {
                            $barCodes[] = $r['barcode'];
                            //TODO: add doorcode support
                        }
                    }
                    if (count($barCodes)) {
                        return array('barcodes' => $barCodes);
                    }
                    return array();
                }
                
                
                /**
                 * 
                 * @param string $packingSlipResult
                 * @param WC_Order $order
                 * @param string $barcode
                 * @param WC_Eabi_Postoffice $shippingModel
                 * @param WC_Eabi_Postoffice $mainShippingModel
                 * @return array
                 */
                public function printPackingSlip($packingSlipResult, $order, $barcode, $shippingModel, $mainShippingModel) {
                    if (is_string($barcode) || is_array($barcode)) {
                        $api = $this->_getApi($shippingModel, $mainShippingModel);
                        $res = $api->getAddressCardFile(array(
                            'barcode' => $barcode,
                        ));
                        return $res;
                    }
                    return false;
                }
                

                /**
                 * 
                 * @param array $requestData
                 * @param WC_Order $order
                 * @param float $packageValue
                 * @param array $selectedOffice
                 * @param string $codCurrency
                 * @param WC_Eabi_Postoffice $shippingModel
                 * @param WC_Eabi_Postoffice $mainShippingModel
                 * @return array
                 */
                public function addServicesFromConfiguration($requestData, $order, $packageValue, $selectedOffice, $codCurrency, $shippingModel, $mainShippingModel) {

                    $fieldService = $mainShippingModel->get_option('field_product_service');
                    $fieldIdCode = $mainShippingModel->get_option('field_customer_id');
                    $senderCountry = 'EE'; //only EE is supported for now
                    $senderPhoneNumbers = WC_Eabi_Postoffice::instance()->helper()->getDialCodeHelper()
                            ->separatePhoneNumberFromCountryCode($mainShippingModel->get_option('sender_phone'), $senderCountry);
                    $senderPhoneNumbers['phone_number'] = preg_replace("/[^0-9]/", '', $senderPhoneNumbers['phone_number']);
                    $senderPhone = $senderPhoneNumbers['dial_code'].$senderPhoneNumbers['phone_number'];
                    
                    
                    $wasServicesProcessed = false;
                    //implement additional services from the products
                    if ($fieldService) {

                        foreach ($order->get_items() as $orderItem) {
                            $product = $order->get_product_from_item($orderItem);
                            if (!$product || !$product->exists()) {
                                continue;
                            }
                            $serviceFieldValue = get_post_meta($this->_getWooProductProperty($product, 'id'), $fieldService, true);
                            if (!$serviceFieldValue) {
                                continue;
                            }
                            $servicesFromProduct = $this->_splitExtraServices($serviceFieldValue);
                            if (count($servicesFromProduct)) {
                                $this->_processExtraServices($servicesFromProduct, $requestData['orders']['item'][0]['additionalservices'], $mainShippingModel->get_option('sender_email'), $senderPhone);
                                $wasServicesProcessed = true;
                            }
                        }
                    }

                    //check if we have idcheck
                    if ($requestData['orders']['item'][0]['additionalservices']['idcheck'] == 'true' && (!isset($requestData['orders']['item'][0]['recipient']['idcode']) || !$requestData['orders']['item'][0]['recipient']['idcode'])) {
                        if (!$fieldIdCode) {
                            throw new Eabi_Woocommerce_Postoffice_Exception(__('IdCheck service requires social security number', self::PLUGIN_TEXT_DOMAIN));
                        }
                        $user = WC_Eabi_Postoffice::instance()->getUserFromOrder($order);
                        if (!$user) {
                            throw new Eabi_Woocommerce_Postoffice_Exception(__('IdCheck service requires registered customer', self::PLUGIN_TEXT_DOMAIN));
                        }
                        $socialSecurityCode = get_user_meta($user->ID, $fieldIdCode, true);
                        if (!$socialSecurityCode) {
                            throw new Eabi_Woocommerce_Postoffice_Exception(sprintf(__('IdCheck service requires customer to have social security number in attribute %s', self::PLUGIN_TEXT_DOMAIN), $fieldIdCode));
                        }
                        //set the idcode
                        $requestData['orders']['item'][0]['recipient']['idcode'] = $socialSecurityCode;
                        $wasServicesProcessed = true;
                    }




                    return $requestData;
                }

                /**
                 * 
                 * @param type $supportedMethod
                 * @param type $block
                 */
                public function addAutosendLicenceDisplay($supportedMethod, $block) {
                    foreach ($supportedMethod->getSupportedCountries() as $supportedCountry) {
                        ?><tr>
                              <td><?php echo htmlspecialchars(__('Automatic data sending', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN)) ?></td>
                              <td><?php echo htmlspecialchars($block->getCountryName($supportedCountry)); ?></td>
                              <td><?php echo $block->getLicenceStatus('autosend/' . $supportedMethod->id, $supportedCountry); ?></td>
                         </tr><?php
                    }
                }

                public function addSettingsToForm($settings) {
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceCodeFields(), 'price_per_country');
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceGenericFields(), 'sort_terminals');
                    return $settings;
                }
                
                public function addServicesToForm($settings) {
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceCodeFields(), 'price_per_country');
                    return $settings;
                }
                public function addServicesToFormE($settings) {
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceCodeFields($this->_getDefaultServicesE()), 'price_per_country');
                    return $settings;
                }
                public function addServicesToFormK($settings) {
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceCodeFields($this->_getDefaultServicesK()), 'price_per_country');
                    return $settings;
                }
                public function addServicesToFormP($settings) {
                    $settings = WC_Eabi_Postoffice::instance()->helper()
                            ->addArrayAfterKey($settings, $this->_getServiceCodeFields($this->_getDefaultServicesP()), 'price_per_country');
                    return $settings;
                }
                
                
                
                protected function _getServiceCodeFields($defaults = false) {
                    if ($defaults === false) {
                        $defaults = $this->_getDefaultServices();
                    }
                    
                    return array(
                        'senddata_service_country' => array(
                            'title' => __('Itella services', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'countryoverride',
                            'description' => __('Used only with automatic data sending. Allowed values are any of [Express,IdCheck,AgeCheck,NotifyEmail,NotifyPhone,PaidByRecipient].', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'default' => $defaults,
                            'columns' => array(
                                array(
                                    'label' => __('Country', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                    'name' => 'country_id',
                                    'type' => 'select',
                                    'class' => '',
                                    'style' => '',
                                    'options' => WC_Eabi_Postoffice::instance()->helper()->toLabelValues(WC_Eabi_Postoffice::instance()->helper()->getServiceCountries()),
                                ),
                                array(
                                    'label' => __('Additional service codes (comma separated)', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                                    'name' => 'add_service',
                                    'type' => 'text',
                                    'class' => '',
                                    'style' => '',
                                ),
                                array(
                                    'label' => __('Currency', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                                    'name' => 'currency',
                                    'type' => 'select',
                                    'class' => '',
                                    'style' => '',
                                    'options' => WC_Eabi_Postoffice::instance()->helper()->toLabelValues(get_woocommerce_currencies()),
                                ),
                            ),
                        ),
                    );
                    
                    
                }
                
                
                protected function _getServiceGenericFields() {
                    $sendEventOptions = array(
                        'after_payment' => __('After order payment', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'after_shipment' => __('After order shipping', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                        'manual' => __('I will send data myself by clicking on the button', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                    );
                    
                    $itellaLabels = array(
                        'A5' => 'A5',
                        'A6' => 'A6',
                        'A6-4' => 'A6-4',
                        'A7' => 'A7',
                        'A7-8' => 'A7-8',
                    );
                    
                    return array(
                        'senddata_enable' => array(
                            'title' => __('Enable automatic data sending to Itella server', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('Only if the order has been paid for or the order is COD', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no',
                        ),
                        'sendpackage_username' => array(
                            'title' => __('Itella self-service username', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '',
                        ),
                        'sendpackage_password' => array(
                            'title' => __('Itella self-service password', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'password',
                            'default' => '',
                        ),
                        'senddata_event' => array(
                            'title' => __('When to send parcel data', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'options' => $sendEventOptions,
                            'default' => 'manual',
                        ),
                        /*
                        'autosend_emails_to' => array(
                            'title' => __('Send order confirmation with barcode to following e-mails after parcel data send success', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '',
                        ),
                         * 
                         */
                        'add_sender_info' => array(
                            'title' => __('Add sender info to parcel data', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'description' => __('Itella business clients should leave this setting disabled or it may cause a failure in packing slip creation', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'checkbox',
                            'label' => __('Add sender info to parcel data', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'default' => 'no',
                        ),
                        
                        'sender_name' => array(
                            'title' => __('Itella parcel sender name', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '',
                        ),
                        'sender_phone' => array(
                            'title' => __('Itella parcel sender phone', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '',
                        ),
                        'sender_email' => array(
                            'title' => __('Itella parcel sender email', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => '',
                        ),
                        'senddata_label' => array(
                            'title' => __('Packing slip format', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'select',
                            'default' => 'A5',
                            'options' => $itellaLabels,
                        ),
                        'field_product_service' => array(
                            'title' => __('Product attribute name for declaring extra services in a product', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'description' => __('Refer to readme.txt for extra information about this feature', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => 'eabi_itella_service',
                        ),
                        'field_customer_id' => array(
                            'title' => __('Customer attribute name, which holds social security code', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'description' => __('Refer to readme.txt for extra information about this feature', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN),
                            'type' => 'text',
                            'default' => 'eabi_social_security_code',
                        ),
                        
                        
                    );
                    
                }
                
                
                /**
                 * <p>Takes comma separated value as input and returns indexed array as output</p>
                 * <p>Input is cleaned and trimmed from whitespace</p>
                 * @param string $value
                 * @return array
                 */
                protected function _splitExtraServices($value) {
                    $extraServicesFromConfig = explode(",", $value);
                    return array_filter(array_map('trim', $extraServicesFromConfig));
                }

                /**
                 * 
                 * @param array $selectedOffice
                 * @param WC_Order $order
                 * @return array
                 */
                protected function _fillDestination($selectedOffice, $order, $order_shipping_country) {
                    $targetTerminalOrigData = @json_decode($selectedOffice['cached_attributes'], true);
                    
                    if ($order_shipping_country == 'EE') {
                        return array(
                            'place_id' => $selectedOffice['remote_place_id'],
                        );
                    } else if ($order_shipping_country == 'FI') {
                        return array(
                            'postalcode' => $selectedOffice['zip_code'],
                            'routingcode' => $targetTerminalOrigData['routingcode'],
                        );
                    } else {
                        return null;
                    }
                }
                /**
                 * 
                 * @param array $selectedOffice
                 * @param WC_Order $order
                 * @return array
                 */
                protected function _fillAddress($selectedOffice, $order, $mainShippingModel, $order_shipping_country) {
                    $addressDetails = WC_Eabi_Postoffice::instance()
                            ->helper()
                            ->getAddressHelper()
                            ->separateHouseApartmentFromStreet($order, $mainShippingModel);

                    return array(
                        'postalcode' => $this->_getWooOrderProperty($order, 'shipping_postcode'),
                        'street' => $addressDetails['street'],
                        'house' => $addressDetails['house'],
                        'apartment' => $addressDetails['apartment'],
                        'city' => implode(', ', array_filter(array($this->_getWooOrderProperty($order, 'shipping_city'), $this->_getWooOrderProperty($order, 'shipping_state')), 'trim')),
                        'country' => $order_shipping_country,
                        'details' => '',
                        'timewindow' => $selectedOffice['remote_place_id'],
                    );
                }

                protected function _processExtraServices(array $extraservices = array(), &$res = array(), $email = '', $phone = '') {
//        $res = array();
                    $allowed = array(
                        'express', 'idcheck', 'agecheck', 'paidbyrecipient',
                    );
                    $nofityPhone = array('notifyphone');
                    $nofityEmail = array('notifyemail');

                    foreach ($extraservices as $extraservice) {

                        if (in_array(strtolower($extraservice), $allowed)) {
                            $res[strtolower($extraservice)] = 'true';
                        }
                        if (in_array(strtolower($extraservice), $nofityPhone)) {
                            $res[strtolower($extraservice)] = $phone;
                        }
                        if (in_array(strtolower($extraservice), $nofityEmail)) {
                            $res[strtolower($extraservice)] = $email;
                        }
                    }


                    return $res;
                }

                /**
                 * <p>Same as <code>_decodeShippingMatrix</code> but meant for decoding extra services</p>
                 * @param string $input
                 * @return array
                 */
                protected function _decodeServiceMatrix($input) {
                    $shippingMatrix = @json_decode($input, true);
                    $result = array();
                    if (!is_array($shippingMatrix)) {
                        return $result;
                    }
                    foreach ($shippingMatrix as $countryDefinition) {
                        $result[$countryDefinition['country_id']] = $countryDefinition;
                    }
                    return $result;
                }

                /**
                 * <p>Used to split an order into multiple parts for data sending</p>
                 * <p>As of now no splitting is performed and array of 1 element is returned</p>
                 * @param WC_Order $order
                 * @return array
                 */
                protected function _getOrderItemsInSets($order) {
                    $orderItems = array();
                    foreach ($order->get_items() as $orderItem) {
                        $product = $order->get_product_from_item($orderItem);
                        if ($product && $product->exists() && !$product->is_downloadable()) {
                            /* @var $product WC_Product */
                            $orderItem['kg_weight'] = WC_Eabi_Postoffice::instance()->toKg($this->_getWooProductProperty($product, 'weight'));
                            $orderItem['cm_height'] = WC_Eabi_Postoffice::instance()->toCm($this->_getWooProductProperty($product, 'height'));
                            $orderItem['cm_width'] = WC_Eabi_Postoffice::instance()->toCm($this->_getWooProductProperty($product, 'width'));
                            $orderItem['cm_length'] = WC_Eabi_Postoffice::instance()->toCm($this->_getWooProductProperty($product, 'length'));
                            $orderItems[] = $orderItem;
                        }
                        
                        
                    }
                    return array(
                        $orderItems,
                    );
                }

                /**
                 * <p>Returns number or parcels for the order according to Maximum Package Weight defined in Itella settings</p>
                 * @param WC_Order $order
                 * @param WC_Eabi_Postoffice $shippingMethod
                 * @return int
                 * @see WC_Eabi_Postoffice::getNumberOfPackagesFromItemWeights()
                 */
                protected function _getNumberOfPackagesForOrder($order, $shippingMethod) {
                    $productWeights = array();
                    foreach ($order->get_items() as $orderItem) {
                        $product = $order->get_product_from_item($orderItem);
                        if ($product && $product->exists() && !$product->is_downloadable()) {
                            /* @var $product WC_Product */
                            for ($i = 0; $i < ($orderItem['qty'] - 0); $i++) {
                                $productWeights[] = WC_Eabi_Postoffice::instance()->toKg($this->_getWooProductProperty($product, 'weight'));
                            }
                        }
                    }
                    return WC_Eabi_Postoffice::instance()->helper()->getNumberOfPackagesFromItemWeights($productWeights, $shippingMethod->get_option('max_weight'));
                }

                /**
                 * <p>Returns order items weight in kilograms</p>
                 * @param array $orderItems
                 * @return string
                 */
                protected function _getOrderItemsWeight($orderItems) {
                    $weigtht = 0;
                    foreach ($orderItems as $orderItem) {
                        $weigtht += ($orderItem['kg_weight'] * ($orderItem['qty'] - 0));
                    }
                    return (string) round($weigtht, 3);
                }

                /**
                 * <p>Returns order items parcel size, 1 = smallest, 4 = largest</p>
                 * @param array $orderItems
                 * @return string
                 */
                protected function _getOrderItemsParcelSize($orderItems) {
                    return (string) 1;
                }
                
                private $_apis = array();

                
                /**
                 * 
                 * @param WC_Eabi_Postoffice $shippingModel
                 * @param WC_Eabi_Postoffice $mainShippingModel
                 * @return Eabi_Itella_Smartpost_Estonia_Api
                 */
                protected function _getApi($shippingModel, $mainShippingModel) {
                    $className = get_class($shippingModel);
                    if (!isset($this->_apis[$className])) {
                        $api = new Eabi_Itella_Smartpost_Estonia_Api();
                        $api->setMainShippingModel($mainShippingModel);
                        $api->setShippingModel($shippingModel);
                        $this->_apis[$className] = $api;
                    }
                    return $this->_apis[$className];
                }
                
                
                
                protected function _getDefaultServices() {
                    $defaultServices = array(
                        '_1436644244750_750' => array(
                            'country_id' => 'EE',
                            'add_service' => '',
                            'currency' => 'EUR',
                        ),
                        '_1436644244751_751' => array(
                            'country_id' => 'FI',
                            'add_service' => '',
                            'currency' => 'EUR',
                        ),
                    );
                    return json_encode($defaultServices);
                }
                protected function _getDefaultServicesE() {
                    $defaultServices = array(
                        '_1436644244750_750' => array(
                            'country_id' => 'EE',
                            'add_service' => '',
                            'currency' => 'EUR',
                        ),
                    );
                    return json_encode($defaultServices);
                }
                protected function _getDefaultServicesK() {
                    $defaultServices = array(
                        '_1436644244750_750' => array(
                            'country_id' => 'EE',
                            'add_service' => '',
                            'currency' => 'EUR',
                        ),
                    );
                    return json_encode($defaultServices);
                }
                protected function _getDefaultServicesP() {
                    $defaultServices = array(
                        '_1436644244751_751' => array(
                            'country_id' => 'FI',
                            'add_service' => '',
                            'currency' => 'EUR',
                        ),
                    );
                    return json_encode($defaultServices);
                }

                protected function _getWooOrderProperty($order, $property) {
                    if (version_compare(WOOCOMMERCE_VERSION, '3.0', '>=')) {
                        $functionName = 'get_' . $property;
                        return $order->$functionName();
                    } else {
                        return $order->$property;
                    }
                }
                protected function _getWooProductProperty($product, $property) {
                    if (version_compare(WOOCOMMERCE_VERSION, '3.0', '>=')) {
                        $functionName = 'get_' . $property;
                        return $product->$functionName();
                    } else {
                        return $product->$property;
                    }
                }

            }

            new WC_Itella_Smartpost_Estonia_Autosend();
            
        }
    }
    
    add_action('woocommerce_loaded', 'woocommerce_shipping_eabi_smartpost_estonia_autosend_init');
    
}