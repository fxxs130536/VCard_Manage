global.webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a859102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a859102"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a859102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\person\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a859102", Component.options)
  } else {
    hotAPI.reload("data-v-6a859102", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
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
  data: function data() {
    return {
      background: 'https://wx.qlogo.cn/mmopen/vi_32/ateb2NiaL4qEb0icXBSeOfCFAicqylicQOzTTeejUJ0oNoWP2Hib1tkAdr6gcD85Y6v7yynKuZ4YZmUol1fc3zaVusw/132'
    };
  },


  components: {},

  computed: {},

  mounted: function mounted() {},


  methods: {
    editor: function editor() {
      this.$router.push({ path: '/pages/person/editCard' });
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "me-header card-bg",
    style: ({
      backgroundImage: 'url(' + _vm.background + ')'
    })
  }, [_c('div', {
    staticClass: "me-header-cont  p-y-2"
  }, [_c('div', [_c('i-row', {
    attrs: {
      "i-class": "p-x-2",
      "mpcomid": '5'
    }
  }, [_c('i-col', {
    attrs: {
      "i-class": "",
      "span": 4,
      "mpcomid": '1'
    }
  }, [_c('i-avatar', {
    attrs: {
      "size": "large",
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "i-class": "p-x-1",
      "span": 18,
      "mpcomid": '2'
    }
  }, [_c('p', {
    staticClass: "me-title"
  }, [_vm._v("董小姐")]), _vm._v(" "), _c('p', {
    staticClass: "me-sub"
  }, [_vm._v("智慧美貌集一身")])], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "i-class": "",
      "span": 2,
      "mpcomid": '4'
    }
  }, [_c('i-icon', {
    staticClass: "p-a-1",
    attrs: {
      "type": "editor",
      "size": "22",
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.editor
    }
  })], 1)], 1), _vm._v(" "), _c('i-divider', {
    attrs: {
      "lineColor": "#dddee1",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "me-b p-x-2"
  }, [_c('p', {
    staticClass: "me-title"
  }, [_vm._v("广东印生活网络有限公司")]), _vm._v(" "), _c('p', {
    staticClass: "me-sub"
  }, [_vm._v("电话：1353699106")]), _vm._v(" "), _c('p', {
    staticClass: "me-sub"
  }, [_vm._v("邮箱：1353699106")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "me-header-b bgf m-b-2"
  }, [_c('i-row', {
    attrs: {
      "i-class": "p-y-1 ranking",
      "mpcomid": '13'
    }
  }, [_c('i-col', {
    attrs: {
      "i-class": "text-center font-color",
      "span": "8",
      "mpcomid": '8'
    }
  }, [_c('p', {
    staticClass: "text-oh"
  }, [_vm._v("0")]), _vm._v(" "), _c('p', {
    staticClass: "center-a"
  }, [_c('i-icon', {
    attrs: {
      "type": "flag_fill",
      "color": "#f5222d",
      "size": "22",
      "mpcomid": '7'
    }
  }), _vm._v("人气")], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "i-class": "text-center font-color",
      "span": "8",
      "mpcomid": '10'
    }
  }, [_c('p', {
    staticClass: "text-oh"
  }, [_vm._v("0")]), _vm._v(" "), _c('p', {
    staticClass: "center-a "
  }, [_c('i-icon', {
    attrs: {
      "type": "praise_fill",
      "color": "#19be6b",
      "size": "22",
      "mpcomid": '9'
    }
  }), _vm._v("点赞")], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "i-class": "text-center font-color",
      "span": "8",
      "mpcomid": '12'
    }
  }, [_c('p', {
    staticClass: "text-oh"
  }, [_vm._v("0")]), _vm._v(" "), _c('p', {
    staticClass: "center-a"
  }, [_c('i-icon', {
    attrs: {
      "type": "collection_fill",
      "color": "#ff9900",
      "size": "22",
      "mpcomid": '11'
    }
  }), _vm._v("收藏")], 1)], 1)], 1), _vm._v(" "), _c('i-divider', {
    attrs: {
      "lineColor": "#dddee1",
      "height": "4",
      "mpcomid": '14'
    }
  }), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "p-x-2 ",
      "mpcomid": '17'
    }
  }, [_c('i-col', {
    attrs: {
      "i-class": "font-color-sub p-y-2",
      "span": "3",
      "mpcomid": '15'
    }
  }, [_vm._v("简介")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "i-class": "font-color p-y-2",
      "span": "21",
      "mpcomid": '16'
    }
  }, [_vm._v("风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bgf"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '22'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "排行榜",
      "is-link": "",
      "url": "/pages/person/rankingList",
      "mpcomid": '19'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "barrage_fill",
      "size": "22",
      "color": "#2d8cf0",
      "mpcomid": '18'
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "名片夹",
      "is-link": "",
      "url": "/pages/person/cardList",
      "mpcomid": '21'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "businesscard_fill",
      "size": "22",
      "color": "#2d8cf0",
      "mpcomid": '20'
    },
    slot: "icon"
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "submit-btn"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '1',
      "mpcomid": '23'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("递名片")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a859102", esExports)
  }
}

/***/ })

},[145]);
//# sourceMappingURL=list.js.map