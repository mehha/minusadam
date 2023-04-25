export function handleCookieBanner() {
  const cookieAcceptButton = document.getElementById("accept-cookies")

  if (!cookieAcceptButton) {
    return
  }

  cookieAcceptButton.addEventListener("click", function() {
      document.getElementById("cookie-banner").style.display = "none";
      // Set a cookie to remember that the user has accepted the use of cookies
      document.cookie = "cookies_accepted=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
  });
  // Check if the cookie has already been set
  if (document.cookie.indexOf("cookies_accepted=true") !== -1) {
      document.getElementById("cookie-banner").style.display = "none";
  }
}
