<?php

require_once 'contact-form-acf.php';
require_once 'contact-form-shortcode.php';

// Add custom endpoint to verify reCAPTCHA token
add_action( 'rest_api_init', 'register_verify_recaptcha_endpoint' );

function register_verify_recaptcha_endpoint() {
    register_rest_route( 'wp/v2', 'verify-recaptcha', array(
        'methods' => 'POST',
        'callback' => 'verify_recaptcha_callback',
    ) );
}

// Callback function to verify reCAPTCHA token
function verify_recaptcha_callback( $request ) {
    $recaptcha_secret_key = get_field('captcha_secret', 'options');
    $recaptcha_response = $request->get_param( 'recaptcha_token' );

    $verify_url = 'https://www.google.com/recaptcha/api/siteverify';
    $verify_data = array(
        'secret' => $recaptcha_secret_key,
        'response' => $recaptcha_response
    );

    $verify_options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($verify_data)
        )
    );

    $verify_context  = stream_context_create($verify_options);
    $verify_result = file_get_contents($verify_url, false, $verify_context);
    $verify_response = json_decode($verify_result);

    if ($verify_response && $verify_response->success) {
        // reCAPTCHA verification successful
        return rest_ensure_response( array( 'success' => true ) );
    } else {
        // reCAPTCHA verification failed
        return rest_ensure_response( array( 'success' => false ) );
    }
}
