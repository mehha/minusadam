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
        ];
    }

    public function hideTitle()
    {
        $title = function_exists('get_field') ?  get_field('hide_title') : false;
        return $title ?: false;
    }
}
