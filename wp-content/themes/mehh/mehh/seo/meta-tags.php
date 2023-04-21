<?php

add_action('wp_head', function(){

    global $wp, $post;

    $image = false;
    $description = false;
    $title = false;

    $thumnail_size = 'medium_large';
    $link = home_url( $wp->request );
    $site = get_bloginfo('name');


    if(is_front_page())
    {
        $title = get_bloginfo('name');
    }
    else if(is_single() || is_page())
    {
        $title = $post->post_title.' - '.$site;
        $description = get_the_excerpt();

        $image = get_the_post_thumbnail_url();

        if(!$image && $img = get_field('hero_image')){
            $image = wp_get_attachment_image_url($img['ID'], $thumnail_size);
        }

        if(!$image && $img = get_field('related_images')){
            $image = wp_get_attachment_image_url($img[0]['ID'], $thumnail_size);
        }

    }
    else if(is_tag())
    {
        $tag_id = get_query_var('tag_id');
        $term = get_tag($tag_id);

        $title = $term->name.' - '.$site;
        $description = strip_tags($term->description);
    }
    else if(is_category())
    {
        $cat = get_queried_object();

        $title = $cat->name.' - '.$site;
        $description = strip_tags($cat->description);
    }
    else{
        $title = get_bloginfo('name');
    }


    /* Get descriptions */
    if(!$description){
        $description = get_field('seo_fallback_meta_description', 'options');
    }

    /* Get image */
    if(!$image){
        $image = wp_get_attachment_image_url(get_field('og_fallback_image', 'options'), $thumnail_size);
    }

    if(!$title){
        $title = get_bloginfo('name');
    }

    echo '<meta name="description" content="' . preg_replace("/\s+/", " ", strip_tags($description)) . '" />' . "\n";
    echo '<meta property="og:title" content="' . $title . '">' . "\n";
    echo '<meta property="og:description" content="' . preg_replace("/\s+/", " ", strip_tags($description)) . '" />' . "\n";
    echo '<meta property="og:image" content="' . $image.'">' . "\n";
    echo '<meta property="og:type" content="website" />' . "\n";
    echo '<meta property="og:site_name" content="' . $site . '" />' . "\n";
    echo '<meta property="og:url" content="' .  $link . '" />' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    echo '<meta name="twitter:site" content="@">' . "\n";
    echo '<meta name="twitter:title" content="' . $title . '">' . "\n";
    echo '<meta name="twitter:description" content="'.preg_replace("/\s+/", " ", strip_tags($description)).'">' . "\n";
    echo '<meta name="twitter:image" content="' . $image.'">' . "\n";
});
