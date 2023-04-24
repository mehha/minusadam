<?php
/**
 * The file that defines helper function.
 *
 * @link       https://dpd.com
 * @since      1.0.0
 *
 * @package    Dpd
 * @subpackage Dpd/includes
 */

/**
 * Add a flash notice to {prefix}options table until a full page refresh is done
 *
 * @param string  $notice our notice message.
 * @param string  $type This can be "info", "warning", "error" or "success", "warning" as default.
 * @param boolean $dismissible set this to TRUE to add is-dismissible functionality to your notice.
 *
 * @return void
 */
function dpd_baltic_add_flash_notice( $notice = '', $type = 'warning', $dismissible = true ) {
	// Here we return the notices saved on our option, if there are not notices, then an empty array is returned.
	$notices          = get_option( 'dpd_baltic_flash_notices', array() );
	$dismissible_text = ( $dismissible ) ? 'is-dismissible' : '';

	// We add our new notice.
	array_push(
		$notices,
		array(
			'notice'      => $notice,
			'type'        => $type,
			'dismissible' => $dismissible_text,
		)
	);

	// Then we update the option with our notices array.
	update_option( 'dpd_baltic_flash_notices', $notices );
}

/**
 * Function executed when the 'admin_notices' action is called, here we check if there are notices on
 * our database and display them, after that, we remove the option to prevent notices being displayed forever.
 *
 * @return void
 */
function dpd_baltic_display_flash_notices() {
	$notices = get_option( 'dpd_baltic_flash_notices', array() );

	// Iterate through our notices to be displayed and print them.
	foreach ( $notices as $notice ) {
		printf(
			'<div class="notice notice-%1$s %2$s"><p>%3$s</p></div>',
			esc_attr( $notice['type'] ),
			esc_attr( $notice['dismissible'] ),
			esc_html( $notice['notice'] )
		);
	}

	// Now we reset our options to prevent notices being displayed forever.
	if ( ! empty( $notices ) ) {
		delete_option( 'dpd_baltic_flash_notices' );
	}
}

/**
 * Helper function to convert weight to kg.
 *
 * @param mixed $cart_weight Cart weight.
 */
function dpd_baltic_weight_in_kg( $cart_weight ) {
	$shop_weight_unit = get_option( 'woocommerce_weight_unit' );

	if ( 'oz' === $shop_weight_unit ) {
		$divider = 35.274;
	} elseif ( 'lbs' === $shop_weight_unit ) {
		$divider = 2.20462;
	} elseif ( 'g' === $shop_weight_unit ) {
		$divider = 1000;
	} else {
		$divider = 1;
	}

	return $cart_weight / $divider;
}
