export function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    let startTime = performance.now();

    form.addEventListener('submit', event => {
      let siteKey = form.dataset.sitekey
      let baseUrl = form.dataset.baseurl
      event.preventDefault()
      form.classList.add('was-validated')
      const endTime = performance.now();
      const timeElapsed = endTime - startTime;

      if (!form.checkValidity() || timeElapsed < 6000) return

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
              if (data.success) {
                form.submit()
              } else {
                console.log("reCAPTCHA verification failed or data validation failed", data)
              }
            })
            .catch(function (error) {
              console.error('There was a problem with the fetch operation:', error);
            })
        });
      });
    }, false)
  })
}
