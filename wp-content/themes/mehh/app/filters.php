<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

//Nav extra class to li
add_filter('nav_menu_css_class', function ($classes, $item, $args) {
    if ( 'primary_navigation' === $args->theme_location || 'top_navigation' === $args->theme_location ) {
        $classes[] = "nav-item";
    }

    return $classes;
}, 1, 3);

//Nav extra class to a
add_filter('nav_menu_link_attributes', function ($classes, $item, $args) {
    if (isset($args->anchor_class)) {
        $classes['class'] = $args->anchor_class;
    }
    return $classes;
}, 1, 3);

/**
 * Add custom mime types support
 *
 * */
add_filter('upload_mimes', function ($mimes) {
    $mimes['svg']   = 'image/svg+xml';
    $mimes['htm']   = 'text/html';
    $mimes['xhtml'] = 'application/xhtml+xml';
    $mimes['zip']   = 'application/zip';
    $mimes['eps']   = 'image/x-eps';
    return $mimes;
});

/**
 * Load Contact Form 7's scripts, and its reCAPTCHA, only on pages that render a form.
 *
 * By default both load on every page; reCAPTCHA alone is about 360 KB of JavaScript
 * and sets a third-party cookie. All of these scripts print in the footer, so
 * enqueueing them while a form renders still works.
 */
add_filter('wpcf7_load_js', '__return_false');

add_action('wp_enqueue_scripts', function () {
    remove_action('wp_enqueue_scripts', 'wpcf7_recaptcha_enqueue_scripts', 20);
}, 1);

add_filter('wpcf7_form_elements', function ($html) {
    static $enqueued = false;

    if (! $enqueued && ! is_admin()) {
        $enqueued = true;

        if (function_exists('wpcf7_enqueue_scripts')) {
            wpcf7_enqueue_scripts();
        }

        if (function_exists('wpcf7_recaptcha_enqueue_scripts')) {
            wpcf7_recaptcha_enqueue_scripts();
        }
    }

    return $html;
});

/**
 * Give embedded iframes (such as Google Maps) in content a title, so screen readers can name them.
 */
add_filter('the_content', function ($content) {
    if (stripos($content, '<iframe') === false) {
        return $content;
    }

    $tags = new \WP_HTML_Tag_Processor($content);

    while ($tags->next_tag('iframe')) {
        if (trim((string) $tags->get_attribute('title')) !== '') {
            continue;
        }

        $src = (string) $tags->get_attribute('src');
        $tags->set_attribute(
            'title',
            str_contains($src, 'google.com/maps') ? __('Map', 'sage') : __('Embedded content', 'sage')
        );
    }

    return $tags->get_updated_html();
}, 20);

/**
 * Let the REST API read and write the Yoast SEO meta description of posts, pages, products
 * and product categories, so descriptions can be managed in bulk (with an application password).
 */
add_action('init', function () {
    if (! defined('WPSEO_VERSION')) {
        return;
    }

    foreach (['post', 'page', 'product'] as $post_type) {
        register_post_meta($post_type, '_yoast_wpseo_metadesc', [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
            'sanitize_callback' => 'sanitize_text_field',
            'auth_callback' => fn ($allowed, $meta_key, $post_id) => current_user_can('edit_post', $post_id),
        ]);
    }
});

add_action('rest_api_init', function () {
    if (! class_exists('WPSEO_Taxonomy_Meta')) {
        return;
    }

    register_rest_field('product_cat', 'yoast_metadesc', [
        'get_callback' => fn ($term) => (string) \WPSEO_Taxonomy_Meta::get_term_meta(
            (int) $term['id'],
            'product_cat',
            'desc'
        ),
        'update_callback' => function ($value, $term) {
            \WPSEO_Taxonomy_Meta::set_value($term->term_id, $term->taxonomy, 'desc', sanitize_text_field($value));
            // Yoast rebuilds its cached term data (and LiteSpeed purges the page) when a term is edited.
            wp_update_term($term->term_id, $term->taxonomy);
            return true;
        },
        'schema' => ['type' => 'string', 'context' => ['view', 'edit']],
    ]);
});
