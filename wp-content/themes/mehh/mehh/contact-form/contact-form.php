<?php

//Add the shortcode
add_shortcode('contact-form', function () {
    ob_start();
    print view('shortcodes.contact-form')->render();
    return ob_get_clean();
});
