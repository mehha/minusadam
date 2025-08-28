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
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cookie_banner */ "./resources/scripts/components/cookie_banner.js");
/* harmony import */ var _components_full_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/full-calendar */ "./resources/scripts/components/full-calendar.js");
/* harmony import */ var _components_lang_switcher_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lang-switcher-flags */ "./resources/scripts/components/lang-switcher-flags.js");
// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';


// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports








// import {handleDropdowns} from "./components/dropdowns";

var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_2__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenu, _components_tables__WEBPACK_IMPORTED_MODULE_4__.handleTables, _utilities_check_scroll__WEBPACK_IMPORTED_MODULE_5__.handleCheckScroll,
// handleDropdowns,
_components_forms__WEBPACK_IMPORTED_MODULE_6__.handleForms, _components_cookie_banner__WEBPACK_IMPORTED_MODULE_7__.handleCookieBanner, _components_full_calendar__WEBPACK_IMPORTED_MODULE_8__.handleFullCalendar, _components_lang_switcher_flags__WEBPACK_IMPORTED_MODULE_9__.handleLangSwitcherFlags];

// Run fn-s
for (var _i = 0, _mountedFns = mountedFns; _i < _mountedFns.length; _i++) {
  var demountFn = _mountedFns[_i];
  typeof demountFn === 'function' && demountFn();
}

/***/ }),

/***/ "./resources/scripts/components/cookie_banner.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/components/cookie_banner.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCookieBanner": function() { return /* binding */ handleCookieBanner; }
/* harmony export */ });
function handleCookieBanner() {
  var cookieAcceptButton = document.getElementById("accept-cookies");
  if (!cookieAcceptButton) {
    return;
  }
  cookieAcceptButton.addEventListener("click", function () {
    document.getElementById("cookie-banner").style.display = "none";
    // Set a cookie to remember that the user has accepted the use of cookies
    document.cookie = "cookies_accepted=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
  });
  // Check if the cookie has already been set
  if (document.cookie.indexOf("cookies_accepted=true") !== -1) {
    document.getElementById("cookie-banner").style.display = "none";
  }
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
    var startTime = performance.now();
    form.addEventListener('submit', function (event) {
      var siteKey = form.dataset.sitekey;
      var baseUrl = form.dataset.baseurl;
      event.preventDefault();
      form.classList.add('was-validated');
      var endTime = performance.now();
      var timeElapsed = endTime - startTime;
      if (!form.checkValidity() || timeElapsed < 6000) return;
      grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, {
          action: 'submit'
        }).then(function (token) {
          fetch(baseUrl + '/wp-json/wp/v2/verify-recaptcha', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'recaptcha_token=' + token
          }).then(function (response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          }).then(function (data) {
            if (data.success) {
              form.submit();
            } else {
              console.log("reCAPTCHA verification failed or data validation failed", data);
            }
          })["catch"](function (error) {
            console.error('There was a problem with the fetch operation:', error);
          });
        });
      });
    }, false);
  });
}

/***/ }),

/***/ "./resources/scripts/components/full-calendar.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/components/full-calendar.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFullCalendar": function() { return /* binding */ handleFullCalendar; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_core_locales_et__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/locales/et */ "./node_modules/@fullcalendar/core/locales/et.js");
/* harmony import */ var _utilities_window_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/window-size */ "./resources/scripts/utilities/window-size.js");




function handleFullCalendar() {
  var calendarElFull = document.getElementById('full-calendar');
  if (!calendarElFull) {
    return;
  }
  var handleData = function handleData(data) {
    var modifiedData = [];
    data.map(function (single) {
      modifiedData.push({
        title: single.label,
        start: single.begin,
        end: single.end
      });
    });
    return modifiedData;
  };
  try {
    // eslint-disable-next-line no-undef
    fetch(baseUrl + '/wp-json/wp/v2/bookings').then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log('data', data);
      handleData(data);
      initCalendar(handleData(data));
    });
  } catch (e) {
    console.log('error', e);
  }
  var initCalendar = function initCalendar(events) {
    var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(calendarElFull, {
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]],
      initialView: 'dayGridMonth',
      events: events,
      locale: _fullcalendar_core_locales_et__WEBPACK_IMPORTED_MODULE_3__["default"],
      displayEventTime: false,
      eventDisplay: 'block',
      contentHeight: 420,
      headerToolbar: {
        left: 'prev,next today',
        center: '',
        right: 'title'
      },
      eventContent: function eventContent(info) {
        console.log('info', info);
        var titleHtml = '<div class="fc-event-title fc-sticky">' + info.event.title + '</div>';
        return {
          html: titleHtml
        };
      }
    });
    calendar.render();
  };
}

/***/ }),

/***/ "./resources/scripts/components/lang-switcher-flags.js":
/*!*************************************************************!*\
  !*** ./resources/scripts/components/lang-switcher-flags.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLangSwitcherFlags": function() { return /* binding */ handleLangSwitcherFlags; }
