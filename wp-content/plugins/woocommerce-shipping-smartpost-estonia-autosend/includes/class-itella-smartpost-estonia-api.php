<?php

/*
   *  (c) 2017 Aktsiamaailm OÜ - Kõik õigused kaitstud
 *  Litsentsitingimused on saadaval http://www.e-abi.ee/litsentsitingimused
 *  
 *  (c) 2017 Aktsiamaailm OÜ - All rights reserved
 *  Licence terms are available at http://en.e-abi.ee/litsentsitingimused
 *  

 */

/**
 * Description of class-itella-smartpost-estonia-api
 *
 * @author Matis
 */
class Eabi_Itella_Smartpost_Estonia_Api {
    const TARGET_URL = 'https://iseteenindus.smartpost.ee/api/';
    const POST = 'POST';
    const GET = 'GET';
    
    /**
     *
     * @var WC_Eabi_Postoffice
     */
    protected $_shippingModel;
    
    /**
     *
     * @var WC_Eabi_Postoffice
     */
    protected $_mainShippingModel;

    
    public function __construct() {
        ;
    }
    
    
    
    
    public function getAddressCardFile($params) {
        $requestParams = array(
            'request' => 'labels',
        );
        $appendToUrl = http_build_query($requestParams, '', '&');
        $target = array();
        $params['format'] = $this->getMainShippingModel()->get_option('senddata_label');
        $target['labels'] = $params;
                
        return $this->sendRawData(strlen($appendToUrl)?'?'.$appendToUrl:'', $target, self::POST, true);
        
    }

    public function getParcelTerminals($params) {
        $requestParams = array(
            'request' => 'destinations',
            'country' => 'EE',
            'type' => 'APT',
        );
        
        
        foreach ($params as $k => $param) {
            $requestParams[$k] = $param;
        }
        $appendToUrl = http_build_query($requestParams, '', '&');
        
        $result = $this->sendRawData(strlen($appendToUrl)?'?'.$appendToUrl:'');
        return $result['destinations']['item'];
    }
    
    

    public function sendParcelData($params) {
        $requestParams = array(
            'request' => 'shipment',
        );
        $appendToUrl = http_build_query($requestParams, '', '&');
        $result = $this->sendRawData(strlen($appendToUrl)?'?'.$appendToUrl:'', $params, self::POST);
        if (isset($result['orders']['item']) && isset($result['orders']['item']['barcode'])) {
            $result['orders']['item'] = array($result['orders']['item']);
        }
        
        return $result['orders']['item'];
    }

