global.webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__(35);



//



/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad() {},
  created: function created() {
    __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */].commit('inUserInfo');
    this.wxLogin();
  },

  methods: {
    wxLogin: function wxLogin() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wxCode, openId, openIdCode, par, userInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxLogin();

              case 2:
                wxCode = _context.sent;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxOpenId(wxCode.code);

              case 5:
                openId = _context.sent;
                openIdCode = openId.openid;
                par = {
                  'strOpenId': openIdCode
                };

                __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */].commit('inSendBtn', openId.isSend);
                _context.prev = 9;
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxGetUserInfo();

              case 12:
                userInfo = _context.sent;

                // 如果不是老用户，添加姓名和头像
                if (!openId.isOld) {
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strName: userInfo.userInfo.nickName
                  });
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strAvatarUrl: userInfo.userInfo.avatarUrl
                  });
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strBackground: userInfo.userInfo.avatarUrl
                  });
                }
                _this.loginFn(par);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](9);

                _this.loginFn(par);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[9, 17]]);
      }))();
    },
    loginFn: function loginFn(par) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_login(par);

              case 2:
                data = _context2.sent;


                __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */].commit('inUserInfo', data);
                __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */].commit('inOpenId', par.strOpenId);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_wxp_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_index_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_index_less__);







__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__utils_wxp_js__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]));
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    pages: [
    // 'pages/radar/list'
    'pages/customer/list'], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: 'IT之家Lite',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/radar/list',
        text: '雷达',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }, {
        pagePath: 'pages/message/list',
        text: '消息',
        iconPath: 'static/assets/news.png',
        selectedIconPath: 'static/assets/news-active.png'
      }, {
        pagePath: 'pages/customer/list',
        text: '客户',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }, {
        pagePath: 'pages/person/list',
        text: '我',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }]
    }
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-976dc89a", Component.options)
  } else {
    hotAPI.reload("data-v-976dc89a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[53]);
//# sourceMappingURL=app.js.map