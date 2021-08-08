require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/nutui.es.js ***!
  \*********************************************************/
/*! exports provided: ActionSheet, Address, Avatar, BackTop, Button, Calendar, Cell, Checkbox, Collapse, DatePicker, Dialog, Drag, Icon, InfiniteLoading, Input, InputNumber, Layout, Navbar, Notify, OverLay, Picker, Popup, Price, Radio, Range, Rate, ShortPassword, Steps, Swipe, Swiper, Switch, Tab, Tabbar, TextArea, Toast, Uploader, default */
/*! exports used: Button, Icon, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, Element, window) {/* unused harmony export ActionSheet */
/* unused harmony export Address */
/* unused harmony export Avatar */
/* unused harmony export BackTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return le; });
/* unused harmony export Calendar */
/* unused harmony export Cell */
/* unused harmony export Checkbox */
/* unused harmony export Collapse */
/* unused harmony export DatePicker */
/* unused harmony export Dialog */
/* unused harmony export Drag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ve; });
/* unused harmony export InfiniteLoading */
/* unused harmony export Input */
/* unused harmony export InputNumber */
/* unused harmony export Layout */
/* unused harmony export Navbar */
/* unused harmony export Notify */
/* unused harmony export OverLay */
/* unused harmony export Picker */
/* unused harmony export Popup */
/* unused harmony export Price */
/* unused harmony export Radio */
/* unused harmony export Range */
/* unused harmony export Rate */
/* unused harmony export ShortPassword */
/* unused harmony export Steps */
/* unused harmony export Swipe */
/* unused harmony export Swiper */
/* unused harmony export Switch */
/* unused harmony export Tab */
/* unused harmony export Tabbar */
/* unused harmony export TextArea */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sn; });
/* unused harmony export Uploader */
/* unused harmony export default */
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__);









var e = Object.defineProperty,
    t = Object.defineProperties,
    n = Object.getOwnPropertyDescriptors,
    l = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable,
    i = function i(t, n, l) {
  return n in t ? e(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
  }) : t[n] = l;
},
    s = function s(e, t) {
  for (var n in t || (t = {})) {
    o.call(t, n) && i(e, n, t[n]);
  }

  if (l) {
    var _iterator = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(l(t)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var n = _step.value;
        a.call(t, n) && i(e, n, t[n]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return e;
},
    c = function c(e, l) {
  return t(e, n(l));
}
/*!
* @nutui/nutui-taro v3.1.2 Sat Jul 31 2021 16:53:50 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/
;





function Q(e) {
  var t = "nut-" + e;
  return {
    componentName: t,
    create: function create(n) {
      return n.baseName = e, n.name = t, n.install = function (e) {
        var t;
        e.component(n.name, n), (null == (t = null == n ? void 0 : n.children) ? void 0 : t.length) && (null == n || n.children.forEach(function (t) {
          e.component(t.name, t);
        }));
      }, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* defineComponent */ "m"])(n);
    },
    createDemo: function createDemo(t) {
      return t.baseName = e, t.name = "demo-" + e, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* defineComponent */ "m"])(t);
    }
  };
}

var _Q = Q("avatar"),
    J = _Q.componentName,
    K = _Q.create;

var Z = K({
  props: {
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["active-avatar"],
  setup: function setup(e, _ref) {
    var t = _ref.emit,
        n = _ref.slots;

    var _u = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e),
        l = _u.size,
        o = _u.shape,
        a = _u.bgColor,
        i = _u.icon,
        s = ["large", "normal", "small"];

    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref2;

        return _ref2 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, J, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "avatar-" + l.value, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "avatar-" + o.value, !0), _ref2;
      }),
      styles: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return {
          width: s.indexOf(l.value) > -1 ? "" : "".concat(l.value, "px"),
          height: s.indexOf(l.value) > -1 ? "" : "".concat(l.value, "px"),
          backgroundColor: "".concat(a.value)
        };
      }),
      iconStyles: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return i.value ? i.value : "";
      }),
      isShowText: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return n.default;
      }),
      activeAvatar: function activeAvatar(e) {
        t("active-avatar", e);
      }
    };
  }
});
var ee = {
  key: 0,
  class: "text"
};

Z.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    style: e.styles,
    class: e.classes,
    onClick: t[1] || (t[1] = function (t) {
      return e.activeAvatar(e.e);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    class: "icon",
    name: e.iconStyles
  }, null, 8, ["name"]), e.isShowText ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", ee, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 6);
};

var _Q2 = Q("button"),
    te = _Q2.componentName,
    ne = _Q2.create;

var le = ne({
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref3) {
    var t = _ref3.emit,
        n = _ref3.slots;

    var _u2 = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e),
        l = _u2.type,
        o = _u2.size,
        a = _u2.shape,
        i = _u2.disabled,
        s = _u2.loading,
        c = _u2.color,
        r = _u2.plain,
        p = _u2.block;

    return {
      handleClick: function handleClick(e) {
        s.value || i.value || t("click", e);
      },
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref4;

        var e = te;
        return _ref4 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, e, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--").concat(l.value), l.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--").concat(o.value), o.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--").concat(a.value), a.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--plain"), r.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--block"), p.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--disabled"), i.value), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref4, "".concat(e, "--loading"), s.value), _ref4;
      }),
      getStyle: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var e;
        var t = {};
        return (null == c ? void 0 : c.value) && (r.value ? (t.color = c.value, t.background = "#fff", (null == (e = c.value) ? void 0 : e.includes("gradient")) || (t.borderColor = c.value)) : (t.color = "#fff", t.background = c.value)), t;
      })
    };
  }
});
var oe = {
  class: "nut-button__warp"
};

le.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    style: e.getStyle,
    onClick: t[1] || (t[1] = function () {
      return e.handleClick && e.handleClick.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", oe, [e.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    class: "nut-icon-loading"
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.icon && !e.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 1,
    class: e.icon,
    name: e.icon
  }, null, 8, ["class", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 2,
    class: {
      text: e.icon || e.loading
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])], 6);
};

var _Q3 = Q("cell-group"),
    ae = _Q3.componentName,
    ie = _Q3.create;

var se = ie({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup: function setup() {
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, ae, !0);
      })
    };
  }
});
var ce = {
  key: 0,
  class: "nut-cell-group__title"
},
    re = {
  class: "nut-cell-group__warp"
};

se.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", ce, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", re, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")])], 2);
};

var ue = function ue(e) {
  return isNaN(Number(e)) ? String(e) : "".concat(e, "px");
},
    _Q4 = Q("cell"),
    de = _Q4.componentName,
    pe = _Q4.create;

var he = pe({
  children: [se],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    descTextAlign: {
      type: String,
      default: "right"
    },
    isLink: {
      type: Boolean,
      default: !1
    },
    to: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      default: !1
    },
    roundRadius: {
      type: [String, Number],
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  components: Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, se.name, se),
  setup: function setup(e, _ref6) {
    var t = _ref6.emit;
    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref7;

      return _ref7 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref7, de, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref7, "".concat(de, "--clickable"), e.isLink || e.to), _ref7;
    }),
        l = Object(vue_router__WEBPACK_IMPORTED_MODULE_12__[/* useRouter */ "a"])();
    return {
      handleClick: function handleClick(n) {
        t("click", n), e.to && l ? l[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return {
          borderRadius: ue(e.roundRadius)
        };
      })
    };
  }
});
var ge = {
  class: "title"
},
    me = {
  class: "nut-cell__title-desc"
};

he.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    style: e.baseStyle,
    onClick: t[1] || (t[1] = function () {
      return e.handleClick && e.handleClick.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {}, function () {
    return [e.title || e.subTitle || e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      key: 0,
      class: ["nut-cell__title", {
        icon: e.icon
      }]
    }, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
      key: 0,
      class: "icon",
      name: e.icon
    }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.subTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", ge, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", me, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.subTitle), 1)], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
      key: 2
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)], 64))], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      key: 1,
      class: "nut-cell__value",
      style: {
        "text-align": e.descTextAlign
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.$slots.link ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "link", {
      key: 2
    }) : e.isLink || e.to ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
      key: 3,
      class: "nut-cell__link",
      name: "right"
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
  })], 6);
};

var _Q5 = Q("icon"),
    ye = _Q5.componentName,
    fe = _Q5.create;

var ve = fe({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref8) {
    var t = _ref8.emit,
        n = _ref8.slots;

    var l = function l(e) {
      t("click", e);
    };

    return function () {
      var t;
      var o = !!e.name && -1 !== e.name.indexOf("/");
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])(o ? "img" : e.tag, {
        class: o ? "".concat(ye, "__img") : "".concat(e.fontClassName, " ").concat(ye, " ").concat(e.classPrefix, "-").concat(e.name),
        style: {
          color: e.color,
          fontSize: ue(e.size),
          width: ue(e.size),
          height: ue(e.size)
        },
        onClick: l,
        src: o ? e.name : ""
      }, null == (t = n.default) ? void 0 : t.call(n));
    };
  }
});

var _Q6 = Q("price"),
    be = _Q6.componentName,
    ke = _Q6.create;

var xe = ke({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: !0
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: !1
    }
  },
  setup: function setup(e) {
    var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, be, !0);
    }),
        n = function n(e) {
      return e = (e = (e = (e = (e = (e = e.replace(/&quot;/g, '"')).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&nbsp;/g, " ")).replace(/&yen;/g, "￥");
    },
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return e.needSymbol ? n(e.symbol) : "";
    }),
        o = function o(e) {
      return String(e).indexOf(".") > 0;
    };

    return {
      classes: t,
      showSymbol: l,
      checkPoint: o,
      formatThousands: function formatThousands(t) {
        return 0 == Number(t) && (t = 0), t = o(t) ? "string" == typeof (t = Number(t).toFixed(e.decimalDigits)).split(".") ? t.split(".") : t.split(".")[0] : t.toString(), e.thousands ? (t || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : t;
      },
      formatDecimal: function formatDecimal(t) {
        0 == Number(t) && (t = 0), t = o(t) ? "string" == typeof (t = Number(t).toFixed(e.decimalDigits)).split(".") ? 0 : t.split(".")[1] : t.toString();
        var n = Number("0." + t).toFixed(e.decimalDigits);
        return String(n).substring(2, n.length);
      },
      replaceSpecialChar: n
    };
  }
});
var we = {
  class: "nut-price--big"
},
    Se = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
  class: "nut-price--point"
}, ".", -1),
    Ce = {
  class: "nut-price--small"
};

xe.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [e.needSymbol ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    class: "nut-price--symbol",
    decode: "true",
    innerHTML: e.showSymbol
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", we, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.formatThousands(e.price)), 1), Se, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Ce, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.formatDecimal(e.price)), 1)], 2);
};

var _Q7 = Q("overlay"),
    ze = _Q7.componentName,
    Te = _Q7.create,
    De = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: .3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  }
};

var Ne = Te({
  props: De,
  emits: ["click", "update:visible"],
  setup: function setup(e, _ref10) {
    var t = _ref10.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref11;

        return _ref11 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, ze, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, e.overlayClass, !0), _ref11;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return s({
          animationDuration: "".concat(e.duration, "s"),
          zIndex: e.zIndex
        }, e.overlayStyle);
      }),
      touchmove: function touchmove(t) {
        e.lockScroll && t.preventDefault();
      },
      onClick: function onClick(n) {
        t("click", n), e.closeOnClickOverlay && t("update:visible", !1);
      }
    };
  }
});

Ne.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.classes,
        onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
          return e.touchmove && e.touchmove.apply(e, arguments);
        }, ["stop"])),
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        }),
        style: e.style
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  });
};

var _Q8 = Q("row"),
    _e = _Q8.componentName,
    Ie = _Q8.create;

var je = Ie({
  props: {
    type: {
      type: String,
      default: ""
    },
    gutter: {
      type: [String, Number],
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    wrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup: function setup(e) {
    var t = _e;
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("gutter", e.gutter);

    var n = function n(e, t) {
      return e ? t ? "nut-row-".concat(e, "-").concat(t) : "" : "nut-row-".concat(t);
    };

    return {
      getClasses: function getClasses() {
        return "\n              ".concat(n("", e.type), "\n              ").concat(n("justify", e.justify), "\n              ").concat(n("align", e.align), "\n              ").concat(n("flex", e.wrap), "\n              ").concat(t, "\n              ");
      }
    };
  }
});

je.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.getClasses()
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 2);
};

var _Q9 = Q("col"),
    $e = _Q9.componentName,
    Ae = _Q9.create;

var Oe = Ae({
  props: {
    span: {
      type: [String, Number],
      default: "24"
    },
    offset: {
      type: [String, Number],
      default: "0"
    }
  },
  setup: function setup(e) {
    var t = $e,
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("gutter");
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref12;

        return _ref12 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, t, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, t + "-gutter", n), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "nut-col-" + e.span, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref12, "nut-col-offset-" + e.offset, !0), _ref12;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return {
          paddingLeft: n / 2 + "px",
          paddingRight: n / 2 + "px"
        };
      })
    };
  }
});

Oe.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    style: e.style
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 6);
};

var _Q10 = Q("layout"),
    Be = _Q10.create;

var Ee = Be({
  children: [je, Oe]
});

function qe() {
  var e = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      t = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(""),
      s = function s() {
    n.value = 0, l.value = 0, o.value = 0, a.value = 0, i.value = "";
  };

  return {
    move: function move(s) {
      var c = s.touches[0];
      var r, u;
      n.value = c.clientX - e.value, l.value = c.clientY - t.value, o.value = Math.abs(n.value), a.value = Math.abs(l.value), i.value || (i.value = (r = o.value, u = a.value, r > u && r > 10 ? "horizontal" : u > r && u > 10 ? "vertical" : ""));
    },
    start: function start(n) {
      s(), e.value = n.touches[0].clientX, t.value = n.touches[0].clientY;
    },
    reset: s,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: l,
    offsetX: o,
    offsetY: a,
    direction: i,
    isVertical: function isVertical() {
      return "vertical" === i.value;
    },
    isHorizontal: function isHorizontal() {
      return "horizontal" === i.value;
    }
  };
}

var Le = function Le(e, t) {
  var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* unref */ "v"])(e);
  return new Promise(function (e) {
    var l = t.createSelectorQuery();
    l.select("#".concat(n.id)).boundingClientRect(), l.exec(function (t) {
      e(t[0]);
    });
  });
},
    _Q11 = Q("swipe"),
    Ve = _Q11.componentName,
    Pe = _Q11.create;

var Me = Pe({
  props: {
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open", "close"],
  setup: function setup(e, _ref13) {
    var t = _ref13.emit;

    var n = Math.random().toString(36).slice(-8),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Ve, !0);
    }),
        o = /*#__PURE__*/function () {
      var _ref15 = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(e) {
        var t, n, l;
        return E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!("WEB" === _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getEnv())) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", (null == (t = e.value) ? void 0 : t.clientWidth) || (null == (l = null == (n = e.value) ? void 0 : n.$el) ? void 0 : l.clientWidth) || 0);

              case 2:
                _context.next = 4;
                return Le(e, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

              case 4:
                _context.t0 = _context.sent.width;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.t0 = 0;

              case 7:
                return _context.abrupt("return", _context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function o(_x) {
        return _ref15.apply(this, arguments);
      };
    }(),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        u = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        p = /*#__PURE__*/function () {
      var _ref16 = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        return E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return o(a);

              case 2:
                i.value = _context2.sent;
                _context2.next = 5;
                return o(r);

              case 5:
                u.value = _context2.sent;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function p() {
        return _ref16.apply(this, arguments);
      };
    }();

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.nextTick(p);
    });
    var h = !1,
        g = "",
        m = "";

    var y = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      offset: 0,
      moving: !1
    }),
        f = function f() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      h = !0, n && (y.offset = "left" === n ? -u.value : i.value), t("open", {
        name: e.name,
        position: g || n
      });
    },
        v = function v() {
      y.offset = 0, h = !1, t("close", {
        name: e.name,
        position: g
      });
    },
        b = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        transform: "translate3d(".concat(y.offset, "px, 0, 0)")
      };
    }),
        k = qe();

    return c(s({
      classes: l,
      touchStyle: b
    }, {
      onTouchStart: function onTouchStart(t) {
        e.disabled || k.start(t);
      },
      onTouchMove: function onTouchMove(t) {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
          return E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.disabled || k.isVertical() || (y.moving = !0, k.move(t), function (e) {
                    g = e > 0 ? "right" : "left";
                    var t = e;

                    switch (g) {
                      case "left":
                        t = h && m === g || Math.abs(e) > u.value ? -u.value : e;
                        break;

                      case "right":
                        t = h && m === g || Math.abs(e) > i.value ? i.value : e;
                    }

                    y.offset = t;
                  }(k.deltaX.value), t.preventDefault());

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      onTouchEnd: function onTouchEnd() {
        if (y.moving) switch (y.moving = !1, m = g, g) {
          case "left":
            Math.abs(y.offset) <= u.value / 2 ? v() : (y.offset = -u.value, f());
            break;

          case "right":
            Math.abs(y.offset) <= i.value / 2 ? v() : (y.offset = i.value, f());
        }
      }
    }), {
      leftRef: a,
      rightRef: r,
      refRandomId: n,
      open: f,
      close: v
    });
  }
});
var Re = {
  class: "nut-swipe__content"
};

Me.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    style: e.touchStyle,
    onTouchstart: t[1] || (t[1] = function () {
      return e.onTouchStart && e.onTouchStart.apply(e, arguments);
    }),
    onTouchmove: t[2] || (t[2] = function () {
      return e.onTouchMove && e.onTouchMove.apply(e, arguments);
    }),
    onTouchend: t[3] || (t[3] = function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    }),
    onTouchcancel: t[4] || (t[4] = function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-swipe__left",
    ref: "leftRef",
    id: "leftRef-" + e.refRandomId
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "left")], 8, ["id"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Re, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-swipe__right",
    ref: "rightRef",
    id: "rightRef-" + e.refRandomId
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "right")], 8, ["id"])], 38);
};

var He = 0;

var Ye = function Ye(e) {
  return [function () {
    e() && (!He && document.body.classList.add("nut-overflow-hidden"), He++);
  }, function () {
    e() && He && (He--, !He && document.body.classList.remove("nut-overflow-hidden"));
  }];
},
    _Q12 = Q("overlay"),
    Fe = _Q12.componentName,
    We = _Q12.create,
    Xe = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: .3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  }
};

var Ue = We({
  props: Xe,
  emits: ["click", "update:visible"],
  setup: function setup(e, _ref17) {
    var t = _ref17.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref18;

        return _ref18 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref18, Fe, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref18, e.overlayClass, !0), _ref18;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return s({
          animationDuration: "".concat(e.duration, "s"),
          zIndex: e.zIndex
        }, e.overlayStyle);
      }),
      touchmove: function touchmove(t) {
        e.lockScroll && t.preventDefault();
      },
      onClick: function onClick(n) {
        t("click", n), e.closeOnClickOverlay && t("update:visible", !1);
      }
    };
  }
});

Ue.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.classes,
        onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
          return e.touchmove && e.touchmove.apply(e, arguments);
        }, ["stop"])),
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        }),
        style: e.style
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  });
};

var _Q13 = Q("popup"),
    Ge = _Q13.componentName,
    Qe = _Q13.create;

var Je = 2e3;
var Ke = c(s({}, Xe), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
});

Qe({
  children: [Ue],
  components: {
    "nut-overlay": Ue
  },
  props: s({}, Ke),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(e, _ref19) {
    var t = _ref19.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      zIndex: e.zIndex ? e.zIndex : Je,
      showSlot: !0,
      transitionName: "popup-fade-".concat(e.position),
      overLayCount: 1,
      keepAlive: !1
    }),
        _Ye = Ye(function () {
      return e.lockScroll;
    }),
        _Ye2 = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Ye, 2),
        l = _Ye2[0],
        o = _Ye2[1],
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref20;

      return _ref20 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref20, Ge, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref20, "round", e.round), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref20, "popup-".concat(e.position), !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref20, e.popClass, !0), _ref20;
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return s({
        zIndex: n.zIndex,
        animationDuration: e.duration ? "".concat(e.duration, "s") : "initial"
      }, e.style);
    }),
        r = function r() {
      e.visible || (void 0 !== e.zIndex && (Je = Number(e.zIndex)), t("update:visible", !0), l(), n.zIndex = ++Je), e.destroyOnClose && (n.showSlot = !0), t("open");
    },
        p = function p() {
      e.visible && (o(), t("update:visible", !1), e.destroyOnClose && setTimeout(function () {
        n.showSlot = !1, t("close");
      }, 1e3 * +e.duration));
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      e.transition ? n.transitionName = e.transition : n.transitionName = "popup-slide-".concat(e.position), e.visible && r();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeUnmount */ "v"])(function () {
      e.visible && p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeMount */ "u"])(function () {
      e.visible && o();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onActivated */ "t"])(function () {
      n.keepAlive && (t("update:visible", !0), n.keepAlive = !1);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onDeactivated */ "w"])(function () {
      e.visible && (p(), n.keepAlive = !0);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      e ? r() : p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.position;
    }, function (e) {
      n.transitionName = "center" === e ? "popup-fade" : "popup-slide-".concat(e);
    }), c(s({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(n)), {
      popStyle: i,
      classes: a,
      onClick: function onClick(e) {
        t("click", e);
      },
      onClickCloseIcon: function onClickCloseIcon(e) {
        t("click-close-icon", e), p();
      },
      onClickOverlay: function onClickOverlay(n) {
        e.closeOnClickOverlay && (t("click-overlay", n), p());
      },
      onOpened: function onOpened(e) {
        t("opend", e);
      },
      onClosed: function onClosed(e) {
        t("closed", e);
      }
    });
  }
}).render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-overlay"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Teleport */ "d"], {
    to: e.teleport
  }, [e.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    visible: e.visible,
    "close-on-click-overlay": e.closeOnClickOverlay,
    class: e.overlayClass,
    style: e.overlayStyle,
    "z-index": e.zIndex,
    "lock-scroll": e.lockScroll,
    duration: e.duration,
    onClick: e.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: e.transitionName,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.classes,
        style: e.popStyle,
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 1,
        onClick: t[1] || (t[1] = function () {
          return e.onClickCloseIcon && e.onClickCloseIcon.apply(e, arguments);
        }),
        class: ["nutui-popup__close-icon", "nutui-popup__close-icon--" + e.closeIconPosition]
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        name: e.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]);
};

var _Q14 = Q("actionsheet"),
    Ze = _Q14.componentName,
    et = _Q14.create,
    tt = et({
  props: c(s({}, Ke), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  emits: ["cancel", "choose", "update:visible"],
  setup: function setup(e, _ref21) {
    var t = _ref21.emit;
    return {
      isHighlight: function isHighlight(t) {
        return e.chooseTagValue && e.chooseTagValue === t[e.optionTag] ? e.color : "#1a1a1a";
      },
      cancelActionSheet: function cancelActionSheet() {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: function chooseItem(e, n) {
        e.disable || (t("choose", e, n), t("update:visible", !1));
      },
      close: function close() {
        t("close"), t("update:visible", !1);
      },
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Ze, !0);
      })
    };
  }
}),
    nt = {
  class: "nut-actionsheet-panel"
},
    lt = {
  key: 0,
  class: "nut-actionsheet-title"
},
    ot = {
  key: 1,
  class: "nut-actionsheet-item desc"
},
    at = {
  key: 2,
  class: "nut-actionsheet-menu"
},
    it = {
  class: "subdesc"
};

tt.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    "pop-class": "popclass",
    visible: e.visible,
    position: "bottom",
    round: "",
    onClickOverlay: e.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", nt, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", lt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", ot, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.description), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.menuItems.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", at, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.menuItems, function (t, n) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
          class: ["nut-actionsheet-item", {
            "nut-actionsheet-item-disabled": t.disable
          }],
          style: {
            color: e.isHighlight(t)
          },
          key: n,
          onClick: function onClick(l) {
            return e.chooseItem(t, n);
          }
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t[e.optionTag]), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", it, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t[e.optionSubTag]), 1)], 14, ["onClick"]);
      }), 128))])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.cancelTxt ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 3,
        class: "nut-actionsheet-cancel",
        onClick: t[1] || (t[1] = function () {
          return e.cancelActionSheet && e.cancelActionSheet.apply(e, arguments);
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.cancelTxt), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay"])], 2);
};

var _Q15 = Q("backtop"),
    st = _Q15.componentName,
    ct = _Q15.create;

var rt = ct({
  props: {
    height: {
      type: String,
      default: "100vh"
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    zIndex: {
      type: Number,
      default: 10
    },
    distance: {
      type: Number,
      default: 200
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref23) {
    var t = _ref23.emit;
    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      backTop: !1,
      scrollTop: 1
    }),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref24;

      return _ref24 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref24, st, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref24, "show", n.backTop), _ref24;
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        right: "".concat(e.right, "px"),
        bottom: "".concat(e.bottom, "px"),
        zIndex: e.zIndex
      };
    });
    return c(s({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(n)), {
      classes: l,
      style: o,
      scroll: function scroll(t) {
        n.scrollTop = 2, n.backTop = t.detail.scrollTop >= e.distance;
      },
      click: function click(e) {
        n.scrollTop = 1, t("click", e);
      }
    });
  }
});

rt.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("scroll-view"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    "scroll-y": !0,
    style: {
      height: e.height
    },
    onScroll: e.scroll,
    "scroll-top": e.scrollTop,
    "scroll-with-animation": "true"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "content")];
    }),
    _: 3
  }, 8, ["style", "onScroll", "scroll-top"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: e.classes,
    style: e.style,
    onClick: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.click && e.click.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "icon", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
      size: "19px",
      class: "nut-backtop-main",
      name: "top"
    })];
  })], 6)]);
};

var _Q16 = Q("collapse-item"),
    ut = _Q16.create,
    dt = _Q16.componentName;

var pt = ut({
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    name: {
      type: [Number, String],
      default: -1,
      required: !0
    },
    collapseRef: {
      type: Object
    }
  },
  setup: function setup(e) {
    var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("collapseParent"),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(t),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref25;

      return _ref25 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref25, dt, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref25, "".concat(dt, "-icon"), l.props.icon), _ref25;
    });

    var a;
    (a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])()).proxy && l.children.push(a.proxy);

    var i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      icon: l.props.icon,
      iconSize: l.props.iconSize,
      iconColor: l.props.iconColor,
      openExpanded: null,
      iconStyle: {
        transform: "rotate(0deg)",
        marginTop: l.props.iconHeght ? "-" + l.props.iconHeght / 2 + "px" : "-10px"
      }
    }),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      titleIcon: l.props.titleIcon,
      titleIconSize: l.props.titleIconSize,
      titleIconColor: l.props.titleIconColor,
      titleIconPosition: l.props.titleIconPosition
    }),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        h = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        g = function g() {
      l.props.icon && !i.openExpanded ? i.iconStyle.transform = "rotate(0deg)" : i.iconStyle.transform = "rotate(" + l.props.rotate + "deg)", Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "s"])(function () {
        var e = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
        e.selectAll(".collapse-content").boundingClientRect(), e.exec(function (e) {
          b();
        }), i.openExpanded || Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "s"])(function () {
          l.children.forEach(function (e, t) {
            Array.from(e.$el.children).forEach(function (e, t) {
              e.className.includes("collapse-wrapper") && (e.style.willChange = "auto");
            });
          });
        });
      });
    },
        m = function m() {
      i.openExpanded = !i.openExpanded, g();
    },
        y = function y() {
      m(), l.props.icon && (i.iconStyle.transform = "rotate(" + l.props.rotate + "deg)");
    },
        f = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return e.name;
    }),
        v = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return l ? l.isExpanded(e.name) : null;
    });

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(v, function (e, t) {
      e && (i.openExpanded = !0);
    });

    var b = function b() {
      l.children.forEach(function (e, t) {
        var n = Array.from(e.$el.children);
        e.conHeight = n[1].children[0].offsetHeight;
      });
    };

    var k = [],
        x = [];
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      var t = e.name,
          n = l && l.props.active;
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {
        var e = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
        e.selectAll(".collapse-content").boundingClientRect(), e.exec(function (e) {
          k = e[0], k.forEach(function (e) {
            x.push(e.id);
          }), b();
        });
      }), "number" == typeof n || "string" == typeof n) t == n && y();else if (Object.values(n) instanceof Array) {
        Object.values(n).filter(function (e) {
          return e == t;
        }).length > 0 && y();
      }
    }), c(s(s(s({
      classes: o
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(i)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(l.props)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(r)), {
      conHeight: n,
      wrapperRef: p,
      contentRef: h,
      open: m,
      toggleOpen: function toggleOpen() {
        l.props.accordion ? (l.children.forEach(function (e, t) {
          f.value == e.name ? e.changeOpen(!e.openExpanded) : (e.changeOpen(!1), e.animation());
        }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "s"])(function () {
          l.changeVal(f.value), g();
        })) : (l.changeValAry(e.name), m());
      },
      changeOpen: function changeOpen(e) {
        i.openExpanded = e;
      },
      animation: g
    });
  }
});
var ht = {
  class: "collapse-title"
},
    gt = {
  class: "collapse-title-value"
},
    mt = {
  class: "collapse-content",
  ref: "contentRef"
};

pt.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: ["collapse-item", {
      "item-expanded": e.openExpanded
    }, {
      "nut-collapse-item-disabled": e.disabled
    }],
    onClick: t[1] || (t[1] = function () {
      return e.toggleOpen && e.toggleOpen.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", ht, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", gt, [e.titleIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    name: e.titleIcon,
    size: e.titleIconSize,
    color: e.titleIconColor,
    class: ["collapse-title-icon", "left" == e.titleIconPosition ? "titleIconLeft" : "titleIconRight"]
  }, null, 8, ["name", "size", "color", "class"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    innerHTML: e.title,
    class: "collapse-icon-title"
  }, null, 8, ["innerHTML"])])])]), e.subTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    innerHTML: e.subTitle,
    class: "subTitle"
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 1,
    name: e.icon,
    size: e.iconSize,
    color: e.iconColor,
    class: ["collapse-icon", {
      "col-expanded": e.openExpanded
    }, {
      "collapse-icon-disabled": e.disabled
    }],
    style: e.iconStyle
  }, null, 8, ["name", "size", "color", "class", "style"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: ["collapse-wrapper", e.openExpanded ? "open-style" : "close-style"],
    ref: "wrapperRef",
    style: {
      height: e.openExpanded ? e.conHeight + "px" : 0
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", mt, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 512)], 6)], 2);
};

var _Q17 = Q("collapse"),
    yt = _Q17.create;

var ft = yt({
  children: [pt],
  props: {
    active: {
      type: [String, Number, Array]
    },
    accordion: {
      type: Boolean
    },
    titleIcon: {
      type: String,
      default: ""
    },
    titleIconSize: {
      type: String,
      default: "16px"
    },
    titleIconColor: {
      type: String,
      default: ""
    },
    titleIconPosition: {
      type: String,
      default: "left"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "16px"
    },
    iconColor: {
      type: String,
      default: ""
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  emits: ["update:active", "change"],
  setup: function setup(e, _ref26) {
    var t = _ref26.emit,
        n = _ref26.slots;

    var l = function l(e) {
      t("update:active", e), t("change", e);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("collapseParent", {
      children: [],
      props: e,
      changeValAry: function changeValAry(t) {
        var n = e.active instanceof Object ? Object.values(e.active) : e.active;
        var o = -1;
        n.forEach(function (e, n) {
          String(e) == String(t) && (o = n);
        }), o > -1 ? n.splice(o, 1) : n.push(t), l(n);
      },
      changeVal: l,
      isExpanded: function isExpanded(t) {
        var n = e.accordion,
            l = e.active;
        if (n) return ("number" == typeof l || "string" == typeof l) && l == t;
      },
      activeIndex: function activeIndex() {
        var t;
        var l = e.active,
            o = null == (t = n.default) ? void 0 : t.call(n);
        var a = [];
        return o.forEach(function (e, t) {
          if ("number" == typeof l || "string" == typeof l) {
            if (e.props.name == l) return a.push(e.flag), a;
          } else {
            var _t2 = Array.from(l);

            (_t2.includes(String(e.props.name)) || _t2.includes(Number(e.props.name))) && a.push(e.flag);
          }
        }), a;
      },
      getParentChildren: function getParentChildren() {
        var e;
        return null == (e = n.default) ? void 0 : e.call(n);
      }
    });
  }
});

ft.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")]);
};

var vt = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
  window.setTimeout(e, 1e3 / 60);
} : function (e) {
  setTimeout(e, 1e3 / 60);
};

var _Q18 = Q("drag"),
    bt = _Q18.componentName,
    kt = _Q18.create;

var xt = kt({
  props: {
    attract: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: function _default() {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },
  setup: function setup(e, _ref27) {
    var t = _ref27.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      keepAlive: !1,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      initTop: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      top: 0,
      left: 0,
      position: {
        x: 0,
        y: 0
      },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        "nut-taro-drag": !0
      };
    }),
        a = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.getSystemInfoSync();

    function i() {
      l.boundary.left ? +l.left.split("px")[0] > l.boundary.left ? (l.left = +l.left.split("px")[0] - 10 + "px", vt(function () {
        i();
      })) : l.left = "".concat(l.boundary.left, "px") : +l.left.split("px")[0] > 10 ? (l.left = +l.left.split("px")[0] - 10 + "px", vt(function () {
        i();
      })) : l.left = "0px";
    }

    function s(e) {
      e - parseInt(l.left.split("px")[0]) > 10 ? (l.left = parseInt(l.left.split("px")[0]) + 10 + "px", vt(function () {
        s(e);
      })) : l.left = e + "px";
    }

    function c(t) {
      if (t.preventDefault(), 1 === t.touches.length) {
        var _n2 = t.touches[0];
        l.nx = _n2.clientX - l.position.x, l.ny = _n2.clientY - l.position.y, l.xPum = l.startLeft + l.nx, l.yPum = l.startTop + l.ny;

        var _o2 = l.screenWidth - l.elWidth - l.boundary.right;

        Math.abs(l.xPum) > _o2 ? l.xPum = _o2 : l.xPum <= l.boundary.left && (l.xPum = l.boundary.left), l.yPum < l.boundary.top ? l.yPum = l.boundary.top : l.yPum > l.screenHeight - l.elHeight - l.boundary.bottom && (l.yPum = l.screenHeight - l.elHeight - l.boundary.bottom), "y" != e.direction && (l.left = l.xPum), "x" != e.direction && (l.top = l.yPum);
      }
    }

    function r(t) {
      var n = t.changedTouches[0].clientX;
      var o = l.screenWidth - l.elWidth - l.boundary.right;
      n = n > o ? o : n < l.boundary.left || n < l.screenWidth / 2 ? l.boundary.left : o, "y" != e.direction && e.attract && (n < l.screenWidth / 2 ? vt(function () {
        i();
      }) : vt(function () {
        s(o);
      })), "x" !== e.direction && (l.top = l.yPum);
    }

    function u(e) {
      var t, n, o, a, i, s, c, r, u;
      var d = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
      var p = null == (t = null == e ? void 0 : e.mpEvent) ? void 0 : t.currentTarget.id,
          h = null == (n = null == e ? void 0 : e.currentTarget) ? void 0 : n.offsetTop,
          g = null == (o = null == e ? void 0 : e.currentTarget) ? void 0 : o.offsetLeft;
      var m = e.touches[0],
          y = null == (s = null == (i = null == (a = e.touches[0]) ? void 0 : a.target) ? void 0 : i.parentNode) ? void 0 : s.style.top,
          f = null == (u = null == (r = null == (c = e.touches[0]) ? void 0 : c.target) ? void 0 : r.parentNode) ? void 0 : u.style.left;
      d.selectAll(".myDrag").boundingClientRect(function (e) {
        e.forEach(function (e) {
          p && p == e.id ? (l.startTop = e.top - h, l.startLeft = e.left - g) : y && (l.startTop = Number(y.slice(0, -2)), l.startLeft = Number(f.slice(0, -2)));
        });
      }).exec(), l.position.x = m.clientX, l.position.y = m.clientY;
    }

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(".myDrag").boundingClientRect(function (e) {
          l.elWidth = e.width, l.elHeight = e.height, l.initTop = e.top;
        }).exec(), console.log(a.windowWidth), l.screenWidth = a.screenWidth, l.screenHeight = a.screenHeight;
      }, 200), _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {}), l.boundary = e.boundary;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onActivated */ "t"])(function () {
      l.keepAlive && (l.keepAlive = !1);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onDeactivated */ "w"])(function () {
      l.keepAlive = !0, n.removeEventListener("touchstart", u), n.removeEventListener("touchmove", c), n.removeEventListener("touchend", r);
    }), {
      classes: o,
      myDrag: n,
      touchStart: u,
      touchMove: c,
      touchEnd: r,
      state: l
    };
  }
});

xt.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: [e.classes, "myDrag"],
    ref: "myDrag",
    onTouchstart: t[1] || (t[1] = function (t) {
      return e.touchStart(t);
    }),
    onTouchmove: t[2] || (t[2] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function (t) {
      return e.touchMove(t);
    }, ["prevent"])),
    catchtouchmove: "true",
    style: {
      transform: " translate(".concat(e.state.left + "px", ", ").concat(e.state.top + "px", ")"),
      top: e.state.top + "px",
      left: e.state.left + "px"
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 38);
};

var _Q19 = Q("popup"),
    wt = _Q19.componentName,
    St = _Q19.create;

var Ct = 2e3;
var zt = c(s({}, De), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
});
var Tt = St({
  children: [Ne],
  components: {
    "nut-overlay": Ne
  },
  props: s({}, zt),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(e, _ref28) {
    var t = _ref28.emit;
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])();

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      zIndex: e.zIndex ? e.zIndex : Ct,
      showSlot: !0,
      transitionName: "popup-fade-".concat(e.position),
      overLayCount: 1,
      keepAlive: !1
    }),
        _Ye3 = Ye(function () {
      return e.lockScroll;
    }),
        _Ye4 = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Ye3, 2),
        l = _Ye4[0],
        o = _Ye4[1],
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref29;

      return _ref29 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref29, wt, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref29, "round", e.round), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref29, "popup-".concat(e.position), !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref29, e.popClass, !0), _ref29;
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return s({
        zIndex: n.zIndex,
        animationDuration: e.duration ? "".concat(e.duration, "s") : "initial"
      }, e.style);
    }),
        r = function r() {
      e.visible || (void 0 !== e.zIndex && (Ct = Number(e.zIndex)), t("update:visible", !0), l(), n.zIndex = ++Ct), e.destroyOnClose && (n.showSlot = !0), t("open");
    },
        p = function p() {
      e.visible && (o(), t("update:visible", !1), e.destroyOnClose && setTimeout(function () {
        n.showSlot = !1, t("close");
      }, 1e3 * +e.duration));
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      e.transition ? n.transitionName = e.transition : n.transitionName = "popup-slide-".concat(e.position), e.visible && r();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeUnmount */ "v"])(function () {
      e.visible && p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeMount */ "u"])(function () {
      e.visible && o();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onActivated */ "t"])(function () {
      n.keepAlive && (t("update:visible", !0), n.keepAlive = !1);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onDeactivated */ "w"])(function () {
      e.visible && (p(), n.keepAlive = !0);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      e ? r() : p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.position;
    }, function (e) {
      n.transitionName = "center" === e ? "popup-fade" : "popup-slide-".concat(e);
    }), c(s({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(n)), {
      popStyle: i,
      classes: a,
      onClick: function onClick(e) {
        t("click", e);
      },
      onClickCloseIcon: function onClickCloseIcon(e) {
        t("click-close-icon", e), p();
      },
      onClickOverlay: function onClickOverlay(n) {
        e.closeOnClickOverlay && (t("click-overlay", n), p());
      },
      onOpened: function onOpened(e) {
        t("opend", e);
      },
      onClosed: function onClosed(e) {
        t("closed", e);
      }
    });
  }
});

Tt.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-overlay"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", null, [e.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    visible: e.visible,
    "close-on-click-overlay": e.closeOnClickOverlay,
    class: e.overlayClass,
    style: e.overlayStyle,
    "z-index": e.zIndex,
    "lock-scroll": e.lockScroll,
    duration: e.duration,
    onClick: e.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: e.transitionName,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.classes,
        style: e.popStyle,
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 1,
        onClick: t[1] || (t[1] = function () {
          return e.onClickCloseIcon && e.onClickCloseIcon.apply(e, arguments);
        }),
        class: ["nutui-popup__close-icon", "nutui-popup__close-icon--" + e.closeIconPosition]
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        name: e.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])]);
};

var _Q20 = Q("dialog"),
    Dt = _Q20.componentName,
    Nt = _Q20.create;

var _t = Nt({
  inheritAttrs: !1,
  children: [Tt, le],
  components: {
    "nut-popup": Tt,
    "nut-button": le
  },
  props: c(s({}, zt), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    okText: {
      type: String,
      default: "确定"
    },
    okBtnDisabled: {
      type: Boolean,
      default: !1
    },
    cancelAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    onOk: {
      type: Function,
      default: null
    },
    onCancel: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: null
    },
    onClosed: {
      type: Function,
      default: null
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
    }
  }),
  emits: ["update", "update:visible", "ok", "cancel", "open", "opened", "close", "closed"],
  setup: function setup(e, _ref30) {
    var t = _ref30.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      e.closeOnPopstate && window.addEventListener("popstate", function () {
        o();
      });
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      n.value = e;
    });

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Dt, !0);
    }),
        o = function o() {
      var e;
      t("update", e = !1), t("update:visible", e), t("closed");
    };

    return {
      closed: o,
      classes: l,
      onCancel: function onCancel() {
        t("cancel"), e.cancelAutoClose && o();
      },
      onOk: function onOk() {
        o(), t("ok");
      },
      showPopup: n
    };
  }
});

var It = {
  key: 0,
  class: "nut-dialog__header"
},
    jt = {
  key: 1,
  class: "nut-dialog__footer"
};

_t.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-button"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
    teleport: e.teleport,
    visible: e.showPopup,
    "onUpdate:visible": t[1] || (t[1] = function (t) {
      return e.showPopup = t;
    }),
    "close-on-click-overlay": e.closeOnClickOverlay,
    "lock-scroll": e.lockScroll,
    round: "",
    onClickOverlay: e.closed,
    onClickCloseIcon: e.closed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.classes
      }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", It, [e.$slots.header ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "header", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)], 64))])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: "nut-dialog__content",
        style: {
          textAlign: e.textAlign
        }
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 1,
        innerHTML: e.content
      }, null, 8, ["innerHTML"]))], 4), e.noFooter ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", jt, [e.$slots.footer ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "footer", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [e.noCancelBtn ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
        key: 0,
        size: "small",
        plain: "",
        type: "primary",
        class: "nut-dialog__footer-cancel",
        onClick: e.onCancel
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.cancelText), 1)];
        }),
        _: 1
      }, 8, ["onClick"])), e.noOkBtn ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
        key: 1,
        size: "small",
        type: "primary",
        class: ["nut-dialog__footer-ok", {
          disabled: e.okBtnDisabled
        }],
        disabled: e.okBtnDisabled,
        onClick: e.onOk
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.okText), 1)];
        }),
        _: 1
      }, 8, ["class", "disabled", "onClick"]))], 64))]))], 2)];
    }),
    _: 3
  }, 8, ["teleport", "visible", "close-on-click-overlay", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
};

var _Q21 = Q("infiniteloading"),
    $t = _Q21.componentName,
    At = _Q21.create;

var Ot = At({
  props: {
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    pullIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    pullTxt: {
      type: String,
      default: "松开刷新"
    },
    loadIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    loadTxt: {
      type: String,
      default: "加载中···"
    },
    loadMoreTxt: {
      type: String,
      default: "哎呀，这里是底部了啦"
    },
    useWindow: {
      type: Boolean,
      default: !0
    },
    containerId: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    },
    isOpenRefresh: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll-change", "load-more", "refresh"],
  components: {
    "nut-icon": ve
  },
  setup: function setup(e, _ref32) {
    var t = _ref32.emit,
        n = _ref32.slots;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      scrollHeight: 0,
      scrollTop: 0,
      isInfiniting: !1,
      direction: "down",
      isTouching: !1,
      refreshMaxH: 0,
      y: 0,
      x: 0,
      distance: 0
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, $t, !0);
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        height: l.distance < 0 ? "0px" : "".concat(l.distance, "px"),
        transition: l.isTouching ? "height 0s cubic-bezier(0.25,0.1,0.25,1)" : "height 0.2s cubic-bezier(0.25,0.1,0.25,1)"
      };
    }),
        i = function i(t) {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(e.containerId ? "#".concat(e.containerId, " #").concat(t) : "#".concat(t));
    },
        r = function r() {
      l.isInfiniting = !1;
    },
        p = function p() {
      l.distance = 0, l.isTouching = !1;
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      setTimeout(function () {
        i("scroller").boundingClientRect(function (e) {
          l.scrollHeight = e.height;
        }).exec();
      }, 200);
    }), c(s({
      classes: o
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(l)), {
      lower: function lower() {
        if ("up" == l.direction || !e.hasMore || l.isInfiniting) return !1;
        l.isInfiniting = !0, t("load-more", r);
      },
      scroll: function scroll(e) {
        e.detail.scrollTop <= 0 ? e.detail.scrollTop = 0 : e.detail.scrollTop >= l.scrollHeight && (e.detail.scrollTop = l.scrollHeight), e.detail.scrollTop > l.scrollTop || e.detail.scrollTop >= l.scrollHeight ? l.direction = "down" : l.direction = "up", l.scrollTop = e.detail.scrollTop, t("scroll-change", e.detail.scrollTop);
      },
      touchStart: function touchStart(t) {
        0 == l.scrollTop && !l.isTouching && e.isOpenRefresh && (l.y = t.touches[0].pageY, l.isTouching = !0, i("refreshTop").boundingClientRect(function (e) {
          l.refreshMaxH = Math.floor(1 * e.height + 10);
        }).exec());
      },
      touchMove: function touchMove(e) {
        l.distance = e.touches[0].pageY - l.y, l.distance > 0 && l.isTouching ? (e.preventDefault(), l.distance >= l.refreshMaxH && (l.distance = l.refreshMaxH)) : (l.distance = 0, l.isTouching = !1);
      },
      touchEnd: function touchEnd() {
        l.distance < l.refreshMaxH ? l.distance = 0 : t("refresh", p);
      },
      getStyle: a
    });
  }
});

Ot.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("view-block"),
      c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("scroll-view");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(c, {
    class: e.classes,
    scrollY: "true",
    style: {
      height: "100%"
    },
    id: "scroller",
    onScrolltolower: e.lower,
    onScroll: e.scroll,
    onTouchstart: e.touchStart,
    onTouchmove: e.touchMove,
    onTouchend: e.touchEnd
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        class: "nut-infinite-top",
        style: e.getStyle
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
            class: "top-box",
            id: "refreshTop"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
                class: "top-img",
                name: e.pullIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "top-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.pullTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["style"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        class: "nut-infinite-container"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")];
        }),
        _: 3
      }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        class: "nut-infinite-bottom"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [e.isInfiniting ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
            key: 0,
            class: "bottom-box"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
                class: "bottom-img",
                name: e.loadIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "bottom-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.loadTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : e.hasMore ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
            key: 1,
            class: "tips"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.loadMoreTxt), 1)];
            }),
            _: 1
          }))];
        }),
        _: 1
      })];
    }),
    _: 1
  }, 8, ["class", "onScrolltolower", "onScroll", "onTouchstart", "onTouchmove", "onTouchend"]);
};

var _Q22 = Q("notify"),
    Bt = _Q22.componentName,
    Et = _Q22.create;

var qt = Et({
  components: Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Tt.name, Tt),
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "closed", "click"],
  setup: function setup(e, _ref34) {
    var t = _ref34.emit;
    var n = null;

    var l = function l() {
      n && (clearTimeout(n), n = null);
    },
        o = function o() {
      t("update:visible", !1), t("closed");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      e && a();
    });

    var a = function a() {
      l(), e.duration && (n = setTimeout(function () {
        o();
      }, e.duration));
    };

    return {
      hide: o,
      onAfterLeave: function onAfterLeave() {
        e.visible && (l(), o());
      },
      onClick: function onClick() {
        t("click");
      }
    };
  }
});

qt.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "nut-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: ["popup-top", "nut-notify", "nut-notify--".concat(e.type), {
          className: e.className
        }],
        style: {
          color: e.color,
          background: e.background
        },
        onClick: t[1] || (t[1] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.msg), 1)], 64))], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
};

var _Q23 = Q("range"),
    Lt = _Q23.componentName,
    Vt = _Q23.create;

var Pt = Vt({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "drag-end", "drag-start", "update:modelValue"],
  setup: function setup(e, _ref35) {
    var t = _ref35.emit,
        n = _ref35.slots;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0);

    var o, a;

    var i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        p = qe(),
        h = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Number(e.max) - Number(e.min);
    }),
        g = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref36;

      var t = Lt;
      return _ref36 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, t, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, "".concat(t, "-disabled"), e.disabled), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, "".concat(t, "-show-number"), !e.hiddenRange), _ref36;
    }),
        m = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        background: e.inactiveColor
      };
    }),
        y = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        borderColor: e.buttonColor
      };
    }),
        f = function f(t) {
      return !!e.range && Array.isArray(t);
    },
        v = function v() {
      var t = e.modelValue,
          n = e.min;
      return f(t) ? 100 * (t[1] - t[0]) / h.value + "%" : 100 * (t - Number(n)) / h.value + "%";
    },
        b = function b() {
      var t = e.modelValue,
          n = e.min;
      return f(t) ? 100 * (t[0] - Number(n)) / h.value + "%" : "0%";
    },
        k = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        width: v(),
        left: b(),
        background: e.activeColor,
        transition: r.value ? "none" : void 0
      };
    }),
        x = function x(t) {
      var n = e.min,
          l = e.max,
          o = e.step;
      return t = Math.max(+n, Math.min(t, +l)), Math.round(t / +o) * +o;
    },
        w = function w(e, t) {
      return JSON.stringify(e) === JSON.stringify(t);
    },
        S = function S(n, l) {
      n = f(n) ? function (e) {
        return e[0] > e[1] ? e.slice(0).reverse() : e;
      }(n).map(x) : x(n), w(n, e.modelValue) || t("update:modelValue", n), l && !w(n, o) && t("change", n);
    };

    return c(s({
      root: i,
      classes: g,
      wrapperStyle: m,
      buttonStyle: y,
      onClick: function () {
        var _onClick = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(t) {
          var n, l, o, a, s, c, _l2, _e2, _t3;

          return E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!e.disabled) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return");

                case 2:
                  n = e.min, l = e.modelValue;
                  _context4.next = 5;
                  return Le(i, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

                case 5:
                  o = _context4.sent;
                  a = t.touches[0].clientX - o.left, s = o.width, c = Number(n) + a / s * h.value;

                  if (f(l)) {
                    _l2 = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(l, 2), _e2 = _l2[0], _t3 = _l2[1];
                    S(c <= (_e2 + _t3) / 2 ? [c, _t3] : [_e2, c], !0);
                  } else S(c, !0);

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function onClick(_x2) {
          return _onClick.apply(this, arguments);
        }

        return onClick;
      }(),
      onTouchStart: function onTouchStart(t) {
        e.disabled || (p.start(t), a = e.modelValue, o = f(a) ? a.map(x) : x(a), r.value = "start");
      },
      onTouchMove: function () {
        var _onTouchMove = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])( /*#__PURE__*/E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(n) {
          var s, c;
          return E_test_projects_google_doodles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!e.disabled) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return");

                case 2:
                  "start" === r.value && t("drag-start"), p.move(n), r.value = "draging";
                  _context5.next = 5;
                  return Le(i, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

                case 5:
                  s = _context5.sent;
                  c = p.deltaX.value / s.width * h.value;
                  f(o) ? a[l.value] = o[l.value] + c : a = o + c, S(a);

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function onTouchMove(_x3) {
          return _onTouchMove.apply(this, arguments);
        }

        return onTouchMove;
      }(),
      onTouchEnd: function onTouchEnd() {
        e.disabled || ("draging" === r.value && (S(a, !0), t("drag-end")), r.value = "");
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e)), {
      barStyle: k,
      curValue: function curValue(t) {
        return "number" == typeof t ? e.modelValue[t] : e.modelValue;
      },
      buttonIndex: l
    });
  }
});
var Mt = {
  class: "nut-range-container"
},
    Rt = {
  key: 0,
  class: "min"
},
    Ht = {
  key: 0,
  class: "number"
},
    Yt = {
  key: 0,
  class: "number"
},
    Ft = {
  key: 1,
  class: "max"
};

Pt.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Mt, [e.hiddenRange ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Rt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(+e.min), 1)), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    ref: "root",
    id: "root",
    style: e.wrapperStyle,
    class: e.classes,
    onClick: t[10] || (t[10] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onClick && e.onClick.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-range-bar",
    style: e.barStyle
  }, [e.range ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])([0, 1], function (n) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
      key: n,
      role: "slider",
      class: {
        "nut-range-button-wrapper-left": 0 == n,
        "nut-range-button-wrapper-right": 1 == n
      },
      tabindex: e.disabled ? -1 : 0,
      "aria-valuemin": +e.min,
      "aria-valuenow": e.curValue(n),
      "aria-valuemax": +e.max,
      "aria-orientation": "horizontal",
      onTouchstart: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function (t) {
        "number" == typeof n && (e.buttonIndex = n), e.onTouchStart(t);
      }, ["stop", "prevent"]),
      onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchMove && e.onTouchMove.apply(e, arguments);
      }, ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
      }, ["stop", "prevent"])),
      onTouchcancel: t[3] || (t[3] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
      }, ["stop", "prevent"])),
      onClick: t[4] || (t[4] = function (e) {
        return e.stopPropagation();
      })
    }, [e.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "button", {
      key: 0
    }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      key: 1,
      class: "nut-range-button",
      style: e.buttonStyle
    }, [e.hiddenTag ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Ht, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.curValue(n)), 1))], 4))], 42, ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"]);
  }), 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 1,
    role: "slider",
    class: "nut-range-button-wrapper",
    tabindex: e.disabled ? -1 : 0,
    "aria-valuemin": +e.min,
    "aria-valuenow": e.curValue(),
    "aria-valuemax": +e.max,
    "aria-orientation": "horizontal",
    onTouchstart: t[5] || (t[5] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function (t) {
      e.onTouchStart(t);
    }, ["stop", "prevent"])),
    onTouchmove: t[6] || (t[6] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchMove && e.onTouchMove.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchend: t[7] || (t[7] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchcancel: t[8] || (t[8] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    }, ["stop", "prevent"])),
    onClick: t[9] || (t[9] = function (e) {
      return e.stopPropagation();
    })
  }, [e.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "button", {
    key: 0
  }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 1,
    class: "nut-range-button",
    style: e.buttonStyle
  }, [e.hiddenTag ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Yt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.curValue(e.index)), 1))], 4))], 40, ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"]))], 4)], 6), e.hiddenRange ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Ft, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(+e.max), 1))]);
};

var _Q24 = Q("step"),
    Wt = _Q24.create,
    Xt = _Q24.componentName;

var Ut = Wt({
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "12px"
    }
  },
  setup: function setup(e, _ref37) {
    var t = _ref37.emit,
        n = _ref37.slots;

    var _P = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])(),
        l = _P.proxy,
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("parent");

    o.relation(l);
    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      dot: o.props.progressDot
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return o.state.children.indexOf(l) + 1;
    }),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return function () {
        var e = i.value;
        return e < +o.props.current ? "finish" : e === +o.props.current ? "process" : "wait";
      }();
    }),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref38;

      return _ref38 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref38, Xt, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref38, "".concat(Xt, "-").concat(r.value), !0), _ref38;
    });
    return c(s({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(a)), {
      index: i,
      classes: p
    });
  }
});
var Gt = {
  class: "nut-step-head"
},
    Qt = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
  class: "nut-step-line"
}, null, -1),
    Jt = {
  key: 2,
  class: "nut-step-inner"
},
    Kt = {
  class: "nut-step-main"
},
    Zt = {
  class: "nut-step-title"
};

Ut.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Gt, [Qt, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: ["nut-step-icon", [e.dot ? "" : e.icon ? "is-icon" : "is-text"]]
  }, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    class: "nut-step-icon-inner",
    name: e.icon,
    size: e.size
  }, null, 8, ["name", "size"])) : e.dot ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 1
  }, [], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Jt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.index), 1))], 2)]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Kt, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Zt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), e.content ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    class: "nut-step-content",
    innerHTML: e.content
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])], 2);
};

var _Q25 = Q("steps"),
    en = _Q25.create,
    tn = _Q25.componentName;

var nn = en({
  children: [Ut],
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    current: {
      type: [String, Number],
      default: "0"
    },
    progressDot: {
      type: Boolean,
      default: !1
    }
  },
  setup: function setup(e, _ref39) {
    var t = _ref39.emit,
        n = _ref39.slots;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: []
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref40;

      var t = tn;
      return _ref40 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref40, t, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref40, "".concat(t, "-").concat(e.direction), !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref40, "".concat(t, "-dot"), !!e.progressDot), _ref40;
    });
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("parent", {
      relation: function relation(e) {
        e && l.children.push(e);
      },
      state: l,
      props: e
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: o.value
      }, null == (e = n.default) ? void 0 : e.call(n));
    };
  }
});

var _Q26 = Q("swiper-item"),
    ln = _Q26.create,
    on = _Q26.componentName;

var an = ln({
  props: {},
  setup: function setup(e, _ref41) {
    var t = _ref41.slots;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, on, !0);
      })
    };
  }
});
var sn = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withScopeId */ "N"])("data-v-2087051a"),
    cn = sn(function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("swiper-item");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    class: e.classes
  }, {
    default: sn(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {}, void 0, !0)];
    }),
    _: 3
  }, 8, ["class"]);
});
an.render = cn, an.__scopeId = "data-v-2087051a";

var _Q27 = Q("swiper"),
    rn = _Q27.create,
    un = _Q27.componentName;

var dn = rn({
  inheritAttrs: !1,
  children: [an],
  props: {},
  emits: [],
  setup: function setup(e, t) {
    return {
      attrs: t.attrs
    };
  }
});
var pn = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withScopeId */ "N"])("data-v-1ac0e5fa"),
    hn = pn(function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("swiper");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, e.attrs, {
    default: pn(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {}, void 0, !0)];
    }),
    _: 3
  }, 16);
});
dn.render = hn, dn.__scopeId = "data-v-1ac0e5fa";

var _Q28 = Q("switch"),
    gn = _Q28.componentName,
    mn = _Q28.create;

var yn = mn({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disable: {
      type: Boolean,
      default: !1
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref43) {
    var t = _ref43.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        var _ref44;

        var t = gn;
        return _ref44 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref44, t, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref44, e.modelValue ? "switch-open" : "switch-close", !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref44, "".concat(t, "-disable"), e.disable), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref44, "".concat(t, "-base"), !0), _ref44;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return {
          backgroundColor: e.modelValue ? e.activeColor : e.inactiveColor
        };
      }),
      onClick: function onClick(n) {
        e.disable || (t("update:modelValue", !e.modelValue), t("change", !e.modelValue, n));
      }
    };
  }
});
var fn = {
  class: "switch-button"
},
    vn = {
  class: "close-line"
};

yn.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    onClick: t[1] || (t[1] = function () {
      return e.onClick && e.onClick.apply(e, arguments);
    }),
    style: e.style
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", fn, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", vn, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], !e.modelValue]]), e.activeText ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-switch-label open"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.activeText), 513), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.modelValue]]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-switch-label close"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.inactiveText), 513), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], !e.modelValue]])], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])], 6);
};

var _Q29 = Q("icon"),
    bn = _Q29.componentName,
    kn = _Q29.create;

var xn = kn({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref45) {
    var t = _ref45.emit,
        n = _ref45.slots;

    var l = function l(e) {
      t("click", e);
    };

    return function () {
      var t;
      var o = !!e.name && -1 !== e.name.indexOf("/");
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])(o ? "img" : e.tag, {
        class: o ? "".concat(bn, "__img") : "".concat(e.fontClassName, " ").concat(bn, " ").concat(e.classPrefix, "-").concat(e.name),
        style: {
          color: e.color,
          fontSize: ue(e.size),
          width: ue(e.size),
          height: ue(e.size)
        },
        onClick: l,
        src: o ? e.name : ""
      }, null == (t = n.default) ? void 0 : t.call(n));
    };
  }
});

var _Q30 = Q("toast"),
    wn = _Q30.create,
    Sn = wn({
  components: Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, xn.name, xn),
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: Number,
      default: 30
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: String,
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: "rgba(0, 0, 0, .8)"
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
    },
    coverColor: {
      type: String,
      default: "rgba(0, 0, 0, 0)"
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "closed"],
  setup: function setup(e, _ref46) {
    var t = _ref46.emit;
    var n;

    var l = function l() {
      n && (clearTimeout(n), n = null);
    },
        o = function o() {
      t("update:visible", !1), t("closed");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (t) {
      t && (l(), e.duration && (n = setTimeout(function () {
        o();
      }, e.duration)));
    });
    var a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return "text" !== e.type || !!e.icon;
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return e.icon ? e.icon : {
        success: "success",
        fail: "failure",
        warn: "tips",
        loading: "loading"
      }[e.type];
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return ["nut-toast", {
        "nut-toast-center": e.center
      }, {
        "nut-toast-has-icon": a.value
      }, {
        "nut-toast-cover": e.cover
      }, {
        "nut-toast-loading": "loading" === e.type
      }, e.customClass, "nut-toast-" + e.size];
    });
    return {
      clickCover: function clickCover() {
        e.closeOnClickOverlay && o();
      },
      hasIcon: a,
      iconName: i,
      toastBodyClass: s,
      onAfterLeave: function onAfterLeave() {
        e.visible && (l(), o());
      }
    };
  }
}),
    Cn = {
  key: 0,
  class: "nut-toast-icon-wrapper"
};

Sn.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: e.toastBodyClass,
        style: {
          bottom: e.center ? "auto" : e.bottom + "px",
          "background-color": e.coverColor
        },
        onClick: t[1] || (t[1] = function () {
          return e.clickCover && e.clickCover.apply(e, arguments);
        })
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 1,
        class: "nut-toast-inner",
        style: {
          "text-align": e.textAlignCenter ? "center" : "left",
          "background-color": e.bgColor
        }
      }, [e.hasIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Cn, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
        size: "20",
        color: "#ffffff",
        name: e.iconName
      }, null, 8, ["name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: "nut-toast-text",
        innerHTML: e.msg
      }, null, 8, ["innerHTML"])], 4))], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
};

var _Q31 = Q("navbar"),
    zn = _Q31.componentName,
    Tn = _Q31.create;

var Dn = Tn({
  props: {
    leftShow: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    titIcon: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      defaul: function defaul() {
        return [];
      }
    },
    icon: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["click", "on-click-back", "on-click-title", "on-click-right", "on-click-desc", "on-click-icon", "on-click-more", "on-click-clear", "on-click-send", "on-click-slot", "on-click-slot-send", "switch-tab"],
  setup: function setup(e, _ref47) {
    var t = _ref47.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.defaultIndex);

    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, zn, !0);
      }),
      handleLeft: function handleLeft() {
        t("on-click-back");
      },
      handleCenter: function handleCenter() {
        t("on-click-title");
      },
      handleCenterIcon: function handleCenterIcon() {
        t("on-click-icon");
      },
      handleClear: function handleClear() {
        t("on-click-clear");
      },
      handleSend: function handleSend() {
        t("on-click-send");
      },
      handleSlot: function handleSlot() {
        t("on-click-slot");
      },
      handleSends: function handleSends() {
        t("on-click-slot-send");
      },
      switchTitle: function switchTitle(e, l) {
        n.value = e, console.log(e), t("switch-tab", n.value, l);
      },
      activeIndex: n
    };
  }
});
var Nn = {
  class: "nut-navbar__left"
},
    _n = {
  class: "tab-title"
};

Dn.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Nn, [e.leftShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    color: "#979797",
    name: "left",
    onClick: e.handleLeft
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)]), e.title || e.titIcon || e.tabs ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    class: ["nut-navbar__title", {
      icon: e.icon
    }]
  }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    class: "text__title",
    onClick: t[1] || (t[1] = function () {
      return e.handleCenter && e.handleCenter.apply(e, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.titIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 1,
    class: "icon",
    name: e.titIcon,
    onClick: e.handleCenterIcon
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", _n, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.tabs, function (t, n) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      class: ["tab-title-box", {
        "nut-tab-active": e.activeIndex == t.id || e.activeIndex == n
      }],
      onClick: function onClick(n) {
        return e.switchTitle(t.id, t.name);
      },
      key: t.id
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.name), 11, ["onClick"]);
  }), 128))])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.desc || e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 1,
    class: ["nut-navbar__right", {
      icon: e.icon
    }]
  }, [e.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 0,
    style: {
      "text-align": e.descTextAlign
    },
    onClick: t[2] || (t[2] = function () {
      return e.handleClear && e.handleClear.apply(e, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 1,
    onClick: t[3] || (t[3] = function () {
      return e.handleSends && e.handleSends.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "icons")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", null, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    class: "rightIcon",
    name: e.icon,
    onClick: e.handleSend
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 2);
};

var _Q32 = Q("tab-panel"),
    In = _Q32.create;

var jn = In({
  props: {
    tabTitle: {
      type: String,
      default: ""
    }
  },
  setup: function setup(e, t) {}
});

jn.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-swiper-item");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")];
    }),
    _: 3
  });
};

var $n = {
  setup: function setup(e) {
    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {}, e.slots);
    };
  },
  props: {
    slots: Object
  }
};

var _Q33 = Q("tab"),
    An = _Q33.create;

var On = An({
  children: [jn],
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    animatedTime: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: "false"
    },
    noSwiping: {
      type: Boolean,
      default: !1
    },
    scrollType: {
      type: String,
      default: "flex"
    },
    iconType: {
      type: String,
      default: "all"
    }
  },
  components: {
    TabTitle: $n
  },
  setup: function setup(e, t) {
    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])([]);

    Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(!1);

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("0px"),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("0px"),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.defaultIndex),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        c = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])([]),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("vertical" === e.direction),
        u = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("tab-title-boxs-" + p()),
        d = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("tab-title-" + p());

    function p() {
      return Array.from(Array(10), function () {
        return Math.floor(36 * Math.random()).toString(36);
      }).join("");
    }

    var h = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("swiper-" + p());

    function g(t) {
      var n = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
      "vertical" === e.direction ? n.select(".".concat(d.value)).boundingClientRect().selectAll(".".concat(u.value)).boundingClientRect().exec(function (e) {
        var n = e[0].top,
            l = e[0].height;
        var a = e[1][t].top,
            i = e[1][t].height;
        o.value = a - n - l / 2 + i / 2 + "px";
      }) : n.select(".".concat(d.value)).boundingClientRect().selectAll(".".concat(u.value)).boundingClientRect().exec(function (e) {
        var n = e[0].width;
        var o = e[1][t].left,
            a = e[1][t].width;
        l.value = o - n / 2 + a / 2 + "px";
      });
    }

    function m() {
      if (n.length = 0, t.slots.default) {
        var _e3 = 1 === t.slots.default().length ? t.slots.default()[0].children : t.slots.default();

        _e3 && _e3.map(function (e, t) {
          "string" != typeof e.children && n.push({
            title: e.props && e.props["tab-title"] ? e.props["tab-title"] : "",
            content: e.children && e.children.header ? e.children.header() : null
          });
        });
      }
    }

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      m();
      var e = [];

      for (var _t4 = 0; _t4 < 100; _t4++) {
        e.push(_t4);
      }

      c.value = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return t.slots.default ? t.slots.default() : "";
    }, function () {
      m();
    }), {
      swiperClassName: h,
      titles: n,
      navlist: i,
      activeIndex: a,
      switchTitle: function switchTitle(e) {
        a.value = e, g(e);
      },
      changeTab: function changeTab(e) {
        a.value = e.detail.current, g(e.detail.current);
      },
      nutuiSwiper: s,
      scrollLeft: l,
      scrollTop: o,
      arr: c,
      randomClass: u,
      scrollYDirection: r,
      randomTitleClass: d
    };
  }
});
var Bn = {
  class: "world"
},
    En = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
  class: "underline"
}, null, -1);

On.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("TabTitle"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("scroll-view"),
      c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-swiper");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: ["vertical" === e.direction ? "vertical-tab" : "nutui-tab"]
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
    "scroll-x": !e.scrollYDirection,
    "scroll-y": e.scrollYDirection,
    "scroll-left": e.scrollLeft,
    "scroll-top": e.scrollTop,
    class: "tab-title-scroll",
    "scroll-with-animation": !0
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: ["tab-title", e.randomTitleClass, e.iconType]
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.titles, function (t, n) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
          class: ["tab-title-box", e.randomClass, {
            "nut-tab-active": e.activeIndex == n
          }, {
            "tab-title-box-scroll": "scroll" == e.scrollType
          }],
          key: n,
          onClick: function onClick(t) {
            return e.switchTitle(n, t);
          }
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("span", Bn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.title), 1), t.content ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
          key: 0,
          slots: t.content
        }, null, 8, ["slots"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 10, ["onClick"]);
      }), 128)), En], 2)];
    }),
    _: 1
  }, 8, ["scroll-x", "scroll-y", "scroll-left", "scroll-top"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(c, {
    current: e.activeIndex,
    "pagination-visible": !1,
    duration: e.animatedTime,
    "pagination-color": "#426543",
    onChange: t[1] || (t[1] = function (t) {
      return e.changeTab(t);
    }),
    ref: "nutuiSwiper",
    touchable: !e.noSwiping,
    vertical: e.scrollYDirection,
    class: "tab-swiper",
    circular: !0
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")];
    }),
    _: 3
  }, 8, ["current", "duration", "touchable", "vertical"])], 2);
};

var _Q34 = Q("tabbar-item"),
    qn = _Q34.create;

var Ln = qn({
  props: {
    tabTitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    }
  },
  setup: function setup(e, t) {
    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("parent"),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      size: n.size,
      unactiveColor: n.unactiveColor,
      activeColor: n.activeColor,
      active: n.modelValue,
      index: 0
    });

    (function (e) {
      if (e.proxy) {
        var _t5 = n.children.length;
        l.index = _t5;

        var _o3 = Object.assign({}, e.proxy, {
          index: _t5
        });

        n.children.push(_o3);
      }
    })(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])());

    var o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return n ? n.modelValue : null;
    });
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(o, function (e, t) {
      l.active = e, setTimeout(function () {
        n.children[e].href && (window.location.href = n.children[e].href);
      });
    }), {
      state: l,
      change: function change(e) {
        n.changeIndex(e);
      }
    };
  }
});
var Vn = {
  class: "nut-tabbar-item_icon-box"
},
    Pn = {
  key: 0,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_num"
},
    Mn = {
  key: 1,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_nums"
},
    Rn = {
  key: 2
};

Ln.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("div", {
    class: ["nut-tabbar-item", {
      "nut-tabbar-item__icon--unactive": e.state.active != e.state.index
    }],
    style: {
      color: e.state.active == e.state.index ? e.state.activeColor : e.state.unactiveColor
    },
    onClick: t[1] || (t[1] = function (t) {
      return e.change(e.state.index);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Vn, [e.num && e.num <= 99 ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Pn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.num), 1)) : e.num && e.num > 100 ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Mn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("99+"))) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Rn, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    class: "nut-tabbar-item_icon-box_icon",
    size: e.state.size,
    name: e.icon
  }, null, 8, ["size", "name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: ["nut-tabbar-item_icon-box_nav-word", {
      "nut-tabbar-item_icon-box_big-word": !e.icon
    }]
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.tabTitle), 3)])], 6);
};

var _Q35 = Q("tabbar"),
    Hn = _Q35.create;

var Yn = Hn({
  children: [Ln],
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "base"
    },
    size: {
      type: String,
      default: "20px"
    },
    unactiveColor: {
      type: String,
      default: "#000000"
    },
    activeColor: {
      type: String,
      default: ""
    }
  },
  emits: ["tab-switch", "update:visible"],
  setup: function setup(e, _ref49) {
    var t = _ref49.emit,
        n = _ref49.slots;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      val: e.visible,
      children: []
    });

    function o(e) {
      t("update:visible", e), a.modelValue = e, t("tab-switch", a.children[e], e);
    }

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: l.children,
      size: e.size,
      modelValue: l.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: o
    });
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("parent", a), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      a.modelValue = e;
    }), {
      changeIndex: o
    };
  }
});

Yn.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: ["nut-tabbar", {
      "nut-tabbar-bottom": e.bottom
    }]
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")], 2);
};

var Fn = {
  isLeapYear: function isLeapYear(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  getWhatDay: function getWhatDay(e, t, n) {
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date(e + "/" + t + "/" + n).getDay()];
  },
  getMonthPreDay: function getMonthPreDay(e, t) {
    var n = new Date(e + "/" + t + "/01").getDay();
    return 0 == n && (n = 7), n;
  },
  getMonthDays: function getMonthDays(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  getNumTwoBit: function getNumTwoBit(e) {
    return ((e = Number(e)) > 9 ? "" : "0") + e;
  },
  date2Str: function date2Str(e, t) {
    t = t || "-";
    return [e.getFullYear(), this.getNumTwoBit(e.getMonth() + 1), this.getNumTwoBit(e.getDate())].join(t);
  },
  getDay: function getDay(e) {
    e = e || 0;
    var t = new Date();
    var n = 864e5 * e;
    return t = new Date(t.getTime() + n), this.date2Str(t);
  },
  compareDate: function compareDate(e, t) {
    return !(new Date(e.replace("-", "/").replace("-", "/")) >= new Date(t.replace("-", "/").replace("-", "/")));
  },
  isEqual: function isEqual(e, t) {
    return new Date(e).getTime() == new Date(t).getTime();
  }
},
    _Q36 = Q("calendar-item"),
    Wn = _Q36.create;

var Xn = Wn({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: "日历选择"
    },
    defaultValue: {
      type: String,
      default: null
    },
    startDate: {
      type: String,
      default: Fn.getDay(0)
    },
    endDate: {
      type: String,
      default: Fn.getDay(365)
    }
  },
  emits: ["choose", "update", "close"],
  setup: function setup(e, _ref50) {
    var t = _ref50.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(["日", "一", "二", "三", "四", "五", "六"]),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      yearMonthTitle: "",
      currDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "calendar-month-day",
      startData: "",
      endData: "",
      isRange: "range" === e.type,
      timer: 0
    }),
        c = function c(e) {
      return e.split("-");
    },
        r = function r(e) {
      return Fn.isEqual(i.currDate[0], e);
    },
        d = function d(e, t, n) {
      return n ? t.curData[3] + "-" + t.curData[4] + "-" + Fn.getNumTwoBit(+e.day) : t.curData[0] + "-" + t.curData[1] + "-" + Fn.getNumTwoBit(+e.day);
    },
        p = function p(t, n, l) {
      var o = d(t, n, l);
      return "curr" == t.type ? !i.isRange && Fn.isEqual(i.currDate, o) || i.isRange && (r(o) || function (e) {
        return Fn.isEqual(i.currDate[1], e);
      }(o)) ? "".concat(i.dayPrefix, "-active") : e.startDate && Fn.compareDate(o, e.startDate) || e.endDate && Fn.compareDate(e.endDate, o) ? "".concat(i.dayPrefix, "-disabled") : i.isRange && Array.isArray(i.currDate) && 2 == Object.values(i.currDate).length && Fn.compareDate(i.currDate[0], o) && Fn.compareDate(o, i.currDate[1]) ? "".concat(i.dayPrefix, "-choose") : null : "".concat(i.dayPrefix, "-disabled");
    },
        h = function h() {
      (i.isRange && 2 == i.chooseData.length || !i.isRange) && (t("choose", i.chooseData), e.poppable && t("update"));
    },
        g = function g(t, n, l, o) {
      if (p(t, n, o) != "".concat(i.dayPrefix, "-disabled")) {
        var _a = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(n.curData);

        _a = o ? _a.splice(3) : _a.splice(0, 3), _a[2] = "number" == typeof t.day ? Fn.getNumTwoBit(t.day) : t.day, _a[3] = "".concat(_a[0], "-").concat(_a[1], "-").concat(_a[2]), _a[4] = Fn.getWhatDay(+_a[0], +_a[1], +_a[2]), i.isRange ? (2 == Object.values(i.currDate).length ? i.currDate = [_a[3]] : Fn.compareDate(i.currDate[0], _a[3]) ? Array.isArray(i.currDate) && i.currDate.push(_a[3]) : Array.isArray(i.currDate) && i.currDate.unshift(_a[3]), 2 != i.chooseData.length && i.chooseData.length ? Fn.compareDate(i.chooseData[3], _a[3]) ? i.chooseData = [Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(i.chooseData), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_a)] : i.chooseData = [Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_a), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(i.chooseData)] : i.chooseData = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_a)) : (i.currDate = _a[3], i.chooseData = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_a)), e.isAutoBackFill && !l && h();
      }
    },
        m = function m(e) {
      var t = "prev" == e ? i.monthsData[0] : i.monthsData[i.monthsData.length - 1];
      var n = parseInt(t.curData[0]),
          l = parseInt(t.curData[1].toString().replace(/^0/, ""));

      switch (e) {
        case "prev":
          1 == l && (n -= 1), l = 1 == l ? 12 : --l;
          break;

        case "next":
          12 == l && (n += 1), l = 12 == l ? 1 : ++l;
      }

      return [n, Fn.getNumTwoBit(l), t.curData[2]];
    },
        y = function y(e, t) {
      return "prev" == t && e >= 7 && (e -= 7), Array.from(Array(e), function (e, n) {
        return {
          day: n + 1,
          type: t
        };
      });
    },
        f = function f(e, t) {
      var n = Fn.getMonthPreDay(+e[0], +e[1]),
          l = Fn.getMonthDays(e[0], e[1]),
          o = {
        curData: e,
        title: "".concat(e[0], "\u5E74").concat(e[1], "\u6708"),
        monthData: [].concat(Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(y(n, "prev")), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(y(l, "curr")))
      };
      "next" == t ? i.endData && Fn.compareDate("".concat(i.endData[0], "-").concat(i.endData[1], "-").concat(Fn.getMonthDays(i.endData[0], i.endData[1])), "".concat(e[0], "-").concat(e[1], "-").concat(e[2])) || i.monthsData.push(o) : i.startData && Fn.compareDate("".concat(e[0], "-").concat(e[1], "-").concat(e[2]), "".concat(i.startData[0], "-").concat(i.startData[1], "-01")) ? i.unLoadPrev = !0 : i.monthsData.unshift(o);
    },
        v = function v() {
      i.startData = e.startDate ? c(e.startDate) : "", i.endData = e.endDate ? c(e.endDate) : "", e.defaultValue ? i.currDate = i.isRange ? Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(e.defaultValue) : e.defaultValue : i.currDate = i.isRange ? [Fn.date2Str(new Date()), Fn.getDay(1)] : Fn.date2Str(new Date()), i.isRange && Array.isArray(i.currDate) ? (e.startDate && Fn.compareDate(i.currDate[0], e.startDate) && i.currDate.splice(0, 1, e.startDate), e.endDate && Fn.compareDate(e.endDate, i.currDate[1]) && i.currDate.splice(1, 1, e.endDate), i.defaultData = [].concat(Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c(i.currDate[0])), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c(i.currDate[1])))) : (e.startDate && Fn.compareDate(i.currDate, e.startDate) ? i.currDate = e.startDate : e.endDate && !Fn.compareDate(i.currDate, e.endDate) && (i.currDate = e.endDate), i.defaultData = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c(i.currDate))), f(i.defaultData, "next"), i.yearMonthTitle = i.monthsData[0].title;
      var t = 1;

      do {
        f(m("next"), "next");
      } while (t++ < 4);

      i.isRange ? (g({
        day: i.defaultData[2],
        type: "curr"
      }, i.monthsData[0], !0), g({
        day: i.defaultData[5],
        type: "curr"
      }, i.monthsData[0], !0, !0)) : g({
        day: i.defaultData[2],
        type: "curr"
      }, i.monthsData[0], !0);
    },
        b = function b(e, t) {
      return i.isRange && "curr" == e.type && "calendar-month-day-active" == p(e, t);
    },
        k = function k() {
      if (!e.poppable) return !1;
      vt(function () {
        if ((null == a ? void 0 : a.value) && (null == o ? void 0 : o.value)) {
          var _e4 = null == a ? void 0 : a.value.getBoundingClientRect().bottom,
              _t6 = o.value.getElementsByClassName(".calendar-month");

          for (var _n3 = 0; _n3 < _t6.length; _n3++) {
            _t6[_n3].getBoundingClientRect().top <= _e4 && _t6[_n3].getBoundingClientRect().bottom >= _e4 ? i.yearMonthTitle = i.monthsData[_n3].title : 0 === i.scrollDistance && (i.yearMonthTitle = i.monthsData[0].title);
          }
        }
      });
    },
        x = function x() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
      (null == o ? void 0 : o.value) && ("end" === t ? (o.value.style.webkitTransition = "transform ".concat(n, "ms cubic-bezier(0.19, 1, 0.22, 1)"), clearTimeout(i.timer), i.timer = setTimeout(function () {
        k();
      }, n)) : (o.value.style.webkitTransition = "", k()), o.value.style.webkitTransform = "translateY(".concat(e, "px)"), i.scrollDistance = e);
    },
        w = function w(e, t, n) {
      var a, s;
      var c = e + i.transformY;
      var r = (null == (a = l.value) ? void 0 : a.offsetHeight) || 0,
          u = (null == (s = o.value) ? void 0 : s.offsetHeight) || 0;
      "end" === t ? (c > 0 && (c = 0), c < 0 && c < -u + r && (c = -u + r), u <= r && 1 == i.monthsData.length && (c = 0), x(c, t, n)) : (c > 0 && c > 100 && (c = 100), c < -u + r - 100 && i.monthsData.length > 1 && (c = -u + r - 100), c < 0 && c < -100 && 1 == i.monthsData.length && (c = -100), x(c));
    };

    return v(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.defaultValue;
    }, function (e) {
      e && (i.chooseData.splice(0), i.monthsData.splice(0), i.scrollDistance = 0, i.translateY = 0, x(i.scrollDistance), v());
    }), s(s({
      weeks: n,
      touchStart: function touchStart(e) {
        var t = e.changedTouches[0];
        i.touchParams.startY = t.pageY, i.touchParams.startTime = e.timeStamp || Date.now(), i.transformY = i.scrollDistance;
      },
      touchMove: function touchMove(e) {
        var t = e.changedTouches[0];
        i.touchParams.lastY = t.pageY, i.touchParams.lastTime = e.timeStamp || Date.now();
        var n = i.touchParams.lastY - i.touchParams.startY;
        if (Math.abs(n) < 5) return !1;
        w(n);
      },
      touchEnd: function touchEnd(e) {
        var t, n;
        var a = e.changedTouches[0];
        i.touchParams.lastY = a.pageY, i.touchParams.lastTime = e.timeStamp || Date.now();
        var s = i.touchParams.lastY - i.touchParams.startY;
        if (Math.abs(s) < 5) return !1;
        var c = s + i.transformY,
            r = (null == (t = l.value) ? void 0 : t.offsetHeight) || 0,
            u = (null == (n = o.value) ? void 0 : n.offsetHeight) || 0;
        c > 0 ? f(m("prev"), "prev") : c < 2 * r - u && (f(m("next"), "next"), Math.abs(s) >= 300 && f(m("next"), "next"));
        var d = i.touchParams.lastTime - i.touchParams.startTime;
        d <= 300 ? (s *= 2, d += 1e3, w(s, "end", d)) : w(s, "end");
      },
      getClass: p,
      isStartTip: function isStartTip(e, t) {
        return !!b(e, t) && r(d(e, t));
      },
      isEndTip: function isEndTip(e, t) {
        return b(e, t);
      },
      chooseDay: g,
      isCurrDay: function isCurrDay(e, t) {
        var n = "".concat(e.curData[0], "-").concat(e.curData[1], "-").concat(t);
        return Fn.isEqual(n, Fn.date2Str(new Date()));
      },
      confirm: h,
      monthsPanel: o,
      months: l,
      weeksPanel: a
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(i)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e));
  }
});
var Un = {
  class: "calendar-title"
},
    Gn = {
  class: "calendar-curr-month"
},
    Qn = {
  class: "calendar-weeks",
  ref: "weeksPanel"
},
    Jn = {
  class: "calendar-months-panel",
  ref: "monthsPanel"
},
    Kn = {
  class: "calendar-loading-tip"
},
    Zn = {
  class: "calendar-month-title"
},
    el = {
  class: "calendar-month-con"
},
    tl = {
  class: "calendar-day"
},
    nl = {
  key: 0,
  class: "calendar-curr-tips"
},
    ll = {
  key: 1,
  class: "calendar-day-tip"
},
    ol = {
  key: 2,
  class: "calendar-day-tip"
},
    al = {
  key: 0,
  class: "nut-calendar-footer"
};

Xn.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: ["nut-calendar nut-calendar-taro", {
      "nut-calendar-tile": !e.poppable,
      "nut-calendar-nofooter": e.isAutoBackFill
    }]
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: ["nut-calendar-header", {
      "nut-calendar-header-tile": !e.poppable
    }]
  }, [e.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Un, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Gn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.yearMonthTitle), 1)], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Qn, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.weeks, function (e, t) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      class: "calendar-week-item",
      key: t
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e), 1);
  }), 128))], 512)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "nut-calendar-content",
    ref: "months",
    onTouchstart: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchStart && e.touchStart.apply(e, arguments);
    }, ["stop"])),
    onTouchmove: t[2] || (t[2] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchMove && e.touchMove.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchend: t[3] || (t[3] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchEnd && e.touchEnd.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Jn, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Kn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.unLoadPrev ? "没有更早月份" : "加载上一个月"), 1), (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.monthsData, function (t, n) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      class: "calendar-month",
      key: n
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Zn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", el, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
      class: ["calendar-month-item", "range" === e.type ? "month-item-range" : ""]
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(t.monthData, function (n, l) {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: l,
        class: ["calendar-month-day", e.getClass(n, t)],
        onClick: function onClick(l) {
          return e.chooseDay(n, t);
        }
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", tl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("curr" == n.type ? n.day : ""), 1), e.isCurrDay(t, n.day) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", nl, "今天")) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.isStartTip(n, t) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", ll, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("开始"))) : e.isEndTip(n, t) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", ol, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("结束"))) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 10, ["onClick"]);
    }), 128))], 2)])]);
  }), 128))], 512)], 544), e.poppable && !e.isAutoBackFill ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", al, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
    class: "calendar-confirm-btn",
    onClick: t[4] || (t[4] = function () {
      return e.confirm && e.confirm.apply(e, arguments);
    })
  }, "确定")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 2);
};

var _Q37 = Q("calendar"),
    il = _Q37.create;

var sl = il({
  children: [Xn, Tt],
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: "日历选择"
    },
    defaultValue: {
      type: String
    },
    startDate: {
      type: String,
      default: Fn.getDay(0)
    },
    endDate: {
      type: String,
      default: Fn.getDay(365)
    }
  },
  emits: ["choose", "close", "update:visible"],
  setup: function setup(e, _ref51) {
    var t = _ref51.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        o = function o() {
      n.value = !1, t("close"), t("update:visible", !1);
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      n.value = e;
    }), {
      show: n,
      closePopup: function closePopup() {
        o();
      },
      update: function update() {
        n.value = !1, t("update:visible", !1);
      },
      close: o,
      choose: function choose(e) {
        o(), t("choose", e);
      },
      calendarRef: l
    };
  }
});

sl.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-calendar-item"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-popup");
  return e.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
    key: 0,
    visible: e.show,
    "onUpdate:visible": t[1] || (t[1] = function (t) {
      return e.show = t;
    }),
    position: "bottom",
    round: "",
    closeable: "",
    onClickOverlay: e.closePopup,
    onClickCloseIcon: e.closePopup
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
        props: "",
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose
      }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onUpdate", "onClose", "onChoose"])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay", "onClickCloseIcon"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 1,
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    onClose: e.close,
    onChoose: e.choose
  }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onClose", "onChoose"]));
};

var _Q38 = Q("checkboxgroup"),
    cl = _Q38.create,
    rl = _Q38.componentName;

var ul = cl({
  props: {
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref52) {
    var t = _ref52.slots,
        n = _ref52.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: []
    });
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("parent", {
      value: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return e.modelValue;
      }),
      disabled: e.disabled,
      updateValue: function updateValue(e) {
        n("update:modelValue", e), n("change", e);
      },
      relation: function relation(e) {
        e.proxy && l.children.push(e.proxy);
      }
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.modelValue;
    }, function (e) {
      n("change", e);
    }), function (e) {
      var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])();
      t && Object.assign(t.proxy, e);
    }({
      toggleAll: function toggleAll(e) {
        var t = [];
        e && l.children.forEach(function (e) {
          t.push(null == e ? void 0 : e.label);
        }), n("update:modelValue", t);
      }
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat(rl)
      }, null == (e = t.default) ? void 0 : e.call(t));
    };
  }
});

var _Q39 = Q("checkbox"),
    dl = _Q39.create,
    pl = _Q39.componentName;

var hl = dl({
  children: [ul],
  components: {
    nutIcon: ve,
    nutCheckboxGroup: ul
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: "18"
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "checked"
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref53) {
    var t = _ref53.emit,
        n = _ref53.slots;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("parent"),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return !!l;
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return o.value ? l.value.value.includes(e.label) : e.modelValue;
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return o.value ? l.disabled : e.disabled;
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return !!e.modelValue;
    }),
        c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return i.value ? "#f5f5f5" : a.value ? "#fa2c19" : "#d6d6d6";
    }),
        r = function r() {
      var t = e.iconName,
          n = e.iconSize,
          l = e.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])(ve, {
        name: a.value ? l : t,
        size: n,
        color: c.value
      });
    },
        u = function u(a) {
      var c, r, u;

      if (!i.value && (r = !s.value, u = null == (c = n.default) ? void 0 : c.call(n)[0].children, t("update:modelValue", r), t("change", r, u), o.value)) {
        var _t7 = l.value.value,
            _n4 = e.label;

        var _o4 = _t7.indexOf(_n4);

        _o4 > -1 ? _t7.splice(_o4, 1) : _t7.push(_n4), l.updateValue(_t7);
      }
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      o.value && l.relation(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "n"])());
    }), function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat(pl, " ").concat("left" === e.textPosition ? "".concat(pl, "--reverse") : ""),
        onClick: u
      }, [r(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat(pl, "__label ").concat(i.value ? "".concat(pl, "__label--disabled") : "")
      }, null == (t = n.default) ? void 0 : t.call(n))]);
      var t;
    };
  }
});

var _Q40 = Q("datepicker"),
    gl = _Q40.create;

var ml = gl({
  children: [],
  props: {
    value: {
      type: String,
      default: new Date()
    },
    start: {
      type: String,
      default: "1970-01-01"
    },
    end: {
      type: String,
      default: "2999-01-01"
    },
    fields: {
      type: String,
      default: "day"
    }
  },
  emits: ["onChange"],
  setup: function setup(e, _ref54) {
    var t = _ref54.emit;
    return s({
      confirm: confirm,
      onChange: function onChange(e) {
        t("onChange", e.detail.value);
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e));
  }
});

ml.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("picker");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    mode: "date",
    onChange: e.onChange,
    value: e.value,
    start: e.start,
    end: e.end,
    fields: e.fields
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")];
    }),
    _: 3
  }, 8, ["onChange", "value", "start", "end", "fields"]);
};

var _Q41 = Q("inputnumber"),
    yl = _Q41.componentName,
    fl = _Q41.create;

var vl = fl({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: [Number, String],
      default: ""
    },
    buttonSize: {
      type: [Number, String],
      default: ""
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 9999
    },
    step: {
      type: [Number, String],
      default: 1
    },
    decimalPlaces: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup: function setup(e, _ref55) {
    var t = _ref55.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref56;

      return _ref56 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref56, yl, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref56, "".concat(yl, "--disabled"), e.disabled), _ref56;
    }),
        l = function l(n, _l3) {
      var o = Number(n).toFixed(Number(e.decimalPlaces));
      t("change", o, _l3), t("update:modelValue", o, _l3);
    },
        o = function o() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(e.modelValue);
      return t < Number(e.max) && !e.disabled;
    },
        a = function a() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(e.modelValue);
      return t > Number(e.min) && !e.disabled;
    },
        i = function i(n) {
      if (e.disabled) return;
      if (e.readonly) return;
      var o = +n.target.value;
      o < Number(e.min) ? o = Number(e.min) : o > Number(e.max) && (o = Number(e.max)), l(o, n), t("blur", n);
    };

    return {
      classes: n,
      change: function change(e) {
        var n = e.target;
        t("update:modelValue", n.value, e);
      },
      blur: i,
      focus: function focus(n) {
        e.disabled || (e.readonly ? i(n) : t("focus", n));
      },
      add: function add(n) {
        if (t("add", n), o()) {
          var _t8 = Number(e.modelValue) + Number(e.step);

          l(_t8, n);
        } else t("overlimit", n);
      },
      addAllow: o,
      reduce: function reduce(n) {
        if (t("reduce", n), a()) {
          var _t9 = Number(e.modelValue) - Number(e.step);

          l(_t9, n);
        } else t("overlimit", n);
      },
      reduceAllow: a,
      pxCheck: ue
    };
  }
});
var bl = {
  key: 0,
  class: "nut-inputnumber__text--readonly"
};

function kl(e, t, n) {
  var l = e.indexOf(t);
  return -1 === l ? e : "-" === t && 0 !== l ? e.slice(0, l) : e.slice(0, l + 1) + e.slice(l).replace(n, "");
}

function xl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  e = t ? kl(e, ".", /\./g) : e.replace(/\./g, "");
  var l = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return (e = n ? kl(e, "-", /-/g) : e.replace(/-/, "")).replace(l, "");
}

vl.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes,
    style: {
      height: e.pxCheck(e.buttonSize)
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    name: "minus",
    class: ["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !e.reduceAllow()
    }],
    size: e.buttonSize,
    onClick: e.reduce
  }, null, 8, ["class", "size", "onClick"]), e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", bl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("input", {
    key: 1,
    type: "number",
    min: e.min,
    max: e.max,
    style: {
      width: e.pxCheck(e.inputWidth)
    },
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.change && e.change.apply(e, arguments);
    }),
    onBlur: t[2] || (t[2] = function () {
      return e.blur && e.blur.apply(e, arguments);
    }),
    onFocus: t[3] || (t[3] = function () {
      return e.focus && e.focus.apply(e, arguments);
    })
  }, null, 44, ["min", "max", "disabled", "readonly", "value"])), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    name: "plus",
    class: ["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !e.addAllow()
    }],
    size: e.buttonSize,
    onClick: e.add
  }, null, 8, ["class", "size", "onClick"])], 6);
};

var _Q42 = Q("input"),
    wl = _Q42.componentName,
    Sl = _Q42.create;

var Cl = Sl({
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入信息"
    },
    label: {
      type: String,
      default: ""
    },
    requireShow: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    textAlign: {
      type: String,
      default: "left"
    },
    maxLength: {
      type: [String, Number],
      default: "99999999"
    },
    clearable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["change", "update:modelValue", "blur", "focus", "clear"],
  setup: function setup(e, _ref57) {
    var t = _ref57.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(!1),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref58;

      return _ref58 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref58, wl, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref58, "".concat(wl, "-disabled"), e.disabled), _ref58;
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        textAlign: e.textAlign
      };
    });

    return {
      active: n,
      classes: l,
      styles: o,
      valueChange: function valueChange(n) {
        var l = n.target.value;
        e.maxLength && l.length > Number(e.maxLength) && (l = l.slice(0, Number(e.maxLength))), "digit" === e.type && (l = xl(l, !0)), "number" === e.type && (l = xl(l, !1)), t("change", l, n), t("update:modelValue", l, n);
      },
      valueFocus: function valueFocus(e) {
        var l = e.target.value;
        n.value = !0, t("focus", l, e);
      },
      valueBlur: function valueBlur(e) {
        setTimeout(function () {
          n.value = !1;
        }, 0);
        var l = e.target.value;
        t("blur", l, e);
      },
      handleClear: function handleClear(e) {
        t("change", "", e), t("update:modelValue", "", e);
      }
    };
  }
});
var zl = {
  class: "nut-input-label"
},
    Tl = {
  key: 0,
  class: "nut-input-require"
},
    Dl = {
  key: 1,
  class: "label-string"
},
    Nl = {
  key: 0
};

Cl.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", zl, [e.requireShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Tl, "*")) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), e.label ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Dl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.label), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)]), e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Nl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("input", {
    key: 1,
    class: "input-text",
    style: e.styles,
    type: e.type,
    maxlength: e.maxLength,
    placeholder: e.placeholder,
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.valueChange && e.valueChange.apply(e, arguments);
    }),
    onFocus: t[2] || (t[2] = function () {
      return e.valueFocus && e.valueFocus.apply(e, arguments);
    }),
    onBlur: t[3] || (t[3] = function () {
      return e.valueBlur && e.valueBlur.apply(e, arguments);
    })
  }, null, 44, ["type", "maxlength", "placeholder", "disabled", "readonly", "value"])), e.clearable && !e.readonly ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])((Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    key: 2,
    onClick: t[4] || (t[4] = function () {
      return e.handleClear && e.handleClear.apply(e, arguments);
    }),
    class: "nut-textinput-clear"
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    name: "close-little",
    size: "12px"
  })], 512)), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.active && e.modelValue.length > 0]]) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 2);
};

var _Q43 = Q("radiogroup"),
    _l = _Q43.componentName,
    Il = _Q43.create;

var jl = Il({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref59) {
    var t = _ref59.emit,
        n = _ref59.slots;
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "B"])("parent", {
      label: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* readonly */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return e.modelValue;
      })),
      position: e.textPosition,
      updateValue: function updateValue(e) {
        return t("update:modelValue", e);
      }
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.modelValue;
    }, function (e) {
      return t("change", e);
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat(_l)
      }, null == (e = n.default) ? void 0 : e.call(n));
    };
  }
});

var _Q44 = Q("radio"),
    $l = _Q44.componentName,
    Al = _Q44.create;

var Ol = Al({
  children: [jl],
  components: {
    "nut-radiogroup": jl
  },
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "check-checked"
    },
    iconSize: {
      type: [String, Number],
      default: 18
    }
  },
  setup: function setup(e, _ref60) {
    var t = _ref60.emit,
        n = _ref60.slots;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "q"])("parent");

    var o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return l.label.value === e.label;
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return e.disabled ? "#f5f5f5" : o.value ? "#fa2c19" : "#d6d6d6";
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return l.position;
    }),
        s = function s() {
      var t = e.iconName,
          n = e.iconSize,
          l = e.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])(ve, {
        name: o.value ? l : t,
        size: n,
        color: a.value
      });
    },
        c = function c() {
      o.value || e.disabled || l.updateValue(e.label);
    };

    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat($l, " ").concat("left" === i.value ? "".concat($l, "--reverse") : ""),
        onClick: c
      }, [s(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "p"])("view", {
        class: "".concat($l, "__label ").concat(e.disabled ? "".concat($l, "__label--disabled") : "")
      }, null == (t = n.default) ? void 0 : t.call(n))]);
      var t;
    };
  }
});

var _Q45 = Q("rate"),
    Bl = _Q45.componentName,
    El = _Q45.create;

var ql = El({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    iconSize: {
      type: [String, Number],
      default: 18
    },
    activeColor: {
      type: String,
      default: ""
    },
    voidColor: {
      type: String,
      default: ""
    },
    uncheckedIcon: {
      type: String,
      default: "star-n"
    },
    checkedIcon: {
      type: String,
      default: "star-fill-n"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    allowHalf: {
      type: Boolean,
      default: !1
    },
    spacing: {
      type: [String, Number],
      default: 14
    }
  },
  emits: ["update:modelValue", "change"],
  setup: function setup(e, _ref61) {
    var t = _ref61.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
        return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Bl, !0);
      }),
      onClick: function onClick(n, l) {
        if (e.disabled || e.readonly) return;
        var o = 0;
        1 === l && e.modelValue === l || (o = l, e.allowHalf && 2 == n && (o -= .5)), t("update:modelValue", o), t("change", o);
      },
      pxCheck: ue
    };
  }
});

ql.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.count, function (t) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      class: "nut-rate-item",
      key: t,
      style: {
        marginRight: e.pxCheck(e.spacing)
      }
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
      size: e.iconSize,
      class: ["nut-rate-item__icon", {
        "nut-rate-item__icon--disabled": e.disabled || t > e.modelValue
      }],
      onClick: function onClick(n) {
        return e.onClick(1, t);
      },
      color: t <= e.modelValue ? e.activeColor : e.voidColor,
      name: t <= e.modelValue ? e.checkedIcon : e.uncheckedIcon
    }, null, 8, ["size", "onClick", "class", "color", "name"]), e.allowHalf && e.modelValue + 1 > t ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
      key: 0,
      class: "nut-rate-item__icon nut-rate-item__icon--half",
      onClick: function onClick(n) {
        return e.onClick(2, t);
      },
      color: t <= e.modelValue ? e.activeColor : e.voidColor,
      size: e.iconSize,
      name: e.checkedIcon
    }, null, 8, ["onClick", "color", "size", "name"])) : e.allowHalf && e.modelValue + 1 < t ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
      key: 1,
      class: "\n          nut-rate-item__icon\n          nut-rate-item__icon--disabled\n          nut-rate-item__icon--half\n        ",
      onClick: function onClick(n) {
        return e.onClick(2, t);
      },
      color: e.voidColor,
      size: e.iconSize,
      name: e.uncheckedIcon
    }, null, 8, ["onClick", "color", "size", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 4);
  }), 128))], 2);
};

var Ll = {
  listData: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  visibleItemCount: {
    type: [Number, String],
    default: 7
  },
  defaultIndex: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number, String],
    default: 35
  }
},
    _Q46 = Q("picker"),
    Vl = _Q46.create;

var Pl = Vl({
  props: s({
    mode: {
      type: String,
      default: "selector"
    }
  }, Ll),
  emits: ["confirm"],
  setup: function setup(e, _ref63) {
    var t = _ref63.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])([]),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])([]);

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onUpdated */ "z"])(function () {
      console.log("updated", e.listData);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(e.listData, function (t) {
      try {
        t.length && (n.value = [], l.value = [], "selector" === e.mode ? l.value = e.listData : "multiSelector" === e.mode && t.forEach(function (e) {
          n.value.push(e.defaultIndex), l.value.push(e.values);
        }));
      } catch (o) {
        console.log("listData参数格式错误", o);
      }
    }, {
      immediate: !0,
      deep: !0
    });
    return {
      confirm: confirm,
      onChange: function onChange(n) {
        var o;
        var a;
        "selector" === e.mode ? a = e.listData[n.detail.value] : "multiSelector" === e.mode && (a = null == (o = l.value) ? void 0 : o.map(function (e, t) {
          return e[n.detail.value[t]];
        }).filter(function (e) {
          return e;
        })), t("confirm", n.detail.value, a);
      },
      value: n,
      range: l,
      onColumnChange: function onColumnChange(e) {
        console.log("修改的列为", e.detail.column, "，值为", e.detail.value);
      }
    };
  }
});

Pl.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("picker");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    mode: e.mode,
    range: e.range,
    onChange: e.onChange,
    onColumnchange: e.onColumnChange,
    value: e.value
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default")];
    }),
    _: 3
  }, 8, ["mode", "range", "onChange", "onColumnchange", "value"]);
};

var _Q47 = Q("shortpassword"),
    Ml = _Q47.create;

var Rl = Ml({
  props: {
    title: {
      type: String,
      default: "请输入密码"
    },
    desc: {
      type: String,
      default: "您使用了虚拟资产，请进行验证"
    },
    tips: {
      type: String,
      default: "忘记密码"
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    noButton: {
      type: Boolean,
      default: !0
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    length: {
      type: [String, Number],
      default: 6
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "change", "ok", "tips", "close", "cancel"],
  setup: function setup(e, _ref64) {
    var t = _ref64.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.modelValue),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return i(Number(e.length));
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);

    function i(e) {
      return Math.min(Math.max(4, e), 6);
    }

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      a.value = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "x"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {});
    }), {
      comLen: o,
      sureClick: function sureClick() {
        t("ok", n.value);
      },
      realInput: n,
      realpwd: l,
      range: i,
      changeValue: function changeValue(e) {
        var l = e.target.value;
        l.length > o.value && (l = l.slice(0, o.value), n.value = l), n.value.length === o.value && t("complete", l), t("change", l), t("update:modelValue", l);
      },
      close: function close() {
        t("update:visible", !1), t("cancel");
      },
      onTips: function onTips() {
        t("tips");
      },
      focus: function focus() {
        var e = document.getElementsByClassName("nut-input-real-taro")[0],
            t = e.children[0];
        e.focus(), t && t.focus();
      },
      show: a,
      closeIcon: function closeIcon() {
        t("update:visible", !1), t("close");
      }
    };
  }
});
var Hl = {
  class: "nut-shortpsd-title"
},
    Yl = {
  class: "nut-shortpsdWx-subtitle"
},
    Fl = {
  class: "nut-input-w"
},
    Wl = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
  class: "nut-input-site"
}, null, -1),
    Xl = {
  key: 0,
  class: "nut-shortpsd-icon"
},
    Ul = {
  class: "nut-shortpsd-message"
},
    Gl = {
  class: "nut-shortpsd-error"
},
    Ql = {
  key: 0,
  class: "nut-shortpsd-footer"
};

Rl.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
    style: {
      padding: "32px 24px 28px 24px",
      borderRadius: "12px",
      textAlign: "center"
    },
    visible: e.show,
    "onUpdate:visible": t[7] || (t[7] = function (t) {
      return e.show = t;
    }),
    closeable: !0,
    onClickCloseIcon: e.closeIcon,
    "close-on-click-overlay": e.closeOnClickOverlay,
    onClickOverlay: e.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Hl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Yl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("input", {
        class: "nut-input-real-taro",
        type: "number",
        maxlength: e.length,
        "onUpdate:modelValue": t[1] || (t[1] = function (t) {
          return e.realInput = t;
        }),
        onInput: t[2] || (t[2] = function () {
          return e.changeValue && e.changeValue.apply(e, arguments);
        })
      }, null, 40, ["maxlength"]), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vModelText */ "c"], e.realInput]]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Fl, [Wl, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: "nut-shortpsd-fake",
        onClick: t[3] || (t[3] = function () {
          return e.focus && e.focus.apply(e, arguments);
        })
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(new Array(e.comLen), function (t, n) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
          class: "nut-shortpsd-li",
          key: n
        }, [e.realInput.length > n ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Xl)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)]);
      }), 128))])]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Ul, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", Gl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.errorMsg), 1), e.tips ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
        key: 0,
        class: "nut-shortpsd-forget",
        onClick: t[4] || (t[4] = function () {
          return e.onTips && e.onTips.apply(e, arguments);
        })
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
        class: "icon",
        size: "11px",
        name: "tips"
      }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.tips), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)]), e.noButton ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", Ql, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: "nut-shortpsd-cancle",
        onClick: t[5] || (t[5] = function () {
          return e.close && e.close.apply(e, arguments);
        })
      }, "取消"), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", {
        class: "nut-shortpsd-sure",
        onClick: t[6] || (t[6] = function () {
          return e.sureClick && e.sureClick.apply(e, arguments);
        })
      }, "确认")]))];
    }),
    _: 1
  }, 8, ["visible", "onClickCloseIcon", "close-on-click-overlay", "onClickOverlay"])]);
};

var _Q48 = Q("textarea"),
    Jl = _Q48.componentName,
    Kl = _Q48.create;

var Zl = Kl({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    },
    limitShow: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    rows: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    autosize: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup: function setup(e, _ref65) {
    var t = _ref65.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      var _ref66;

      return _ref66 = {}, Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref66, Jl, !0), Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref66, "".concat(Jl, "--disabled"), e.disabled), _ref66;
    }),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return {
        textAlign: e.textAlign,
        resize: e.autosize ? "vertical" : "none"
      };
    }),
        o = function o(n, l) {
      e.maxLength && n.length > Number(e.maxLength) && (n = n.substring(0, Number(e.maxLength))), t("change", n, l), t("update:modelValue", n, l);
    };

    return {
      classes: n,
      styles: l,
      change: function change(e) {
        var t = e.target;
        o(t.value, e);
      },
      focus: function focus(n) {
        e.disabled || e.readonly || t("focus", n);
      },
      blur: function blur(n) {
        if (e.disabled) return;
        if (e.readonly) return;
        var l = n.target.value;
        o(l, n), t("blur", n);
      }
    };
  }
});
var eo = {
  key: 0,
  class: "nut-textarea__textarea"
},
    to = {
  key: 2,
  class: "nut-textarea__limit"
};

Zl.render = function (e, t, n, l, o, a) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", eo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("textarea", {
    key: 1,
    class: "nut-textarea__textarea",
    style: e.styles,
    rows: e.rows,
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.change && e.change.apply(e, arguments);
    }),
    onBlur: t[2] || (t[2] = function () {
      return e.blur && e.blur.apply(e, arguments);
    }),
    onFocus: t[3] || (t[3] = function () {
      return e.focus && e.focus.apply(e, arguments);
    }),
    maxlength: e.maxLength,
    placeholder: e.placeholder
  }, null, 44, ["rows", "disabled", "readonly", "value", "maxlength", "placeholder"])), e.limitShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", to, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue.length) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.maxLength), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 2);
};

var no = function no() {
  Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, no);

  this.url = "", this.method = "post", this.xhrState = 200, this.timeout = 3e4, this.headers = {}, this.withCredentials = !1;
};

var lo = /*#__PURE__*/function () {
  function lo(e) {
    Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, lo);

    this.options = e;
  }

  Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lo, [{
    key: "upload",
    value: function upload() {
      var e;
      var t = this.options,
          n = new XMLHttpRequest();

      if (n.timeout = t.timeout, n.upload) {
        n.upload.addEventListener("progress", function (e) {
          var n;
          null == (n = t.onProgress) || n.call(t, e, t);
        }, !1), n.onreadystatechange = function () {
          var e, l;
          4 === n.readyState && (n.status === t.xhrState ? null == (e = t.onSuccess) || e.call(t, n.responseText, t) : null == (l = t.onFailure) || l.call(t, n.responseText, t));
        }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);

        for (var _i = 0, _Object$entries = Object.entries(t.headers); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Object$entries[_i], 2),
              _e5 = _Object$entries$_i[0],
              _l4 = _Object$entries$_i[1];

          n.setRequestHeader(_e5, _l4);
        }

        null == (e = t.onStart) || e.call(t, t), n.send(t.formData);
      } else console.warn("浏览器不支持 XMLHttpRequest");
    }
  }, {
    key: "uploadTaro",
    value: function uploadTaro(e, t) {
      var n;
      var l = this.options,
          o = t.uploadFile({
        url: l.url,
        filePath: e,
        header: s({
          "Content-Type": "multipart/form-data"
        }, l.headers),
        formData: l.formData,
        name: "files",
        success: function success(e) {
          var t, n;
          e.errMsg ? null == (t = l.onFailure) || t.call(l, e, l) : l.xhrState === e.statusCode && (null == (n = l.onSuccess) || n.call(l, e, l));
        },
        fail: function fail(e) {
          var t;
          null == (t = l.onFailure) || t.call(l, e, l);
        }
      });
      null == (n = l.onStart) || n.call(l, l), o.progress(function (e) {
        var t;
        null == (t = l.onProgress) || t.call(l, e, l);
      });
    }
  }]);

  return lo;
}();

var _Q49 = Q("uploader"),
    oo = _Q49.componentName,
    ao = _Q49.create;

var io = function io() {
  Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, io);

  this.status = "ready", this.uid = new Date().getTime().toString(), this.formData = {};
};

var so = ao({
  props: {
    name: {
      type: String,
      default: "file"
    },
    url: {
      type: String,
      default: ""
    },
    sizeType: {
      type: Array,
      default: function _default() {
        return ["original", "compressed"];
      }
    },
    sourceType: {
      type: Array,
      default: function _default() {
        return ["album", "camera"];
      }
    },
    timeout: {
      type: [Number, String],
      default: 3e4
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isPreview: {
      type: Boolean,
      default: !0
    },
    isDeletable: {
      type: Boolean,
      default: !0
    },
    method: {
      type: String,
      default: "post"
    },
    capture: {
      type: Boolean,
      default: !1
    },
    maximize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    maximum: {
      type: [Number, String],
      default: 9
    },
    clearInput: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: "*"
    },
    headers: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: {}
    },
    uploadIcon: {
      type: String,
      default: "photograph"
    },
    xhrState: {
      type: [Number, String],
      default: 200
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    beforeDelete: {
      type: Function,
      default: function _default(e, t) {
        return !0;
      }
    },
    onChange: {
      type: Function
    }
  },
  emits: ["start", "progress", "oversize", "success", "failure", "change", "delete", "update:fileList"],
  setup: function setup(e, _ref67) {
    var t = _ref67.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(e.fileList),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, oo, !0);
    }),
        o = function o(l) {
      l.forEach(function (l) {
        var o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(new io());
        o.path = l.path, o.status = "uploading", o.type = l.type, e.isPreview && (o.url = l.path), n.push(o), function (l) {
          var o = new no();
          o.url = e.url;

          for (var _i2 = 0, _Object$entries2 = Object.entries(e.data); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_Object$entries2[_i2], 2),
                _t10 = _Object$entries2$_i[0],
                _n5 = _Object$entries2$_i[1];

            l.formData[_t10] = _n5;
          }

          o.formData = l.formData, o.method = e.method, o.headers = e.headers, o.onStart = function (e) {
            l.status = "ready", t("start", e);
          }, o.onProgress = function (e, n) {
            l.status = "uploading", t("progress", {
              e: e,
              option: n
            });
          }, o.onSuccess = function (e, o) {
            l.status = "success", t("success", {
              data: e,
              option: o
            }), t("update:fileList", n);
          }, o.onFailure = function (e, n) {
            l.status = "error", t("failure", {
              data: e,
              option: n
            });
          }, new lo(o).uploadTaro(l.path, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);
        }(o);
      });
    },
        a = function a(l) {
      var a = l.tempFilePaths,
          i = l.tempFiles,
          s = function (n) {
        var l = 1 * e.maximum,
            o = 1 * e.maximize,
            a = new Array();
        return n = n.filter(function (e) {
          return !(e.size > o && (a.push(e), 1));
        }), a.length && t("oversize", a), n.length > l && n.splice(l - 1, n.length - l), n;
      }(i);

      o(s), t("change", {
        fileList: n
      });
    };

    return {
      onDelete: function onDelete(l, o) {
        e.beforeDelete(l, n) ? (n.splice(o, 1), t("delete", {
          file: l,
          fileList: n
        })) : console.log("用户阻止了删除！");
      },
      fileList: n,
      classes: l,
      chooseImage: function chooseImage() {
        e.disabled || _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.chooseImage({
          count: 1 * e.maximize - e.fileList.length,
          sizeType: e.sizeType,
          sourceType: e.sourceType,
          success: a
        });
      }
    };
  }
});
var co = {
  key: 0,
  class: "nut-uploader__slot"
},
    ro = {
  class: "nut-uploader__preview-img"
},
    uo = {
  key: 2,
  class: "tips"
},
    po = {
  key: 0,
  class: "nut-uploader__upload"
};

so.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-button"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
    class: e.classes
  }, [e.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", co, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "D"])(e.$slots, "default"), e.maximum - e.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
    key: 0,
    class: "nut-uploader__input",
    onClick: e.chooseImage
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 1
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.fileList, function (t, n) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", {
      class: "nut-uploader__preview",
      key: t.uid
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", ro, [e.isDeletable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
      key: 0,
      color: "rgba(0,0,0,0.6)",
      onClick: function onClick(l) {
        return e.onDelete(t, n);
      },
      class: "close",
      name: "circle-close"
    }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), t.url ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("image", {
      key: 1,
      class: "nut-uploader__preview-img__c",
      src: t.url
    }, null, 8, ["src"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), "success" != t.status ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", uo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.status), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)])]);
  }), 128)), e.maximum - e.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("view", po, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
    color: "#808080",
    name: e.uploadIcon
  }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
    class: "nut-uploader__input",
    onClick: e.chooseImage
  }, null, 8, ["onClick"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)], 64))], 2);
};

var ho = {
  exports: {}
},
    go = Object.getOwnPropertySymbols,
    mo = Object.prototype.hasOwnProperty,
    yo = Object.prototype.propertyIsEnumerable;

function fo(e) {
  if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}

var vo = function () {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

    for (var t = {}, n = 0; n < 10; n++) {
      t["_" + String.fromCharCode(n)] = n;
    }

    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
      return t[e];
    }).join("")) return !1;
    var l = {};
    return "abcdefghijklmnopqrst".split("").forEach(function (e) {
      l[e] = e;
    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, l)).join("");
  } catch (o) {
    return !1;
  }
}() ? Object.assign : function (e, t) {
  for (var n, l, o = fo(e), a = 1; a < arguments.length; a++) {
    for (var i in n = Object(arguments[a])) {
      mo.call(n, i) && (o[i] = n[i]);
    }

    if (go) {
      l = go(n);

      for (var s = 0; s < l.length; s++) {
        yo.call(n, l[s]) && (o[l[s]] = n[l[s]]);
      }
    }
  }

  return o;
},
    bo = 0,
    ko = 1,
    xo = 2,
    wo = 5,
    So = 3,
    Co = 4,
    zo = {
  style: ko,
  segment: !1,
  heteronym: !1
},
    To = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(","),
    Do = {
  "ā": "a1",
  "á": "a2",
  "ǎ": "a3",
  "à": "a4",
  "ē": "e1",
  "é": "e2",
  "ě": "e3",
  "è": "e4",
  "ō": "o1",
  "ó": "o2",
  "ǒ": "o3",
  "ò": "o4",
  "ī": "i1",
  "í": "i2",
  "ǐ": "i3",
  "ì": "i4",
  "ū": "u1",
  "ú": "u2",
  "ǔ": "u3",
  "ù": "u4",
  "ü": "v0",
  "ǘ": "v2",
  "ǚ": "v3",
  "ǜ": "v4",
  "ń": "n2",
  "ň": "n3",
  "": "m2"
},
    No = new RegExp("([" + Object.keys(Do).join("") + "])", "g"),
    _o = /([aeoiuvnm])([0-4])$/;

var Io = /*#__PURE__*/function () {
  function Io(e) {
    Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Io);

    this._dict = e;
  }

  Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Io, [{
    key: "convert",
    value: function convert(e, t) {
      if ("string" != typeof e) return [];
      t = vo({}, zo, t);
      var n = [],
          l = "";

      for (var _o5, _a2, _i3 = 0, _s = e.length; _i3 < _s; _i3++) {
        _a2 = e[_i3], _o5 = _a2.charCodeAt(0), this._dict[_o5] ? (l.length > 0 && (n.push([l]), l = ""), n.push(this.single_pinyin(_a2, t))) : l += _a2;
      }

      return l.length > 0 && (n.push([l]), l = ""), n;
    }
  }, {
    key: "single_pinyin",
    value: function single_pinyin(e, t) {
      if ("string" != typeof e) return [];
      if (1 !== e.length) return this.single_pinyin(e.charAt(0), t);
      var n = e.charCodeAt(0);
      if (!this._dict[n]) return [e];

      var l = this._dict[n].split(",");

      if (!t.heteronym) return [Io.toFixed(l[0], t.style)];
      var o = {},
          a = [];

      for (var _i4, _s2 = 0, _c = l.length; _s2 < _c; _s2++) {
        _i4 = Io.toFixed(l[_s2], t.style), o.hasOwnProperty(_i4) || (o[_i4] = _i4, a.push(_i4));
      }

      return a;
    }
  }, {
    key: "compare",
    value: function compare(e, t) {
      var n = this.convert(e, zo),
          l = this.convert(t, zo);
      return String(n).localeCompare(String(l));
    }
  }], [{
    key: "toFixed",
    value: function toFixed(e, t) {
      var n,
          l,
          o = "";

      switch (t) {
        case So:
          return function (e) {
            for (var _t11 = 0, _n6 = To.length; _t11 < _n6; _t11++) {
              if (0 === e.indexOf(To[_t11])) return To[_t11];
            }

            return "";
          }(e);

        case Co:
          return n = e.charAt(0), Do.hasOwnProperty(n) && (n = Do[n].charAt(0)), n;

        case bo:
          return e.replace(No, function (e, t) {
            return Do[t].replace(_o, "$1");
          });

        case wo:
          return e.replace(No, function (e, t) {
            return Do[t];
          });

        case xo:
          return l = e.replace(No, function (e, t) {
            return o = Do[t].replace(_o, "$2"), Do[t].replace(_o, "$1");
          }), l + o;

        case ko:
        default:
          return e;
      }
    }
  }, {
    key: "STYLE_NORMAL",
    get: function get() {
      return bo;
    }
  }, {
    key: "STYLE_TONE",
    get: function get() {
      return ko;
    }
  }, {
    key: "STYLE_TONE2",
    get: function get() {
      return xo;
    }
  }, {
    key: "STYLE_TO3NE",
    get: function get() {
      return wo;
    }
  }, {
    key: "STYLE_INITIALS",
    get: function get() {
      return So;
    }
  }, {
    key: "STYLE_FIRST_LETTER",
    get: function get() {
      return Co;
    }
  }, {
    key: "DEFAULT_OPTIONS",
    get: function get() {
      return zo;
    }
  }]);

  return Io;
}();

var jo = Io,
    $o = new jo(function (e) {
  var t,
      n = {};

  for (var _l5 in e) {
    t = e[_l5];

    for (var _e6, _o6 = 0, _a3 = t.length; _o6 < _a3; _o6++) {
      _e6 = t.charCodeAt(_o6), n.hasOwnProperty(_e6) ? n[_e6] += "," + _l5 : n[_e6] = _l5;
    }
  }

  return n;
}({
  a: "",
  "ā": "吖锕錒",
  "á": "嗄",
  "ǎ": "",
  "à": "",
  "āi": "哎哀埃娭溾嗳銰锿噯諰鎄",
  "ái": "啀娾捱皑凒隑嵦溰嘊敱敳皚磑癌",
  "ǎi": "毐昹娾欸絠嗳矮蔼躷噯濭藹譪霭靄",
  "ài": "艾伌欬爱砹硋堨焥隘嗌嗳塧嫒愛碍叆暧瑷僾噯壒嬡懓薆鴱懝曖璦賹餲皧瞹馤礙譺鑀鱫靉",
  "ān": "安侒峖桉氨偣庵菴谙啽媕萻葊痷腤裺鹌蓭誝鞍鞌盦諳馣鮟盫鵪韽鶕",
  "án": "玵啽雸儑",
  "ǎn": "垵俺唵埯铵揞晻罯銨",
  "àn": "厈屵屽犴岸咹按洝荌案胺豻堓隌晻暗貋儑錌闇黯",
  "āng": "肮骯",
  "áng": "卬岇昂昻",
  "ǎng": "",
  "àng": "枊盎醠",
  "āo": "泑柪眑梎軪熝爊",
  "áo": "敖厫隞嗷嗸嶅廒慠滶獓蔜遨骜摮獒璈磝墽翱聱螯翶謷謸翺鳌鏕鏖鰲鷔鼇",
  "ǎo": "艹抝芺袄眑郩镺媪媼襖",
  "ào": "岙扷抝坳垇岰柪傲奡軪奧嫯嶅慠澚隩墺嶴懊擙澳鏊驁",
  ba: "罷",
  "bā": "丷八仈巴叭朳玐夿岜扷芭峇柭疤哱哵捌笆粑羓蚆釟豝鲃魞",
  "bá": "叐犮抜妭拔茇炦癹胈菝詙跋軷颰魃鼥",
  "bǎ": "钯鈀靶",
  "bà": "坝弝爸皅垻跁鲃魞鲅鲌罷鮁鮊覇矲霸壩灞欛",
  "bāi": "挀掰擘",
  "bái": "白",
  "bǎi": "百佰栢瓸捭竡粨絔摆擺襬",
  "bài": "呗庍拝败拜唄敗猈稗粺薭贁韛",
  "bān": "扳攽朌肦班般颁斑搬斒頒搫瘢鳻螌褩癍辬",
  "bǎn": "阪坂岅昄板版瓪钣粄舨鈑蝂魬闆",
  "bàn": "办半伴扮坢姅怑绊柈秚湴絆跘鉡靽辦瓣",
  "bāng": "邦垹帮捠梆浜邫幇幚縍幫鞤",
  "bǎng": "绑綁牓膀髈",
  "bàng": "玤挷蚄傍棒棓硥谤塝搒稖蒡蛖蜯镑縍艕謗鎊",
  "bāo": "勹包佨孢苞枹胞剝笣煲龅裦蕔褒襃闁齙",
  "báo": "窇雹",
  "bǎo": "宝怉饱保鸨宲珤堢媬葆寚飹飽褓駂鳵緥鴇賲藵寳寶靌",
  "bào": "勽犳报怉抱豹趵铇菢蚫袌報鉋鲍骲髱虣鮑儤曓嚗曝爆犦忁鑤",
  bei: "呗唄",
  "bēi": "陂卑杯柸盃庳桮悲揹棓椑碑鹎箄諀鞞藣鵯",
  "běi": "鉳",
  "bèi": "贝孛狈貝邶备昁杮牬苝郥钡俻倍悖狽偝偹梖珼鄁備僃惫棑棓焙琲軰辈愂碚禙蓓蛽犕褙誖鞁骳輩鋇憊糒鞴鐾",
  "bēn": "泍贲栟喯犇賁锛漰錛蟦",
  "běn": "夲本苯奙畚翉楍",
  "bèn": "坋坌泍炃倴捹桳渀笨逩撪",
  "bēng": "伻祊奟崩絣閍嗙嵭痭嘣綳繃",
  "béng": "甮甭",
  "běng": "埄埲菶琣琫綳繃鞛",
  "bèng": "泵迸堋逬揼跰塴綳甏镚繃蹦鏰",
  "bī": "皀屄偪毴逼楅榌豍螕鵖鲾鎞鰏",
  "bí": "荸鼻嬶",
  "bǐ": "匕比夶朼佊吡妣沘疕纰彼毞肶柀秕俾娝笔粃紕舭啚崥筆鄙聛貏",
  "bì": "币必毕闬闭佖坒庇芘诐邲咇妼怭怶畁畀肶苾哔柲毖珌畐疪祕胇荜贲陛毙狴畢笓粊袐铋婢敝旇梐紴翍萆萞閇閈閉堛弼弻愊愎湢皕禆筚詖貱賁赑嗶彃滗滭煏痺痹睤睥腷蓖蓽蜌裨跸鉍閟飶幣弊熚獙碧稫箅箆綼蔽鄪馝幤潷獘罼襅駜髲壁嬖廦篦篳縪薜觱避鮅斃濞蹕鞞髀奰璧鄨鎞鏎饆繴襣襞鞸韠魓躃躄驆鶝朇贔鐴鷝鷩鼊",
  "biān": "辺边炞砭笾猵编萹煸牑甂箯糄編臱蝙鞕獱邉鍽鳊邊鞭鯾鯿籓籩",
  "biǎn": "贬疺窆匾貶惼揙碥稨褊糄鴘藊覵鶣",
  "biàn": "卞弁忭抃汳汴苄釆变峅玣変昪覍徧缏遍閞辡緶艑諚辧辨辩辫辮辯變",
  "biāo": "灬杓标飑骉髟彪淲猋脿颩僄墂幖摽滮蔈颮骠標熛膔膘麃瘭磦镖飚飙儦檦篻颷瀌藨謤爂臕贆鏢穮镳飈飆飊飇鑣驫",
  "biáo": "嫑",
  "biǎo": "表婊裱諘褾錶檦",
  "biào": "俵摽鳔",
  "biē": "柭憋蟞癟鳖鱉鼈虌龞",
  "bié": "別柲莂蛂徶襒蟞蹩",
  "biě": "癟",
  "biè": "別彆",
  "bīn": "汃邠玢砏宾彬梹傧斌椕滨缤槟瑸豩賓賔镔儐濒頻濱濵虨豳檳璸瀕霦繽鑌顮",
  "bǐn": "",
  "bìn": "摈殡膑髩儐擯鬂殯臏髌鬓髕鬢",
  "bīng": "冫仌仒氷冰兵幷栟掤梹蛃絣槟鋲檳",
  "bǐng": "丙邴陃怲抦秉苪昞昺柄炳饼眪偋屛寎棅琕禀稟鈵鉼鞆餅餠鞞鞸",
  "bìng": "並併幷枋垪庰倂栤病窉竝偋傡寎摒誁鮩靐",
  bo: "啵蔔噃",
  "bō": "癶拨波癷玻剝哱盋砵趵钵饽紴缽菠袰溊碆鉢僠嶓撥播餑磻礡蹳皪驋鱍",
  "bó": "仢彴肑驳帛狛瓝苩侼柭胉郣亳挬浡瓟秡袯钹铂桲淿脖舶萡袹博殕渤葧鹁愽搏猼鉑鈸馎鲌僰榑煿牔箔膊艊誖馛駁踣鋍镈壆馞駮鮊穛襏謈嚗懪簙鎛餺鵓糪髆髉欂襮礴鑮",
  "bǒ": "癷蚾跛",
  "bò": "孹擗擘檗檘譒蘗",
  "bū": "峬庯逋钸晡鈽誧餔錻鯆鵏",
  "bú": "鳪轐醭",
  "bǔ": "卟补哺捕捬補鸔",
  "bù": "布佈吥步咘怖抪歩歨柨钚勏埔埗悑捗荹部埠婄瓿鈈廍蔀箁踄郶篰餢",
  "cā": "嚓擦攃",
  "cǎ": "礤礸",
  "cà": "遪囃",
  "cāi": "偲猜",
  "cái": "才扐材财財裁纔",
  "cǎi": "毝倸啋埰婇寀彩採棌睬跴綵踩",
  "cài": "埰寀菜蔡縩",
  "cān": "參叄飡骖叅喰湌傪嬠餐爘驂囋",
  "cán": "残蚕惭殘慚摲蝅慙蠺蠶",
  "cǎn": "惨朁慘憯穇篸黪黲",
  "càn": "灿孱傪粲嘇摻儏澯薒燦璨謲鏒",
  "cāng": "仓仺伧沧苍玱鸧倉舱傖凔嵢滄獊蒼瑲濸篬艙螥鶬",
  "cáng": "匨臧欌鑶",
  "càng": "賶",
  "cāo": "撡操糙",
  "cáo": "曺曹傮嘈嶆慒漕蓸槽褿艚螬鏪",
  "cǎo": "屮艸草愺慅懆騲",
  "cào": "肏鄵襙鼜",
  "cè": "夨冊册厕恻拺测荝敇畟側厠笧粣萗廁惻測策萴筞筴蓛箣憡簎",
  "cēn": "參叄叅嵾穇篸",
  "cén": "岑汵埁涔笒",
  "cēng": "噌",
  "céng": "层曽層嶒橧竲驓",
  "cèng": "蹭",
  "cī": "呰呲玼疵趀偨跐縒骴髊蠀齹",
  "cí": "词珁兹垐柌祠茨瓷粢詞辝慈甆辞磁雌鹚糍辤飺餈嬨濨薋鴜礠辭鷀鶿",
  "cǐ": "此佌泚玼皉啙跐鮆",
  "cì": "朿次佽刾庛茦栨莿絘蛓赐螆賜",
  "cōng": "匆囪囱苁忩枞茐怱悤棇焧葱楤漗聡蓯蔥骢暰樅樬潨熜瑽璁聦聪瞛篵聰蟌鍯繱鏓鏦騘驄",
  "cóng": "丛徔従婃孮徖從悰淙琮碂慒漎潀潈誴賨賩樷錝藂叢灇欉爜",
  "cǒng": "",
  "còng": "愡憁謥",
  "cōu": "",
  "cóu": "",
  "cǒu": "",
  "còu": "凑湊傶楱腠辏輳",
  "cū": "怚粗觕麁麄橻麆麤",
  "cú": "徂殂",
  "cǔ": "皻",
  "cù": "促猝脨媨瘄蔟誎趗噈憱踧醋瘯踿簇縬趨鼀蹙蹵蹴顣",
  "cuān": "汆撺鋑镩蹿攛躥鑹",
  "cuán": "濽櫕巑攢灒欑穳",
  "cuàn": "窜殩熶窽篡窾簒竄爨",
  "cuī": "隹崔脺催凗嵟缞墔慛摧榱漼槯磪縗鏙",
  "cuǐ": "漼熣璀趡皠",
  "cuì": "伜忰疩倅粋紣翆脃脆啐啛崒悴淬萃椊毳焠琗瘁粹綷翠膵膬濢竁襊顇臎",
  "cūn": "邨村皴踆澊竴膥",
  "cún": "存侟拵壿澊",
  "cǔn": "刌忖",
  "cùn": "寸吋籿",
  "cuō": "搓瑳遳磋蹉醝鎈",
  "cuó": "虘嵯嵳痤睉矬蒫瘥蔖鹾酂鹺酇",
  "cuǒ": "脞",
  "cuò": "剉剒厝夎挫莡莝庴措逪锉蓌错縒諎銼錯",
  "chā": "扠扱芆臿挿偛嗏插揷馇銟锸艖疀嚓鍤鎈餷",
  "chá": "秅苴垞査茬茶捈梌嵖搽猹靫楂槎詧察摖檫",
  "chǎ": "紁蹅镲鑔",
  "chà": "仛奼汊岔侘衩诧剎姹紁詫",
  "chāi": "芆肞钗釵",
  "chái": "犲侪柴豺祡喍儕",
  "chǎi": "茝",
  "chài": "虿袃訍瘥蠆囆",
  "chān": "辿觇梴搀覘裧摻緂鋓幨襜攙",
  "chán": "苂婵谗單孱棎湹禅馋煘缠僝嶃嶄獑蝉誗鋋儃嬋廛潹潺緾澶磛禪毚螹蟐鄽瀍繟蟬儳劖繵蟾酁嚵壥巉瀺欃纏纒躔镵艬讒鑱饞",
  "chǎn": "产刬旵丳斺浐剗谄啴產産铲阐蒇剷嵼摌滻嘽幝蕆諂閳骣燀簅冁繟醦譂鏟闡囅灛讇",
  "chàn": "忏刬剗硟摲幝幨燀懴儳懺羼韂顫",
  "chāng": "伥昌倀娼淐猖菖阊椙琩裮锠錩閶鲳闛鯧鼚",
  "cháng": "仩仧兏肠苌镸長尝偿常徜瓺萇場甞腸嘗塲嫦瑺膓償嚐鲿鱨",
  "chǎng": "昶惝場敞僘厰塲廠氅鋹",
  "chàng": "怅玚畅鬯唱悵焻瑒暢畼誯韔",
  "chāo": "抄弨怊欩钞訬焯超鈔勦摷綽劋樔窼",
  "cháo": "牊晁巣巢鄛鼌漅樔潮窲罺鼂轈謿",
  "chǎo": "炒眧粆焣煼槱麨巐",
  "chào": "仦仯耖觘",
  "chē": "伡車俥砗唓莗硨蛼",
  "ché": "",
  "chě": "扯偖撦奲",
  "chè": "屮彻呫坼迠烢烲焎聅掣揊硩頙徹摰撤澈勶瞮爡",
  chen: "伧傖",
  "chēn": "肜抻郴捵棽琛嗔綝瘨瞋諃賝謓",
  "chén": "尘臣忱沉辰陈迧茞宸栕莀莐陳敐晨桭梣訦谌軙愖跈鈂煁蔯塵敶樄瘎霃螴諶薼麎曟鷐",
  "chěn": "趻硶碜墋夦磣踸鍖贂醦",
  "chèn": "衬爯疢龀偁趂趁榇稱齓齔儭嚫穪谶櫬襯讖",
  "chēng": "朾阷泟柽爯凈棦浾琤偁淨碀蛏晿牚搶赪僜憆摚稱靗撐撑緽橖橕瞠赬頳檉竀罉鎗矃穪蟶鏿鐣饓鐺",
  "chéng": "氶丞成朾呈承枨诚郕乗城埩娍宬峸洆荿埕挰晟浧珹掁珵窚脭铖堘惩揨棖椉程筬絾裎塍塖溗誠畻酲鋮憕撜澂橙檙鯎瀓懲騬",
  "chěng": "侱徎悜逞骋庱睈裎騁",
  "chèng": "秤牚稱竀穪",
  chi: "麶",
  "chī": "吃妛哧彨胵蚩鸱瓻眵笞粚喫訵嗤媸摛痴絺樆噄殦瞝誺噭螭鴟鵄癡魑齝攡彲黐",
  "chí": "弛池驰迟坻沶狋茌迡持柢竾荎俿歭耛菭蚳赿筂貾遅跢遟馳箈箎墀徲漦踟遲篪謘鍉邌鶗鶙",
  "chǐ": "叺伬扡呎肔侈卶齿垑奓拸胣恥耻蚇袳豉欼歯袲裭誃鉹褫齒",
  "chì": "彳叱斥佁杘灻赤饬侙抶勅恜柅炽勑捇眙翄翅敕烾啻湁飭傺痸腟誃鉓雴憏瘈翤遫銐慗慸瘛翨熾懘趩鶒鷘",
  "chōng": "充忡沖茺浺珫翀舂嘃摏徸憃憧衝罿艟蹖",
  "chóng": "虫崈崇痋隀漴褈緟蝩蟲爞",
  "chǒng": "宠埫寵",
  "chòng": "铳揰銃",
  chou: "鮘",
  "chōu": "抽牰婤掫紬搊跾瘳篘醔犨犫",
  "chóu": "怞俦诪帱栦惆梼畤紬绸菗椆畴絒愁皗稠筹裯詶酧酬綢踌儔雔嚋嬦幬懤盩薵檮燽雠疇籌躊醻讐讎雦",
  "chǒu": "丒丑吜杽杻偢瞅醜矁魗",
  "chòu": "臰遚殠",
  chu: "橻",
  "chū": "出岀初榋摢摴樗貙櫖齣",
  "chú": "刍除芻耝厨滁蒢豠锄媰耡蒭蜍趎鉏雏犓廚篨鋤橱幮櫉藸蟵躇雛櫥蹰鶵躕",
  "chǔ": "処杵础椘處储楮禇楚褚濋儲檚璴礎齭齼",
  "chù": "亍処竌怵泏绌豖欪炪竐俶敊埱珿絀菆傗鄐慉搐滀触閦儊嘼諔憷斶歜臅黜觸矗",
  "chuā": "欻",
  "chuǎ": "",
  "chuà": "",
  "chuāi": "搋",
  "chuái": "膗",
  "chuǎi": "",
  "chuài": "啜欼膪踹",
  "chuān": "巛川氚穿猭瑏",
  "chuán": "舡舩剶船圌遄傳椯椽歂暷篅膞輲",
  "chuǎn": "舛荈喘堾歂僢踳",
  "chuàn": "汌串玔钏釧猭賗鶨",
  "chuāng": "刅疮窓創窗牎摐牕瘡窻",
  "chuáng": "床牀喠噇朣橦",
  "chuǎng": "闯傸磢闖",
  "chuàng": "怆刱剏剙創愴",
  "chuī": "吹炊龡",
  "chuí": "垂倕埀桘陲捶菙圌搥棰腄槌硾锤箠錘鎚顀",
  "chuǐ": "",
  "chuì": "惙",
  "chūn": "芚旾杶春萅媋暙椿槆瑃箺蝽橁輴櫄鰆鶞",
  "chún": "纯肫陙唇浱純莼脣湻犉滣蒓鹑漘蓴膞醇醕錞鯙鶉",
  "chǔn": "朐偆萶惷睶賰蠢",
  "chuō": "逴趠踔戳繛",
  "chuò": "辶吷辵拺哾娖娕啜婥婼惙涰淖辍酫綽踀箹輟鋜龊擉磭餟繛歠鏃嚽齪鑡孎",
  da: "繨",
  "dā": "咑哒耷笚嗒搭褡噠墶撘鎝鎉",
  "dá": "达迏迖迚呾妲怛沓垯炟羍荅荙畗剳匒惮畣笪逹溚詚達跶靼憚薘鞑燵蟽鐽韃龖龘",
  "dǎ": "",
  "dà": "亣汏眔",
  "dāi": "呆呔獃懛",
  "dǎi": "歹逮傣",
  "dài": "代诒轪侢垈岱帒甙绐迨带怠柋殆玳贷帯貣軑埭帶紿蚮袋軚逮釱棣詒貸軩瑇跢廗箉叇曃緿蝳駘鮘鴏戴艜黛簤蹛瀻霴襶黱靆",
  "dān": "丹妉単眈砃耼耽郸聃躭酖單媅愖殚瘅匰箪褝鄲頕儋勯擔殫甔癉襌簞聸",
  "dǎn": "伔刐抌玬瓭胆衴疸紞赕亶馾撢撣賧燀黕膽皽黵",
  "dàn": "旦但帎呾沊泹狚诞唌柦疍訑啗啖惔惮淡萏蛋啿弾氮腅蜑觛亶瘅窞蓞誕僤噉馾髧儋嘾彈憚醈憺擔澹禫餤駳鴠癉膻癚嚪繵贉霮饏黮",
  "dāng": "珰裆筜當儅噹澢璫襠簹艡蟷鐺闣",
  "dǎng": "党谠當擋譡黨攩灙欓讜",
  "dàng": "氹凼圵宕砀垱荡档偒菪婸崵愓瓽逿嵣當雼潒碭儅瞊蕩趤壋擋檔璗盪礑簜蘯闣",
  "dāo": "刀刂忉朷氘舠釖鱽裯魛螩",
  "dáo": "捯",
  "dǎo": "导岛陦島捣祷禂搗隝嘄嶋嶌槝導隯壔嶹擣蹈檮禱",
  "dào": "辺到帱悼梼焘盗菿椡盜絩道稲箌翢噵稻艔衜檤衟幬燾翿軇瓙纛",
  de: "旳",
  "dē": "嘚",
  "dé": "恴淂蚮悳惪棏锝徳德鍀",
  "dēi": "嘚",
  "děi": "",
  "dèn": "扥扽",
  "dēng": "灯登豋僜噔嬁燈璒竳簦艠蹬",
  "děng": "等戥",
  "dèng": "邓凳鄧隥墱嶝憕瞪磴镫櫈瀓覴鐙",
  "dī": "氐仾低奃岻彽秪袛啲埞羝隄堤渧趆滴碮樀磾鞮鏑",
  "dí": "扚廸旳狄肑籴苖迪唙敌浟涤荻啇梑笛觌靮滌蓧馰髢嘀嫡翟蔋蔐頔敵篴镝嚁藡豴蹢鏑糴覿鸐",
  "dǐ": "氐厎坘诋邸阺呧坻弤抵拞枑柢牴砥掋菧觝詆軧楴聜骶鯳",
  "dì": "坔旳杕玓怟枤苐俤哋埅帝埊娣逓递偙梊焍珶眱祶第菂谛釱媂揥棣渧睇缔蒂遆僀楴禘腣遞鉪墆墑墬嵽摕疐碲蔕蝃遰慸甋締蝭嶳諦諟踶螮",
  "diǎ": "嗲",
  "diān": "佔敁掂傎厧嵮滇槇槙瘨窴颠蹎巅顚顛癫巓攧巔癲齻",
  "dián": "",
  "diǎn": "典奌点婰敟椣跕碘蒧蕇踮點嚸",
  "diàn": "电阽坫店垫扂玷痁钿婝惦淀奠琔殿痶蜔鈿電墊壂橂橝澱靛磹癜簟驔",
  "diāo": "刁叼汈刟虭凋奝弴彫蛁椆琱貂碉鳭瞗錭雕鮉鲷簓鼦鯛鵰",
  "diǎo": "扚屌鳥",
  "diào": "弔伄吊钓盄窎訋掉釣铞铫絩鈟竨蓧誂銚銱雿魡調瘹窵鋽藋鑃",
  "diē": "爹跌褺",
  "dié": "佚怢泆苵迭咥垤峌恎挕昳柣绖胅瓞眣耊啑戜眰谍喋堞崼幉惵揲畳絰耋臷詄趃跕軼镻叠楪殜牃牒跮嵽碟蜨褋槢艓蝶疂諜蹀鴩螲鲽鞢曡疉鰈疊氎",
  "diě": "",
  "diè": "哋",
  "dīng": "仃叮奵帄玎甼町疔盯耵虰酊釘靪",
  "dǐng": "奵艼顶酊頂鼎嵿鼑濎薡鐤",
  "dìng": "订忊饤矴定訂釘飣啶掟萣铤椗腚碇锭碠聢蝊鋌錠磸顁",
  "diū": "丟丢铥颩銩",
  "dōng": "东冬咚岽東苳昸氡倲鸫埬娻崬崠涷笗菄徚氭蝀鮗鼕鯟鶇鶫",
  "dǒng": "揰董墥嬞懂箽蕫諌",
  "dòng": "动冻侗垌姛峒恫挏栋洞狪胨迵凍戙烔胴動娻崠硐棟湩絧腖働勭燑駧霘",
  "dōu": "吺枓侸唗兜兠蔸橷瞗篼",
  "dóu": "唞",
  "dǒu": "乧阧抖钭陡蚪鈄",
  "dòu": "吋豆郖浢狵荳逗饾鬥梪毭渎脰酘痘閗窦鬦鋀餖斣瀆闘竇鬪鬬鬭",
  "dū": "厾剢阇嘟督醏闍",
  "dú": "独涜渎椟牍犊裻読獨錖凟匵嬻瀆櫝殰牘犢瓄皾騳黩讀豄贕韣髑鑟韇韥黷讟",
  "dǔ": "竺笃堵暏琽赌睹覩賭篤",
  "dù": "芏妒杜妬姤荰秺晵渡靯镀螙斁殬鍍蠧蠹",
  "duān": "耑偳剬媏端褍鍴",
  "duǎn": "短",
  "duàn": "段断塅缎葮椴煅瑖腶碫锻緞毈簖鍛斷躖籪",
  "duī": "垖堆塠痽磓镦鴭鐓鐜",
  "duǐ": "啍頧",
  "duì": "队对兊兌対杸祋怼陮敓敚隊碓綐對憞憝濧濻薱懟瀢瀩譈譵轛",
  "dūn": "吨惇蜳墪墫墩撴獤噸撉橔犜礅蹾蹲驐",
  "dǔn": "盹趸躉",
  "dùn": "伅坉庉忳沌炖盾砘逇钝顿遁鈍楯頓碷遯憞潡燉踲",
  duo: "",
  "duō": "夛多咄哆畓剟掇敠敪毲裰跢嚉",
  "duó": "仛夺沰铎剫敓敚喥痥鈬奪凙踱鐸",
  "duǒ": "朵朶哚垜挆埵崜缍袳椯硾趓躱躲綞亸軃鬌嚲奲",
  "duò": "杕杝刴剁枤沲陊陏饳垜尮挆挅柁柂柮桗舵隋媠惰隓跢跥跺飿馱墮憜駄墯隳鵽",
  "ē": "妸妿娿婀屙痾",
  "é": "讹吪囮迗俄峉哦娥峩峨涐莪珴訛皒睋鈋锇鹅磀誐鋨頟额魤額鵞鵝譌",
  "ě": "枙娿砨惡頋噁騀鵈",
  "è": "厄戹歺岋阨呃扼苊阸呝枙砐轭咢咹垩姶洝砈匎敋蚅饿偔卾堊娾悪硆谔軛鄂阏堮堨崿惡愕湂萼豟軶遌遏鈪廅搕搤搹琧痷腭僫蝁锷鹗蕚遻頞颚餓噩擜覨諤閼餩鍔鳄歞顎礘櫮鰐鶚鰪讍齃鑩齶鱷",
  "ēi": "诶欸誒",
  "éi": "诶欸誒",
  "ěi": "诶欸誒",
  "èi": "诶欸誒",
  "ēn": "奀恩蒽煾",
  "ěn": "峎",
  "èn": "摁",
  "ēng": "鞥",
  "ér": "儿而児杒侕兒陑峏洏耏荋栭胹唲梕袻鸸粫聏輀鲕隭髵鮞鴯轜",
  "ěr": "尒尓尔耳迩洱饵栮毦珥铒衈爾鉺餌駬薾邇趰",
  "èr": "二弍弐佴刵咡贰貮貳誀樲髶",
  "fā": "冹沷発發彂醗醱",
  "fá": "乏伐姂坺垡浌疺罚茷阀栰笩傠筏瞂罰閥墢罸橃藅",
  "fǎ": "佱法峜砝鍅灋",
  "fà": "珐琺髪蕟髮",
  "fān": "帆忛犿拚畨勫噃嬏幡憣旙旛繙翻藩轓颿籓飜鱕",
  "fán": "凢凣凡匥杋柉矾籵钒舤烦舧笲釩棥煩緐墦樊蕃燔璠膰薠襎羳蹯瀿礬蘩鐇鐢蠜鷭",
  "fǎn": "反払仮返橎",
  "fàn": "氾犯奿汎泛饭范贩畈訉軓婏桳梵盕笵販軬飰飯滼嬎範輽瀪",
  "fāng": "匚方邡汸芳枋牥祊钫淓蚄堏趽鈁錺鴋",
  "fáng": "防妨房肪埅鲂魴",
  "fǎng": "仿访彷纺昉昘瓬眆倣旊眪紡舫訪髣鶭",
  "fàng": "放趽",
  "fēi": "飞妃非飛啡婓婔渄绯扉斐暃猆靟裶緋蜚霏鲱餥馡騑騛鯡飝",
  "féi": "肥疿淝腓痱蜰",
  "fěi": "朏胐匪诽奜悱斐棐榧翡蕜誹篚",
  "fèi": "吠犻芾废杮柹沸狒肺胏昲胇费俷剕厞疿砩陫屝笰萉廃費痱镄廢曊橃橨癈鼣濷蟦櫠鐨靅",
  "fēn": "吩帉纷芬昐氛玢砏竕衯紛翂梤棻訜躮酚鈖雰馚朆餴饙",
  "fén": "坆坟妢岎汾朌枌炃羒蚠蚡棼焚蒶隫墳幩濆獖蕡魵鳻橨燌燓豮鼢羵鼖豶轒鐼馩黂",
  "fěn": "粉黺",
  "fèn": "坋弅奋忿秎偾愤粪僨憤獖瞓奮橨膹糞鲼瀵鱝",
  "fēng": "丰仹凨凬夆妦沣沨凮枫炐封疯盽砜風埄峰峯莑偑桻烽琒堼崶渢猦葑锋楓犎蜂熢瘋碸僼篈鄷鋒檒豐鎽鏠酆寷灃蘴霻蠭靊飌麷",
  "féng": "夆浲逢堸溄馮摓漨綘艂縫",
  "fěng": "讽風覂唪諷",
  "fèng": "凤奉俸桻湗焨煈赗鳯鳳鴌縫賵",
  "fó": "仏仸坲梻",
  "fōu": "",
  "fóu": "紑",
  "fǒu": "缶妚炰缹缻殕雬鴀",
  "fū": "伕邞呋妋抙姇枎玞肤怤柎砆胕荂衭娐尃捊荴旉琈紨趺酜麸稃跗鈇筟綒鄜孵粰蓲敷膚鳺麩糐麬麱懯璷",
  "fú": "乀巿弗払伏凫甶刜孚扶芣芙芾咈姇宓岪帗怫枎泭绂绋苻茀俘垘枹柫柭氟洑炥玸畉畐祓罘胕茯郛韨鳬哹垺栿浮畗砩莩蚨袚匐桴涪烰琈符笰紱紼翇艴菔虙袱幅棴絥罦葍福綍艀蜉辐鉘鉜颫鳧榑稪箁箙粰褔豧韍颰幞澓蝠髴鴔諨踾輻鮄癁襆鮲黻襥鵩纀鶝",
  "fǔ": "阝呒抚甫乶府弣拊斧俌俛柎郙俯蚥釡釜捬脯辅椨焤盙腑滏蜅腐輔嘸撫頫鬴簠黼",
  "fù": "讣付妇负附咐坿彿竎阜驸复峊柎洑祔訃負赴蚥袝偩冨婏婦捬紨蚹傅媍富復秿萯蛗覄詂赋椱缚腹鲋榑禣複褔赙緮蕧蝜蝮賦駙嬔縛輹鮒賻鍑鍢鳆覆馥鰒",
  "gā": "旮伽夾嘎嘠",
  "gá": "钆軋尜釓嘎嘠噶錷",
  "gǎ": "尕玍朒嘎嘠",
  "gà": "尬魀",
  "gāi": "侅该郂陔垓姟峐荄晐赅畡祴絯隑該豥賅賌",
  "gǎi": "忋改絠",
  "gài": "丐乢匄匃杚钙摡溉葢鈣戤概槩蓋漑槪瓂",
  "gān": "甘忓迀攼玕肝咁坩泔矸苷柑玵竿疳酐粓凲尲尴筸漧鳱尶尷魐",
  "gǎn": "仠芉皯秆衦赶敢桿稈感澉趕橄擀澸篢簳鳡鱤",
  "gàn": "佄旰汵盰绀倝凎淦紺詌骭幹榦檊簳贑赣贛灨",
  "gāng": "冈冮刚纲肛岡牨疘矼缸剛罡堈崗掆釭棡犅堽摃碙綱罁鋼鎠",
  "gǎng": "岗犺崗",
  "gàng": "焵焹筻槓鋼戅戆戇",
  "gāo": "皋羔羙高皐髙臯睪槔睾槹獋橰篙糕餻櫜韟鷎鼛鷱",
  "gǎo": "夰杲菒稁搞缟槀槁稾稿镐縞藁檺藳鎬",
  "gào": "吿告勂诰郜峼祮祰锆筶禞誥鋯",
  "gē": "戈仡圪扢犵纥戓肐牫咯紇饹哥袼鸽割彁滒戨歌鴚擱謌鴿鎶",
  "gé": "呄佮佫匌挌阁革敋格鬲愅猲臵蛒裓隔颌嗝塥滆觡搿槅膈閣閤獦镉鞈韐骼臈諽輵擱鮥鮯櫊鎑鎘韚轕鞷騔",
  "gě": "個哿笴舸嘅嗰蓋鲄",
  "gè": "亇吤茖虼個硌铬箇鉻",
  "gěi": "給",
  "gēn": "根跟",
  "gén": "哏",
  "gěn": "",
  "gèn": "亙亘艮茛揯搄",
  "gēng": "刯庚畊浭耕菮椩焿絙絚赓鹒緪縆羮賡羹鶊",
  "gěng": "郠哽埂峺挭绠耿莄梗綆鲠骾鯁",
  "gèng": "堩緪縆",
  "gōng": "工弓公厷功攻杛侊糿糼肱宫紅宮恭躬龚匑塨幊愩觥躳慐匔碽篢髸觵龏龔",
  "gǒng": "廾巩汞拱唝拲栱珙嗊輁澒銾鞏",
  "gòng": "贡羾唝貢嗊愩慐熕",
  "gōu": "佝沟芶钩痀袧缑鈎溝鉤緱褠篝簼鞲韝",
  "gǒu": "芶岣狗苟枸玽耉耇笱耈蚼豿",
  "gòu": "呴坸构诟购垢姤冓啂夠够傋訽媾彀搆詬遘雊構煹觏撀糓覯購",
  "gū": "杚呱咕姑孤沽泒苽巭巬柧轱唃唂罛鸪笟菇菰蛄蓇觚軱軲辜酤稒鈲磆箍箛嫴篐橭鮕鴣",
  "gú": "",
  "gǔ": "夃古扢抇汩诂谷股牯罟羖逧钴傦啒淈脵蛊嗗尳愲詁馉毂賈鈷鼔鼓嘏榖皷鹘穀縎糓薣濲皼臌轂餶櫎瀔盬瞽鶻蠱",
  "gù": "固怘故凅顾堌崓崮梏牿棝祻雇榾痼锢僱錮鲴鯝顧",
  "guā": "瓜刮呱胍栝桰铦鸹歄煱颪趏劀緺銛諣踻銽颳鴰騧",
  "guá": "",
  "guǎ": "冎叧呙呱咼剐剮寡",
  "guà": "卦坬诖挂啩掛罣袿絓罫褂詿",
  "guāi": "乖",
  "guái": "叏",
  "guǎi": "拐枴柺罫箉",
  "guài": "夬怪恠",
  "guān": "关纶官矜覌倌矝莞涫棺蒄窤閞綸関瘝癏観闗鳏關鰥觀鱞",
  "guǎn": "莞馆琯痯筦斡管輨璭舘錧館鳤",
  "guàn": "卝毌丱贯泴覌悺惯掼淉貫悹祼慣摜潅遦樌盥罆雚観躀鏆灌爟瓘矔礶鹳罐觀鑵欟鱹鸛",
  "guāng": "光灮炚炛炗咣垙姯挄洸茪桄烡珖胱硄僙輄潢銧黆",
  "guǎng": "広犷廣獷臩",
  "guàng": "俇桄逛臦撗",
  "guī": "归圭妫规邽皈茥闺帰珪胿亀硅窐袿規媯廆椝瑰郌嫢摫閨鲑嬀嶲槣槻槼鳺璝瞡龜鮭巂歸雟鬶騩櫰櫷瓌蘬鬹",
  "guǐ": "宄氿朹轨庋佹匦诡陒垝姽恑攱癸軌鬼庪祪軓匭晷湀蛫觤詭厬簋蟡",
  "guì": "攰刿刽昋炅攱贵桂桧匮眭硊趹椢猤筀貴溎蓕跪匱瞆劊劌嶡撌槶螝樻檜瞶禬簂櫃癐襘鐀鳜鞼鑎鱖鱥",
  "gǔn": "丨衮惃硍绲袞辊滚蓘裷滾緄蔉磙緷輥鲧鮌鯀",
  "gùn": "睔謴",
  guo: "",
  "guō": "呙咼咶埚郭啯堝崞渦猓楇聒鈛锅墎瘑嘓彉濄蝈鍋彍蟈懖矌",
  "guó": "囗囯囶囻国圀敋喐國帼掴腘摑幗慖漍聝蔮膕虢簂馘",
  "guǒ": "果惈淉菓馃椁褁槨粿綶蜾裹輠餜櫎",
  "guò": "過腂鐹",
  "hā": "虾紦铪鉿蝦",
  "há": "",
  "hǎ": "奤",
  "hà": "",
  "hāi": "咍嗨",
  "hái": "郂孩骸還嚡",
  "hǎi": "海胲烸塰酼醢",
  "hài": "亥妎拸骇害氦猲絯嗐餀駭駴饚",
  han: "兯爳",
  "hān": "犴佄顸哻蚶酣頇嫨谽憨馠魽歛鼾",
  "hán": "邗含汵邯函肣凾虷唅圅娢浛笒崡晗梒涵焓琀寒嵅韩椷甝筨馯蜬澏鋡韓",
  "hǎn": "丆罕浫喊豃闞",
  "hàn": "仠厈汉屽忓扞闬攼旰旱肣唅垾悍捍涆猂莟晘焊菡釬閈皔睅傼蛿颔馯撖漢蔊蜭鳱暵熯輚銲鋎憾撼翰螒頷顄駻譀雗瀚鶾",
  "hāng": "",
  "háng": "邟妔苀迒斻杭垳绗桁笐航蚢颃裄貥筕絎頏魧",
  "hàng": "忼沆笐",
  "hāo": "茠蒿嚆薅薧",
  "háo": "乚毜呺竓皋蚝毫椃嗥獆號貉噑獔豪嘷獋諕儫嚎壕濠籇蠔譹",
  "hǎo": "郝",
  "hào": "昊侴昦秏哠恏悎浩耗晧淏傐皓鄗滈滜聕號暠暤暭澔皜皞镐曍皡薃皥藃鎬颢灏顥鰝灝",
  "hē": "诃抲欱訶嗬蠚",
  "hé": "禾纥呙劾咊咼姀河郃峆曷柇狢盇籺紇阂饸敆盉盍荷釛啝涸渮盒菏萂龁喛惒粭訸颌楁毼澕蓋詥貈貉鉌阖鲄朅熆閡閤餄鹖麧噈頜篕翮螛魺礉闔鞨齕覈鶡皬鑉龢",
  "hě": "",
  "hè": "咊抲垎贺哬袔隺寉焃惒猲賀嗃煂碋熇褐赫鹤翯嚇壑癋謞燺爀鶮鶴靍靎鸖靏",
  "hēi": "黒黑嗨潶",
  "hén": "拫痕鞎",
  "hěn": "佷哏很狠詪噷",
  "hèn": "恨噷",
  "hēng": "亨哼悙涥脝",
  "héng": "姮恆恒桁烆珩胻鸻撗橫衡鴴鵆蘅鑅",
  "hèng": "悙啈橫",
  hng: "哼",
  "hōng": "叿吽呍灴轰訇烘軣揈渹焢硡谾薨輷嚝鍧巆轟",
  "hóng": "厷仜弘叿妅屸吰宏汯玒瓨纮闳宖泓玜苰垬娂沗洪竑紅羾荭虹浤浲紘翃耾硔紭谹鸿渱溄竤粠葓葒鈜閎綋翝谼潂鉷鞃魟篊鋐彋霐黉霟鴻黌",
  "hǒng": "唝晎嗊愩慐",
  "hòng": "讧訌閧撔澒銾蕻闂鬨闀",
  "hōu": "齁",
  "hóu": "矦鄇喉帿猴葔瘊睺銗篌糇翭骺翵鍭餱鯸",
  "hǒu": "吼吽犼呴",
  "hòu": "后郈厚垕後洉矦茩逅候堠豞鲎鲘鮜鱟",
  "hū": "乎乯匢虍芴呼垀忽昒曶泘苸恗烀芔轷匫唿惚淴虖軤雽嘑寣滹雐幠戯歑戱膴戲謼",
  "hú": "囫抇弧狐瓳胡壶隺壷斛焀喖壺媩搰湖猢絗葫鹄楜煳瑚瓡嘝蔛鹕鹘槲箶縎蝴衚魱縠螜醐頶觳鍸餬礐鵠瀫鬍鰗鶘鶦鶻鶮",
  "hǔ": "乕汻虎浒俿淲萀琥虝滸錿鯱",
  "hù": "互弖戶戸户冱芐帍护沍沪岵怙戽昈曶枑姱怘祜笏粐婟扈瓠楛嗃嗀綔鄠雽嫭嫮摢滬蔰槴熩鳸濩簄豰鍙嚛鹱觷護鳠頀鱯鸌",
  "huā": "吪芲花砉埖婲華椛硴蒊嘩糀誮錵蘤",
  "huá": "呚姡骅華釪釫铧滑猾嘩搳撶劃磆蕐螖鋘譁鏵驊鷨",
  "huà": "夻杹枠画话崋桦華婳畫嬅畵觟話劃摦樺嫿槬澅諙諣黊繣舙譮",
  "huái": "怀佪徊淮槐褢踝懐褱懷瀤櫰耲蘹",
  "huài": "咶壊壞蘾",
  "huān": "欢犿狟貆歓鴅懁鵍酄嚾孉懽獾歡讙貛驩",
  "huán": "环郇峘洹狟荁垸桓萈萑堚寏絙雈獂綄羦蒝貆锾瞏圜嬛寰澴缳還阛環豲鍰雚镮鹮糫繯鐶闤鬟瓛",
  "huǎn": "睆缓緩",
  "huàn": "幻奂肒奐宦唤换浣涣烉患梙焕逭喚喛嵈愌換渙痪煥瑍綄豢漶瘓槵鲩擐澣藧鯇攌嚾轘鯶鰀",
  "huāng": "巟肓荒衁宺朚塃慌",
  "huáng": "皇偟凰隍黄喤堭媓崲徨惶揘湟葟遑黃楻煌瑝墴潢獚锽熿璜篁艎蝗癀磺穔諻簧蟥鍠餭鳇趪韹鐄騜鰉鱑鷬",
  "huǎng": "汻怳恍炾宺晄奛谎幌詤熀熿縨謊兤櫎爌",
  "huàng": "愰滉榥曂皝鎤皩",
  hui: "",
  "huī": "灰灳诙咴恢拻挥洃虺袆晖烣珲豗婎媈揮翚辉隓暉椲楎煇琿睢禈詼墮幑睳褘噅噕撝翬輝麾徽隳瀈蘳孈鰴",
  "huí": "囘回囬佪廻廽恛洄茴迴烠蚘逥痐缋蛕蛔蜖藱鮰繢",
  "huǐ": "虺悔烠毀毁螝毇檓燬譭",
  "huì": "卉屷屶汇讳泋哕浍绘芔荟诲恚恵桧烩贿彗晦秽喙廆惠湏絵缋翙阓匯彚彙會滙詯賄颒僡嘒瘣蔧誨銊圚寭慧憓暳槥潓潰蕙噦嬒徻橞殨澮濊獩璤薈薉諱頮檅檜燴璯篲藱餯嚖懳瞺穢繢蟪櫘繪翽譓儶鏸闠鐬靧譿顪",
  "hūn": "昏昬荤婚惛涽焄阍棔殙湣葷睧睯蔒閽轋",
  "hún": "忶浑珲馄渾湷琿魂餛鼲",
  "hǔn": "",
  "hùn": "诨俒眃倱圂婫掍焝溷尡慁睴觨諢",
  "huō": "吙秴耠劐攉騞",
  "huó": "佸姡活秮秳趏",
  "huǒ": "灬火伙邩钬鈥漷煷夥",
  "huò": "沎或货咟俰捇眓获閄剨喐掝祸貨惑旤湱禍漷窢蒦锪嚄奯擭濊濩獲篧鍃霍檴謋雘矆礊穫镬嚯彟瀖耯艧藿蠖嚿曤臛癨矐鑊韄靃彠",
  "jī": "丌讥击刉叽饥乩刏圾机玑肌芨矶鸡枅苙咭剞唧姬屐积笄飢基庴喞嵆嵇幾攲敧朞犄筓缉赍嗘畸稘跻鳮僟毄箕綨緁銈嘰撃槣樭畿緝觭諅賫踑躸齑墼撽機激璣禨積錤隮懠擊磯簊羁賷櫅耭雞譏韲鶏譤鐖饑癪躋鞿魕鶺鷄羇虀鑇覉鑙齏羈鸄覊",
  "jí": "乁亽亼及尐伋吉岌彶忣汲级即极皀亟佶诘郆卽叝姞急皍笈級堲揤疾觙偮卙唶楖淁焏谻戢棘極殛湒集塉嫉愱楫蒺蝍趌辑槉耤膌銡嶯潗濈瘠箿蕀蕺諔趞踖鞊鹡檝螏輯磼簎藉襋蹐鍓艥籍轚鏶霵齎躤雧",
  "jǐ": "己丮妀屰犱泲虮挤脊掎済鱾幾戟給嵴麂魢撠憿橶擠濟穖蟣",
  "jì": "彐彑旡计记伎坖妓忌技汥芰际剂季哜垍既洎紀茍茤荠計迹剤畟紒继觊記偈寄寂帺徛悸旣梞済绩塈惎臮葪蔇兾勣痵継蓟裚跡際鬾魝摖暨漃漈禝稩穊誋跽霁魥鲚暩瞉稷諅鲫冀劑曁禨穄薊襀髻嚌懠檕濟穖績繋罽薺覬鮆檵櫅櫭璾蹟鯽鵋齌廭懻癠穧繫蘎骥鯚瀱繼蘮鱀蘻霽鰶鰿鷑鱭驥",
  jia: "",
  "jiā": "加乫伽夾宊抸佳拁泇徍枷毠浃珈哿埉挾浹痂梜笳耞袈傢猳葭跏椵犌腵鉫嘉擖镓糘豭貑鴐鎵麚",
  "jiá": "圿夾忦扴郏拮荚郟唊恝莢戛脥袷铗戞猰蛱裌颉颊蛺鋏頬頰鴶鵊",
  "jiǎ": "甲岬叚玾胛斚钾婽徦斝椵賈鉀榎槚瘕檟",
  "jià": "驾架嫁幏賈榢價稼駕",
  "jiān": "戋奸尖幵坚歼冿戔玪肩艰姧姦兼堅帴惤猏笺菅菺豜傔揃湔牋犍缄葌閒間雃靬搛椷椾煎瑊睷碊缣蒹豣漸監箋蔪樫熞稴緘蕑蕳鋑鲣鳽鹣熸篯縑鋻艱鞬餰馢麉瀐濺鞯鳒鵑殱礛籈鵳攕瀸鰔櫼殲譼鰜鶼礷籛韀鰹囏虃鑯韉",
  "jiǎn": "囝拣枧俭柬茧倹挸捡笕减剪帴揵梘检湕趼堿揀揃検減睑硷裥詃锏弿暕瑐筧简絸谫彅戩戬碱儉翦鋄撿橏篯檢藆襇襉謇蹇瞼礆簡繭謭鎫鬋鰎鹸瀽蠒鐗鐧鹻籛譾襺鹼",
  "jiàn": "件見侟建饯剑洊牮荐贱俴健剣栫涧珔舰剱徤揵袸谏釰釼寋旔朁楗毽腱臶跈践閒間賎鉴键僣僭榗槛漸監劎劍墹澗箭糋諓賤趝踐踺劒劔薦諫鋻鍵餞瞷瞯磵礀螹鍳鞬擶檻濺繝瀳覵覸譛鏩聻艦轞鐱鑒鑑鑬鑳",
  "jiāng": "江姜茳畕豇將葁畺摪翞僵漿螀壃缰薑橿殭螿鳉疅礓繮韁鱂",
  "jiǎng": "讲奖桨傋塂蒋奨奬蔣槳獎耩膙講顜",
  "jiàng": "匞匠夅弜洚绛將弶強絳畺酱勥滰嵹摾漿彊犟糡醤糨醬櫤謽",
  "jiāo": "艽交郊姣娇峧浇茮茭骄胶敎喬椒焦蛟跤僬嘐虠鲛嬌嶕嶣憍憢澆膠蕉燋膲礁穚鮫鵁鹪簥蟭轇鐎驕鷦鷮",
  "jiáo": "矯",
  "jiǎo": "臫佼恔挢狡绞饺捁晈烄笅皎脚釥铰搅湫筊絞勦敫湬煍腳賋僥摎摷暞踋鉸餃儌劋徺撟撹樔徼憿敽敿燞曒璬矯皦蟜繳譑孂纐攪灚鱎龣",
  "jiào": "叫呌峤挍訆悎珓窌笅轿较敎斍覐窖筊覚滘較嘂嘄嘦斠漖酵噍嶠潐噭嬓徼獥癄藠趭轎醮灂覺譥皭釂",
  jie: "價",
  "jiē": "阶疖哜皆袓接掲痎秸菨階喈喼嗟堦媘嫅椄湝結脻街裓楬煯瑎稭鞂擑蝔嚌癤謯鶛",
  "jié": "卩卪孑尐讦扢刧刦劫岊昅杢刼劼杰疌衱诘拮洁狤迼倢桀桔桝洯紒莭訐偈偼啑婕崨捷掶袷袺傑媫嵑結絜蛣颉嵥搩楶滐睫節蜐詰趌跲鉣截榤碣竭蓵鲒嶱潔羯誱踕镼鞊頡幯擳嶻擮礍鍻鮚巀蠞蠘蠽",
  "jiě": "姐毑媎觧飷檞",
  "jiè": "丯介吤妎岕庎戒屆届斺玠畍界疥砎衸诫借悈紒蚧唶徣堺楐琾蛶觧骱犗耤誡褯魪嶰藉鎅鶡",
  "jīn": "巾今仐斤钅竻釒金津矜砛荕衿觔埐珒矝紟惍琎菳堻琻筋釿璡鹶黅襟",
  "jǐn": "侭卺巹紧堇婜菫僅厪谨锦嫤廑慬漌緊蓳馑槿瑾儘錦謹饉",
  "jìn": "伒劤妗近进枃勁浕荩晉晋浸烬笒紟赆唫祲進煡臸僅寖搢溍缙靳墐嫤慬榗瑨盡馸僸凚歏殣觐噤嬐濅縉賮嚍壗嬧濜藎燼璶覲贐齽",
  "jīng": "坕坙巠京泾经茎亰秔荊荆涇粇婛惊旍旌猄経菁晶稉腈葏睛粳經兢箐精綡聙鋞橸鲸鯨鶁鶄麖鼱驚麠",
  "jǐng": "井丼阱刭坓宑汫汬肼剄穽殌儆頚幜憬擏澋璄憼暻璟璥頸蟼警",
  "jìng": "劤妌弪径迳俓勁婙浄胫倞凈弳徑痉竞莖逕婧桱梷殑淨竟竫脛敬痙竧靓傹靖境獍誩踁静靚憼曔镜靜瀞鵛鏡競竸",
  "jiōng": "冂冋坰扃埛扄浻絅銄駉駫蘏蘔",
  "jiǒng": "冏囧泂炅迥侰炯逈浻烱絅煚窘颎綗臦僒煛熲澃褧燛顈臩",
  "jiòng": "",
  "jiū": "丩勼纠朻牞究糺鸠糾赳阄萛啾揂揪剹揫鳩摎稵樛鬏鬮",
  "jiú": "",
  "jiǔ": "九乆久乣氿奺汣杦灸玖糺舏韭紤酒镹韮",
  "jiù": "匛旧臼咎疚柩柾倃捄桕匓厩救就廄廐舅僦廏慦殧舊鹫匶鯦麔欍齨鷲",
  "jū": "凥伡抅車匊居岨泃狙苴驹俥毩疽眗砠罝陱娵婮崌掬梮涺揟椐毱琚腒趄跔跙锔裾雎艍蜛諊踘躹鋦駒據鋸鮈鴡檋鞠鞫鶋",
  "jú": "局泦侷狊挶桔啹婅淗焗菊郹椈湨犑輂僪粷蓻跼閰趜鋦橘駶繘鵙蹫鵴巈蘜鶪鼰鼳驧",
  "jǔ": "咀岨弆举枸矩莒挙椇筥榉榘蒟龃聥舉踽擧櫸齟欅襷",
  "jù": "巨乬巪讵姖岠怇拒洰苣邭具怐怚拠昛歫炬珇秬钜俱倨倶剧烥粔耟蚷袓埧埾惧詎距焣犋跙鉅飓蒩虡豦锯寠愳窭聚駏劇勮屦踞鮔壉懅據澽窶螶遽鋸屨颶瞿貗簴躆醵忂懼鐻",
  "juān": "姢勌娟捐涓朘梋焆瓹脧圏裐鹃勬鋑鋗镌鞙鎸鐫蠲",
  "juǎn": "呟巻帣埍捲菤锩臇錈闂",
  "juàn": "奆劵奍巻帣弮倦勌悁桊狷绢隽婘惓淃瓹眷鄄圏棬椦睊絭罥腃雋睠絹飬慻蔨嶲鋗餋獧縳巂羂讂",
  "juē": "噘撅撧屩屫",
  "jué": "亅孒孓决刔氒诀吷妜弡抉決芵叕泬玨玦挗珏疦砄绝虳埆捔欮蚗袦崫崛掘斍桷覐觖訣赽趹傕厥焳矞絕絶覚趉鈌劂瑴谲駃噊嶡嶥憰撅熦爴獗瘚蕝蕨觮鴂鴃噱壆憠橜橛燋璚爵臄镢櫭繘蟨蟩爑譎蹷蹶髉匷矍覺鐍鐝鳜灍爝觼穱彏戄攫玃鷢矡貜躩钁",
  "juě": "蹶",
  "juè": "誳",
  "jūn": "军君均汮姰袀軍钧莙蚐桾皲鈞碅筠皸皹覠銁銞鲪頵麇龜鍕鮶麏麕",
  "jǔn": "",
  "jùn": "呁俊郡陖埈峻捃浚隽馂骏晙焌珺棞畯竣葰雋儁箘箟蜠賐寯懏餕燇濬駿鵘鵔鵕攈攟",
  "kā": "喀",
  "kǎ": "佧咔咯垰胩裃鉲",
  "kāi": "开奒揩锎開鐦",
  "kǎi": "凯剀垲恺闿豈铠凱剴嘅慨蒈塏嵦愷輆暟锴鍇鎧闓颽",
  "kài": "忾炌欯欬烗勓愒愾濭鎎",
  "kān": "刊栞勘龛堪嵁戡龕",
  "kǎn": "凵冚坎扻侃砍莰偘埳惂欿歁槛輡檻顑竷轗",
  "kàn": "衎崁墈阚瞰磡闞竷鬫矙",
  "kāng": "忼闶砊粇康閌嫝嵻慷漮槺穅糠躿鏮鱇",
  "káng": "",
  "kǎng": "",
  "kàng": "亢伉匟邟囥抗犺闶炕钪鈧閌",
  "kāo": "尻嵪髛",
  "kǎo": "丂攷考拷洘栲烤薧",
  "kào": "洘铐犒銬鲓靠鮳鯌",
  "kē": "匼柯牁牱珂科轲疴砢趷钶蚵铪嵙棵痾萪軻颏嗑搕犐稞窠鈳榼薖鉿颗樖瞌磕蝌頦窼醘顆髁礚",
  "ké": "殻揢殼翗",
  "kě": "岢炣渇嵑敤渴軻閜磆嶱",
  "kè": "克刻剋勀勊客峇恪娔尅悈袔课堁氪骒愘硞缂衉嗑愙歁溘锞碦緙艐課濭錁礊騍",
  "kēi": "剋尅",
  "kēn": "",
  "kěn": "肎肯肻垦恳啃龂豤貇龈墾錹懇",
  "kèn": "珢掯硍裉褃",
  "kēng": "劥阬坈坑妔挳硁殸牼揁硜铿硻摼誙銵鍞鏗",
  "kěng": "硻",
  "kōng": "倥埪崆悾涳椌硿箜躻錓鵼",
  "kǒng": "孔倥恐悾",
  "kòng": "矼控羫鞚",
  "kōu": "抠芤眍眗剾彄摳瞘",
  "kǒu": "口劶竘",
  "kòu": "叩扣佝怐敂冦宼寇釦窛筘滱蔲蔻瞉簆鷇",
  "kū": "扝刳矻郀朏枯胐哭桍秙窋堀圐跍窟骷鮬",
  "kú": "",
  "kǔ": "狜苦楛",
  "kù": "库俈绔庫捁秙焅袴喾硞絝裤瘔酷廤褲嚳",
  "kuā": "咵姱恗晇絓舿誇",
  "kuǎ": "侉垮楇銙",
  "kuà": "胯趶誇跨骻",
  "kuǎi": "蒯擓",
  "kuài": "巜凷圦块快侩郐哙浍狯脍欳塊蒉會筷駃鲙儈墤鄶噲廥澮獪璯膾旝糩鱠",
  "kuān": "宽寛寬臗髋鑧髖",
  "kuǎn": "梡欵款歀窽窾",
  "kuàn": "",
  "kuāng": "匡迋劻诓邼匩哐恇洭硄筐筺誆軭",
  "kuáng": "忹抂狅狂诳軖軠誑鵟",
  "kuǎng": "夼儣懭",
  "kuàng": "卝丱邝圹纩况旷岲況矿昿贶框眖砿眶絋絖貺軦鉱鋛鄺壙黋懬曠爌矌礦穬纊鑛",
  "kuī": "亏刲岿悝盔窥聧窺虧顝闚巋",
  "kuí": "奎晆逵鄈隗馗喹揆葵骙戣暌楏楑魁睽蝰頯櫆藈鍨鍷騤夔蘷巙虁犪躨",
  "kuǐ": "尯煃跬頍磈蹞",
  "kuì": "尯胿匮喟媿愧愦蒉馈匱瞆嘳嬇憒潰篑聭聩蕢殨膭謉瞶餽簣聵籄饋",
  "kūn": "坤昆堃堒婫崑崐晜猑菎裈焜琨髠裩貇锟髡鹍潉蜫褌髨熴瑻醌錕鲲騉鯤鵾鶤",
  "kǔn": "悃捆阃壸梱祵硱稇裍壼稛綑閫閸",
  "kùn": "困涃睏",
  "kuò": "扩拡挄适秮秳铦筈萿葀蛞阔廓漷銛噋銽頢髺擴濶闊鞟韕霩鞹鬠",
  la: "鞡",
  "lā": "垃柆砬菈搚磖邋",
  "lá": "旯剌砬揦磖嚹",
  "lǎ": "喇藞",
  "là": "剌翋揦溂揧楋瘌蜡蝋辢辣蝲臈擸攋爉臘鬎櫴瓎镴鯻蠟鑞",
  "lái": "来來俫倈崃徕涞莱郲婡崍庲徠梾淶猍萊逨棶琜筙铼箂錸騋鯠鶆麳",
  "lǎi": "襰",
  "lài": "疠娕徕唻婡徠赉睐睞赖誺賚濑賴頼癘顂癞鵣攋瀨瀬籁藾櫴癩籟",
  "lán": "兰岚拦栏啉婪惏嵐葻阑暕蓝谰厱澜褴儖斓篮懢燣燷藍襕镧闌璼幱襤譋攔瀾灆籃繿蘫蘭斕欄襴囒灡籣欗讕躝襽鑭韊",
  "lǎn": "览浨揽缆榄漤罱醂壈懒覧擥嬾懶孄覽孏攬灠欖爦顲纜",
  "làn": "坔烂滥燗嚂壏濫爁爛瓓爤爦糷钄",
  "lāng": "啷",
  "láng": "勆郞哴欴狼嫏廊斏桹琅蓈榔瑯硠稂锒筤艆蜋郒樃螂躴鋃鎯駺",
  "lǎng": "崀朗朖烺塱蓢誏朤",
  "làng": "埌浪莨阆筤蒗誏閬",
  "lāo": "捞粩撈",
  "láo": "労劳牢窂哰崂浶勞痨铹僗嘮嶗憦憥朥癆磱簩蟧醪鐒顟髝",
  "lǎo": "耂老佬咾恅狫荖栳珯硓铑蛯銠鮱轑",
  "lào": "涝絡嗠耢酪嫪嘮憦樂澇躼橯耮軂",
  le: "饹",
  "lē": "嘞",
  "lè": "仂阞叻忇扐氻艻牞玏泐竻砳楽韷餎樂簕鳓鰳鱳",
  lei: "嘞",
  "lēi": "",
  "léi": "絫雷嫘缧蔂樏畾磥檑縲攂礌镭櫑瓃羸礧纍罍蘲鐳轠儽鑘靁虆鱩欙纝鼺",
  "lěi": "厽耒诔垒洡塁絫傫誄瘣樏磊蕌磥蕾儡壘癗礌藟櫑櫐矋礨礧灅蠝蘽讄壨鑸鸓",
  "lèi": "泪洡类涙淚祱絫酹銇頛頪錑攂颣類礧纇蘱禷",
  "lēng": "稜",
  "léng": "唥崚塄楞碐稜薐",
  "lěng": "冷",
  "lèng": "倰堎愣睖踜",
  li: "",
  "lī": "",
  "lí": "刕杝厘柂剓狸离荲骊悡梨梸犁琍菞喱棃犂鹂剺漓睝筣缡艃蓠嫠孷樆璃盠竰貍犛糎蔾褵鋫鲡黎篱縭罹錅蟍謧醨嚟藜邌釐離鯏斄瓈蟸鏫鯬鵹麗黧囄灕蘺蠫孋廲劙鑗穲籬纚驪鱺鸝",
  "lǐ": "礼李里俚峛峢娌峲悝浬逦理裡锂粴裏豊鋰鲤澧禮鯉醴蠡鳢邐鱧欚纚鱱",
  "lì": "力历厉屴扐立吏扚朸利励叓呖坜杝沥苈例叕岦戾枥沴沵疠苙迣俐俪栃栎疬砅茘荔赲轹郦唎娳悧栛栗浰涖猁珕砬砺砾秝莉莅鬲唳婯悷笠粒粝脷蚸蛎傈凓厤棙痢蛠詈跞雳厯塛慄搮溧睙蒞蒚蜊鉝鳨厲暦歴瑮綟蜧銐蝷镉勵曆歷篥隷鴗巁檪濿癘磿隸鬁儮擽曞櫔爄犡禲蠇鎘嚦壢攊櫟瀝瓅礪藶麗櫪爏瓑皪盭礫糲蠣儷癧礰纅酈鷅麜囇孋攦觻躒轢欐讈轣攭瓥靂靋",
  "liǎ": "俩倆",
  "lián": "奁连帘怜涟莲連梿联裢亷嗹廉慩溓漣蓮匲奩槏槤熑覝劆匳噒嫾憐磏聨聫褳鲢濂濓縺翴聮薕螊櫣燫聯臁謰蹥檶鎌镰瀮簾蠊鬑鐮鰱籢籨",
  "liǎn": "莶敛梿琏脸裣慩摙溓槤璉蔹嬚薟斂櫣歛臉鄻襝羷蘞蘝醶",
  "liàn": "练炼恋殓僆堜媡湅萰链摙楝煉瑓潋稴練澰錬殮鍊鏈瀲鰊戀纞",
  "liāng": "",
  "liáng": "良俍莨梁涼椋辌粱粮墚踉樑輬駺糧",
  "liǎng": "両两兩俩倆唡啢掚脼裲緉蜽魉魎",
  "liàng": "亮倞哴悢谅涼辆喨晾湸靓輌踉諒輛鍄",
  "liāo": "蹽",
  "liáo": "辽疗窌聊尞僚寥嵺憀摎漻膋嘹嫽寮嶚嶛憭敹樛獠缭遼暸橑璙膫療竂鹩屪廫簝繚藔蟟蟧豂賿蹘爎爒飂髎飉鷯",
  "liǎo": "钌釕鄝缪蓼憭繆曢爎镽爒",
  "liào": "尥尦钌炓料釕廖撂窷镣鐐",
  lie: "",
  "liē": "",
  "lié": "",
  "liě": "忚毟挘",
  "liè": "列劣劦冽劽姴挒洌茢迾哷埓埒栵浖烈烮捩猎猟脟棙蛚煭聗趔綟巤獦颲燤儠巁鮤鴷擸爄獵爉犣躐鬛鬣鱲",
  "līn": "拎",
  "lín": "厸邻阾林临冧啉崊惏晽琳粦碄箖粼綝鄰隣嶙潾獜遴斴暽燐璘辚霖疄瞵磷臨繗翷麐轔壣瀶鏻鳞驎鱗麟",
  "lǐn": "菻亃僯箖凜凛撛廩廪懍懔澟檁檩癝癛",
  "lìn": "吝恡悋赁焛亃痳賃蔺獜橉甐膦閵疄藺蹸躏躙躪轥",
  "líng": "伶刢灵呤囹坽夌姈岺彾泠狑苓昤朎柃玲瓴〇凌皊砱秢竛羐袊铃陵鸰婈崚掕棂淩琌笭紷绫羚翎聆舲菱蛉衑祾詅跉軨稜蓤裬鈴閝零龄綾蔆輘霊駖澪蕶錂霗魿鲮鴒鹷燯霝霛齢酃鯪孁齡櫺醽靈欞爧麢龗",
  "lǐng": "岺袊领領嶺",
  "lìng": "另炩蘦",
  "liū": "熘澑蹓",
  "liú": "刘畄斿浏流留旈琉畱硫裗媹嵧旒蒥蓅骝摎榴漻瑠飗劉瑬瘤磂镏駠鹠橊璢疁镠癅蟉駵嚠懰瀏藰鎏鎦麍鏐飀鐂騮飅鰡鶹驑",
  "liǔ": "柳栁桞珋桺绺锍綹熮罶鋶橮嬼懰羀藰",
  "liù": "窌翏塯廇遛澑磂磟鹨鎦霤餾雡飂鬸鷚",
  lo: "咯",
  "lóng": "龙屸尨咙泷茏昽栊珑胧眬砻竜聋隆湰滝嶐槞漋癃窿篭龍儱蘢鏧霳嚨巃巄瀧曨朧櫳爖瓏襱矓礲礱蠬蠪龓龒籠聾豅躘靇鑨驡鸗",
  "lǒng": "陇垅垄拢篢篭龍隴儱徿壟壠攏竉龓籠躘",
  "lòng": "哢梇硦儱徿贚",
  lou: "喽嘍瞜",
  "lōu": "摟",
  "lóu": "剅娄偻婁喽溇蒌僂楼嘍寠廔慺漊蔞遱樓熡耧蝼瞜耬艛螻謱貗軁髅鞻髏鷜",
  "lǒu": "嵝塿嶁摟甊篓簍",
  "lòu": "陋屚漏瘘镂瘻瘺鏤",
  "lū": "噜撸謢嚕擼",
  "lú": "卢庐芦垆枦泸炉栌胪轳舮鸬玈舻颅鈩鲈馿魲盧嚧壚廬攎瀘獹璷蘆曥櫨爐瓐臚矑籚纑罏艫蠦轤鑪顱髗鱸鸕黸",
  "lǔ": "卤虏掳鹵硵鲁虜塷滷蓾樐澛魯擄橹氇磠穞镥瀂櫓氌艣鏀艪鐪鑥",
  "lù": "圥甪陆侓坴彔录峍勎赂辂陸娽淕淥渌硉菉逯鹿椂琭祿禄僇剹勠盝睩稑賂路輅塶廘摝漉箓粶緑蓼蔍戮樚熝膔趢踛辘醁潞穋蕗錄錴録璐簏螰鴼簶蹗轆騄鹭簬簵鏕鯥鵦鵱麓鏴騼籙觻虂鷺",
  "luán": "娈孪峦挛栾鸾脔滦銮鵉圝奱孌孿巒攣曫欒灓羉臡臠圞灤虊鑾癴癵鸞",
  "luǎn": "卵覶",
  "luàn": "乱釠乿亂薍灓",
  "lūn": "掄",
  "lún": "仑伦囵沦纶芲侖轮倫陯圇婨崘崙掄淪菕棆腀碖綸耣蜦論踚輪磮錀鯩",
  "lǔn": "埨惀碖稐耣",
  "lùn": "惀溣碖論",
  luo: "囉囖",
  "luō": "捋頱囉囖",
  "luó": "寽罗猡脶萝逻椤腡锣箩骡镙螺攎羅覶鏍儸覼騾囉攞玀蘿邏欏驘鸁籮鑼饠囖",
  "luǒ": "剆倮砢捰蓏裸躶瘰蠃臝曪攭癳",
  "luò": "泺咯峈洛荦骆洜珞捰渃硌硦笿絡蛒跞詻摞漯犖雒駱磱鮥鵅擽濼攊皪躒纙",
  "lǘ": "驴闾榈閭氀膢瞜櫚藘驢",
  "lǚ": "吕呂侣郘侶挔捛捋旅梠焒祣偻稆铝屡絽缕僂屢慺膂褛鋁履膐褸儢縷穭鷜",
  "lǜ": "垏律哷虑嵂氯葎滤綠緑慮箻膟勴繂濾櫖爈卛鑢",
  "lüè": "寽掠畧略锊稤圙鋢鋝",
  ma: "嗎嘛麽",
  "mā": "亇妈孖庅媽嫲榪螞",
  "má": "菻麻嗎痲痳嘛嫲蔴犘蟇",
  "mǎ": "马犸杩玛码馬嗎溤獁遤瑪碼螞鎷鰢鷌",
  "mà": "杩祃閁骂傌睰嘜榪禡罵螞駡鬕",
  "mái": "薶霾",
  "mǎi": "买荬買嘪蕒鷶",
  "mài": "劢迈佅売麦卖唛脈麥衇勱賣邁霡霢",
  "mān": "颟顢",
  "mán": "姏悗蛮絻谩慲摱馒樠瞞鞔謾饅鳗鬘鬗鰻矕蠻",
  "mǎn": "娨屘満满滿螨襔蟎鏋矕",
  "màn": "曼僈鄤墁嫚幔慢摱漫獌缦蔄槾澫熳澷镘縵鏝蘰",
  "māng": "牤",
  "máng": "邙吂忙汒芒尨杗杧盲盳厖恾笀茫哤娏庬浝狵朚牻硭釯铓痝蛖鋩駹蘉",
  "mǎng": "莽莾硥茻壾漭蟒蠎",
  "màng": "",
  "māo": "貓",
  "máo": "毛矛芼枆牦茅茆旄罞渵軞酕堥嵍楙锚緢鉾髦氂犛蝥貓髳錨蟊鶜",
  "mǎo": "冇卯夘乮峁戼泖昴铆笷蓩鉚",
  "mào": "冃皃芼冐茂柕眊秏贸旄耄袤覒媢帽萺貿鄚愗暓毷瑁瞀貌鄮蝐懋",
  me: "庅麽麼嚜",
  "mē": "嚒",
  "mè": "濹嚰",
  "méi": "坆沒枚玫苺栂眉脄莓梅珻脢郿堳媒嵋湄湈猸睂葿楣楳煤瑂禖腜塺槑酶镅鹛鋂霉穈徾鎇攗鶥黴",
  "měi": "毎每凂美挴浼羙媄嵄渼媺镁嬍燘躾鎂黣",
  "mèi": "妹抺沬旀昧祙袂眛媚寐殙痗跊鬽煝睸韎魅篃蝞嚜櫗",
  "mēn": "悶椚",
  "mén": "门们扪汶怋玧钔門們閅捫菛璊瞞穈鍆亹斖虋",
  "mèn": "悗惛焖悶暪燜鞔懑懣",
  "mēng": "掹擝矇",
  "méng": "尨甿虻庬莔萌溕盟雺甍鄳儚橗瞢蕄蝱鄸鋂髳幪懜懞濛獴曚朦檬氋礞鯍鹲艨矒靀霿饛顭鸏",
  "měng": "黾冡勐猛黽锰艋蜢瞢懜懞蟒錳懵蠓鯭矒鼆",
  "mèng": "孟梦夢夣懜霥癦",
  "mī": "咪瞇",
  "mí": "冞祢迷袮猕谜蒾詸摵瞇謎醚彌擟瞴縻藌麊麋麿檷禰靡瀰獼蘪麛镾戂攠瓕蘼爢醾醿鸍釄",
  "mǐ": "米芈侎沵羋弭洣敉粎脒渳葞蔝銤彌濔孊攠灖",
  "mì": "冖糸汨沕宓怽枈觅峚祕宻密淧覔覓幂谧塓幎覛嘧榓滵漞熐蔤蜜鼏冪樒幦濗謐櫁簚羃",
  "mián": "宀芇杣眠婂绵媔棉綿緜臱蝒嬵檰櫋矈矊矏",
  "miǎn": "丏汅免沔黾勉眄娩莬偭冕勔渑喕媔愐湎睌缅葂黽絻腼澠緬靦鮸",
  "miàn": "靣面牑糆麫麪麺麵",
  "miāo": "喵",
  "miáo": "苗媌描瞄鹋嫹緢鶓",
  "miǎo": "厸仯劰杪眇秒淼渺缈篎緲藐邈",
  "miào": "妙庙玅竗庿缪廟繆",
  "miē": "乜吀咩哶孭",
  "mié": "",
  "miè": "灭烕眜覕搣滅蔑薎鴓幭懱瀎篾櫗簚礣蠛衊鑖鱴",
  "mín": "民忟垊姄岷忞怋旻旼玟苠珉盿砇罠崏捪渂琘琝缗暋瑉痻碈鈱緍緡賯錉鴖鍲",
  "mǐn": "皿冺刡忟闵呡忞抿泯黾勄敃闽悯敏笢笽惽湏湣閔黽愍敯暋僶閩慜憫潣簢鳘蠠鰵",
  "míng": "名明鸣洺眀茗冥朙眳铭鄍嫇溟猽蓂詺暝榠銘鳴瞑螟覭",
  "mǐng": "佲姳凕嫇慏酩",
  "mìng": "命掵",
  "miǔ": "",
  "miù": "谬缪繆謬",
  "mō": "摸嚤",
  "mó": "庅尛谟嫫馍摹膜骳麽麼魹橅糢嬤嬷謨謩擵饃蘑髍魔劘戂攠饝",
  "mǒ": "懡",
  "mò": "末圽沒妺帓殁歿歾沫茉陌帞昩枺狢皌眜眿砞秣莈眽絈袹絔蛨貃嗼塻寞漠獏蓦貈貊貉銆靺墨嫼瘼瞐瞙镆魩黙縸默瀎貘嚜藦蟔鏌爅驀礳纆耱",
  "mōu": "哞",
  "móu": "牟侔劺呣恈敄桙眸谋堥蛑缪踎謀繆鍪鴾麰鞪",
  "mǒu": "厶某",
  "mòu": "",
  "mú": "毪氁",
  "mǔ": "母亩牡坶姆拇畂峔牳畆畒胟娒畝畞砪畮鉧踇",
  "mù": "木仫目凩朷牟沐狇坶炑牧苜毣莯蚞钼募雮墓幙幕慔楘睦鉬慕暯暮缪樢艒霂穆縸繆鞪",
  n: "",
  "ń": "唔嗯",
  "ň": "嗯",
  na: "",
  "nā": "",
  "ná": "秅拏拿挐嗱蒘搻誽镎鎿",
  "nǎ": "乸雫",
  "nà": "吶妠抐纳肭郍衲钠納袦捺笚笝豽軜貀鈉蒳靹魶",
  "nái": "腉搱摨孻",
  "nǎi": "乃奶艿氖疓妳廼迺倷釢嬭",
  "nài": "佴奈柰耏耐萘渿鼐褦螚錼",
  "nān": "囝囡",
  "nán": "男抩枏侽柟娚畘莮喃遖暔楠諵難",
  "nǎn": "赧揇湳萳煵腩嫨蝻戁",
  "nàn": "妠婻諵難",
  "nāng": "儾囔",
  "náng": "乪涳搑憹嚢蠰饟馕欜饢",
  "nǎng": "搑擃瀼曩攮灢馕",
  "nàng": "儾齉",
  "nāo": "孬",
  "náo": "呶怓挠峱桡硇铙猱蛲詉碙摎撓嶩憹橈獶蟯夒譊鐃巎獿",
  "nǎo": "垴恼悩脑匘脳堖惱嫐瑙腦碯憹獶",
  "nào": "闹婥淖閙鬧臑",
  ne: "",
  "né": "",
  "nè": "疒讷吶抐眲訥",
  "néi": "",
  "něi": "娞浽馁脮腇餒鮾鯘",
  "nèi": "內氝氞錗",
  "nèn": "恁媆嫩嫰",
  "néng": "",
  "něng": "螚",
  "nèng": "",
  "ńg": "唔嗯",
  "ňg": "嗯",
  "nī": "妮",
  "ní": "尼坭怩抳籾倪屔秜郳铌埿婗淣猊蚭棿蛪跜鈮聣蜺馜觬貎輗霓鲵鯢麑齯臡",
  "nǐ": "伱伲你拟妳抳狔苨柅婗掜旎晲棿孴儞儗隬懝擬濔薿檷聻",
  "nì": "屰氼伲抐昵胒逆匿眤秜堄惄嫟愵睨腻暱縌誽膩嬺",
  "niān": "拈蔫",
  "nián": "年秊哖姩秥粘溓鲇鮎鲶鵇黏鯰",
  "niǎn": "涊淰焾辇榐辗撚撵碾輦簐蹍攆蹨躎",
  "niàn": "卄廿念姩唸埝悥惗艌",
  "niáng": "娘嬢孃釀",
  "niǎng": "",
  "niàng": "酿醸釀",
  "niǎo": "鸟茑袅鳥嫋裊蔦樢嬝褭嬲",
  "niào": "脲",
  "niē": "捏揑",
  "nié": "苶",
  "niě": "",
  "niè": "乜帇圼峊枿陧涅痆聂臬啮掜菍隉敜湼嗫嵲踂噛摰槷踗踙銸镊镍嶭篞臲鋷錜颞蹑嚙聶鎳闑孼孽櫱籋蘖囁攝齧巕糱糵蠥鑈囐囓讘躡鑷顳钀",
  "nín": "囜恁脌您",
  "nǐn": "拰",
  "níng": "咛狞苧柠聍寍寕甯寗寜寧儜凝橣嚀嬣擰獰薴檸聹鑏鬡鸋",
  "nǐng": "擰矃",
  "nìng": "佞侫泞倿寍寕甯寗寜寧澝擰濘",
  "niū": "妞孧",
  "niú": "牜牛汼怓",
  "niǔ": "忸扭沑狃纽杻炄钮紐莥鈕靵",
  "niù": "抝",
  "nóng": "农侬哝浓脓秾農儂辳噥濃蕽檂燶禯膿癑穠襛譨醲欁鬞",
  "nǒng": "繷",
  "nòng": "挊挵癑齈",
  "nóu": "羺",
  "nǒu": "",
  "nòu": "搙槈耨獳檽鎒鐞",
  "nú": "奴伮孥帑驽笯駑",
  "nǔ": "伮努弩砮胬",
  "nù": "怒傉搙",
  "nuán": "奻渜",
  "nuǎn": "渜湪暖煖煗餪",
  "nuàn": "",
  "nuó": "挪梛傩橠難儺",
  "nuǒ": "袳袲",
  "nuò": "耎诺喏掿毭逽愞搙搦锘搻榒稬諾蹃糑鍩懧懦糥穤糯",
  "nǘ": "",
  "nǚ": "钕籹釹",
  "nǜ": "沑衂恧朒衄聏",
  "nüè": "虐婩硸瘧",
  o: "筽",
  "ō": "喔噢",
  "ó": "哦",
  "ǒ": "嚄",
  "ò": "哦",
  ou: "",
  "ōu": "讴吽沤欧殴瓯鸥區嘔塸漚歐毆熰甌膒鴎櫙藲謳鏂鷗",
  "óu": "",
  "ǒu": "吘禺偶腢嘔熰耦蕅藕",
  "òu": "怄沤嘔慪漚",
  "pā": "汃妑苩皅趴舥啪葩",
  "pá": "杷爬钯掱琶筢潖",
  "pǎ": "",
  "pà": "汃帊帕怕袙",
  "pāi": "拍",
  "pái": "俳徘猅棑牌箄輫簲簰犤",
  "pǎi": "廹",
  "pài": "沠哌派渒湃蒎鎃",
  "pān": "眅畨萠潘攀籓",
  "pán": "丬爿肨柈洀胖眫湴盘跘媻幋蒰搫槃盤磐縏膰磻蹒瀊蟠蹣鎜鞶",
  "pǎn": "坢盻",
  "pàn": "冸判沜拚泮炍肨叛牉盼胖畔聁袢詊溿頖鋬闆鵥襻鑻",
  "pāng": "乓汸沗胮雱滂膖霶",
  "páng": "厐夆尨彷庞逄庬趽舽嫎徬膀篣螃鳑龎龐鰟",
  "pǎng": "嗙耪覫",
  "pàng": "炐肨胖眫",
  "pāo": "抛拋脬萢藨穮",
  "páo": "咆垉庖狍炰爮瓟袍铇匏烰袌跁軳鉋鞄褜麃麅",
  "pǎo": "",
  "pào": "奅疱皰砲袌靤麭嚗礟礮",
  "pēi": "妚呸怌抷肧柸胚衃醅",
  "péi": "阫陪培婄毰赔锫裵裴賠錇",
  "pěi": "俖琣",
  "pèi": "伂妃沛犻佩帔姵斾柭旆浿珮配淠棑媐蓜辔馷嶏霈攈轡",
  "pēn": "噴濆歕",
  "pén": "瓫盆湓葐",
  "pěn": "呠翸",
  "pèn": "喯噴",
  "pēng": "亨匉怦抨泙恲胓砰梈烹硑絣軯剻閛漰嘭駍磞",
  "péng": "芃朋挷竼倗捀莑堋弸淜袶棚椖傰塜塳搒漨痭硼稝蓬鹏樥熢憉澎輣篣篷膨錋韸髼蟚蟛鬅纄蘕韼鵬騯鬔鑝",
  "pěng": "捧淎皏摓",
  "pèng": "掽椪碰閛槰踫磞",
  pi: "榌",
  "pī": "丕伓伾妚批纰邳坯岯怶披抷枈炋狉狓砒悂秛秠紕铍陴旇翍耚豾釽鈚鉟銔磇駓髬噼錃錍魾憵礕礔鎞霹",
  "pí": "皮仳阰纰芘陂枇肶毘毗疲笓紕蚍郫铍啤埤崥猈蚾蚽豼焷琵禆脾腗裨鈹鲏罴膍蜱罷隦魮壀螕鮍篺螷貔鞞鵧羆朇鼙蠯",
  "pǐ": "匹庀疋仳圮吡苉悂脴痞銢嶏諀鴄擗噽癖嚭",
  "pì": "屁埤淠揊嫓媲睥潎稫僻澼嚊濞甓疈譬闢鷿鸊",
  "piān": "囨偏媥楄犏篇翩鍂鶣",
  "pián": "骈胼缏腁楩賆跰瑸緶骿蹁駢璸騈",
  "piǎn": "覑谝貵諞",
  "piàn": "猵骗魸獱騗騙",
  "piāo": "剽勡嘌嫖彯慓缥飘旚縹翲螵犥飃飄魒",
  "piáo": "嫖瓢薸闝",
  "piǎo": "莩殍缥瞟篻縹醥皫顠",
  "piào": "僄彯徱骠驃鰾",
  "piē": "氕覕潎撆暼瞥",
  "piě": "丿苤鐅",
  "piè": "嫳",
  "pīn": "拚姘拼砏礗穦馪驞",
  "pín": "玭贫娦貧琕嫔嬪薲嚬矉蘋蠙颦顰",
  "pǐn": "品榀",
  "pìn": "牝汖聘",
  "pīng": "乒甹俜娉涄砯聠艵頩",
  "píng": "平评凭呯坪岼泙郱帡庰枰洴玶胓荓瓶帲淜硑萍蚲塀幈焩甁缾蓱蛢評馮軿鲆凴竮鉼慿箳輧憑鮃檘簈蘋",
  "pǐng": "屛",
  "pìng": "",
  "pō": "钋陂坡岥泺泼釙翍颇溌酦頗潑醗濼醱鏺",
  "pó": "婆嘙搫蔢鄱皤櫇嚩",
  "pǒ": "叵尀钷笸鉕箥駊髲",
  "pò": "廹岶敀昢洦珀哱烞砶破粕奤湐猼蒪魄",
  "pōu": "抙剖娝捊",
  "póu": "抔抙垺捊掊裒箁",
  "pǒu": "咅哣婄掊棓犃",
  "pū": "攵攴扑抪炇柨陠痡秿噗撲潽鋪鯆",
  "pú": "圤匍捗莆菩菐葡蒲蒱僕箁酺墣獛璞濮瞨穙镤贌纀鏷",
  "pǔ": "圃埔浦烳普圑溥暜谱諩擈樸氆檏镨譜蹼鐠",
  "pù": "痡舗舖鋪曝",
  qi: "啐",
  "qī": "七迉沏恓柒倛凄桤郪娸悽戚捿桼淒萋喰攲敧棲欹欺紪缉傶褄僛嘁墄慽榿漆緀慼緝諆踦螇霋蹊魌鏚鶈",
  "qí": "丌亓伎祁圻岓岐忯芪亝斉歧畁祇祈肵俟疧荠剘斊旂竒耆脐蚔蚑蚚陭颀埼崎帺掑淇猉畦萁萕跂軝釮骐骑嵜棊棋琦琪祺蛴隑愭碁碕稘褀锜頎鬿旗粸綥綨綦蜝蜞齊璂禥蕲觭螧錡鲯懠濝薺藄鄿檱櫀簯簱臍騎騏鳍蘄鯕鵸鶀麒籏艩蠐鬐騹鰭玂麡",
  "qǐ": "乞邔企屺芑启呇杞玘盀唘豈起啔啓啟婍梩绮袳跂晵棨綮綺諬闙",
  "qì": "气讫忔扱気汔迄呚弃汽矵芞亟呮泣炁盵咠洓竐栔欫氣訖唭焏夡愒棄湆湇葺滊碛摖暣甈碶噐憇槭趞器憩磜磧磩藒礘罊蟿鐑",
  "qiā": "抲掐袷揢葜擖",
  "qiá": "",
  "qiǎ": "拤峠跒酠鞐",
  "qià": "圶冾匼咭帢恰洽胢殎硈愘磍髂",
  "qiān": "千仟阡圱圲奷扦汘芊迁佥岍杄汧茾欦竏臤钎拪牵粁悭挳蚈谸婜孯牽釺掔谦鈆僉愆签鉛骞鹐慳搴摼撁厱磏諐遷鳽褰謙顅檶攐攑櫏簽鏲鵮孅攓騫籖鬜鬝籤韆",
  "qián": "仱岒忴扲拑玪乹前炶荨钤歬虔蚙钱钳偂掮揵軡亁媊朁犍葥鈐煔鉗墘榩箝銭撍潛潜羬蕁橬錢黔鎆黚騝濳騚灊鰬",
  "qiǎn": "凵肷唊淺嵰遣槏膁蜸谴缱繾譴鑓",
  "qiàn": "欠刋伣芡俔茜倩悓堑掅傔棈椠欿嗛慊皘蒨塹歉綪蔳儙槧篏輤篟壍嬱縴",
  "qiāng": "羌戕戗斨枪玱矼羗猐啌跄嗴椌溬獇腔嗆搶蜣锖嶈戧摤槍牄瑲羫锵篬謒蹌蹡鎗鏘鏹鶬",
  "qiáng": "強墙嫱蔷樯漒蔃墻嬙廧彊薔檣牆艢蘠",
  "qiǎng": "強羟搶羥墏彊繈襁镪繦鏹",
  "qiàng": "戗炝唴跄嗆戧摪熗羻",
  "qiāo": "帩硗郻喿嵪煍跷鄥鄡劁勪幓敲毃踍锹墝碻磝頝骹墽幧橇燆缲橾磽鍬鍫礉繑繰趬蹺蹻鏒鐰",
  "qiáo": "乔侨峤荍荞桥硚菬喬睄僑摮槗谯嘺墧嫶嶠憔潐蕎鞒樵橋燋犞癄瞧礄翹櫵藮譙趫鐈鞽顦",
  "qiǎo": "丂巧釥愀髜",
  "qiào": "诮陗峭窍偢殻殼誚髚僺嘺撬箾噭撽鞘韒礉竅翹鞩躈",
  "qiē": "苆",
  "qié": "癿伽茄聺",
  "qiě": "",
  "qiè": "厒妾怯疌郄匧窃悏挈栔洯帹惬淁笡愜椄猰蛪趄跙嗛慊朅稧箧锲篋踥穕鍥鯜竊籡",
  "qīn": "兓侵钦衾骎菳媇嵚欽嵰綅誛嶔親顉駸鮼寴",
  "qín": "庈忴扲芩芹肣矜埐珡矝秦耹菦蚙捦菳琴琹禽覃鈙鈫雂勤嗪嫀溱靲廑慬噙嶜擒斳鳹懄檎澿瘽螓懃蠄鵭",
  "qǐn": "坅昑笉梫赾寑锓寝寖寢鋟螼",
  "qìn": "吢吣抋沁唚菣揿搇撳寴瀙藽",
  "qīng": "靑青氢轻倾卿郬圊埥寈氫淸清軽傾綪蜻輕錆鲭鯖鑋",
  "qíng": "夝甠剠勍啨情殑硘晴棾氰葝暒擏樈擎檠黥",
  "qǐng": "苘顷请庼頃廎漀請檾謦",
  "qìng": "庆凊掅殸渹碃箐綮靘慶磬親儬濪罄櫦",
  "qiōng": "",
  "qióng": "卭邛宆穷穹茕桏惸琁筇笻赹焪焭琼舼蛬蛩煢熍睘跫銎瞏窮儝嬛憌橩璚藑瓊竆藭瓗",
  "qiòng": "",
  "qiū": "丘丠邱坵恘秌秋恷蚯媝湫萩楸湬塸蓲鹙篍緧蝵穐趥龜橚鳅蟗鞦鞧蘒鰌鰍鶖蠤龝",
  "qiú": "厹叴囚扏犰玌艽芁朹汓肍求虬泅牫虯俅觓訅訄酋唒浗紌莍逎逑釚梂殏毬球赇釻頄崷巯渞湭皳盚遒煪絿蛷裘巰觩賕璆蝤銶醔鮂鼽鯄鰽",
  "qiǔ": "搝糗",
  "qiù": "",
  "qū": "伹佉匤岖诎阹驱呿坥屈岴抾浀祛胠袪區焌紶蛆躯煀筁粬蛐詘趍嶇憈駆敺觑誳駈麹髷魼趨麯覰覷軀鶌麴黢覻驅鰸鱋",
  "qú": "佢劬斪朐胊菃衐鸲淭絇翑蚼葋軥蕖璖磲螶鴝璩翵蟝瞿鼩蘧忂灈戵欋氍爠籧臞癯欔蠷衢躣蠼鑺鸜",
  "qǔ": "苣取竘娶紶詓竬蝺龋齲",
  "qù": "去厺刞欪耝阒觑閴麮闃鼁覰覷覻",
  "quān": "奍弮悛圏棬椦箞鐉",
  "quán": "全权佺狋诠姾峑恮泉洤荃拳牷辁啳埢婘惓捲痊硂铨椦湶犈筌絟葲搼楾瑔觠詮跧輇蜷銓槫権踡縓醛駩闎鳈鬈騡孉巏鰁權齤矔蠸颧顴灥",
  "quǎn": "犭犬犮畎烇绻綣虇",
  "quàn": "劝牶勧韏勸灥",
  "quē": "炔缺缼蚗蒛阙闕",
  "qué": "瘸",
  "què": "汋却卻埆崅悫琷傕敠敪棤硞确阕塙搉皵碏阙鹊愨榷墧慤碻確趞燩闋礐闕鵲礭",
  "qūn": "夋囷逡箘歏",
  "qún": "宭峮帬裙羣群裠麇",
  "qǔn": "",
  "rán": "呥肰衻袇蚦袡蚺然髥嘫髯燃繎",
  "rǎn": "冄冉姌苒染珃媣蒅熯橪",
  "ràn": "",
  "rāng": "",
  "ráng": "穣儴勷瀼獽蘘禳瓤穰躟鬤",
  "rǎng": "壌壤攘爙纕",
  "ràng": "让懹譲讓",
  "ráo": "娆荛饶桡嬈蕘橈襓饒",
  "rǎo": "扰娆隢嬈擾",
  "rào": "绕遶穘繞",
  "ré": "捼",
  "rě": "喏惹",
  "rè": "热渃熱",
  "rén": "亻人仁壬忈朲忎秂芢魜銋鵀",
  "rěn": "忍荏栠栣荵秹菍棯稔綛躵銋",
  "rèn": "刃刄认仞仭讱屻岃扨纫妊杒牣纴肕轫韧饪祍姙紉衽紝訒軔梕袵釰釼絍腍鈓靱靭韌飪認餁",
  "rēng": "扔",
  "réng": "仍辸礽芿陾",
  "rì": "日驲囸氜衵釰釼鈤馹",
  "róng": "戎肜栄狨绒茙茸荣容峵毧烿傛媶嵘搑絨羢嫆嵤搈榵溶蓉榕榮熔瑢穁槦縙蝾褣镕螎融駥嬫嶸爃鎔瀜曧蠑",
  "rǒng": "冗宂坈傇軵縙氄",
  "ròng": "穃縙",
  "róu": "厹禸柔粈脜媃揉渘葇楺煣瑈腬糅蝚蹂輮鍒鞣瓇騥鰇鶔",
  "rǒu": "韖",
  "ròu": "肉宍楺譳",
  "rū": "嶿",
  "rú": "邚如吺侞帤茹挐桇袽铷渪筎蒘銣蕠蝡儒鴑嚅嬬孺濡獳薷鴽曘檽襦繻蠕颥醹顬鱬",
  "rǔ": "汝肗乳辱鄏擩",
  "rù": "入扖杁洳嗕媷溽缛蓐鳰褥縟",
  "ruán": "堧撋壖",
  "ruǎn": "阮朊软耎偄軟媆瑌腝碝緛輭檽瓀礝",
  "ruàn": "緛",
  "ruí": "苼桵甤緌蕤",
  "ruǐ": "惢蕋蕊橤繠壡蘃蘂",
  "ruì": "兊兌抐汭芮枘笍蚋锐瑞蜹睿銳鋭叡鏸",
  "rún": "瞤",
  "rǔn": "",
  "rùn": "闰润閏閠潤橍膶",
  "ruó": "挼捼",
  "ruò": "叒偌弱鄀婼渃焫楉嵶蒻箬篛爇鰙鰯鶸",
  sa: "",
  "sā": "仨",
  "sǎ": "訯靸潵鞈攃灑躠纚",
  "sà": "卅泧钑飒脎萨鈒摋隡馺蕯颯薩櫒鏾",
  "sāi": "毢愢揌毸腮嘥噻鳃顋鰓",
  "sǎi": "嗮",
  "sài": "赛僿賽簺",
  san: "壭",
  "sān": "三弎叁參叄叅毶毵厁毿犙鬖",
  "sǎn": "仐伞傘糁馓糝糤糣繖鏒鏾饊",
  "sàn": "俕帴閐潵",
  "sāng": "桒桑喪槡",
  "sǎng": "嗓搡磉褬颡鎟顙",
  "sàng": "喪",
  "sāo": "掻慅搔溞缫懆缲螦繅鳋颾騒繰騷鰠鱢",
  "sǎo": "埽掃嫂",
  "sào": "埽掃瘙懆氉矂髞",
  "sē": "閪",
  "sè": "色拺洓栜涩啬渋粣铯雭歮琗嗇瑟摵歰銫槭澁廧懎擌濇濏瘷穑薔澀璱瀒穡鎍繬穯轖鏼闟譅飋",
  "sēn": "森椮槮襂",
  "sěn": "",
  "sēng": "僧鬙",
  "sèng": "",
  "sī": "厶纟丝司糹糸私咝泀俬恖虒鸶偲傂媤愢斯絲缌蛳楒禗鉰飔凘厮禠罳蜤銯锶嘶噝廝撕澌磃緦蕬鋖燍螄鍶蟖蟴颸騦鯣鐁鷥鼶",
  "sí": "",
  "sǐ": "死愢",
  "sì": "巳亖四寺汜佀兕姒泤祀価孠杫泗饲驷俟娰枱柶洠牭洍涘肂飤梩笥耛耜釲竢覗嗣肆貄鈶鈻飴飼榹銉禩駟蕼儩騃瀃",
  "sōng": "忪枀松枩娀柗倯凇崧庺梥淞菘愡揔棇嵩硹憽濍檧鬆",
  "sóng": "",
  "sǒng": "怂悚捒耸竦傱愯楤嵷摗漎慫聳駷",
  "sòng": "吅讼宋诵送颂訟頌誦鎹餸",
  "sōu": "凁捒捜鄋嗖廀廋搜溲獀蒐蓃馊摉飕摗锼撨艘螋醙鎪餿颼颾鏉騪",
  "sǒu": "叜叟傁棷蓃嗾瞍擞薮擻藪櫢籔",
  "sòu": "欶嗽擞瘶擻",
  "sū": "甦酥稡稣窣穌鯂蘇蘓櫯囌",
  "sú": "圱俗",
  "sǔ": "",
  "sù": "玊夙诉泝肃洬涑珟素莤速埣梀殐粛骕傃棴粟訴谡嗉塑塐嫊愫溯溸肅遡鹔僳愬摵榡膆蔌觫趚遬憟樕樎潥碿鋉餗潚縤橚璛簌縮藗謖蹜驌鱐鷫",
  "suān": "狻痠酸",
  "suǎn": "匴篹",
  "suàn": "祘笇筭蒜算",
  "suī": "夊芕虽倠哸娞浽荾荽眭毸滖睢缞嗺熣濉縗鞖雖",
  "suí": "绥隋随遀綏隨瓍髄",
  "suǐ": "膸瀡髓",
  "suì": "亗岁砕祟谇埣嵗遂歲歳煫睟碎隧嬘澻穂誶賥檖燧璲禭穗穟繀襚邃旞繐繸譢鐆鏸鐩韢",
  "sūn": "狲荪孫喰飧飱搎猻蓀槂蕵薞",
  "sǔn": "扻损笋隼筍損榫箰簨鎨鶽",
  "sùn": "摌",
  "suō": "唆娑挱莏莎傞挲桫梭睃嗍嗦羧蓑摍趖簑簔縮鮻",
  "suó": "",
  "suǒ": "所乺唢索琑琐嫅惢锁嗩暛溑獕瑣褨璅縒鎍鎖鎻鏁",
  "suò": "逤溹蜶",
  "shā": "杀杉纱乷剎砂唦挱殺猀粆紗莎挲桬毮铩痧硰摋蔱裟榝樧魦鲨閷髿鎩鯊鯋繺",
  "shá": "啥",
  "shǎ": "傻儍",
  "shà": "倽唼啑帹菨萐喢嗄廈歃翜歰箑翣濈閯霎",
  "shāi": "筛篩諰簁簛籭",
  "shǎi": "摋",
  "shài": "晒攦曬",
  "shān": "山彡邖圸删刪杉芟姍姗衫钐埏挻柵炶狦珊舢痁脠軕笘釤閊傓跚剼搧煔嘇幓煽潸澘穇檆縿膻鯅羴羶",
  "shán": "",
  "shǎn": "闪陕炶陝閃閄晱煔睒摻熌覢",
  "shàn": "讪汕姍姗疝钐剡訕赸掞釤善單椫禅銏骟僐鄯儃墡墠撣潬缮嬗嶦擅敾樿歚禪膳磰謆赡繕蟮蟺譱贍鐥饍騸鳝鳣灗鱓鱔",
  shang: "",
  "shāng": "伤殇商愓湯觞傷禓墒慯滳漡蔏殤熵螪觴謪鬺",
  "shǎng": "垧扄晌埫赏樉賞鋿鏛贘鑜",
  "shàng": "丄尙尚恦绱緔鞝",
  "shāo": "娋弰烧莦焼萷旓筲艄輎蕱燒鞘髾鮹",
  "sháo": "勺芍杓苕柖玿韶",
  "shǎo": "",
  "shào": "佋劭卲邵绍柖哨娋袑紹睄綤潲",
  "shē": "奓奢猞赊畭畬畲輋賒賖檨",
  "shé": "舌佘虵阇揲蛥闍磼",
  "shě": "舍捨",
  "shè": "厍设社泏舎舍厙挕涉涻渉設赦弽慑摂滠慴蔎歙蠂韘騇懾攝灄麝欇",
  "shéi": "誰",
  "shēn": "申屾扟伸身侁冞呻妽籶绅罙诜姺柛氠珅穼籸娠峷甡眒砷莘參叄堔敒深紳兟叅棽葠裑訷嫀搷罧蓡詵幓甧糁蔘糂燊薓駪鲹曑糝糣鯓鵢鯵鰺",
  "shén": "神榊鉮鰰",
  "shěn": "邥吲弞抌审矤哂矧宷谂谉婶淰渖訠棯審諗頣魫曋瞫嬸瀋覾讅",
  "shèn": "肾侺昚胂涁眘渗祳脤谌腎葚愼慎椹瘆蜄蜃滲鋠瘮黮",
  "shēng": "升生阩呏声斘昇枡泩狌苼殅牲珄竔陞曻陹殸笙湦焺甥鉎聲鍟鼪鵿",
  "shéng": "渑绳憴澠縄繉繩譝",
  "shěng": "眚偗渻",
  "shèng": "圣乗娍胜晠晟剰剩勝椉貹嵊琞聖墭榺蕂橳賸",
  shi: "辻籂",
  "shī": "尸失师厔呞虱诗邿鸤屍施浉狮師絁釶湤湿葹溮溼獅蒒蓍詩鉇嘘瑡酾鳲噓箷蝨鳾褷鲺濕鍦鯴鰤鶳襹釃",
  "shí": "十饣乭时竍実实旹飠姼峕炻祏蚀埘宲時莳寔湜遈塒嵵溡蒔鉐實榯碩蝕鲥鮖鼫識鼭鰣",
  "shǐ": "史矢乨豕使始驶兘宩屎狶痑笶榁鉂駛",
  "shì": "士礻丗世仕市示卋式忕亊忯戺事侍势呩柹视试饰冟咶室峙恀恃拭昰是枾柿狧眂贳适栻烒眎眡耆舐莳轼逝铈啫埶畤秲視釈崼崻弑徥惿揓谥貰释勢嗜弒楴煶睗筮蒔觢試軾鈰鉃飾舓誓適鉽馶奭銴餝餙噬嬕澨澤諡諟遾檡螫謚簭襫醳釋鰘",
  "shōu": "収收敊",
  "shóu": "熟",
  "shǒu": "扌手守垨首艏",
  "shòu": "寿受狩兽售授涭绶痩膄壽夀瘦綬嘼獣獸鏉",
  "shū": "书殳疋忬抒纾叔杸枢陎姝倐倏捈書殊紓婌悆掓梳淑焂菽軗鄃琡疎疏舒摅毹毺綀输瑹跾踈樞緰蔬輸橾鮛儵攄瀭鵨",
  "shú": "朮尗秫孰赎蒣塾熟璹贖",
  "shǔ": "鼡暏暑稌黍署蜀鼠數潻薥薯曙癙藷襡糬襩屬籔蠴鱪鱰",
  "shù": "朮戍束沭述侸俞兪咰怸怷树竖荗恕捒庻庶絉蒁術隃尌裋竪腧鉥墅漱潄數澍豎樹濖錰霔鏣鶐虪",
  "shuā": "唰",
  "shuǎ": "耍",
  "shuà": "誜",
  "shuāi": "缞摔縗",
  "shuǎi": "甩",
  "shuài": "帅帥蟀卛",
  "shuān": "闩拴閂栓絟",
  "shuàn": "涮腨槫",
  "shuāng": "双泷霜雙孀瀧骦孇騻欆礵鷞鹴艭驦鸘",
  "shuǎng": "爽塽慡漺縔鏯",
  "shuàng": "灀",
  "shuí": "谁脽誰",
  "shuǐ": "氵水氺閖",
  "shuì": "帨挩捝涗涚娷祱稅税裞睡說説",
  "shǔn": "吮楯",
  "shùn": "顺眴舜順蕣橓瞚瞤瞬鬊",
  "shuō": "說説",
  "shuò": "妁洬烁朔铄欶矟搠蒴銏愬槊獡碩數箾鎙爍鑠",
  ta: "侤",
  "tā": "他它牠祂趿铊塌榙溻鉈褟闧",
  "tá": "",
  "tǎ": "塔溚墖獭鮙鳎獺鰨",
  "tà": "沓挞狧闼粏崉涾傝嗒搨遝遢阘榻毾漯禢撻澾誻踏鞈嚃橽錔濌蹋鞜鎉鎑闒鞳蹹躂嚺闟闥譶躢",
  "tāi": "囼孡珆胎",
  "tái": "旲邰坮抬骀枱炱炲菭跆鲐箈臺颱駘儓鮐嬯擡薹檯斄籉",
  "tǎi": "奤",
  "tài": "太冭夳忕汏忲汰汱态肽钛泰舦酞鈦溙態燤",
  "tān": "坍贪怹啴痑舑貪摊滩嘽潬瘫擹攤灘癱",
  "tán": "坛昙倓谈郯埮婒惔弾覃榃痰锬谭嘾墰墵彈憛潭談醈壇曇橝澹燂錟檀顃罈藫壜繵譚貚醰譠罎",
  "tǎn": "忐坦袒钽菼毯僋鉭嗿緂儃憳憻暺醓璮襢",
  "tàn": "叹炭倓埮探傝湠僋嘆碳舕歎",
  "tāng": "铴湯嘡劏羰蝪薚镗蹚鏜闛鞺鼞",
  "táng": "坣唐堂傏啺愓棠鄌塘嵣搪溏蓎隚榶漟煻瑭禟膅樘磄糃膛橖篖糖螗踼糛螳赯醣鎕餹鏜闛饄鶶",
  "tǎng": "伖帑偒傥耥躺镋鎲儻戃灙曭爣矘钂",
  "tàng": "烫铴摥燙鐋",
  "tāo": "夲夵弢抭涛绦掏涭絛詜嫍幍慆搯滔槄瑫韬飸縚縧濤謟轁鞱韜饕",
  "táo": "匋迯咷洮逃桃陶啕梼淘绹萄祹裪綯蜪鞀醄鞉鋾駣檮饀騊鼗",
  "tǎo": "讨討",
  "tào": "套",
  "tè": "忑忒特脦犆铽慝鋱蟘",
  "tēng": "熥膯鼟",
  "téng": "疼痋幐腾誊漛滕邆縢螣駦謄儯藤騰籐鰧籘虅驣",
  "tèng": "霯",
  "tī": "剔梯锑踢銻擿鷉鷈體",
  "tí": "苐厗荑桋绨偍珶啼媂媞崹惿渧稊缇罤遆鹈嗁瑅禔綈睼碮褆徲漽磃緹蕛题趧蹄醍謕蹏鍗鳀題鮷鵜騠鯷鶗鶙禵鷤",
  "tǐ": "挮徥躰骵醍軆體",
  "tì": "戻奃屉剃朑俶倜悌挮涕眣绨逖啑屜悐惕掦笹逷屟惖揥替棣綈裼褅歒殢髰薙嚏鬀嚔瓋鬄籊趯",
  "tiān": "天兲呑婖添酟靔黇靝",
  "tián": "田屇沺恬畑畋盷胋钿甛甜菾湉塡搷阗瑱碵緂磌窴鴫璳闐鷆鷏",
  "tiǎn": "奵忝殄倎栝唺悿淟紾铦晪琠腆觍痶睓舔銛餂覥賟銽錪",
  "tiàn": "掭菾琠瑱舚",
  "tiāo": "旫佻庣恌條祧聎",
  "tiáo": "芀朷岧岹苕迢祒條笤萔铫蓚蓨蓧龆樤蜩銚調鋚鞗髫鲦鯈鎥齠鰷",
  "tiǎo": "宨晀朓脁窕誂斢窱嬥",
  "tiào": "啁眺粜絩覜趒糶",
  "tiē": "怗贴萜聑貼跕",
  "tié": "",
  "tiě": "铁蛈鉄僣銕鐡鐵驖",
  "tiè": "呫飻餮",
  "tīng": "厅庁汀听庍耓厛烃桯烴渟綎鞓聴聼廰聽廳",
  "tíng": "邒廷亭庭莛停婷嵉渟筳葶蜓楟榳閮霆聤蝏諪鼮",
  "tǐng": "圢甼町侹侱娗挺涏梃烶珽脡铤艇颋誔鋌閮頲",
  "tìng": "忊梃濎",
  "tōng": "囲炵通痌絧嗵蓪樋",
  "tóng": "仝佟彤侗峂庝哃垌峒峝狪茼晍桐浵烔砼蚒偅痌眮秱铜硧童粡絧詷赨酮鉖僮勭鉵銅餇鲖潼獞曈朣橦氃燑犝膧瞳穜鮦",
  "tǒng": "侗统捅桶筒統筩綂",
  "tòng": "恸痛衕慟憅",
  tou: "",
  "tōu": "偸偷婾媮緰鋀鍮",
  "tóu": "亠投骰頭",
  "tǒu": "妵紏敨飳斢黈蘣",
  "tòu": "透埱",
  tu: "汢",
  "tū": "凸宊禿秃怢突涋捸堗湥痜葖嶀鋵鵚鼵",
  "tú": "図图凃峹庩徒悇捈涂荼莵途啚屠梌菟揬稌趃塗嵞瘏筡腯蒤鈯圗圖廜摕潳瑹跿酴墿馟檡鍎駼鵌鶟鷋鷵",
  "tǔ": "土圡钍唋釷",
  "tù": "兎迌兔唋莵堍菟鋀鵵",
  "tuān": "湍猯圕煓貒",
  "tuán": "団团抟剸團塼慱摶漙槫篿檲鏄糰鷒鷻",
  "tuǎn": "畽墥疃",
  "tuàn": "彖湪猯褖貒",
  "tuī": "忒推蓷藬讉",
  "tuí": "弚颓僓隤墤尵橔頺頹頽魋穨蘈蹪",
  "tuǐ": "俀聉腿僓蹆骽",
  "tuì": "侻退娧煺蛻蜕螁駾",
  "tūn": "吞呑旽涒啍朜焞噋憞暾",
  "tún": "坉庉忳芚饨蛌豘豚軘飩鲀魨霕黗臀臋",
  "tǔn": "氽",
  "tùn": "",
  "tuō": "乇仛讬托扡汑饦杔侂咃咜拕拖沰挩捝莌袉袥託啴涶脫脱飥馲魠鮵",
  "tuó": "阤驮佗陀陁坨岮沱沲狏驼侻柁砤砣袉铊鸵紽堶媠詑跎酡碢鉈馱槖駄鋖駞駝橐鮀鴕鼧騨鼍驒驝鼉",
  "tuǒ": "彵妥庹椭楕嫷撱橢鵎鰖",
  "tuò": "杝柝毤唾涶萚跅毻嶞箨蘀籜",
  wa: "哇",
  "wā": "屲穵呙劸咼哇徍挖洼娲畖窊唲啘媧窐嗗瓾蛙搲溛漥窪鼃攨韈",
  "wá": "娃",
  "wǎ": "佤邷咓砙瓸搲",
  "wà": "帓袜婠聉嗢搲腽膃韎襪韤",
  wai: "",
  "wāi": "呙咼歪喎竵瀤",
  "wǎi": "崴",
  "wài": "外顡",
  "wān": "毌夗弯剜埦婠帵捥塆湾睕蜿潫豌鋺彎壪灣",
  "wán": "丸刓汍纨芄完岏忨抏杬玩笂紈捖蚖顽烷琓貦頑翫",
  "wǎn": "夘夗倇唍挽盌莞莬埦婉惋捥晚晥梚涴绾脘菀萖惌晩晼椀琬皖畹碗箢綩綰輓踠鋔鋺",
  "wàn": "卍卐妧杤捥脕掔腕萬絻綄輐槾澫鋄瞣薍錽蟃贃鎫贎",
  "wāng": "尣尫尪汪尩瀇",
  "wáng": "亾兦仼莣蚟朚",
  "wǎng": "罓罒网彺忹抂徃往枉罖罔迬惘菵暀棢蛧辋網蝄誷輞瀇魍",
  "wàng": "妄忘迋旺盳徍望暀朢",
  "wēi": "厃危威倭烓偎逶隇隈喴媙崴嵔愄揋揻葨葳微椳楲溦煨詴蜲縅蝛覣嶶薇燰鳂癐癓巍鰃鰄霺",
  "wéi": "囗韦圩囲围帏沩违闱隹峗峞洈為韋桅涠唯帷惟硙维喡圍媁嵬幃湋溈爲琟違潍維蓶鄬撝潙潿醀濰鍏闈鮠壝矀覹犩欈",
  "wěi": "伟伪纬芛苇炜玮洧娓屗捤浘荱诿偉偽唩崣捼梶痏硊萎隗骩媁嵔廆徫愇渨猥葦蒍骫骪暐椲煒瑋痿腲艉韪僞嶉撱碨磈鲔寪緯蔿諉踓韑頠薳儰濻鍡鮪瀢韙颹韡亹瓗斖",
  "wèi": "卫未位味苿為畏胃叞軎猚硙菋谓喂喡媦渭爲猬煟墛瞆碨蔚蜼慰熭犚磑緭蝟衛懀罻衞謂餧鮇螱褽餵魏藯轊鏏霨鳚蘶饖瓗讆躗讏躛",
  "wēn": "昷塭温缊榅殟溫瑥辒韫榲瘟緼縕豱輼轀鎾饂鳁鞰鰛鰮",
  "wén": "文彣芠炆玟闻紋蚉蚊珳阌雯瘒聞馼駇魰鳼鴍螡閺閿蟁闅鼤繧闦",
  "wěn": "伆刎吻呅忟抆呡忞歾肳紊桽脗稳穏穩",
  "wèn": "问妏汶紋莬問渂揾搵絻顐璺",
  "wēng": "翁嗡滃鹟聬螉鎓鶲",
  "wěng": "勜奣塕嵡滃蓊暡瞈攚",
  "wèng": "瓮蕹甕罋齆",
  "wō": "挝倭莴唩涹渦猧萵喔窝窩蜗撾濄緺蝸踒薶",
  "wǒ": "呙我咼婑婐捰",
  "wò": "仴沃肟卧枂臥偓捾涴媉幄握渥焥硪楃腛斡瞃濣瓁臒龌馧龏齷",
  "wū": "乌圬弙扜扝汚汙污邬呜巫杅杇於屋洿诬钨烏剭窏釫惡鄔嗚誈僫歍誣箼鋘螐鴮鎢鰞",
  "wú": "无毋吳吴吾呉芜郚唔娪峿洖浯茣莁梧珸祦無铻鹀蜈墲蕪鋙鋘橆璑蟱鯃鵐譕鼯鷡",
  "wǔ": "乄五午仵伍妩庑忤怃迕旿武玝侮倵娒捂逜陚啎娬牾堥珷摀碔鹉熓瑦舞嫵廡憮潕儛甒膴瞴鵡躌",
  "wù": "兀勿务戊阢屼扤坞岉杌沕芴忢旿物矹俉卼敄柮误務唔娪悟悞悮粅趶晤焐婺嵍惡渞痦隖靰骛塢奦嵨溩雺雾僫寤熃誤鹜鋈窹霚鼿霧齀蘁騖鶩",
  "xī": "夕兮邜吸忚扱汐西希扸卥昔析矽穸肸肹俙咥咭徆怸恓诶郗饻唏奚娭屖息悕氥浠牺狶莃唽悉惜晞桸欷淅渓烯焁焈琋硒羛菥赥釸傒惁晰晳焟焬犀睎稀粞翖翕舾鄎厀嵠徯溪煕皙碏蒠裼锡僖榽熄熈熙獡緆蜥覡誒豨閪餏嘻噏嬆嬉嶲憘潝瘜磎膝凞暿樨橀歙熻熺熹窸羲螅螇錫燨犠瞦礂蟋豀谿豯貕蹊巂糦繥釐雟鯑鵗觹譆醯鏭鐊隵嚱巇曦爔犧酅饎觽鼷蠵鸂觿鑴",
  "xí": "习郋席習袭觋雭喺媳椺蒵蓆嶍漝趘槢薂隰檄謵鎴霫鳛飁騱騽鰼襲驨",
  "xǐ": "杫枲玺徙喜葈葸鈢鉩鉨屣漇蓰銑憘憙暿橲歖禧諰壐縰謑鳃蟢蹝釐璽鰓瓕鱚囍矖纚躧",
  "xì": "匸卌扢屃忾饩呬忥怬细郄钑係恄欪盻郤屓欯绤細釳阋傒摡椞舃舄趇隙愾慀滊禊綌蒵赩隟墍熂犔稧戯潟澙蕮覤戱縘黖戲磶虩餼鬩繫闟霼屭衋",
  "xiā": "呷虲疨虾谺傄閕煆颬瘕瞎蝦鰕",
  "xiá": "匣侠狎俠峡柙炠狭陜埉峽烚狹珨祫捾硖笚翈舺陿徦硤遐敮暇瑕筪舝瘕碬辖磍蕸縖螛赮魻轄鍜霞鎋黠騢鶷",
  "xiǎ": "閕閜",
  "xià": "丅下乤圷芐疜夏梺廈睱諕嚇懗罅夓鎼鏬",
  "xiān": "仚仙屳先奾佡忺氙杴欦祆秈苮姺枮籼珗莶掀铦搟綅跹酰锨僊僲嘕摻銛暹銽韯嬐憸薟鍁繊褼韱鮮蹮馦孅廯攕醶纎鶱襳躚纖鱻",
  "xián": "伭咞闲咁妶弦臤贤咸唌挦涎玹盷胘娴娹婱絃舷蚿衔啣湺痫蛝閑閒鹇嗛嫌溓衘甉銜嫻嫺憪撏澖稴羬誸賢諴輱醎癇癎瞯藖礥鹹麙贒鑦鷴鷼鷳",
  "xiǎn": "彡冼狝显险崄毨烍猃蚬険赻筅尟尠搟禒蜆跣銑箲險嶮獫獮藓鍌鮮燹顕幰攇櫶蘚譣玁韅顯灦",
  "xiàn": "咞岘苋見现线臽限姭宪県陥哯垷娊峴涀莧軐陷埳晛現硍馅睍絤綖缐羡塪搚溓献粯羨腺僩僴槏綫誢憪撊線鋧憲橌橺縣錎餡壏懢豏麲瀗臔獻糮鏾霰鼸",
  "xiāng": "乡芗香郷厢啍鄉鄊廂湘缃萫葙鄕楿稥薌箱緗膷襄儴勷忀骧麘欀瓖镶鱜纕鑲驤",
  "xiáng": "夅瓨佭庠羏栙祥絴翔詳跭",
  "xiǎng": "享亯响蚃饷晑飨想銄餉鲞蠁鮝鯗響饗饟鱶",
  "xiàng": "向姠项珦象缿衖項像勨嶑潒銗閧曏橡襐闂嚮蟓鐌鱌",
  "xiāo": "灲灱呺枭侾哓枵骁宯宵庨消烋绡莦虓逍鸮婋梟焇猇萧痚痟睄硣硝窙翛销嗃揱綃蛸嘐歊潇熇箫踃嘵憢撨獟獢箾銷霄骹彇膮蕭颵魈鴞穘簘藃蟂蟏鴵嚣瀟簫蟰髇櫹嚻囂髐鷍蠨驍毊虈",
  "xiáo": "姣洨郩崤淆訤殽誵",
  "xiǎo": "小晓暁筱筿皛曉篠謏皢",
  "xiào": "孝効咲恔俲哮效涍笑啸傚敩殽嗃詨嘋嘨誟嘯薂歗熽斅斆",
  "xiē": "娎揳猲楔歇滊獦蝎蠍",
  "xié": "劦协旪協胁垥奊峫恊拹挾脇脅脋衺偕斜梋谐絜翓颉嗋愶慀搚携瑎綊熁膎鲑勰撷擕緳縀缬蝢鞋諧燲鮭嚡擷鞵儶襭孈攜讗龤",
  "xiě": "写冩寫藛",
  "xiè": "伳灺泻祄绁缷卸枻洩炨炧卨屑栧偞偰徢械烲焎禼紲亵媟屟渫絏絬谢僁塮觟觧榍榝榭褉靾噧寫屧暬樧碿緤嶰廨懈澥獬糏薤薢邂韰燮褻謝夑瀉鞢韘瀣爕繲蟹蠏齘齛纈齥齂躠躞",
  "xīn": "忄心邤妡忻辛昕杺欣盺俽莘惞訢鈊锌新歆廞鋅噺噷嬜薪馨鑫馫",
  "xín": "枔襑镡礥鐔",
  "xǐn": "伈",
  "xìn": "阠伩囟孞炘軐脪衅訫愖焮馸顖舋釁",
  "xīng": "狌星垶骍惺猩煋瑆腥觪箵篂興謃鮏曐觲騂皨鯹",
  "xíng": "刑邢饧巠形陉侀郉哘型洐荥钘陘娙硎铏鈃蛵滎鉶銒鋞餳",
  "xǐng": "睲醒擤",
  "xìng": "杏姓幸性荇倖莕婞悻涬葕睲緈鋞嬹臖",
  "xiōng": "凶匂兄兇匈芎讻忷汹哅恟洶胷胸訩詾賯",
  "xióng": "雄熊熋",
  "xiǒng": "焽焸",
  "xiòng": "诇詗夐敻",
  "xiū": "俢修咻庥烌烋羞脩脙鸺臹貅馐樇銝髤髹鎀鮴鵂鏅饈鱃飍",
  "xiú": "苬",
  "xiǔ": "朽滫潃糔",
  "xiù": "秀岫峀珛绣袖琇锈嗅溴綉璓褏褎銹螑嚊繍鏅繡鏥鏽齅",
  "xū": "圩戌旴姁疞盱欨砉胥须眗訏顼偦虗虚裇許谞媭揟欻湏湑虛須楈綇頊嘘墟稰蓲需魆噓嬃歔緰縃蕦蝑歘藇諝燸譃魖驉鑐鬚",
  "xú": "俆冔徐禑蒣",
  "xǔ": "呴姁诩浒栩珝喣湑蛡暊詡滸稰鄦糈諿醑盨",
  "xù": "旭伵序旴汿芧侐卹妶怴沀叙恓恤昫朐洫垿晇欰殈烅珬勗勖喐惐掝敍敘淢烼绪续蚼酗壻婿朂溆矞絮聓訹慉滀煦続蓄賉槒漵潊盢瞁緒聟蓿銊嘼獝稸緖藇藚續鱮",
  "xuān": "吅轩昍咺宣弲晅軒梋谖喧塇媗愃愋揎萲萱暄煊瑄蓒睻儇禤箮翧蝖鋗嬛懁蕿諠諼鞙駨鍹駽矎翾藼蘐蠉譞鰚讂",
  "xuán": "玄伭妶玹痃悬琁蜁嫙漩暶璇縣檈璿懸",
  "xuǎn": "咺选烜喛暅選癣癬",
  "xuàn": "怰泫昡炫绚眩袨铉琄眴衒渲絢楥楦鉉夐敻碹蔙镟颴縼繏鏇贙",
  "xuē": "疶蒆靴薛辥辪鞾",
  "xué": "穴斈乴学峃茓泶袕鸴敩踅噱壆學嶨澩燢觷鷽",
  "xuě": "彐雪樰膤艝轌鳕鱈",
  "xuè": "吷坹岤怴泬狘疦桖谑滈趐謔瞲瀥",
  "xūn": "坃勋埙焄勛塤煇窨勲勳薫嚑壎獯薰曛燻臐矄蘍壦爋纁醺",
  "xún": "廵寻巡旬杊畃询郇咰姰峋恂洵浔紃荀荨栒桪毥珣偱眴尋循揗詢鄩鲟噚潯蕁攳樳燅燖璕駨蟫蟳爓鱘鱏灥",
  "xùn": "卂训讯伨汛迅驯侚巺徇狥迿逊孫殉毥浚訊訓訙奞巽殾稄遜馴愻噀潠蕈濬爋顨鶽鑂",
  ya: "",
  "yā": "丫圧吖亞庘押枒垭鸦桠鸭啞孲铔椏鴉錏鴨壓鵶鐚",
  "yá": "牙伢厑岈芽厓拁琊笌蚜堐崕崖涯猚釾睚衙漄齖",
  "yǎ": "疋厊庌挜疨唖啞掗痖雅瘂蕥",
  "yà": "劜圠轧亚冴襾覀讶亜犽迓亞玡軋姶娅挜砑俹氩埡婭掗訝铔揠氬猰聐圔椻稏碣窫潝磍壓瓛齾",
  "yān": "恹剦烟珚胭崦淊淹焑焉菸阉殗渰湮傿歅煙硽鄢嫣漹嶖樮醃橪閹閼嬮懨篶懕臙黫黰",
  "yán": "讠厃延闫严妍芫訁言岩昖沿炏炎郔唌埏姸娫狿莚娮梴盐啱琂硏訮閆阎喦嵓嵒筵綖蜒塩揅楌詽碞蔅羬颜厳虤閻檐顏顔嚴壛巌簷櫩壧巖巗欕礹鹽麣",
  "yǎn": "夵抁沇乵兖俨兗匽弇衍剡偃厣掞掩眼萒郾酓隁嵃愝扊揜晻棪渰渷琰遃隒椼硽罨裺演褗戭窴蝘魇噞嬐躽縯檿黡厴甗鰋鶠黤儼黬黭龑孍顩鼴巘巚曮魘鼹礹齴黶",
  "yàn": "厌妟觃牪匽姲彥彦洝砚唁宴晏烻艳覎验偐掞焔猏硏谚隁喭堰敥棪殗焱焰猒硯雁傿椻溎滟豣鳫厭墕暥熖酽鳱嬊谳餍鴈燄諺赝鬳嚈嬮曕鴳酀騐験嚥嬿艶贋軅曣爓醶騴齞鷃灔贗囐觾讌醼饜驗鷰艷灎釅驠灧讞豓豔灩",
  "yāng": "央姎抰泱柍殃胦眏秧鸯鉠雵鞅鍈鴦",
  "yáng": "扬阦阳旸杨炀玚飏佯劷氜疡钖垟徉昜洋羏烊珜眻陽婸崵崸愓揚蛘敭暘楊煬瑒禓瘍諹輰鍚鴹颺鰑霷鸉",
  "yǎng": "卬佒咉坱岟养柍炴氧眏痒紻傟勜楧軮慃氱蝆飬養駚懩攁瀁癢礢",
  "yàng": "怏柍恙样烊羕楧詇煬様漾鞅樣瀁",
  "yāo": "幺夭吆妖枖殀祅約訞喓葽楆腰鴁撽邀鴢",
  "yáo": "爻尧匋尭肴垚姚峣恌轺倄烑珧皐窕窑铫隃傜堯揺殽谣軺嗂媱徭愮搖摇滧猺遙遥僥摿暚榣瑤瑶銚飖餆嶢嶤徺磘窯窰餚繇謡謠鎐鳐颻蘨邎顤鰩鱙",
  "yǎo": "仸宎岆抭杳枖狕苭咬柼眑窅窈舀偠婹崾溔蓔榚闄騕齩鷕",
  "yào": "怮穾药烄袎窔筄葯詏愮熎瘧覞靿樂獟箹鹞薬鼼曜燿艞藥矅耀纅鷂讑",
  ye: "亪",
  "yē": "吔耶倻椰暍歋窫噎潱擨蠮",
  "yé": "爷耶峫捓揶铘爺瑘釾鋣鎁",
  "yě": "也冶埜野嘢漜壄",
  "yè": "业曳页曵邺夜抴亱拽枼洂頁捙晔枽烨液焆谒堨揲殗腋葉墷楪業煠痷馌僷曅燁璍擖擛曄皣瞱緤鄴靥嶪嶫澲謁餣擫曗瞸鍱擪爗礏鎑饁鵺鐷靨驜瓛鸈",
  yi: "弬",
  "yī": "一乊弌辷衤伊衣医吚壱依祎咿洢悘渏猗畩郼铱壹揖蛜禕嫛漪稦銥嬄撎噫夁瑿鹥繄檹毉醫黟譩鷖黳",
  "yí": "乁仪匜圯夷彵迆冝宐杝沂诒侇宜怡沶狏狋迤迱饴咦姨峓恞拸柂洟珆瓵荑贻迻宧巸扅栘桋眙胰袘貤痍移萓釶椬羠蛦詒貽遗媐暆椸煕誃跠頉颐飴儀熪箷遺嶬彛彜螔頥頤寲嶷簃顊鮧鴺彞彝謻鏔籎觺讉",
  "yǐ": "乚乛乙已以扡迆钇佁攺矣苡叕苢迤迱庡舣蚁釔倚扆笖逘酏偯猗崺攲敧旑鈘鉯鳦裿旖輢嬟敼螘檥礒艤蟻顗轙齮",
  "yì": "乂义亿弋刈忆艺仡匇肊艾议阣亦伇屹异忔芅伿佚劮呓坄役抑杙耴苅译邑佾呭呹妷峄怈怿易枍欥泆炈秇绎衪诣驿俋奕帟帠弈昳枻浂玴疫羿轶唈垼悒挹栺栧欭浥浳益袘袣谊貤勚埶埸悘悥掜殹異羛翊翌萟訳訲豙豛逸釴隿幆敡晹棭殔湙焲焬蛡詍跇軼鄓鈠骮亄兿嗌意溢獈痬睪竩缢義肄裔裛詣勩嫕廙榏潩瘗膉蓺蜴駅億槸毅熠熤熼瘞篒誼镒鹝鹢黓儗劓圛墿嬑嶧憶懌曀殪澺燚瘱瞖穓縊艗薏螠褹寱懝斁曎檍歝燡燱翳翼臆貖鮨癔藝藙贀鎰镱繶繹豷霬鯣鶃鶂鶍瀷蘙議譯醳醷饐囈鐿鷁鷊懿襼驛鷧虉鸃鷾讛齸",
  "yīn": "囙因阥阴侌垔姻洇茵荫音骃栶欭氤陰凐秵裀铟陻隂喑堙婣愔湮筃絪歅溵禋蒑蔭慇瘖銦磤緸鞇諲霒駰噾濦闉霠齗韾",
  "yín": "冘乑伒吟圻犾苂斦烎垠泿圁峾狺珢荶訔訚唫婬寅崟崯淫訡银鈝龂滛碒鄞夤蔩銀龈噖殥璌誾嚚檭蟫霪齦鷣",
  "yǐn": "廴尹引吲饮粌蚓硍赺淾鈏飲隠靷飮朄輑磤趛檃瘾隱嶾濥縯螾檼蘟櫽癮讔",
  "yìn": "廴印茚洕胤荫垽梀堷湚猌飲廕隠飮窨酳慭癊憗憖隱鮣懚",
  "yīng": "応旲英柍荥偀桜珱莺啨婴媖愥渶绬朠楧焽焸煐瑛嫈碤锳嘤撄甇緓缨罂蝧賏樱璎噟罃褮霙鴬鹦嬰應膺韺甖鹰鶑鶧嚶孆孾攖瀴罌蘡譍櫻瓔礯譻鶯鑍纓蠳鷪軈鷹鸎鸚",
  "yíng": "夃盁迎茔盈荧浧耺莹営桯萤萦营蛍溁溋萾僌塋嵤楹滢蓥滎潆熒蝇瑩禜蝿嬴營縈螢濙濚濴藀覮謍赢瀅爃蠅鎣巆攍瀛瀠瀯櫿贏灐籝灜籯",
  "yǐng": "矨郢浧梬颍颕颖摬影潁瘿穎頴覮巊廮瀴鐛癭",
  "yìng": "応映眏暎硬媵膡鞕應瀴鱦",
  yo: "喲",
  "yō": "唷喲",
  "yōng": "拥痈邕庸傭嗈鄘雍墉嫞慵滽槦牅牗銿噰壅擁澭郺镛臃癕雝鏞鳙廱灉饔鱅鷛癰",
  "yóng": "喁揘颙顒鰫",
  "yǒng": "永甬咏怺泳俑勈勇栐埇悀柡恿惥愑湧硧詠塎嵱彮愹蛹慂踊鲬噰澭踴鯒",
  "yòng": "用苚砽蒏醟",
  "yōu": "优妋忧攸呦怮泑幽峳浟逌悠羪麀滺憂優鄾嚘懮瀀獶櫌纋耰獿",
  "yóu": "尢冘尤由甴汼沋犹邮怞油肬怣斿柚疣庮秞莜莤莸郵铀偤蚰訧逰揂游猶遊鱿楢猷鈾鲉輏駀蕕蝣魷輶鮋繇櫾",
  "yǒu": "友丣卣苃酉羑栯莠梄聈铕湵楢禉蜏銪槱牖牗黝懮",
  "yòu": "又右幼佑佦侑孧泑狖哊囿姷宥峟柚牰祐诱迶唀梎痏蚴亴貁釉酭誘鼬櫾",
  "yū": "込扜扝纡迃迂穻陓紆唹淤盓瘀箊",
  "yú": "丂亐于邘伃余妤扵杅欤玗玙於盂臾衧鱼乻俞兪捓禺竽舁茰虶娛娯娪娱桙狳谀酑馀渔萸釪隃隅雩魚堣堬婾媀媮崳嵎嵛揄楰渝湡畬腴萮逾骬愚楡榆歈牏瑜艅虞觎漁睮窬舆褕歶羭蕍蝓諛雓餘魣嬩懙澞覦踰歟璵螸輿鍝謣髃鮽旟籅騟鯲蘛轝鰅鷠鸆齵",
  "yǔ": "伛宇屿羽穻俁俣挧禹圄祤偊匬圉庾敔鄅斞萭傴寙楀瑀瘐與語窳頨龉噳嶼懙貐斔穥麌齬",
  "yù": "肀玉驭圫聿芌芋吾妪忬汩灹饫欥育郁俞昱狱禺秗茟俼叞峪彧栯浴砡钰预域堉悆惐捥欲淢淯痏粖翑袬谕逳阈喅喩喻媀寓庽御棛棜棫焴琙琟矞硢硲裕遇飫馭鹆奧愈滪煜稢罭艈蒮蓣誉鈺預僪嫗嶎戫毓澚獄瘉緎蜟蜮語輍銉隩慾潏熨稶蓹薁豫遹鋊鳿澦燏燠蕷藇諭錥閾鴧鴪鴥儥礇禦魊鹬癒礖礜篽醧鵒櫲饇蘌譽鐭霱雤欎驈鬻籞鱊鷸鸒欝軉鬰鬱灪籲爩",
  "yuān": "夗囦肙鸢剈冤弲悁眢鸳寃涴渆渁渊渕惌淵葾棩蒬蜎裷鹓箢鳶蜵駌鋺鴛嬽鵷灁鼘鼝",
  "yuán": "元円贠邧园妧沅芫杬茒垣爰貟原員圆笎蚖袁厡酛傆喛圎媛援湲猨缘鈨鼋園圓塬媴嫄楥溒源猿蒝榞榬辕緣縁蝝蝯褤魭圜橼羱薗螈黿謜轅鎱櫞邍騵鶢鶰厵",
  "yuǎn": "盶逺遠薳鋺",
  "yuàn": "夗妴苑怨院垸衏傆媛掾瑗禐愿裫褑噮願",
  "yuē": "曰曱扚約啘箹矱",
  "yuě": "哕噦",
  "yuè": "月戉兊刖兌妜岄抈礿岳枂泧玥恱栎哾悅悦蚏蚎軏钺阅捳跀跃粤越鈅楽粵鉞說説樂閲閱嬳樾篗髺嶽臒龠擽矆櫟籆瀹蘥黦爚禴趯躍籥鑰鸑籰鸙",
  "yūn": "涒缊蒀暈氲煴蒕氳熅煾奫緼蝹縕赟馧贇",
  "yún": "云勻匀伝囩妘抣沄纭芸昀畇眃秐貟郧員涢紜耘耺鄖雲愪溳筠筼蒷熉澐蕓鋆橒篔縜",
  "yǔn": "允阭夽抎狁玧陨荺殒喗鈗隕煴殞熅馻磒賱霣齫齳",
  "yùn": "孕贠运枟郓恽貟員菀鄆酝傊惲愠缊運慍暈榅煇腪韫韵褞熨緷緼蕰蕴縕薀醖醞餫藴鞰韗韞蘊韻",
  "zā": "帀匝沞迊咂拶桚紥紮鉔噈魳臜臢",
  "zá": "杂沯砸偺喒韴雑襍雜囃囋囐雥",
  "zǎ": "咋偺喒",
  "zāi": "災灾甾哉栽烖畠菑渽溨睵賳",
  "zǎi": "宰崽",
  "zài": "再在扗抂洅傤載酨儎縡",
  "zān": "兂撍糌橵篸簪簮鵤鐕鐟",
  "zán": "偺喒",
  "zǎn": "拶昝桚寁揝噆撍儧攅儹攢趱趲",
  "zàn": "暂暫賛赞錾鄼濽蹔酂瓉贊鏩鏨瓒酇囋灒讃瓚禶穳襸讚饡",
  "zāng": "匨牂羘赃賍臧賘贓髒贜",
  "zǎng": "驵駔",
  "zàng": "奘弉脏塟葬臧蔵銺臓臟",
  "zāo": "傮遭糟蹧醩",
  "záo": "凿鑿",
  "zǎo": "早枣栆蚤棗璅澡璪薻藻",
  "zào": "灶皁皂唣唕造梍喿慥煰艁噪簉燥竃竈譟趮躁",
  "zé": "则択沢咋泎责迮則唶啧帻笮舴責溭滜睪矠飵嘖嫧幘箦蔶樍歵諎赜擇澤皟瞔簀耫礋襗謮賾蠌灂齚齰鸅",
  "zè": "仄庂汄昃昗捑側崱稄",
  "zéi": "贼戝賊鲗蠈鰂鱡",
  "zēn": "撍",
  "zěn": "怎",
  "zèn": "谮譖",
  "zēng": "曽増鄫增憎缯橧璔縡矰磳竲罾繒譄鱛",
  "zěng": "",
  "zèng": "锃綜缯鋥熷甑赠繒鬵贈囎",
  zi: "嗭",
  "zī": "孖孜甾茊兹呲咨姕姿茲栥玆畠紎赀资崰淄秶缁菑谘赼嗞孳嵫椔湽滋粢葘辎鄑孶禌觜訾貲資趑锱稵緕緇鈭镃龇輜鼒澬薋諮趦輺錙髭鲻鍿鎡璾頾頿鯔鶅齍纃鰦齜",
  "zí": "蓻",
  "zǐ": "子吇芓姉姊杍沝矷秄胏呰秭籽耔茈虸笫梓釨啙紫滓訿榟橴",
  "zì": "字自芓秄洓茡荢倳剚恣牸渍眦眥菑胔胾漬",
  "zōng": "宗枞倧骔堫嵏嵕惾棕猣腙葼朡椶潈稯綜緃樅熧緵翪蝬踨踪磫繌鍐豵蹤騌鬃騣鬉鬷鯮鯼鑁",
  "zǒng": "总倊偬捴惣揔搃焧傯蓗嵸摠潀稯総熜緫縂燪縱總",
  "zòng": "昮疭從猔碂粽潨糉緵瘲縦縱繌糭",
  "zōu": "邹驺诹郰陬掫菆棸棷鄒箃緅諏鄹鲰鯫黀騶齱齺",
  "zǒu": "赱走搊鯐",
  "zòu": "奏揍媰楱",
  "zū": "怚柤租菹葅蒩",
  "zú": "卆足倅哫崒崪族椊稡箤踤镞鎐鏃",
  "zǔ": "诅阻组俎柤爼珇祖唨組詛靻鎺",
  "zù": "",
  "zuān": "鉆劗躜鑚躦鑽",
  "zuǎn": "繤缵纂纉籫纘",
  "zuàn": "揝篹賺攥",
  "zuī": "厜朘嗺樶蟕纗",
  "zuí": "",
  "zuǐ": "咀觜嶊嘴噿濢璻",
  "zuì": "冣栬絊酔晬最祽睟稡罪辠槜酻蕞醉嶵檇鋷錊檌欈",
  "zūn": "尊噂墫嶟遵樽繜罇鶎鐏鳟鱒鷷",
  "zǔn": "僔撙繜譐",
  "zùn": "拵捘栫袸銌瀳",
  zuo: "咗",
  "zuō": "嘬穝",
  "zuó": "苲昨柮秨莋捽笮稓筰鈼",
  "zuǒ": "左佐繓",
  "zuò": "作坐阼岝岞怍侳柞祚胙唑座袏做葄葃酢蓙飵諎糳",
  "zhā": "吒咋抯挓柤査哳紥偧紮揸渣楂飵劄摣潳皶樝觰皻譇齄齇",
  "zhá": "札甴軋闸剳蚻铡喋煠牐閘劄箚霅耫鍘譗",
  "zhǎ": "厏拃苲眨砟鲊鲝諎鮓鮺",
  "zhà": "乍吒灹诈怍咤奓柞宱痄蚱喥溠詐搾鲊榨鮓醡",
  "zhāi": "亝哜夈粂捚斋側斎摘榸齊嚌擿齋",
  "zhái": "厇宅翟擇檡",
  "zhǎi": "厏抧窄鉙",
  "zhài": "责债砦責債寨瘵",
  "zhān": "岾怗枬沾毡旃栴粘蛅飦惉詀趈詹閚谵鳽噡嶦薝邅霑氈氊瞻覱鹯旜譫饘鳣驙魙鱣鸇",
  "zhán": "讝",
  "zhǎn": "斩飐展盏斬琖搌盞嶃嶄榐辗颭嫸醆橏輾皽黵",
  "zhàn": "佔战栈桟站偡绽菚嵁棧湛戦碊僝綻嶘戰虥虦覱轏譧欃蘸驏",
  "zhāng": "弡张張章傽鄣嫜彰慞漳獐粻蔁遧暲樟璋餦蟑鏱騿鱆麞",
  "zhǎng": "仉仧兏長掌漲幥礃鞝",
  "zhàng": "丈仗扙帐杖胀账粀帳涱脹痮障墇嶂幛漲賬瘬瘴瞕",
  "zhāo": "佋钊妱巶招昭炤釗啁釽鉊鳭駋鍣皽",
  "zháo": "",
  "zhǎo": "爫找沼菬瑵",
  "zhào": "兆诏枛垗炤狣赵笊肁啅旐棹罀詔照罩箌肈肇趙曌濯燳鮡櫂瞾羄",
  zhe: "嗻",
  "zhē": "嗻嫬遮螫",
  "zhé": "乇厇扸杔歽矺砓籷虴哲埑粍袩啠悊晢晣辄喆棏聑蛰詟搩蜇谪馲摺輒慹磔輙銸辙蟄嚞謫謺鮿轍讁讋",
  "zhě": "者乽啫锗赭踷褶鍺襵",
  "zhè": "柘浙這淛嗻蔗樜鹧蟅鷓",
  "zhèi": "",
  "zhēn": "贞针侦侲帧枮浈珎珍胗貞帪桢眞真砧祯針偵酙寊幀揕湞葴遉嫃搸斟椹楨溱獉甄禎蒖蓁鉁榛槙殝瑧碪禛潧箴樼澵臻薽錱轃鍼籈鱵",
  "zhén": "",
  "zhěn": "诊抮枕姫弫昣轸屒畛疹眕袗紾聄萙竧裖覙診軫嫃缜槙稹駗縝縥辴鬒黰",
  "zhèn": "圳阵纼甽侲挋陣鸩振朕栚紖桭眹赈塦揕絼榐瑱誫賑鋴镇震鴆鎮鎭",
  "zhēng": "凧争佂姃征怔爭糽埩峥炡狰烝眐脀钲埥崝崢掙猙睁聇铮媜揁筝徰睜蒸踭鉦徴箏綪錚徵篜鬇癥鏳",
  "zhěng": "氶抍糽拯掟晸愸撜整",
  "zhèng": "氶证诤郑政徎钲掙幁証塣諍靕鄭憕鴊證",
  "zhī": "之支卮汁芝巵汥呮泜肢栀祗秓胑胝衼倁栺疷祬脂隻梔菭椥臸搘稙綕榰蜘馶憄鳷鴲織鼅蘵",
  "zhí": "执侄妷直秇姪郦値值聀釞埴執淔职戠植犆禃絷臷跖瓡摕摭馽嬂慹漐潪踯樴膱縶職蟙蹠軄躑",
  "zhǐ": "夂止凪劧旨阯坁址帋扺汦沚纸芷坧抧杫祇祉茋咫恉指枳洔砋秖衹轵淽疻紙蚔訨趾軹黹禔筫絺酯墌徴徵槯藢襧",
  "zhì": "至芖坁志忮扻豸制厔垁帙帜斦治炙质迣郅俧峙庢庤挃柣栉洷祑陟娡徏挚捗晊桎歭狾秩致袟贽轾乿偫剬徝掷梽楖猘畤痓痔眰秲秷窒紩翐袠觗貭铚鸷傂崻彘智滞痣蛭骘寘廌搱滍稚筫置跱輊锧雉墆滯潌疐瘈聜製覟誌銍幟憄摨摯潪熫稺膣觯質踬銴鋕擳旘瀄璏緻隲駤鴙儨劕懥擲擿櫛穉螲懫織贄櫍瓆觶騭鯯礩豑鶨騺驇躓鷙鑕豒",
  "zhōng": "夂伀汷刣妐彸忪忠泈炂终柊盅衳钟舯衷終鈡幒蔠蜙锺銿螤鴤螽鍾斔鼨蹱鐘籦",
  "zhǒng": "肿冢喠尰塚歱煄腫瘇種徸踵穜",
  "zhòng": "仲众妕狆祌茽衶蚛偅眾堹媑筗衆種緟諥",
  "zhōu": "州舟诌侜周洲炿诪烐珘辀郮啁婤徟掫淍矪週鸼喌赒輈翢銂賙輖霌駲嚋盩謅鵃騆譸",
  "zhóu": "妯軸碡",
  "zhǒu": "肘帚疛胕菷晭睭箒鯞",
  "zhòu": "纣伷呪咒宙绉冑咮昼紂胄荮皱酎晝粙椆葤詋軸甃僽皺駎噣縐繇薵骤籀籕籒驟",
  "zhū": "侏诛邾洙茱株珠诸猪硃秼袾铢絑蛛誅跦槠潴蕏蝫銖橥諸豬駯鮢鴸瀦藸鼄櫧櫫鯺蠩",
  "zhú": "朮竹竺炢笁茿烛窋逐笜舳逫瘃蓫敱磩築篴斀燭蠋躅鱁劚孎灟斸曯欘爥蠾钃",
  "zhǔ": "丶主劯宔拄砫罜陼帾渚煑煮詝褚嘱濐燝麈瞩屬囑鸀矚",
  "zhù": "伫佇住纻芧苎坾拀杼注苧贮迬驻乼壴柱柷殶炷祝疰眝砫祩竚莇紵紸羜蛀尌嵀註貯跓軴铸筯鉒飳馵嗻墸箸翥樦澍鋳駐築篫麆簗櫡鑄",
  "zhuā": "抓挝撾檛膼簻髽",
  "zhuǎ": "爫",
  "zhuāi": "拽",
  "zhuǎi": "跩",
  "zhuài": "拽睉",
  "zhuān": "专叀専恮砖耑專剸鄟塼嫥漙瑼甎磗膞颛磚諯篿蟤顓鱄",
  "zhuǎn": "孨転膞竱轉",
  "zhuàn": "灷啭転堟蒃傳瑑腞僎僝赚撰篆馔篹縳襈賺簨贃譔饌囀籑",
  "zhuāng": "妆庄妝庒荘娤桩莊梉湷粧装裝樁糚",
  "zhuǎng": "奘",
  "zhuàng": "壮壯状狀壵焋僮漴撞戅戆戇",
  "zhuī": "隹骓锥錐騅鵻",
  "zhuǐ": "沝",
  "zhuì": "坠笍奞娷缀隊惴甀缒腏畷硾膇墜綴赘縋諈醊錣礈贅鑆",
  "zhūn": "圫宒忳迍肫窀谆啍諄衠",
  "zhǔn": "准埻凖準稕綧",
  "zhùn": "旽訰稕綧",
  "zhuō": "拙炪倬捉桌梲棁涿淖棳棹焯窧槕穛鐯穱",
  "zhuó": "圴彴汋犳灼卓叕妰茁斫浊丵剢捔浞烵诼酌啄啅娺聉斱斮晫椓琸硺窡罬蓔墌撯擆斲禚劅諁諑趠鋜噣濁燋篧擢斀斵濯藋櫡謶镯繳鵫灂蠗鐲籗鷟蠿籱",
  "zhuò": "",
  "chǎng,ān,hàn": "厂",
  "dīng,zhēng": "丁",
  "bǔ,bo": "卜",
  "jǐ,jī": "几",
  "le,liǎo": "了",
  "gān,gàn": "干",
  "dà,dài,tài": "大",
  "yǔ,yù,yú": "与",
  "shàng,shǎng": "上",
  "wàn,mò": "万",
  "gè,gě": "个各",
  "me,mó,ma,yāo": "么",
  "guǎng,ān": "广",
  "wáng,wú": "亡",
  "nǚ,rǔ": "女",
  "chā,chá,chǎ": "叉",
  "wáng,wàng": "王",
  "fū,fú": "夫",
  "zhā,zā,zhá": "扎",
  "bù,fǒu": "不",
  "qū,ōu": "区",
  "chē,jū": "车",
  "qiè,qiē": "切",
  "wǎ,wà": "瓦",
  "tún,zhūn": "屯",
  "shǎo,shào": "少",
  "zhōng,zhòng": "中",
  "nèi,nà": "内",
  "jiàn,xiàn": "见",
  "cháng,zhǎng": "长",
  "shén,shí": "什",
  "piàn,piān": "片",
  "pú,pū": "仆",
  "huà,huā": "化",
  "chóu,qiú": "仇",
  "zhuǎ,zhǎo": "爪",
  "jǐn,jìn": "仅",
  "fù,fǔ": "父",
  "cóng,zòng": "从",
  "fēn,fèn": "分",
  "shì,zhī": "氏",
  "fēng,fěng": "风",
  "gōu,gòu": "勾",
  "liù,lù": "六",
  "dǒu,dòu": "斗",
  "wèi,wéi": "为",
  "chǐ,chě": "尺",
  "yǔ,yú": "予",
  "dǎ,dá": "打",
  "zhèng,zhēng": "正症挣",
  "bā,pá": "扒",
  "jié,jiē": "节结",
  "shù,shú,zhú": "术",
  "kě,kè": "可",
  "shí,dàn": "石",
  "kǎ,qiǎ": "卡",
  "běi,bèi": "北",
  "zhàn,zhān": "占",
  "qiě,jū": "且",
  "yè,xié": "叶",
  "hào,háo": "号",
  "zhī,zhǐ": "只",
  "dāo,tāo": "叨",
  "zǎi,zǐ,zī": "仔",
  "lìng,líng,lǐng": "令",
  "lè,yuè": "乐",
  "jù,gōu": "句",
  "chù,chǔ": "处",
  "tóu,tou": "头",
  "níng,nìng,zhù": "宁",
  "zhào,shào": "召",
  "fā,fà": "发",
  "tái,tāi": "台苔",
  "káng,gāng": "扛",
  "dì,de": "地",
  "sǎo,sào": "扫",
  "chǎng,cháng": "场",
  "pǔ,pò,pō,piáo": "朴",
  "guò,guo,guō": "过",
  "yā,yà": "压",
  "yǒu,yòu": "有",
  "kuā,kuà": "夸",
  "xié,yá,yé,yú,xú": "邪",
  "jiá,jiā,gā,xiá": "夹",
  "huà,huá": "划",
  "dāng,dàng": "当",
  "tù,tǔ": "吐",
  "xià,hè": "吓",
  "tóng,tòng": "同",
  "qū,qǔ": "曲",
  "ma,má,mǎ": "吗",
  "qǐ,kǎi": "岂",
  "zhū,shú": "朱",
  "chuán,zhuàn": "传",
  "xiū,xǔ": "休",
  "rèn,rén": "任",
  "huá,huà,huā": "华",
  "jià,jiè,jie": "价",
  "fèn,bīn": "份",
  "yǎng,áng": "仰",
  "xiě,xuè": "血",
  "sì,shì": "似",
  "háng,xíng": "行",
  "huì,kuài": "会",
  "hé,gě": "合",
  "chuàng,chuāng": "创",
  "chōng,chòng": "冲",
  "qí,jì,zī,zhāi": "齐",
  "yáng,xiáng": "羊",
  "bìng,bīng": "并",
  "hàn,hán": "汗",
  "tāng,shāng": "汤",
  "xīng,xìng": "兴",
  "xǔ,hǔ": "许",
  "lùn,lún": "论",
  "nà,nǎ,nèi,nā": "那",
  "jìn,jǐn": "尽",
  "sūn,xùn": "孙",
  "xì,hū": "戏",
  "hǎo,hào": "好",
  "tā,jiě": "她",
  "guān,guàn": "观冠",
  "hóng,gōng": "红",
  "xiān,qiàn": "纤",
  "jì,jǐ": "纪济",
  "yuē,yāo": "约",
  "nòng,lòng": "弄",
  "yuǎn,yuàn": "远",
  "huài,pēi,pī,péi": "坏",
  "zhé,shé,zhē": "折",
  "qiǎng,qiāng,chēng": "抢",
  "ké,qiào": "壳",
  "fāng,fáng": "坊",
  "bǎ,bà": "把",
  "gān,gǎn": "杆",
  "sū,sù": "苏",
  "gàng,gāng": "杠",
  "gèng,gēng": "更",
  "lì,lí": "丽",
  "hái,huán": "还",
  "fǒu,pǐ": "否",
  "xiàn,xuán": "县",
  "zhù,chú": "助",
  "ya,yā": "呀",
  "chǎo,chāo": "吵",
  "yuán,yún,yùn": "员",
  "ba,bā": "吧",
  "bié,biè": "别",
  "dīng,dìng": "钉",
  "gū,gù": "估",
  "hé,hē,hè": "何",
  "tǐ,tī,bèn": "体",
  "bó,bǎi,bà": "伯",
  "yòng,yōng": "佣",
  "fó,fú,bì,bó": "佛",
  "dù,dǔ": "肚",
  "guī,jūn,qiū": "龟",
  "jiǎo,jué": "角",
  "tiáo,tiāo": "条",
  "xì,jì": "系",
  "yìng,yīng": "应",
  "zhè,zhèi": "这",
  "jiān,jiàn": "间监",
  "mēn,mèn": "闷",
  "dì,tì,tuí": "弟",
  "shā,shà": "沙",
  "shà,shā": "煞",
  "méi,mò": "没",
  "shěn,chén": "沈",
  "shí,zhì": "识",
  "niào,suī": "尿",
  "wěi,yǐ": "尾",
  "ē,ā": "阿",
  "jìn,jìng": "劲",
  "zòng,zǒng": "纵",
  "wén,wèn": "纹",
  "mǒ,mò,mā": "抹",
  "dān,dàn,dǎn": "担",
  "chāi,cā": "拆",
  "jū,gōu": "拘",
  "lā,lá": "拉",
  "bàn,pàn": "拌",
  "zé,zhái": "择",
  "qí,jī": "其奇",
  "ruò,rě": "若",
  "píng,pēng": "苹",
  "zhī,qí": "枝",
  "guì,jǔ": "柜",
  "sàng,sāng": "丧",
  "cì,cī": "刺",
  "yǔ,yù": "雨语",
  "bēn,bèn": "奔",
  "qī,qì": "妻",
  "zhuǎn,zhuàn,zhuǎi": "转",
  "xiē,suò": "些",
  "ne,ní": "呢",
  "tiě,tiē,tiè,": "帖",
  "lǐng,líng": "岭",
  "zhī,zhì": "知织",
  "hé,hè,huó,huò,hú": "和",
  "gòng,gōng": "供共",
  "wěi,wēi": "委",
  "cè,zè,zhāi": "侧",
  "pò,pǎi": "迫",
  "de,dì,dí": "的",
  "cǎi,cài": "采",
  "fú,fù": "服",
  "dǐ,de": "底",
  "jìng,chēng": "净",
  "juàn,juǎn": "卷",
  "quàn,xuàn": "券",
  "dān,shàn,chán": "单",
  "qiǎn,jiān": "浅",
  "xiè,yì": "泄",
  "pō,bó": "泊",
  "pào,pāo": "泡",
  "ní,nì": "泥",
  "zé,shì": "泽",
  "kōng,kòng,kǒng": "空",
  "láng,làng": "郎",
  "xiáng,yáng": "详",
  "lì,dài": "隶",
  "shuā,shuà": "刷",
  "jiàng,xiáng": "降",
  "cān,shēn,cēn,sān": "参",
  "dú,dài": "毒",
  "kuà,kū": "挎",
  "dǎng,dàng": "挡",
  "kuò,guā": "括",
  "shí,shè": "拾",
  "tiāo,tiǎo": "挑",
  "shèn,shén": "甚",
  "xiàng,hàng": "巷",
  "nán,nā": "南",
  "xiāng,xiàng": "相",
  "chá,zhā": "查",
  "bǎi,bó,bò": "柏",
  "yào,yāo": "要",
  "yán,yàn": "研",
  "qì,qiè": "砌",
  "bèi,bēi": "背",
  "shěng,xǐng": "省",
  "xiāo,xuē": "削",
  "hǒng,hōng,hòng": "哄",
  "mào,mò": "冒",
  "yǎ,yā": "哑",
  "sī,sāi": "思",
  "mǎ,mā,mà": "蚂",
  "huá,huā": "哗",
  "yè,yàn,yān": "咽",
  "zán,zǎ": "咱",
  "hā,hǎ,hà": "哈",
  "nǎ,něi,na,né": "哪",
  "hāi,ké": "咳",
  "gǔ,gū": "骨",
  "gāng,gàng": "钢",
  "yào,yuè": "钥",
  "kàn,kān": "看",
  "zhòng,zhǒng,chóng": "种",
  "biàn,pián": "便",
  "zhòng,chóng": "重",
  "xìn,shēn": "信",
  "zhuī,duī": "追",
  "dài,dāi": "待",
  "shí,sì,yì": "食",
  "mài,mò": "脉",
  "jiāng,jiàng": "将浆",
  "dù,duó": "度",
  "qīn,qìng": "亲",
  "chà,chā,chāi,cī": "差",
  "zhà,zhá": "炸",
  "pào,páo,bāo": "炮",
  "sǎ,xǐ": "洒",
  "xǐ,xiǎn": "洗",
  "jué,jiào": "觉",
  "biǎn,piān": "扁",
  "shuō,shuì,yuè": "说",
  "lǎo,mǔ": "姥",
  "gěi,jǐ": "给",
  "luò,lào": "络",
  "zǎi,zài": "载",
  "mái,mán": "埋",
  "shāo,shào": "捎稍",
  "dū,dōu": "都",
  "ái,āi": "挨",
  "mò,mù": "莫",
  "è,wù,ě,wū": "恶",
  "xiào,jiào": "校",
  "hé,hú": "核",
  "yūn,yùn": "晕",
  "huàng,huǎng": "晃",
  "ài,āi": "唉",
  "ā,á,ǎ,à,a": "啊",
  "bà,ba,pí": "罢",
  "zuàn,zuān": "钻",
  "qiān,yán": "铅",
  "chéng,shèng": "乘",
  "mì,bì": "秘泌",
  "chēng,chèn,chèng": "称",
  "dào,dǎo": "倒",
  "tǎng,cháng": "倘",
  "chàng,chāng": "倡",
  "chòu,xiù": "臭",
  "shè,yè,yì": "射",
  "gē,gé": "胳搁",
  "shuāi,cuī": "衰",
  "liáng,liàng": "凉量",
  "chù,xù": "畜",
  "páng,bàng": "旁磅",
  "zhǎng,zhàng": "涨",
  "yǒng,chōng": "涌",
  "qiāo,qiǎo": "悄",
  "jiā,jia,jie": "迦家",
  "dú,dòu": "读",
  "shàn,shān": "扇",
  "shān,shàn": "苫",
  "bèi,pī": "被",
  "tiáo,diào,zhōu": "调",
  "bō,bāo": "剥",
  "néng,nài": "能",
  "nán,nàn,nuó": "难",
  "pái,pǎi": "排",
  "jiào,jiāo": "教",
  "jù,jū": "据",
  "zhù,zhuó,zhe": "著",
  "jūn,jùn": "菌",
  "lè,lēi": "勒",
  "shāo,sào": "梢",
  "fù,pì": "副",
  "piào,piāo": "票",
  "shèng,chéng": "盛",
  "què,qiāo,qiǎo": "雀",
  "chí,shi": "匙",
  "mī,mí": "眯",
  "la,lā": "啦",
  "shé,yí": "蛇",
  "lèi,léi,lěi": "累",
  "zhǎn,chán": "崭",
  "quān,juàn,juān": "圈",
  "lóng,lǒng": "笼",
  "dé,děi,de": "得",
  "jiǎ,jià": "假",
  "māo,máo": "猫",
  "xuán,xuàn": "旋",
  "zhe,zhuó,zháo,zhāo": "着",
  "lǜ,shuài": "率",
  "gài,gě,hé": "盖",
  "lín,lìn": "淋",
  "qú,jù": "渠",
  "jiàn,jiān": "渐溅",
  "hùn,hún": "混",
  "sù,xiǔ,xiù": "宿",
  "tán,dàn": "弹",
  "yǐn,yìn": "隐",
  "jǐng,gěng": "颈",
  "lǜ,lù": "绿",
  "qū,cù": "趋",
  "tí,dī,dǐ": "提",
  "jiē,qì": "揭",
  "lǒu,lōu": "搂",
  "qī,jī": "期",
  "sàn,sǎn": "散",
  "gě,gé": "葛",
  "zhāo,cháo": "朝",
  "luò,là,lào": "落",
  "yǐ,yī": "椅",
  "gùn,hùn": "棍",
  "zhí,shi": "殖",
  "xià,shà": "厦",
  "liè,liě": "裂",
  "jǐng,yǐng": "景",
  "pēn,pèn": "喷",
  "pǎo,páo": "跑",
  "hē,hè,yè": "喝",
  "pù,pū": "铺",
  "zhù,zhú": "筑",
  "dá,dā": "答",
  "bǎo,bǔ,pù": "堡",
  "ào,yù": "奥",
  "fān,pān": "番",
  "là,xī": "腊",
  "gǎng,jiǎng": "港",
  "céng,zēng": "曾",
  "yú,tōu": "愉",
  "qiáng,qiǎng,jiàng": "强",
  "shǔ,zhǔ": "属",
  "zhōu,yù": "粥",
  "shè,niè": "摄",
  "tián,zhèn": "填",
  "méng,mēng,měng": "蒙",
  "jìn,jīn": "禁",
  "lù,liù": "碌",
  "tiào,táo": "跳",
  "é,yǐ": "蛾",
  "jiě,jiè,xiè": "解",
  "shù,shǔ,shuò": "数",
  "liū,liù": "溜",
  "sāi,sài,sè": "塞",
  "pì,bì": "辟",
  "fèng,féng": "缝",
  "piě,piē": "撇",
  "mó,mú": "模",
  "bǎng,bàng": "榜",
  "shang,cháng": "裳",
  "xiān,xiǎn": "鲜",
  "yí,nǐ": "疑",
  "gāo,gào": "膏",
  "piāo,piào,piǎo": "漂",
  "suō,sù": "缩",
  "qù,cù": "趣",
  "sā,sǎ": "撒",
  "tàng,tāng": "趟",
  "héng,hèng": "横",
  "mán,mén": "瞒",
  "bào,pù": "暴",
  "mó,mā": "摩",
  "hú,hū,hù": "糊",
  "pī,pǐ": "劈",
  "yàn,yān": "燕",
  "báo,bó,bò": "薄",
  "mó,mò": "磨",
  "jiǎo,zhuó": "缴",
  "cáng,zàng": "藏",
  "fán,pó": "繁",
  "bì,bei": "臂",
  "chàn,zhàn": "颤",
  "jiāng,qiáng": "疆",
  "jiáo,jué,jiào": "嚼",
  "rǎng,rāng": "嚷",
  "lù,lòu": "露",
  "náng,nāng": "囊",
  "hāng,bèn": "夯",
  "āo,wā": "凹",
  "féng,píng": "冯",
  "xū,yù": "吁",
  "lèi,lē": "肋",
  "lūn,lún": "抡",
  "jiè,gài": "芥",
  "xīn,xìn": "芯",
  "chā,chà": "杈",
  "xiāo,xiào": "肖",
  "zhī,zī": "吱",
  "ǒu,ōu,òu": "呕",
  "nà,nè": "呐",
  "qiàng,qiāng": "呛",
  "tún,dùn": "囤",
  "kēng,háng": "吭",
  "diàn,tián": "佃",
  "sì,cì": "伺",
  "diàn,tián,shèng": "甸",
  "páo,bào": "刨",
  "duì,ruì,yuè": "兑",
  "kē,kě": "坷",
  "tuò,tà,zhí": "拓",
  "fú,bì": "拂",
  "nǐng,níng,nìng": "拧",
  "ào,ǎo,niù": "拗",
  "kē,hē": "苛",
  "yān,yǎn": "奄",
  "hē,a,kē": "呵",
  "gā,kā": "咖",
  "jiǎo,yáo": "侥",
  "chà,shā": "刹",
  "nüè,yào": "疟",
  "máng,méng": "氓",
  "gē,yì": "疙",
  "jǔ,jù": "沮",
  "zú,cù": "卒",
  "wǎn,yuān": "宛",
  "mí,mǐ": "弥",
  "qì,qiè,xiè": "契",
  "xié,jiā": "挟",
  "duò,duǒ": "垛",
  "zhà,shān,shi,cè": "栅",
  "bó,bèi": "勃",
  "zhóu,zhòu": "轴",
  "liē,liě,lié,lie": "咧",
  "yo,yō": "哟",
  "qiào,xiào": "俏",
  "hóu,hòu": "侯",
  "píng,bǐng": "屏",
  "nà,nuó": "娜",
  "pá,bà": "耙",
  "qī,xī": "栖",
  "jiǎ,gǔ": "贾",
  "láo,lào": "唠",
  "bàng,bèng": "蚌",
  "gōng,zhōng": "蚣",
  "li,lǐ,lī": "哩",
  "juè,jué": "倔",
  "yīn,yān,yǐn": "殷",
  "wō,guō": "涡",
  "lào,luò": "烙",
  "niǎn,niē": "捻",
  "yè,yē": "掖",
  "chān,xiān,càn,shǎn": "掺",
  "dǎn,shàn": "掸",
  "fēi,fěi": "菲",
  "qián,gān": "乾",
  "shuò,shí": "硕",
  "luō,luó,luo": "啰",
  "hǔ,xià": "唬",
  "dāng,chēng": "铛",
  "xiǎn,xǐ": "铣",
  "jiǎo,jiáo": "矫",
  "kuǐ,guī": "傀",
  "jì,zhài": "祭",
  "tǎng,chǎng": "淌",
  "chún,zhūn": "淳",
  "wèi,yù": "尉",
  "duò,huī": "堕",
  "chuò,chāo": "绰",
  "bēng,běng,bèng": "绷",
  "zōng,zèng": "综",
  "zhuó,zuó": "琢",
  "chuǎi,chuài,chuāi,tuán,zhuī": "揣",
  "péng,bāng": "彭",
  "zhuī,chuí": "椎",
  "léng,lēng,líng": "棱",
  "qiào,qiáo": "翘",
  "zhā,chā": "喳",
  "há,gé": "蛤",
  "qiàn,kàn": "嵌",
  "yān,ā": "腌",
  "dūn,duì": "敦",
  "kuì,huì": "溃",
  "sāo,sǎo": "骚",
  "kǎi,jiē": "楷",
  "pín,bīn": "频",
  "liú,liù": "馏",
  "nì,niào": "溺",
  "jiǎo,chāo": "剿",
  "áo,āo": "熬",
  "màn,wàn": "蔓",
  "chá,chā": "碴",
  "xūn,xùn": "熏",
  "da,dá": "瘩",
  "tuì,tùn": "褪",
  "liáo,liāo": "撩",
  "cuō,zuǒ": "撮",
  "cháo,zhāo": "嘲",
  "hēi,mò": "嘿",
  "zhuàng,chuáng": "幢",
  "jī,qǐ": "稽",
  "biě,biē": "瘪",
  "liáo,lào,lǎo": "潦",
  "chéng,dèng": "澄",
  "lèi,léi": "擂",
  "mò,má": "蟆",
  "liáo,liǎo": "燎",
  "liào,liǎo": "瞭",
  "sào,sāo": "臊",
  "mí,méi": "糜",
  "huò,huō,huá": "豁",
  "pù,bào": "瀑",
  "zǎn,cuán": "攒",
  "bò,bǒ": "簸",
  "bó,bù": "簿"
}));
ho.exports = $o.convert.bind($o), ho.exports.compare = $o.compare.bind($o), ho.exports.STYLE_NORMAL = jo.STYLE_NORMAL, ho.exports.STYLE_TONE = jo.STYLE_TONE, ho.exports.STYLE_TONE2 = jo.STYLE_TONE2, ho.exports.STYLE_TO3NE = jo.STYLE_TO3NE, ho.exports.STYLE_INITIALS = jo.STYLE_INITIALS, ho.exports.STYLE_FIRST_LETTER = jo.STYLE_FIRST_LETTER;
var Ao = ho.exports;

var Oo = function Oo(e) {
  if (!Array.isArray(e)) throw new TypeError("params muse be array.");
  if (!e.length) return [];
  var t = [];
  return (e = (e = e.map(function (e) {
    if (!e.name) return new Error("the data must includes `name` props");
    var t = Ao(e.name);
    return c(s({}, e), {
      firstCode: t[0][0].charAt(0).toUpperCase()
    });
  })).sort(function (e, t) {
    return e.firstCode.localeCompare(t.firstCode);
  })).forEach(function (e) {
    var n = t.findIndex(function (t) {
      return t.title === e.firstCode;
    });
    n <= -1 ? t.push({
      title: e.firstCode,
      list: [].concat(e)
    }) : t[n] = {
      title: e.firstCode,
      list: t[n].list.concat(e)
    };
  }), t;
},
    _Q50 = Q("address"),
    Bo = _Q50.create,
    Eo = _Q50.componentName;

var qo = Bo({
  inheritAttrs: !1,
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: "请选择所在地区"
    },
    province: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    city: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    country: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    town: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isShowCustomAddress: {
      type: Boolean,
      default: !0
    },
    existAddress: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    existAddressTitle: {
      type: String,
      default: "配送至"
    },
    customAndExistTitle: {
      type: String,
      default: "选择其他地址"
    },
    defaultIcon: {
      type: String,
      default: "location2"
    },
    selectedIcon: {
      type: String,
      default: "Check"
    },
    closeBtnIcon: {
      type: String,
      default: "circle-close"
    },
    backBtnIcon: {
      type: String,
      default: "left"
    }
  },
  components: {
    "nut-icon": ve,
    "nut-popup": Tt
  },
  emits: ["update:visible", "type", "change", "selected", "close", "close-mask", "switch-module"],
  setup: function setup(e, _ref69) {
    var t = _ref69.emit;

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "f"])(function () {
      return Object(E_test_projects_google_doodles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Eo, !0);
    }),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      city: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      country: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      town: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null)
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.type),
        c = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(["province", "city", "country", "town"]),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: Oo(e.province),
      city: Oo(e.city),
      country: Oo(e.country),
      town: Oo(e.town)
    }),
        h = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: {},
      city: {},
      country: {},
      town: {}
    });

    var g = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({});

    var m = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("self"),
        y = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(20),
        f = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        v = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      anchorIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: !1,
      currentIndex: 0
    }),
        b = function b() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "self";
      e.closeBtnIcon && (m.value = "cross" == t ? "cross" : "self", a.value = !1);
    },
        k = function k() {
      v.anchorIndex = 0, v.listHeight = [], v.listGroup = [], v.currentIndex = 0, v.scrollStart = !1, v.touchState = {
        y1: 0,
        y2: 0
      };
    },
        x = function x() {
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().selectAll(".".concat(r.value[c.value])).boundingClientRect(function (e) {
          e.forEach(function (e) {
            e.width > 0 && (y.value = e.left);
          });
        }).exec();
      }, 100);
    },
        w = function w() {
      for (var _e7 = 0; _e7 < r.value.length; _e7++) {
        h[r.value[_e7]] = {};
      }

      c.value = 0, x();
    },
        S = function S() {
      var e = Object.assign({
        addressIdStr: "",
        addressStr: ""
      }, h),
          n = {
        data: {},
        type: i.value
      };

      if ("custom" == i.value) {
        var _t12 = e.province,
            _l6 = e.city,
            _o7 = e.country,
            _a4 = e.town;
        e.addressIdStr = [_t12.id || 0, _l6.id || 0, _o7.id || 0, _a4.id || 0].join("_"), e.addressStr = [_t12.name, _l6.name, _o7.name, _a4.name].join(""), n.data = e;
      } else n.data = g;

      w(), "self" == m.value ? t("close", n) : t("close-mask", {
        closeWay: m
      }), t("update:visible", !1);
    },
        C = function C(e) {
      (e || 0 === e) && (v.listHeight.length || function () {
        var e = 0;
        v.listHeight.push(e);

        for (var _t13 = 0; _t13 < v.listGroup.length; _t13++) {
          e += v.listGroup[_t13].clientHeight, v.listHeight.push(e);
        }
      }(), e < 0 && (e = 0), e > v.listHeight.length - 2 && (e = v.listHeight.length - 2), v.currentIndex = e, f.value.scrollTo(0, v.listHeight[e]));
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.visible;
    }, function (e) {
      a.value = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return a.value;
    }, function (e) {
      0 == e && S();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.province;
    }, function (e) {
      p.province = Oo(e);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.city;
    }, function (e) {
      p.city = Oo(e);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.country;
    }, function (e) {
      p.country = Oo(e);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.town;
    }, function (e) {
      p.town = Oo(e);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "J"])(function () {
      return e.existAddress;
    }, function (e) {
      e.forEach(function (e, t) {
        e.selectedAddress && (g = e);
      });
    }), s(s(s({
      classes: n,
      showPopup: a,
      privateType: i,
      tabIndex: c,
      tabName: r,
      regionList: p,
      selectedRegion: h,
      selectedExistAddress: g,
      switchModule: function switchModule() {
        "exist" == i.value ? i.value = "custom" : i.value = "exist", w(), t("switch-module", {
          type: i.value
        });
      },
      closeWay: m,
      close: S,
      getTabName: function getTabName(e, t) {
        return e.name || c.value < t ? e.name : "请选择";
      },
      nextAreaList: function nextAreaList(e) {
        var n = {
          next: "",
          value: "",
          custom: r.value[c.value]
        };
        h[r.value[c.value]] = e;

        for (var _t14 = c.value; _t14 < c.value - 1; _t14++) {
          h[r.value[_t14 + 1]] = {};
        }

        c.value < 3 ? (c.value = c.value + 1, x(), n.next = r.value[c.value], n.value = e, t("change", n)) : b(), k(), f.value.scrollTo(0, 0);
      },
      regionLine: l,
      lineDistance: y,
      changeRegionTab: function changeRegionTab(e, t, n) {
        c.value = n, x();
      },
      selectedExist: function selectedExist(n) {
        var l = e.existAddress;
        var o = {};
        l.forEach(function (e, t) {
          e && e.selectedAddress && (o = e), e.selectedAddress = !1;
        }), n.selectedAddress = !0, g = n, t("selected", o, n, l), b();
      },
      clickOverlay: function clickOverlay() {
        m.value = "mask";
      },
      handClose: b,
      touchStart: function touchStart(e) {
        v.scrollStart = !0;

        var t = function (e, t, n) {
          var l = "data-";
          return n ? e.setAttribute(l + t, n) : +e.getAttribute(l + t);
        }(e.target, "index"),
            n = e.touches[0];

        v.touchState.y1 = n.pageY, v.anchorIndex = t, v.currentIndex = t, C(t);
      },
      touchMove: function touchMove(e) {
        var t = e.touches[0];
        v.touchState.y2 = t.pageY;
        var n = (v.touchState.y2 - v.touchState.y1) / 23 | 0;
        v.currentIndex = v.anchorIndex + n, C(v.currentIndex);
      },
      touchEnd: function touchEnd(e) {
        k();
      },
      setListGroup: function setListGroup(e) {
        Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "s"])(function () {
          v.listGroup.includes(e) || null == e || v.listGroup.push(e);
        });
      },
      listview: f
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(v)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(o));
  }
});
var Lo = {
  class: "region-group",
  ref: "listview"
},
    Vo = {
  class: "region-item-code"
},
    Po = {
  class: "region-con-codes"
},
    Mo = {
  class: "exist-address-group"
},
    Ro = {
  class: "exist-ul"
},
    Ho = {
  class: "exist-item-info"
},
    Yo = {
  key: 0,
  class: "exist-item-info-top"
},
    Fo = {
  class: "exist-item-info-name"
},
    Wo = {
  class: "exist-item-info-phone"
},
    Xo = {
  class: "exist-item-info-bottom"
},
    Uo = {
  class: "btn"
};

qo.render = function (e, t, n, l, o, a) {
  var i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-icon"),
      s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("view-block"),
      c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "E"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(c, {
    position: "bottom",
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[6] || (t[6] = function (t) {
      return e.closeWay = "self";
    }),
    visible: e.showPopup,
    "onUpdate:visible": t[7] || (t[7] = function (t) {
      return e.showPopup = t;
    }),
    class: e.classes
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
        class: "nut-address"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
            class: "nut-address__header"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "arrow-back",
                onClick: e.switchModule
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return ["custom" == e.privateType && "exist" == e.type && e.backBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
                    key: 0,
                    name: e.backBtnIcon,
                    color: "#cccccc"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
                }),
                _: 1
              }, 8, ["onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "nut-address__header__title"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("custom" == e.privateType ? e.customAddressTitle : e.existAddressTitle), 1)];
                }),
                _: 1
              }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "arrow-close",
                onClick: t[1] || (t[1] = function (t) {
                  return e.handClose("cross");
                })
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [e.closeBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
                    key: 0,
                    name: e.closeBtnIcon,
                    color: "#cccccc",
                    size: "18px"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), "custom" == e.privateType ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
            key: 0,
            class: "custom-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                class: "region-tab"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.selectedRegion, function (t, n, l) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
                      class: ["tab-item", [l == e.tabIndex ? "active" : "", n]],
                      key: l,
                      ref: n,
                      onClick: function onClick(o) {
                        return e.changeRegionTab(t, n, l);
                      }
                    }, {
                      default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                        return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.getTabName(t, l)), 1)];
                      }),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128)), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(s, {
                    class: "region-tab-line",
                    ref: "regionLine",
                    style: {
                      left: e.lineDistance + "px"
                    }
                  }, null, 8, ["style"])];
                }),
                _: 1
              }), e.regionList[e.tabName[e.tabIndex]].length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
                key: 0,
                class: "region-con"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("ul", Lo, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.regionList[e.tabName[e.tabIndex]], function (t) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("li", {
                      class: "region-item",
                      key: t.title,
                      ref: e.setListGroup
                    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Vo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.title), 1), (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(t.list, function (t) {
                      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("div", {
                        class: ["region-item-name", [e.selectedRegion[e.tabName[e.tabIndex]].id == t.id ? "active" : ""]],
                        key: t.id,
                        onClick: function onClick(n) {
                          return e.nextAreaList(t);
                        }
                      }, [e.selectedRegion[e.tabName[e.tabIndex]].id == t.id ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(i, {
                        key: 0,
                        class: "region-item-icon",
                        type: "self",
                        name: e.selectedIcon,
                        color: "#FA2C19",
                        size: "13px"
                      }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "k"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.name), 1)], 10, ["onClick"]);
                    }), 128))], 512);
                  }), 128))], 512), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "M"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", {
                    class: "region-con-current-code"
                  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.regionList[e.tabName[e.tabIndex]][e.currentIndex].title), 513), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.scrollStart]]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", {
                    class: "region-con-codes-wrapper",
                    onTouchstart: t[2] || (t[2] = function () {
                      return e.touchStart && e.touchStart.apply(e, arguments);
                    }),
                    onTouchmove: t[3] || (t[3] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
                      return e.touchMove && e.touchMove.apply(e, arguments);
                    }, ["stop", "prevent"])),
                    onTouchend: t[4] || (t[4] = function () {
                      return e.touchEnd && e.touchEnd.apply(e, arguments);
                    })
                  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Po, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.regionList[e.tabName[e.tabIndex]], function (e, t) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("div", {
                      class: "region-con-codes-item",
                      "data-index": t,
                      key: e.title
                    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 9, ["data-index"]);
                  }), 128))])], 32)];
                }),
                _: 1
              })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
            }),
            _: 1
          })) : "exist" == e.privateType ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(s, {
            key: 1,
            class: "exist-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "L"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Mo, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("ul", Ro, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "C"])(e.existAddress, function (t, n) {
                return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("li", {
                  class: ["exist-item", [t.selectedAddress ? "active" : ""]],
                  key: n,
                  onClick: function onClick(n) {
                    return e.selectedExist(t);
                  }
                }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])(i, {
                  class: "exist-item-icon",
                  type: "self",
                  name: t.selectedAddress ? e.selectedIcon : e.defaultIcon,
                  color: t.selectedAddress ? "#FA2C19" : "",
                  size: "13px"
                }, null, 8, ["name", "color"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Ho, [t.name && t.phone ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("div", Yo, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Fo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.name), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Wo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.phone), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Xo, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.provinceName + t.cityName + t.countyName + t.townName + t.addressDetail), 1)])])], 10, ["onClick"]);
              }), 128))])]), e.isShowCustomAddress ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "g"])("div", {
                key: 0,
                class: "choose-other",
                onClick: t[5] || (t[5] = function () {
                  return e.switchModule && e.switchModule.apply(e, arguments);
                })
              }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "l"])("div", Uo, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.customAndExistTitle), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
            }),
            _: 1
          })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "h"])("", !0)];
        }),
        _: 1
      })];
    }),
    _: 1
  }, 8, ["onClose", "onClickOverlay", "visible", "class"]);
};

var Go = {
  install: function install(e) {
    [Z, le, he, ve, xe, Ne, Ee, Me, tt, rt, ft, xt, _t, Ot, qt, Pt, Tt, nn, dn, yn, Sn, Dn, On, Yn, sl, hl, ml, vl, Cl, Ol, ql, Pl, Rl, Zl, so, qo].forEach(function (t) {
      t.install ? e.use(t) : t.name && e.component(t.name, t);
    });
  },
  version: "3.1.2"
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/styles/themes/default.scss":
/*!************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/styles/themes/default.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP */
/*! exports used: HOOK_SETUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOOK_SETUP; });
const HOOK_SETUP = 'devtools-plugin:setup';


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget */
/*! exports used: getDevtoolsGlobalHook, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return typeof navigator !== 'undefined'
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDevtoolsPlugin", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");



function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getDevtoolsGlobalHook */ "a"])();
    if (hook) {
        hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__[/* HOOK_SETUP */ "a"], pluginDescriptor, setupFn);
    }
    else {
        const target = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getTarget */ "b"])();
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor,
            setupFn
        });
    }
}


/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useContext, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withScopeId, Transition, TransitionGroup, createApp, createSSRApp, hydrate, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/*! exports used: Transition, createApp, vModelText, vShow, withModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, window, navigator, requestAnimationFrame, SVGElement, Element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* unused harmony export TransitionGroup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* unused harmony export createSSRApp */
/* unused harmony export hydrate */
/* unused harmony export render */
/* unused harmony export useCssModule */
/* unused harmony export useCssVars */
/* unused harmony export vModelCheckbox */
/* unused harmony export vModelDynamic */
/* unused harmony export vModelRadio */
/* unused harmony export vModelSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vModelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vShow; });
/* unused harmony export withKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return withModifiers; });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const staticTemplateCache = new Map();
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        let template = staticTemplateCache.get(content);
        if (!template) {
            const t = doc.createElement('template');
            t.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            template = t.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            staticTemplateCache.set(content, template);
        }
        parent.insertBefore(template.cloneNode(true), anchor);
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value
            ? [value, ...transitionClasses]
            : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "C"])(next)) {
        if (prev !== next) {
            const current = style.display;
            style.cssText = next;
            // indicates that the `display` of the element is controlled by `v-show`,
            // so we always keep the current `display` value regardless of the `style` value,
            // thus handing over control to `v-show`.
            if ('_vod' in el) {
                style.display = current;
            }
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "C"])(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* hyphenate */ "l"])(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* camelize */ "e"])(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* capitalize */ "f"])(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSpecialBooleanAttr */ "B"])(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (value === '' && type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = true;
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            try {
                el[key] = 0;
            }
            catch (_a) { }
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if ((true)) {
            Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                `value ${value} is invalid.`, e);
        }
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) {
        // if the low-res timestamp which is bigger than the event timestamp
        // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listeners as well.
        _getNow = () => performance.now();
    }
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* hyphenate */ "l"])(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* callWithAsyncErrorHandling */ "e"])(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isOn */ "v"])(key)) {
                // ignore v-model listeners
                if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isModelListener */ "t"])(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "o"])(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "C"])(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentInstance */ "n"])();
        if (!instance) {
            ( true) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`useCssModule must be called inside setup()`);
            return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "b"];
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( true) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`Current instance does not have CSS modules injected.`);
            return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "b"];
        }
        const mod = modules[name];
        if (!mod) {
            ( true) &&
                Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`Current instance does not have CSS module named "${name}".`);
            return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "b"];
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentInstance */ "n"])();
    /* istanbul ignore next */
    if (!instance) {
        ( true) &&
            Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* onMounted */ "x"])(() => Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* watchEffect */ "K"])(setVars, { flush: 'post' }));
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* onUpdated */ "z"])(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        setVarsOnNode(vnode.el, vars);
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* Fragment */ "b"]) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* Static */ "c"]) {
        let { el, anchor } = vnode;
        while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor)
                break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* h */ "p"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* BaseTransition */ "a"], resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "h"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* BaseTransition */ "a"].props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const callHook = (hook, args = []) => {
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "h"])(baseProps, {
        onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            callHook(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isObject */ "u"])(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* toNumber */ "M"])(val);
    if ((true))
        validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "h"])({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentInstance */ "n"])();
        const state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* useTransitionState */ "H"])();
        let prevChildren;
        let children;
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* onUpdated */ "z"])(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__[/* toRaw */ "r"])(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* Fragment */ "b"];
            prevChildren = children;
            children = slots.default ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* getTransitionRawChildren */ "o"])(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* setTransitionHooks */ "G"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* resolveTransitionHooks */ "F"])(child, cssTransitionProps, state, instance));
                }
                else if ((true)) {
                    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`<TransitionGroup> children must be keyed.`);
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* setTransitionHooks */ "G"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* resolveTransitionHooks */ "F"])(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* createVNode */ "l"])(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(fn) ? value => Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* invokeArrayFns */ "m"])(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* toNumber */ "M"])(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* toNumber */ "M"])(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(modelValue)) {
                const index = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseIndexOf */ "F"])(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSet */ "A"])(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(value)) {
        el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseIndexOf */ "F"])(value, vnode.props.value) > -1;
    }
    else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSet */ "A"])(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseEqual */ "E"])(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseEqual */ "E"])(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseEqual */ "E"])(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSet */ "A"])(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* toNumber */ "M"])(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(value) && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSet */ "A"])(value)) {
        ( true) &&
            Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "n"])(value)) {
                option.selected = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseIndexOf */ "F"])(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* looseEqual */ "E"])(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* hyphenate */ "l"])(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "h"])({ patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* createRenderer */ "j"])(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* createHydrationRenderer */ "i"])(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "o"])(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isHTMLTag */ "q"])(tag) || Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isSVGTag */ "z"])(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* isRuntimeOnly */ "r"])()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(msg);
                return compilerOptions;
            },
            set() {
                Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "C"])(container)) {
        const res = document.querySelector(container);
        if (( true) && !res) {
            Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`Failed to mount app: mount target selector "${container}" returned null.`);
        }
        return res;
    }
    if (( true) &&
        container instanceof window.ShadowRoot &&
        container.mode === 'closed') {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__[/* warn */ "I"])(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js");
/* harmony import */ var _nutui_nutui_taro_dist_styles_themes_default_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-taro/dist/styles/themes/default.scss */ "./node_modules/@nutui/nutui-taro/dist/styles/themes/default.scss");
/* harmony import */ var _nutui_nutui_taro_dist_styles_themes_default_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nutui_nutui_taro_dist_styles_themes_default_scss__WEBPACK_IMPORTED_MODULE_2__);

 // import '@nutui/nutui-taro/dist/style.css';


var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createApp */ "b"])({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
App.use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"]).use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Toast */ "c"]).use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Icon */ "b"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm-bundler.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm-bundler.js ***!
  \****************************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/*! exports used: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document) {/* unused harmony export NavigationFailureType */
/* unused harmony export RouterLink */
/* unused harmony export RouterView */
/* unused harmony export START_LOCATION */
/* unused harmony export createMemoryHistory */
/* unused harmony export createRouter */
/* unused harmony export createRouterMatcher */
/* unused harmony export createWebHashHistory */
/* unused harmony export createWebHistory */
/* unused harmony export isNavigationFailure */
/* unused harmony export matchedRouteKey */
/* unused harmony export onBeforeRouteLeave */
/* unused harmony export onBeforeRouteUpdate */
/* unused harmony export parseQuery */
/* unused harmony export routeLocationKey */
/* unused harmony export routerKey */
/* unused harmony export routerViewLocationKey */
/* unused harmony export stringifyQuery */
/* unused harmony export useLink */
/* unused harmony export useRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRouter; });
/* unused harmony export viewDepthKey */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */



const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const PolySymbol = (name) => 
// vr = vue router
hasSymbol
    ? Symbol(( true) ? '[vue-router]: ' + name : undefined)
    : (( true) ? '[vue-router]: ' : undefined) + name;
// rvlm = Router View Location Matched
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */
const matchedRouteKey = /*#__PURE__*/ PolySymbol(( true) ? 'router view location matched' : undefined);
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
const viewDepthKey = /*#__PURE__*/ PolySymbol(( true) ? 'router view depth' : undefined);
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = /*#__PURE__*/ PolySymbol(( true) ? 'router' : undefined);
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = /*#__PURE__*/ PolySymbol(( true) ? 'route location' : undefined);
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
const routerViewLocationKey = /*#__PURE__*/ PolySymbol(( true) ? 'router view location' : undefined);

const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}
const assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}
let noop = () => { };

function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    const searchPos = location.indexOf('?');
    const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    let query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
    let aLastIndex = a.matched.length - 1;
    let bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameRouteLocationParams(a.params, b.params) &&
        stringifyQuery(a.query) === stringifyQuery(b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (let key in a) {
        if (!isSameRouteLocationParamsValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a)
        ? isEquivalentArray(a, b)
        : Array.isArray(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */
function isEquivalentArray(a, b) {
    return Array.isArray(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function resolveRelativePath(to, from) {
    if (to.startsWith('/'))
        return to;
    if (( true) && !from.startsWith('/')) {
        warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
        return to;
    }
    if (!to)
        return from;
    const fromSegments = from.split('/');
    const toSegments = to.split('/');
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
        segment = toSegments[toPosition];
        // can't go below zero
        if (position === 1 || segment === '.')
            continue;
        if (segment === '..')
            position--;
        // found something that is not relative path
        else
            break;
    }
    return (fromSegments.slice(0, position).join('/') +
        '/' +
        toSegments
            .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
            .join('/'));
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */
const START = '';
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0),
    };
}
const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset,
});
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        let positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */
        if (( true) && typeof position.el === 'string') {
            if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
                try {
                    let foundEl = document.querySelector(position.el);
                    if (isIdSelector && foundEl) {
                        warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
                        // return to avoid other warnings
                        return;
                    }
                }
                catch (err) {
                    warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
                    // return to avoid other warnings
                    return;
                }
            }
        }
        const el = typeof positionEl === 'string'
            ? isIdSelector
                ? document.getElementById(positionEl.slice(1))
                : document.querySelector(positionEl)
            : positionEl;
        if (!el) {
            ( true) &&
                warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    }
    else {
        scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style)
        window.scrollTo(scrollToOptions);
    else {
        window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos))
            ? base.slice(hashPos).length
            : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        }
        else {
            replace(to);
        }
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // setup the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = () => {
            const index = listeners.indexOf(callback);
            if (index > -1)
                listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history, location } = window;
    // private variables
    let currentLocation = {
        value: createCurrentLocation(base, location),
    };
    let historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(currentLocation.value, {
            back: null,
            current: currentLocation.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/vue-router-next/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */
        const hashIndex = base.indexOf('#');
        const url = hashIndex > -1
            ? (location.host && document.querySelector('base')
                ? base
                : base.slice(hashIndex)) + to
            : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            if ((true)) {
                warn('Error with push/replace State', err);
            }
            else {}
            // Force the navigation, this also resets the call count
            location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history.state, buildState(historyState.value.back, 
        // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, { position: historyState.value.position });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, 
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/vue-router-next/issues/366
        historyState.value, history.state, {
            forward: to,
            scroll: computeScrollPosition(),
        });
        if (( true) && !history.state) {
            warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` +
                `history.replaceState(history.state, '', url)\n\n` +
                `You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
        }
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace,
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners)
            historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign({
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
function createMemoryHistory(base = '') {
    let listeners = [];
    let queue = [START];
    let position = 0;
    function setLocation(location) {
        position++;
        if (position === queue.length) {
            // we are at the end, we can simply append a new entry
            queue.push(location);
        }
        else {
            // we are in the middle, we remove everything from here in the queue
            queue.splice(position);
            queue.push(location);
        }
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop,
        };
        for (let callback of listeners) {
            callback(to, from, info);
        }
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // TODO: should be kept in queue
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace(to) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to);
        },
        push(to, data) {
            setLocation(to);
        },
        listen(callback) {
            listeners.push(callback);
            return () => {
                const index = listeners.indexOf(callback);
                if (index > -1)
                    listeners.splice(index, 1);
            };
        },
        destroy() {
            listeners = [];
            queue = [START];
            position = 0;
        },
        go(delta, shouldTrigger = true) {
            const from = this.location;
            const direction = 
            // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) {
                triggerListeners(this.location, from, {
                    direction,
                    delta,
                });
            }
        },
    };
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => queue[position],
    });
    return routerHistory;
}

/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */
function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#'))
        base += '#';
    if (( true) && !base.endsWith('#/') && !base.endsWith('#')) {
        warn(`A hash base must end with a "#":\n"${base}" should be "${base.replace(/#.*$/, '#')}".`);
    }
    return createWebHistory(base);
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */
const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

const NavigationFailureSymbol = /*#__PURE__*/ PolySymbol(( true) ? 'navigation failure' : undefined);
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* MATCHER_NOT_FOUND */]({ location, currentLocation }) {
        return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
    },
    [2 /* NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* NAVIGATION_ABORTED */]({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* NAVIGATION_CANCELLED */]({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* NAVIGATION_DUPLICATED */]({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    },
};
function createRouterError(type, params) {
    // keep full error messages in cjs versions
    if (true) {
        return assign(new Error(ErrorTypeMessages[type](params)), {
            type,
            [NavigationFailureSymbol]: true,
        }, params);
    }
    else {}
}
function isNavigationFailure(error, type) {
    return (error instanceof Error &&
        NavigationFailureSymbol in error &&
        (type == null || !!(error.type & type)));
}
const propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
    if (typeof to === 'string')
        return to;
    if ('path' in to)
        return to.path;
    const location = {};
    for (const key of propertiesToLog) {
        if (key in to)
            location[key] = to[key];
    }
    return JSON.stringify(location, null, 2);
}

// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    let score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub segment /:a-other-:b
            let subSegmentScore = 40 /* Segment */ +
                (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
            if (token.type === 0 /* Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* Static */;
            }
            else if (token.type === 1 /* Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern =
                        // avoid an optional / if there are more segments e.g. /:p?-static
                        // or /:p?-:p2
                        optional && segment.length < 2
                            ? `(?:/${subPattern})`
                            : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || !path.endsWith('/'))
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (Array.isArray(param) && !repeatable)
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = Array.isArray(param) ? param.join('/') : param;
                    if (!text) {
                        if (optional) {
                            // if we have more than one optional param like /:a?-static we
                            // don't need to care about the optional param
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith('/'))
                                    path = path.slice(0, -1);
                                // do not append a slash on the next iteration
                                else
                                    avoidDuplicatedSlash = true;
                            }
                        }
                        else
                            throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        return path;
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}

const ROOT_TOKEN = {
    type: 0 /* Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    if (!path.startsWith('/')) {
        throw new Error(( true)
            ? `Route paths should start with a "/": "${path}" should be "/${path}".`
            : undefined);
    }
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* Static */) {
            segment.push({
                type: 0 /* Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* Param */ ||
            state === 2 /* ParamRegExp */ ||
            state === 3 /* ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* ParamRegExp */) {
            previousState = state;
            state = 4 /* EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* Param */:
                if (char === '(') {
                    state = 2 /* ParamRegExp */;
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* ParamRegExp */:
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                customRe = '';
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    // warn against params with the same name
    if ((true)) {
        const existingKeys = new Set();
        for (const key of parser.keys) {
            if (existingKeys.has(key.name))
                warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
            existingKeys.add(key.name);
        }
    }
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    });
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        let isRootAdd = !originalRecord;
        let mainNormalizedRecord = normalizeRouteRecord(record);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push(assign({}, mainNormalizedRecord, {
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                    // the aliases are always of the same kind as the original since they
                    // are defined on the same record
                }));
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            let { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                let parentPath = parent.record.path;
                let connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            if (( true) && normalizedRecord.path === '*') {
                throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' +
                    'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
            }
            // create the object before hand so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (( true) && parent && path[0] === '/')
                checkMissingParamsInAbsolutePath(matcher, parent);
            // if we are an alias we must tell the original record that we exist
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                if ((true)) {
                    checkSameParams(originalRecord, matcher);
                }
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher))
                    removeRoute(record.name);
            }
            if ('children' in mainNormalizedRecord) {
                let children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other alias (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        }
        else {
            let index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name)
                    matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        // console.log('i is', { i })
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0)
            i++;
        // console.log('END i is', { i })
        // while (i < matchers.length && matcher.score <= matchers[i].score) i++
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = assign(
            // paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, 
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter(k => !k.optional).map(k => k.name)), location.params);
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            if (( true) && !path.startsWith('/')) {
                warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next.`);
            }
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // TODO: dev warning of unused params if provided
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    let newParams = {};
    for (let key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in record
            ? record.components || {}
            : { default: record.component },
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records but we can set false directly
    const props = record.props || false;
    if ('component' in record) {
        propsObject.default = props;
    }
    else {
        // NOTE: we could also allow a function to be applied to every component.
        // Would need user feedback for use cases
        for (let name in record.components)
            propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    let options = {};
    for (let key in defaults) {
        options[key] =
            key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}
function isSameParam(a, b) {
    return (a.name === b.name &&
        a.optional === b.optional &&
        a.repeatable === b.repeatable);
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */
function checkSameParams(a, b) {
    for (let key of a.keys) {
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
    for (let key of b.keys) {
        if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (let key of parent.keys) {
        if (!record.keys.find(isSameParam.bind(null, key)))
            return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryValue(text) {
    return (commonEncode(text)
        // Encode the space as +, encode the + to differentiate it from the space
        .replace(PLUS_RE, '%2B')
        .replace(ENC_SPACE_RE, '+')
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^'));
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
        ( true) && warn(`Error decoding "${text}". Using original value`);
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ');
        // allow the = character
        let eqPos = searchParam.indexOf('=');
        let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!Array.isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
            }
            continue;
        }
        // keep null values
        let values = Array.isArray(value)
            ? value.map(v => v && encodeQueryValue(v))
            : [value && encodeQueryValue(value)];
        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null)
                    search += '=' + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (let key in query) {
        let value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = Array.isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}

function registerGuard(record, name, guard) {
    const removeFromList = () => {
        record[name].delete(guard);
    };
    Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* onUnmounted */ "y"])(removeFromList);
    Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* onDeactivated */ "w"])(removeFromList);
    Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* onActivated */ "t"])(() => {
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
function onBeforeRouteLeave(leaveGuard) {
    if (( true) && !Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "n"])()) {
        warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
        return;
    }
    const activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(matchedRouteKey, {}).value;
    if (!activeRecord) {
        ( true) &&
            warn('No active route record was found. Are you missing a <router-view> component?');
        return;
    }
    registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
function onBeforeRouteUpdate(updateGuard) {
    if (( true) && !Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "n"])()) {
        warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
        return;
    }
    const activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(matchedRouteKey, {}).value;
    if (!activeRecord) {
        ( true) &&
            warn('No active route record was found. Are you missing a <router-view> component?');
        return;
    }
    registerGuard(activeRecord, 'updateGuards', updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record &&
        // name is defined if record is because of the function overload
        (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false)
                reject(createRouterError(4 /* NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(2 /* NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                if (enterCallbackArray &&
                    // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray &&
                    typeof valid === 'function')
                    enterCallbackArray.push(valid);
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        const guardReturn = guard.call(record && record.instances[name], to, from, ( true) ? canOnlyBeCalledOnce(next, to, from) : undefined);
        let guardCall = Promise.resolve(guardReturn);
        if (guard.length < 3)
            guardCall = guardCall.then(next);
        if (( true) && guard.length > 2) {
            const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ''}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
            if (typeof guardReturn === 'object' && 'then' in guardReturn) {
                guardCall = guardCall.then(resolvedValue => {
                    // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                    if (!next._called) {
                        warn(message);
                        return Promise.reject(new Error('Invalid navigation guard'));
                    }
                    return resolvedValue;
                });
                // TODO: test me!
            }
            else if (guardReturn !== undefined) {
                // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                if (!next._called) {
                    warn(message);
                    reject(new Error('Invalid navigation guard'));
                    return;
                }
            }
        }
        guardCall.catch(err => reject(err));
    });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function () {
        if (called++ === 1)
            warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1)
            next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        for (const name in record.components) {
            let rawComponent = record.components[name];
            if ((true)) {
                if (!rawComponent ||
                    (typeof rawComponent !== 'object' &&
                        typeof rawComponent !== 'function')) {
                    warn(`Component "${name}" in record with path "${record.path}" is not` +
                        ` a valid component. Received "${String(rawComponent)}".`);
                    // throw to ensure we stop here but warn to ensure the message isn't
                    // missed by the user
                    throw new Error('Invalid route component');
                }
                else if ('then' in rawComponent) {
                    // warn if user wrote import('/component.vue') instead of () =>
                    // import('./component.vue')
                    warn(`Component "${name}" in record with path "${record.path}" is a ` +
                        `Promise instead of a function that returns a Promise. Did you ` +
                        `write "import('./MyPage.vue')" instead of ` +
                        `"() => import('./MyPage.vue')" ? This will break in ` +
                        `production if not fixed.`);
                    let promise = rawComponent;
                    rawComponent = () => promise;
                }
                else if (rawComponent.__asyncLoader &&
                    // warn only once per component
                    !rawComponent.__warnedDefineAsync) {
                    rawComponent.__warnedDefineAsync = true;
                    warn(`Component "${name}" in record with path "${record.path}" is defined ` +
                        `using "defineAsyncComponent()". ` +
                        `Write "() => import('./MyPage.vue')" instead of ` +
                        `"defineAsyncComponent(() => import('./MyPage.vue'))".`);
                }
            }
            // skip update and leave guards if the route component is not mounted
            if (guardType !== 'beforeRouteEnter' && !record.instances[name])
                continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                let options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (( true) && !('catch' in componentPromise)) {
                    warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                    componentPromise = Promise.resolve(componentPromise);
                }
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    record.components[name] = resolvedComponent;
                    // __vccOpts is added by vue-class-component and contain the regular options
                    let options = resolvedComponent.__vccOpts || resolvedComponent;
                    const guard = options[guardType];
                    return guard && guardToPromiseFn(guard, to, from, record, name)();
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routerKey);
    const currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routeLocationKey);
    const route = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => router.resolve(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* unref */ "v"])(props.to)));
    const activeRecordIndex = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => {
        let { matched } = route.value;
        let { length } = matched;
        const routeMatched = matched[length - 1];
        let currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        let parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the parent and matched route have the same path, this link is
            // referring to the empty child. Or we currently are on a different
            // child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) {
            return router[Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* unref */ "v"])(props.replace) ? 'replace' : 'push'](Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* unref */ "v"])(props.to)
            // avoid uncaught errors are they are logged anyway
            ).catch(noop);
        }
        return Promise.resolve();
    }
    // devtools only
    if (( true) && isBrowser) {
        const instance = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "n"])();
        if (instance) {
            const linkContextDevtools = {
                route: route.value,
                isActive: isActive.value,
                isExactActive: isExactActive.value,
            };
            // @ts-expect-error: this is internal
            instance.__vrl_devtools = instance.__vrl_devtools || [];
            // @ts-expect-error: this is internal
            instance.__vrl_devtools.push(linkContextDevtools);
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* watchEffect */ "K"])(() => {
                linkContextDevtools.route = route.value;
                linkContextDevtools.isActive = isActive.value;
                linkContextDevtools.isExactActive = isExactActive.value;
            }, { flush: 'post' });
        }
    }
    return {
        route,
        href: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = /*#__PURE__*/ Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ "m"])({
    name: 'RouterLink',
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page',
        },
    },
    useLink,
    setup(props, { slots }) {
        const link = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ "j"])(useLink(props));
        const { options } = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routerKey);
        const elClass = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* h */ "p"])('a', {
                    'aria-current': link.isExactActive
                        ? props.ariaCurrentValue
                        : null,
                    href: link.href,
                    // this would override user added attrs but Vue will still add
                    // the listener so we end up triggering both
                    onClick: link.navigate,
                    class: elClass.value,
                }, children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (let key in inner) {
        let innerValue = inner[key];
        let outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!Array.isArray(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = /*#__PURE__*/ Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ "m"])({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    setup(props, { attrs, slots }) {
        ( true) && warnDeprecatedUsage();
        const injectedRoute = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routerViewLocationKey);
        const routeToDisplay = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => props.route || injectedRoute.value);
        const depth = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(viewDepthKey, 0);
        const matchedRouteRef = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => routeToDisplay.value.matched[depth]);
        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* provide */ "B"])(viewDepthKey, depth + 1);
        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* provide */ "B"])(matchedRouteKey, matchedRouteRef);
        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* provide */ "B"])(routerViewLocationKey, routeToDisplay);
        const viewRef = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* watch */ "J"])(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) {
                        to.leaveGuards = from.leaveGuards;
                    }
                    if (!to.updateGuards.size) {
                        to.updateGuards = from.updateGuards;
                    }
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance &&
                to &&
                // if there is no instance but to and from are the same this might be
                // the first visit
                (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
            }
        }, { flush: 'post' });
        return () => {
            const route = routeToDisplay.value;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[props.name];
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            if (!ViewComponent) {
                return normalizeSlot(slots.default, { Component: ViewComponent, route });
            }
            // props from route configuration
            const routePropsOption = matchedRoute.props[props.name];
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null;
            const onVnodeUnmounted = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) {
                    matchedRoute.instances[currentName] = null;
                }
            };
            const component = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* h */ "p"])(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef,
            }));
            return (
            // pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, { Component: component, route }) ||
                component);
        };
    },
});
function normalizeSlot(slot, data) {
    if (!slot)
        return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */
const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "n"])();
    const parentName = instance.parent && instance.parent.type.name;
    if (parentName &&
        (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
        const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
        warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` +
            `Use slot props instead:\n\n` +
            `<router-view v-slot="{ Component }">\n` +
            `  <${comp}>\n` +
            `    <component :is="Component" />\n` +
            `  </${comp}>\n` +
            `</router-view>`);
    }
}

function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map(matched => omit(matched, ['instances', 'children', 'aliasOf'])),
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy,
        },
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display,
        },
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools)
        return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_2__["setupDevtoolsPlugin"])({
        id: 'org.vuejs.router' + (id ? '.' + id : ''),
        label: 'Vue Router',
        packageName: 'vue-router',
        homepage: 'https://next.router.vuejs.org/',
        logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
        componentStateTypes: ['Routing'],
        app,
    }, api => {
        // display state added by the router
        api.on.inspectComponent((payload, ctx) => {
            if (payload.instanceData) {
                payload.instanceData.state.push({
                    type: 'Routing',
                    key: '$route',
                    editable: false,
                    value: formatRouteLocation(router.currentRoute.value, 'Current Route'),
                });
            }
        });
        // mark router-link as active
        api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
            // if multiple useLink are used
            if (Array.isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach(devtoolsData => {
                    let backgroundColor = ORANGE_400;
                    let tooltip = '';
                    if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = 'This is exactly active';
                    }
                    else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = 'This link is active';
                    }
                    node.tags.push({
                        label: devtoolsData.route.path,
                        textColor: 0,
                        tooltip,
                        backgroundColor,
                    });
                });
            }
        });
        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* watch */ "J"])(router.currentRoute, () => {
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = 'router:navigations:' + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? ' ' + id : ''} Navigations`,
            color: 0x40a8c4,
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to) => {
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'Error during Navigation',
                    subtitle: to.fullPath,
                    logType: 'error',
                    time: Date.now(),
                    data: { error },
                    groupId: to.meta.__navigationId,
                },
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from) => {
            const data = {
                guard: formatDisplay('beforeEach'),
                from: formatRouteLocation(from, 'Current Location during this navigation'),
                to: formatRouteLocation(to, 'Target location'),
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, '__navigationId', {
                value: navigationId++,
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: Date.now(),
                    title: 'Start of navigation',
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId,
                },
            });
        });
        router.afterEach((to, from, failure) => {
            const data = {
                guard: formatDisplay('afterEach'),
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : '',
                        tooltip: 'Navigation Failure',
                        value: failure,
                    },
                };
                data.status = formatDisplay('❌');
            }
            else {
                data.status = formatDisplay('✅');
            }
            // we set here to have the right order
            data.from = formatRouteLocation(from, 'Current Location during this navigation');
            data.to = formatRouteLocation(to, 'Target location');
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'End of navigation',
                    subtitle: to.fullPath,
                    time: Date.now(),
                    data,
                    logType: failure ? 'warning' : 'default',
                    groupId: to.meta.__navigationId,
                },
            });
        });
        /**
         * Inspector of Existing routes
         */
        const routerInspectorId = 'router-inspector:' + id;
        api.addInspector({
            id: routerInspectorId,
            label: 'Routes' + (id ? ' ' + id : ''),
            icon: 'book',
            treeFilterPlaceholder: 'Search routes',
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload)
                return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter(route => !route.parent);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) {
                routes = routes.filter(route => 
                // save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            }
            // mark active routes
            routes.forEach(route => markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree(payload => {
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                refreshRoutesView();
            }
        });
        /**
         * Display information about the currently selected route record
         */
        api.on.getInspectorState(payload => {
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find(route => route.record.__vd_id === payload.nodeId);
                if (route) {
                    payload.state = {
                        options: formatRouteRecordMatcherForStateInspector(route),
                    };
                }
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) {
        return key.repeatable ? '*' : '?';
    }
    else {
        return key.repeatable ? '+' : '';
    }
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
        { editable: false, key: 'path', value: record.path },
    ];
    if (record.name != null) {
        fields.push({
            editable: false,
            key: 'name',
            value: record.name,
        });
    }
    fields.push({ editable: false, key: 'regexp', value: route.re });
    if (route.keys.length) {
        fields.push({
            editable: false,
            key: 'keys',
            value: {
                _custom: {
                    type: null,
                    readOnly: true,
                    display: route.keys
                        .map(key => `${key.name}${modifierForKey(key)}`)
                        .join(' '),
                    tooltip: 'Param keys',
                    value: route.keys,
                },
            },
        });
    }
    if (record.redirect != null) {
        fields.push({
            editable: false,
            key: 'redirect',
            value: record.redirect,
        });
    }
    if (route.alias.length) {
        fields.push({
            editable: false,
            key: 'aliases',
            value: route.alias.map(alias => alias.record.path),
        });
    }
    fields.push({
        key: 'score',
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map(score => score.join(', ')).join(' | '),
                tooltip: 'Score used to sort routes',
                value: route.score,
            },
        },
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */
const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) {
        tags.push({
            label: String(record.name),
            textColor: 0,
            backgroundColor: CYAN_400,
        });
    }
    if (record.aliasOf) {
        tags.push({
            label: 'alias',
            textColor: 0,
            backgroundColor: ORANGE_400,
        });
    }
    if (route.__vd_match) {
        tags.push({
            label: 'matches',
            textColor: 0,
            backgroundColor: PINK_500,
        });
    }
    if (route.__vd_exactActive) {
        tags.push({
            label: 'exact',
            textColor: 0,
            backgroundColor: LIME_500,
        });
    }
    if (route.__vd_active) {
        tags.push({
            label: 'active',
            textColor: 0,
            backgroundColor: BLUE_600,
        });
    }
    if (record.redirect) {
        tags.push({
            label: 'redirect: ' +
                (typeof record.redirect === 'string' ? record.redirect : 'Object'),
            textColor: 0xffffff,
            backgroundColor: DARK,
        });
    }
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector),
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length &&
        isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) {
        route.__vd_active = currentRoute.matched.some(match => isSameRouteRecord(match, route.record));
    }
    route.children.forEach(childRoute => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) {
        return false;
    }
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach(child => isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== '/' || filter === '/') {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith('/') &&
        (decodedPath.includes(filter) || path.includes(filter)))
        return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter))
        return true;
    if (route.record.name && String(route.record.name).includes(filter))
        return true;
    return route.children.some(child => isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            // @ts-expect-error
            ret[key] = obj[key];
        }
    }
    return ret;
}

/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    let parseQuery$1 = options.parseQuery || parseQuery;
    let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    let routerHistory = options.history;
    if (( true) && !routerHistory)
        throw new Error('Provide the "history" option when calling "createRouter()":' +
            ' https://next.router.vuejs.org/api/#history.');
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* shallowRef */ "p"])(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
            record = parentOrRoute;
        }
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        let recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) {
            matcher.removeRoute(recordMatcher);
        }
        else if ((true)) {
            warn(`Cannot remove non-existent route "${String(name)}"`);
        }
    }
    function getRoutes() {
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === 'string') {
            let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            let matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            let href = routerHistory.createHref(locationNormalized.fullPath);
            if ((true)) {
                if (href.startsWith('//'))
                    warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
                else if (!matchedRoute.matched.length) {
                    warn(`No match found for location with path "${rawLocation}"`);
                }
            }
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href,
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            if (( true) &&
                'params' in rawLocation &&
                !('name' in rawLocation) &&
                Object.keys(rawLocation.params).length) {
                warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
            }
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            });
        }
        else {
            // pass encoded values to the matcher so it can produce encoded path and fullPath
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(rawLocation.params),
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || '';
        if (( true) && hash && !hash.startsWith('#')) {
            warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
        }
        // decoding them) the matcher might have merged current location params so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path,
        }));
        let href = routerHistory.createHref(fullPath);
        if ((true)) {
            if (href.startsWith('//')) {
                warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
            }
            else if (!matchedRoute.matched.length) {
                warn(`No match found for location with path "${'path' in rawLocation ? rawLocation.path : rawLocation}"`);
            }
        }
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: 
            // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery
                ? normalizeQuery(rawLocation.query)
                : rawLocation.query,
        }, matchedRoute, {
            redirectedFrom: undefined,
            href,
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string'
            ? parseURL(parseQuery$1, to, currentRoute.value.path)
            : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) {
            return createRouterError(8 /* NAVIGATION_CANCELLED */, {
                from,
                to,
            });
        }
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
            if (typeof newTargetLocation === 'string') {
                newTargetLocation =
                    newTargetLocation.includes('?') || newTargetLocation.includes('#')
                        ? (newTargetLocation = locationAsObject(newTargetLocation))
                        : // force empty params
                            { path: newTargetLocation };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (( true) &&
                !('path' in newTargetLocation) &&
                !('name' in newTargetLocation)) {
                warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
                throw new Error('Invalid redirect');
            }
            return assign({
                query: to.query,
                hash: to.hash,
                params: to.params,
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect)
            return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
                state: data,
                force,
                replace,
            }), 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => isNavigationFailure(error)
            ? error
            : // reject any unknown error
                triggerError(error, toLocation, from))
            .then((failure) => {
            if (failure) {
                if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                    if (( true) &&
                        // we are redirecting to the same location we were already at
                        isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) &&
                        // and we have done it a couple of times
                        redirectedFrom &&
                        // @ts-expect-error: added only in dev
                        (redirectedFrom._count = redirectedFrom._count
                            ? // @ts-expect-error
                                redirectedFrom._count + 1
                            : 1) > 10) {
                        warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
                        return Promise.reject(new Error('Infinite redirect in navigation guard'));
                    }
                    return pushWithRedirect(
                    // keep options
                    assign(locationAsObject(failure.to), {
                        state: data,
                        force,
                        replace,
                    }), 
                    // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords) {
            record.leaveGuards.forEach(guard => {
                guards.push(guardToPromiseFn(guard, to, from));
            });
        }
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return (runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                record.updateGuards.forEach(guard => {
                    guards.push(guardToPromiseFn(guard, to, from));
                });
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && !from.matched.includes(record)) {
                    if (Array.isArray(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach(record => (record.enterCallbacks = {}));
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */)
            ? err
            : Promise.reject(err)));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error)
            return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation.fullPath, assign({
                    scroll: isFirstNavigation && state && state.scroll,
                }, data));
            else
                routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        removeHistoryListener = routerHistory.listen((to, _from, info) => {
            // cannot be a redirect route because it was in history
            let toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            }
            navigate(toLocation, from)
                .catch((error) => {
                if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
                    return error;
                }
                if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is not guarantee for
                    // it to work on every browser. So Instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation
                    // avoid an uncaught rejection, let push call triggerError
                    )
                        .then(failure => {
                        // manual change in hash history #916 ending up in the URL not
                        // changing but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ |
                            16 /* NAVIGATION_DUPLICATED */) &&
                            !info.delta &&
                            info.type === NavigationType.pop) {
                            routerHistory.go(-1, false);
                        }
                    })
                        .catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta)
                    routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            })
                .then((failure) => {
                failure =
                    failure ||
                        finalizeNavigation(
                        // after navigation, all matched components are resolved
                        toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta) {
                        routerHistory.go(-info.delta, false);
                    }
                    else if (info.type === NavigationType.pop &&
                        isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ | 16 /* NAVIGATION_DUPLICATED */)) {
                        // manual change in hash history #916
                        // it's like a push but lacks the information of the direction
                        routerHistory.go(-1, false);
                    }
                }
                triggerAfterEach(toLocation, from, failure);
            })
                .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
    function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorHandlers.list();
        if (list.length) {
            list.forEach(handler => handler(error, to, from));
        }
        else {
            if ((true)) {
                warn('uncaught error during route navigation:');
            }
            console.error(error);
        }
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    /**
     * Mark the router as ready, resolving the promised returned by isReady(). Can
     * only be called once, otherwise does nothing.
     * @param err - optional error
     */
    function markAsReady(err) {
        if (ready)
            return;
        ready = true;
        setupListeners();
        readyHandlers
            .list()
            .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
        readyHandlers.reset();
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        let scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* nextTick */ "s"])()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(err => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        install(app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: () => Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* unref */ "v"])(currentRoute),
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser &&
                // used for the initial navigation client side to avoid pushing
                // multiple times when the router is used in multiple apps
                !started &&
                currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {
                    if ((true))
                        warn('Unexpected error when starting the router:', err);
                });
            }
            const reactiveRoute = {};
            for (let key in START_LOCATION_NORMALIZED) {
                // @ts-expect-error: the key matches
                reactiveRoute[key] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(() => currentRoute.value[key]);
            }
            app.provide(routerKey, router);
            app.provide(routeLocationKey, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ "j"])(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            let unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function () {
                installedApps.delete(app);
                if (installedApps.size < 1) {
                    removeHistoryListener();
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            if (( true) && isBrowser) {
                addDevtools(app, router, matcher);
            }
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find(record => isSameRouteRecord(record, recordFrom)))
                updatingRecords.push(recordFrom);
            else
                leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) {
            // the type doesn't matter because we are comparing per reference
            if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                enteringRecords.push(recordTo);
            }
        }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute() {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "q"])(routeLocationKey);
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.ts */ "./node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");









var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["createVue3App"])(_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_5__[/* h */ "p"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["initPxTransform"])({
  designWidth: 375,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ })

},[["./src/app.ts","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map