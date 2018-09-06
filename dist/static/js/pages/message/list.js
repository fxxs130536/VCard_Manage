global.webpackJsonp([5],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b0190d62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b0190d62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b0190d62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\message\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0190d62", Component.options)
  } else {
    hotAPI.reload("data-v-b0190d62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mesg_list__ = __webpack_require__(142);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      page: 10
    };
  },
  onReachBottom: function onReachBottom() {
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });
    // 页数+1
    this.page = this.page + 6;

    // // 隐藏加载框
    wx.hideLoading();
  },

  components: { mesgList: __WEBPACK_IMPORTED_MODULE_2__components_mesg_list__["a" /* default */] },

  computed: {},

  mounted: function mounted() {},


  methods: {}
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mesg_list_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f9f8938_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mesg_list_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f9f8938"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mesg_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f9f8938_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mesg_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\mesg-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mesg-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f9f8938", Component.options)
  } else {
    hotAPI.reload("data-v-4f9f8938", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    list: ''
  },
  methods: {
    link: function link() {
      this.$router.push({ path: '/pages/radar/list', isTab: true });
    }
  }
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "mesg-list"
  }, _vm._l((_vm.list), function(items, index) {
    return _c('li', {
      key: index,
      staticClass: "mesg-items",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.link
      }
    }, [_c('i-row', {
      attrs: {
        "mpcomid": '3-' + index
      }
    }, [_c('i-col', {
      attrs: {
        "span": "5",
        "i-class": "col-class mesg-img",
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      staticClass: "mesg-img fl",
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
        "alt": ""
      }
    })]), _vm._v(" "), _c('i-col', {
      attrs: {
        "offset": "1",
        "span": "12",
        "i-class": "col-class",
        "mpcomid": '1-' + index
      }
    }, [_c('p', {
      staticClass: "mesg-t text-oh font-color-title"
    }, [_vm._v("刘德华")]), _vm._v(" "), _c('p', {
      staticClass: "mesg-s text-oh font-color-sub"
    }, [_vm._v("你好我是董小姐，帅哥赶紧过来，你好我是董小姐，帅哥赶紧过来，你好我是董小姐，帅哥赶紧过来")])], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "6",
        "i-class": "col-class ",
        "mpcomid": '2-' + index
      }
    }, [_c('p', {
      staticClass: "mesg-s  text-oh text-right font-color-sub"
    }, [_vm._v("2018-07-11")])], 1)], 1), _vm._v(" "), _c('div')], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f9f8938", esExports)
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('mesgList', {
    attrs: {
      "list": _vm.page,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b0190d62", esExports)
  }
}

/***/ })

},[122]);
//# sourceMappingURL=list.js.map