<script src="https://www.google.com/recaptcha/api.js?render={{get_field('captcha_key', 'options')}}"></script>

@if($success_message)
  <div class="alert alert-success mb-4" role="alert">
    <div>
      {!! __('Your message has been successfully sent.', 'sage') !!}
    </div>
  </div>
@endif

<form id="contact-form" class="form contact-form needs-validation" action="<?php echo esc_url( get_permalink() ); ?>"
      method="post" novalidate data-sitekey="{{get_field('captcha_key', 'options')}}" data-baseurl={!! get_bloginfo('url') !!}>

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

  <input type="hidden" name="form-type" value="contact-form"/>

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

  <input class="mehh-field" type="text" name="mehh_field" tabindex="-1" autocomplete="off">

  <input class="btn btn-primary mt-4" type="submit" id="contact-form-submit" value="{{__('Submit', 'sage')}}">
  <input type="hidden" name="time" value="{{time()}}"/>
  @php(wp_nonce_field('contact_nonce'))

</form>
