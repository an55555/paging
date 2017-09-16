webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_paging_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb735c44_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_paging_vue__ = __webpack_require__(18);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb735c44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_paging_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb735c44_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_paging_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\paging.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] paging.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb735c44", Component.options)
  } else {
    hotAPI.reload("data-v-eb735c44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5795ad29", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb735c44\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paging.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb735c44\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paging.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n@font-face {\n    font-family: 'iconfont';  /* project id 417575 */\n    src: url('//at.alicdn.com/t/font_417575_qqiq45fgxbo9lik9.eot');\n    src: url('//at.alicdn.com/t/font_417575_qqiq45fgxbo9lik9.eot?#iefix') format('embedded-opentype'),\n    url('//at.alicdn.com/t/font_417575_qqiq45fgxbo9lik9.woff') format('woff'),\n    url('//at.alicdn.com/t/font_417575_qqiq45fgxbo9lik9.ttf') format('truetype'),\n    url('//at.alicdn.com/t/font_417575_qqiq45fgxbo9lik9.svg#iconfont') format('svg');\n}\n.iconfont[data-v-eb735c44]{\n    font-family:\"iconfont\" !important;\n    font-size:16px;font-style:normal;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-stroke-width: 0.2px;\n    -moz-osx-font-smoothing: grayscale;\n}\nbody[data-v-eb735c44]{\n    font: 14px Helvetica Neue,Helvetica,PingFang SC,\\5FAE\\8F6F\\96C5\\9ED1,Tahoma,Arial,sans-serif;\n}\n*[data-v-eb735c44]{\n    box-sizing: border-box!important;\n}\n.lpagination[data-v-eb735c44]{\n    margin: 10px 0;\n    spanst-style: none;\n    color: #999;\n    text-align: center;\n    /*text-align: left;*/\n}\n.lpagination span[data-v-eb735c44], .lpagination .gotoPage a[data-v-eb735c44]{\n    vertical-align: middle;\n    display: inline-block;\n    border-radius: 3px;\n    overflow: hidden;\n}\n.lpagination  .paging[data-v-eb735c44]{\n    font-size: 0;\n    border: 1px solid #e2e2e2;\n    border-right: 0;\n}\n.lpagination .pageSelect[data-v-eb735c44]{\n    border: 1px solid #e2e2e2;\n    margin: 0 5px ;\n    cursor: pointer;\n    height: 28px;\n    border-radius: 3px;\n}\n.lpagination  .paging a[data-v-eb735c44],.lpagination .gotoPage a[data-v-eb735c44]{\n    display: inline-block;\n    padding:0 15px;\n    line-height: 26px;\n    border-right: 1px solid #e2e2e2;\n    color: #333;\n    cursor: pointer;\n    font-size: 12px;\n    /*margin:0 0 0 -1px ;*/\n    background: #fff;\n}\n.lpagination .paging .pageAct[data-v-eb735c44]{\n    background: #3c98e6;\n    /*background: #009688;*/\n    color: #fff;\n}\n.lpagination .gotoPage[data-v-eb735c44]{margin: 0 7px\n}\n.lpagination .pageNumInput[data-v-eb735c44]{\n    height: 28px;\n    line-height: 28px;\n    border: 1px solid #e2e2e2;\n    border-radius: 2px;\n    vertical-align: top;\n    background-color: #fff;\n    width: 50px;\n    margin: 0 5px;\n    text-align: center;\n    outline: none;\n    box-sizing: border-box!important;\n}\n.lpagination .gotoPage a.pageGotoBtn[data-v-eb735c44]{\n    border: 1px solid #e2e2e2;\n    margin-left: 7px;\n}\n\n", ""]);

// exports


/***/ }),
/* 17 */
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

    /* harmony default export */ __webpack_exports__["a"] = ({
        props: ['dataPage','waitData'],
        data(){
            return {
//                count:Math.ceil(this.totalRecords/this.$onePageLine),
                getDataPage:this.dataPage,
                actIndex:1,  //默认显示第一页
                gotoPageNum:1,//跳转至
                pageLength:this.dataPage.pageSelect?this.dataPage.pageSelect[0]:10,//每页显示几条
                totalRecords:'',//数据总数
                /*配置相关*/
                pageSelectArr:this.dataPage.pageSelect||[10,15,20,30],//页数选择，默认[10,15,20,30]
                resTotal:(this.dataPage.translate&&this.dataPage.translate.resTotal)?this.dataPage.translate.resTotal:'iTotalRecords' , //反馈回来的数据总数变量名
                startRow:(this.dataPage.translate&&this.dataPage.translate.startRow)?this.dataPage.translate.startRow:'startRow' , //起始页变量名 默认“startRow”
                pageSize:(this.dataPage.translate&&this.dataPage.translate.pageSize)?this.dataPage.translate.pageSize:'pageSize' , //查询页数变量名 默认“pageSize”
            }
        },
        computed:{
            count:function () {  //总页数
              return Math.ceil(this.totalRecords/this.pageLength)
            },
            pagingNum:function () {
                if(this.count<=5){
                    return [1,2,3,4,5]
                }else{
                    if(this.actIndex<=3){
                        return [1,2,3,4,5]
                    }else if(this.actIndex>=this.count-2){
                        return [this.count-4,this.count-3,this.count-2,this.count-1,this.count]
                    }else{
                        return [this.actIndex-2,this.actIndex-1,this.actIndex,this.actIndex+1,this.actIndex+2]
                    }
                }
            },

        },

        methods:{
            pageNumKeyup:function () {  //输入跳转页面格式检查
                this.gotoPageNum=this.gotoPageNum<=0?this.gotoPageNum=1:this.gotoPageNum>this.count?this.count:this.gotoPageNum
            },
            getData:function () {  //获取数据
                this.$emit('dataLoading',true)
                this.getDataPage.arg[this.startRow]=!this.dataPage.findType?(this.actIndex-1)*this.pageLength:this.actIndex
                this.getDataPage.arg[this.pageSize]=this.pageLength
                this.$httpGet(this.getDataPage.httpUrl,this.getDataPage.arg,function (res) {
                    this.totalRecords=res[this.resTotal]
                    var pageInfo={
                        dataTotal:this.totalRecords,
                        count:this.count,
                        actIndex:this.actIndex,
                        pageLength:this.pageLength
                    }
                    this.$emit('transmitData',res,pageInfo)
                }.bind(this))
            },

        },
        watch:{
            'totalRecords':function () {
                if(this.totalRecords==0) return
                if(this.actIndex>Math.ceil(this.totalRecords/this.pageLength)){
                    this.actIndex=Math.ceil(this.totalRecords/this.pageLength)
                }
            },

            'actIndex':function () {
                this.getData(this.actIndex);
            },
            'pageLength':function () {
                this.actIndex=1
                this.getData(this.actIndex);
            },
        },
        mounted:function () {
            if(!this.waitData){
                this.getData();
            }

        }
    });


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.count > 0) ? _c('div', {
    staticClass: "lpagination"
  }, [_c('span', {
    staticClass: "paging"
  }, [(_vm.actIndex != 1) ? _c('a', {
    on: {
      "click": function($event) {
        _vm.actIndex = 1
      }
    }
  }, [_vm._v("首页")]) : _vm._e(), _vm._v(" "), (_vm.actIndex > 1) ? _c('a', {
    staticClass: "iconfont",
    on: {
      "click": function($event) {
        _vm.actIndex--
      }
    }
  }, [_vm._v("")]) : _vm._e(), _vm._v(" "), (_vm.actIndex > 3 && _vm.count > 5) ? _c('a', {
    staticStyle: {
      "cursor": "auto"
    }
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagingNum), function(item, index) {
    return (index < _vm.count) ? _c('a', {
      class: {
        pageAct: item == _vm.actIndex
      },
      on: {
        "click": function($event) {
          _vm.actIndex = item * 1
        }
      }
    }, [_vm._v(_vm._s(item))]) : _vm._e()
  }), _vm._v(" "), (_vm.actIndex < (_vm.count - 2) && _vm.count > 5) ? _c('a', {
    staticStyle: {
      "cursor": "auto"
    }
  }, [_vm._v("....")]) : _vm._e(), _vm._v(" "), (_vm.actIndex < _vm.count) ? _c('a', {
    staticClass: "iconfont",
    on: {
      "click": function($event) {
        _vm.actIndex++
      }
    }
  }, [_vm._v("")]) : _vm._e(), _vm._v(" "), (_vm.actIndex != _vm.count) ? _c('a', {
    on: {
      "click": function($event) {
        _vm.actIndex = _vm.count
      }
    }
  }, [_vm._v("末页")]) : _vm._e()], 2), _vm._v(" "), _c('span', {
    staticClass: "gotoPage",
    staticStyle: {
      "margin-left": "0"
    }
  }, [_vm._v("共" + _vm._s(_vm.totalRecords) + "条记录")]), _vm._v(" "), _c('span', {
    staticClass: "gotoPage"
  }, [_vm._v("\r\n            每页显示\r\n            "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.pageLength),
      expression: "pageLength"
    }],
    staticClass: "pageSelect",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.pageLength = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.pageSelectArr), function(item) {
    return _c('option', {
      domProps: {
        "value": item
      }
    }, [_vm._v(_vm._s(item) + "条/页")])
  })), _vm._v("条\r\n        ")]), _vm._v(" "), (_vm.count > 5) ? _c('span', {
    staticClass: "gotoPage"
  }, [_vm._v("\r\n            跳至"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gotoPageNum),
      expression: "gotoPageNum"
    }],
    staticClass: "pageNumInput",
    attrs: {
      "type": "number",
      "min": "1",
      "max": _vm.count
    },
    domProps: {
      "value": (_vm.gotoPageNum)
    },
    on: {
      "blur": _vm.pageNumKeyup,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.gotoPageNum = $event.target.value
      }
    }
  }), _vm._v("页"), _c('a', {
    staticClass: "pageGotoBtn",
    on: {
      "click": function($event) {
        _vm.actIndex = _vm.gotoPageNum * 1
      }
    }
  }, [_vm._v("确定")])]) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eb735c44", esExports)
  }
}

/***/ })
]);