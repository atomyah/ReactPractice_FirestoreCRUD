webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

 // ステート初期値

var initial = {
  message: 'START',
  data: [],
  number: [],
  result: 0
}; // レデューサー

function calcReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intitial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // 計算実行
    case 'ENTER':
      var data2 = state.data.slice();
      var s = action.value;
      data2.unshift(s);
      var num = s.replace(/[^0-9]/g, "");
      var number2 = state.number.slice();
      number2.unshift(num);
      var result = state.result * 1 + num * 1;
      return {
        message: 'ENTER',
        data: data2,
        number: number2,
        result: result
      };
    // リセット

    case 'RESET':
      return {
        message: 'RESET',
        data: [],
        number: [],
        result: 0
      };
    // デフォルト

    default:
      return state;
  }
} // initStore関数


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(calcReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

/***/ })

})
//# sourceMappingURL=_app.js.1adc4b14bd0e83be2cd1.hot-update.js.map