<?php
/*
 * Plugin Name: CryptX
 * Plugin URI: http://weber-nrw.de/wordpress/cryptx/
 * Description: No more SPAM by spiders scanning you site for email addresses. With CryptX you can hide all your email addresses, with and without a mailto-link, by converting them using javascript or UNICODE.
 * Version: 3.4.3
 * Requires at least: 6.0
 * Author: Ralf Weber
 * Author URI: http://weber-nrw.de/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cryptx
*/

//avoid direct calls to this file, because now WP core and framework has been used
if ( ! function_exists( 'add_action' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

/** @const CryptX version */
define( 'CRYPTX_VERSION', "3.4.1" );
define( 'CRYPTX_BASENAME', plugin_basename( __FILE__ ) );
define( 'CRYPTX_BASEFOLDER', plugin_basename( dirname( __FILE__ ) ) );
define( 'CRYPTX_DIR_URL', rtrim( plugin_dir_url( __FILE__ ), "/" ) . "/" );
define( 'CRYPTX_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'CRYPTX_FILENAME', str_replace( CRYPTX_BASEFOLDER . '/', '', plugin_basename( __FILE__ ) ) );

require_once( CRYPTX_DIR_PATH . 'classes/CryptX.php' );
require_once( CRYPTX_DIR_PATH . 'include/admin_option_page.php' );

$CryptX_instance = Cryptx\CryptX::getInstance();
$CryptX_instance->startCryptX();

/**
 * Encrypts the given content using the Cryptx shortcode.
 *
 * @param string $content The content to be encrypted.
 * @param string $args (optional) Additional arguments is deprecated and are not used anymore.
 *
 * @return string The encrypted content wrapped in the Cryptx shortcode.
 */
function encryptx( string $content, string $args = "" ): string {
	return do_shortcode( '[cryptx]' . $content . '[/cryptx]' );
}