/* harmony export */ });
function handleLangSwitcherFlags() {
  var widget = document.querySelector('header.banner .widget_mslswidget');
  if (!widget) return;
  if (widget.querySelector('a[title="EN"]')) widget.querySelector('a[title="EN"]').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/></svg>';
  if (widget.querySelector('a[title="FI"]')) widget.querySelector('a[title="FI"]').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#003580" d="M0 174.5h640v131H0z"/><path fill="#003580" d="M175.5 0h130.9v480h-131z"/></svg>';
  if (widget.querySelector('a[title="ET"]')) widget.querySelector('a[title="ET"]').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><g fill-rule="evenodd" stroke-width="1pt"><rect width="640" height="477.9" rx="0" ry="0"/><rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0"/><path fill="#1291ff" d="M0 0h640v159.3H0z"/></g></svg>';
  if (widget.querySelector('a[title="PT"]')) widget.querySelector('a[title="PT"]').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480"><path fill="red" d="M256 0h384v480H256z"/><path fill="#060" d="M0 0h256v480H0z"/><g fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".6"><path d="M339.5 306.2c-32.3-1-180-93.2-181-108l8.1-13.5c14.7 21.3 165.7 111 180.6 107.8l-7.7 13.7"/><path d="M164.9 182.8c-2.9 7.8 38.6 33.4 88.4 63.8 49.9 30.3 92.9 49 96 46.4l1.5-2.8c-.6 1-2 1.3-4.3.6-13.5-3.9-48.6-20-92.1-46.4-43.6-26.4-81.4-50.7-87.3-61a6.3 6.3 0 0 1-.6-3.1h-.2l-1.2 2.2-.2.3zm175.3 123.8c-.5 1-1.6 1-3.5.8-12-1.3-48.6-19.1-91.9-45-50.4-30.2-92-57.6-87.4-64.8l1.2-2.2.2.1c-4 12.2 82.1 61.4 87.2 64.6 49.8 30.8 91.8 48.9 95.5 44.2l-1.3 2.3z"/><path d="M256.2 207.2c32.2-.3 72-4.4 95-13.6l-5-8c-13.5 7.5-53.5 12.5-90.3 13.2-43.4-.4-74.1-4.5-89.5-14.8l-4.6 8.6c28.2 12 57.2 14.5 94.4 14.6"/><path d="M352.5 193.8c-.8 1.3-15.8 6.4-37.8 10.2a381.2 381.2 0 0 1-58.6 4.3 416.1 416.1 0 0 1-56.2-3.6c-23.1-3.6-35-8.6-39.5-10.4l1.1-2.2c12.7 5 24.7 8 38.7 10.2A411.5 411.5 0 0 0 256 206a391.8 391.8 0 0 0 58.3-4.3c22.5-3.7 34.8-8.4 36.6-10.5l1.6 2.7zm-4.4-8.1c-2.4 2-14.6 6.3-36 9.7a388.2 388.2 0 0 1-55.8 4c-22 0-40.1-1.6-53.8-3.6-21.8-2.8-33.4-8-37.6-9.4l1.3-2.2c3.3 1.7 14.4 6.2 36.5 9.3a385 385 0 0 0 53.6 3.4 384 384 0 0 0 55.4-4c21.5-3 33.1-8.4 34.9-9.8l1.5 2.6zM150.3 246c19.8 10.7 63.9 16 105.6 16.4 38 .1 87.4-5.8 105.9-15.6l-.5-10.7c-5.8 9-58.8 17.7-105.8 17.4-47-.4-90.7-7.6-105.3-17v9.5"/><path d="M362.8 244.5v2.5c-2.8 3.4-20.2 8.4-42 12a434 434 0 0 1-65.4 4.4 400 400 0 0 1-62-4.3 155 155 0 0 1-44.4-12v-2.9c9.7 6.4 35.9 11.2 44.7 12.6 15.8 2.4 36.1 4.2 61.7 4.2 26.9 0 48.4-1.9 65-4.4 15.7-2.3 38-8.2 42.4-12.1zm0-9v2.5c-2.8 3.3-20.2 8.3-42 11.9a434 434 0 0 1-65.4 4.5 414 414 0 0 1-62-4.3 155 155 0 0 1-44.4-12v-3c9.7 6.5 36 11.2 44.7 12.6a408 408 0 0 0 61.7 4.3c26.9 0 48.5-2 65-4.5 15.7-2.2 38-8.1 42.4-12zm-107 68.8c-45.6-.2-84.7-12.4-93-14.4l6 9.4a249.8 249.8 0 0 0 87.4 14.3c34.7-1 65-3.7 86.3-14.1l6.2-9.8c-14.5 6.9-64 14.6-93 14.6"/><path d="M344.9 297.3a143 143 0 0 1-2.8 4c-10 3.6-26 7.4-32.6 8.4a295.5 295.5 0 0 1-53.7 5c-40.4-.6-73.5-8.5-89-15.3l-1.3-2.1.2-.4 2.1.9a286.5 286.5 0 0 0 88.2 14.5c18.8 0 37.5-2.1 52.6-4.8 23.2-4.7 32.6-8.2 35.5-9.8l.7-.4zm5.3-8.8a287.2 287.2 0 0 1-2 3.5c-5.4 2-20 6.2-41.3 9.2-14 1.9-22.7 3.8-50.6 4.3a347.4 347.4 0 0 1-94.2-14L161 289a390 390 0 0 0 95.4 14c25.5-.5 36.4-2.4 50.3-4.3 24.8-3.8 37.3-8 41-9.1a2.9 2.9 0 0 0 0-.2l2.6-1z"/><path d="M350.8 237.6c.1 30-15.3 57-27.6 68.8a99.3 99.3 0 0 1-67.8 28.2c-30.3.5-58.8-19.2-66.5-27.9a101 101 0 0 1-27.5-67.4c1.8-32.8 14.7-55.6 33.3-71.3a99.6 99.6 0 0 1 64.2-22.7 98.2 98.2 0 0 1 71 35.6c12.5 15.2 18 31.7 20.9 56.7zM255.6 135a106 106 0 0 1 106 105.2 105.6 105.6 0 1 1-211.4 0c-.1-58 47.3-105.2 105.4-105.2"/><path d="M255.9 134.5c58.2 0 105.6 47.4 105.6 105.6S314.1 345.7 256 345.7s-105.6-47.4-105.6-105.6c0-58.2 47.4-105.6 105.6-105.6zM152.6 240c0 56.8 46.7 103.3 103.3 103.3 56.6 0 103.3-46.5 103.3-103.3s-46.7-103.3-103.3-103.3S152.6 183.2 152.6 240z"/><path d="M256 143.3a97 97 0 0 1 96.7 96.7 97.1 97.1 0 0 1-96.7 96.8c-53 0-96.7-43.6-96.7-96.8a97.1 97.1 0 0 1 96.7-96.7zM161.6 240c0 52 42.6 94.4 94.4 94.4s94.4-42.5 94.4-94.4c0-52-42.6-94.4-94.4-94.4a94.8 94.8 0 0 0-94.4 94.4z"/><path d="M260.3 134h-9.1v212.3h9z"/><path d="M259.3 132.8h2.3v214.7h-2.2V132.8zm-9 0h2.4v214.7h-2.3V132.8z"/><path d="M361.6 244.2v-7.8l-6.4-6-36.3-9.6-52.2-5.3-63 3.2-44.8 10.6-9 6.7v7.9l22.9-10.3 54.4-8.5h52.3l38.4 4.2 26.6 6.4z"/><path d="M256 223.8c24.9 0 49 2.3 68.3 6 19.8 4 33.7 9 38.5 14.5v2.8c-5.8-7-24.5-12-39-15-19-3.6-43-6-67.9-6-26.1 0-50.5 2.6-69.3 6.2-15 3-35.1 9-37.6 14.8v-2.9c1.3-4 16.3-10 37.3-14.3 18.9-3.7 43.3-6.1 69.6-6.1zm0-9.1a383 383 0 0 1 68.3 6c19.8 4 33.7 9 38.5 14.6v2.7c-5.8-6.9-24.5-12-39-14.9-19-3.7-43-6-67.9-6a376 376 0 0 0-69.2 6.2c-14.5 2.7-35.4 8.9-37.7 14.7v-2.8c1.4-4 16.6-10.3 37.3-14.3 19-3.7 43.3-6.2 69.7-6.2zm-.6-46.2c39.3-.2 73.6 5.5 89.3 13.5l5.7 10c-13.6-7.4-50.6-15-94.9-14-36.1.3-74.7 4-94 14.4l6.8-11.4c15.9-8.3 53.3-12.5 87.1-12.5"/><path d="M256 176.7a354 354 0 0 1 61.3 4.3c16 3 31.3 7.4 33.5 9.8l1.7 3c-5.3-3.4-18.6-7.3-35.6-10.5s-38.7-4.3-61-4.2c-25.3-.1-45 1.2-61.8 4.2a108.9 108.9 0 0 0-33.3 10.3l1.7-3.1c6-3 15.3-6.7 31.1-9.6 17.5-3.2 37.4-4.1 62.4-4.2zm0-9c21.4-.2 42.6 1 59.1 4a96 96 0 0 1 30.6 10l2.5 4c-4.2-4.7-20-9.2-34.1-11.6-16.4-2.9-36.7-4-58.1-4.2a361 361 0 0 0-59.5 4.4 97.3 97.3 0 0 0-29.6 9.1l2.2-3.3c5.8-3 15.2-5.8 27-8.1a357 357 0 0 1 59.9-4.4zM308.4 284a276.4 276.4 0 0 0-52.5-4c-65.5.8-86.6 13.5-89.2 17.3l-5-8c16.8-12 52.4-18.8 94.6-18.2 21.9.4 40.8 1.9 56.6 5l-4.5 8"/><path d="M255.6 278.9c18.2.3 36 1 53.3 4.2l-1.2 2.2c-16-3-33.2-4-52-4-24.3-.2-48.7 2.1-70 8.2-6.7 1.9-17.8 6.2-19 9.8l-1.2-2c.4-2.2 7-6.6 19.6-10 24.4-7 47.2-8.3 70.5-8.4zm.8-9.2a327 327 0 0 1 57.3 5l-1.3 2.3a299 299 0 0 0-56-4.9c-24.2 0-49.9 1.8-73.3 8.6-7.5 2.2-20.6 7-21 10.7l-1.2-2.2c.2-3.4 11.5-7.9 21.7-10.8 23.5-6.9 49.3-8.6 73.8-8.7z"/><path d="m349.4 290.5-7.8 12.3-22.7-20.1-58.6-39.5-66.2-36.3-34.3-11.7 7.3-13.6 2.5-1.3 21.3 5.3 70.4 36.3 40.6 25.6L336 272l13.9 16z"/><path d="M158.6 195.5c6-4 50.2 15.6 96.6 43.6 46.1 28 90.3 59.6 86.3 65.5l-1.3 2.1-.6.5c.1-.1.8-1 0-3.1-2-6.5-33.4-31.5-85.3-62.9-50.7-30.1-92.9-48.3-97-43.1l1.3-2.6zM351 290.4c3.8-7.6-37.2-38.5-88.1-68.6-52-29.5-89.6-46.9-96.5-41.7L165 183c0 .1 0-.2.4-.5 1.2-1 3.3-1 4.2-1 11.8.2 45.5 15.7 92.8 42.8 20.8 12 87.6 55 87.3 67 0 1 .1 1.2-.3 1.8l1.7-2.6z"/></g><g transform="translate(0 26.7) scale(1.06667)"><path fill="#fff" stroke="#000" stroke-width=".7" d="M180.6 211a58.7 58.7 0 0 0 17.5 41.7 59 59 0 0 0 41.8 17.6 59.4 59.4 0 0 0 42-17.4 59 59 0 0 0 17.4-41.8v-79.2l-118.7-.2V211z"/><path fill="red" stroke="#000" stroke-width=".5" d="M182.8 211.1a56.4 56.4 0 0 0 16.8 40 57 57 0 0 0 40.2 16.8 56.9 56.9 0 0 0 40.2-16.6 56.4 56.4 0 0 0 16.7-40v-77H183v76.8m91-53.7v48.9l-.1 5.1a33.2 33.2 0 0 1-10 24 34 34 0 0 1-24 10c-9.4 0-17.7-4-23.9-10.2a34 34 0 0 1-10-24v-54l68 .2z"/><g id="e"><g id="d" fill="#ff0" stroke="#000" stroke-width=".5"><path stroke="none" d="M190.2 154.4c.1-5.5 4-6.8 4-6.8.1 0 4.3 1.4 4.3 6.9h-8.3"/><path d="m186.8 147.7-.7 6.3h4.2c0-5.2 4-6 4-6 .1 0 4 1.1 4.1 6h4.2l-.8-6.4h-15zm-1 6.4h17c.3 0 .6.3.6.7 0 .5-.3.8-.6.8h-17c-.3 0-.6-.3-.6-.8 0-.4.3-.7.7-.7z"/><path d="M192 154c0-3.3 2.3-4.2 2.3-4.2s2.3 1 2.3 4.2H192m-5.8-9h16.3c.3 0 .6.4.6.8 0 .3-.3.6-.6.6h-16.3c-.3 0-.6-.3-.6-.7 0-.3.3-.6.6-.6zm.4 1.5H202c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-15.5c-.4 0-.6-.3-.6-.7 0-.4.2-.7.6-.7zm5-10.6h1.2v.8h.9v-.8h1.3v.9h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.4c-.3 0-.6-.2-.6-.5v-2zm4.6 2.7.3 6.4h-4.3l.3-6.5h3.7"/><path id="a" d="M191 141.6v3.4h-4v-3.4h4z"/><use width="100%" height="100%" x="10.6" xlink:href="#a"/><path id="b" d="M186.3 139h1.2v1h.9v-1h1.2v1h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.3a.6.6 0 0 1-.6-.6v-2z"/><use width="100%" height="100%" x="10.6" xlink:href="#b"/><path fill="#000" stroke="none" d="M193.9 140.6c0-.6.9-.6.9 0v1.6h-.9v-1.6"/><path id="c" fill="#000" stroke="none" d="M188.6 142.8c0-.6.8-.6.8 0v1.2h-.8v-1.2"/><use width="100%" height="100%" x="10.6" xlink:href="#c"/></g><use width="100%" height="100%" y="46.3" xlink:href="#d"/><use width="100%" height="100%" transform="rotate(-45.2 312.8 180)" xlink:href="#d"/></g><use width="100%" height="100%" x="45.7" xlink:href="#d"/><use width="100%" height="100%" transform="matrix(-1 0 0 1 479.8 0)" xlink:href="#e"/><g id="f" fill="#fff"><path fill="#039" d="M232.6 202.4a8.3 8.3 0 0 0 2.2 5.7 7.2 7.2 0 0 0 5.3 2.4c2.1 0 4-1 5.3-2.4a8.3 8.3 0 0 0 2.2-5.7v-10.8h-15v10.8"/><circle cx="236.1" cy="195.7" r="1.5"/><circle cx="244.4" cy="195.7" r="1.5"/><circle cx="240.2" cy="199.7" r="1.5"/><circle cx="236.1" cy="203.9" r="1.5"/><circle cx="244.4" cy="203.9" r="1.5"/></g><use width="100%" height="100%" y="-26" xlink:href="#f"/><use width="100%" height="100%" x="-20.8" xlink:href="#f"/><use width="100%" height="100%" x="20.8" xlink:href="#f"/><use width="100%" height="100%" y="25.8" xlink:href="#f"/></g></svg>';
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

/***/ "./resources/scripts/utilities/window-size.js":
/*!****************************************************!*\
  !*** ./resources/scripts/utilities/window-size.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "windowHeight": function() { return /* binding */ windowHeight; },
