<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Page extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'page*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'hide_title' => $this->hideTitle(),
            'front_page_title' => $this->frontPageTitle(),
        ];
    }

    /**
     * The H1 for the front page: the site name and tagline (the page's own title is just "Home").
     */
    public function frontPageTitle()
    {
        $tagline = get_bloginfo('description');

        return $tagline ? get_bloginfo('name') . ' – ' . $tagline : get_bloginfo('name');
    }

    public function hideTitle()
    {
        $title = function_exists('get_field') ?  get_field('hide_title') : false;
        return $title ?: false;
    }
}
