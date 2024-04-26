<?php

require_once 'bookings-acf.php';

//Add endpoint
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/bookings/', array(
        'methods' => 'GET',
        'callback' => 'get_acf_bookings',
    ));
});

function get_acf_bookings() {
    $bookings = get_field('bookings', 'options'); // Assuming your bookings are stored as an option
    if (empty($bookings)) {
        return new WP_Error('no_bookings', 'No bookings found', array('status' => 404));
    }

    return new WP_REST_Response($bookings, 200);
}
