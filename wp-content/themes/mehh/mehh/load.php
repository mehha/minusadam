<?php

$acf_fields = array(
    'general/acf-fields.php',
    'contact-form/contact-form.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
