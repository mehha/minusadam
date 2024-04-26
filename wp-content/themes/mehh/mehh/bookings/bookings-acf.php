<?php

if( function_exists('acf_add_options_page') ):


    acf_add_options_sub_page('Bookings');

    acf_add_local_field_group(array (
        'key' => 'group_5besasa8c49dr45',
        'title' => 'Bookings',
        'fields' => array(
       		array(
       			'key' => 'field_662b8aa904796',
       			'label' => 'Bookings',
       			'name' => 'bookings',
       			'aria-label' => '',
       			'type' => 'repeater',
       			'instructions' => '',
       			'required' => 0,
       			'conditional_logic' => 0,
       			'wrapper' => array(
       				'width' => '',
       				'class' => '',
       				'id' => '',
       			),
       			'layout' => 'table',
       			'pagination' => 0,
       			'min' => 0,
       			'max' => 0,
       			'collapsed' => '',
       			'button_label' => 'Add Row',
       			'rows_per_page' => 20,
       			'sub_fields' => array(
       				array(
       					'key' => 'field_662b8ab704797',
       					'label' => 'Begin',
       					'name' => 'begin',
       					'aria-label' => '',
       					'type' => 'date_picker',
       					'instructions' => '',
       					'required' => 0,
       					'conditional_logic' => 0,
       					'wrapper' => array(
       						'width' => '',
       						'class' => '',
       						'id' => '',
       					),
       					'display_format' => 'j. M Y',
       					'return_format' => 'Y-m-d',
       					'first_day' => 1,
       					'parent_repeater' => 'field_662b8aa904796',
       				),
       				array(
       					'key' => 'field_662b8acc04798',
       					'label' => 'End',
       					'name' => 'end',
       					'aria-label' => '',
       					'type' => 'date_picker',
       					'instructions' => '',
       					'required' => 0,
       					'conditional_logic' => 0,
       					'wrapper' => array(
       						'width' => '',
       						'class' => '',
       						'id' => '',
       					),
       					'display_format' => 'j. M Y',
       					'return_format' => 'Y-m-d',
       					'first_day' => 1,
       					'parent_repeater' => 'field_662b8aa904796',
       				),
       			),
       		),
       	),
        'location' => array (
            array (
                array (
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'acf-options-bookings',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => 1,
        'description' => '',
        'show_in_rest' => 1,
    ));

endif;
