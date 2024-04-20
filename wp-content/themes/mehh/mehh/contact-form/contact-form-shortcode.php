<?php

//Add the shortcode
add_shortcode('contact-form', function ($atts = []) {
    shortcode_atts(
        ['recipient' => false],
        $atts
    );
    ob_start();
    print view('shortcodes.contact-form', $atts)->render();
    return ob_get_clean();
});
