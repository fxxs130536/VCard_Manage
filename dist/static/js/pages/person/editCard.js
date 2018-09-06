global.webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_editCard_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ad456ca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_editCard_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ad456ca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_editCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ad456ca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_editCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\person\\editCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ad456ca", Component.options)
  } else {
    hotAPI.reload("data-v-9ad456ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_uploader__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_validate__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(12);


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
      files: [],
      max: 8,
      fontNum: 0,
      userInfo: {},
      off: {
        background: false,
        avatar: false
      }
    };
  },


  components: {
    uploader: __WEBPACK_IMPORTED_MODULE_4__components_uploader__["a" /* default */]
  },
  computed: {
    fontNumTotal: function fontNumTotal() {
      if (this.userInfo.strIntro) {
        this.fontNum = this.userInfo.strIntro.toString().length;

        return this.fontNum;
      }
    }
  },

  mounted: function mounted() {
    this.getUserInfo();
    console.log(this.userInfo);
  },


  methods: {
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this, par, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                par = {
                  '@strOpenId': __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* default */].state.openId
                };
                _context.prev = 2;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */].Get_UserInfo(par);

              case 5:
                data = _context.sent;

                console.log(data);
                _this.userInfo = data;
                _this2.strIntro = data.strIntro;
                _this.files = [];
                data.images.map(function (item) {
                  item.path = item.imgUrl;
                  _this.files.push(item);
                });
                console.log(_this.files);
                _context.next = 16;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](2);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 14]]);
      }))();
    },
    saveForm: function saveForm() {
      var _this = this;
      if (this.off.avatar) {
        _this.upDateHead(_this.userInfo.strAvatarUrl, 1);
      }
      if (this.off.background) {
        _this.upDateHead(_this.userInfo.strBackground, 1);
      }
    },
    onSelect: function onSelect() {
      var _this3 = this;

      this.$wxapi.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: this.max

      }).then(function (res) {
        console.log(res.tempFiles);
        _this3.files = _this3.files.concat(res.tempFiles);
      }).catch(function (err) {
        console.log(err);
      });
    },
    upDateHead: function upDateHead(localImage, type) {
      var _this = this;
      var par = {
        strOpenId: this.userInfo.strOpenId,
        intType: type
      };

      __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */].wxUploadFile({
        filePath: localImage,
        formData: par
      }).then(function (res) {
        if (type == 1) {
          _this.userInfo.strAvatarUrl = res.imgUrl;
        } else {
          _this.userInfo.strBackground = res.imgUrl;
        }
      });
    },
    modifiyHead: function modifiyHead() {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          _this.userInfo.strAvatarUrl = res.tempFilePaths[0];
          _this.off.avatar = true;
          // _this.upDateHead(res.tempFilePaths[0], 1);
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    modifiyBackground: function modifiyBackground() {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          _this.userInfo.strBackground = res.tempFilePaths[0];
          _this.off.background = true;
          // _this.upDateHead(res.tempFilePaths[0], 3)
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    }
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_uploader_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f0bb00e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_uploader_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(14)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f0bb00e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_uploader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f0bb00e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_uploader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f0bb00e", Component.options)
  } else {
    hotAPI.reload("data-v-4f0bb00e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
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
  name: 'uploader',
  props: {
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: String,
    max: Number
  },
  computed: {
    files: function files() {
      var curFiles = this.max ? this.fileList.slice(0, this.max) : this.fileList;
      return curFiles.map(function (file) {
        file.hasMask = file.failure || file.progress && file.progress !== 100;

        return file;
      });
    }
  },
  methods: {
    preview: function preview(rawFile) {
      if (rawFile.failure) return;
      wx.previewImage({
        current: rawFile.path,
        urls: this.files.filter(function (file) {
          return !file.failure;
        }).map(function (file) {
          return file.path;
        })
      });
    },
    longtap: function longtap(rawFile, i) {
      var _this2 = this;

      var _this = this;
      var itemList = ['预览图片', '删除图片'];
      this.$wxapi.showActionSheet({ itemList: itemList }).then(function (res) {
        if (res.tapIndex == 0) {
          // 打开大图
          _this.preview(rawFile);
        } else if (res.tapIndex == 1) {
          _this2.fileList.splice(i, 1);
        }
      }).catch(function (res) {
        // console.log(res)
      });
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "weui-uploader m-x-1"
  }, [_c('div', {
    staticClass: "weui-uploader__hd"
  }, [_c('i-cell', {
    attrs: {
      "i-class": "m-b-1",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }, [(_vm.max) ? _c('span', {
    slot: "footer"
  }, [_vm._v(_vm._s(_vm.files.length) + "/" + _vm._s(_vm.max))]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__bd"
  }, [_c('div', {
    staticClass: "weui-uploader__files clearfix "
  }, [_vm._l((_vm.files), function(file, index) {
    return _c('div', {
      key: file.imgUrl,
      staticClass: "upimg-list"
    }, [_c('div', {
      class: ['weui-uploader__file', {
        'weui-uploader__file_status': file.hasMask
      }],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.longtap(file, index)
        }
      }
    }, [_c('img', {
      staticClass: "weui-uploader__img",
      attrs: {
        "mode": "aspectFill",
        "src": file.path
      }
    }), _vm._v(" "), (file.hasMask) ? _c('div', {
      staticClass: "weui-uploader__file-content"
    }, [(file.failure) ? _c('i-icon', {
      attrs: {
        "color": "#F43530",
        "type": "prompt_fill",
        "size": "23",
        "mpcomid": '1-' + index
      }
    }) : _c('span', {
      domProps: {
        "textContent": _vm._s(file.progress + '%')
      }
    })], 1) : _vm._e()])])
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__input-box clearfix"
  }, [_c('div', {
    staticClass: "weui-uploader__input center-a",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.$emit('onSelect')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "add",
      "color": "#80848f",
      "size": "34",
      "mpcomid": '2'
    }
  })], 1)])], 2)])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f0bb00e", esExports)
  }
}

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateURL */
/* unused harmony export validateLowerCase */
/* unused harmony export validateUpperCase */
/* unused harmony export validatAlphabets */
/* unused harmony export validatPhone */
/* unused harmony export validatEmail */
/* 合法uri */
function validateURL(textval) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母 */
function validateLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
function validateUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
function validatAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 手机号码 */
function validatPhone(str) {
  var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(str);
}
/* 邮箱 */
function validatEmail(str) {
  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(str);
}

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "edit-top bgf m-x-1 m-b-1"
  }, [_c('div', {
    staticClass: "edit-img p-t-2 p-b-1 center-a "
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.strAvatarUrl,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.modifiyHead
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('i-input', {
    attrs: {
      "title": "名字",
      "placeholder": "修改名字",
      "eventid": '1',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.userInfo.strName),
      callback: function($$v) {
        _vm.userInfo.strName = $$v
      },
      expression: "userInfo.strName"
    }
  })], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('i-input', {
    attrs: {
      "type": "number",
      "title": "电话号码",
      "placeholder": "修改电话号码",
      "eventid": '2',
      "mpcomid": '2'
    },
    model: {
      value: (_vm.userInfo.strMobile),
      callback: function($$v) {
        _vm.userInfo.strMobile = $$v
      },
      expression: "userInfo.strMobile"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bgf m-x-1 m-b-1"
  }, [_c('i-panel', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('i-input', {
    attrs: {
      "title": "公司名字",
      "placeholder": "请输入公司名字",
      "eventid": '3',
      "mpcomid": '4'
    },
    model: {
      value: (_vm.userInfo.strCompany),
      callback: function($$v) {
        _vm.userInfo.strCompany = $$v
      },
      expression: "userInfo.strCompany"
    }
  })], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "title": "职位",
      "placeholder": "请输入职位",
      "eventid": '4',
      "mpcomid": '6'
    },
    model: {
      value: (_vm.userInfo.strPosition),
      callback: function($$v) {
        _vm.userInfo.strPosition = $$v
      },
      expression: "userInfo.strPosition"
    }
  })], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "title": "邮箱",
      "placeholder": "请输入邮箱",
      "eventid": '5',
      "mpcomid": '8'
    },
    model: {
      value: (_vm.userInfo.strEmail),
      callback: function($$v) {
        _vm.userInfo.strEmail = $$v
      },
      expression: "userInfo.strEmail"
    }
  })], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "修改背景图",
      "eventid": '7',
      "mpcomid": '11'
    },
    on: {
      "click": _vm.modifiyBackground
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": _vm.userInfo.strBackground,
      "size": "default",
      "shape": "square",
      "eventid": '6',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.modifiyBackground
    },
    slot: "footer"
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bgf m-x-1 m-b-1"
  }, [_c('i-panel', {
    attrs: {
      "title": "简介",
      "mpcomid": '13'
    }
  }, [_c('div', {
    staticClass: "desc-wrapper clearfix"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strIntro),
      expression: "userInfo.strIntro"
    }],
    staticClass: "desc-textarea",
    attrs: {
      "placeholder": "请输入个人简介(最多200字)",
      "maxlength": "200",
      "eventid": '8'
    },
    domProps: {
      "value": (_vm.userInfo.strIntro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strIntro = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter fr p-r-2 m-b-1"
  }, [_vm._v(_vm._s(_vm.fontNumTotal) + "/200")])])])], 1), _vm._v(" "), _c('uploader', {
    attrs: {
      "file-list": _vm.files,
      "title": "文件上传",
      "max": _vm.max,
      "eventid": '9',
      "mpcomid": '14'
    },
    on: {
      "onSelect": _vm.onSelect,
      "longtap": _vm.longtap
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "submit-btn"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '10',
      "mpcomid": '15'
    },
    on: {
      "click": _vm.saveForm
    }
  }, [_vm._v("提交保存")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9ad456ca", esExports)
  }
}

/***/ })

},[121]);
//# sourceMappingURL=editCard.js.map