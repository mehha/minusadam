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
            'wide' => $this->wideLayout(),
        ];
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function wideLayout()
    {
        $wide = function_exists('get_field') ?  get_field('wide_layout') : false;
        return $wide ? 'max-w-full' : 'max-w-7xl';
    }
}
