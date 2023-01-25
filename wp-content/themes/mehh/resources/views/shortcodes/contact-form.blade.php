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
        <label class="form-label fw-bold" for="full-name">{{__('Name', 'eklips_lang')}}*</label>
        <input type="text" id="full-name" class="form-control" name="full_name" required>
    </div>

    <div class="col-12 mb-4">
        <label class="form-label fw-bold" for="email">{{__('Email', 'eklips_lang')}}*</label>
        <input type="email" id="email" class="form-control" name="email" required>
    </div>

    <div class="col-12 mb-4">
        <label class="form-label fw-bold" for="message">{{__('Message', 'eklips_lang')}}*</label>
        <textarea id="message" class="form-control" name="message" rows="3" required></textarea>
    </div>

    <input class="btn btn-primary mt-4" type="submit" id="contact-form-submit" value="{{__('Submit', 'eklips_lang')}}">

</form>
