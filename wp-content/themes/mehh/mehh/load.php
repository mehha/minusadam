<?php

$acf_fields = array(
    'page/page.php',
    'seo/seo.php',
    'contact-form/contact-form.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
