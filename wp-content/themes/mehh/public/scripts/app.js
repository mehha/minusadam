"use strict";
(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/button */ "./node_modules/bootstrap/js/dist/button.js");
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tables */ "./resources/scripts/components/tables.js");
/* harmony import */ var _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/check-scroll */ "./resources/scripts/utilities/check-scroll.js");
// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';


// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports




var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_2__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_4__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__.handleCheckScroll];

// Run fn-s
for (var _i = 0, _mountedFns = mountedFns; _i < _mountedFns.length; _i++) {
  var demountFn = _mountedFns[_i];
  typeof demountFn === 'function' && demountFn();
}

/***/ }),

/***/ "./resources/scripts/components/fancybox.js":
/*!**************************************************!*\
  !*** ./resources/scripts/components/fancybox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFancybox": function() { return /* binding */ handleFancybox; }
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");


function handleFancybox() {
  // Single
  var singleFancyItems = ['a[href$=".jpg"]:not(.no-fancy)', 'a[href$=".jpeg"]:not(.no-fancy)', 'a[href$=".png"]:not(.no-fancy)', 'a[href$=".webp"]:not(.no-fancy)', 'a[href$=".svg"]:not(.no-fancy)', '.fancyimage', '.fancyvideo'];
  singleFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      Toolbar: {
        display: ['close']
      }
    });
  });

  // Gallery
  var galleryFancyItems = ['.gallery-item a:not(.no-fancy)'];
  galleryFancyItems.forEach(function (value) {
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind(value, {
      groupAll: true,
      Toolbar: {
        display: ['close']
      }
    });
  });

  // Buttons
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.Plugins.Toolbar.defaults.items.close.html = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" style="enable-background:new 0 0 320 320" xml:space="preserve"><path d="M315.3 315.3c-6.3 6.3-16.4 6.3-22.6 0L160 182.6 27.3 315.3c-6.3 6.3-16.4 6.3-22.6 0-6.3-6.3-6.3-16.4 0-22.6L137.4 160 4.7 27.3c-6.3-6.3-6.3-16.4 0-22.6 6.3-6.3 16.4-6.3 22.6 0L160 137.4 292.7 4.7c6.3-6.3 16.4-6.3 22.6 0 6.3 6.3 6.3 16.4 0 22.6L182.6 160l132.7 132.7c6.3 6.2 6.3 16.4 0 22.6z" fill="#F4F1E9"/></svg>';
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Carousel.Plugins.Navigation.defaults.nextTpl = '<svg viewBox="0 0 21 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.721.881c.958-1.175 2.502-1.175 3.46 0L20.428 20.81c.763.936.763 2.446 0 3.382L4.181 44.119c-.958 1.175-2.502 1.175-3.46 0-.958-1.175-.958-3.07 0-4.245l14.155-17.386L.7 5.102c-.938-1.151-.938-3.07.02-4.22z" fill="#F4F1E9"/></svg>';
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Carousel.Plugins.Navigation.defaults.prevTpl = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 45"><path d="M20.3 44.1a2.2 2.2 0 0 1-3.5 0L.6 24.2a2.7 2.7 0 0 1 0-3.4L16.8.9a2.2 2.2 0 0 1 3.5 0 3.6 3.6 0 0 1 0 4.2L6.1 22.5l14.2 17.4a3.6 3.6 0 0 1 0 4.2z" fill="#f4f1e9"/></svg>';
}

/***/ }),

/***/ "./resources/scripts/components/menu.js":
/*!**********************************************!*\
  !*** ./resources/scripts/components/menu.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleMenu": function() { return /* binding */ handleMenu; }
/* harmony export */ });
function handleMenu() {
  // Mobile menu
  var handleMobileMenu = function handleMobileMenu() {
    var burger = document.getElementById('burger');
    var burger2 = document.getElementById('burger-2');
    var mobileMenu = document.getElementById('mobile-menu');
    if (!burger || !burger2 || !mobileMenu) {
      return;
    }
    burger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', true);
        mobileMenu.classList.remove('hidden');
      }
    });
    burger2.addEventListener('click', function () {
      if (!mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', false);
        mobileMenu.classList.add('hidden');
      }
    });
  };
  handleMobileMenu();
}

/***/ }),

/***/ "./resources/scripts/components/tables.js":
/*!************************************************!*\
  !*** ./resources/scripts/components/tables.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTableWidth": function() { return /* binding */ checkTableWidth; },
