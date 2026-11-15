// The banner is in every page's HTML because pages are cached for all visitors.
// An inline script in wp_head adds .cookies-accepted to <html> before the first
// paint for visitors who already accepted, which hides it (see cookie-banner.scss).
export function handleCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const root = document.documentElement;

  if (!banner || !acceptButton || root.classList.contains('cookies-accepted')) {
    return;
  }

  // Keep elements that receive keyboard focus from scrolling in behind the
  // fixed banner (WCAG 2.4.11 Focus Not Obscured).
  root.style.scrollPaddingBottom = `${banner.offsetHeight + 32}px`;

  acceptButton.addEventListener('click', () => {
    root.classList.add('cookies-accepted');
    root.style.scrollPaddingBottom = '';
    document.cookie = 'cookies_accepted=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/';
  });
}
