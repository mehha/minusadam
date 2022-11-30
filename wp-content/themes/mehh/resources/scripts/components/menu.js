export function handleMenu() {
  // Mobile menu
  const handleMobileMenu = () => {
    const burger = document.getElementById('burger')
    const burger2 = document.getElementById('burger-2')
    const mobileMenu = document.getElementById('mobile-menu')

    if (!burger || !burger2 || !mobileMenu) {
      return
    }

    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', true)
        mobileMenu.classList.remove('hidden')
      }
    })

    burger2.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', false)
        mobileMenu.classList.add('hidden')
      }
    })
  }
  handleMobileMenu()
}
