<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_6dada4300eafdc',
        'title' => 'Page settings',
        'fields' => array(

            array(
                'key' => 'field_adada0asss34',
                'label' => 'Wide layout',
                'name' => 'wide_layout',
                'type' => 'true_false',
                'default_value' => 0,
                'column_width' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));
endif;
