export function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      let siteKey = form.dataset.sitekey
      let baseUrl = form.dataset.baseurl
      let reCaptcha;
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')

      grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, {action: 'submit'}).then(function (token) {
          fetch(baseUrl + '/wp-json/wp/v2/verify-recaptcha', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'recaptcha_token=' + token,
          })
            .then(function (response) {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(function (data) {
              if (data.success && form.checkValidity()) {
                localStorage.setItem('form-submitted', 'true')
                form.submit()
              } else {
                localStorage.removeItem('form-submitted');
                console.log("reCAPTCHA verification failed or data validation failed", data)
              }
            })
            .catch(function (error) {
              localStorage.removeItem('form-submitted');
              console.error('There was a problem with the fetch operation:', error);
            })
        });
      });
    }, false)
  })
}
