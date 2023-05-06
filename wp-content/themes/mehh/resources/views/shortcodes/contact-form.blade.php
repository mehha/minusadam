<script async defer src='https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit&hl={{$recaptcha_lang}}'></script>

@if($success_message)
  <div class="alert alert-success mb-4" role="alert">
    <div>
      {!! __('Your message has been successfully sent.', 'sage') !!}
    </div>
  </div>
@endif

<form id="contact-form" class="form contact-form needs-validation" action="<?php echo esc_url( get_permalink() ); ?>"
      method="post" novalidate>

  <input type="hidden" name="contact_form">

  <div class="col-12 mb-4">
    <label class="form-label fw-bold" for="full-name">{{__('Name', 'sage')}}*</label>
    <input type="text" id="full-name" class="form-control" name="full_name" required>
  </div>

  <div class="col-12 mb-4">
    <label class="form-label fw-bold" for="email">{{__('Email', 'sage')}}*</label>
    <input type="email" id="email" class="form-control" name="email" required>
  </div>

  <div class="col-12 mb-4">
    <label class="form-label fw-bold" for="message">{{__('Message', 'sage')}}*</label>
    <textarea id="message" class="form-control" name="message" rows="3" required></textarea>
  </div>

  @if(get_field('captcha_key', 'options'))
    <div class="col-12 recaptcha-container mb-4">
      <div id="g-recaptcha" class="g-recaptcha" data-sitekey="{{get_field('captcha_key', 'options')}}"></div>
    </div>
  @endif

  @if(get_field('privacy_disclaimer', 'options'))
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="contact-form-confirm-checkbox"
               name="contact-form-confirm" value="agree" required>
        <label class="form-check-label" for="contact-form-confirm-checkbox">
          {!! get_field('privacy_disclaimer', 'options') !!}
        </label>
        <div class="invalid-feedback">
          {{ __('You must agree before submitting.', 'sage') }}
        </div>
      </div>
    </div>
  @endif

  <!-- Honeypot field -->
  <div class="visually-hidden">
      <input type="text" name="honeypot" tabindex="-1" autocomplete="off">
  </div>

  <input class="btn btn-primary mt-4" type="submit" id="contact-form-submit" value="{{__('Submit', 'sage')}}">

</form>
