function checkTableWidth(elems, childElem) {
  const outerElem = document.querySelectorAll(elems);
  Array.from(outerElem).map(elem => {
    let elemParent = elem.closest('.table-wrap');
    if (!elemParent) {
      let wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';
      elem.parentNode.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
      elemParent = elem.closest('.table-wrap');
    }

    if (!elem.querySelector('.shadow-right')) {
      let shadowWrapper = document.createElement('span');
      shadowWrapper.className = 'shadow-right';
      elem.appendChild(shadowWrapper);
    }

    if (!elem.querySelector('.shadow-left')) {
      let shadowWrapper = document.createElement('span');
      shadowWrapper.className = 'shadow-left';
      elem.appendChild(shadowWrapper);
    }

    function checkOverflow() {
      if (elem.querySelector(childElem).offsetWidth > elemParent.offsetWidth) {
        elemParent.classList.add('overflow');
        elemParent.classList.add('right-active');
      } else {
        elemParent.classList.remove('overflow');
      }
    }
    checkOverflow();

    elem.addEventListener('scroll', function () {
      if (elem.parentElement.classList.contains('table-wrap')) {
        let elemBody = elem.querySelector(childElem),
          elemParent = elem.closest('.table-wrap');
        let scrolled = (elemBody.offsetWidth - elemParent.offsetWidth - elem.scrollLeft);
        if (scrolled < 3) {
          elemParent.classList.add('left-active');
          elemParent.classList.remove('right-active');
        } else if (elem.scrollLeft < 3) {
          elemParent.classList.remove('left-active');
          elemParent.classList.add('right-active');
        } else {
          elemParent.classList.add('left-active');
          elemParent.classList.add('right-active');
        }
      }
    });
  });
}

function handleTables() {
  // Init run
  const initTables = () => {
    let table = document.querySelector('table');

    if (!table) {
      return
    }

    window.onload = function() {
      table && checkTableWidth('table', 'tbody');
    };

    window.onresize = function () {
      table && checkTableWidth('table', 'tbody');
    };
  }
  initTables()
}

export { checkTableWidth, handleTables }
