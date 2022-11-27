<?php

/*
   *  (c) 2017 Aktsiamaailm OÜ - Kõik õigused kaitstud
 *  Litsentsitingimused on saadaval http://www.e-abi.ee/litsentsitingimused
 *  
 *  (c) 2017 Aktsiamaailm OÜ - All rights reserved
 *  Licence terms are available at http://en.e-abi.ee/litsentsitingimused
 *  

 */
if (!class_exists('Eabi_Woocommerce_Postoffice_Block_Array')) {
    WC_Eabi_Postoffice::instance()->helper()->getBlock('array');
}
/**
 * Description of Countryoverride
 *
 * @author Matis
 */
class Eabi_Woocommerce_Postoffice_Block_Countryoverride extends Eabi_Woocommerce_Postoffice_Block_Array {
    
    protected function _construct() {
        parent::_construct();
        $this->_columns = array(
            array(
                'label' => __('Country', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                'name' => 'country_id',
                'type' => 'select',
                'class' => '',
                'style' => '',
                'options' => WC_Eabi_Postoffice::instance()->helper()->toLabelValues(WC_Eabi_Postoffice::instance()->helper()->getWooCommerce()->countries->countries),
            ),
            array(
                'label' => __('Setting', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                'name' => 'setting',
                'type' => 'text',
                'class' => '',
                'style' => '',
            ),
            array(
                'label' => __('Value', WC_Eabi_Postoffice::PLUGIN_TEXT_DOMAIN),
                'name' => 'value',
                'type' => 'text',
                'class' => '',
                'style' => '',
            ),
        );
    }
    
}
