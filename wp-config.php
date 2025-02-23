<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

if ( file_exists( dirname( __FILE__ ) . '/config-local.php' ) ) {
    include( dirname( __FILE__ ) . '/config-local.php' );
} elseif ( file_exists( dirname( __FILE__ ) . '/config-staging.php' ) ) {
    include( dirname( __FILE__ ) . '/config-staging.php' );
} else {
	define( 'DB_NAME', '' );

	/** Database username */
	define( 'DB_USER', '' );

	/** Database password */
	define( 'DB_PASSWORD', '' );

	/** Database hostname */
	define( 'DB_HOST', 'localhost' );
}

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f7z#+SmnoGQeNy^p(5NW?Pqo<6jr6;0/FkO8&$>(R[pZvfhz%_A`euC^l)B.N^Z.' );
define( 'SECURE_AUTH_KEY',  'a[v,jnWeQtKR0,~S_E[Ika2X6JF3K^d]Rg-h?  =gc2#!1wF:mf;oyvKr}6:g:0/' );
define( 'LOGGED_IN_KEY',    '4QcW5#+);/0_TH@8Dcra lmGLL44K7UUB]mld//?b@$qf@8h;1?yX,xeRt9,,ah0' );
define( 'NONCE_KEY',        ';w|~tSVEx9$#pnkz.;y@tzP5nU{(G<jg<W:kshKJYZ2>MZPP6=Od|oq]!N7BHFxS' );
define( 'AUTH_SALT',        'N4&8mYb)Ju0K#/Px+Ey8,|{&/hBTd=/}TtO{DGp;ua+pU:8`U~m}m]lW%bIA.wl-' );
define( 'SECURE_AUTH_SALT', '%%Q^q.-n=Mz`EKFf/)s!VNT@MUP`__ZTzKk?T?X9zeGG.yXFeL1h4=PB18~X+Hx-' );
define( 'LOGGED_IN_SALT',   'i4ZeHB|$Sj}H:3WPko8^s^4H@?MVUJ[Tkb>M{ 3eyeT0>O1&U)G*KA>8rlU/$qk?' );
define( 'NONCE_SALT',       'g)+]XV{%6jo:kc($Yb%*KIx;^Ku^8~n|mrJjRhcldJH h8=/)S~)a=:Gmb9NNYlv' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpminusadam_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
//define( 'DOMAIN_CURRENT_SITE', 'minusadam.com' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
