<?php

$acf_fields = array(
    'fields/general.php'
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
