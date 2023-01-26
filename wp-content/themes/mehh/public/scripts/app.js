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
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forms */ "./resources/scripts/components/forms.js");
// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';


// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports





// import {handleDropdowns} from "./components/dropdowns";

var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_2__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_4__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__.handleCheckScroll,
// handleDropdowns,
_components_forms__WEBPACK_IMPORTED_MODULE_6__.handleForms];

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

/***/ "./resources/scripts/components/forms.js":
/*!***********************************************!*\
  !*** ./resources/scripts/components/forms.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleForms": function() { return /* binding */ handleForms; }
/* harmony export */ });
function handleForms() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      // Recaptcha
      var reCaptcha;
      var FormCaptcha = document.querySelector('#g-recaptcha');
      if (event.target.classList.contains('needs-validation') && FormCaptcha) {
        // eslint-disable-next-line no-undef
        if (grecaptcha.getResponse(renderForm) === '') {
          reCaptcha = false;
          event.target.querySelector('#g-recaptcha').classList.add('captcha-error');
        } else {
          reCaptcha = true;
        }
      } else {
        reCaptcha = true;
      }
      if (!form.checkValidity() || !reCaptcha) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Recaptcha callback
  var renderForm;
  var FormCaptcha = document.querySelector('#g-recaptcha');
  window.CaptchaCallback = function () {
    if (FormCaptcha) {
      // eslint-disable-next-line no-undef
      renderForm = grecaptcha.render('g-recaptcha', {
        'sitekey': FormCaptcha.dataset.sitekey,
        'callback': correctCaptcha
      });
    }
  };
  var correctCaptcha = function correctCaptcha(response) {
    if (response !== '') FormCaptcha.classList.remove('captcha-error');
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQztBQUVkLFNBQVNsRixpQkFBaUIsR0FBRztFQUNsQyxJQUFNbUYsSUFBSSxHQUFHNUQsUUFBUSxDQUFDNEQsSUFBSTtFQUUxQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0lBQ3JCLElBQU1SLFFBQVEsR0FBR2pDLE1BQU0sQ0FBQzBDLFdBQVcsSUFBSTlELFFBQVEsQ0FBQytELGdCQUFnQixDQUFDQyxTQUFTO0lBQzFFLElBQUlYLFFBQVEsSUFBSSxFQUFFLElBQUlBLFFBQVEsR0FBR00sYUFBYSxFQUFFO01BQzlDQyxJQUFJLENBQUNqRCxTQUFTLENBQUNLLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0I0QyxJQUFJLENBQUNqRCxTQUFTLENBQUNLLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDckMsQ0FBQyxNQUFNLElBQUlxQyxRQUFRLElBQUksRUFBRSxFQUFFO01BQ3pCTyxJQUFJLENBQUNqRCxTQUFTLENBQUNnQixNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUMsTUFBTTtNQUNMaUMsSUFBSSxDQUFDakQsU0FBUyxDQUFDZ0IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBZ0MsYUFBYSxHQUFHTixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRURyRCxRQUFRLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRXdELFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvdXRpbGl0aWVzL2NoZWNrLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgKGltcG9ydGluZyBCUyBzY3JpcHRzIGluZGl2aWR1YWxseSlcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHtoYW5kbGVGYW5jeWJveH0gZnJvbSBcIi4vY29tcG9uZW50cy9mYW5jeWJveFwiO1xuaW1wb3J0IHtoYW5kbGVNZW51fSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xuaW1wb3J0IHtoYW5kbGVDaGVja1Njcm9sbH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NoZWNrLXNjcm9sbFwiO1xuaW1wb3J0IHtoYW5kbGVGb3Jtc30gZnJvbSBcIi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuLy8gaW1wb3J0IHtoYW5kbGVEcm9wZG93bnN9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd25zXCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuICBoYW5kbGVUYWJsZXMsXG4gIGhhbmRsZUNoZWNrU2Nyb2xsLFxuICAvLyBoYW5kbGVEcm9wZG93bnMsXG4gIGhhbmRsZUZvcm1zLFxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJpbXBvcnQgeyBGYW5jeWJveCB9IGZyb20gJ0BmYW5jeWFwcHMvdWknO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheTogW1xuICAgICAgICAgICdjbG9zZScsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknLCAnLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9fd3JhcHBlciBhJ107XG4gIGdhbGxlcnlGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgRmFuY3lib3guYmluZCh2YWx1ZSwge1xuICAgICAgZ3JvdXBBbGw6IHRydWUsXG4gICAgICBUb29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQnV0dG9uc1xuICBGYW5jeWJveC5QbHVnaW5zLlRvb2xiYXIuZGVmYXVsdHMuaXRlbXMuY2xvc2UuaHRtbCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCAzMjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwIDMyMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHBhdGggZD1cIk0zMTUuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDBMMTYwIDE4Mi42IDI3LjMgMzE1LjNjLTYuMyA2LjMtMTYuNCA2LjMtMjIuNiAwLTYuMy02LjMtNi4zLTE2LjQgMC0yMi42TDEzNy40IDE2MCA0LjcgMjcuM2MtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjYgNi4zLTYuMyAxNi40LTYuMyAyMi42IDBMMTYwIDEzNy40IDI5Mi43IDQuN2M2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMCA2LjMgNi4zIDYuMyAxNi40IDAgMjIuNkwxODIuNiAxNjBsMTMyLjcgMTMyLjdjNi4zIDYuMiA2LjMgMTYuNCAwIDIyLjZ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcbiAgQ2Fyb3VzZWwuUGx1Z2lucy5OYXZpZ2F0aW9uLmRlZmF1bHRzLm5leHRUcGwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDIxIDQ1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0uNzIxLjg4MWMuOTU4LTEuMTc1IDIuNTAyLTEuMTc1IDMuNDYgMEwyMC40MjggMjAuODFjLjc2My45MzYuNzYzIDIuNDQ2IDAgMy4zODJMNC4xODEgNDQuMTE5Yy0uOTU4IDEuMTc1LTIuNTAyIDEuMTc1LTMuNDYgMC0uOTU4LTEuMTc1LS45NTgtMy4wNyAwLTQuMjQ1bDE0LjE1NS0xNy4zODZMLjcgNS4xMDJjLS45MzgtMS4xNTEtLjkzOC0zLjA3LjAyLTQuMjJ6XCIgZmlsbD1cIiNGNEYxRTlcIi8+PC9zdmc+JztcbiAgQ2Fyb3VzZWwuUGx1Z2lucy5OYXZpZ2F0aW9uLmRlZmF1bHRzLnByZXZUcGwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSA0NVwiPjxwYXRoIGQ9XCJNMjAuMyA0NC4xYTIuMiAyLjIgMCAwIDEtMy41IDBMLjYgMjQuMmEyLjcgMi43IDAgMCAxIDAtMy40TDE2LjguOWEyLjIgMi4yIDAgMCAxIDMuNSAwIDMuNiAzLjYgMCAwIDEgMCA0LjJMNi4xIDIyLjVsMTQuMiAxNy40YTMuNiAzLjYgMCAwIDEgMCA0LjJ6XCIgZmlsbD1cIiNmNGYxZTlcIi8+PC9zdmc+Jztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb3JtcygpIHtcbiAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpXG5cbiAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxuICBBcnJheS5mcm9tKGZvcm1zKS5mb3JFYWNoKGZvcm0gPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG4gICAgICAvLyBSZWNhcHRjaGFcbiAgICAgIGxldCByZUNhcHRjaGE7XG4gICAgICBsZXQgRm9ybUNhcHRjaGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZy1yZWNhcHRjaGEnKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkcy12YWxpZGF0aW9uJykgJiYgRm9ybUNhcHRjaGEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGlmICggZ3JlY2FwdGNoYS5nZXRSZXNwb25zZShyZW5kZXJGb3JtKSA9PT0gJycgKSB7XG4gICAgICAgICAgcmVDYXB0Y2hhID0gZmFsc2U7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNnLXJlY2FwdGNoYScpLmNsYXNzTGlzdC5hZGQoJ2NhcHRjaGEtZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZUNhcHRjaGEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpIHx8ICFyZUNhcHRjaGEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxuICAgIH0sIGZhbHNlKVxuICB9KVxuXG4gIC8vIFJlY2FwdGNoYSBjYWxsYmFja1xuICBsZXQgcmVuZGVyRm9ybTtcbiAgbGV0IEZvcm1DYXB0Y2hhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ctcmVjYXB0Y2hhJyk7XG4gIHdpbmRvdy5DYXB0Y2hhQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIEZvcm1DYXB0Y2hhICkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZW5kZXJGb3JtID0gZ3JlY2FwdGNoYS5yZW5kZXIoJ2ctcmVjYXB0Y2hhJywgeydzaXRla2V5JyA6IEZvcm1DYXB0Y2hhLmRhdGFzZXQuc2l0ZWtleSwgJ2NhbGxiYWNrJyA6IGNvcnJlY3RDYXB0Y2hhfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBjb3JyZWN0Q2FwdGNoYSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKCByZXNwb25zZSAhPT0gJycpXG4gICAgICBGb3JtQ2FwdGNoYS5jbGFzc0xpc3QucmVtb3ZlKCdjYXB0Y2hhLWVycm9yJyk7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgLy8gTW9iaWxlIG1lbnVcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51JylcblxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ1cmdlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxufVxuIiwiZnVuY3Rpb24gY2hlY2tUYWJsZVdpZHRoKGVsZW1zLCBjaGlsZEVsZW0pIHtcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gIEFycmF5LmZyb20ob3V0ZXJFbGVtKS5tYXAoZWxlbSA9PiB7XG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XG4gICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtd3JhcCc7XG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgIGVsZW1QYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJy50YWJsZS13cmFwJyk7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctcmlnaHQnKSkge1xuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctcmlnaHQnO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW0ucXVlcnlTZWxlY3RvcignLnNoYWRvdy1sZWZ0JykpIHtcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSAnc2hhZG93LWxlZnQnO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChzaGFkb3dXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrT3ZlcmZsb3coKTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLXdyYXAnKSkge1xuICAgICAgICBsZXQgZWxlbUJvZHkgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoY2hpbGRFbGVtKSxcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xuICAgICAgICBsZXQgc2Nyb2xsZWQgPSAoZWxlbUJvZHkub2Zmc2V0V2lkdGggLSBlbGVtUGFyZW50Lm9mZnNldFdpZHRoIC0gZWxlbS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgMykge1xuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW0uc2Nyb2xsTGVmdCA8IDMpIHtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XG4gICAgICAgICAgZWxlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFibGVzKCkge1xuICAvLyBJbml0IHJ1blxuICBjb25zdCBpbml0VGFibGVzID0gKCkgPT4ge1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG5cbiAgICBpZiAoIXRhYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhYmxlICYmIGNoZWNrVGFibGVXaWR0aCgndGFibGUnLCAndGJvZHknKTtcbiAgICB9O1xuICB9XG4gIGluaXRUYWJsZXMoKVxufVxuXG5leHBvcnQgeyBjaGVja1RhYmxlV2lkdGgsIGhhbmRsZVRhYmxlcyB9XG4iLCJsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja1Njcm9sbCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtdG9wJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkLWRvd24nKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkLWRvd24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XG4gICAgfVxuICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxlZCA8PSAwID8gMCA6IHNjcm9sbGVkO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaGFuZGxlRmFuY3lib3giLCJoYW5kbGVNZW51IiwiaGFuZGxlVGFibGVzIiwiaGFuZGxlQ2hlY2tTY3JvbGwiLCJoYW5kbGVGb3JtcyIsIm1vdW50ZWRGbnMiLCJkZW1vdW50Rm4iLCJGYW5jeWJveCIsIkNhcm91c2VsIiwic2luZ2xlRmFuY3lJdGVtcyIsImZvckVhY2giLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwiZGlzcGxheSIsImdhbGxlcnlGYW5jeUl0ZW1zIiwiZ3JvdXBBbGwiLCJQbHVnaW5zIiwiZGVmYXVsdHMiLCJpdGVtcyIsImNsb3NlIiwiaHRtbCIsIk5hdmlnYXRpb24iLCJuZXh0VHBsIiwicHJldlRwbCIsImZvcm1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZUNhcHRjaGEiLCJGb3JtQ2FwdGNoYSIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwicmVuZGVyRm9ybSIsImFkZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIndpbmRvdyIsIkNhcHRjaGFDYWxsYmFjayIsInJlbmRlciIsImRhdGFzZXQiLCJzaXRla2V5IiwiY29ycmVjdENhcHRjaGEiLCJyZXNwb25zZSIsInJlbW92ZSIsImhhbmRsZU1vYmlsZU1lbnUiLCJidXJnZXIiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlcjIiLCJtb2JpbGVNZW51Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tUYWJsZVdpZHRoIiwiZWxlbXMiLCJjaGlsZEVsZW0iLCJvdXRlckVsZW0iLCJtYXAiLCJlbGVtUGFyZW50IiwiZWxlbSIsImNsb3Nlc3QiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInNoYWRvd1dyYXBwZXIiLCJjaGVja092ZXJmbG93Iiwib2Zmc2V0V2lkdGgiLCJwYXJlbnRFbGVtZW50IiwiZWxlbUJvZHkiLCJzY3JvbGxlZCIsInNjcm9sbExlZnQiLCJpbml0VGFibGVzIiwidGFibGUiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImxhc3RTY3JvbGxUb3AiLCJib2R5Iiwib25TY3JvbGwiLCJwYWdlWU9mZnNldCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9