export function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    let startTime = performance.now();

    form.addEventListener('submit', event => {
      // Recaptcha
      let reCaptcha;
      let FormCaptcha = document.querySelector('#g-recaptcha');
      const endTime = performance.now();
      const timeElapsed = endTime - startTime;

      if (event.target.classList.contains('needs-validation') && FormCaptcha) {
        // eslint-disable-next-line no-undef
        if ( grecaptcha.getResponse(renderForm) === '' ) {
          reCaptcha = false;
          event.target.querySelector('#g-recaptcha').classList.add('captcha-error');
        } else {
          reCaptcha = true;
        }
      } else {
        reCaptcha = true;
      }

      if (!form.checkValidity() || !reCaptcha || timeElapsed < 6000) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Recaptcha callback
  let renderForm;
  let FormCaptcha = document.querySelector('#g-recaptcha');
  window.CaptchaCallback = function() {
    if ( FormCaptcha ) {
      // eslint-disable-next-line no-undef
      renderForm = grecaptcha.render('g-recaptcha', {'sitekey' : FormCaptcha.dataset.sitekey, 'callback' : correctCaptcha});
    }
  };

  let correctCaptcha = function(response) {
    if ( response !== '')
      FormCaptcha.classList.remove('captcha-error');
  };
}
