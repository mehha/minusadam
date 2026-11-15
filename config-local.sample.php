<?php
/**
 * Local Docker settings. Copy this to config-local.php (git-ignored) to run the
 * stack in docker/ + docker-compose.yml:
 *
 *   cp config-local.sample.php config-local.php
 *   docker compose up -d --build
 *
 * wp-config.php includes config-local.php if it exists, so this file must never
 * be deployed to production. Values come from docker-compose.yml.
 */
define( 'DB_NAME', getenv( 'DB_NAME' ) ?: 'wordpress' );
define( 'DB_USER', getenv( 'DB_USER' ) ?: 'wordpress' );
define( 'DB_PASSWORD', getenv( 'DB_PASSWORD' ) ?: 'wordpress' );
define( 'DB_HOST', getenv( 'DB_HOST' ) ?: 'db' );

// Multisite network domain (wp-config.php defines the rest of the multisite constants).
define( 'DOMAIN_CURRENT_SITE', getenv( 'SITE_HOST' ) ?: 'minusadam.test' );

define( 'WP_ENVIRONMENT_TYPE', 'local' );
define( 'FS_METHOD', 'direct' );

// Uncomment to see PHP errors on screen locally (wp-config forces display off otherwise):
// define( 'WP_DEBUG', true );
// define( 'WP_DEBUG_DISPLAY', true );