    public function sendRawData($appendToUrl = '', $params = array(), $method = self::GET, $doNotDecodeXml = false){
        return $this->_getRequest($appendToUrl, $method, $params, self::TARGET_URL, $doNotDecodeXml);
    }
    
    
    protected function _getRequest($request = '', $method = self::GET, $params = array(), $url = null, $doNotDecodeXml = false) {
        if (!$url) {
            $url = self::TARGET_URL . $request;
        } else if (is_string ($url)) {
            $url = $url . $request;
        }
        
        $headers = array(
//            "Connection: close",
//            "Accept-encoding: gzip, deflate",
            "Content-Type: application/x-www-form-urlencoded",
            "User-Agent: Zend_Http_Client",
            "Authorization: Basic " . base64_encode($this->getMainShippingModel()->get_option('sendpackage_username').":".$this->getMainShippingModel()->get_option('sendpackage_password')),
        );
        
        $options = array(
            'http' => array(
                'method' => $method,
                'ignore_errors' => true,
                'header' =>  '',
                'timeout' => $this->getMainShippingModel()->get_option('http_request_timeout') > 10 ? $this->getMainShippingModel()->get_option('http_request_timeout') : 10,
            ),
        );
        
        
        if ($method != self::GET && count($params)) {
            reset($params);
            $messageType = key($params);
            if (is_array($params[$messageType]) && !isset($params[$messageType]['authentication'])) {
                //add authentication part to the xml
                $this->array_unshift_assoc($params[$messageType], 'authentication', array(
                    'user' => '***',
                    'password' => '***',
                ));
                $dataToBeSent = $params;
                $dataToBeSent[$messageType]['authentication']['user'] = $this->getMainShippingModel()->get_option('sendpackage_username');
                $dataToBeSent[$messageType]['authentication']['password'] = $this->getMainShippingModel()->get_option('sendpackage_password');
//                $client->setRawData($this->_getXmlHelper()->toXml($dataToBeSent), 'application/xml');
                $options['http']['content'] = WC_Eabi_Postoffice::instance()->helper()->getXmlParser()->toXml($dataToBeSent);
                $headers[] = 'Content-Length: '. strlen($options['http']['content']);
//                $params = $dataToBeSent;
            } else {
//                $client->setRawData($this->_getXmlHelper()->toXml($params), 'application/xml');
                $options['http']['content'] = WC_Eabi_Postoffice::instance()->helper()->getXmlParser()->toXml($params);
                $headers[] = 'Content-Length: '. strlen($options['http']['content']);
                
            }
            
            
            
            
        } else if (count($params)) {
            if (strpos($url, '?') !== false) {
                $url .= http_build_query($params);
            } else {
                $url .= '?' . http_build_query($params);
            }
        }
        $options['http']['header'] = implode("\r\n", $headers);
        

//        $client->setEncType('application/xml');
//        $client->setHeaders('Accept', 'application/xml');
        $context = stream_context_create($options);

        $resp = file_get_contents($url, false, $context);
        
        
        $dataToLog = array(
            'url' => $url,
            'method' => $method,
            'params' => $params,
//            'headers' => $options['http']['header'],
            'xml' => WC_Eabi_Postoffice::instance()->helper()->getXmlParser()->toXml($params),
        );
        //used to remove username and password from url, if they are added there for making log not to contain sensitive data
        $dataToLog['url'] = preg_replace('/\/[[:alnum:]\-_]+\:[[:alnum:]\-_]+@/', '/***:***@', $dataToLog['url']);
        
        $decodeResult = false;
        try {
            if ($doNotDecodeXml) {
                $decodeResult = $resp;
                
            } else {
                $decodeResult = @WC_Eabi_Postoffice::instance()->helper()->getXmlParser()->fromXml($resp, true);
            }
        } catch (Exception $ex) {
            $this->getShippingModel()
                    ->getLogger()->error(array(
                'exception with request' => $ex->__toString(),
            ));
        }
        if (!$decodeResult || !$this->isSuccessful($http_response_header[0])) {
            if (!$decodeResult) {
                $dataToLog['response-headers'] = $http_response_header;
                $dataToLog['response-raw'] = substr($resp, 0, 2000);
            } else {
                $dataToLog['response'] = $decodeResult;
            }
            $this->getShippingModel()
                    ->getLogger()->error($dataToLog);
            throw new Eabi_Woocommerce_Postoffice_Exception(sprintf(__('Itella Estonia API request failed with response: %s', WC_Itella_Smartpost_Estonia_Autosend::PLUGIN_TEXT_DOMAIN), $resp));
        }
        $dataToLog['response'] = $decodeResult;
        if ($doNotDecodeXml) {
            $dataToLog['response'] = '*** not decoded response, probably PDF or something similar ***';
        }
        
//        $dataToLog['client'] = $client;
            $this->getShippingModel()
                    ->getLogger()->debug($dataToLog);
        return $decodeResult;
    }

    protected function array_unshift_assoc(&$arr, $key, $val) {
        $arr = array_reverse($arr, true);
        $arr[$key] = $val;
        $arr = array_reverse($arr, true);
    }

    
    
    
    /**
     * 
     * @return WC_Eabi_Postoffice
     */
    public function getShippingModel() {
        return $this->_shippingModel;
    }

    /**
     * 
     * @return WC_Eabi_Postoffice
     */
    public function getMainShippingModel() {
        return $this->_mainShippingModel;
    }

    /**
     * 
     * @param WC_Eabi_Postoffice $shippingModel
     * @return Eabi_Itella_Smartpost_Estonia_Api
     */
    public function setShippingModel($shippingModel) {
        $this->_shippingModel = $shippingModel;
        return $this;
    }

    /**
     * 
     * @param WC_Eabi_Postoffice $shippingModel
     * @return Eabi_Itella_Smartpost_Estonia_Api
     */
    public function setMainShippingModel($mainShippingModel) {
        $this->_mainShippingModel = $mainShippingModel;
        return $this;
    }
    
    protected function isSuccessful($header) {
        $matches = array();
        preg_match('#HTTP/\d+\.\d+ (\d+)#', $header, $matches);
//        echo $matches[1]; // HTTP/1.1 410 Gone return 410
        return $matches[1] >= 200 && $matches[1] < 300;
    }
    


}