/* harmony export */   "windowWidth": function() { return /* binding */ windowWidth; }
/* harmony export */ });
var windowWidth = function windowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};
var windowHeight = function windowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3NjcmlwdHMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ29DO0FBQ0Y7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ3FEO0FBQ1I7QUFDSTtBQUNVO0FBQ1o7QUFDZTtBQUNBO0FBQ1c7QUFDekU7O0FBRUEsSUFBTVEsVUFBVSxHQUFHLENBQ2pCUixnRUFBYyxFQUNkQyx3REFBVSxFQUNWQyw0REFBWSxFQUNaQyxzRUFBaUI7QUFDakI7QUFDQUMsMERBQVcsRUFDWEMseUVBQWtCLEVBQ2xCQyx5RUFBa0IsRUFDbEJDLG9GQUF1QixDQUN4Qjs7QUFFRDtBQUNBLCtCQUF3QkMsVUFBVSxpQ0FBRTtFQUEvQixJQUFNQyxTQUFTO0VBQ2xCLE9BQU9BLFNBQVMsS0FBSyxVQUFVLElBQUlBLFNBQVMsRUFBRTtBQUNoRDs7Ozs7Ozs7Ozs7Ozs7QUNsQ08sU0FBU0osa0JBQWtCLEdBQUc7RUFDbkMsSUFBTUssa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0VBRXBFLElBQUksQ0FBQ0Ysa0JBQWtCLEVBQUU7SUFDdkI7RUFDRjtFQUVBQSxrQkFBa0IsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDcERGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQy9EO0lBQ0FKLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHLHNFQUFzRTtFQUM1RixDQUFDLENBQUM7RUFDRjtFQUNBLElBQUlMLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtJQUN6RE4sUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDbkU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ5QztBQUNBO0FBRWxDLFNBQVNmLGNBQWMsR0FBRztFQUMvQjtFQUNBLElBQU1vQixnQkFBZ0IsR0FBRyxDQUFDLGdDQUFnQyxFQUFDLGlDQUFpQyxFQUFDLGdDQUFnQyxFQUFFLGlDQUFpQyxFQUFFLGdDQUFnQyxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7RUFDak9BLGdCQUFnQixDQUFDQyxPQUFPLENBQUMsVUFBVUMsS0FBSyxFQUFFO0lBQ3hDSix3REFBYSxDQUFDSSxLQUFLLEVBQUU7TUFDbkJFLE9BQU8sRUFBRTtRQUNQVCxPQUFPLEVBQUUsQ0FDUCxPQUFPO01BRVg7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNVSxpQkFBaUIsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLHlDQUF5QyxDQUFDO0VBQ3ZHQSxpQkFBaUIsQ0FBQ0osT0FBTyxDQUFDLFVBQVVDLEtBQUssRUFBRTtJQUN6Q0osd0RBQWEsQ0FBQ0ksS0FBSyxFQUFFO01BQ25CSSxRQUFRLEVBQUUsSUFBSTtNQUNkRixPQUFPLEVBQUU7UUFDUFQsT0FBTyxFQUFFLENBQ1AsT0FBTztNQUVYO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0FHLDZGQUFrRCxHQUFHLGtjQUFrYztFQUN2ZkMsdUZBQTRDLEdBQUcseVRBQXlUO0VBQ3hXQSx1RkFBNEMsR0FBRyxnUEFBZ1A7QUFDalM7Ozs7Ozs7Ozs7Ozs7O0FDakNPLFNBQVNmLFdBQVcsR0FBRztFQUM1QjtFQUNBLElBQU0rQixLQUFLLEdBQUd4QixRQUFRLENBQUN5QixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7RUFFNUQ7RUFDQUMsS0FBSyxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDZCxPQUFPLENBQUMsY0FBSSxFQUFJO0lBQ2hDLElBQUlrQixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFO0lBRWpDQyxJQUFJLENBQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsZUFBSyxFQUFJO01BQ3ZDLElBQUk4QixPQUFPLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPO01BQ2xDLElBQUlDLE9BQU8sR0FBR0osSUFBSSxDQUFDRSxPQUFPLENBQUNHLE9BQU87TUFDbENDLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO01BQ3RCUCxJQUFJLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUNuQyxJQUFNQyxPQUFPLEdBQUdaLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFO01BQ2pDLElBQU1ZLFdBQVcsR0FBR0QsT0FBTyxHQUFHYixTQUFTO01BRXZDLElBQUksQ0FBQ0csSUFBSSxDQUFDWSxhQUFhLEVBQUUsSUFBSUQsV0FBVyxHQUFHLElBQUksRUFBRTtNQUVqREUsVUFBVSxDQUFDQyxLQUFLLENBQUMsWUFBWTtRQUMzQkQsVUFBVSxDQUFDRSxPQUFPLENBQUNkLE9BQU8sRUFBRTtVQUFDZSxNQUFNLEVBQUU7UUFBUSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVVDLEtBQUssRUFBRTtVQUNwRUMsS0FBSyxDQUFDZixPQUFPLEdBQUcsaUNBQWlDLEVBQUU7WUFDakRnQixNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUU7Y0FDUCxjQUFjLEVBQUU7WUFDbEIsQ0FBQztZQUNEQyxJQUFJLEVBQUUsa0JBQWtCLEdBQUdKO1VBQzdCLENBQUMsQ0FBQyxDQUNDRCxJQUFJLENBQUMsVUFBVU0sUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLEVBQUU7Y0FDaEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7WUFDaEQ7WUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksRUFBRTtVQUN4QixDQUFDLENBQUMsQ0FDRFQsSUFBSSxDQUFDLFVBQVVVLElBQUksRUFBRTtZQUNwQixJQUFJQSxJQUFJLENBQUNDLE9BQU8sRUFBRTtjQUNoQjVCLElBQUksQ0FBQzZCLE1BQU0sRUFBRTtZQUNmLENBQUMsTUFBTTtjQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5REFBeUQsRUFBRUosSUFBSSxDQUFDO1lBQzlFO1VBQ0YsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFVSyxLQUFLLEVBQUU7WUFDdEJGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLCtDQUErQyxFQUFFQSxLQUFLLENBQUM7VUFDdkUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUNYLENBQUMsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2lEO0FBQ0U7QUFDRTtBQUNBO0FBRTlDLFNBQVNwRSxrQkFBa0IsR0FBRztFQUNuQyxJQUFNeUUsY0FBYyxHQUFHcEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBRS9ELElBQUksQ0FBQ21FLGNBQWMsRUFBRTtJQUNuQjtFQUNGO0VBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSVgsSUFBSSxFQUFLO0lBQzNCLElBQU1ZLFlBQVksR0FBRyxFQUFFO0lBRXZCWixJQUFJLENBQUNhLEdBQUcsQ0FBQyxVQUFDQyxNQUFNLEVBQUs7TUFDbkJGLFlBQVksQ0FBQ0csSUFBSSxDQUFDO1FBQ2hCQyxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0csS0FBSztRQUNuQkMsS0FBSyxFQUFFSixNQUFNLENBQUNLLEtBQUs7UUFDbkJDLEdBQUcsRUFBRU4sTUFBTSxDQUFDTTtNQUNkLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU9SLFlBQVk7RUFDckIsQ0FBQztFQUVELElBQUk7SUFDRjtJQUNBcEIsS0FBSyxDQUFDZixPQUFPLEdBQUMseUJBQXlCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDLGFBQUcsRUFBSTtNQUNuRCxPQUFPK0IsR0FBRyxDQUFDdEIsSUFBSSxFQUFFO0lBQ25CLENBQUMsQ0FBQyxDQUFDVCxJQUFJLENBQUMsY0FBSSxFQUFJO01BQ2RhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUosSUFBSSxDQUFDO01BQ3pCVyxVQUFVLENBQUNYLElBQUksQ0FBQztNQUNoQnNCLFlBQVksQ0FBQ1gsVUFBVSxDQUFDWCxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFFSixDQUFDLENBQUMsT0FBT3VCLENBQUMsRUFBRTtJQUNWcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFbUIsQ0FBQyxDQUFDO0VBQ3pCO0VBRUEsSUFBTUQsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUUsTUFBTSxFQUFLO0lBQy9CLElBQUlDLFFBQVEsR0FBRyxJQUFJbEIsd0RBQXFCLENBQUNHLGNBQWMsRUFBRTtNQUN2RGlCLE9BQU8sRUFBRSxDQUFDckIsNkRBQWEsQ0FBQztNQUN4QnNCLFdBQVcsRUFBRSxjQUFjO01BQzNCSixNQUFNLEVBQUVBLE1BQU07TUFDZEssTUFBTSxFQUFFckIscUVBQVE7TUFDaEJzQixnQkFBZ0IsRUFBRSxLQUFLO01BQ3ZCQyxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLGFBQWEsRUFBRTtRQUNiQyxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxLQUFLLEVBQUU7TUFDVCxDQUFDO01BQ0RDLFlBQVksRUFBRSxzQkFBVUMsSUFBSSxFQUFFO1FBQzVCbkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFa0MsSUFBSSxDQUFDO1FBQ3pCLElBQUlDLFNBQVMsR0FBRyx3Q0FBd0MsR0FBR0QsSUFBSSxDQUFDM0QsS0FBSyxDQUFDcUMsS0FBSyxHQUFHLFFBQVE7UUFDdEYsT0FBTztVQUFDdEQsSUFBSSxFQUFFNkU7UUFBUyxDQUFDO01BQzFCO0lBQ0YsQ0FBQyxDQUFDO0lBRUZkLFFBQVEsQ0FBQ2UsTUFBTSxFQUFFO0VBRW5CLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNoRU8sU0FBU3RHLHVCQUF1QixHQUFHO0VBQ3hDLElBQU11RyxNQUFNLEdBQUduRyxRQUFRLENBQUNvRyxhQUFhLENBQUMsa0NBQWtDLENBQUM7RUFFekUsSUFBSSxDQUFDRCxNQUFNLEVBQUU7RUFFYixJQUFJQSxNQUFNLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRUQsTUFBTSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNDLFNBQVMsR0FBRyxxZkFBcWY7RUFDbGxCLElBQUlGLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFRCxNQUFNLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLDhNQUE4TTtFQUMzUyxJQUFJRixNQUFNLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRUQsTUFBTSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNDLFNBQVMsR0FBRyxzUkFBc1I7RUFDblgsSUFBSUYsTUFBTSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUVELE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxTQUFTLEdBQUcscTFQQUFxMVA7QUFDcDdQOzs7Ozs7Ozs7Ozs7OztBQ1RPLFNBQVMvRyxVQUFVLEdBQUc7RUFDM0I7RUFDQSxJQUFNZ0gsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixHQUFTO0lBQzdCLElBQU1DLE1BQU0sR0FBR3ZHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNoRCxJQUFNdUcsT0FBTyxHQUFHeEcsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ25ELElBQU13RyxVQUFVLEdBQUd6RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7SUFFekQsSUFBSSxDQUFDc0csTUFBTSxJQUFJLENBQUNDLE9BQU8sSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFDdEM7SUFDRjtJQUVBRixNQUFNLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNyQyxJQUFJdUcsVUFBVSxDQUFDbEUsU0FBUyxDQUFDbUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzNDSCxNQUFNLENBQUNJLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO1FBQzFDRixVQUFVLENBQUNsRSxTQUFTLENBQUNxRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZDO0lBQ0YsQ0FBQyxDQUFDO0lBRUZKLE9BQU8sQ0FBQ3RHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3RDLElBQUksQ0FBQ3VHLFVBQVUsQ0FBQ2xFLFNBQVMsQ0FBQ21FLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM1Q0gsTUFBTSxDQUFDSSxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUMzQ0YsVUFBVSxDQUFDbEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ3BDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNEOEQsZ0JBQWdCLEVBQUU7QUFDcEI7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSxTQUFTTyxlQUFlLENBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFO0VBQ3pDLElBQU1DLFNBQVMsR0FBR2hILFFBQVEsQ0FBQ3lCLGdCQUFnQixDQUFDcUYsS0FBSyxDQUFDO0VBQ2xEcEYsS0FBSyxDQUFDQyxJQUFJLENBQUNxRixTQUFTLENBQUMsQ0FBQ3pDLEdBQUcsQ0FBQyxjQUFJLEVBQUk7SUFDaEMsSUFBSTBDLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzVDLElBQUksQ0FBQ0YsVUFBVSxFQUFFO01BQ2YsSUFBSUcsT0FBTyxHQUFHcEgsUUFBUSxDQUFDcUgsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMzQ0QsT0FBTyxDQUFDRSxTQUFTLEdBQUcsWUFBWTtNQUNoQ0osSUFBSSxDQUFDSyxVQUFVLENBQUNDLFlBQVksQ0FBQ0osT0FBTyxFQUFFRixJQUFJLENBQUM7TUFDM0NFLE9BQU8sQ0FBQ0ssV0FBVyxDQUFDUCxJQUFJLENBQUM7TUFDekJELFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFDO0lBRUEsSUFBSSxDQUFDRCxJQUFJLENBQUNkLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtNQUN4QyxJQUFJc0IsYUFBYSxHQUFHMUgsUUFBUSxDQUFDcUgsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUNsREssYUFBYSxDQUFDSixTQUFTLEdBQUcsY0FBYztNQUN4Q0osSUFBSSxDQUFDTyxXQUFXLENBQUNDLGFBQWEsQ0FBQztJQUNqQztJQUVBLElBQUksQ0FBQ1IsSUFBSSxDQUFDZCxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7TUFDdkMsSUFBSXNCLGNBQWEsR0FBRzFILFFBQVEsQ0FBQ3FILGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDbERLLGNBQWEsQ0FBQ0osU0FBUyxHQUFHLGFBQWE7TUFDdkNKLElBQUksQ0FBQ08sV0FBVyxDQUFDQyxjQUFhLENBQUM7SUFDakM7SUFFQSxTQUFTQyxhQUFhLEdBQUc7TUFDdkIsSUFBSVQsSUFBSSxDQUFDZCxhQUFhLENBQUNXLFNBQVMsQ0FBQyxDQUFDYSxXQUFXLEdBQUdYLFVBQVUsQ0FBQ1csV0FBVyxFQUFFO1FBQ3RFWCxVQUFVLENBQUMxRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDcEN5RSxVQUFVLENBQUMxRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDMUMsQ0FBQyxNQUFNO1FBQ0x5RSxVQUFVLENBQUMxRSxTQUFTLENBQUNxRSxNQUFNLENBQUMsVUFBVSxDQUFDO01BQ3pDO0lBQ0Y7SUFDQWUsYUFBYSxFQUFFO0lBRWZULElBQUksQ0FBQ2hILGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZO01BQzFDLElBQUlnSCxJQUFJLENBQUNXLGFBQWEsQ0FBQ3RGLFNBQVMsQ0FBQ21FLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN2RCxJQUFJb0IsUUFBUSxHQUFHWixJQUFJLENBQUNkLGFBQWEsQ0FBQ1csU0FBUyxDQUFDO1VBQzFDRSxXQUFVLEdBQUdDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJWSxRQUFRLEdBQUlELFFBQVEsQ0FBQ0YsV0FBVyxHQUFHWCxXQUFVLENBQUNXLFdBQVcsR0FBR1YsSUFBSSxDQUFDYyxVQUFXO1FBQ2hGLElBQUlELFFBQVEsR0FBRyxDQUFDLEVBQUU7VUFDaEJkLFdBQVUsQ0FBQzFFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztVQUN2Q3lFLFdBQVUsQ0FBQzFFLFNBQVMsQ0FBQ3FFLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsQ0FBQyxNQUFNLElBQUlNLElBQUksQ0FBQ2MsVUFBVSxHQUFHLENBQUMsRUFBRTtVQUM5QmYsV0FBVSxDQUFDMUUsU0FBUyxDQUFDcUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztVQUMxQ0ssV0FBVSxDQUFDMUUsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzFDLENBQUMsTUFBTTtVQUNMeUUsV0FBVSxDQUFDMUUsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1VBQ3ZDeUUsV0FBVSxDQUFDMUUsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzFDO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNqRCxZQUFZLEdBQUc7RUFDdEI7RUFDQSxJQUFNMEksVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUN2QixJQUFJQyxLQUFLLEdBQUdsSSxRQUFRLENBQUNvRyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBRTNDLElBQUksQ0FBQzhCLEtBQUssRUFBRTtNQUNWO0lBQ0Y7SUFFQUMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBVztNQUN6QkYsS0FBSyxJQUFJckIsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVEc0IsTUFBTSxDQUFDRSxRQUFRLEdBQUcsWUFBWTtNQUM1QkgsS0FBSyxJQUFJckIsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDNUMsQ0FBQztFQUNILENBQUM7RUFDRG9CLFVBQVUsRUFBRTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUEsSUFBSUssYUFBYSxHQUFHLENBQUM7QUFFZCxTQUFTOUksaUJBQWlCLEdBQUc7RUFDbEMsSUFBTTZELElBQUksR0FBR3JELFFBQVEsQ0FBQ3FELElBQUk7RUFFMUIsSUFBTWtGLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQVM7SUFDckIsSUFBTVIsUUFBUSxHQUFHSSxNQUFNLENBQUNLLFdBQVcsSUFBSXhJLFFBQVEsQ0FBQ3lJLGdCQUFnQixDQUFDQyxTQUFTO0lBQzFFLElBQUlYLFFBQVEsSUFBSSxFQUFFLElBQUlBLFFBQVEsR0FBR08sYUFBYSxFQUFFO01BQzlDakYsSUFBSSxDQUFDZCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0JhLElBQUksQ0FBQ2QsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3JDLENBQUMsTUFBTSxJQUFJdUYsUUFBUSxJQUFJLEVBQUUsRUFBRTtNQUN6QjFFLElBQUksQ0FBQ2QsU0FBUyxDQUFDcUUsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDLE1BQU07TUFDTHZELElBQUksQ0FBQ2QsU0FBUyxDQUFDcUUsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBMEIsYUFBYSxHQUFHUCxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0EsUUFBUTtFQUM5QyxDQUFDO0VBRUQvSCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFJLFFBQVEsQ0FBQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPLElBQU1wRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQy9CLE9BQU9nRSxNQUFNLENBQUNRLFVBQVUsSUFDckIzSSxRQUFRLENBQUM0SSxlQUFlLENBQUNDLFdBQVcsSUFDcEM3SSxRQUFRLENBQUNxRCxJQUFJLENBQUN3RixXQUFXO0FBQzlCLENBQUM7QUFFTSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFTO0VBQ2hDLE9BQU9YLE1BQU0sQ0FBQ1ksV0FBVyxJQUNwQi9JLFFBQVEsQ0FBQzRJLGVBQWUsQ0FBQ0ksWUFBWSxJQUNyQ2hKLFFBQVEsQ0FBQ3FELElBQUksQ0FBQzJGLFlBQVk7QUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7QUNWRDs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL2Nvb2tpZV9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZnVsbC1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLWZsYWdzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvdGFibGVzLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvY2hlY2stc2Nyb2xsLmpzIiwid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy91dGlsaXRpZXMvd2luZG93LXNpemUuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3M/MmYzMCIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcz9mODU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJvb3RzdHJhcCAoaW1wb3J0aW5nIEJTIHNjcmlwdHMgaW5kaXZpZHVhbGx5KVxyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcclxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5JztcclxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90YWInO1xyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQge2hhbmRsZUZhbmN5Ym94fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZhbmN5Ym94XCI7XHJcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCB7aGFuZGxlVGFibGVzfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlc1wiO1xyXG5pbXBvcnQge2hhbmRsZUNoZWNrU2Nyb2xsfSBmcm9tIFwiLi91dGlsaXRpZXMvY2hlY2stc2Nyb2xsXCI7XHJcbmltcG9ydCB7aGFuZGxlRm9ybXN9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybXNcIjtcclxuaW1wb3J0IHtoYW5kbGVDb29raWVCYW5uZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvY29va2llX2Jhbm5lclwiO1xyXG5pbXBvcnQge2hhbmRsZUZ1bGxDYWxlbmRhcn0gZnJvbSBcIi4vY29tcG9uZW50cy9mdWxsLWNhbGVuZGFyXCI7XHJcbmltcG9ydCB7aGFuZGxlTGFuZ1N3aXRjaGVyRmxhZ3N9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFuZy1zd2l0Y2hlci1mbGFnc1wiO1xyXG4vLyBpbXBvcnQge2hhbmRsZURyb3Bkb3duc30gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bnNcIjtcclxuXHJcbmNvbnN0IG1vdW50ZWRGbnMgPSBbXHJcbiAgaGFuZGxlRmFuY3lib3gsXHJcbiAgaGFuZGxlTWVudSxcclxuICBoYW5kbGVUYWJsZXMsXHJcbiAgaGFuZGxlQ2hlY2tTY3JvbGwsXHJcbiAgLy8gaGFuZGxlRHJvcGRvd25zLFxyXG4gIGhhbmRsZUZvcm1zLFxyXG4gIGhhbmRsZUNvb2tpZUJhbm5lcixcclxuICBoYW5kbGVGdWxsQ2FsZW5kYXIsXHJcbiAgaGFuZGxlTGFuZ1N3aXRjaGVyRmxhZ3MsXHJcbl1cclxuXHJcbi8vIFJ1biBmbi1zXHJcbmZvciAoY29uc3QgZGVtb3VudEZuIG9mIG1vdW50ZWRGbnMpIHtcclxuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvb2tpZUJhbm5lcigpIHtcclxuICBjb25zdCBjb29raWVBY2NlcHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpXHJcblxyXG4gIGlmICghY29va2llQWNjZXB0QnV0dG9uKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvb2tpZUFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGF0IHRoZSB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgdXNlIG9mIGNvb2tpZXNcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVzX2FjY2VwdGVkPXRydWU7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMjA5OSAwMDowMDowMCBVVEM7IHBhdGg9L1wiO1xyXG4gIH0pO1xyXG4gIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaGFzIGFscmVhZHkgYmVlbiBzZXRcclxuICBpZiAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCJjb29raWVzX2FjY2VwdGVkPXRydWVcIikgIT09IC0xKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZhbmN5Ym94IH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnQGZhbmN5YXBwcy91aSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRmFuY3lib3goKSB7XHJcbiAgLy8gU2luZ2xlXHJcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcclxuICBzaW5nbGVGYW5jeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XHJcbiAgICAgIFRvb2xiYXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBbXHJcbiAgICAgICAgICAnY2xvc2UnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gR2FsbGVyeVxyXG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknLCAnLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9fd3JhcHBlciBhJ107XHJcbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcclxuICAgICAgZ3JvdXBBbGw6IHRydWUsXHJcbiAgICAgIFRvb2xiYXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBbXHJcbiAgICAgICAgICAnY2xvc2UnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIEZhbmN5Ym94LlBsdWdpbnMuVG9vbGJhci5kZWZhdWx0cy5pdGVtcy5jbG9zZS5odG1sID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDMyMFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjAgMzIwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48cGF0aCBkPVwiTTMxNS4zIDMxNS4zYy02LjMgNi4zLTE2LjQgNi4zLTIyLjYgMEwxNjAgMTgyLjYgMjcuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDAtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjZMMTM3LjQgMTYwIDQuNyAyNy4zYy02LjMtNi4zLTYuMy0xNi40IDAtMjIuNiA2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMEwxNjAgMTM3LjQgMjkyLjcgNC43YzYuMy02LjMgMTYuNC02LjMgMjIuNiAwIDYuMyA2LjMgNi4zIDE2LjQgMCAyMi42TDE4Mi42IDE2MGwxMzIuNyAxMzIuN2M2LjMgNi4yIDYuMyAxNi40IDAgMjIuNnpcIiBmaWxsPVwiI0Y0RjFFOVwiLz48L3N2Zz4nO1xyXG4gIENhcm91c2VsLlBsdWdpbnMuTmF2aWdhdGlvbi5kZWZhdWx0cy5uZXh0VHBsID0gJzxzdmcgdmlld0JveD1cIjAgMCAyMSA0NVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNLjcyMS44ODFjLjk1OC0xLjE3NSAyLjUwMi0xLjE3NSAzLjQ2IDBMMjAuNDI4IDIwLjgxYy43NjMuOTM2Ljc2MyAyLjQ0NiAwIDMuMzgyTDQuMTgxIDQ0LjExOWMtLjk1OCAxLjE3NS0yLjUwMiAxLjE3NS0zLjQ2IDAtLjk1OC0xLjE3NS0uOTU4LTMuMDcgMC00LjI0NWwxNC4xNTUtMTcuMzg2TC43IDUuMTAyYy0uOTM4LTEuMTUxLS45MzgtMy4wNy4wMi00LjIyelwiIGZpbGw9XCIjRjRGMUU5XCIvPjwvc3ZnPic7XHJcbiAgQ2Fyb3VzZWwuUGx1Z2lucy5OYXZpZ2F0aW9uLmRlZmF1bHRzLnByZXZUcGwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSA0NVwiPjxwYXRoIGQ9XCJNMjAuMyA0NC4xYTIuMiAyLjIgMCAwIDEtMy41IDBMLjYgMjQuMmEyLjcgMi43IDAgMCAxIDAtMy40TDE2LjguOWEyLjIgMi4yIDAgMCAxIDMuNSAwIDMuNiAzLjYgMCAwIDEgMCA0LjJMNi4xIDIyLjVsMTQuMiAxNy40YTMuNiAzLjYgMCAwIDEgMCA0LjJ6XCIgZmlsbD1cIiNmNGYxZTlcIi8+PC9zdmc+JztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybXMoKSB7XHJcbiAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cclxuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcclxuXHJcbiAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxyXG4gIEFycmF5LmZyb20oZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICBsZXQgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgIGxldCBzaXRlS2V5ID0gZm9ybS5kYXRhc2V0LnNpdGVrZXlcclxuICAgICAgbGV0IGJhc2VVcmwgPSBmb3JtLmRhdGFzZXQuYmFzZXVybFxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXHJcbiAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xyXG5cclxuICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSB8fCB0aW1lRWxhcHNlZCA8IDYwMDApIHJldHVyblxyXG5cclxuICAgICAgZ3JlY2FwdGNoYS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ3JlY2FwdGNoYS5leGVjdXRlKHNpdGVLZXksIHthY3Rpb246ICdzdWJtaXQnfSkudGhlbihmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgIGZldGNoKGJhc2VVcmwgKyAnL3dwLWpzb24vd3AvdjIvdmVyaWZ5LXJlY2FwdGNoYScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6ICdyZWNhcHRjaGFfdG9rZW49JyArIHRva2VuLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVDQVBUQ0hBIHZlcmlmaWNhdGlvbiBmYWlsZWQgb3IgZGF0YSB2YWxpZGF0aW9uIGZhaWxlZFwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBmYWxzZSlcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCdcclxuaW1wb3J0ICogYXMgRnVsbENhbGVuZGFyIGZyb20gXCJAZnVsbGNhbGVuZGFyL2NvcmVcIjtcclxuaW1wb3J0IGV0TG9jYWxlIGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9sb2NhbGVzL2V0JztcclxuaW1wb3J0IHt3aW5kb3dXaWR0aH0gZnJvbSBcIi4uL3V0aWxpdGllcy93aW5kb3ctc2l6ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZ1bGxDYWxlbmRhcigpIHtcclxuICBjb25zdCBjYWxlbmRhckVsRnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWNhbGVuZGFyJylcclxuXHJcbiAgaWYgKCFjYWxlbmRhckVsRnVsbCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG1vZGlmaWVkRGF0YSA9IFtdXHJcblxyXG4gICAgZGF0YS5tYXAoKHNpbmdsZSkgPT4ge1xyXG4gICAgICBtb2RpZmllZERhdGEucHVzaCh7XHJcbiAgICAgICAgdGl0bGU6IHNpbmdsZS5sYWJlbCxcclxuICAgICAgICBzdGFydDogc2luZ2xlLmJlZ2luLFxyXG4gICAgICAgIGVuZDogc2luZ2xlLmVuZCxcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG1vZGlmaWVkRGF0YVxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgZmV0Y2goYmFzZVVybCsnL3dwLWpzb24vd3AvdjIvYm9va2luZ3MnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG4gICAgICBoYW5kbGVEYXRhKGRhdGEpXHJcbiAgICAgIGluaXRDYWxlbmRhcihoYW5kbGVEYXRhKGRhdGEpKVxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0Q2FsZW5kYXIgPSAoZXZlbnRzKSA9PiB7XHJcbiAgICBsZXQgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWxGdWxsLCB7XHJcbiAgICAgIHBsdWdpbnM6IFtkYXlHcmlkUGx1Z2luXSxcclxuICAgICAgaW5pdGlhbFZpZXc6ICdkYXlHcmlkTW9udGgnLFxyXG4gICAgICBldmVudHM6IGV2ZW50cyxcclxuICAgICAgbG9jYWxlOiBldExvY2FsZSxcclxuICAgICAgZGlzcGxheUV2ZW50VGltZTogZmFsc2UsXHJcbiAgICAgIGV2ZW50RGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgY29udGVudEhlaWdodDogNDIwLFxyXG4gICAgICBoZWFkZXJUb29sYmFyOiB7XHJcbiAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgY2VudGVyOiAnJyxcclxuICAgICAgICByaWdodDogJ3RpdGxlJyxcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRDb250ZW50OiBmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbylcclxuICAgICAgICBsZXQgdGl0bGVIdG1sID0gJzxkaXYgY2xhc3M9XCJmYy1ldmVudC10aXRsZSBmYy1zdGlja3lcIj4nICsgaW5mby5ldmVudC50aXRsZSArICc8L2Rpdj4nO1xyXG4gICAgICAgIHJldHVybiB7aHRtbDogdGl0bGVIdG1sfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcblxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTGFuZ1N3aXRjaGVyRmxhZ3MoKSB7XG4gIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlci5iYW5uZXIgLndpZGdldF9tc2xzd2lkZ2V0Jyk7XG5cbiAgaWYgKCF3aWRnZXQpIHJldHVyblxuXG4gIGlmICh3aWRnZXQucXVlcnlTZWxlY3RvcignYVt0aXRsZT1cIkVOXCJdJykpIHdpZGdldC5xdWVyeVNlbGVjdG9yKCdhW3RpdGxlPVwiRU5cIl0nKS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHBhdGggZmlsbD1cIiMwMTIxNjlcIiBkPVwiTTAgMGg2NDB2NDgwSDB6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIm03NSAwIDI0NCAxODFMNTYyIDBoNzh2NjJMNDAwIDI0MWwyNDAgMTc4djYxaC04MEwzMjAgMzAxIDgxIDQ4MEgwdi02MGwyMzktMTc4TDAgNjRWMGg3NXpcIi8+PHBhdGggZmlsbD1cIiNDODEwMkVcIiBkPVwibTQyNCAyODEgMjE2IDE1OXY0MEwzNjkgMjgxaDU1em0tMTg0IDIwIDYgMzVMNTQgNDgwSDBsMjQwLTE3OXpNNjQwIDB2M0wzOTEgMTkxbDItNDRMNTkwIDBoNTB6TTAgMGwyMzkgMTc2aC02MEwwIDQyVjB6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0yNDEgMHY0ODBoMTYwVjBIMjQxek0wIDE2MHYxNjBoNjQwVjE2MEgwelwiLz48cGF0aCBmaWxsPVwiI0M4MTAyRVwiIGQ9XCJNMCAxOTN2OTZoNjQwdi05Nkgwek0yNzMgMHY0ODBoOTZWMGgtOTZ6XCIvPjwvc3ZnPic7XG4gIGlmICh3aWRnZXQucXVlcnlTZWxlY3RvcignYVt0aXRsZT1cIkZJXCJdJykpIHdpZGdldC5xdWVyeVNlbGVjdG9yKCdhW3RpdGxlPVwiRklcIl0nKS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgMGg2NDB2NDgwSDB6XCIvPjxwYXRoIGZpbGw9XCIjMDAzNTgwXCIgZD1cIk0wIDE3NC41aDY0MHYxMzFIMHpcIi8+PHBhdGggZmlsbD1cIiMwMDM1ODBcIiBkPVwiTTE3NS41IDBoMTMwLjl2NDgwaC0xMzF6XCIvPjwvc3ZnPic7XG4gIGlmICh3aWRnZXQucXVlcnlTZWxlY3RvcignYVt0aXRsZT1cIkVUXCJdJykpIHdpZGdldC5xdWVyeVNlbGVjdG9yKCdhW3RpdGxlPVwiRVRcIl0nKS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZS13aWR0aD1cIjFwdFwiPjxyZWN0IHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiNDc3LjlcIiByeD1cIjBcIiByeT1cIjBcIi8+PHJlY3Qgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNTkuM1wiIHk9XCIzMjAuN1wiIGZpbGw9XCIjZmZmXCIgcng9XCIwXCIgcnk9XCIwXCIvPjxwYXRoIGZpbGw9XCIjMTI5MWZmXCIgZD1cIk0wIDBoNjQwdjE1OS4zSDB6XCIvPjwvZz48L3N2Zz4nO1xuICBpZiAod2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2FbdGl0bGU9XCJQVFwiXScpKSB3aWRnZXQucXVlcnlTZWxlY3RvcignYVt0aXRsZT1cIlBUXCJdJykuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxwYXRoIGZpbGw9XCJyZWRcIiBkPVwiTTI1NiAwaDM4NHY0ODBIMjU2elwiLz48cGF0aCBmaWxsPVwiIzA2MFwiIGQ9XCJNMCAwaDI1NnY0ODBIMHpcIi8+PGcgZmlsbD1cIiNmZjBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIi42XCI+PHBhdGggZD1cIk0zMzkuNSAzMDYuMmMtMzIuMy0xLTE4MC05My4yLTE4MS0xMDhsOC4xLTEzLjVjMTQuNyAyMS4zIDE2NS43IDExMSAxODAuNiAxMDcuOGwtNy43IDEzLjdcIi8+PHBhdGggZD1cIk0xNjQuOSAxODIuOGMtMi45IDcuOCAzOC42IDMzLjQgODguNCA2My44IDQ5LjkgMzAuMyA5Mi45IDQ5IDk2IDQ2LjRsMS41LTIuOGMtLjYgMS0yIDEuMy00LjMuNi0xMy41LTMuOS00OC42LTIwLTkyLjEtNDYuNC00My42LTI2LjQtODEuNC01MC43LTg3LjMtNjFhNi4zIDYuMyAwIDAgMS0uNi0zLjFoLS4ybC0xLjIgMi4yLS4yLjN6bTE3NS4zIDEyMy44Yy0uNSAxLTEuNiAxLTMuNS44LTEyLTEuMy00OC42LTE5LjEtOTEuOS00NS01MC40LTMwLjItOTItNTcuNi04Ny40LTY0LjhsMS4yLTIuMi4yLjFjLTQgMTIuMiA4Mi4xIDYxLjQgODcuMiA2NC42IDQ5LjggMzAuOCA5MS44IDQ4LjkgOTUuNSA0NC4ybC0xLjMgMi4zelwiLz48cGF0aCBkPVwiTTI1Ni4yIDIwNy4yYzMyLjItLjMgNzItNC40IDk1LTEzLjZsLTUtOGMtMTMuNSA3LjUtNTMuNSAxMi41LTkwLjMgMTMuMi00My40LS40LTc0LjEtNC41LTg5LjUtMTQuOGwtNC42IDguNmMyOC4yIDEyIDU3LjIgMTQuNSA5NC40IDE0LjZcIi8+PHBhdGggZD1cIk0zNTIuNSAxOTMuOGMtLjggMS4zLTE1LjggNi40LTM3LjggMTAuMmEzODEuMiAzODEuMiAwIDAgMS01OC42IDQuMyA0MTYuMSA0MTYuMSAwIDAgMS01Ni4yLTMuNmMtMjMuMS0zLjYtMzUtOC42LTM5LjUtMTAuNGwxLjEtMi4yYzEyLjcgNSAyNC43IDggMzguNyAxMC4yQTQxMS41IDQxMS41IDAgMCAwIDI1NiAyMDZhMzkxLjggMzkxLjggMCAwIDAgNTguMy00LjNjMjIuNS0zLjcgMzQuOC04LjQgMzYuNi0xMC41bDEuNiAyLjd6bS00LjQtOC4xYy0yLjQgMi0xNC42IDYuMy0zNiA5LjdhMzg4LjIgMzg4LjIgMCAwIDEtNTUuOCA0Yy0yMiAwLTQwLjEtMS42LTUzLjgtMy42LTIxLjgtMi44LTMzLjQtOC0zNy42LTkuNGwxLjMtMi4yYzMuMyAxLjcgMTQuNCA2LjIgMzYuNSA5LjNhMzg1IDM4NSAwIDAgMCA1My42IDMuNCAzODQgMzg0IDAgMCAwIDU1LjQtNGMyMS41LTMgMzMuMS04LjQgMzQuOS05LjhsMS41IDIuNnpNMTUwLjMgMjQ2YzE5LjggMTAuNyA2My45IDE2IDEwNS42IDE2LjQgMzggLjEgODcuNC01LjggMTA1LjktMTUuNmwtLjUtMTAuN2MtNS44IDktNTguOCAxNy43LTEwNS44IDE3LjQtNDctLjQtOTAuNy03LjYtMTA1LjMtMTd2OS41XCIvPjxwYXRoIGQ9XCJNMzYyLjggMjQ0LjV2Mi41Yy0yLjggMy40LTIwLjIgOC40LTQyIDEyYTQzNCA0MzQgMCAwIDEtNjUuNCA0LjQgNDAwIDQwMCAwIDAgMS02Mi00LjMgMTU1IDE1NSAwIDAgMS00NC40LTEydi0yLjljOS43IDYuNCAzNS45IDExLjIgNDQuNyAxMi42IDE1LjggMi40IDM2LjEgNC4yIDYxLjcgNC4yIDI2LjkgMCA0OC40LTEuOSA2NS00LjQgMTUuNy0yLjMgMzgtOC4yIDQyLjQtMTIuMXptMC05djIuNWMtMi44IDMuMy0yMC4yIDguMy00MiAxMS45YTQzNCA0MzQgMCAwIDEtNjUuNCA0LjUgNDE0IDQxNCAwIDAgMS02Mi00LjMgMTU1IDE1NSAwIDAgMS00NC40LTEydi0zYzkuNyA2LjUgMzYgMTEuMiA0NC43IDEyLjZhNDA4IDQwOCAwIDAgMCA2MS43IDQuM2MyNi45IDAgNDguNS0yIDY1LTQuNSAxNS43LTIuMiAzOC04LjEgNDIuNC0xMnptLTEwNyA2OC44Yy00NS42LS4yLTg0LjctMTIuNC05My0xNC40bDYgOS40YTI0OS44IDI0OS44IDAgMCAwIDg3LjQgMTQuM2MzNC43LTEgNjUtMy43IDg2LjMtMTQuMWw2LjItOS44Yy0xNC41IDYuOS02NCAxNC42LTkzIDE0LjZcIi8+PHBhdGggZD1cIk0zNDQuOSAyOTcuM2ExNDMgMTQzIDAgMCAxLTIuOCA0Yy0xMCAzLjYtMjYgNy40LTMyLjYgOC40YTI5NS41IDI5NS41IDAgMCAxLTUzLjcgNWMtNDAuNC0uNi03My41LTguNS04OS0xNS4zbC0xLjMtMi4xLjItLjQgMi4xLjlhMjg2LjUgMjg2LjUgMCAwIDAgODguMiAxNC41YzE4LjggMCAzNy41LTIuMSA1Mi42LTQuOCAyMy4yLTQuNyAzMi42LTguMiAzNS41LTkuOGwuNy0uNHptNS4zLTguOGEyODcuMiAyODcuMiAwIDAgMS0yIDMuNWMtNS40IDItMjAgNi4yLTQxLjMgOS4yLTE0IDEuOS0yMi43IDMuOC01MC42IDQuM2EzNDcuNCAzNDcuNCAwIDAgMS05NC4yLTE0TDE2MSAyODlhMzkwIDM5MCAwIDAgMCA5NS40IDE0YzI1LjUtLjUgMzYuNC0yLjQgNTAuMy00LjMgMjQuOC0zLjggMzcuMy04IDQxLTkuMWEyLjkgMi45IDAgMCAwIDAtLjJsMi42LTF6XCIvPjxwYXRoIGQ9XCJNMzUwLjggMjM3LjZjLjEgMzAtMTUuMyA1Ny0yNy42IDY4LjhhOTkuMyA5OS4zIDAgMCAxLTY3LjggMjguMmMtMzAuMy41LTU4LjgtMTkuMi02Ni41LTI3LjlhMTAxIDEwMSAwIDAgMS0yNy41LTY3LjRjMS44LTMyLjggMTQuNy01NS42IDMzLjMtNzEuM2E5OS42IDk5LjYgMCAwIDEgNjQuMi0yMi43IDk4LjIgOTguMiAwIDAgMSA3MSAzNS42YzEyLjUgMTUuMiAxOCAzMS43IDIwLjkgNTYuN3pNMjU1LjYgMTM1YTEwNiAxMDYgMCAwIDEgMTA2IDEwNS4yIDEwNS42IDEwNS42IDAgMSAxLTIxMS40IDBjLS4xLTU4IDQ3LjMtMTA1LjIgMTA1LjQtMTA1LjJcIi8+PHBhdGggZD1cIk0yNTUuOSAxMzQuNWM1OC4yIDAgMTA1LjYgNDcuNCAxMDUuNiAxMDUuNlMzMTQuMSAzNDUuNyAyNTYgMzQ1LjdzLTEwNS42LTQ3LjQtMTA1LjYtMTA1LjZjMC01OC4yIDQ3LjQtMTA1LjYgMTA1LjYtMTA1LjZ6TTE1Mi42IDI0MGMwIDU2LjggNDYuNyAxMDMuMyAxMDMuMyAxMDMuMyA1Ni42IDAgMTAzLjMtNDYuNSAxMDMuMy0xMDMuM3MtNDYuNy0xMDMuMy0xMDMuMy0xMDMuM1MxNTIuNiAxODMuMiAxNTIuNiAyNDB6XCIvPjxwYXRoIGQ9XCJNMjU2IDE0My4zYTk3IDk3IDAgMCAxIDk2LjcgOTYuNyA5Ny4xIDk3LjEgMCAwIDEtOTYuNyA5Ni44Yy01MyAwLTk2LjctNDMuNi05Ni43LTk2LjhhOTcuMSA5Ny4xIDAgMCAxIDk2LjctOTYuN3pNMTYxLjYgMjQwYzAgNTIgNDIuNiA5NC40IDk0LjQgOTQuNHM5NC40LTQyLjUgOTQuNC05NC40YzAtNTItNDIuNi05NC40LTk0LjQtOTQuNGE5NC44IDk0LjggMCAwIDAtOTQuNCA5NC40elwiLz48cGF0aCBkPVwiTTI2MC4zIDEzNGgtOS4xdjIxMi4zaDl6XCIvPjxwYXRoIGQ9XCJNMjU5LjMgMTMyLjhoMi4zdjIxNC43aC0yLjJWMTMyLjh6bS05IDBoMi40djIxNC43aC0yLjNWMTMyLjh6XCIvPjxwYXRoIGQ9XCJNMzYxLjYgMjQ0LjJ2LTcuOGwtNi40LTYtMzYuMy05LjYtNTIuMi01LjMtNjMgMy4yLTQ0LjggMTAuNi05IDYuN3Y3LjlsMjIuOS0xMC4zIDU0LjQtOC41aDUyLjNsMzguNCA0LjIgMjYuNiA2LjR6XCIvPjxwYXRoIGQ9XCJNMjU2IDIyMy44YzI0LjkgMCA0OSAyLjMgNjguMyA2IDE5LjggNCAzMy43IDkgMzguNSAxNC41djIuOGMtNS44LTctMjQuNS0xMi0zOS0xNS0xOS0zLjYtNDMtNi02Ny45LTYtMjYuMSAwLTUwLjUgMi42LTY5LjMgNi4yLTE1IDMtMzUuMSA5LTM3LjYgMTQuOHYtMi45YzEuMy00IDE2LjMtMTAgMzcuMy0xNC4zIDE4LjktMy43IDQzLjMtNi4xIDY5LjYtNi4xem0wLTkuMWEzODMgMzgzIDAgMCAxIDY4LjMgNmMxOS44IDQgMzMuNyA5IDM4LjUgMTQuNnYyLjdjLTUuOC02LjktMjQuNS0xMi0zOS0xNC45LTE5LTMuNy00My02LTY3LjktNmEzNzYgMzc2IDAgMCAwLTY5LjIgNi4yYy0xNC41IDIuNy0zNS40IDguOS0zNy43IDE0Ljd2LTIuOGMxLjQtNCAxNi42LTEwLjMgMzcuMy0xNC4zIDE5LTMuNyA0My4zLTYuMiA2OS43LTYuMnptLS42LTQ2LjJjMzkuMy0uMiA3My42IDUuNSA4OS4zIDEzLjVsNS43IDEwYy0xMy42LTcuNC01MC42LTE1LTk0LjktMTQtMzYuMS4zLTc0LjcgNC05NCAxNC40bDYuOC0xMS40YzE1LjktOC4zIDUzLjMtMTIuNSA4Ny4xLTEyLjVcIi8+PHBhdGggZD1cIk0yNTYgMTc2LjdhMzU0IDM1NCAwIDAgMSA2MS4zIDQuM2MxNiAzIDMxLjMgNy40IDMzLjUgOS44bDEuNyAzYy01LjMtMy40LTE4LjYtNy4zLTM1LjYtMTAuNXMtMzguNy00LjMtNjEtNC4yYy0yNS4zLS4xLTQ1IDEuMi02MS44IDQuMmExMDguOSAxMDguOSAwIDAgMC0zMy4zIDEwLjNsMS43LTMuMWM2LTMgMTUuMy02LjcgMzEuMS05LjYgMTcuNS0zLjIgMzcuNC00LjEgNjIuNC00LjJ6bTAtOWMyMS40LS4yIDQyLjYgMSA1OS4xIDRhOTYgOTYgMCAwIDEgMzAuNiAxMGwyLjUgNGMtNC4yLTQuNy0yMC05LjItMzQuMS0xMS42LTE2LjQtMi45LTM2LjctNC01OC4xLTQuMmEzNjEgMzYxIDAgMCAwLTU5LjUgNC40IDk3LjMgOTcuMyAwIDAgMC0yOS42IDkuMWwyLjItMy4zYzUuOC0zIDE1LjItNS44IDI3LTguMWEzNTcgMzU3IDAgMCAxIDU5LjktNC40ek0zMDguNCAyODRhMjc2LjQgMjc2LjQgMCAwIDAtNTIuNS00Yy02NS41LjgtODYuNiAxMy41LTg5LjIgMTcuM2wtNS04YzE2LjgtMTIgNTIuNC0xOC44IDk0LjYtMTguMiAyMS45LjQgNDAuOCAxLjkgNTYuNiA1bC00LjUgOFwiLz48cGF0aCBkPVwiTTI1NS42IDI3OC45YzE4LjIuMyAzNiAxIDUzLjMgNC4ybC0xLjIgMi4yYy0xNi0zLTMzLjItNC01Mi00LTI0LjMtLjItNDguNyAyLjEtNzAgOC4yLTYuNyAxLjktMTcuOCA2LjItMTkgOS44bC0xLjItMmMuNC0yLjIgNy02LjYgMTkuNi0xMCAyNC40LTcgNDcuMi04LjMgNzAuNS04LjR6bS44LTkuMmEzMjcgMzI3IDAgMCAxIDU3LjMgNWwtMS4zIDIuM2EyOTkgMjk5IDAgMCAwLTU2LTQuOWMtMjQuMiAwLTQ5LjkgMS44LTczLjMgOC42LTcuNSAyLjItMjAuNiA3LTIxIDEwLjdsLTEuMi0yLjJjLjItMy40IDExLjUtNy45IDIxLjctMTAuOCAyMy41LTYuOSA0OS4zLTguNiA3My44LTguN3pcIi8+PHBhdGggZD1cIm0zNDkuNCAyOTAuNS03LjggMTIuMy0yMi43LTIwLjEtNTguNi0zOS41LTY2LjItMzYuMy0zNC4zLTExLjcgNy4zLTEzLjYgMi41LTEuMyAyMS4zIDUuMyA3MC40IDM2LjMgNDAuNiAyNS42TDMzNiAyNzJsMTMuOSAxNnpcIi8+PHBhdGggZD1cIk0xNTguNiAxOTUuNWM2LTQgNTAuMiAxNS42IDk2LjYgNDMuNiA0Ni4xIDI4IDkwLjMgNTkuNiA4Ni4zIDY1LjVsLTEuMyAyLjEtLjYuNWMuMS0uMS44LTEgMC0zLjEtMi02LjUtMzMuNC0zMS41LTg1LjMtNjIuOS01MC43LTMwLjEtOTIuOS00OC4zLTk3LTQzLjFsMS4zLTIuNnpNMzUxIDI5MC40YzMuOC03LjYtMzcuMi0zOC41LTg4LjEtNjguNi01Mi0yOS41LTg5LjYtNDYuOS05Ni41LTQxLjdMMTY1IDE4M2MwIC4xIDAtLjIuNC0uNSAxLjItMSAzLjMtMSA0LjItMSAxMS44LjIgNDUuNSAxNS43IDkyLjggNDIuOCAyMC44IDEyIDg3LjYgNTUgODcuMyA2NyAwIDEgLjEgMS4yLS4zIDEuOGwxLjctMi42elwiLz48L2c+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMjYuNykgc2NhbGUoMS4wNjY2NylcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIuN1wiIGQ9XCJNMTgwLjYgMjExYTU4LjcgNTguNyAwIDAgMCAxNy41IDQxLjcgNTkgNTkgMCAwIDAgNDEuOCAxNy42IDU5LjQgNTkuNCAwIDAgMCA0Mi0xNy40IDU5IDU5IDAgMCAwIDE3LjQtNDEuOHYtNzkuMmwtMTE4LjctLjJWMjExelwiLz48cGF0aCBmaWxsPVwicmVkXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIi41XCIgZD1cIk0xODIuOCAyMTEuMWE1Ni40IDU2LjQgMCAwIDAgMTYuOCA0MCA1NyA1NyAwIDAgMCA0MC4yIDE2LjggNTYuOSA1Ni45IDAgMCAwIDQwLjItMTYuNiA1Ni40IDU2LjQgMCAwIDAgMTYuNy00MHYtNzdIMTgzdjc2LjhtOTEtNTMuN3Y0OC45bC0uMSA1LjFhMzMuMiAzMy4yIDAgMCAxLTEwIDI0IDM0IDM0IDAgMCAxLTI0IDEwYy05LjQgMC0xNy43LTQtMjMuOS0xMC4yYTM0IDM0IDAgMCAxLTEwLTI0di01NGw2OCAuMnpcIi8+PGcgaWQ9XCJlXCI+PGcgaWQ9XCJkXCIgZmlsbD1cIiNmZjBcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiLjVcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0xOTAuMiAxNTQuNGMuMS01LjUgNC02LjggNC02LjguMSAwIDQuMyAxLjQgNC4zIDYuOWgtOC4zXCIvPjxwYXRoIGQ9XCJtMTg2LjggMTQ3LjctLjcgNi4zaDQuMmMwLTUuMiA0LTYgNC02IC4xIDAgNCAxLjEgNC4xIDZoNC4ybC0uOC02LjRoLTE1em0tMSA2LjRoMTdjLjMgMCAuNi4zLjYuNyAwIC41LS4zLjgtLjYuOGgtMTdjLS4zIDAtLjYtLjMtLjYtLjggMC0uNC4zLS43LjctLjd6XCIvPjxwYXRoIGQ9XCJNMTkyIDE1NGMwLTMuMyAyLjMtNC4yIDIuMy00LjJzMi4zIDEgMi4zIDQuMkgxOTJtLTUuOC05aDE2LjNjLjMgMCAuNi40LjYuOCAwIC4zLS4zLjYtLjYuNmgtMTYuM2MtLjMgMC0uNi0uMy0uNi0uNyAwLS4zLjMtLjYuNi0uNnptLjQgMS41SDIwMmMuMyAwIC42LjMuNi43IDAgLjQtLjMuNy0uNi43aC0xNS41Yy0uNCAwLS42LS4zLS42LS43IDAtLjQuMi0uNy42LS43em01LTEwLjZoMS4ydi44aC45di0uOGgxLjN2LjloLjl2LTFoMS4ydjJjMCAuNC0uMi42LS41LjZoLTQuNGMtLjMgMC0uNi0uMi0uNi0uNXYtMnptNC42IDIuNy4zIDYuNGgtNC4zbC4zLTYuNWgzLjdcIi8+PHBhdGggaWQ9XCJhXCIgZD1cIk0xOTEgMTQxLjZ2My40aC00di0zLjRoNHpcIi8+PHVzZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgeD1cIjEwLjZcIiB4bGluazpocmVmPVwiI2FcIi8+PHBhdGggaWQ9XCJiXCIgZD1cIk0xODYuMyAxMzloMS4ydjFoLjl2LTFoMS4ydjFoLjl2LTFoMS4ydjJjMCAuNC0uMi42LS41LjZoLTQuM2EuNi42IDAgMCAxLS42LS42di0yelwiLz48dXNlIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4PVwiMTAuNlwiIHhsaW5rOmhyZWY9XCIjYlwiLz48cGF0aCBmaWxsPVwiIzAwMFwiIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTE5My45IDE0MC42YzAtLjYuOS0uNi45IDB2MS42aC0uOXYtMS42XCIvPjxwYXRoIGlkPVwiY1wiIGZpbGw9XCIjMDAwXCIgc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMTg4LjYgMTQyLjhjMC0uNi44LS42LjggMHYxLjJoLS44di0xLjJcIi8+PHVzZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgeD1cIjEwLjZcIiB4bGluazpocmVmPVwiI2NcIi8+PC9nPjx1c2Ugd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHk9XCI0Ni4zXCIgeGxpbms6aHJlZj1cIiNkXCIvPjx1c2Ugd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtNDUuMiAzMTIuOCAxODApXCIgeGxpbms6aHJlZj1cIiNkXCIvPjwvZz48dXNlIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4PVwiNDUuN1wiIHhsaW5rOmhyZWY9XCIjZFwiLz48dXNlIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEgMCAwIDEgNDc5LjggMClcIiB4bGluazpocmVmPVwiI2VcIi8+PGcgaWQ9XCJmXCIgZmlsbD1cIiNmZmZcIj48cGF0aCBmaWxsPVwiIzAzOVwiIGQ9XCJNMjMyLjYgMjAyLjRhOC4zIDguMyAwIDAgMCAyLjIgNS43IDcuMiA3LjIgMCAwIDAgNS4zIDIuNGMyLjEgMCA0LTEgNS4zLTIuNGE4LjMgOC4zIDAgMCAwIDIuMi01Ljd2LTEwLjhoLTE1djEwLjhcIi8+PGNpcmNsZSBjeD1cIjIzNi4xXCIgY3k9XCIxOTUuN1wiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjI0NC40XCIgY3k9XCIxOTUuN1wiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjI0MC4yXCIgY3k9XCIxOTkuN1wiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjIzNi4xXCIgY3k9XCIyMDMuOVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjI0NC40XCIgY3k9XCIyMDMuOVwiIHI9XCIxLjVcIi8+PC9nPjx1c2Ugd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHk9XCItMjZcIiB4bGluazpocmVmPVwiI2ZcIi8+PHVzZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgeD1cIi0yMC44XCIgeGxpbms6aHJlZj1cIiNmXCIvPjx1c2Ugd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHg9XCIyMC44XCIgeGxpbms6aHJlZj1cIiNmXCIvPjx1c2Ugd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHk9XCIyNS44XCIgeGxpbms6aHJlZj1cIiNmXCIvPjwvZz48L3N2Zz4nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XHJcbiAgLy8gTW9iaWxlIG1lbnVcclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXHJcbiAgICBjb25zdCBidXJnZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlci0yJylcclxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKVxyXG5cclxuICAgIGlmICghYnVyZ2VyIHx8ICFidXJnZXIyIHx8ICFtb2JpbGVNZW51KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoIW1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZU1vYmlsZU1lbnUoKVxyXG59XHJcbiIsImZ1bmN0aW9uIGNoZWNrVGFibGVXaWR0aChlbGVtcywgY2hpbGRFbGVtKSB7XHJcbiAgY29uc3Qgb3V0ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgQXJyYXkuZnJvbShvdXRlckVsZW0pLm1hcChlbGVtID0+IHtcclxuICAgIGxldCBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgaWYgKCFlbGVtUGFyZW50KSB7XHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXdyYXAnO1xyXG4gICAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW0pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2hhZG93LXJpZ2h0JykpIHtcclxuICAgICAgbGV0IHNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NoYWRvdy1yaWdodCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaGFkb3ctbGVmdCcpKSB7XHJcbiAgICAgIGxldCBzaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaGFkb3ctbGVmdCc7XHJcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoc2hhZG93V3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcclxuICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcihjaGlsZEVsZW0pLm9mZnNldFdpZHRoID4gZWxlbVBhcmVudC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPdmVyZmxvdygpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGFibGUtd3JhcCcpKSB7XHJcbiAgICAgICAgbGV0IGVsZW1Cb2R5ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNoaWxkRWxlbSksXHJcbiAgICAgICAgICBlbGVtUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcudGFibGUtd3JhcCcpO1xyXG4gICAgICAgIGxldCBzY3JvbGxlZCA9IChlbGVtQm9keS5vZmZzZXRXaWR0aCAtIGVsZW1QYXJlbnQub2Zmc2V0V2lkdGggLSBlbGVtLnNjcm9sbExlZnQpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IDMpIHtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1hY3RpdmUnKTtcclxuICAgICAgICAgIGVsZW1QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLnNjcm9sbExlZnQgPCAzKSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2xlZnQtYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxlcygpIHtcclxuICAvLyBJbml0IHJ1blxyXG4gIGNvbnN0IGluaXRUYWJsZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgIGlmICghdGFibGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0YWJsZSAmJiBjaGVja1RhYmxlV2lkdGgoJ3RhYmxlJywgJ3Rib2R5Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGFibGUgJiYgY2hlY2tUYWJsZVdpZHRoKCd0YWJsZScsICd0Ym9keScpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgaW5pdFRhYmxlcygpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFibGVXaWR0aCwgaGFuZGxlVGFibGVzIH1cclxuIiwibGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrU2Nyb2xsKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID49IDYwICYmIHNjcm9sbGVkID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vdC10b3AnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZC1kb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkID49IDYwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQtZG93bicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdG9wJyk7XHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsZWQgPD0gMCA/IDAgOiBzY3JvbGxlZDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCB3aW5kb3dXaWR0aCA9ICgpID0+IHtcclxuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGhcclxuICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbmRvd0hlaWdodCA9ICgpID0+IHtcclxuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImhhbmRsZUZhbmN5Ym94IiwiaGFuZGxlTWVudSIsImhhbmRsZVRhYmxlcyIsImhhbmRsZUNoZWNrU2Nyb2xsIiwiaGFuZGxlRm9ybXMiLCJoYW5kbGVDb29raWVCYW5uZXIiLCJoYW5kbGVGdWxsQ2FsZW5kYXIiLCJoYW5kbGVMYW5nU3dpdGNoZXJGbGFncyIsIm1vdW50ZWRGbnMiLCJkZW1vdW50Rm4iLCJjb29raWVBY2NlcHRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvb2tpZSIsImluZGV4T2YiLCJGYW5jeWJveCIsIkNhcm91c2VsIiwic2luZ2xlRmFuY3lJdGVtcyIsImZvckVhY2giLCJ2YWx1ZSIsImJpbmQiLCJUb29sYmFyIiwiZ2FsbGVyeUZhbmN5SXRlbXMiLCJncm91cEFsbCIsIlBsdWdpbnMiLCJkZWZhdWx0cyIsIml0ZW1zIiwiY2xvc2UiLCJodG1sIiwiTmF2aWdhdGlvbiIsIm5leHRUcGwiLCJwcmV2VHBsIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJmb3JtIiwic2l0ZUtleSIsImRhdGFzZXQiLCJzaXRla2V5IiwiYmFzZVVybCIsImJhc2V1cmwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZW5kVGltZSIsInRpbWVFbGFwc2VkIiwiY2hlY2tWYWxpZGl0eSIsImdyZWNhcHRjaGEiLCJyZWFkeSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJ0aGVuIiwidG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwic3VibWl0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGF5R3JpZFBsdWdpbiIsIkZ1bGxDYWxlbmRhciIsImV0TG9jYWxlIiwid2luZG93V2lkdGgiLCJjYWxlbmRhckVsRnVsbCIsImhhbmRsZURhdGEiLCJtb2RpZmllZERhdGEiLCJtYXAiLCJzaW5nbGUiLCJwdXNoIiwidGl0bGUiLCJsYWJlbCIsInN0YXJ0IiwiYmVnaW4iLCJlbmQiLCJyZXMiLCJpbml0Q2FsZW5kYXIiLCJlIiwiZXZlbnRzIiwiY2FsZW5kYXIiLCJDYWxlbmRhciIsInBsdWdpbnMiLCJpbml0aWFsVmlldyIsImxvY2FsZSIsImRpc3BsYXlFdmVudFRpbWUiLCJldmVudERpc3BsYXkiLCJjb250ZW50SGVpZ2h0IiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImV2ZW50Q29udGVudCIsImluZm8iLCJ0aXRsZUh0bWwiLCJyZW5kZXIiLCJ3aWRnZXQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaGFuZGxlTW9iaWxlTWVudSIsImJ1cmdlciIsImJ1cmdlcjIiLCJtb2JpbGVNZW51IiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJjaGVja1RhYmxlV2lkdGgiLCJlbGVtcyIsImNoaWxkRWxlbSIsIm91dGVyRWxlbSIsImVsZW1QYXJlbnQiLCJlbGVtIiwiY2xvc2VzdCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2hhZG93V3JhcHBlciIsImNoZWNrT3ZlcmZsb3ciLCJvZmZzZXRXaWR0aCIsInBhcmVudEVsZW1lbnQiLCJlbGVtQm9keSIsInNjcm9sbGVkIiwic2Nyb2xsTGVmdCIsImluaXRUYWJsZXMiLCJ0YWJsZSIsIndpbmRvdyIsIm9ubG9hZCIsIm9ucmVzaXplIiwibGFzdFNjcm9sbFRvcCIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9