/* harmony export */   "handleTables": function() { return /* binding */ handleTables; }
/* harmony export */ });
function checkTableWidth(elems, childElem) {
  var outerElem = document.querySelectorAll(elems);
  Array.from(outerElem).map(function (elem) {
    var elemParent = elem.closest('.table-wrap');
    if (!elemParent) {
      var wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';
      elem.parentNode.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
      elemParent = elem.closest('.table-wrap');
    }
    if (!elem.querySelector('.shadow-right')) {
      var shadowWrapper = document.createElement('span');
      shadowWrapper.className = 'shadow-right';
      elem.appendChild(shadowWrapper);
    }
    if (!elem.querySelector('.shadow-left')) {
      var _shadowWrapper = document.createElement('span');
      _shadowWrapper.className = 'shadow-left';
      elem.appendChild(_shadowWrapper);
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
        var elemBody = elem.querySelector(childElem),
          _elemParent = elem.closest('.table-wrap');
        var scrolled = elemBody.offsetWidth - _elemParent.offsetWidth - elem.scrollLeft;
        if (scrolled < 3) {
          _elemParent.classList.add('left-active');
          _elemParent.classList.remove('right-active');
        } else if (elem.scrollLeft < 3) {
          _elemParent.classList.remove('left-active');
          _elemParent.classList.add('right-active');
        } else {
          _elemParent.classList.add('left-active');
          _elemParent.classList.add('right-active');
        }
      }
    });
  });
}
function handleTables() {
  // Init run
  var initTables = function initTables() {
    var table = document.querySelector('table');
    if (!table) {
      return;
    }
    window.onload = function () {
      table && checkTableWidth('table', 'tbody');
    };
    window.onresize = function () {
      table && checkTableWidth('table', 'tbody');
    };
  };
  initTables();
}


/***/ }),

/***/ "./resources/scripts/utilities/check-scroll.js":
/*!*****************************************************!*\
  !*** ./resources/scripts/utilities/check-scroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCheckScroll": function() { return /* binding */ handleCheckScroll; }
