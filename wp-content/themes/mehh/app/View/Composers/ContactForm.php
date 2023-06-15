<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class ContactForm extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'shortcodes.contact-form',
    ];



    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        if(!function_exists('get_field')) {
            return [];
        }

        $validation_messages = [];
       	$success_message = '';

       	if ( isset( $_POST['contact_form'] ) ) {

       		//Sanitize the data
       		$full_name = isset( $_POST['full_name'] ) ? sanitize_text_field( $_POST['full_name'] ) : '';
       		$email     = isset( $_POST['email'] ) ? sanitize_text_field( $_POST['email'] ) : '';
       		$message   = isset( $_POST['message'] ) ? sanitize_textarea_field( $_POST['message'] ) : '';
            $time = esc_attr($_POST['time']);

       		//Validate the data
       		if ( strlen( $full_name ) === 0 ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid name.', 'sage' );
       		}

       		if ( strlen( $email ) === 0 or
       		     ! is_email( $email ) ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid email address.', 'sage' );
       		}

       		if ( strlen( $message ) === 0 ) {
       			$validation_messages[] = esc_html__( 'Please enter a valid message.', 'sage' );
       		}

            // Check for honeypot field
            if ( isset( $_POST['honeypot'] ) && ! empty( $_POST['honeypot'] ) ) {
                $validation_messages[] = esc_html__( 'Error in contact form (honeypot).', 'sage' );
            }

            if(!esc_attr(isset($_POST['form-type'])) || esc_attr($_POST['form-type']) != 'contact-form'){
                $validation_messages[] = esc_html__( 'Error in contact form.', 'sage' );
            }

//            Check time
            if (!is_numeric($time) || ($time + 4 > time())) {
                $validation_messages[] = esc_html__( 'You have not filled out all the information required (time).', 'sage' );
            }

            // REFERER ERROR
            if (!check_ajax_referer('contact_nonce')) {
                $validation_messages[] = esc_html__( 'check_ajax_referer error in contact form.', 'sage' );
            }

            // VERIFY CAPTCHA
            $url = 'https://www.google.com/recaptcha/api/siteverify';
            $fields = array(
                'secret' => '6LcBqCokAAAAABmLojSAO8UDJKZI76xxZ123FNkE',
                'response' => $_POST['g-recaptcha-response'],
                'remoteip' => $_SERVER['REMOTE_ADDR']
            );

            $fields_string = '';
            foreach ($fields as $key => $value) {
                $fields_string .= $key . '=' . $value . '&';
            }
            $fields_string = rtrim($fields_string, '&');

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, count($fields));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            $result = json_decode(curl_exec($ch));

            if (!$result->success) {
                return __('Captcha not clicked', 'sage');
            }

       		//Send an email to the WordPress administrator if there are no validation errors
       		if ( empty( $validation_messages ) ) {

       			$mail    = get_field('contact_form_recipient', 'options') ? get_field('contact_form_recipient', 'options') : get_option( 'admin_email' );
                $emailArray = preg_split('/\s*,\s*/', $mail, -1, PREG_SPLIT_NO_EMPTY);

       			$subject = 'Uus sõnum Minusadam kodulehelt';
       			$message = 'Saatja: ' . $full_name . '<br>Kliendi email: ' . $email .'<br><br>'. $message;
                $headers = array('Content-Type: text/html; charset=UTF-8');

                foreach ($emailArray as $recipient) {
                    wp_mail($recipient, $subject, $message, $headers);
                }

       			$success_message = esc_html__( 'Your message has been successfully sent.', 'sage' );

       		}

       	}

       	//Display the validation errors
       	if ( ! empty( $validation_messages ) ) {
           echo '<div class="alert alert-danger d-grid gap-3 mb-4" role="alert">';
            foreach ( $validation_messages as $validation_message ) {
                echo '<div class="validation-message">' . esc_html( $validation_message ) . '</div>';
            }
            echo '</div>';
       	}

        return [
            'success_message' => $success_message,
            'recaptcha_lang' => $this->getRecaptchaLang()
        ];
    }

    private function getRecaptchaLang() {
        $lang = 'et';
//        if(get_current_blog_id() != 3){
//            $lang = 'en';
//        }
        return $lang;
    }
}
