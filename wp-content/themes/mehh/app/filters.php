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
