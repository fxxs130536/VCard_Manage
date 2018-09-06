global.webpackJsonp([6],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27bd2556_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27bd2556"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27bd2556_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\customer\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27bd2556", Component.options)
  } else {
    hotAPI.reload("data-v-27bd2556", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 148:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wx__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_customer_list__ = __webpack_require__(150);
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
  data: function data() {
    return {
      visible1: true,
      page: 10,
      selctActive: ['最后活动', '火爆活动'],
      selctTitle: '',
      customerTotal: 1000
    };
  },
  onReachBottom: function onReachBottom() {
    // 显示加载图标
    __WEBPACK_IMPORTED_MODULE_0_wx__["a" /* default */].showLoading({
      title: '玩命加载中'
    });
    // 页数+1
    this.page = this.page + 6;

    // // 隐藏加载框
    __WEBPACK_IMPORTED_MODULE_0_wx__["a" /* default */].hideLoading();
  },

  components: {
    customerList: __WEBPACK_IMPORTED_MODULE_2__components_customer_list__["a" /* default */]
  },

  computed: {},

  mounted: function mounted() {},


  methods: {
    handleClick: function handleClick() {
      var _this = this;

      this.$wxapi.showActionSheet({
        itemList: this.selctActive,
        itemColor: '#495060'

      }).then(function (res) {
        var index = res.tapIndex;
        console.log(res);
        _this.selctTitle = _this.selctActive[index];
        switch (index) {
          case 0:
            console.log(index);
            break;
          default:
            break;
        }
      }).catch(function (res) {
        console.log(res.errMsg);
      });
    }
  }
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_customer_list_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f656399c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_customer_list_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f656399c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_customer_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f656399c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_customer_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\customer-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] customer-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f656399c", Component.options)
  } else {
    hotAPI.reload("data-v-f656399c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
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

/***/ 153:
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
      staticClass: "mesg-s text-oh font-color-main"
    }, [_vm._v("未跟进过")])], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "6",
        "i-class": "col-class ",
        "mpcomid": '2-' + index
      }
    }, [_c('p', {
      staticClass: "mesg-t text-oh text-right font-color-title"
    }, [_vm._v("最后活动")]), _vm._v(" "), _c('p', {
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
     require("vue-hot-reload-api").rerender("data-v-f656399c", esExports)
  }
}

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('view', {}, [_c('i-button', {
    attrs: {
      "i-class": "customer-title",
      "type": "ghost",
      "long": "true",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v(_vm._s(_vm.selctTitle !== '' ? _vm.selctTitle : _vm.selctActive[0])), _c('i-icon', {
    staticClass: "tran",
    attrs: {
      "type": "play_fill",
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "标题",
      "mpcomid": '2'
    }
  }, [_c('view', {
    staticClass: "text-center",
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("总" + _vm._s(_vm.customerTotal) + "名客户")])]), _vm._v(" "), _c('customerList', {
    attrs: {
      "list": _vm.page,
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-27bd2556", esExports)
  }
}

/***/ })

},[123]);
//# sourceMappingURL=list.js.map