/* harmony export */ });
var lastScrollTop = 0;
function handleCheckScroll() {
  var body = document.body;
  var onScroll = function onScroll() {
    var scrolled = window.pageYOffset || document.scrollingElement.scrollTop;
    if (scrolled >= 60 && scrolled > lastScrollTop) {
      body.classList.add('not-top');
      body.classList.add('scrolled-down');
    } else if (scrolled >= 60) {
      body.classList.remove('scrolled-down');
    } else {
      body.classList.remove('not-top');
    }
    lastScrollTop = scrolled <= 0 ? 0 : scrolled;
  };
  document.addEventListener('scroll', onScroll);
}

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/editor.scss":
/*!**************************************!*\
  !*** ./resources/styles/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["styles/app","styles/editor","/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/editor.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtNQUNMaUMsSUFBSSxDQUFDcEMsU0FBUyxDQUFDRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0FnQyxhQUFhLEdBQUdQLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxRQUFRO0VBQzlDLENBQUM7RUFFRGpDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsUUFBUSxFQUFFc0MsUUFBUSxDQUFDO0FBQy9DOzs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2ZhbmN5Ym94LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvdGFibGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY2hlY2stc2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzPzJmMzAiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvZWRpdG9yLnNjc3M/Zjg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuXG5jb25zdCBtb3VudGVkRm5zID0gW1xuICBoYW5kbGVGYW5jeWJveCxcbiAgaGFuZGxlTWVudSxcbiAgaGFuZGxlVGFibGVzLFxuICBoYW5kbGVDaGVja1Njcm9sbCxcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJ107XG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQnV0dG9uc1xuICBGYW5jeWJveC5QbHVnaW5zLlRvb2xiYXIuZGVmYXVsdHMuaXRlbXMuY2xvc2UuaHRtbCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCAzMjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwIDMyMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHBhdGggZD1cIk0zMTUuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDBMMTYwIDE4Mi42IDI3LjMgMzE1LjNjLTYuMyA2LjMtMTYuNCA2LjMtMjIuNiAwLTYuMy02LjMtNi4zLTE2LjQgMC0yMi42TDEzNy40IDE2MCA0LjcgMjcuM2MtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjYgNi4zLTYuMyAxNi40LTYuMyAyMi42IDBMMTYwIDEzNy40IDI5Mi43IDQuN2M2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMCA2LjMgNi4zIDYuMyAxNi40IDAgMjIuNkwxODIuNiAxNjBsMTMyLjcgMTMyLjdjNi4zIDYuMiA2LjMgMTYuNCAwIDIyLjZ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcbiAgQ2Fyb3VzZWwuUGx1Z2lucy5OYXZpZ2F0aW9uLmRlZmF1bHRzLm5leHRUcGwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDIxIDQ1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0uNzIxLjg4MWMuOTU4LTEuMTc1IDIuNTAyLTEuMTc1IDMuNDYgMEwyMC40MjggMjAuODFjLjc2My45MzYuNzYzIDIuNDQ2IDAgMy4zODJMNC4xODEgNDQuMTE5Yy0uOTU4IDEuMTc1LTIuNTAyIDEuMTc1LTMuNDYgMC0uOTU4LTEuMTc1LS45NTgtMy4wNyAwLTQuMjQ1bDE0LjE1NS0xNy4zODZMLjcgNS4xMDJjLS45MzgtMS4xNTEtLjkzOC0zLjA3LjAyLTQuMjJ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcbiAgQ2Fyb3VzZWwuUGx1Z2lucy5OYXZpZ2F0aW9uLmRlZmF1bHRzLnByZXZUcGwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSA0NVwiPjxwYXRoIGQ9XCJNMjAuMyA0NC4xYTIuMiAyLjIgMCAwIDEtMy41IDBMLjYgMjQuMmEyLjcgMi43IDAgMCAxIDAtMy40TDE2LjguOWEyLjIgMi4yIDAgMCAxIDMuNSAwIDMuNiAzLjYgMCAwIDEgMCA0LjJMNi4xIDIyLjVsMTQuMiAxNy40YTMuNiAzLjYgMCAwIDEgMCA0LjJ6XCIgZmlsbD1cIiNmNGYxZTlcIi8+PC9zdmc+Jztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xuICAvLyBNb2JpbGUgbWVudVxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKVxuICAgIGNvbnN0IGJ1cmdlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLTInKVxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKVxuXG4gICAgaWYgKCFidXJnZXIgfHwgIWJ1cmdlcjIgfHwgIW1vYmlsZU1lbnUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnVyZ2VyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlTW9iaWxlTWVudSgpXG59XG4iLCJmdW5jdGlvbiBjaGVja1RhYmxlV2lkdGgoZWxlbXMsIGNoaWxkRWxlbSkge1xuICBjb25zdCBvdXRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcbiAgICBsZXQgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcbiAgICBpZiAoIWVsZW1QYXJlbnQpIHtcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS13cmFwJztcbiAgICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbSk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgZWxlbVBhcmVudCA9IGVsZW0uY2xvc2VzdCgnLnRhYmxlLXdyYXAnKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1yaWdodCcpKSB7XG4gICAgICBsZXQgc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xuICAgIH1cblxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LWxlZnQnKSkge1xuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHNoYWRvd1dyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSkub2Zmc2V0V2lkdGggPiBlbGVtUGFyZW50Lm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcbiAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tPdmVyZmxvdygpO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XG4gICAgICAgIGxldCBlbGVtQm9keSA9IGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLFxuICAgICAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xuICAgICAgICBpZiAoc2Nyb2xsZWQgPCAzKSB7XG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFjdGl2ZScpO1xuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5zY3JvbGxMZWZ0IDwgMykge1xuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1hY3RpdmUnKTtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXMoKSB7XG4gIC8vIEluaXQgcnVuXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcblxuICAgIGlmICghdGFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcbiAgICB9O1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xuICAgIH07XG4gIH1cbiAgaW5pdFRhYmxlcygpXG59XG5cbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cbiIsImxldCBsYXN0U2Nyb2xsVG9wID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBpZiAoc2Nyb2xsZWQgPj0gNjAgJiYgc2Nyb2xsZWQgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQtZG93bicpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPj0gNjApIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC10b3AnKTtcbiAgICB9XG4gICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbGVkIDw9IDAgPyAwIDogc2Nyb2xsZWQ7XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJoYW5kbGVUYWJsZXMiLCJoYW5kbGVDaGVja1Njcm9sbCIsIm1vdW50ZWRGbnMiLCJkZW1vdW50Rm4iLCJGYW5jeWJveCIsIkNhcm91c2VsIiwic2luZ2xlRmFuY3lJdGVtcyIsImZvckVhY2giLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwiZGlzcGxheSIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJQbHVnaW5zIiwiZGVmYXVsdHMiLCJpdGVtcyIsImNsb3NlIiwiaHRtbCIsIk5hdmlnYXRpb24iLCJuZXh0VHBsIiwicHJldlRwbCIsImhhbmRsZU1vYmlsZU1lbnUiLCJidXJnZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnVyZ2VyMiIsIm1vYmlsZU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJhZGQiLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJtYXAiLCJlbGVtUGFyZW50IiwiZWxlbSIsImNsb3Nlc3QiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJzaGFkb3dXcmFwcGVyIiwiY2hlY2tPdmVyZmxvdyIsIm9mZnNldFdpZHRoIiwicGFyZW50RWxlbWVudCIsImVsZW1Cb2R5Iiwic2Nyb2xsZWQiLCJzY3JvbGxMZWZ0IiwiaW5pdFRhYmxlcyIsInRhYmxlIiwid2luZG93Iiwib25sb2FkIiwib25yZXNpemUiLCJsYXN0U2Nyb2xsVG9wIiwiYm9keSIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==