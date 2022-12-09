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




// import {handleDropdowns} from "./components/dropdowns";

var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_2__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_4__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__.handleCheckScroll
// handleDropdowns,
];

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
  var galleryFancyItems = ['.gallery-item a:not(.no-fancy)', '.woocommerce-product-gallery__wrapper a'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQyxNQUFNO01BQ0xpQyxJQUFJLENBQUNwQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQWdDLGFBQWEsR0FBR1AsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdBLFFBQVE7RUFDOUMsQ0FBQztFQUVEakMsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVzQyxRQUFRLENBQUM7QUFDL0M7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy90YWJsZXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL3V0aWxpdGllcy9jaGVjay1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3M/MmYzMCIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcz9mODU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XG5pbXBvcnQge2hhbmRsZU1lbnV9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHtoYW5kbGVUYWJsZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XG4vLyBpbXBvcnQge2hhbmRsZURyb3Bkb3duc30gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bnNcIjtcblxuY29uc3QgbW91bnRlZEZucyA9IFtcbiAgaGFuZGxlRmFuY3lib3gsXG4gIGhhbmRsZU1lbnUsXG4gIGhhbmRsZVRhYmxlcyxcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXG4gIC8vIGhhbmRsZURyb3Bkb3ducyxcbl1cblxuLy8gUnVuIGZuLXNcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcbiAgdHlwZW9mIGRlbW91bnRGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZW1vdW50Rm4oKVxufVxuIiwiaW1wb3J0IHsgRmFuY3lib3ggfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGYW5jeWJveCgpIHtcbiAgLy8gU2luZ2xlXG4gIGNvbnN0IHNpbmdsZUZhbmN5SXRlbXMgPSBbJ2FbaHJlZiQ9XCIuanBnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5qcGVnXCJdOm5vdCgubm8tZmFuY3kpJywnYVtocmVmJD1cIi5wbmdcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi53ZWJwXCJdOm5vdCgubm8tZmFuY3kpJywgJ2FbaHJlZiQ9XCIuc3ZnXCJdOm5vdCgubm8tZmFuY3kpJywgJy5mYW5jeWltYWdlJywgJy5mYW5jeXZpZGVvJ107XG4gIHNpbmdsZUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gR2FsbGVyeVxuICBjb25zdCBnYWxsZXJ5RmFuY3lJdGVtcyA9IFsnLmdhbGxlcnktaXRlbSBhOm5vdCgubm8tZmFuY3kpJywgJy53b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX3dyYXBwZXIgYSddO1xuICBnYWxsZXJ5RmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIGdyb3VwQWxsOiB0cnVlLFxuICAgICAgVG9vbGJhcjoge1xuICAgICAgICBkaXNwbGF5OiBbXG4gICAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEJ1dHRvbnNcbiAgRmFuY3lib3guUGx1Z2lucy5Ub29sYmFyLmRlZmF1bHRzLml0ZW1zLmNsb3NlLmh0bWwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgMzIwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMCAzMjBcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxwYXRoIGQ9XCJNMzE1LjMgMzE1LjNjLTYuMyA2LjMtMTYuNCA2LjMtMjIuNiAwTDE2MCAxODIuNiAyNy4zIDMxNS4zYy02LjMgNi4zLTE2LjQgNi4zLTIyLjYgMC02LjMtNi4zLTYuMy0xNi40IDAtMjIuNkwxMzcuNCAxNjAgNC43IDI3LjNjLTYuMy02LjMtNi4zLTE2LjQgMC0yMi42IDYuMy02LjMgMTYuNC02LjMgMjIuNiAwTDE2MCAxMzcuNCAyOTIuNyA0LjdjNi4zLTYuMyAxNi40LTYuMyAyMi42IDAgNi4zIDYuMyA2LjMgMTYuNCAwIDIyLjZMMTgyLjYgMTYwbDEzMi43IDEzMi43YzYuMyA2LjIgNi4zIDE2LjQgMCAyMi42elwiIGZpbGw9XCIjRjRGMUU5XCIvPjwvc3ZnPic7XG4gIENhcm91c2VsLlBsdWdpbnMuTmF2aWdhdGlvbi5kZWZhdWx0cy5uZXh0VHBsID0gJzxzdmcgdmlld0JveD1cIjAgMCAyMSA0NVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNLjcyMS44ODFjLjk1OC0xLjE3NSAyLjUwMi0xLjE3NSAzLjQ2IDBMMjAuNDI4IDIwLjgxYy43NjMuOTM2Ljc2MyAyLjQ0NiAwIDMuMzgyTDQuMTgxIDQ0LjExOWMtLjk1OCAxLjE3NS0yLjUwMiAxLjE3NS0zLjQ2IDAtLjk1OC0xLjE3NS0uOTU4LTMuMDcgMC00LjI0NWwxNC4xNTUtMTcuMzg2TC43IDUuMTAyYy0uOTM4LTEuMTUxLS45MzgtMy4wNy4wMi00LjIyelwiIGZpbGw9XCIjRjRGMUU5XCIvPjwvc3ZnPic7XG4gIENhcm91c2VsLlBsdWdpbnMuTmF2aWdhdGlvbi5kZWZhdWx0cy5wcmV2VHBsID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjEgNDVcIj48cGF0aCBkPVwiTTIwLjMgNDQuMWEyLjIgMi4yIDAgMCAxLTMuNSAwTC42IDI0LjJhMi43IDIuNyAwIDAgMSAwLTMuNEwxNi44LjlhMi4yIDIuMiAwIDAgMSAzLjUgMCAzLjYgMy42IDAgMCAxIDAgNC4yTDYuMSAyMi41bDE0LjIgMTcuNGEzLjYgMy42IDAgMCAxIDAgNC4yelwiIGZpbGw9XCIjZjRmMWU5XCIvPjwvc3ZnPic7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgLy8gTW9iaWxlIG1lbnVcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcblxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gIEFycmF5LmZyb20ob3V0ZXJFbGVtKS5tYXAoZWxlbSA9PiB7XG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctcmlnaHQnO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LWxlZnQnO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrT3ZlcmZsb3coKTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLXdyYXAnKSkge1xuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xuICAgICAgICBsZXQgc2Nyb2xsZWQgPSAoZWxlbUJvZHkub2Zmc2V0V2lkdGggLSBlbGVtUGFyZW50Lm9mZnNldFdpZHRoIC0gZWxlbS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xuICAvLyBJbml0IHJ1blxuICBjb25zdCBpbml0VGFibGVzID0gKCkgPT4ge1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG5cbiAgICBpZiAoIXRhYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcbiAgICB9O1xuICB9XG4gIGluaXRUYWJsZXMoKVxufVxuXG5leHBvcnQgeyBjaGVja1RhYmxlV2lkdGgsIGhhbmRsZVRhYmxlcyB9XG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja1Njcm9sbCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtdG9wJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkLWRvd24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XG4gICAgfVxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaGFuZGxlRmFuY3lib3giLCJoYW5kbGVNZW51IiwiaGFuZGxlVGFibGVzIiwiaGFuZGxlQ2hlY2tTY3JvbGwiLCJtb3VudGVkRm5zIiwiZGVtb3VudEZuIiwiRmFuY3lib3giLCJDYXJvdXNlbCIsInNpbmdsZUZhbmN5SXRlbXMiLCJmb3JFYWNoIiwidmFsdWUiLCJiaW5kIiwiVG9vbGJhciIsImRpc3BsYXkiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiUGx1Z2lucyIsImRlZmF1bHRzIiwiaXRlbXMiLCJjbG9zZSIsImh0bWwiLCJOYXZpZ2F0aW9uIiwibmV4dFRwbCIsInByZXZUcGwiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlcjIiLCJtb2JpbGVNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYWRkIiwiY2hlY2tUYWJsZVdpZHRoIiwiZWxlbXMiLCJjaGlsZEVsZW0iLCJvdXRlckVsZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZWxlbVBhcmVudCIsImVsZW0iLCJjbG9zZXN0Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwic2hhZG93V3JhcHBlciIsImNoZWNrT3ZlcmZsb3ciLCJvZmZzZXRXaWR0aCIsInBhcmVudEVsZW1lbnQiLCJlbGVtQm9keSIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIndpbmRvdyIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsImJvZHkiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=