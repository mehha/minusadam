"use strict";
(self["webpackChunksage"] = self["webpackChunksage"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fancybox */ "./resources/scripts/components/fancybox.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./resources/scripts/components/menu.js");
/**
 * External Dependencies
 */


var mountedFns = [_components_fancybox__WEBPACK_IMPORTED_MODULE_0__.handleFancybox, _components_menu__WEBPACK_IMPORTED_MODULE_1__.handleMenu];

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
/******/ __webpack_require__.O(0, ["styles/editor","styles/app","/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/editor.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3NjcmlwdHMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNxRDtBQUNSO0FBRTdDLElBQU1FLFVBQVUsR0FBRyxDQUNqQkYsZ0VBQWMsRUFDZEMsd0RBQVUsQ0FDWDs7QUFFRDtBQUNBLCtCQUF3QkMsVUFBVSxpQ0FBRTtFQUEvQixJQUFNQyxTQUFTO0VBQ2xCLE9BQU9BLFNBQVMsS0FBSyxVQUFVLElBQUlBLFNBQVMsRUFBRTtBQUNoRDs7Ozs7Ozs7Ozs7Ozs7O0FDZHlDO0FBQ0E7QUFFbEMsU0FBU0gsY0FBYyxHQUFHO0VBQy9CO0VBQ0EsSUFBTU0sZ0JBQWdCLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBQyxpQ0FBaUMsRUFBQyxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0VBQ2pPQSxnQkFBZ0IsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLEtBQUssRUFBRTtJQUN4Q0osd0RBQWEsQ0FBQ0ksS0FBSyxFQUFFO01BQ25CRSxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFLENBQ1AsT0FBTztNQUVYO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztFQUM1REEsaUJBQWlCLENBQUNMLE9BQU8sQ0FBQyxVQUFVQyxLQUFLLEVBQUU7SUFDekNKLHdEQUFhLENBQUNJLEtBQUssRUFBRTtNQUNuQkssUUFBUSxFQUFFLElBQUk7TUFDZEgsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRSxDQUNQLE9BQU87TUFFWDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBUCw2RkFBa0QsR0FBRyxrY0FBa2M7RUFDdmZDLHVGQUE0QyxHQUFHLHlUQUF5VDtFQUN4V0EsdUZBQTRDLEdBQUcsZ1BBQWdQO0FBQ2pTOzs7Ozs7Ozs7Ozs7OztBQ2pDTyxTQUFTSixVQUFVLEdBQUc7RUFDM0I7RUFDQSxJQUFNcUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixHQUFTO0lBQzdCLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2hELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ25ELElBQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBRXpELElBQUksQ0FBQ0YsTUFBTSxJQUFJLENBQUNHLE9BQU8sSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFDdEM7SUFDRjtJQUVBSixNQUFNLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3JDLElBQUlELFVBQVUsQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0NQLE1BQU0sQ0FBQ1EsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDMUNKLFVBQVUsQ0FBQ0UsU0FBUyxDQUFDRyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZDO0lBQ0YsQ0FBQyxDQUFDO0lBRUZOLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDdEMsSUFBSSxDQUFDRCxVQUFVLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzVDUCxNQUFNLENBQUNRLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO1FBQzNDSixVQUFVLENBQUNFLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNwQztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRFgsZ0JBQWdCLEVBQUU7QUFDcEI7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZ2UvLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vc2FnZS8uL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zYWdlLy4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcz9mODU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7aGFuZGxlRmFuY3lib3h9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFuY3lib3hcIjtcbmltcG9ydCB7aGFuZGxlTWVudX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5cbmNvbnN0IG1vdW50ZWRGbnMgPSBbXG4gIGhhbmRsZUZhbmN5Ym94LFxuICBoYW5kbGVNZW51LFxuXVxuXG4vLyBSdW4gZm4tc1xuZm9yIChjb25zdCBkZW1vdW50Rm4gb2YgbW91bnRlZEZucykge1xuICB0eXBlb2YgZGVtb3VudEZuID09PSAnZnVuY3Rpb24nICYmIGRlbW91bnRGbigpXG59XG4iLCJpbXBvcnQgeyBGYW5jeWJveCB9IGZyb20gJ0BmYW5jeWFwcHMvdWknO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdAZmFuY3lhcHBzL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZhbmN5Ym94KCkge1xuICAvLyBTaW5nbGVcbiAgY29uc3Qgc2luZ2xlRmFuY3lJdGVtcyA9IFsnYVtocmVmJD1cIi5qcGdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLmpwZWdcIl06bm90KC5uby1mYW5jeSknLCdhW2hyZWYkPVwiLnBuZ1wiXTpub3QoLm5vLWZhbmN5KScsICdhW2hyZWYkPVwiLndlYnBcIl06bm90KC5uby1mYW5jeSknLCAnYVtocmVmJD1cIi5zdmdcIl06bm90KC5uby1mYW5jeSknLCAnLmZhbmN5aW1hZ2UnLCAnLmZhbmN5dmlkZW8nXTtcbiAgc2luZ2xlRmFuY3lJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIEZhbmN5Ym94LmJpbmQodmFsdWUsIHtcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheTogW1xuICAgICAgICAgICdjbG9zZScsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBHYWxsZXJ5XG4gIGNvbnN0IGdhbGxlcnlGYW5jeUl0ZW1zID0gWycuZ2FsbGVyeS1pdGVtIGE6bm90KC5uby1mYW5jeSknXTtcbiAgZ2FsbGVyeUZhbmN5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBGYW5jeWJveC5iaW5kKHZhbHVlLCB7XG4gICAgICBncm91cEFsbDogdHJ1ZSxcbiAgICAgIFRvb2xiYXI6IHtcbiAgICAgICAgZGlzcGxheTogW1xuICAgICAgICAgICdjbG9zZScsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBCdXR0b25zXG4gIEZhbmN5Ym94LlBsdWdpbnMuVG9vbGJhci5kZWZhdWx0cy5pdGVtcy5jbG9zZS5odG1sID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDMyMFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjAgMzIwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48cGF0aCBkPVwiTTMxNS4zIDMxNS4zYy02LjMgNi4zLTE2LjQgNi4zLTIyLjYgMEwxNjAgMTgyLjYgMjcuMyAzMTUuM2MtNi4zIDYuMy0xNi40IDYuMy0yMi42IDAtNi4zLTYuMy02LjMtMTYuNCAwLTIyLjZMMTM3LjQgMTYwIDQuNyAyNy4zYy02LjMtNi4zLTYuMy0xNi40IDAtMjIuNiA2LjMtNi4zIDE2LjQtNi4zIDIyLjYgMEwxNjAgMTM3LjQgMjkyLjcgNC43YzYuMy02LjMgMTYuNC02LjMgMjIuNiAwIDYuMyA2LjMgNi4zIDE2LjQgMCAyMi42TDE4Mi42IDE2MGwxMzIuNyAxMzIuN2M2LjMgNi4yIDYuMyAxNi40IDAgMjIuNnpcIiBmaWxsPVwiI0Y0RjFFOVwiLz48L3N2Zz4nO1xuICBDYXJvdXNlbC5QbHVnaW5zLk5hdmlnYXRpb24uZGVmYXVsdHMubmV4dFRwbCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjEgNDVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS43MjEuODgxYy45NTgtMS4xNzUgMi41MDItMS4xNzUgMy40NiAwTDIwLjQyOCAyMC44MWMuNzYzLjkzNi43NjMgMi40NDYgMCAzLjM4Mkw0LjE4MSA0NC4xMTljLS45NTggMS4xNzUtMi41MDIgMS4xNzUtMy40NiAwLS45NTgtMS4xNzUtLjk1OC0zLjA3IDAtNC4yNDVsMTQuMTU1LTE3LjM4NkwuNyA1LjEwMmMtLjkzOC0xLjE1MS0uOTM4LTMuMDcuMDItNC4yMnpcIiBmaWxsPVwiI0Y0RjFFOVwiLz48L3N2Zz4nO1xuICBDYXJvdXNlbC5QbHVnaW5zLk5hdmlnYXRpb24uZGVmYXVsdHMucHJldlRwbCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIxIDQ1XCI+PHBhdGggZD1cIk0yMC4zIDQ0LjFhMi4yIDIuMiAwIDAgMS0zLjUgMEwuNiAyNC4yYTIuNyAyLjcgMCAwIDEgMC0zLjRMMTYuOC45YTIuMiAyLjIgMCAwIDEgMy41IDAgMy42IDMuNiAwIDAgMSAwIDQuMkw2LjEgMjIuNWwxNC4yIDE3LjRhMy42IDMuNiAwIDAgMSAwIDQuMnpcIiBmaWxsPVwiI2Y0ZjFlOVwiLz48L3N2Zz4nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIC8vIE1vYmlsZSBtZW51XG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgYnVyZ2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItMicpXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpXG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhYnVyZ2VyMiB8fCAhbW9iaWxlTWVudSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidXJnZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBoYW5kbGVNb2JpbGVNZW51KClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJoYW5kbGVGYW5jeWJveCIsImhhbmRsZU1lbnUiLCJtb3VudGVkRm5zIiwiZGVtb3VudEZuIiwiRmFuY3lib3giLCJDYXJvdXNlbCIsInNpbmdsZUZhbmN5SXRlbXMiLCJmb3JFYWNoIiwidmFsdWUiLCJiaW5kIiwiVG9vbGJhciIsImRpc3BsYXkiLCJnYWxsZXJ5RmFuY3lJdGVtcyIsImdyb3VwQWxsIiwiUGx1Z2lucyIsImRlZmF1bHRzIiwiaXRlbXMiLCJjbG9zZSIsImh0bWwiLCJOYXZpZ2F0aW9uIiwibmV4dFRwbCIsInByZXZUcGwiLCJoYW5kbGVNb2JpbGVNZW51IiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlcjIiLCJtb2JpbGVNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==