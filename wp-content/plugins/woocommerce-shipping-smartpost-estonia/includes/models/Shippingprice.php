<?php

/*
   *  (c) 2017 Aktsiamaailm OÜ - Kõik õigused kaitstud
 *  Litsentsitingimused on saadaval http://www.e-abi.ee/litsentsitingimused
 *  
 *  (c) 2017 Aktsiamaailm OÜ - All rights reserved
 *  Licence terms are available at http://en.e-abi.ee/litsentsitingimused
 *  

 */
if (!class_exists('Eabi_Woocommerce_Postoffice_Model_Shippingprice')) {
    WC_Eabi_Postoffice::instance()->helper()->getModel('shippingprice');
}

/**
 * Description of Shippingprice
 *
 * @author Matis
 */
class Eabi_Woocommerce_Itella_Model_Shippingprice extends Eabi_Woocommerce_Postoffice_Model_Shippingprice {

    public function isAvailable($package) {
        $sizes = $this->getProductSizes($package);
        foreach ($sizes as $size) {
            if ($this->getFeeFromSize($size) === false) {
                return false;
            }
        }
        return true;
    }

    public function getProductSizes($package) {
        $sizes = array();
        foreach ($package['contents'] as $content) {
            $product = $content['data'];
            /* @var $product WC_Product_Simple */
            if ($product->needs_shipping()) {
                $productSize = $this->getProductSize($product, $content);
                $sizes[] = $productSize;
            }
        }
        return $sizes;
    }

    public function getFeeFromSize($productSize, $costs = array()) {
        $size = array(
            $productSize['w'],
            $productSize['d'],
            $productSize['h'],
        );
        sort($size);
        if ($size[0] > 36 || max($size) > 60) {
            return false;
        }


        if ($size[0] <= 5 && $size[1] <= 36 && $size[2] <= 45 && $productSize['weight'] <= 5) {
            $cost = 0;
        } else if ($size[0] <= 12 && $size[1] <= 36) {
            $cost = 1;
        } else if ($size[0] <= 20 && $size[1] <= 36) {
            $cost = 2;
        } else if ($size[0] <= 36 && $size[1] <= 38) {
            $cost = 3;
        } else if ($size[0] <= 36) {
            $cost = 4;
        }
        if ($costs && isset($costs[$cost])) {
            return $costs[$cost];
        }
        return $cost;
    }

}
