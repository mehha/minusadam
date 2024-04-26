<?php

$acf_fields = array(
    'page/page.php',
    'contact-form/contact-form.php',
    'bookings/bookings.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
