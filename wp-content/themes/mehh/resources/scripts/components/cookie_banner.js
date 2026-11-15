// The banner is in every page's HTML, hidden, because pages are cached for all
// visitors. Show it here until the visitor accepts.
export function handleCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');

  if (!banner || !acceptButton) {
    return;
  }

  if (document.cookie.split('; ').includes('cookies_accepted=true')) {
    return;
  }

  const root = document.documentElement;
  banner.hidden = false;
  // Keep elements that receive keyboard focus from scrolling in behind the
  // fixed banner (WCAG 2.4.11 Focus Not Obscured).
  root.style.scrollPaddingBottom = `${banner.offsetHeight + 32}px`;

  acceptButton.addEventListener('click', () => {
    banner.hidden = true;
    root.style.scrollPaddingBottom = '';
    document.cookie = 'cookies_accepted=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/';
  });
}
