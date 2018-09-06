global.webpackJsonp([9],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qrcode_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3eaeb7a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_qrcode_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3eaeb7a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qrcode_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3eaeb7a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_qrcode_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\person\\qrcode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qrcode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3eaeb7a2", Component.options)
  } else {
    hotAPI.reload("data-v-3eaeb7a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(12);


//
//
//
//
//
//
//
//
//




function decode(input) {
  var output = '';
  var chr1,
      chr2,
      chr3 = '';
  var enc1,
      enc2,
      enc3,
      enc4 = '';
  var i = 0;
  var keyStr = 'ABCDEFGHIJKLMNOP' + 'QRSTUVWXYZabcdef' + 'ghijklmnopqrstuv' + 'wxyz0123456789+/' + '=';
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  var base64test = /[^A-Za-z0-9\+\/\=]/g;
  if (base64test.exec(input)) {
    alert('There were invalid base64 characters in the input text.\n' + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/', and '='\n" + 'Expect errors in decoding.');
  }
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }

    chr1 = chr2 = chr3 = '';
    enc1 = enc2 = enc3 = enc4 = '';
  } while (i < input.length);

  return output;
}
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      qrImg: ''
    };
  },


  components: {},

  computed: {},

  mounted: function mounted() {
    this.handleQrcode();
  },


  methods: {
    handleQrcode: function handleQrcode() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data, res, a;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   console.log(store.state.userInfo)
                data = { strOpenId: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* default */].state.userInfo.strOpenId, CompanyId: '2' // store.state.userInfo.CompanyId
                  //   console.log(data)
                };
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */].Get_CompanyCode(data);

              case 3:
                res = _context.sent;

                _this.qrImg = 'data:image/png/;base64,' + res;
                data = decode('eyJkYXRhIjoiZXlKd1lYSmhiU0k2SW50Y0lrTnZiWEJoYm5sSlpGd2lPbHdpTWx3aUxGd2ljM1J5VFdWMGFHOWtYQ0k2WENKMFlrVmthWFJDYVc1a1EyOXRjR0Z1ZVZ3aUxGd2ljM1J5VDNCbGJrbGtYQ0k2WENKN01IMWNJbjBpTENKMWFXUWlPaUkwT0RRM1JEUkNPUzFCUlVKQ0xUUkZSVU10UVVVMFJpMHpOelUxUkVRelJFUXhSak1pZlE9PSIsIlVybCI6Imh0dHBzOi8veWoua2l5LmNuL0dldERhdGEvR2V0QWpheERhdGEifQ==');

                console.log(data);
                a = JSON.parse(data);

                console.log(a);
                console.log(decode(a.data));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "center-a"
  }, [_c('img', {
    staticStyle: {
      "width": "306px",
      "height": "306px"
    },
    attrs: {
      "src": _vm.qrImg,
      "alt": ""
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3eaeb7a2", esExports)
  }
}

/***/ })

},[167]);
//# sourceMappingURL=qrcode.js.map