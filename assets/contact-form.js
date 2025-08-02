
      function onRecaptchaSuccess(token) {
        document.getElementById("g-recaptcha-response").value = token;
      }

      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (event) {
          const honeypotValue = document.getElementById("website").value;
          if (honeypotValue) {
            event.preventDefault();
            console.warn("Bot detected via honeypot! Submission blocked.");
            return;
          }

          const recaptchaValue = document.getElementById(
            "g-recaptcha-response"
          ).value;
          if (!recaptchaValue) {
            event.preventDefault();
            alert("Please complete the reCAPTCHA challenge.");
          }
        });

