export function handleNextSection() {
  const module = document.querySelectorAll('.module');
  const nextSectionBtn = document.querySelectorAll('.btn-next-section');

  if (!nextSectionBtn.length || !module) {
    return
  }

  const scrollToNext = (el) => {
    const btn = el.querySelector('.btn-next-section');

    if (!btn) {
      return
    }

    btn.addEventListener('click', function () {
      const height = el.offsetHeight;
      const topofElement = el.offsetTop;
      const y = height + topofElement - 85;
      window.scroll({
        top: y,
        behavior: 'smooth',
      });
    });
  }

  module.forEach(function (el) {
    scrollToNext(el);
  });
}
