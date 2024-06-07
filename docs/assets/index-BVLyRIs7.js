var s0 = Object.defineProperty;
var o0 = (t, e, n) =>
  e in t
    ? s0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var vd = (t, e, n) => (o0(t, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function l0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Mg = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var po = Symbol.for("react.element"),
  a0 = Symbol.for("react.portal"),
  u0 = Symbol.for("react.fragment"),
  c0 = Symbol.for("react.strict_mode"),
  h0 = Symbol.for("react.profiler"),
  d0 = Symbol.for("react.provider"),
  f0 = Symbol.for("react.context"),
  g0 = Symbol.for("react.forward_ref"),
  p0 = Symbol.for("react.suspense"),
  m0 = Symbol.for("react.memo"),
  _0 = Symbol.for("react.lazy"),
  Ed = Symbol.iterator;
function y0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Ed && t[Ed]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Pg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ag = Object.assign,
  Dg = {};
function Zr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Dg),
    (this.updater = n || Pg);
}
Zr.prototype.isReactComponent = {};
Zr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Zr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Og() {}
Og.prototype = Zr.prototype;
function bc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Dg),
    (this.updater = n || Pg);
}
var Xc = (bc.prototype = new Og());
Xc.constructor = bc;
Ag(Xc, Zr.prototype);
Xc.isPureReactComponent = !0;
var wd = Array.isArray,
  Fg = Object.prototype.hasOwnProperty,
  jc = { current: null },
  Ng = { key: !0, ref: !0, __self: !0, __source: !0 };
function zg(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Fg.call(e, i) && !Ng.hasOwnProperty(i) && (r[i] = e[i]);
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  if (t && t.defaultProps)
    for (i in ((l = t.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
  return {
    $$typeof: po,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: jc.current,
  };
}
function v0(t, e) {
  return {
    $$typeof: po,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Uc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === po;
}
function E0(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var xd = /\/+/g;
function ja(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? E0("" + t.key)
    : e.toString(36);
}
function al(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case po:
          case a0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + ja(o, 0) : i),
      wd(r)
        ? ((n = ""),
          t != null && (n = t.replace(xd, "$&/") + "/"),
          al(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (Uc(r) &&
            (r = v0(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(xd, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), wd(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var a = i + ja(s, l);
      o += al(s, e, n, a, r);
    }
  else if (((a = y0(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (a = i + ja(s, l++)), (o += al(s, e, n, a, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Do(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    al(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function w0(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var tt = { current: null },
  ul = { transition: null },
  x0 = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: ul,
    ReactCurrentOwner: jc,
  };
function Gg() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Do,
  forEach: function (t, e, n) {
    Do(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Do(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Do(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Uc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
q.Component = Zr;
q.Fragment = u0;
q.Profiler = h0;
q.PureComponent = bc;
q.StrictMode = c0;
q.Suspense = p0;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x0;
q.act = Gg;
q.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = Ag({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = jc.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      Fg.call(e, a) &&
        !Ng.hasOwnProperty(a) &&
        (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  return { $$typeof: po, type: t.type, key: r, ref: s, props: i, _owner: o };
};
q.createContext = function (t) {
  return (
    (t = {
      $$typeof: f0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: d0, _context: t }),
    (t.Consumer = t)
  );
};
q.createElement = zg;
q.createFactory = function (t) {
  var e = zg.bind(null, t);
  return (e.type = t), e;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (t) {
  return { $$typeof: g0, render: t };
};
q.isValidElement = Uc;
q.lazy = function (t) {
  return { $$typeof: _0, _payload: { _status: -1, _result: t }, _init: w0 };
};
q.memo = function (t, e) {
  return { $$typeof: m0, type: t, compare: e === void 0 ? null : e };
};
q.startTransition = function (t) {
  var e = ul.transition;
  ul.transition = {};
  try {
    t();
  } finally {
    ul.transition = e;
  }
};
q.unstable_act = Gg;
q.useCallback = function (t, e) {
  return tt.current.useCallback(t, e);
};
q.useContext = function (t) {
  return tt.current.useContext(t);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (t) {
  return tt.current.useDeferredValue(t);
};
q.useEffect = function (t, e) {
  return tt.current.useEffect(t, e);
};
q.useId = function () {
  return tt.current.useId();
};
q.useImperativeHandle = function (t, e, n) {
  return tt.current.useImperativeHandle(t, e, n);
};
q.useInsertionEffect = function (t, e) {
  return tt.current.useInsertionEffect(t, e);
};
q.useLayoutEffect = function (t, e) {
  return tt.current.useLayoutEffect(t, e);
};
q.useMemo = function (t, e) {
  return tt.current.useMemo(t, e);
};
q.useReducer = function (t, e, n) {
  return tt.current.useReducer(t, e, n);
};
q.useRef = function (t) {
  return tt.current.useRef(t);
};
q.useState = function (t) {
  return tt.current.useState(t);
};
q.useSyncExternalStore = function (t, e, n) {
  return tt.current.useSyncExternalStore(t, e, n);
};
q.useTransition = function () {
  return tt.current.useTransition();
};
q.version = "18.3.1";
Mg.exports = q;
var Se = Mg.exports;
const Y = l0(Se);
var Pu = {},
  Wg = { exports: {} },
  xt = {},
  bg = { exports: {} },
  Xg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(I, A) {
    var P = I.length;
    I.push(A);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        b = I[W];
      if (0 < r(b, A)) (I[W] = A), (I[P] = b), (P = W);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function i(I) {
    if (I.length === 0) return null;
    var A = I[0],
      P = I.pop();
    if (P !== A) {
      I[0] = P;
      e: for (var W = 0, b = I.length, ue = b >>> 1; W < ue; ) {
        var L = 2 * (W + 1) - 1,
          ae = I[L],
          Ce = L + 1,
          fe = I[Ce];
        if (0 > r(ae, P))
          Ce < b && 0 > r(fe, ae)
            ? ((I[W] = fe), (I[Ce] = P), (W = Ce))
            : ((I[W] = ae), (I[L] = P), (W = L));
        else if (Ce < b && 0 > r(fe, P)) (I[W] = fe), (I[Ce] = P), (W = Ce);
        else break e;
      }
    }
    return A;
  }
  function r(I, A) {
    var P = I.sortIndex - A.sortIndex;
    return P !== 0 ? P : I.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    f = !1,
    p = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(I) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) i(u);
      else if (A.startTime <= I)
        i(u), (A.sortIndex = A.expirationTime), e(a, A);
      else break;
      A = n(u);
    }
  }
  function v(I) {
    if (((y = !1), _(I), !p))
      if (n(a) !== null) (p = !0), O(w);
      else {
        var A = n(u);
        A !== null && X(v, A.startTime - I);
      }
  }
  function w(I, A) {
    (p = !1), y && ((y = !1), m(x), (x = -1)), (f = !0);
    var P = d;
    try {
      for (
        _(A), h = n(a);
        h !== null && (!(h.expirationTime > A) || (I && !F()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var b = W(h.expirationTime <= A);
          (A = t.unstable_now()),
            typeof b == "function" ? (h.callback = b) : h === n(a) && i(a),
            _(A);
        } else i(a);
        h = n(a);
      }
      if (h !== null) var ue = !0;
      else {
        var L = n(u);
        L !== null && X(v, L.startTime - A), (ue = !1);
      }
      return ue;
    } finally {
      (h = null), (d = P), (f = !1);
    }
  }
  var C = !1,
    S = null,
    x = -1,
    R = 5,
    M = -1;
  function F() {
    return !(t.unstable_now() - M < R);
  }
  function j() {
    if (S !== null) {
      var I = t.unstable_now();
      M = I;
      var A = !0;
      try {
        A = S(!0, I);
      } finally {
        A ? V() : ((C = !1), (S = null));
      }
    } else C = !1;
  }
  var V;
  if (typeof g == "function")
    V = function () {
      g(j);
    };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(),
      K = Z.port2;
    (Z.port1.onmessage = j),
      (V = function () {
        K.postMessage(null);
      });
  } else
    V = function () {
      E(j, 0);
    };
  function O(I) {
    (S = I), C || ((C = !0), V());
  }
  function X(I, A) {
    x = E(function () {
      I(t.unstable_now());
    }, A);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      p || f || ((p = !0), O(w));
    }),
    (t.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (I) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var P = d;
      d = A;
      try {
        return I();
      } finally {
        d = P;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (I, A) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var P = d;
      d = I;
      try {
        return A();
      } finally {
        d = P;
      }
    }),
    (t.unstable_scheduleCallback = function (I, A, P) {
      var W = t.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        I)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = P + b),
        (I = {
          id: c++,
          callback: A,
          priorityLevel: I,
          startTime: P,
          expirationTime: b,
          sortIndex: -1,
        }),
        P > W
          ? ((I.sortIndex = P),
            e(u, I),
            n(a) === null &&
              I === n(u) &&
              (y ? (m(x), (x = -1)) : (y = !0), X(v, P - W)))
          : ((I.sortIndex = b), e(a, I), p || f || ((p = !0), O(w))),
        I
      );
    }),
    (t.unstable_shouldYield = F),
    (t.unstable_wrapCallback = function (I) {
      var A = d;
      return function () {
        var P = d;
        d = A;
        try {
          return I.apply(this, arguments);
        } finally {
          d = P;
        }
      };
    });
})(Xg);
bg.exports = Xg;
var C0 = bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S0 = Se,
  wt = C0;
function k(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jg = new Set(),
  Ws = {};
function Zi(t, e) {
  Fr(t, e), Fr(t + "Capture", e);
}
function Fr(t, e) {
  for (Ws[t] = e, t = 0; t < e.length; t++) jg.add(e[t]);
}
var On = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Au = Object.prototype.hasOwnProperty,
  T0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cd = {},
  Sd = {};
function R0(t) {
  return Au.call(Sd, t)
    ? !0
    : Au.call(Cd, t)
      ? !1
      : T0.test(t)
        ? (Sd[t] = !0)
        : ((Cd[t] = !0), !1);
}
function I0(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function L0(t, e, n, i) {
  if (e === null || typeof e > "u" || I0(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function nt(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    be[t] = new nt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  be[e] = new nt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  be[t] = new nt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  be[t] = new nt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    be[t] = new nt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  be[t] = new nt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  be[t] = new nt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  be[t] = new nt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  be[t] = new nt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Yc = /[\-:]([a-z])/g;
function Bc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Yc, Bc);
    be[e] = new nt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Yc, Bc);
    be[e] = new nt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Yc, Bc);
  be[e] = new nt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  be[t] = new nt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  be[t] = new nt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Vc(t, e, n, i) {
  var r = be.hasOwnProperty(e) ? be[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (L0(e, n, r, i) && (n = null),
    i || r === null
      ? R0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
        ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((e = r.attributeName),
          (i = r.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Wn = S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oo = Symbol.for("react.element"),
  hr = Symbol.for("react.portal"),
  dr = Symbol.for("react.fragment"),
  Kc = Symbol.for("react.strict_mode"),
  Du = Symbol.for("react.profiler"),
  Ug = Symbol.for("react.provider"),
  Yg = Symbol.for("react.context"),
  Zc = Symbol.for("react.forward_ref"),
  Ou = Symbol.for("react.suspense"),
  Fu = Symbol.for("react.suspense_list"),
  Hc = Symbol.for("react.memo"),
  $n = Symbol.for("react.lazy"),
  Bg = Symbol.for("react.offscreen"),
  Td = Symbol.iterator;
function as(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Td && t[Td]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ve = Object.assign,
  Ua;
function Es(t) {
  if (Ua === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Ua = (e && e[1]) || "";
    }
  return (
    `
` +
    Ua +
    t
  );
}
var Ya = !1;
function Ba(t, e) {
  if (!t || Ya) return "";
  Ya = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          i = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && r[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (r[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || r[o] !== s[l])) {
                var a =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Ya = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Es(t) : "";
}
function k0(t) {
  switch (t.tag) {
    case 5:
      return Es(t.type);
    case 16:
      return Es("Lazy");
    case 13:
      return Es("Suspense");
    case 19:
      return Es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Ba(t.type, !1)), t;
    case 11:
      return (t = Ba(t.type.render, !1)), t;
    case 1:
      return (t = Ba(t.type, !0)), t;
    default:
      return "";
  }
}
function Nu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case dr:
      return "Fragment";
    case hr:
      return "Portal";
    case Du:
      return "Profiler";
    case Kc:
      return "StrictMode";
    case Ou:
      return "Suspense";
    case Fu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Yg:
        return (t.displayName || "Context") + ".Consumer";
      case Ug:
        return (t._context.displayName || "Context") + ".Provider";
      case Zc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Hc:
        return (
          (e = t.displayName || null), e !== null ? e : Nu(t.type) || "Memo"
        );
      case $n:
        (e = t._payload), (t = t._init);
        try {
          return Nu(t(e));
        } catch {}
    }
  return null;
}
function M0(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Nu(e);
    case 8:
      return e === Kc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function gi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Vg(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function P0(t) {
  var e = Vg(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Fo(t) {
  t._valueTracker || (t._valueTracker = P0(t));
}
function Kg(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = Vg(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function wl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function zu(t, e) {
  var n = e.checked;
  return ve({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Rd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = gi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Zg(t, e) {
  (e = e.checked), e != null && Vc(t, "checked", e, !1);
}
function Gu(t, e) {
  Zg(t, e);
  var n = gi(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Wu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Wu(t, e.type, gi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Id(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Wu(t, e, n) {
  (e !== "number" || wl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ws = Array.isArray;
function Rr(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + gi(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function bu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ve({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Ld(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(k(92));
      if (ws(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: gi(n) };
}
function Hg(t, e) {
  var n = gi(e.value),
    i = gi(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function kd(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function $g(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xu(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? $g(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var No,
  qg = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        No = No || document.createElement("div"),
          No.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = No.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function bs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Is = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  A0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Is).forEach(function (t) {
  A0.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Is[e] = Is[t]);
  });
});
function Qg(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Is.hasOwnProperty(t) && Is[t])
      ? ("" + e).trim()
      : e + "px";
}
function Jg(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = Qg(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var D0 = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ju(t, e) {
  if (e) {
    if (D0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(k(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function Uu(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yu = null;
function $c(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Bu = null,
  Ir = null,
  Lr = null;
function Md(t) {
  if ((t = yo(t))) {
    if (typeof Bu != "function") throw Error(k(280));
    var e = t.stateNode;
    e && ((e = oa(e)), Bu(t.stateNode, t.type, e));
  }
}
function ep(t) {
  Ir ? (Lr ? Lr.push(t) : (Lr = [t])) : (Ir = t);
}
function tp() {
  if (Ir) {
    var t = Ir,
      e = Lr;
    if (((Lr = Ir = null), Md(t), e)) for (t = 0; t < e.length; t++) Md(e[t]);
  }
}
function np(t, e) {
  return t(e);
}
function ip() {}
var Va = !1;
function rp(t, e, n) {
  if (Va) return t(e, n);
  Va = !0;
  try {
    return np(t, e, n);
  } finally {
    (Va = !1), (Ir !== null || Lr !== null) && (ip(), tp());
  }
}
function Xs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = oa(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(k(231, e, typeof n));
  return n;
}
var Vu = !1;
if (On)
  try {
    var us = {};
    Object.defineProperty(us, "passive", {
      get: function () {
        Vu = !0;
      },
    }),
      window.addEventListener("test", us, us),
      window.removeEventListener("test", us, us);
  } catch {
    Vu = !1;
  }
function O0(t, e, n, i, r, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ls = !1,
  xl = null,
  Cl = !1,
  Ku = null,
  F0 = {
    onError: function (t) {
      (Ls = !0), (xl = t);
    },
  };
function N0(t, e, n, i, r, s, o, l, a) {
  (Ls = !1), (xl = null), O0.apply(F0, arguments);
}
function z0(t, e, n, i, r, s, o, l, a) {
  if ((N0.apply(this, arguments), Ls)) {
    if (Ls) {
      var u = xl;
      (Ls = !1), (xl = null);
    } else throw Error(k(198));
    Cl || ((Cl = !0), (Ku = u));
  }
}
function Hi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function sp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Pd(t) {
  if (Hi(t) !== t) throw Error(k(188));
}
function G0(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Hi(t)), e === null)) throw Error(k(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return Pd(r), t;
        if (s === i) return Pd(r), e;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, l = r.child; l; ) {
        if (l === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (l === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (l === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== i) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? t : e;
}
function op(t) {
  return (t = G0(t)), t !== null ? lp(t) : null;
}
function lp(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = lp(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var ap = wt.unstable_scheduleCallback,
  Ad = wt.unstable_cancelCallback,
  W0 = wt.unstable_shouldYield,
  b0 = wt.unstable_requestPaint,
  Te = wt.unstable_now,
  X0 = wt.unstable_getCurrentPriorityLevel,
  qc = wt.unstable_ImmediatePriority,
  up = wt.unstable_UserBlockingPriority,
  Sl = wt.unstable_NormalPriority,
  j0 = wt.unstable_LowPriority,
  cp = wt.unstable_IdlePriority,
  na = null,
  hn = null;
function U0(t) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(na, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : V0,
  Y0 = Math.log,
  B0 = Math.LN2;
function V0(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Y0(t) / B0) | 0)) | 0;
}
var zo = 64,
  Go = 4194304;
function xs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Tl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~r;
    l !== 0 ? (i = xs(l)) : ((s &= o), s !== 0 && (i = xs(s)));
  } else (o = n & ~r), o !== 0 ? (i = xs(o)) : s !== 0 && (i = xs(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - $t(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function K0(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Z0(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - $t(s),
      l = 1 << o,
      a = r[o];
    a === -1
      ? (!(l & n) || l & i) && (r[o] = K0(l, e))
      : a <= e && (t.expiredLanes |= l),
      (s &= ~l);
  }
}
function Zu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function hp() {
  var t = zo;
  return (zo <<= 1), !(zo & 4194240) && (zo = 64), t;
}
function Ka(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function mo(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - $t(e)),
    (t[e] = n);
}
function H0(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - $t(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Qc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - $t(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var le = 0;
function dp(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fp,
  Jc,
  gp,
  pp,
  mp,
  Hu = !1,
  Wo = [],
  si = null,
  oi = null,
  li = null,
  js = new Map(),
  Us = new Map(),
  Jn = [],
  $0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Dd(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      si = null;
      break;
    case "dragenter":
    case "dragleave":
      oi = null;
      break;
    case "mouseover":
    case "mouseout":
      li = null;
      break;
    case "pointerover":
    case "pointerout":
      js.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Us.delete(e.pointerId);
  }
}
function cs(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = yo(e)), e !== null && Jc(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function q0(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (si = cs(si, t, e, n, i, r)), !0;
    case "dragenter":
      return (oi = cs(oi, t, e, n, i, r)), !0;
    case "mouseover":
      return (li = cs(li, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return js.set(s, cs(js.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), Us.set(s, cs(Us.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function _p(t) {
  var e = Pi(t.target);
  if (e !== null) {
    var n = Hi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = sp(n)), e !== null)) {
          (t.blockedOn = e),
            mp(t.priority, function () {
              gp(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function cl(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = $u(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (Yu = i), n.target.dispatchEvent(i), (Yu = null);
    } else return (e = yo(n)), e !== null && Jc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Od(t, e, n) {
  cl(t) && n.delete(e);
}
function Q0() {
  (Hu = !1),
    si !== null && cl(si) && (si = null),
    oi !== null && cl(oi) && (oi = null),
    li !== null && cl(li) && (li = null),
    js.forEach(Od),
    Us.forEach(Od);
}
function hs(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Hu ||
      ((Hu = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, Q0)));
}
function Ys(t) {
  function e(r) {
    return hs(r, t);
  }
  if (0 < Wo.length) {
    hs(Wo[0], t);
    for (var n = 1; n < Wo.length; n++) {
      var i = Wo[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    si !== null && hs(si, t),
      oi !== null && hs(oi, t),
      li !== null && hs(li, t),
      js.forEach(e),
      Us.forEach(e),
      n = 0;
    n < Jn.length;
    n++
  )
    (i = Jn[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); )
    _p(n), n.blockedOn === null && Jn.shift();
}
var kr = Wn.ReactCurrentBatchConfig,
  Rl = !0;
function J0(t, e, n, i) {
  var r = le,
    s = kr.transition;
  kr.transition = null;
  try {
    (le = 1), eh(t, e, n, i);
  } finally {
    (le = r), (kr.transition = s);
  }
}
function ey(t, e, n, i) {
  var r = le,
    s = kr.transition;
  kr.transition = null;
  try {
    (le = 4), eh(t, e, n, i);
  } finally {
    (le = r), (kr.transition = s);
  }
}
function eh(t, e, n, i) {
  if (Rl) {
    var r = $u(t, e, n, i);
    if (r === null) iu(t, e, i, Il, n), Dd(t, i);
    else if (q0(r, t, e, n, i)) i.stopPropagation();
    else if ((Dd(t, i), e & 4 && -1 < $0.indexOf(t))) {
      for (; r !== null; ) {
        var s = yo(r);
        if (
          (s !== null && fp(s),
          (s = $u(t, e, n, i)),
          s === null && iu(t, e, i, Il, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else iu(t, e, i, null, n);
  }
}
var Il = null;
function $u(t, e, n, i) {
  if (((Il = null), (t = $c(i)), (t = Pi(t)), t !== null))
    if (((e = Hi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = sp(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Il = t), null;
}
function yp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (X0()) {
        case qc:
          return 1;
        case up:
          return 4;
        case Sl:
        case j0:
          return 16;
        case cp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ti = null,
  th = null,
  hl = null;
function vp() {
  if (hl) return hl;
  var t,
    e = th,
    n = e.length,
    i,
    r = "value" in ti ? ti.value : ti.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (hl = r.slice(t, 1 < i ? 1 - i : void 0));
}
function dl(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function bo() {
  return !0;
}
function Fd() {
  return !1;
}
function Ct(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? bo
        : Fd),
      (this.isPropagationStopped = Fd),
      this
    );
  }
  return (
    ve(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bo));
      },
      persist: function () {},
      isPersistent: bo,
    }),
    e
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nh = Ct(Hr),
  _o = ve({}, Hr, { view: 0, detail: 0 }),
  ty = Ct(_o),
  Za,
  Ha,
  ds,
  ia = ve({}, _o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ih,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ds &&
            (ds && t.type === "mousemove"
              ? ((Za = t.screenX - ds.screenX), (Ha = t.screenY - ds.screenY))
              : (Ha = Za = 0),
            (ds = t)),
          Za);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Ha;
    },
  }),
  Nd = Ct(ia),
  ny = ve({}, ia, { dataTransfer: 0 }),
  iy = Ct(ny),
  ry = ve({}, _o, { relatedTarget: 0 }),
  $a = Ct(ry),
  sy = ve({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oy = Ct(sy),
  ly = ve({}, Hr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  ay = Ct(ly),
  uy = ve({}, Hr, { data: 0 }),
  zd = Ct(uy),
  cy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fy(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = dy[t]) ? !!e[t] : !1;
}
function ih() {
  return fy;
}
var gy = ve({}, _o, {
    key: function (t) {
      if (t.key) {
        var e = cy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = dl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? hy[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ih,
    charCode: function (t) {
      return t.type === "keypress" ? dl(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? dl(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  py = Ct(gy),
  my = ve({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gd = Ct(my),
  _y = ve({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ih,
  }),
  yy = Ct(_y),
  vy = ve({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = Ct(vy),
  wy = ve({}, ia, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xy = Ct(wy),
  Cy = [9, 13, 27, 32],
  rh = On && "CompositionEvent" in window,
  ks = null;
On && "documentMode" in document && (ks = document.documentMode);
var Sy = On && "TextEvent" in window && !ks,
  Ep = On && (!rh || (ks && 8 < ks && 11 >= ks)),
  Wd = " ",
  bd = !1;
function wp(t, e) {
  switch (t) {
    case "keyup":
      return Cy.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xp(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var fr = !1;
function Ty(t, e) {
  switch (t) {
    case "compositionend":
      return xp(e);
    case "keypress":
      return e.which !== 32 ? null : ((bd = !0), Wd);
    case "textInput":
      return (t = e.data), t === Wd && bd ? null : t;
    default:
      return null;
  }
}
function Ry(t, e) {
  if (fr)
    return t === "compositionend" || (!rh && wp(t, e))
      ? ((t = vp()), (hl = th = ti = null), (fr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Ep && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Iy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Iy[t.type] : e === "textarea";
}
function Cp(t, e, n, i) {
  ep(i),
    (e = Ll(e, "onChange")),
    0 < e.length &&
      ((n = new nh("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var Ms = null,
  Bs = null;
function Ly(t) {
  Op(t, 0);
}
function ra(t) {
  var e = mr(t);
  if (Kg(e)) return t;
}
function ky(t, e) {
  if (t === "change") return e;
}
var Sp = !1;
if (On) {
  var qa;
  if (On) {
    var Qa = "oninput" in document;
    if (!Qa) {
      var jd = document.createElement("div");
      jd.setAttribute("oninput", "return;"),
        (Qa = typeof jd.oninput == "function");
    }
    qa = Qa;
  } else qa = !1;
  Sp = qa && (!document.documentMode || 9 < document.documentMode);
}
function Ud() {
  Ms && (Ms.detachEvent("onpropertychange", Tp), (Bs = Ms = null));
}
function Tp(t) {
  if (t.propertyName === "value" && ra(Bs)) {
    var e = [];
    Cp(e, Bs, t, $c(t)), rp(Ly, e);
  }
}
function My(t, e, n) {
  t === "focusin"
    ? (Ud(), (Ms = e), (Bs = n), Ms.attachEvent("onpropertychange", Tp))
    : t === "focusout" && Ud();
}
function Py(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ra(Bs);
}
function Ay(t, e) {
  if (t === "click") return ra(e);
}
function Dy(t, e) {
  if (t === "input" || t === "change") return ra(e);
}
function Oy(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Jt = typeof Object.is == "function" ? Object.is : Oy;
function Vs(t, e) {
  if (Jt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Au.call(e, r) || !Jt(t[r], e[r])) return !1;
  }
  return !0;
}
function Yd(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Bd(t, e) {
  var n = Yd(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yd(n);
  }
}
function Rp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Rp(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Ip() {
  for (var t = window, e = wl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = wl(t.document);
  }
  return e;
}
function sh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Fy(t) {
  var e = Ip(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Rp(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && sh(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Bd(n, s));
        var o = Bd(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Ny = On && "documentMode" in document && 11 >= document.documentMode,
  gr = null,
  qu = null,
  Ps = null,
  Qu = !1;
function Vd(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qu ||
    gr == null ||
    gr !== wl(i) ||
    ((i = gr),
    "selectionStart" in i && sh(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ps && Vs(Ps, i)) ||
      ((Ps = i),
      (i = Ll(qu, "onSelect")),
      0 < i.length &&
        ((e = new nh("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = gr))));
}
function Xo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var pr = {
    animationend: Xo("Animation", "AnimationEnd"),
    animationiteration: Xo("Animation", "AnimationIteration"),
    animationstart: Xo("Animation", "AnimationStart"),
    transitionend: Xo("Transition", "TransitionEnd"),
  },
  Ja = {},
  Lp = {};
On &&
  ((Lp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pr.animationend.animation,
    delete pr.animationiteration.animation,
    delete pr.animationstart.animation),
  "TransitionEvent" in window || delete pr.transitionend.transition);
function sa(t) {
  if (Ja[t]) return Ja[t];
  if (!pr[t]) return t;
  var e = pr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Lp) return (Ja[t] = e[n]);
  return t;
}
var kp = sa("animationend"),
  Mp = sa("animationiteration"),
  Pp = sa("animationstart"),
  Ap = sa("transitionend"),
  Dp = new Map(),
  Kd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ei(t, e) {
  Dp.set(t, e), Zi(e, [t]);
}
for (var eu = 0; eu < Kd.length; eu++) {
  var tu = Kd[eu],
    zy = tu.toLowerCase(),
    Gy = tu[0].toUpperCase() + tu.slice(1);
  Ei(zy, "on" + Gy);
}
Ei(kp, "onAnimationEnd");
Ei(Mp, "onAnimationIteration");
Ei(Pp, "onAnimationStart");
Ei("dblclick", "onDoubleClick");
Ei("focusin", "onFocus");
Ei("focusout", "onBlur");
Ei(Ap, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
Zi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Zi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Zi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Zi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Zi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Cs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));
function Zd(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), z0(i, e, void 0, t), (t.currentTarget = null);
}
function Op(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var l = i[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && r.isPropagationStopped())) break e;
          Zd(r, l, u), (s = a);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((l = i[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && r.isPropagationStopped())
          )
            break e;
          Zd(r, l, u), (s = a);
        }
    }
  }
  if (Cl) throw ((t = Ku), (Cl = !1), (Ku = null), t);
}
function he(t, e) {
  var n = e[ic];
  n === void 0 && (n = e[ic] = new Set());
  var i = t + "__bubble";
  n.has(i) || (Fp(e, t, 2, !1), n.add(i));
}
function nu(t, e, n) {
  var i = 0;
  e && (i |= 4), Fp(n, t, i, e);
}
var jo = "_reactListening" + Math.random().toString(36).slice(2);
function Ks(t) {
  if (!t[jo]) {
    (t[jo] = !0),
      jg.forEach(function (n) {
        n !== "selectionchange" && (Wy.has(n) || nu(n, !1, t), nu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[jo] || ((e[jo] = !0), nu("selectionchange", !1, e));
  }
}
function Fp(t, e, n, i) {
  switch (yp(e)) {
    case 1:
      var r = J0;
      break;
    case 4:
      r = ey;
      break;
    default:
      r = eh;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !Vu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
}
function iu(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var l = i.stateNode.containerInfo;
        if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Pi(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            i = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      i = i.return;
    }
  rp(function () {
    var u = s,
      c = $c(n),
      h = [];
    e: {
      var d = Dp.get(t);
      if (d !== void 0) {
        var f = nh,
          p = t;
        switch (t) {
          case "keypress":
            if (dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = py;
            break;
          case "focusin":
            (p = "focus"), (f = $a);
            break;
          case "focusout":
            (p = "blur"), (f = $a);
            break;
          case "beforeblur":
          case "afterblur":
            f = $a;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Nd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = iy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = yy;
            break;
          case kp:
          case Mp:
          case Pp:
            f = oy;
            break;
          case Ap:
            f = Ey;
            break;
          case "scroll":
            f = ty;
            break;
          case "wheel":
            f = xy;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Gd;
        }
        var y = (e & 4) !== 0,
          E = !y && t === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var g = u, _; g !== null; ) {
          _ = g;
          var v = _.stateNode;
          if (
            (_.tag === 5 &&
              v !== null &&
              ((_ = v),
              m !== null && ((v = Xs(g, m)), v != null && y.push(Zs(g, v, _)))),
            E)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((d = new f(d, p, null, n, c)), h.push({ event: d, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (f = t === "mouseout" || t === "pointerout"),
          d &&
            n !== Yu &&
            (p = n.relatedTarget || n.fromElement) &&
            (Pi(p) || p[Fn]))
        )
          break e;
        if (
          (f || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          f
            ? ((p = n.relatedTarget || n.toElement),
              (f = u),
              (p = p ? Pi(p) : null),
              p !== null &&
                ((E = Hi(p)), p !== E || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((f = null), (p = u)),
          f !== p)
        ) {
          if (
            ((y = Nd),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = Gd),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (E = f == null ? d : mr(f)),
            (_ = p == null ? d : mr(p)),
            (d = new y(v, g + "leave", f, n, c)),
            (d.target = E),
            (d.relatedTarget = _),
            (v = null),
            Pi(c) === u &&
              ((y = new y(m, g + "enter", p, n, c)),
              (y.target = _),
              (y.relatedTarget = E),
              (v = y)),
            (E = v),
            f && p)
          )
            t: {
              for (y = f, m = p, g = 0, _ = y; _; _ = er(_)) g++;
              for (_ = 0, v = m; v; v = er(v)) _++;
              for (; 0 < g - _; ) (y = er(y)), g--;
              for (; 0 < _ - g; ) (m = er(m)), _--;
              for (; g--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = er(y)), (m = er(m));
              }
              y = null;
            }
          else y = null;
          f !== null && Hd(h, d, f, y, !1),
            p !== null && E !== null && Hd(h, E, p, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? mr(u) : window),
          (f = d.nodeName && d.nodeName.toLowerCase()),
          f === "select" || (f === "input" && d.type === "file"))
        )
          var w = ky;
        else if (Xd(d))
          if (Sp) w = Dy;
          else {
            w = Py;
            var C = My;
          }
        else
          (f = d.nodeName) &&
            f.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = Ay);
        if (w && (w = w(t, u))) {
          Cp(h, w, n, c);
          break e;
        }
        C && C(t, d, u),
          t === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Wu(d, "number", d.value);
      }
      switch (((C = u ? mr(u) : window), t)) {
        case "focusin":
          (Xd(C) || C.contentEditable === "true") &&
            ((gr = C), (qu = u), (Ps = null));
          break;
        case "focusout":
          Ps = qu = gr = null;
          break;
        case "mousedown":
          Qu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qu = !1), Vd(h, n, c);
          break;
        case "selectionchange":
          if (Ny) break;
        case "keydown":
        case "keyup":
          Vd(h, n, c);
      }
      var S;
      if (rh)
        e: {
          switch (t) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        fr
          ? wp(t, n) && (x = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Ep &&
          n.locale !== "ko" &&
          (fr || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && fr && (S = vp())
            : ((ti = c),
              (th = "value" in ti ? ti.value : ti.textContent),
              (fr = !0))),
        (C = Ll(u, x)),
        0 < C.length &&
          ((x = new zd(x, t, null, n, c)),
          h.push({ event: x, listeners: C }),
          S ? (x.data = S) : ((S = xp(n)), S !== null && (x.data = S)))),
        (S = Sy ? Ty(t, n) : Ry(t, n)) &&
          ((u = Ll(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zd("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    Op(h, e);
  });
}
function Zs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ll(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = Xs(t, n)),
      s != null && i.unshift(Zs(t, s, r)),
      (s = Xs(t, e)),
      s != null && i.push(Zs(t, s, r))),
      (t = t.return);
  }
  return i;
}
function er(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Hd(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === i) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      r
        ? ((a = Xs(n, s)), a != null && o.unshift(Zs(n, a, l)))
        : r || ((a = Xs(n, s)), a != null && o.push(Zs(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var by = /\r\n?/g,
  Xy = /\u0000|\uFFFD/g;
function $d(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      by,
      `
`,
    )
    .replace(Xy, "");
}
function Uo(t, e, n) {
  if (((e = $d(e)), $d(t) !== e && n)) throw Error(k(425));
}
function kl() {}
var Ju = null,
  ec = null;
function tc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var nc = typeof setTimeout == "function" ? setTimeout : void 0,
  jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qd = typeof Promise == "function" ? Promise : void 0,
  Uy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qd < "u"
        ? function (t) {
            return qd.resolve(null).then(t).catch(Yy);
          }
        : nc;
function Yy(t) {
  setTimeout(function () {
    throw t;
  });
}
function ru(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), Ys(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  Ys(e);
}
function ai(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Qd(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  on = "__reactFiber$" + $r,
  Hs = "__reactProps$" + $r,
  Fn = "__reactContainer$" + $r,
  ic = "__reactEvents$" + $r,
  By = "__reactListeners$" + $r,
  Vy = "__reactHandles$" + $r;
function Pi(t) {
  var e = t[on];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Fn] || n[on])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Qd(t); t !== null; ) {
          if ((n = t[on])) return n;
          t = Qd(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function yo(t) {
  return (
    (t = t[on] || t[Fn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function mr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(k(33));
}
function oa(t) {
  return t[Hs] || null;
}
var rc = [],
  _r = -1;
function wi(t) {
  return { current: t };
}
function de(t) {
  0 > _r || ((t.current = rc[_r]), (rc[_r] = null), _r--);
}
function ce(t, e) {
  _r++, (rc[_r] = t.current), (t.current = e);
}
var pi = {},
  $e = wi(pi),
  ct = wi(!1),
  Xi = pi;
function Nr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return pi;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function ht(t) {
  return (t = t.childContextTypes), t != null;
}
function Ml() {
  de(ct), de($e);
}
function Jd(t, e, n) {
  if ($e.current !== pi) throw Error(k(168));
  ce($e, e), ce(ct, n);
}
function Np(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(k(108, M0(t) || "Unknown", r));
  return ve({}, n, i);
}
function Pl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || pi),
    (Xi = $e.current),
    ce($e, t),
    ce(ct, ct.current),
    !0
  );
}
function ef(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(k(169));
  n
    ? ((t = Np(t, e, Xi)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      de(ct),
      de($e),
      ce($e, t))
    : de(ct),
    ce(ct, n);
}
var Rn = null,
  la = !1,
  su = !1;
function zp(t) {
  Rn === null ? (Rn = [t]) : Rn.push(t);
}
function Ky(t) {
  (la = !0), zp(t);
}
function xi() {
  if (!su && Rn !== null) {
    su = !0;
    var t = 0,
      e = le;
    try {
      var n = Rn;
      for (le = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (Rn = null), (la = !1);
    } catch (r) {
      throw (Rn !== null && (Rn = Rn.slice(t + 1)), ap(qc, xi), r);
    } finally {
      (le = e), (su = !1);
    }
  }
  return null;
}
var yr = [],
  vr = 0,
  Al = null,
  Dl = 0,
  Mt = [],
  Pt = 0,
  ji = null,
  Ln = 1,
  kn = "";
function Li(t, e) {
  (yr[vr++] = Dl), (yr[vr++] = Al), (Al = t), (Dl = e);
}
function Gp(t, e, n) {
  (Mt[Pt++] = Ln), (Mt[Pt++] = kn), (Mt[Pt++] = ji), (ji = t);
  var i = Ln;
  t = kn;
  var r = 32 - $t(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - $t(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Ln = (1 << (32 - $t(e) + r)) | (n << r) | i),
      (kn = s + t);
  } else (Ln = (1 << s) | (n << r) | i), (kn = t);
}
function oh(t) {
  t.return !== null && (Li(t, 1), Gp(t, 1, 0));
}
function lh(t) {
  for (; t === Al; )
    (Al = yr[--vr]), (yr[vr] = null), (Dl = yr[--vr]), (yr[vr] = null);
  for (; t === ji; )
    (ji = Mt[--Pt]),
      (Mt[Pt] = null),
      (kn = Mt[--Pt]),
      (Mt[Pt] = null),
      (Ln = Mt[--Pt]),
      (Mt[Pt] = null);
}
var Et = null,
  yt = null,
  ge = !1,
  Zt = null;
function Wp(t, e) {
  var n = Dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function tf(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Et = t), (yt = ai(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Et = t), (yt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = ji !== null ? { id: Ln, overflow: kn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Dt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Et = t),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function oc(t) {
  if (ge) {
    var e = yt;
    if (e) {
      var n = e;
      if (!tf(t, e)) {
        if (sc(t)) throw Error(k(418));
        e = ai(n.nextSibling);
        var i = Et;
        e && tf(t, e)
          ? Wp(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t));
      }
    } else {
      if (sc(t)) throw Error(k(418));
      (t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t);
    }
  }
}
function nf(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Et = t;
}
function Yo(t) {
  if (t !== Et) return !1;
  if (!ge) return nf(t), (ge = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !tc(t.type, t.memoizedProps))),
    e && (e = yt))
  ) {
    if (sc(t)) throw (bp(), Error(k(418)));
    for (; e; ) Wp(t, e), (e = ai(e.nextSibling));
  }
  if ((nf(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(k(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              yt = ai(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      yt = null;
    }
  } else yt = Et ? ai(t.stateNode.nextSibling) : null;
  return !0;
}
function bp() {
  for (var t = yt; t; ) t = ai(t.nextSibling);
}
function zr() {
  (yt = Et = null), (ge = !1);
}
function ah(t) {
  Zt === null ? (Zt = [t]) : Zt.push(t);
}
var Zy = Wn.ReactCurrentBatchConfig;
function fs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(k(147, t));
      var r = i,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = r.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, t));
  }
  return t;
}
function Bo(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      k(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function rf(t) {
  var e = t._init;
  return e(t._payload);
}
function Xp(t) {
  function e(m, g) {
    if (t) {
      var _ = m.deletions;
      _ === null ? ((m.deletions = [g]), (m.flags |= 16)) : _.push(g);
    }
  }
  function n(m, g) {
    if (!t) return null;
    for (; g !== null; ) e(m, g), (g = g.sibling);
    return null;
  }
  function i(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function r(m, g) {
    return (m = di(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, g, _) {
    return (
      (m.index = _),
      t
        ? ((_ = m.alternate),
          _ !== null
            ? ((_ = _.index), _ < g ? ((m.flags |= 2), g) : _)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function o(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, _, v) {
    return g === null || g.tag !== 6
      ? ((g = du(_, m.mode, v)), (g.return = m), g)
      : ((g = r(g, _)), (g.return = m), g);
  }
  function a(m, g, _, v) {
    var w = _.type;
    return w === dr
      ? c(m, g, _.props.children, v, _.key)
      : g !== null &&
          (g.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === $n &&
              rf(w) === g.type))
        ? ((v = r(g, _.props)), (v.ref = fs(m, g, _)), (v.return = m), v)
        : ((v = vl(_.type, _.key, _.props, null, m.mode, v)),
          (v.ref = fs(m, g, _)),
          (v.return = m),
          v);
  }
  function u(m, g, _, v) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== _.containerInfo ||
      g.stateNode.implementation !== _.implementation
      ? ((g = fu(_, m.mode, v)), (g.return = m), g)
      : ((g = r(g, _.children || [])), (g.return = m), g);
  }
  function c(m, g, _, v, w) {
    return g === null || g.tag !== 7
      ? ((g = Wi(_, m.mode, v, w)), (g.return = m), g)
      : ((g = r(g, _)), (g.return = m), g);
  }
  function h(m, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = du("" + g, m.mode, _)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Oo:
          return (
            (_ = vl(g.type, g.key, g.props, null, m.mode, _)),
            (_.ref = fs(m, null, g)),
            (_.return = m),
            _
          );
        case hr:
          return (g = fu(g, m.mode, _)), (g.return = m), g;
        case $n:
          var v = g._init;
          return h(m, v(g._payload), _);
      }
      if (ws(g) || as(g))
        return (g = Wi(g, m.mode, _, null)), (g.return = m), g;
      Bo(m, g);
    }
    return null;
  }
  function d(m, g, _, v) {
    var w = g !== null ? g.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return w !== null ? null : l(m, g, "" + _, v);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Oo:
          return _.key === w ? a(m, g, _, v) : null;
        case hr:
          return _.key === w ? u(m, g, _, v) : null;
        case $n:
          return (w = _._init), d(m, g, w(_._payload), v);
      }
      if (ws(_) || as(_)) return w !== null ? null : c(m, g, _, v, null);
      Bo(m, _);
    }
    return null;
  }
  function f(m, g, _, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (m = m.get(_) || null), l(g, m, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Oo:
          return (m = m.get(v.key === null ? _ : v.key) || null), a(g, m, v, w);
        case hr:
          return (m = m.get(v.key === null ? _ : v.key) || null), u(g, m, v, w);
        case $n:
          var C = v._init;
          return f(m, g, _, C(v._payload), w);
      }
      if (ws(v) || as(v)) return (m = m.get(_) || null), c(g, m, v, w, null);
      Bo(g, v);
    }
    return null;
  }
  function p(m, g, _, v) {
    for (
      var w = null, C = null, S = g, x = (g = 0), R = null;
      S !== null && x < _.length;
      x++
    ) {
      S.index > x ? ((R = S), (S = null)) : (R = S.sibling);
      var M = d(m, S, _[x], v);
      if (M === null) {
        S === null && (S = R);
        break;
      }
      t && S && M.alternate === null && e(m, S),
        (g = s(M, g, x)),
        C === null ? (w = M) : (C.sibling = M),
        (C = M),
        (S = R);
    }
    if (x === _.length) return n(m, S), ge && Li(m, x), w;
    if (S === null) {
      for (; x < _.length; x++)
        (S = h(m, _[x], v)),
          S !== null &&
            ((g = s(S, g, x)), C === null ? (w = S) : (C.sibling = S), (C = S));
      return ge && Li(m, x), w;
    }
    for (S = i(m, S); x < _.length; x++)
      (R = f(S, m, x, _[x], v)),
        R !== null &&
          (t && R.alternate !== null && S.delete(R.key === null ? x : R.key),
          (g = s(R, g, x)),
          C === null ? (w = R) : (C.sibling = R),
          (C = R));
    return (
      t &&
        S.forEach(function (F) {
          return e(m, F);
        }),
      ge && Li(m, x),
      w
    );
  }
  function y(m, g, _, v) {
    var w = as(_);
    if (typeof w != "function") throw Error(k(150));
    if (((_ = w.call(_)), _ == null)) throw Error(k(151));
    for (
      var C = (w = null), S = g, x = (g = 0), R = null, M = _.next();
      S !== null && !M.done;
      x++, M = _.next()
    ) {
      S.index > x ? ((R = S), (S = null)) : (R = S.sibling);
      var F = d(m, S, M.value, v);
      if (F === null) {
        S === null && (S = R);
        break;
      }
      t && S && F.alternate === null && e(m, S),
        (g = s(F, g, x)),
        C === null ? (w = F) : (C.sibling = F),
        (C = F),
        (S = R);
    }
    if (M.done) return n(m, S), ge && Li(m, x), w;
    if (S === null) {
      for (; !M.done; x++, M = _.next())
        (M = h(m, M.value, v)),
          M !== null &&
            ((g = s(M, g, x)), C === null ? (w = M) : (C.sibling = M), (C = M));
      return ge && Li(m, x), w;
    }
    for (S = i(m, S); !M.done; x++, M = _.next())
      (M = f(S, m, x, M.value, v)),
        M !== null &&
          (t && M.alternate !== null && S.delete(M.key === null ? x : M.key),
          (g = s(M, g, x)),
          C === null ? (w = M) : (C.sibling = M),
          (C = M));
    return (
      t &&
        S.forEach(function (j) {
          return e(m, j);
        }),
      ge && Li(m, x),
      w
    );
  }
  function E(m, g, _, v) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === dr &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case Oo:
          e: {
            for (var w = _.key, C = g; C !== null; ) {
              if (C.key === w) {
                if (((w = _.type), w === dr)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (g = r(C, _.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  C.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === $n &&
                    rf(w) === C.type)
                ) {
                  n(m, C.sibling),
                    (g = r(C, _.props)),
                    (g.ref = fs(m, C, _)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, C);
                break;
              } else e(m, C);
              C = C.sibling;
            }
            _.type === dr
              ? ((g = Wi(_.props.children, m.mode, v, _.key)),
                (g.return = m),
                (m = g))
              : ((v = vl(_.type, _.key, _.props, null, m.mode, v)),
                (v.ref = fs(m, g, _)),
                (v.return = m),
                (m = v));
          }
          return o(m);
        case hr:
          e: {
            for (C = _.key; g !== null; ) {
              if (g.key === C)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === _.containerInfo &&
                  g.stateNode.implementation === _.implementation
                ) {
                  n(m, g.sibling),
                    (g = r(g, _.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else e(m, g);
              g = g.sibling;
            }
            (g = fu(_, m.mode, v)), (g.return = m), (m = g);
          }
          return o(m);
        case $n:
          return (C = _._init), E(m, g, C(_._payload), v);
      }
      if (ws(_)) return p(m, g, _, v);
      if (as(_)) return y(m, g, _, v);
      Bo(m, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = r(g, _)), (g.return = m), (m = g))
          : (n(m, g), (g = du(_, m.mode, v)), (g.return = m), (m = g)),
        o(m))
      : n(m, g);
  }
  return E;
}
var Gr = Xp(!0),
  jp = Xp(!1),
  Ol = wi(null),
  Fl = null,
  Er = null,
  uh = null;
function ch() {
  uh = Er = Fl = null;
}
function hh(t) {
  var e = Ol.current;
  de(Ol), (t._currentValue = e);
}
function lc(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Mr(t, e) {
  (Fl = t),
    (uh = Er = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ut = !0), (t.firstContext = null));
}
function Nt(t) {
  var e = t._currentValue;
  if (uh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Er === null)) {
      if (Fl === null) throw Error(k(308));
      (Er = t), (Fl.dependencies = { lanes: 0, firstContext: t });
    } else Er = Er.next = t;
  return e;
}
var Ai = null;
function dh(t) {
  Ai === null ? (Ai = [t]) : Ai.push(t);
}
function Up(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), dh(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    Nn(t, i)
  );
}
function Nn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qn = !1;
function fh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Yp(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Mn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ui(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), ee & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      Nn(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), dh(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    Nn(t, n)
  );
}
function fl(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Qc(t, n);
  }
}
function sf(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Nl(t, e, n, i) {
  var r = t.updateQueue;
  qn = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = r.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        f = l.eventTime;
      if ((i & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = t,
            y = l;
          switch (((d = e), (f = n), y.tag)) {
            case 1:
              if (((p = y.payload), typeof p == "function")) {
                h = p.call(f, h, d);
                break e;
              }
              h = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = y.payload),
                (d = typeof p == "function" ? p.call(f, h, d) : p),
                d == null)
              )
                break e;
              h = ve({}, h, d);
              break e;
            case 2:
              qn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [l]) : d.push(l));
      } else
        (f = {
          eventTime: f,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (a = h)) : (c = c.next = f),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = r.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (r.baseState = a),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (Yi |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function of(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(k(191, r));
        r.call(i);
      }
    }
}
var vo = {},
  dn = wi(vo),
  $s = wi(vo),
  qs = wi(vo);
function Di(t) {
  if (t === vo) throw Error(k(174));
  return t;
}
function gh(t, e) {
  switch ((ce(qs, e), ce($s, t), ce(dn, vo), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Xu(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Xu(e, t));
  }
  de(dn), ce(dn, e);
}
function Wr() {
  de(dn), de($s), de(qs);
}
function Bp(t) {
  Di(qs.current);
  var e = Di(dn.current),
    n = Xu(e, t.type);
  e !== n && (ce($s, t), ce(dn, n));
}
function ph(t) {
  $s.current === t && (de(dn), de($s));
}
var _e = wi(0);
function zl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var ou = [];
function mh() {
  for (var t = 0; t < ou.length; t++)
    ou[t]._workInProgressVersionPrimary = null;
  ou.length = 0;
}
var gl = Wn.ReactCurrentDispatcher,
  lu = Wn.ReactCurrentBatchConfig,
  Ui = 0,
  ye = null,
  Le = null,
  Pe = null,
  Gl = !1,
  As = !1,
  Qs = 0,
  Hy = 0;
function je() {
  throw Error(k(321));
}
function _h(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Jt(t[n], e[n])) return !1;
  return !0;
}
function yh(t, e, n, i, r, s) {
  if (
    ((Ui = s),
    (ye = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (gl.current = t === null || t.memoizedState === null ? Jy : e1),
    (t = n(i, r)),
    As)
  ) {
    s = 0;
    do {
      if (((As = !1), (Qs = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (Pe = Le = null),
        (e.updateQueue = null),
        (gl.current = t1),
        (t = n(i, r));
    } while (As);
  }
  if (
    ((gl.current = Wl),
    (e = Le !== null && Le.next !== null),
    (Ui = 0),
    (Pe = Le = ye = null),
    (Gl = !1),
    e)
  )
    throw Error(k(300));
  return t;
}
function vh() {
  var t = Qs !== 0;
  return (Qs = 0), t;
}
function sn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (ye.memoizedState = Pe = t) : (Pe = Pe.next = t), Pe;
}
function zt() {
  if (Le === null) {
    var t = ye.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Le.next;
  var e = Pe === null ? ye.memoizedState : Pe.next;
  if (e !== null) (Pe = e), (Le = t);
  else {
    if (t === null) throw Error(k(310));
    (Le = t),
      (t = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null,
      }),
      Pe === null ? (ye.memoizedState = Pe = t) : (Pe = Pe.next = t);
  }
  return Pe;
}
function Js(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function au(t) {
  var e = zt(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var i = Le,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Ui & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : t(i, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = i)) : (a = a.next = h),
          (ye.lanes |= c),
          (Yi |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = i) : (a.next = l),
      Jt(i, e.memoizedState) || (ut = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = a),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (ye.lanes |= s), (Yi |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function uu(t) {
  var e = zt(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    Jt(s, e.memoizedState) || (ut = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function Vp() {}
function Kp(t, e) {
  var n = ye,
    i = zt(),
    r = e(),
    s = !Jt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (ut = !0)),
    (i = i.queue),
    Eh($p.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      eo(9, Hp.bind(null, n, i, r, e), void 0, null),
      Ne === null)
    )
      throw Error(k(349));
    Ui & 30 || Zp(n, e, r);
  }
  return r;
}
function Zp(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Hp(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), qp(e) && Qp(t);
}
function $p(t, e, n) {
  return n(function () {
    qp(e) && Qp(t);
  });
}
function qp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Jt(t, n);
  } catch {
    return !0;
  }
}
function Qp(t) {
  var e = Nn(t, 1);
  e !== null && qt(e, t, 1, -1);
}
function lf(t) {
  var e = sn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Qy.bind(null, ye, t)),
    [e.memoizedState, t]
  );
}
function eo(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function Jp() {
  return zt().memoizedState;
}
function pl(t, e, n, i) {
  var r = sn();
  (ye.flags |= t),
    (r.memoizedState = eo(1 | e, n, void 0, i === void 0 ? null : i));
}
function aa(t, e, n, i) {
  var r = zt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (((s = o.destroy), i !== null && _h(i, o.deps))) {
      r.memoizedState = eo(e, n, s, i);
      return;
    }
  }
  (ye.flags |= t), (r.memoizedState = eo(1 | e, n, s, i));
}
function af(t, e) {
  return pl(8390656, 8, t, e);
}
function Eh(t, e) {
  return aa(2048, 8, t, e);
}
function em(t, e) {
  return aa(4, 2, t, e);
}
function tm(t, e) {
  return aa(4, 4, t, e);
}
function nm(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function im(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), aa(4, 4, nm.bind(null, e, t), n)
  );
}
function wh() {}
function rm(t, e) {
  var n = zt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && _h(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function sm(t, e) {
  var n = zt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && _h(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function om(t, e, n) {
  return Ui & 21
    ? (Jt(n, e) || ((n = hp()), (ye.lanes |= n), (Yi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ut = !0)), (t.memoizedState = n));
}
function $y(t, e) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = lu.transition;
  lu.transition = {};
  try {
    t(!1), e();
  } finally {
    (le = n), (lu.transition = i);
  }
}
function lm() {
  return zt().memoizedState;
}
function qy(t, e, n) {
  var i = hi(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    am(t))
  )
    um(e, n);
  else if (((n = Up(t, e, n, i)), n !== null)) {
    var r = et();
    qt(n, t, i, r), cm(n, e, i);
  }
}
function Qy(t, e, n) {
  var i = hi(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (am(t)) um(e, r);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = l), Jt(l, o))) {
          var a = e.interleaved;
          a === null
            ? ((r.next = r), dh(e))
            : ((r.next = a.next), (a.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Up(t, e, r, i)),
      n !== null && ((r = et()), qt(n, t, i, r), cm(n, e, i));
  }
}
function am(t) {
  var e = t.alternate;
  return t === ye || (e !== null && e === ye);
}
function um(t, e) {
  As = Gl = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function cm(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Qc(t, n);
  }
}
var Wl = {
    readContext: Nt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: Nt,
    useCallback: function (t, e) {
      return (sn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Nt,
    useEffect: af,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        pl(4194308, 4, nm.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return pl(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return pl(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = sn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = sn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = qy.bind(null, ye, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = sn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: lf,
    useDebugValue: wh,
    useDeferredValue: function (t) {
      return (sn().memoizedState = t);
    },
    useTransition: function () {
      var t = lf(!1),
        e = t[0];
      return (t = $y.bind(null, t[1])), (sn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = ye,
        r = sn();
      if (ge) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = e()), Ne === null)) throw Error(k(349));
        Ui & 30 || Zp(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        af($p.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        eo(9, Hp.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = sn(),
        e = Ne.identifierPrefix;
      if (ge) {
        var n = kn,
          i = Ln;
        (n = (i & ~(1 << (32 - $t(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Qs++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Hy++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  e1 = {
    readContext: Nt,
    useCallback: rm,
    useContext: Nt,
    useEffect: Eh,
    useImperativeHandle: im,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: sm,
    useReducer: au,
    useRef: Jp,
    useState: function () {
      return au(Js);
    },
    useDebugValue: wh,
    useDeferredValue: function (t) {
      var e = zt();
      return om(e, Le.memoizedState, t);
    },
    useTransition: function () {
      var t = au(Js)[0],
        e = zt().memoizedState;
      return [t, e];
    },
    useMutableSource: Vp,
    useSyncExternalStore: Kp,
    useId: lm,
    unstable_isNewReconciler: !1,
  },
  t1 = {
    readContext: Nt,
    useCallback: rm,
    useContext: Nt,
    useEffect: Eh,
    useImperativeHandle: im,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: sm,
    useReducer: uu,
    useRef: Jp,
    useState: function () {
      return uu(Js);
    },
    useDebugValue: wh,
    useDeferredValue: function (t) {
      var e = zt();
      return Le === null ? (e.memoizedState = t) : om(e, Le.memoizedState, t);
    },
    useTransition: function () {
      var t = uu(Js)[0],
        e = zt().memoizedState;
      return [t, e];
    },
    useMutableSource: Vp,
    useSyncExternalStore: Kp,
    useId: lm,
    unstable_isNewReconciler: !1,
  };
function Vt(t, e) {
  if (t && t.defaultProps) {
    (e = ve({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function ac(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : ve({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ua = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Hi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = et(),
      r = hi(t),
      s = Mn(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = ui(t, s, r)),
      e !== null && (qt(e, t, r, i), fl(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = et(),
      r = hi(t),
      s = Mn(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = ui(t, s, r)),
      e !== null && (qt(e, t, r, i), fl(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = et(),
      i = hi(t),
      r = Mn(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = ui(t, r, i)),
      e !== null && (qt(e, t, i, n), fl(e, t, i));
  },
};
function uf(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Vs(n, i) || !Vs(r, s)
        : !0
  );
}
function hm(t, e, n) {
  var i = !1,
    r = pi,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Nt(s))
      : ((r = ht(e) ? Xi : $e.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? Nr(t, r) : pi)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ua),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function cf(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && ua.enqueueReplaceState(e, e.state, null);
}
function uc(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = {}), fh(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = Nt(s))
    : ((s = ht(e) ? Xi : $e.current), (r.context = Nr(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (ac(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && ua.enqueueReplaceState(r, r.state, null),
      Nl(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function br(t, e) {
  try {
    var n = "",
      i = e;
    do (n += k0(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function cu(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function cc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var n1 = typeof WeakMap == "function" ? WeakMap : Map;
function dm(t, e, n) {
  (n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      Xl || ((Xl = !0), (Ec = i)), cc(t, e);
    }),
    n
  );
}
function fm(t, e, n) {
  (n = Mn(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        cc(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        cc(t, e),
          typeof i != "function" &&
            (ci === null ? (ci = new Set([this])) : ci.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function hf(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new n1();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = m1.bind(null, t, e, n)), e.then(t, t));
}
function df(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function ff(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Mn(-1, 1)), (e.tag = 2), ui(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var i1 = Wn.ReactCurrentOwner,
  ut = !1;
function Je(t, e, n, i) {
  e.child = t === null ? jp(e, null, n, i) : Gr(e, t.child, n, i);
}
function gf(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    Mr(e, r),
    (i = yh(t, e, n, i, s, r)),
    (n = vh()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        zn(t, e, r))
      : (ge && n && oh(e), (e.flags |= 1), Je(t, e, i, r), e.child)
  );
}
function pf(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !kh(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), gm(t, e, s, i, r))
      : ((t = vl(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vs), n(o, i) && t.ref === e.ref)
    )
      return zn(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = di(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function gm(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Vs(s, i) && t.ref === e.ref)
      if (((ut = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (ut = !0);
      else return (e.lanes = t.lanes), zn(t, e, r);
  }
  return hc(t, e, n, i, r);
}
function pm(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(xr, mt),
        (mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ce(xr, mt),
          (mt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        ce(xr, mt),
        (mt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      ce(xr, mt),
      (mt |= i);
  return Je(t, e, r, n), e.child;
}
function mm(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function hc(t, e, n, i, r) {
  var s = ht(n) ? Xi : $e.current;
  return (
    (s = Nr(e, s)),
    Mr(e, r),
    (n = yh(t, e, n, i, s, r)),
    (i = vh()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        zn(t, e, r))
      : (ge && i && oh(e), (e.flags |= 1), Je(t, e, n, r), e.child)
  );
}
function mf(t, e, n, i, r) {
  if (ht(n)) {
    var s = !0;
    Pl(e);
  } else s = !1;
  if ((Mr(e, r), e.stateNode === null))
    ml(t, e), hm(e, n, i), uc(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Nt(u))
      : ((u = ht(n) ? Xi : $e.current), (u = Nr(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== i || a !== u) && cf(e, o, i, u)),
      (qn = !1);
    var d = e.memoizedState;
    (o.state = d),
      Nl(e, i, o, r),
      (a = e.memoizedState),
      l !== i || d !== a || ct.current || qn
        ? (typeof c == "function" && (ac(e, n, c, i), (a = e.memoizedState)),
          (l = qn || uf(e, n, l, i, d, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = a)),
          (o.props = i),
          (o.state = a),
          (o.context = u),
          (i = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      Yp(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Vt(e.type, l)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Nt(a))
        : ((a = ht(n) ? Xi : $e.current), (a = Nr(e, a)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || d !== a) && cf(e, o, i, a)),
      (qn = !1),
      (d = e.memoizedState),
      (o.state = d),
      Nl(e, i, o, r);
    var p = e.memoizedState;
    l !== h || d !== p || ct.current || qn
      ? (typeof f == "function" && (ac(e, n, f, i), (p = e.memoizedState)),
        (u = qn || uf(e, n, u, i, d, p, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, p, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, p, a)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = p)),
        (o.props = i),
        (o.state = p),
        (o.context = a),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return dc(t, e, n, i, s, r);
}
function dc(t, e, n, i, r, s) {
  mm(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && ef(e, n, !1), zn(t, e, s);
  (i = e.stateNode), (i1.current = e);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Gr(e, t.child, null, s)), (e.child = Gr(e, null, l, s)))
      : Je(t, e, l, s),
    (e.memoizedState = i.state),
    r && ef(e, n, !0),
    e.child
  );
}
function _m(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Jd(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Jd(t, e.context, !1),
    gh(t, e.containerInfo);
}
function _f(t, e, n, i, r) {
  return zr(), ah(r), (e.flags |= 256), Je(t, e, n, i), e.child;
}
var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function ym(t, e, n) {
  var i = e.pendingProps,
    r = _e.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    ce(_e, r & 1),
    t === null)
  )
    return (
      oc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = da(o, i, 0, null)),
              (t = Wi(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = gc(n)),
              (e.memoizedState = fc),
              t)
            : xh(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
    return r1(t, e, o, i, l, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (l = r.sibling);
    var a = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = a),
          (e.deletions = null))
        : ((i = di(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      l !== null ? (s = di(l, s)) : ((s = Wi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? gc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = fc),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = di(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function xh(t, e) {
  return (
    (e = da({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Vo(t, e, n, i) {
  return (
    i !== null && ah(i),
    Gr(e, t.child, null, n),
    (t = xh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function r1(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = cu(Error(k(422)))), Vo(t, e, o, i))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = i.fallback),
          (r = e.mode),
          (i = da({ mode: "visible", children: i.children }, r, 0, null)),
          (s = Wi(s, r, o, null)),
          (s.flags |= 2),
          (i.return = e),
          (s.return = e),
          (i.sibling = s),
          (e.child = i),
          e.mode & 1 && Gr(e, t.child, null, o),
          (e.child.memoizedState = gc(o)),
          (e.memoizedState = fc),
          s);
  if (!(e.mode & 1)) return Vo(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
    return (i = l), (s = Error(k(419))), (i = cu(s, i, void 0)), Vo(t, e, o, i);
  }
  if (((l = (o & t.childLanes) !== 0), ut || l)) {
    if (((i = Ne), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), Nn(t, r), qt(i, t, r, -1));
    }
    return Lh(), (i = cu(Error(k(421)))), Vo(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = _1.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (yt = ai(r.nextSibling)),
      (Et = e),
      (ge = !0),
      (Zt = null),
      t !== null &&
        ((Mt[Pt++] = Ln),
        (Mt[Pt++] = kn),
        (Mt[Pt++] = ji),
        (Ln = t.id),
        (kn = t.overflow),
        (ji = e)),
      (e = xh(e, i.children)),
      (e.flags |= 4096),
      e);
}
function yf(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), lc(t.return, e, n);
}
function hu(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function vm(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Je(t, e, i.children, n), (i = _e.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && yf(t, n, e);
        else if (t.tag === 19) yf(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((ce(_e, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && zl(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          hu(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && zl(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        hu(e, !0, n, null, s);
        break;
      case "together":
        hu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ml(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function zn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Yi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(k(153));
  if (e.child !== null) {
    for (
      t = e.child, n = di(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = di(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function s1(t, e, n) {
  switch (e.tag) {
    case 3:
      _m(e), zr();
      break;
    case 5:
      Bp(e);
      break;
    case 1:
      ht(e.type) && Pl(e);
      break;
    case 4:
      gh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      ce(Ol, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ce(_e, _e.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? ym(t, e, n)
            : (ce(_e, _e.current & 1),
              (t = zn(t, e, n)),
              t !== null ? t.sibling : null);
      ce(_e, _e.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return vm(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ce(_e, _e.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), pm(t, e, n);
  }
  return zn(t, e, n);
}
var Em, pc, wm, xm;
Em = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pc = function () {};
wm = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), Di(dn.current);
    var s = null;
    switch (n) {
      case "input":
        (r = zu(t, r)), (i = zu(t, i)), (s = []);
        break;
      case "select":
        (r = ve({}, r, { value: void 0 })),
          (i = ve({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = bu(t, r)), (i = bu(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = kl);
    }
    ju(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ws.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var a = i[u];
      if (
        ((l = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ws.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && he("scroll", t),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
xm = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function gs(t, e) {
  if (!ge)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function Ue(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function o1(t, e, n) {
  var i = e.pendingProps;
  switch ((lh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(e), null;
    case 1:
      return ht(e.type) && Ml(), Ue(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Wr(),
        de(ct),
        de($e),
        mh(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (Yo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Zt !== null && (Cc(Zt), (Zt = null)))),
        pc(t, e),
        Ue(e),
        null
      );
    case 5:
      ph(e);
      var r = Di(qs.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        wm(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(k(166));
          return Ue(e), null;
        }
        if (((t = Di(dn.current)), Yo(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[on] = e), (i[Hs] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", i), he("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Cs.length; r++) he(Cs[r], i);
              break;
            case "source":
              he("error", i);
              break;
            case "img":
            case "image":
            case "link":
              he("error", i), he("load", i);
              break;
            case "details":
              he("toggle", i);
              break;
            case "input":
              Rd(i, s), he("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                he("invalid", i);
              break;
            case "textarea":
              Ld(i, s), he("invalid", i);
          }
          ju(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? i.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(i.textContent, l, t),
                    (r = ["children", l]))
                  : typeof l == "number" &&
                    i.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(i.textContent, l, t),
                    (r = ["children", "" + l]))
                : Ws.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  he("scroll", i);
            }
          switch (n) {
            case "input":
              Fo(i), Id(i, s, !0);
              break;
            case "textarea":
              Fo(i), kd(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = kl);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = $g(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                  ? (t = o.createElement(n, { is: i.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      i.multiple
                        ? (o.multiple = !0)
                        : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[on] = e),
            (t[Hs] = i),
            Em(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Uu(n, i)), n)) {
              case "dialog":
                he("cancel", t), he("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Cs.length; r++) he(Cs[r], t);
                r = i;
                break;
              case "source":
                he("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                he("error", t), he("load", t), (r = i);
                break;
              case "details":
                he("toggle", t), (r = i);
                break;
              case "input":
                Rd(t, i), (r = zu(t, i)), he("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = ve({}, i, { value: void 0 })),
                  he("invalid", t);
                break;
              case "textarea":
                Ld(t, i), (r = bu(t, i)), he("invalid", t);
                break;
              default:
                r = i;
            }
            ju(n, r), (l = r);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Jg(t, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && qg(t, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && bs(t, a)
                        : typeof a == "number" && bs(t, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Ws.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && he("scroll", t)
                          : a != null && Vc(t, s, a, o));
              }
            switch (n) {
              case "input":
                Fo(t), Id(t, i, !1);
                break;
              case "textarea":
                Fo(t), kd(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + gi(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Rr(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Rr(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ue(e), null;
    case 6:
      if (t && e.stateNode != null) xm(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(k(166));
        if (((n = Di(qs.current)), Di(dn.current), Yo(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[on] = e),
            (s = i.nodeValue !== n) && ((t = Et), t !== null))
          )
            switch (t.tag) {
              case 3:
                Uo(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[on] = e),
            (e.stateNode = i);
      }
      return Ue(e), null;
    case 13:
      if (
        (de(_e),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ge && yt !== null && e.mode & 1 && !(e.flags & 128))
          bp(), zr(), (e.flags |= 98560), (s = !1);
        else if (((s = Yo(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[on] = e;
          } else
            zr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ue(e), (s = !1);
        } else Zt !== null && (Cc(Zt), (Zt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || _e.current & 1 ? ke === 0 && (ke = 3) : Lh())),
          e.updateQueue !== null && (e.flags |= 4),
          Ue(e),
          null);
    case 4:
      return (
        Wr(), pc(t, e), t === null && Ks(e.stateNode.containerInfo), Ue(e), null
      );
    case 10:
      return hh(e.type._context), Ue(e), null;
    case 17:
      return ht(e.type) && Ml(), Ue(e), null;
    case 19:
      if ((de(_e), (s = e.memoizedState), s === null)) return Ue(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) gs(s, !1);
        else {
          if (ke !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = zl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    gs(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return ce(_e, (_e.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Te() > Xr &&
            ((e.flags |= 128), (i = !0), gs(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = zl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              gs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ge)
            )
              return Ue(e), null;
          } else
            2 * Te() - s.renderingStartTime > Xr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), gs(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Te()),
          (e.sibling = null),
          (n = _e.current),
          ce(_e, i ? (n & 1) | 2 : n & 1),
          e)
        : (Ue(e), null);
    case 22:
    case 23:
      return (
        Ih(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? mt & 1073741824 && (Ue(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ue(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function l1(t, e) {
  switch ((lh(e), e.tag)) {
    case 1:
      return (
        ht(e.type) && Ml(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Wr(),
        de(ct),
        de($e),
        mh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return ph(e), null;
    case 13:
      if (
        (de(_e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(k(340));
        zr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return de(_e), null;
    case 4:
      return Wr(), null;
    case 10:
      return hh(e.type._context), null;
    case 22:
    case 23:
      return Ih(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ko = !1,
  Ke = !1,
  a1 = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function wr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        xe(t, e, i);
      }
    else n.current = null;
}
function mc(t, e, n) {
  try {
    n();
  } catch (i) {
    xe(t, e, i);
  }
}
var vf = !1;
function u1(t, e) {
  if (((Ju = Rl), (t = Ip()), sh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var f;
              h !== n || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h !== s || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (f = h.firstChild) !== null;

            )
              (d = h), (h = f);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === r && (l = o),
                d === s && ++c === i && (a = o),
                (f = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = f;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ec = { focusedElem: t, selectionRange: n }, Rl = !1, D = e; D !== null; )
    if (((e = D), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (D = t);
    else
      for (; D !== null; ) {
        e = D;
        try {
          var p = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var y = p.memoizedProps,
                    E = p.memoizedState,
                    m = e.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? y : Vt(e.type, y),
                      E,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                    _.documentElement &&
                    _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          xe(e, e.return, v);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (D = t);
          break;
        }
        D = e.return;
      }
  return (p = vf), (vf = !1), p;
}
function Ds(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && mc(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function ca(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function _c(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Cm(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Cm(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[on], delete e[Hs], delete e[ic], delete e[By], delete e[Vy])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Sm(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Ef(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Sm(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function yc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = kl));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (yc(t, e, n), t = t.sibling; t !== null; ) yc(t, e, n), (t = t.sibling);
}
function vc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (vc(t, e, n), t = t.sibling; t !== null; ) vc(t, e, n), (t = t.sibling);
}
var ze = null,
  Kt = !1;
function jn(t, e, n) {
  for (n = n.child; n !== null; ) Tm(t, e, n), (n = n.sibling);
}
function Tm(t, e, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(na, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || wr(n, e);
    case 6:
      var i = ze,
        r = Kt;
      (ze = null),
        jn(t, e, n),
        (ze = i),
        (Kt = r),
        ze !== null &&
          (Kt
            ? ((t = ze),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (Kt
          ? ((t = ze),
            (n = n.stateNode),
            t.nodeType === 8
              ? ru(t.parentNode, n)
              : t.nodeType === 1 && ru(t, n),
            Ys(t))
          : ru(ze, n.stateNode));
      break;
    case 4:
      (i = ze),
        (r = Kt),
        (ze = n.stateNode.containerInfo),
        (Kt = !0),
        jn(t, e, n),
        (ze = i),
        (Kt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && mc(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      jn(t, e, n);
      break;
    case 1:
      if (
        !Ke &&
        (wr(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (l) {
          xe(n, e, l);
        }
      jn(t, e, n);
      break;
    case 21:
      jn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (i = Ke) || n.memoizedState !== null), jn(t, e, n), (Ke = i))
        : jn(t, e, n);
      break;
    default:
      jn(t, e, n);
  }
}
function wf(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new a1()),
      e.forEach(function (i) {
        var r = y1.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function Yt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ze = l.stateNode), (Kt = !1);
              break e;
            case 3:
              (ze = l.stateNode.containerInfo), (Kt = !0);
              break e;
            case 4:
              (ze = l.stateNode.containerInfo), (Kt = !0);
              break e;
          }
          l = l.return;
        }
        if (ze === null) throw Error(k(160));
        Tm(s, o, r), (ze = null), (Kt = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (u) {
        xe(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Rm(e, t), (e = e.sibling);
}
function Rm(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(e, t), rn(t), i & 4)) {
        try {
          Ds(3, t, t.return), ca(3, t);
        } catch (y) {
          xe(t, t.return, y);
        }
        try {
          Ds(5, t, t.return);
        } catch (y) {
          xe(t, t.return, y);
        }
      }
      break;
    case 1:
      Yt(e, t), rn(t), i & 512 && n !== null && wr(n, n.return);
      break;
    case 5:
      if (
        (Yt(e, t),
        rn(t),
        i & 512 && n !== null && wr(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          bs(r, "");
        } catch (y) {
          xe(t, t.return, y);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Zg(r, s),
              Uu(l, o);
            var u = Uu(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? Jg(r, h)
                : c === "dangerouslySetInnerHTML"
                  ? qg(r, h)
                  : c === "children"
                    ? bs(r, h)
                    : Vc(r, c, h, u);
            }
            switch (l) {
              case "input":
                Gu(r, s);
                break;
              case "textarea":
                Hg(r, s);
                break;
              case "select":
                var d = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Rr(r, !!s.multiple, f, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Rr(r, !!s.multiple, s.defaultValue, !0)
                      : Rr(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[Hs] = s;
          } catch (y) {
            xe(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((Yt(e, t), rn(t), i & 4)) {
        if (t.stateNode === null) throw Error(k(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          xe(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        (Yt(e, t), rn(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ys(e.containerInfo);
        } catch (y) {
          xe(t, t.return, y);
        }
      break;
    case 4:
      Yt(e, t), rn(t);
      break;
    case 13:
      Yt(e, t),
        rn(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Th = Te())),
        i & 4 && wf(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Ke = (u = Ke) || c), Yt(e, t), (Ke = u)) : Yt(e, t),
        rn(t),
        i & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (D = t, c = t.child; c !== null; ) {
            for (h = D = c; D !== null; ) {
              switch (((d = D), (f = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ds(4, d, d.return);
                  break;
                case 1:
                  wr(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (i = d), (n = d.return);
                    try {
                      (e = i),
                        (p.props = e.memoizedProps),
                        (p.state = e.memoizedState),
                        p.componentWillUnmount();
                    } catch (y) {
                      xe(i, n, y);
                    }
                  }
                  break;
                case 5:
                  wr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Cf(h);
                    continue;
                  }
              }
              f !== null ? ((f.return = d), (D = f)) : Cf(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (r = h.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Qg("display", o)));
              } catch (y) {
                xe(t, t.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (y) {
                xe(t, t.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Yt(e, t), rn(t), i & 4 && wf(t);
      break;
    case 21:
      break;
    default:
      Yt(e, t), rn(t);
  }
}
function rn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Sm(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (bs(r, ""), (i.flags &= -33));
          var s = Ef(t);
          vc(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            l = Ef(t);
          yc(t, l, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      xe(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function c1(t, e, n) {
  (D = t), Im(t);
}
function Im(t, e, n) {
  for (var i = (t.mode & 1) !== 0; D !== null; ) {
    var r = D,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Ko;
      if (!o) {
        var l = r.alternate,
          a = (l !== null && l.memoizedState !== null) || Ke;
        l = Ko;
        var u = Ke;
        if (((Ko = o), (Ke = a) && !u))
          for (D = r; D !== null; )
            (o = D),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sf(r)
                : a !== null
                  ? ((a.return = o), (D = a))
                  : Sf(r);
        for (; s !== null; ) (D = s), Im(s), (s = s.sibling);
        (D = r), (Ko = l), (Ke = u);
      }
      xf(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (D = s)) : xf(t);
  }
}
function xf(t) {
  for (; D !== null; ) {
    var e = D;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ke || ca(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Ke)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Vt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && of(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                of(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Ys(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Ke || (e.flags & 512 && _c(e));
      } catch (d) {
        xe(e, e.return, d);
      }
    }
    if (e === t) {
      D = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (D = n);
      break;
    }
    D = e.return;
  }
}
function Cf(t) {
  for (; D !== null; ) {
    var e = D;
    if (e === t) {
      D = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (D = n);
      break;
    }
    D = e.return;
  }
}
function Sf(t) {
  for (; D !== null; ) {
    var e = D;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ca(4, e);
          } catch (a) {
            xe(e, n, a);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (a) {
              xe(e, r, a);
            }
          }
          var s = e.return;
          try {
            _c(e);
          } catch (a) {
            xe(e, s, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            _c(e);
          } catch (a) {
            xe(e, o, a);
          }
      }
    } catch (a) {
      xe(e, e.return, a);
    }
    if (e === t) {
      D = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (D = l);
      break;
    }
    D = e.return;
  }
}
var h1 = Math.ceil,
  bl = Wn.ReactCurrentDispatcher,
  Ch = Wn.ReactCurrentOwner,
  Ft = Wn.ReactCurrentBatchConfig,
  ee = 0,
  Ne = null,
  Re = null,
  We = 0,
  mt = 0,
  xr = wi(0),
  ke = 0,
  to = null,
  Yi = 0,
  ha = 0,
  Sh = 0,
  Os = null,
  st = null,
  Th = 0,
  Xr = 1 / 0,
  Tn = null,
  Xl = !1,
  Ec = null,
  ci = null,
  Zo = !1,
  ni = null,
  jl = 0,
  Fs = 0,
  wc = null,
  _l = -1,
  yl = 0;
function et() {
  return ee & 6 ? Te() : _l !== -1 ? _l : (_l = Te());
}
function hi(t) {
  return t.mode & 1
    ? ee & 2 && We !== 0
      ? We & -We
      : Zy.transition !== null
        ? (yl === 0 && (yl = hp()), yl)
        : ((t = le),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : yp(t.type))),
          t)
    : 1;
}
function qt(t, e, n, i) {
  if (50 < Fs) throw ((Fs = 0), (wc = null), Error(k(185)));
  mo(t, n, i),
    (!(ee & 2) || t !== Ne) &&
      (t === Ne && (!(ee & 2) && (ha |= n), ke === 4 && ei(t, We)),
      dt(t, i),
      n === 1 && ee === 0 && !(e.mode & 1) && ((Xr = Te() + 500), la && xi()));
}
function dt(t, e) {
  var n = t.callbackNode;
  Z0(t, e);
  var i = Tl(t, t === Ne ? We : 0);
  if (i === 0)
    n !== null && Ad(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && Ad(n), e === 1))
      t.tag === 0 ? Ky(Tf.bind(null, t)) : zp(Tf.bind(null, t)),
        Uy(function () {
          !(ee & 6) && xi();
        }),
        (n = null);
    else {
      switch (dp(i)) {
        case 1:
          n = qc;
          break;
        case 4:
          n = up;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = cp;
          break;
        default:
          n = Sl;
      }
      n = Fm(n, Lm.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Lm(t, e) {
  if (((_l = -1), (yl = 0), ee & 6)) throw Error(k(327));
  var n = t.callbackNode;
  if (Pr() && t.callbackNode !== n) return null;
  var i = Tl(t, t === Ne ? We : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = Ul(t, i);
  else {
    e = i;
    var r = ee;
    ee |= 2;
    var s = Mm();
    (Ne !== t || We !== e) && ((Tn = null), (Xr = Te() + 500), Gi(t, e));
    do
      try {
        g1();
        break;
      } catch (l) {
        km(t, l);
      }
    while (!0);
    ch(),
      (bl.current = s),
      (ee = r),
      Re !== null ? (e = 0) : ((Ne = null), (We = 0), (e = ke));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = Zu(t)), r !== 0 && ((i = r), (e = xc(t, r)))), e === 1)
    )
      throw ((n = to), Gi(t, 0), ei(t, i), dt(t, Te()), n);
    if (e === 6) ei(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !d1(r) &&
          ((e = Ul(t, i)),
          e === 2 && ((s = Zu(t)), s !== 0 && ((i = s), (e = xc(t, s)))),
          e === 1))
      )
        throw ((n = to), Gi(t, 0), ei(t, i), dt(t, Te()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          ki(t, st, Tn);
          break;
        case 3:
          if (
            (ei(t, i), (i & 130023424) === i && ((e = Th + 500 - Te()), 10 < e))
          ) {
            if (Tl(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              et(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = nc(ki.bind(null, t, st, Tn), e);
            break;
          }
          ki(t, st, Tn);
          break;
        case 4:
          if ((ei(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - $t(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = Te() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                  ? 480
                  : 1080 > i
                    ? 1080
                    : 1920 > i
                      ? 1920
                      : 3e3 > i
                        ? 3e3
                        : 4320 > i
                          ? 4320
                          : 1960 * h1(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = nc(ki.bind(null, t, st, Tn), i);
            break;
          }
          ki(t, st, Tn);
          break;
        case 5:
          ki(t, st, Tn);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return dt(t, Te()), t.callbackNode === n ? Lm.bind(null, t) : null;
}
function xc(t, e) {
  var n = Os;
  return (
    t.current.memoizedState.isDehydrated && (Gi(t, e).flags |= 256),
    (t = Ul(t, e)),
    t !== 2 && ((e = st), (st = n), e !== null && Cc(e)),
    t
  );
}
function Cc(t) {
  st === null ? (st = t) : st.push.apply(st, t);
}
function d1(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Jt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function ei(t, e) {
  for (
    e &= ~Sh,
      e &= ~ha,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - $t(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function Tf(t) {
  if (ee & 6) throw Error(k(327));
  Pr();
  var e = Tl(t, 0);
  if (!(e & 1)) return dt(t, Te()), null;
  var n = Ul(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = Zu(t);
    i !== 0 && ((e = i), (n = xc(t, i)));
  }
  if (n === 1) throw ((n = to), Gi(t, 0), ei(t, e), dt(t, Te()), n);
  if (n === 6) throw Error(k(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    ki(t, st, Tn),
    dt(t, Te()),
    null
  );
}
function Rh(t, e) {
  var n = ee;
  ee |= 1;
  try {
    return t(e);
  } finally {
    (ee = n), ee === 0 && ((Xr = Te() + 500), la && xi());
  }
}
function Bi(t) {
  ni !== null && ni.tag === 0 && !(ee & 6) && Pr();
  var e = ee;
  ee |= 1;
  var n = Ft.transition,
    i = le;
  try {
    if (((Ft.transition = null), (le = 1), t)) return t();
  } finally {
    (le = i), (Ft.transition = n), (ee = e), !(ee & 6) && xi();
  }
}
function Ih() {
  (mt = xr.current), de(xr);
}
function Gi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), jy(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var i = n;
      switch ((lh(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Ml();
          break;
        case 3:
          Wr(), de(ct), de($e), mh();
          break;
        case 5:
          ph(i);
          break;
        case 4:
          Wr();
          break;
        case 13:
          de(_e);
          break;
        case 19:
          de(_e);
          break;
        case 10:
          hh(i.type._context);
          break;
        case 22:
        case 23:
          Ih();
      }
      n = n.return;
    }
  if (
    ((Ne = t),
    (Re = t = di(t.current, null)),
    (We = mt = e),
    (ke = 0),
    (to = null),
    (Sh = ha = Yi = 0),
    (st = Os = null),
    Ai !== null)
  ) {
    for (e = 0; e < Ai.length; e++)
      if (((n = Ai[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    Ai = null;
  }
  return t;
}
function km(t, e) {
  do {
    var n = Re;
    try {
      if ((ch(), (gl.current = Wl), Gl)) {
        for (var i = ye.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Gl = !1;
      }
      if (
        ((Ui = 0),
        (Pe = Le = ye = null),
        (As = !1),
        (Qs = 0),
        (Ch.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (to = e), (Re = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          a = e;
        if (
          ((e = We),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = df(o);
          if (f !== null) {
            (f.flags &= -257),
              ff(f, o, l, s, e),
              f.mode & 1 && hf(s, u, e),
              (e = f),
              (a = u);
            var p = e.updateQueue;
            if (p === null) {
              var y = new Set();
              y.add(a), (e.updateQueue = y);
            } else p.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              hf(s, u, e), Lh();
              break e;
            }
            a = Error(k(426));
          }
        } else if (ge && l.mode & 1) {
          var E = df(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              ff(E, o, l, s, e),
              ah(br(a, l));
            break e;
          }
        }
        (s = a = br(a, l)),
          ke !== 4 && (ke = 2),
          Os === null ? (Os = [s]) : Os.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var m = dm(s, a, e);
              sf(s, m);
              break e;
            case 1:
              l = a;
              var g = s.type,
                _ = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (ci === null || !ci.has(_))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var v = fm(s, l, e);
                sf(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Am(n);
    } catch (w) {
      (e = w), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mm() {
  var t = bl.current;
  return (bl.current = Wl), t === null ? Wl : t;
}
function Lh() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ne === null || (!(Yi & 268435455) && !(ha & 268435455)) || ei(Ne, We);
}
function Ul(t, e) {
  var n = ee;
  ee |= 2;
  var i = Mm();
  (Ne !== t || We !== e) && ((Tn = null), Gi(t, e));
  do
    try {
      f1();
      break;
    } catch (r) {
      km(t, r);
    }
  while (!0);
  if ((ch(), (ee = n), (bl.current = i), Re !== null)) throw Error(k(261));
  return (Ne = null), (We = 0), ke;
}
function f1() {
  for (; Re !== null; ) Pm(Re);
}
function g1() {
  for (; Re !== null && !W0(); ) Pm(Re);
}
function Pm(t) {
  var e = Om(t.alternate, t, mt);
  (t.memoizedProps = t.pendingProps),
    e === null ? Am(t) : (Re = e),
    (Ch.current = null);
}
function Am(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = l1(n, e)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ke = 6), (Re = null);
        return;
      }
    } else if (((n = o1(n, e, mt)), n !== null)) {
      Re = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Re = e;
      return;
    }
    Re = e = t;
  } while (e !== null);
  ke === 0 && (ke = 5);
}
function ki(t, e, n) {
  var i = le,
    r = Ft.transition;
  try {
    (Ft.transition = null), (le = 1), p1(t, e, n, i);
  } finally {
    (Ft.transition = r), (le = i);
  }
  return null;
}
function p1(t, e, n, i) {
  do Pr();
  while (ni !== null);
  if (ee & 6) throw Error(k(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(k(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (H0(t, s),
    t === Ne && ((Re = Ne = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zo ||
      ((Zo = !0),
      Fm(Sl, function () {
        return Pr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ft.transition), (Ft.transition = null);
    var o = le;
    le = 1;
    var l = ee;
    (ee |= 4),
      (Ch.current = null),
      u1(t, n),
      Rm(n, t),
      Fy(ec),
      (Rl = !!Ju),
      (ec = Ju = null),
      (t.current = n),
      c1(n),
      b0(),
      (ee = l),
      (le = o),
      (Ft.transition = s);
  } else t.current = n;
  if (
    (Zo && ((Zo = !1), (ni = t), (jl = r)),
    (s = t.pendingLanes),
    s === 0 && (ci = null),
    U0(n.stateNode),
    dt(t, Te()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Xl) throw ((Xl = !1), (t = Ec), (Ec = null), t);
  return (
    jl & 1 && t.tag !== 0 && Pr(),
    (s = t.pendingLanes),
    s & 1 ? (t === wc ? Fs++ : ((Fs = 0), (wc = t))) : (Fs = 0),
    xi(),
    null
  );
}
function Pr() {
  if (ni !== null) {
    var t = dp(jl),
      e = Ft.transition,
      n = le;
    try {
      if (((Ft.transition = null), (le = 16 > t ? 16 : t), ni === null))
        var i = !1;
      else {
        if (((t = ni), (ni = null), (jl = 0), ee & 6)) throw Error(k(331));
        var r = ee;
        for (ee |= 4, D = t.current; D !== null; ) {
          var s = D,
            o = s.child;
          if (D.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ds(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (D = h);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var d = c.sibling,
                        f = c.return;
                      if ((Cm(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = f), (D = d);
                        break;
                      }
                      D = f;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (D = o);
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ds(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (D = m);
                break e;
              }
              D = s.return;
            }
        }
        var g = t.current;
        for (D = g; D !== null; ) {
          o = D;
          var _ = o.child;
          if (o.subtreeFlags & 2064 && _ !== null) (_.return = o), (D = _);
          else
            e: for (o = g; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, l);
                  }
                } catch (w) {
                  xe(l, l.return, w);
                }
              if (l === o) {
                D = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (D = v);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((ee = r), xi(), hn && typeof hn.onPostCommitFiberRoot == "function")
        )
          try {
            hn.onPostCommitFiberRoot(na, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (le = n), (Ft.transition = e);
    }
  }
  return !1;
}
function Rf(t, e, n) {
  (e = br(n, e)),
    (e = dm(t, e, 1)),
    (t = ui(t, e, 1)),
    (e = et()),
    t !== null && (mo(t, 1, e), dt(t, e));
}
function xe(t, e, n) {
  if (t.tag === 3) Rf(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Rf(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (ci === null || !ci.has(i)))
        ) {
          (t = br(n, t)),
            (t = fm(e, t, 1)),
            (e = ui(e, t, 1)),
            (t = et()),
            e !== null && (mo(e, 1, t), dt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function m1(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = et()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ne === t &&
      (We & n) === n &&
      (ke === 4 || (ke === 3 && (We & 130023424) === We && 500 > Te() - Th)
        ? Gi(t, 0)
        : (Sh |= n)),
    dt(t, e);
}
function Dm(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Go), (Go <<= 1), !(Go & 130023424) && (Go = 4194304))
      : (e = 1));
  var n = et();
  (t = Nn(t, e)), t !== null && (mo(t, e, n), dt(t, n));
}
function _1(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Dm(t, n);
}
function y1(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  i !== null && i.delete(e), Dm(t, n);
}
var Om;
Om = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ct.current) ut = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (ut = !1), s1(t, e, n);
      ut = !!(t.flags & 131072);
    }
  else (ut = !1), ge && e.flags & 1048576 && Gp(e, Dl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      ml(t, e), (t = e.pendingProps);
      var r = Nr(e, $e.current);
      Mr(e, n), (r = yh(null, e, i, t, r, n));
      var s = vh();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ht(i) ? ((s = !0), Pl(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            fh(e),
            (r.updater = ua),
            (e.stateNode = r),
            (r._reactInternals = e),
            uc(e, i, t, n),
            (e = dc(null, e, i, !0, s, n)))
          : ((e.tag = 0), ge && s && oh(e), Je(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (ml(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = E1(i)),
          (t = Vt(i, t)),
          r)
        ) {
          case 0:
            e = hc(null, e, i, t, n);
            break e;
          case 1:
            e = mf(null, e, i, t, n);
            break e;
          case 11:
            e = gf(null, e, i, t, n);
            break e;
          case 14:
            e = pf(null, e, i, Vt(i.type, t), n);
            break e;
        }
        throw Error(k(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Vt(i, r)),
        hc(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Vt(i, r)),
        mf(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((_m(e), t === null)) throw Error(k(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          Yp(t, e),
          Nl(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = br(Error(k(423)), e)), (e = _f(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = br(Error(k(424)), e)), (e = _f(t, e, i, n, r));
            break e;
          } else
            for (
              yt = ai(e.stateNode.containerInfo.firstChild),
                Et = e,
                ge = !0,
                Zt = null,
                n = jp(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((zr(), i === r)) {
            e = zn(t, e, n);
            break e;
          }
          Je(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Bp(e),
        t === null && oc(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        tc(i, r) ? (o = null) : s !== null && tc(i, s) && (e.flags |= 32),
        mm(t, e),
        Je(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && oc(e), null;
    case 13:
      return ym(t, e, n);
    case 4:
      return (
        gh(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = Gr(e, null, i, n)) : Je(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Vt(i, r)),
        gf(t, e, i, r, n)
      );
    case 7:
      return Je(t, e, e.pendingProps, n), e.child;
    case 8:
      return Je(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Je(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          ce(Ol, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (Jt(s.value, o)) {
            if (s.children === r.children && !ct.current) {
              e = zn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === i) {
                    if (s.tag === 1) {
                      (a = Mn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      lc(s.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  lc(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Je(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        Mr(e, n),
        (r = Nt(r)),
        (i = i(r)),
        (e.flags |= 1),
        Je(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = Vt(i, e.pendingProps)),
        (r = Vt(i.type, r)),
        pf(t, e, i, r, n)
      );
    case 15:
      return gm(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Vt(i, r)),
        ml(t, e),
        (e.tag = 1),
        ht(i) ? ((t = !0), Pl(e)) : (t = !1),
        Mr(e, n),
        hm(e, i, r),
        uc(e, i, r, n),
        dc(null, e, i, !0, t, n)
      );
    case 19:
      return vm(t, e, n);
    case 22:
      return pm(t, e, n);
  }
  throw Error(k(156, e.tag));
};
function Fm(t, e) {
  return ap(t, e);
}
function v1(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Dt(t, e, n, i) {
  return new v1(t, e, n, i);
}
function kh(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function E1(t) {
  if (typeof t == "function") return kh(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Zc)) return 11;
    if (t === Hc) return 14;
  }
  return 2;
}
function di(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Dt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function vl(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) kh(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case dr:
        return Wi(n.children, r, s, e);
      case Kc:
        (o = 8), (r |= 8);
        break;
      case Du:
        return (
          (t = Dt(12, n, e, r | 2)), (t.elementType = Du), (t.lanes = s), t
        );
      case Ou:
        return (t = Dt(13, n, e, r)), (t.elementType = Ou), (t.lanes = s), t;
      case Fu:
        return (t = Dt(19, n, e, r)), (t.elementType = Fu), (t.lanes = s), t;
      case Bg:
        return da(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Ug:
              o = 10;
              break e;
            case Yg:
              o = 9;
              break e;
            case Zc:
              o = 11;
              break e;
            case Hc:
              o = 14;
              break e;
            case $n:
              (o = 16), (i = null);
              break e;
          }
        throw Error(k(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Dt(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function Wi(t, e, n, i) {
  return (t = Dt(7, t, i, e)), (t.lanes = n), t;
}
function da(t, e, n, i) {
  return (
    (t = Dt(22, t, i, e)),
    (t.elementType = Bg),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function du(t, e, n) {
  return (t = Dt(6, t, null, e)), (t.lanes = n), t;
}
function fu(t, e, n) {
  return (
    (e = Dt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function w1(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ka(0)),
    (this.expirationTimes = Ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ka(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Mh(t, e, n, i, r, s, o, l, a) {
  return (
    (t = new w1(t, e, n, l, a)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Dt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fh(s),
    t
  );
}
function x1(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hr,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Nm(t) {
  if (!t) return pi;
  t = t._reactInternals;
  e: {
    if (Hi(t) !== t || t.tag !== 1) throw Error(k(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (ht(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (ht(n)) return Np(t, n, e);
  }
  return e;
}
function zm(t, e, n, i, r, s, o, l, a) {
  return (
    (t = Mh(n, i, !0, t, r, s, o, l, a)),
    (t.context = Nm(null)),
    (n = t.current),
    (i = et()),
    (r = hi(n)),
    (s = Mn(i, r)),
    (s.callback = e ?? null),
    ui(n, s, r),
    (t.current.lanes = r),
    mo(t, r, i),
    dt(t, i),
    t
  );
}
function fa(t, e, n, i) {
  var r = e.current,
    s = et(),
    o = hi(r);
  return (
    (n = Nm(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Mn(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = ui(r, e, o)),
    t !== null && (qt(t, r, o, s), fl(t, r, o)),
    o
  );
}
function Yl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function If(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Ph(t, e) {
  If(t, e), (t = t.alternate) && If(t, e);
}
function C1() {
  return null;
}
var Gm =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Ah(t) {
  this._internalRoot = t;
}
ga.prototype.render = Ah.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  fa(t, e, null, null);
};
ga.prototype.unmount = Ah.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Bi(function () {
      fa(null, t, null, null);
    }),
      (e[Fn] = null);
  }
};
function ga(t) {
  this._internalRoot = t;
}
ga.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = pp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++);
    Jn.splice(n, 0, t), n === 0 && _p(t);
  }
};
function Dh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function pa(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Lf() {}
function S1(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Yl(o);
        s.call(u);
      };
    }
    var o = zm(e, i, t, 0, null, !1, !1, "", Lf);
    return (
      (t._reactRootContainer = o),
      (t[Fn] = o.current),
      Ks(t.nodeType === 8 ? t.parentNode : t),
      Bi(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var l = i;
    i = function () {
      var u = Yl(a);
      l.call(u);
    };
  }
  var a = Mh(t, 0, !1, null, null, !1, !1, "", Lf);
  return (
    (t._reactRootContainer = a),
    (t[Fn] = a.current),
    Ks(t.nodeType === 8 ? t.parentNode : t),
    Bi(function () {
      fa(e, a, n, i);
    }),
    a
  );
}
function ma(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Yl(o);
        l.call(a);
      };
    }
    fa(e, o, t, r);
  } else o = S1(n, e, t, r, i);
  return Yl(o);
}
fp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = xs(e.pendingLanes);
        n !== 0 &&
          (Qc(e, n | 1), dt(e, Te()), !(ee & 6) && ((Xr = Te() + 500), xi()));
      }
      break;
    case 13:
      Bi(function () {
        var i = Nn(t, 1);
        if (i !== null) {
          var r = et();
          qt(i, t, 1, r);
        }
      }),
        Ph(t, 1);
  }
};
Jc = function (t) {
  if (t.tag === 13) {
    var e = Nn(t, 134217728);
    if (e !== null) {
      var n = et();
      qt(e, t, 134217728, n);
    }
    Ph(t, 134217728);
  }
};
gp = function (t) {
  if (t.tag === 13) {
    var e = hi(t),
      n = Nn(t, e);
    if (n !== null) {
      var i = et();
      qt(n, t, e, i);
    }
    Ph(t, e);
  }
};
pp = function () {
  return le;
};
mp = function (t, e) {
  var n = le;
  try {
    return (le = t), e();
  } finally {
    le = n;
  }
};
Bu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Gu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = oa(i);
            if (!r) throw Error(k(90));
            Kg(i), Gu(i, r);
          }
        }
      }
      break;
    case "textarea":
      Hg(t, n);
      break;
    case "select":
      (e = n.value), e != null && Rr(t, !!n.multiple, e, !1);
  }
};
np = Rh;
ip = Bi;
var T1 = { usingClientEntryPoint: !1, Events: [yo, mr, oa, ep, tp, Rh] },
  ps = {
    findFiberByHostInstance: Pi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  R1 = {
    bundleType: ps.bundleType,
    version: ps.version,
    rendererPackageName: ps.rendererPackageName,
    rendererConfig: ps.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = op(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: ps.findFiberByHostInstance || C1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ho.isDisabled && Ho.supportsFiber)
    try {
      (na = Ho.inject(R1)), (hn = Ho);
    } catch {}
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1;
xt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dh(e)) throw Error(k(200));
  return x1(t, e, null, n);
};
xt.createRoot = function (t, e) {
  if (!Dh(t)) throw Error(k(299));
  var n = !1,
    i = "",
    r = Gm;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Mh(t, 1, !1, null, null, n, !1, i, r)),
    (t[Fn] = e.current),
    Ks(t.nodeType === 8 ? t.parentNode : t),
    new Ah(e)
  );
};
xt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(k(188))
      : ((t = Object.keys(t).join(",")), Error(k(268, t)));
  return (t = op(e)), (t = t === null ? null : t.stateNode), t;
};
xt.flushSync = function (t) {
  return Bi(t);
};
xt.hydrate = function (t, e, n) {
  if (!pa(e)) throw Error(k(200));
  return ma(null, t, e, !0, n);
};
xt.hydrateRoot = function (t, e, n) {
  if (!Dh(t)) throw Error(k(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = Gm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = zm(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[Fn] = e.current),
    Ks(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new ga(e);
};
xt.render = function (t, e, n) {
  if (!pa(e)) throw Error(k(200));
  return ma(null, t, e, !1, n);
};
xt.unmountComponentAtNode = function (t) {
  if (!pa(t)) throw Error(k(40));
  return t._reactRootContainer
    ? (Bi(function () {
        ma(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Fn] = null);
        });
      }),
      !0)
    : !1;
};
xt.unstable_batchedUpdates = Rh;
xt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!pa(n)) throw Error(k(200));
  if (t == null || t._reactInternals === void 0) throw Error(k(38));
  return ma(t, e, n, !1, i);
};
xt.version = "18.3.1-next-f1338f8080-20240426";
function Wm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wm);
    } catch (t) {
      console.error(t);
    }
}
Wm(), (Wg.exports = xt);
var I1 = Wg.exports,
  kf = I1;
(Pu.createRoot = kf.createRoot), (Pu.hydrateRoot = kf.hydrateRoot);
class pn {
  constructor(e) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = e),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const jr = { PROPERTYCHANGE: "propertychange" };
class Oh {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function L1(t, e, n) {
  let i, r;
  n = n || Pn;
  let s = 0,
    o = t.length,
    l = !1;
  for (; s < o; )
    (i = s + ((o - s) >> 1)),
      (r = +n(t[i], e)),
      r < 0 ? (s = i + 1) : ((o = i), (l = !r));
  return l ? s : ~s;
}
function Pn(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
}
function Fh(t, e, n) {
  if (t[0] <= e) return 0;
  const i = t.length;
  if (e <= t[i - 1]) return i - 1;
  if (typeof n == "function") {
    for (let r = 1; r < i; ++r) {
      const s = t[r];
      if (s === e) return r;
      if (s < e) return n(e, t[r - 1], s) > 0 ? r - 1 : r;
    }
    return i - 1;
  }
  if (n > 0) {
    for (let r = 1; r < i; ++r) if (t[r] < e) return r - 1;
    return i - 1;
  }
  if (n < 0) {
    for (let r = 1; r < i; ++r) if (t[r] <= e) return r;
    return i - 1;
  }
  for (let r = 1; r < i; ++r) {
    if (t[r] == e) return r;
    if (t[r] < e) return t[r - 1] - e < e - t[r] ? r - 1 : r;
  }
  return i - 1;
}
function k1(t, e, n) {
  for (; e < n; ) {
    const i = t[e];
    (t[e] = t[n]), (t[n] = i), ++e, --n;
  }
}
function no(t, e) {
  const n = Array.isArray(e) ? e : [e],
    i = n.length;
  for (let r = 0; r < i; r++) t[t.length] = n[r];
}
function Ci(t, e) {
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function M1(t, e, n) {
  const i = e || Pn;
  return t.every(function (r, s) {
    if (s === 0) return !0;
    const o = i(t[s - 1], r);
    return !(o > 0 || o === 0);
  });
}
function Vi() {
  return !0;
}
function Eo() {
  return !1;
}
function Ur() {}
function bm(t) {
  let e = !1,
    n,
    i,
    r;
  return function () {
    const s = Array.prototype.slice.call(arguments);
    return (
      (!e || this !== r || !Ci(s, i)) &&
        ((e = !0), (r = this), (i = s), (n = t.apply(this, arguments))),
      n
    );
  };
}
function P1(t) {
  function e() {
    let n;
    try {
      n = t();
    } catch (i) {
      return Promise.reject(i);
    }
    return n instanceof Promise ? n : Promise.resolve(n);
  }
  return e();
}
function qr(t) {
  for (const e in t) delete t[e];
}
function Yr(t) {
  let e;
  for (e in t) return !1;
  return !e;
}
class _a extends Oh {
  constructor(e) {
    super(),
      (this.eventTarget_ = e),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(e, n) {
    if (!e || !n) return;
    const i = this.listeners_ || (this.listeners_ = {}),
      r = i[e] || (i[e] = []);
    r.includes(n) || r.push(n);
  }
  dispatchEvent(e) {
    const n = typeof e == "string",
      i = n ? e : e.type,
      r = this.listeners_ && this.listeners_[i];
    if (!r) return;
    const s = n ? new pn(e) : e;
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}),
      l = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    i in o || ((o[i] = 0), (l[i] = 0)), ++o[i];
    let a;
    for (let u = 0, c = r.length; u < c; ++u)
      if (
        ("handleEvent" in r[u]
          ? (a = r[u].handleEvent(s))
          : (a = r[u].call(this, s)),
        a === !1 || s.propagationStopped)
      ) {
        a = !1;
        break;
      }
    if (--o[i] === 0) {
      let u = l[i];
      for (delete l[i]; u--; ) this.removeEventListener(i, Ur);
      delete o[i];
    }
    return a;
  }
  disposeInternal() {
    this.listeners_ && qr(this.listeners_);
  }
  getListeners(e) {
    return (this.listeners_ && this.listeners_[e]) || void 0;
  }
  hasListener(e) {
    return this.listeners_
      ? e
        ? e in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(e, n) {
    if (!this.listeners_) return;
    const i = this.listeners_[e];
    if (!i) return;
    const r = i.indexOf(n);
    r !== -1 &&
      (this.pendingRemovals_ && e in this.pendingRemovals_
        ? ((i[r] = Ur), ++this.pendingRemovals_[e])
        : (i.splice(r, 1), i.length === 0 && delete this.listeners_[e]));
  }
}
const B = {
  CHANGE: "change",
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel",
};
function ie(t, e, n, i, r) {
  if ((i && i !== t && (n = n.bind(i)), r)) {
    const o = n;
    n = function () {
      t.removeEventListener(e, n), o.apply(this, arguments);
    };
  }
  const s = { target: t, type: e, listener: n };
  return t.addEventListener(e, n), s;
}
function Bl(t, e, n, i) {
  return ie(t, e, n, i, !0);
}
function pe(t) {
  t && t.target && (t.target.removeEventListener(t.type, t.listener), qr(t));
}
class wo extends _a {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(B.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(e, n) {
    if (Array.isArray(e)) {
      const i = e.length,
        r = new Array(i);
      for (let s = 0; s < i; ++s) r[s] = ie(this, e[s], n);
      return r;
    }
    return ie(this, e, n);
  }
  onceInternal(e, n) {
    let i;
    if (Array.isArray(e)) {
      const r = e.length;
      i = new Array(r);
      for (let s = 0; s < r; ++s) i[s] = Bl(this, e[s], n);
    } else i = Bl(this, e, n);
    return (n.ol_key = i), i;
  }
  unInternal(e, n) {
    const i = n.ol_key;
    if (i) A1(i);
    else if (Array.isArray(e))
      for (let r = 0, s = e.length; r < s; ++r)
        this.removeEventListener(e[r], n);
    else this.removeEventListener(e, n);
  }
}
wo.prototype.on;
wo.prototype.once;
wo.prototype.un;
function A1(t) {
  if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) pe(t[e]);
  else pe(t);
}
function ne() {
  throw new Error("Unimplemented abstract method.");
}
let D1 = 0;
function Q(t) {
  return t.ol_uid || (t.ol_uid = String(++D1));
}
class Mf extends pn {
  constructor(e, n, i) {
    super(e), (this.key = n), (this.oldValue = i);
  }
}
class mn extends wo {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      Q(this),
      (this.values_ = null),
      e !== void 0 && this.setProperties(e);
  }
  get(e) {
    let n;
    return (
      this.values_ && this.values_.hasOwnProperty(e) && (n = this.values_[e]), n
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(e, n) {
    let i;
    (i = `change:${e}`),
      this.hasListener(i) && this.dispatchEvent(new Mf(i, e, n)),
      (i = jr.PROPERTYCHANGE),
      this.hasListener(i) && this.dispatchEvent(new Mf(i, e, n));
  }
  addChangeListener(e, n) {
    this.addEventListener(`change:${e}`, n);
  }
  removeChangeListener(e, n) {
    this.removeEventListener(`change:${e}`, n);
  }
  set(e, n, i) {
    const r = this.values_ || (this.values_ = {});
    if (i) r[e] = n;
    else {
      const s = r[e];
      (r[e] = n), s !== n && this.notify(e, s);
    }
  }
  setProperties(e, n) {
    for (const i in e) this.set(i, e[i], n);
  }
  applyProperties(e) {
    e.values_ && Object.assign(this.values_ || (this.values_ = {}), e.values_);
  }
  unset(e, n) {
    if (this.values_ && e in this.values_) {
      const i = this.values_[e];
      delete this.values_[e],
        Yr(this.values_) && (this.values_ = null),
        n || this.notify(e, i);
    }
  }
}
const Oe = { ADD: "add", REMOVE: "remove" },
  Pf = { LENGTH: "length" };
class $o extends pn {
  constructor(e, n, i) {
    super(e), (this.element = n), (this.index = i);
  }
}
class Ht extends mn {
  constructor(e, n) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (n = n || {}),
      (this.unique_ = !!n.unique),
      (this.array_ = e || []),
      this.unique_)
    )
      for (let i = 0, r = this.array_.length; i < r; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(e) {
    for (let n = 0, i = e.length; n < i; ++n) this.push(e[n]);
    return this;
  }
  forEach(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i) e(n[i], i, n);
  }
  getArray() {
    return this.array_;
  }
  item(e) {
    return this.array_[e];
  }
  getLength() {
    return this.get(Pf.LENGTH);
  }
  insertAt(e, n) {
    if (e < 0 || e > this.getLength())
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n),
      this.array_.splice(e, 0, n),
      this.updateLength_(),
      this.dispatchEvent(new $o(Oe.ADD, n, e));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(e) {
    this.unique_ && this.assertUnique_(e);
    const n = this.getLength();
    return this.insertAt(n, e), this.getLength();
  }
  remove(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i)
      if (n[i] === e) return this.removeAt(i);
  }
  removeAt(e) {
    if (e < 0 || e >= this.getLength()) return;
    const n = this.array_[e];
    return (
      this.array_.splice(e, 1),
      this.updateLength_(),
      this.dispatchEvent(new $o(Oe.REMOVE, n, e)),
      n
    );
  }
  setAt(e, n) {
    const i = this.getLength();
    if (e >= i) {
      this.insertAt(e, n);
      return;
    }
    if (e < 0) throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n, e);
    const r = this.array_[e];
    (this.array_[e] = n),
      this.dispatchEvent(new $o(Oe.REMOVE, r, e)),
      this.dispatchEvent(new $o(Oe.ADD, n, e));
  }
  updateLength_() {
    this.set(Pf.LENGTH, this.array_.length);
  }
  assertUnique_(e, n) {
    for (let i = 0, r = this.array_.length; i < r; ++i)
      if (this.array_[i] === e && i !== n)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function te(t, e) {
  if (!t) throw new Error(e);
}
class mi extends mn {
  constructor(e) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      e)
    )
      if (typeof e.getSimplifiedGeometry == "function") {
        const n = e;
        this.setGeometry(n);
      } else {
        const n = e;
        this.setProperties(n);
      }
  }
  clone() {
    const e = new mi(this.hasProperties() ? this.getProperties() : null);
    e.setGeometryName(this.getGeometryName());
    const n = this.getGeometry();
    n && e.setGeometry(n.clone());
    const i = this.getStyle();
    return i && e.setStyle(i), e;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (pe(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const e = this.getGeometry();
    e &&
      (this.geometryChangeKey_ = ie(
        e,
        B.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(e) {
    this.set(this.geometryName_, e);
  }
  setStyle(e) {
    (this.style_ = e),
      (this.styleFunction_ = e ? O1(e) : void 0),
      this.changed();
  }
  setId(e) {
    (this.id_ = e), this.changed();
  }
  setGeometryName(e) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = e),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function O1(t) {
  if (typeof t == "function") return t;
  let e;
  return (
    Array.isArray(t)
      ? (e = t)
      : (te(
          typeof t.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (e = [t])),
    function () {
      return e;
    }
  );
}
new Array(6);
function Qt() {
  return [1, 0, 0, 1, 0, 0];
}
function F1(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    t
  );
}
function Ae(t, e) {
  const n = e[0],
    i = e[1];
  return (
    (e[0] = t[0] * n + t[2] * i + t[4]), (e[1] = t[1] * n + t[3] * i + t[5]), e
  );
}
function gn(t, e, n, i, r, s, o, l) {
  const a = Math.sin(s),
    u = Math.cos(s);
  return (
    (t[0] = i * u),
    (t[1] = r * a),
    (t[2] = -i * a),
    (t[3] = r * u),
    (t[4] = o * i * u - l * i * a + e),
    (t[5] = o * r * a + l * r * u + n),
    t
  );
}
function Nh(t, e) {
  const n = N1(e);
  te(n !== 0, "Transformation matrix cannot be inverted");
  const i = e[0],
    r = e[1],
    s = e[2],
    o = e[3],
    l = e[4],
    a = e[5];
  return (
    (t[0] = o / n),
    (t[1] = -r / n),
    (t[2] = -s / n),
    (t[3] = i / n),
    (t[4] = (s * a - o * l) / n),
    (t[5] = -(i * a - r * l) / n),
    t
  );
}
function N1(t) {
  return t[0] * t[3] - t[1] * t[2];
}
const Af = [1e6, 1e6, 1e6, 1e6, 2, 2];
function Xm(t) {
  return (
    "matrix(" + t.map((n, i) => Math.round(n * Af[i]) / Af[i]).join(", ") + ")"
  );
}
const Me = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function Df(t) {
  const e = Gt();
  for (let n = 0, i = t.length; n < i; ++n) Ns(e, t[n]);
  return e;
}
function zh(t, e, n) {
  return n
    ? ((n[0] = t[0] - e),
      (n[1] = t[1] - e),
      (n[2] = t[2] + e),
      (n[3] = t[3] + e),
      n)
    : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
}
function jm(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t.slice();
}
function Um(t, e, n) {
  let i, r;
  return (
    e < t[0] ? (i = t[0] - e) : t[2] < e ? (i = e - t[2]) : (i = 0),
    n < t[1] ? (r = t[1] - n) : t[3] < n ? (r = n - t[3]) : (r = 0),
    i * i + r * r
  );
}
function Br(t, e) {
  return Ym(t, e[0], e[1]);
}
function Cr(t, e) {
  return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
}
function Ym(t, e, n) {
  return t[0] <= e && e <= t[2] && t[1] <= n && n <= t[3];
}
function Sc(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2],
    s = t[3],
    o = e[0],
    l = e[1];
  let a = Me.UNKNOWN;
  return (
    o < n ? (a = a | Me.LEFT) : o > r && (a = a | Me.RIGHT),
    l < i ? (a = a | Me.BELOW) : l > s && (a = a | Me.ABOVE),
    a === Me.UNKNOWN && (a = Me.INTERSECTING),
    a
  );
}
function Gt() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function _i(t, e, n, i, r) {
  return r ? ((r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r) : [t, e, n, i];
}
function ya(t) {
  return _i(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
}
function Bm(t, e) {
  const n = t[0],
    i = t[1];
  return _i(n, i, n, i, e);
}
function Gh(t, e, n, i, r) {
  const s = ya(r);
  return Vm(s, t, e, n, i);
}
function io(t, e) {
  return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
}
function z1(t, e) {
  return (
    e[0] < t[0] && (t[0] = e[0]),
    e[2] > t[2] && (t[2] = e[2]),
    e[1] < t[1] && (t[1] = e[1]),
    e[3] > t[3] && (t[3] = e[3]),
    t
  );
}
function Ns(t, e) {
  e[0] < t[0] && (t[0] = e[0]),
    e[0] > t[2] && (t[2] = e[0]),
    e[1] < t[1] && (t[1] = e[1]),
    e[1] > t[3] && (t[3] = e[1]);
}
function Vm(t, e, n, i, r) {
  for (; n < i; n += r) G1(t, e[n], e[n + 1]);
  return t;
}
function G1(t, e, n) {
  (t[0] = Math.min(t[0], e)),
    (t[1] = Math.min(t[1], n)),
    (t[2] = Math.max(t[2], e)),
    (t[3] = Math.max(t[3], n));
}
function Km(t, e) {
  let n;
  return (
    (n = e(va(t))),
    n || ((n = e(Ea(t))), n) || ((n = e(wa(t))), n) || ((n = e($i(t))), n)
      ? n
      : !1
  );
}
function Tc(t) {
  let e = 0;
  return xa(t) || (e = oe(t) * Ze(t)), e;
}
function va(t) {
  return [t[0], t[1]];
}
function Ea(t) {
  return [t[2], t[1]];
}
function Ki(t) {
  return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
}
function W1(t, e) {
  let n;
  if (e === "bottom-left") n = va(t);
  else if (e === "bottom-right") n = Ea(t);
  else if (e === "top-left") n = $i(t);
  else if (e === "top-right") n = wa(t);
  else throw new Error("Invalid corner");
  return n;
}
function Rc(t, e, n, i, r) {
  const [s, o, l, a, u, c, h, d] = Ic(t, e, n, i);
  return _i(
    Math.min(s, l, u, h),
    Math.min(o, a, c, d),
    Math.max(s, l, u, h),
    Math.max(o, a, c, d),
    r,
  );
}
function Ic(t, e, n, i) {
  const r = (e * i[0]) / 2,
    s = (e * i[1]) / 2,
    o = Math.cos(n),
    l = Math.sin(n),
    a = r * o,
    u = r * l,
    c = s * o,
    h = s * l,
    d = t[0],
    f = t[1];
  return [
    d - a + h,
    f - u - c,
    d - a - h,
    f - u + c,
    d + a - h,
    f + u + c,
    d + a + h,
    f + u - c,
    d - a + h,
    f - u - c,
  ];
}
function Ze(t) {
  return t[3] - t[1];
}
function zs(t, e, n) {
  const i = n || Gt();
  return (
    lt(t, e)
      ? (t[0] > e[0] ? (i[0] = t[0]) : (i[0] = e[0]),
        t[1] > e[1] ? (i[1] = t[1]) : (i[1] = e[1]),
        t[2] < e[2] ? (i[2] = t[2]) : (i[2] = e[2]),
        t[3] < e[3] ? (i[3] = t[3]) : (i[3] = e[3]))
      : ya(i),
    i
  );
}
function $i(t) {
  return [t[0], t[3]];
}
function wa(t) {
  return [t[2], t[3]];
}
function oe(t) {
  return t[2] - t[0];
}
function lt(t, e) {
  return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
}
function xa(t) {
  return t[2] < t[0] || t[3] < t[1];
}
function b1(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t;
}
function X1(t, e, n) {
  let i = !1;
  const r = Sc(t, e),
    s = Sc(t, n);
  if (r === Me.INTERSECTING || s === Me.INTERSECTING) i = !0;
  else {
    const o = t[0],
      l = t[1],
      a = t[2],
      u = t[3],
      c = e[0],
      h = e[1],
      d = n[0],
      f = n[1],
      p = (f - h) / (d - c);
    let y, E;
    s & Me.ABOVE &&
      !(r & Me.ABOVE) &&
      ((y = d - (f - u) / p), (i = y >= o && y <= a)),
      !i &&
        s & Me.RIGHT &&
        !(r & Me.RIGHT) &&
        ((E = f - (d - a) * p), (i = E >= l && E <= u)),
      !i &&
        s & Me.BELOW &&
        !(r & Me.BELOW) &&
        ((y = d - (f - l) / p), (i = y >= o && y <= a)),
      !i &&
        s & Me.LEFT &&
        !(r & Me.LEFT) &&
        ((E = f - (d - o) * p), (i = E >= l && E <= u));
  }
  return i;
}
function Zm(t, e) {
  const n = e.getExtent(),
    i = Ki(t);
  if (e.canWrapX() && (i[0] < n[0] || i[0] >= n[2])) {
    const r = oe(n),
      o = Math.floor((i[0] - n[0]) / r) * r;
    (t[0] -= o), (t[2] -= o);
  }
  return t;
}
function j1(t, e) {
  if (e.canWrapX()) {
    const n = e.getExtent();
    if (!isFinite(t[0]) || !isFinite(t[2])) return [[n[0], t[1], n[2], t[3]]];
    Zm(t, e);
    const i = oe(n);
    if (oe(t) > i) return [[n[0], t[1], n[2], t[3]]];
    if (t[0] < n[0])
      return [
        [t[0] + i, t[1], n[2], t[3]],
        [n[0], t[1], t[2], t[3]],
      ];
    if (t[2] > n[2])
      return [
        [t[0], t[1], n[2], t[3]],
        [n[0], t[1], t[2] - i, t[3]],
      ];
  }
  return [t];
}
const Wh = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class Hm {
  constructor(e) {
    (this.code_ = e.code),
      (this.units_ = e.units),
      (this.extent_ = e.extent !== void 0 ? e.extent : null),
      (this.worldExtent_ = e.worldExtent !== void 0 ? e.worldExtent : null),
      (this.axisOrientation_ =
        e.axisOrientation !== void 0 ? e.axisOrientation : "enu"),
      (this.global_ = e.global !== void 0 ? e.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = e.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = e.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || Wh[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(e) {
    (this.global_ = e), (this.canWrapX_ = !!(e && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(e) {
    this.defaultTileGrid_ = e;
  }
  setExtent(e) {
    (this.extent_ = e), (this.canWrapX_ = !!(this.global_ && e));
  }
  setWorldExtent(e) {
    this.worldExtent_ = e;
  }
  setGetPointResolution(e) {
    this.getPointResolutionFunc_ = e;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const xo = 6378137,
  Sr = Math.PI * xo,
  U1 = [-Sr, -Sr, Sr, Sr],
  Y1 = [-180, -85, 180, 85],
  qo = xo * Math.log(Math.tan(Math.PI / 2));
class tr extends Hm {
  constructor(e) {
    super({
      code: e,
      units: "m",
      extent: U1,
      global: !0,
      worldExtent: Y1,
      getPointResolution: function (n, i) {
        return n / Math.cosh(i[1] / xo);
      },
    });
  }
}
const Of = [
  new tr("EPSG:3857"),
  new tr("EPSG:102100"),
  new tr("EPSG:102113"),
  new tr("EPSG:900913"),
  new tr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new tr("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function B1(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n) {
    e[r] = (Sr * t[r]) / 180;
    let s = xo * Math.log(Math.tan((Math.PI * (+t[r + 1] + 90)) / 360));
    s > qo ? (s = qo) : s < -qo && (s = -qo), (e[r + 1] = s);
  }
  return e;
}
function V1(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n)
    (e[r] = (180 * t[r]) / Sr),
      (e[r + 1] = (360 * Math.atan(Math.exp(t[r + 1] / xo))) / Math.PI - 90);
  return e;
}
const K1 = 6378137,
  Ff = [-180, -90, 180, 90],
  Z1 = (Math.PI * K1) / 180;
class Ri extends Hm {
  constructor(e, n) {
    super({
      code: e,
      units: "degrees",
      extent: Ff,
      axisOrientation: n,
      global: !0,
      metersPerUnit: Z1,
      worldExtent: Ff,
    });
  }
}
const Nf = [
  new Ri("CRS:84"),
  new Ri("EPSG:4326", "neu"),
  new Ri("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Ri("urn:ogc:def:crs:OGC:2:84"),
  new Ri("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Ri("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Ri("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let Lc = {};
function H1(t) {
  return (
    Lc[t] ||
    Lc[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function $1(t, e) {
  Lc[t] = e;
}
let Ar = {};
function Vl(t, e, n) {
  const i = t.getCode(),
    r = e.getCode();
  i in Ar || (Ar[i] = {}), (Ar[i][r] = n);
}
function q1(t, e) {
  let n;
  return t in Ar && e in Ar[t] && (n = Ar[t][e]), n;
}
function Ie(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Q1(t, e, n, i, r, s) {
  const o = r - n,
    l = s - i;
  if (o !== 0 || l !== 0) {
    const a = ((t - n) * o + (e - i) * l) / (o * o + l * l);
    a > 1 ? ((n = r), (i = s)) : a > 0 && ((n += o * a), (i += l * a));
  }
  return Dr(t, e, n, i);
}
function Dr(t, e, n, i) {
  const r = n - t,
    s = i - e;
  return r * r + s * s;
}
function J1(t) {
  const e = t.length;
  for (let i = 0; i < e; i++) {
    let r = i,
      s = Math.abs(t[i][i]);
    for (let l = i + 1; l < e; l++) {
      const a = Math.abs(t[l][i]);
      a > s && ((s = a), (r = l));
    }
    if (s === 0) return null;
    const o = t[r];
    (t[r] = t[i]), (t[i] = o);
    for (let l = i + 1; l < e; l++) {
      const a = -t[l][i] / t[i][i];
      for (let u = i; u < e + 1; u++)
        i == u ? (t[l][u] = 0) : (t[l][u] += a * t[i][u]);
    }
  }
  const n = new Array(e);
  for (let i = e - 1; i >= 0; i--) {
    n[i] = t[i][e] / t[i][i];
    for (let r = i - 1; r >= 0; r--) t[r][e] -= t[r][i] * n[i];
  }
  return n;
}
function El(t) {
  return (t * Math.PI) / 180;
}
function bi(t, e) {
  const n = t % e;
  return n * e < 0 ? n + e : n;
}
function At(t, e, n) {
  return t + n * (e - t);
}
function bh(t, e) {
  const n = Math.pow(10, e);
  return Math.round(t * n) / n;
}
function Qo(t, e) {
  return Math.floor(bh(t, e));
}
function Jo(t, e) {
  return Math.ceil(bh(t, e));
}
function ev(t, e) {
  return (t[0] += +e[0]), (t[1] += +e[1]), t;
}
function Kl(t, e) {
  let n = !0;
  for (let i = t.length - 1; i >= 0; --i)
    if (t[i] != e[i]) {
      n = !1;
      break;
    }
  return n;
}
function Xh(t, e) {
  const n = Math.cos(e),
    i = Math.sin(e),
    r = t[0] * n - t[1] * i,
    s = t[1] * n + t[0] * i;
  return (t[0] = r), (t[1] = s), t;
}
function tv(t, e) {
  return (t[0] *= e), (t[1] *= e), t;
}
function $m(t, e) {
  if (e.canWrapX()) {
    const n = oe(e.getExtent()),
      i = nv(t, e, n);
    i && (t[0] -= i * n);
  }
  return t;
}
function nv(t, e, n) {
  const i = e.getExtent();
  let r = 0;
  return (
    e.canWrapX() &&
      (t[0] < i[0] || t[0] > i[2]) &&
      ((n = n || oe(i)), (r = Math.floor((t[0] - i[0]) / n))),
    r
  );
}
const iv = 63710088e-1;
function zf(t, e, n) {
  n = n || iv;
  const i = El(t[1]),
    r = El(e[1]),
    s = (r - i) / 2,
    o = El(e[0] - t[0]) / 2,
    l =
      Math.sin(s) * Math.sin(s) +
      Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(r);
  return 2 * n * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l));
}
function qm(...t) {
  console.warn(...t);
}
let kc = !0;
function Qm(t) {
  kc = !1;
}
function jh(t, e) {
  if (e !== void 0) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    e = e;
  } else e = t.slice();
  return e;
}
function Jm(t, e) {
  if (e !== void 0 && t !== e) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    t = e;
  }
  return t;
}
function rv(t) {
  $1(t.getCode(), t), Vl(t, t, jh);
}
function sv(t) {
  t.forEach(rv);
}
function Wt(t) {
  return typeof t == "string" ? H1(t) : t || null;
}
function Gf(t, e, n, i) {
  t = Wt(t);
  let r;
  const s = t.getPointResolutionFunc();
  if (s) r = s(e, n);
  else {
    const o = t.getUnits();
    if ((o == "degrees" && !i) || i == "degrees") r = e;
    else {
      const l = Yh(t, Wt("EPSG:4326"));
      if (l === Jm && o !== "degrees") r = e * t.getMetersPerUnit();
      else {
        let u = [
          n[0] - e / 2,
          n[1],
          n[0] + e / 2,
          n[1],
          n[0],
          n[1] - e / 2,
          n[0],
          n[1] + e / 2,
        ];
        u = l(u, u, 2);
        const c = zf(u.slice(0, 2), u.slice(2, 4)),
          h = zf(u.slice(4, 6), u.slice(6, 8));
        r = (c + h) / 2;
      }
      const a = t.getMetersPerUnit();
      a !== void 0 && (r /= a);
    }
  }
  return r;
}
function Wf(t) {
  sv(t),
    t.forEach(function (e) {
      t.forEach(function (n) {
        e !== n && Vl(e, n, jh);
      });
    });
}
function ov(t, e, n, i) {
  t.forEach(function (r) {
    e.forEach(function (s) {
      Vl(r, s, n), Vl(s, r, i);
    });
  });
}
function Uh(t, e) {
  return t ? (typeof t == "string" ? Wt(t) : t) : Wt(e);
}
function Ca(t, e) {
  return Qm(), Bh(t, "EPSG:4326", "EPSG:3857");
}
function lv(t, e) {
  const n = Bh(t, "EPSG:3857", "EPSG:4326"),
    i = n[0];
  return (i < -180 || i > 180) && (n[0] = bi(i + 180, 360) - 180), n;
}
function or(t, e) {
  if (t === e) return !0;
  const n = t.getUnits() === e.getUnits();
  return (t.getCode() === e.getCode() || Yh(t, e) === jh) && n;
}
function Yh(t, e) {
  const n = t.getCode(),
    i = e.getCode();
  let r = q1(n, i);
  return r || (r = Jm), r;
}
function Zl(t, e) {
  const n = Wt(t),
    i = Wt(e);
  return Yh(n, i);
}
function Bh(t, e, n) {
  return Zl(e, n)(t, void 0, t.length);
}
function Mc(t, e) {
  return t;
}
function Cn(t, e) {
  return (
    kc &&
      !Kl(t, [0, 0]) &&
      t[0] >= -180 &&
      t[0] <= 180 &&
      t[1] >= -90 &&
      t[1] <= 90 &&
      ((kc = !1),
      qm(
        "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
      )),
    t
  );
}
function e_(t, e) {
  return t;
}
function Oi(t, e) {
  return t;
}
function av() {
  Wf(Of), Wf(Nf), ov(Nf, Of, B1, V1);
}
av();
function fi(t, e, n, i, r, s) {
  s = s || [];
  let o = 0;
  for (let l = e; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (s[o++] = r[0] * a + r[2] * u + r[4]),
      (s[o++] = r[1] * a + r[3] * u + r[5]);
  }
  return s && s.length != o && (s.length = o), s;
}
function t_(t, e, n, i, r, s, o) {
  o = o || [];
  const l = Math.cos(r),
    a = Math.sin(r),
    u = s[0],
    c = s[1];
  let h = 0;
  for (let d = e; d < n; d += i) {
    const f = t[d] - u,
      p = t[d + 1] - c;
    (o[h++] = u + f * l - p * a), (o[h++] = c + f * a + p * l);
    for (let y = d + 2; y < d + i; ++y) o[h++] = t[y];
  }
  return o && o.length != h && (o.length = h), o;
}
function uv(t, e, n, i, r, s, o, l) {
  l = l || [];
  const a = o[0],
    u = o[1];
  let c = 0;
  for (let h = e; h < n; h += i) {
    const d = t[h] - a,
      f = t[h + 1] - u;
    (l[c++] = a + r * d), (l[c++] = u + s * f);
    for (let p = h + 2; p < h + i; ++p) l[c++] = t[p];
  }
  return l && l.length != c && (l.length = c), l;
}
function cv(t, e, n, i, r, s, o) {
  o = o || [];
  let l = 0;
  for (let a = e; a < n; a += i) {
    (o[l++] = t[a] + r), (o[l++] = t[a + 1] + s);
    for (let u = a + 2; u < a + i; ++u) o[l++] = t[u];
  }
  return o && o.length != l && (o.length = l), o;
}
const bf = Qt();
class hv extends mn {
  constructor() {
    super(),
      (this.extent_ = Gt()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = bm((e, n, i) => {
        if (!i) return this.getSimplifiedGeometry(n);
        const r = this.clone();
        return r.applyTransform(i), r.getSimplifiedGeometry(n);
      }));
  }
  simplifyTransformed(e, n) {
    return this.simplifyTransformedInternal(this.getRevision(), e, n);
  }
  clone() {
    return ne();
  }
  closestPointXY(e, n, i, r) {
    return ne();
  }
  containsXY(e, n) {
    const i = this.getClosestPoint([e, n]);
    return i[0] === e && i[1] === n;
  }
  getClosestPoint(e, n) {
    return (n = n || [NaN, NaN]), this.closestPointXY(e[0], e[1], n, 1 / 0), n;
  }
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  computeExtent(e) {
    return ne();
  }
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const n = this.computeExtent(this.extent_);
      (isNaN(n[0]) || isNaN(n[1])) && ya(n),
        (this.extentRevision_ = this.getRevision());
    }
    return b1(this.extent_, e);
  }
  rotate(e, n) {
    ne();
  }
  scale(e, n, i) {
    ne();
  }
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  getSimplifiedGeometry(e) {
    return ne();
  }
  getType() {
    return ne();
  }
  applyTransform(e) {
    ne();
  }
  intersectsExtent(e) {
    return ne();
  }
  translate(e, n) {
    ne();
  }
  transform(e, n) {
    const i = Wt(e),
      r =
        i.getUnits() == "tile-pixels"
          ? function (s, o, l) {
              const a = i.getExtent(),
                u = i.getWorldExtent(),
                c = Ze(u) / Ze(a);
              return (
                gn(bf, u[0], u[3], c, -c, 0, 0, 0),
                fi(s, 0, s.length, l, bf, o),
                Zl(i, n)(s, o, l)
              );
            }
          : Zl(i, n);
    return this.applyTransform(r), this;
  }
}
class Vh extends hv {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(e) {
    return Gh(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  getCoordinates() {
    return ne();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(e) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      e < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          e <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const n = this.getSimplifiedGeometryInternal(e);
    return n.getFlatCoordinates().length < this.flatCoordinates.length
      ? n
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = e), this);
  }
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(e, n) {
    (this.stride = Xf(e)), (this.layout = e), (this.flatCoordinates = n);
  }
  setCoordinates(e, n) {
    ne();
  }
  setLayout(e, n, i) {
    let r;
    if (e) r = Xf(e);
    else {
      for (let s = 0; s < i; ++s) {
        if (n.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        n = n[0];
      }
      (r = n.length), (e = dv(r));
    }
    (this.layout = e), (this.stride = r);
  }
  applyTransform(e) {
    this.flatCoordinates &&
      (e(this.flatCoordinates, this.flatCoordinates, this.stride),
      this.changed());
  }
  rotate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      t_(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
  scale(e, n, i) {
    n === void 0 && (n = e), i || (i = Ki(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      uv(r, 0, r.length, s, e, n, i, r), this.changed();
    }
  }
  translate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      cv(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
}
function dv(t) {
  let e;
  return t == 2 ? (e = "XY") : t == 3 ? (e = "XYZ") : t == 4 && (e = "XYZM"), e;
}
function Xf(t) {
  let e;
  return (
    t == "XY"
      ? (e = 2)
      : t == "XYZ" || t == "XYM"
        ? (e = 3)
        : t == "XYZM" && (e = 4),
    e
  );
}
function fv(t, e, n) {
  const i = t.getFlatCoordinates();
  if (!i) return null;
  const r = t.getStride();
  return fi(i, 0, i.length, r, e, n);
}
function jf(t, e, n, i, r, s, o) {
  const l = t[e],
    a = t[e + 1],
    u = t[n] - l,
    c = t[n + 1] - a;
  let h;
  if (u === 0 && c === 0) h = e;
  else {
    const d = ((r - l) * u + (s - a) * c) / (u * u + c * c);
    if (d > 1) h = n;
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = At(t[e + f], t[n + f], d);
      o.length = i;
      return;
    } else h = e;
  }
  for (let d = 0; d < i; ++d) o[d] = t[h + d];
  o.length = i;
}
function n_(t, e, n, i, r) {
  let s = t[e],
    o = t[e + 1];
  for (e += i; e < n; e += i) {
    const l = t[e],
      a = t[e + 1],
      u = Dr(s, o, l, a);
    u > r && (r = u), (s = l), (o = a);
  }
  return r;
}
function gv(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r = n_(t, e, l, i, r)), (e = l);
  }
  return r;
}
function i_(t, e, n, i, r, s, o, l, a, u, c) {
  if (e == n) return u;
  let h, d;
  if (r === 0) {
    if (((d = Dr(o, l, t[e], t[e + 1])), d < u)) {
      for (h = 0; h < i; ++h) a[h] = t[e + h];
      return (a.length = i), d;
    }
    return u;
  }
  c = c || [NaN, NaN];
  let f = e + i;
  for (; f < n; )
    if ((jf(t, f - i, f, i, o, l, c), (d = Dr(o, l, c[0], c[1])), d < u)) {
      for (u = d, h = 0; h < i; ++h) a[h] = c[h];
      (a.length = i), (f += i);
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(u)) / r) | 0, 1);
  if ((jf(t, n - i, e, i, o, l, c), (d = Dr(o, l, c[0], c[1])), d < u)) {
    for (u = d, h = 0; h < i; ++h) a[h] = c[h];
    a.length = i;
  }
  return u;
}
function pv(t, e, n, i, r, s, o, l, a, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = n.length; h < d; ++h) {
    const f = n[h];
    (u = i_(t, e, f, i, r, s, o, l, a, u, c)), (e = f);
  }
  return u;
}
function mv(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) t[e++] = n[r];
  return e;
}
function r_(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) {
    const o = n[r];
    for (let l = 0; l < i; ++l) t[e++] = o[l];
  }
  return e;
}
function _v(t, e, n, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = r_(t, e, n[o], i);
    (r[s++] = a), (e = a);
  }
  return (r.length = s), r;
}
function Kh(t, e, n, i, r, s, o) {
  const l = (n - e) / i;
  if (l < 3) {
    for (; e < n; e += i) (s[o++] = t[e]), (s[o++] = t[e + 1]);
    return o;
  }
  const a = new Array(l);
  (a[0] = 1), (a[l - 1] = 1);
  const u = [e, n - i];
  let c = 0;
  for (; u.length > 0; ) {
    const h = u.pop(),
      d = u.pop();
    let f = 0;
    const p = t[d],
      y = t[d + 1],
      E = t[h],
      m = t[h + 1];
    for (let g = d + i; g < h; g += i) {
      const _ = t[g],
        v = t[g + 1],
        w = Q1(_, v, p, y, E, m);
      w > f && ((c = g), (f = w));
    }
    f > r &&
      ((a[(c - e) / i] = 1),
      d + i < c && u.push(d, c),
      c + i < h && u.push(c, h));
  }
  for (let h = 0; h < l; ++h)
    a[h] && ((s[o++] = t[e + h * i]), (s[o++] = t[e + h * i + 1]));
  return o;
}
function yv(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = Kh(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function Mi(t, e) {
  return e * Math.round(t / e);
}
function vv(t, e, n, i, r, s, o) {
  if (e == n) return o;
  let l = Mi(t[e], r),
    a = Mi(t[e + 1], r);
  (e += i), (s[o++] = l), (s[o++] = a);
  let u, c;
  do
    if (((u = Mi(t[e], r)), (c = Mi(t[e + 1], r)), (e += i), e == n))
      return (s[o++] = u), (s[o++] = c), o;
  while (u == l && c == a);
  for (; e < n; ) {
    const h = Mi(t[e], r),
      d = Mi(t[e + 1], r);
    if (((e += i), h == u && d == c)) continue;
    const f = u - l,
      p = c - a,
      y = h - l,
      E = d - a;
    if (
      f * E == p * y &&
      ((f < 0 && y < f) || f == y || (f > 0 && y > f)) &&
      ((p < 0 && E < p) || p == E || (p > 0 && E > p))
    ) {
      (u = h), (c = d);
      continue;
    }
    (s[o++] = u), (s[o++] = c), (l = u), (a = c), (u = h), (c = d);
  }
  return (s[o++] = u), (s[o++] = c), o;
}
function s_(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = vv(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function Tr(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = e; o < n; o += i) r[s++] = t.slice(o, o + i);
  return (r.length = s), r;
}
function Hl(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = Tr(t, e, a, i, r[s])), (e = a);
  }
  return (r.length = s), r;
}
function Uf(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = a.length === 1 && a[0] === e ? [] : Hl(t, e, a, i, r[s])),
      (e = a[a.length - 1]);
  }
  return (r.length = s), r;
}
function o_(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += o * l - s * a), (s = l), (o = a);
  }
  return r / 2;
}
function Ev(t, e, n, i) {
  let r = 0;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r += o_(t, e, l, i)), (e = l);
  }
  return r;
}
class ro extends Vh {
  constructor(e, n) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      n !== void 0 && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  clone() {
    return new ro(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(e, n, i, r) {
    return r < Um(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            n_(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        i_(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  getArea() {
    return o_(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return Tr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(e) {
    const n = [];
    return (
      (n.length = Kh(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        e,
        n,
        0,
      )),
      new ro(n, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(e) {
    return !1;
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = r_(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
class Sa extends Vh {
  constructor(e, n) {
    super(), this.setCoordinates(e, n);
  }
  clone() {
    const e = new Sa(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    const s = this.flatCoordinates,
      o = Dr(e, n, s[0], s[1]);
    if (o < r) {
      const l = this.stride;
      for (let a = 0; a < l; ++a) i[a] = s[a];
      return (i.length = l), o;
    }
    return r;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(e) {
    return Bm(this.flatCoordinates, e);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(e) {
    return Ym(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = mv(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
function wv(t, e, n, i, r) {
  return !Km(r, function (o) {
    return !Fi(t, e, n, i, o[0], o[1]);
  });
}
function Fi(t, e, n, i, r, s) {
  let o = 0,
    l = t[n - i],
    a = t[n - i + 1];
  for (; e < n; e += i) {
    const u = t[e],
      c = t[e + 1];
    a <= s
      ? c > s && (u - l) * (s - a) - (r - l) * (c - a) > 0 && o++
      : c <= s && (u - l) * (s - a) - (r - l) * (c - a) < 0 && o--,
      (l = u),
      (a = c);
  }
  return o !== 0;
}
function l_(t, e, n, i, r, s) {
  if (n.length === 0 || !Fi(t, e, n[0], i, r, s)) return !1;
  for (let o = 1, l = n.length; o < l; ++o)
    if (Fi(t, n[o - 1], n[o], i, r, s)) return !1;
  return !0;
}
function Zh(t, e, n, i, r, s, o) {
  let l, a, u, c, h, d, f;
  const p = r[s + 1],
    y = [];
  for (let g = 0, _ = n.length; g < _; ++g) {
    const v = n[g];
    for (c = t[v - i], d = t[v - i + 1], l = e; l < v; l += i)
      (h = t[l]),
        (f = t[l + 1]),
        ((p <= d && f <= p) || (d <= p && p <= f)) &&
          ((u = ((p - d) / (f - d)) * (h - c) + c), y.push(u)),
        (c = h),
        (d = f);
  }
  let E = NaN,
    m = -1 / 0;
  for (y.sort(Pn), c = y[0], l = 1, a = y.length; l < a; ++l) {
    h = y[l];
    const g = Math.abs(h - c);
    g > m && ((u = (c + h) / 2), l_(t, e, n, i, u, p) && ((E = u), (m = g))),
      (c = h);
  }
  return isNaN(E) && (E = r[s]), o ? (o.push(E, p, m), o) : [E, p, m];
}
function xv(t, e, n, i, r) {
  let s = [];
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = Zh(t, e, a, i, r, 2 * o, s)), (e = a[a.length - 1]);
  }
  return s;
}
function Cv(t, e, n, i, r) {
  let s;
  for (e += i; e < n; e += i)
    if (((s = r(t.slice(e - i, e), t.slice(e, e + i))), s)) return s;
  return !1;
}
function a_(t, e, n, i, r) {
  const s = Vm(Gt(), t, e, n, i);
  return lt(r, s)
    ? Cr(r, s) ||
      (s[0] >= r[0] && s[2] <= r[2]) ||
      (s[1] >= r[1] && s[3] <= r[3])
      ? !0
      : Cv(t, e, n, i, function (o, l) {
          return X1(r, o, l);
        })
    : !1;
}
function u_(t, e, n, i, r) {
  return !!(
    a_(t, e, n, i, r) ||
    Fi(t, e, n, i, r[0], r[1]) ||
    Fi(t, e, n, i, r[0], r[3]) ||
    Fi(t, e, n, i, r[2], r[1]) ||
    Fi(t, e, n, i, r[2], r[3])
  );
}
function Sv(t, e, n, i, r) {
  if (!u_(t, e, n[0], i, r)) return !1;
  if (n.length === 1) return !0;
  for (let s = 1, o = n.length; s < o; ++s)
    if (wv(t, n[s - 1], n[s], i, r) && !a_(t, n[s - 1], n[s], i, r)) return !1;
  return !0;
}
function Tv(t, e, n, i) {
  for (; e < n - i; ) {
    for (let r = 0; r < i; ++r) {
      const s = t[e + r];
      (t[e + r] = t[n - i + r]), (t[n - i + r] = s);
    }
    (e += i), (n -= i);
  }
}
function Hh(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += (l - s) * (a + o)), (s = l), (o = a);
  }
  return r === 0 ? void 0 : r > 0;
}
function Rv(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = Hh(t, e, l, i);
    if (s === 0) {
      if ((r && a) || (!r && !a)) return !1;
    } else if ((r && !a) || (!r && a)) return !1;
    e = l;
  }
  return !0;
}
function Yf(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = Hh(t, e, l, i);
    (s === 0 ? (r && a) || (!r && !a) : (r && !a) || (!r && a)) &&
      Tv(t, e, l, i),
      (e = l);
  }
  return e;
}
function Iv(t, e) {
  const n = [];
  let i = 0,
    r = 0,
    s;
  for (let o = 0, l = e.length; o < l; ++o) {
    const a = e[o],
      u = Hh(t, i, a, 2);
    if ((s === void 0 && (s = u), u === s)) n.push(e.slice(r, o + 1));
    else {
      if (n.length === 0) continue;
      n[n.length - 1].push(e[r]);
    }
    (r = o + 1), (i = a);
  }
  return n;
}
class yi extends Vh {
  constructor(e, n, i) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      n !== void 0 && i
        ? (this.setFlatCoordinates(n, e), (this.ends_ = i))
        : this.setCoordinates(e, n);
  }
  appendLinearRing(e) {
    this.flatCoordinates
      ? no(this.flatCoordinates, e.getFlatCoordinates())
      : (this.flatCoordinates = e.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const e = new yi(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Um(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            gv(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        pv(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  containsXY(e, n) {
    return l_(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      n,
    );
  }
  getArea() {
    return Ev(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(e) {
    let n;
    return (
      e !== void 0
        ? ((n = this.getOrientedFlatCoordinates().slice()),
          Yf(n, 0, this.ends_, this.stride, e))
        : (n = this.flatCoordinates),
      Hl(n, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = Ki(this.getExtent());
      (this.flatInteriorPoint_ = Zh(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new Sa(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e
      ? null
      : new ro(
          this.flatCoordinates.slice(
            e === 0 ? 0 : this.ends_[e - 1],
            this.ends_[e],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const e = this.layout,
      n = this.flatCoordinates,
      i = this.ends_,
      r = [];
    let s = 0;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = new ro(n.slice(s, a), e);
      r.push(u), (s = a);
    }
    return r;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      Rv(e, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = e)
        : ((this.orientedFlatCoordinates_ = e.slice()),
          (this.orientedFlatCoordinates_.length = Yf(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = s_(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(e),
        n,
        0,
        i,
      )),
      new yi(n, "XY", i)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(e) {
    return Sv(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = _v(this.flatCoordinates, 0, e, this.stride, this.ends_);
    (this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]),
      this.changed();
  }
}
function Bf(t) {
  if (xa(t)) throw new Error("Cannot create polygon from empty extent");
  const e = t[0],
    n = t[1],
    i = t[2],
    r = t[3],
    s = [e, n, e, r, i, r, i, n, e, n];
  return new yi(s, "XY", [s.length]);
}
const Ot = {
    PRERENDER: "prerender",
    POSTRENDER: "postrender",
    PRECOMPOSE: "precompose",
    POSTCOMPOSE: "postcompose",
    RENDERCOMPLETE: "rendercomplete",
  },
  $ = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 },
  so = {
    name: "rgb",
    min: [0, 0, 0],
    max: [255, 255, 255],
    channel: ["red", "green", "blue"],
    alias: ["RGB"],
  };
var Ge = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
};
Ge.whitepoint = {
  2: {
    A: [109.85, 100, 35.585],
    C: [98.074, 100, 118.232],
    D50: [96.422, 100, 82.521],
    D55: [95.682, 100, 92.149],
    D65: [95.045592705167, 100, 108.9057750759878],
    D75: [94.972, 100, 122.638],
    F2: [99.187, 100, 67.395],
    F7: [95.044, 100, 108.755],
    F11: [100.966, 100, 64.37],
    E: [100, 100, 100],
  },
  10: {
    A: [111.144, 100, 35.2],
    C: [97.285, 100, 116.145],
    D50: [96.72, 100, 81.427],
    D55: [95.799, 100, 90.926],
    D65: [94.811, 100, 107.304],
    D75: [94.416, 100, 120.641],
    F2: [103.28, 100, 69.026],
    F7: [95.792, 100, 107.687],
    F11: [103.866, 100, 65.627],
    E: [100, 100, 100],
  },
};
Ge.max = Ge.whitepoint[2].D65;
Ge.rgb = function (t, e) {
  e = e || Ge.whitepoint[2].E;
  var n = t[0] / e[0],
    i = t[1] / e[1],
    r = t[2] / e[2],
    s,
    o,
    l;
  return (
    (s = n * 3.240969941904521 + i * -1.537383177570093 + r * -0.498610760293),
    (o = n * -0.96924363628087 + i * 1.87596750150772 + r * 0.041555057407175),
    (l = n * 0.055630079696993 + i * -0.20397695888897 + r * 1.056971514242878),
    (s =
      s > 0.0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : (s = s * 12.92)),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (l =
      l > 0.0031308 ? 1.055 * Math.pow(l, 1 / 2.4) - 0.055 : (l = l * 12.92)),
    (s = Math.min(Math.max(0, s), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (l = Math.min(Math.max(0, l), 1)),
    [s * 255, o * 255, l * 255]
  );
};
so.xyz = function (t, e) {
  var n = t[0] / 255,
    i = t[1] / 255,
    r = t[2] / 255;
  (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
    (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
  var s = n * 0.41239079926595 + i * 0.35758433938387 + r * 0.18048078840183,
    o = n * 0.21263900587151 + i * 0.71516867876775 + r * 0.072192315360733,
    l = n * 0.019330818715591 + i * 0.11919477979462 + r * 0.95053215224966;
  return (e = e || Ge.whitepoint[2].E), [s * e[0], o * e[1], l * e[2]];
};
const $h = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (t, e, n) {
    var i, r, s, o, l, a, u, c, h, d, f, p, y;
    if (((s = t[0]), (o = t[1]), (l = t[2]), s === 0)) return [0, 0, 0];
    var E = 0.0011070564598794539;
    return (
      (e = e || "D65"),
      (n = n || 2),
      (h = Ge.whitepoint[n][e][0]),
      (d = Ge.whitepoint[n][e][1]),
      (f = Ge.whitepoint[n][e][2]),
      (p = (4 * h) / (h + 15 * d + 3 * f)),
      (y = (9 * d) / (h + 15 * d + 3 * f)),
      (i = o / (13 * s) + p || 0),
      (r = l / (13 * s) + y || 0),
      (u = s > 8 ? d * Math.pow((s + 16) / 116, 3) : d * s * E),
      (a = (u * 9 * i) / (4 * r) || 0),
      (c = (u * (12 - 3 * i - 20 * r)) / (4 * r) || 0),
      [a, u, c]
    );
  },
};
Ge.luv = function (t, e, n) {
  var i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    p,
    y,
    E = 0.008856451679035631,
    m = 903.2962962962961;
  (e = e || "D65"),
    (n = n || 2),
    (h = Ge.whitepoint[n][e][0]),
    (d = Ge.whitepoint[n][e][1]),
    (f = Ge.whitepoint[n][e][2]),
    (p = (4 * h) / (h + 15 * d + 3 * f)),
    (y = (9 * d) / (h + 15 * d + 3 * f)),
    (a = t[0]),
    (u = t[1]),
    (c = t[2]),
    (i = (4 * a) / (a + 15 * u + 3 * c) || 0),
    (r = (9 * u) / (a + 15 * u + 3 * c) || 0);
  var g = u / d;
  return (
    (s = g <= E ? m * g : 116 * Math.pow(g, 1 / 3) - 16),
    (o = 13 * s * (i - p)),
    (l = 13 * s * (r - y)),
    [s, o, l]
  );
};
var c_ = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (t) {
    var e = t[0],
      n = t[1],
      i = t[2],
      r,
      s,
      o;
    return (
      (o = (i / 360) * 2 * Math.PI),
      (r = n * Math.cos(o)),
      (s = n * Math.sin(o)),
      [e, r, s]
    );
  },
  xyz: function (t) {
    return $h.xyz(c_.luv(t));
  },
};
$h.lchuv = function (t) {
  var e = t[0],
    n = t[1],
    i = t[2],
    r = Math.sqrt(n * n + i * i),
    s = Math.atan2(i, n),
    o = (s * 360) / 2 / Math.PI;
  return o < 0 && (o += 360), [e, r, o];
};
Ge.lchuv = function (t) {
  return $h.lchuv(Ge.luv(t));
};
const Vf = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};
var Kf = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function Lv(t) {
  var c, h;
  var e,
    n = [],
    i = 1,
    r;
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (((t = String(t).toLowerCase()), Vf[t])) (n = Vf[t].slice()), (r = "rgb");
  else if (t === "transparent") (i = 0), (r = "rgb"), (n = [0, 0, 0]);
  else if (t[0] === "#") {
    var s = t.slice(1),
      o = s.length,
      l = o <= 4;
    (i = 1),
      l
        ? ((n = [
            parseInt(s[0] + s[0], 16),
            parseInt(s[1] + s[1], 16),
            parseInt(s[2] + s[2], 16),
          ]),
          o === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
        : ((n = [
            parseInt(s[0] + s[1], 16),
            parseInt(s[2] + s[3], 16),
            parseInt(s[4] + s[5], 16),
          ]),
          o === 8 && (i = parseInt(s[6] + s[7], 16) / 255)),
      n[0] || (n[0] = 0),
      n[1] || (n[1] = 0),
      n[2] || (n[2] = 0),
      (r = "rgb");
  } else if (
    (e =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        t,
      ))
  ) {
    var a = e[1];
    r = a.replace(/a$/, "");
    var u = r === "cmyk" ? 4 : r === "gray" ? 1 : 3;
    (n = e[2].trim().split(/\s*[,\/]\s*|\s+/)),
      r === "color" && (r = n.shift()),
      (n = n.map(function (d, f) {
        if (d[d.length - 1] === "%")
          return (
            (d = parseFloat(d) / 100),
            f === 3
              ? d
              : r === "rgb"
                ? d * 255
                : r[0] === "h" || (r[0] === "l" && !f)
                  ? d * 100
                  : r === "lab"
                    ? d * 125
                    : r === "lch"
                      ? f < 2
                        ? d * 150
                        : d * 360
                      : r[0] === "o" && !f
                        ? d
                        : r === "oklab"
                          ? d * 0.4
                          : r === "oklch"
                            ? f < 2
                              ? d * 0.4
                              : d * 360
                            : d
          );
        if (r[f] === "h" || (f === 2 && r[r.length - 1] === "h")) {
          if (Kf[d] !== void 0) return Kf[d];
          if (d.endsWith("deg")) return parseFloat(d);
          if (d.endsWith("turn")) return parseFloat(d) * 360;
          if (d.endsWith("grad")) return (parseFloat(d) * 360) / 400;
          if (d.endsWith("rad")) return (parseFloat(d) * 180) / Math.PI;
        }
        return d === "none" ? 0 : parseFloat(d);
      })),
      (i = n.length > u ? n.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(t) &&
      ((n = t.match(/([0-9]+)/g).map(function (d) {
        return parseFloat(d);
      })),
      (r =
        ((h = (c = t.match(/([a-z])/gi)) == null ? void 0 : c.join("")) == null
          ? void 0
          : h.toLowerCase()) || "rgb"));
  return { space: r, values: n, alpha: i };
}
const gu = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (t) {
    var e = t[0] / 360,
      n = t[1] / 100,
      i = t[2] / 100,
      r,
      s,
      o,
      l,
      a,
      u = 0;
    if (n === 0) return (a = i * 255), [a, a, a];
    for (
      s = i < 0.5 ? i * (1 + n) : i + n - i * n, r = 2 * i - s, l = [0, 0, 0];
      u < 3;

    )
      (o = e + (1 / 3) * -(u - 1)),
        o < 0 ? o++ : o > 1 && o--,
        (a =
          6 * o < 1
            ? r + (s - r) * 6 * o
            : 2 * o < 1
              ? s
              : 3 * o < 2
                ? r + (s - r) * (2 / 3 - o) * 6
                : r),
        (l[u++] = a * 255);
    return l;
  },
};
so.hsl = function (t) {
  var e = t[0] / 255,
    n = t[1] / 255,
    i = t[2] / 255,
    r = Math.min(e, n, i),
    s = Math.max(e, n, i),
    o = s - r,
    l,
    a,
    u;
  return (
    s === r
      ? (l = 0)
      : e === s
        ? (l = (n - i) / o)
        : n === s
          ? (l = 2 + (i - e) / o)
          : i === s && (l = 4 + (e - n) / o),
    (l = Math.min(l * 60, 360)),
    l < 0 && (l += 360),
    (u = (r + s) / 2),
    s === r ? (a = 0) : u <= 0.5 ? (a = o / (s + r)) : (a = o / (2 - s - r)),
    [l, a * 100, u * 100]
  );
};
function kv(t) {
  Array.isArray(t) && t.raw && (t = String.raw(...arguments)),
    t instanceof Number && (t = +t);
  var e,
    n = Lv(t);
  if (!n.space) return [];
  const i = n.space[0] === "h" ? gu.min : so.min,
    r = n.space[0] === "h" ? gu.max : so.max;
  return (
    (e = Array(3)),
    (e[0] = Math.min(Math.max(n.values[0], i[0]), r[0])),
    (e[1] = Math.min(Math.max(n.values[1], i[1]), r[1])),
    (e[2] = Math.min(Math.max(n.values[2], i[2]), r[2])),
    n.space[0] === "h" && (e = gu.rgb(e)),
    e.push(Math.min(Math.max(n.alpha, 0), 1)),
    e
  );
}
function Mv(t) {
  return typeof t == "string" ? t : Qh(t);
}
const Pv = 1024,
  ms = {};
let pu = 0;
function Av(t) {
  if (t.length === 4) return t;
  const e = t.slice();
  return (e[3] = 1), e;
}
function Zf(t) {
  const e = Ge.lchuv(so.xyz(t));
  return (e[3] = t[3]), e;
}
function Dv(t) {
  const e = Ge.rgb(c_.xyz(t));
  return (e[3] = t[3]), e;
}
function qh(t) {
  if (ms.hasOwnProperty(t)) return ms[t];
  if (pu >= Pv) {
    let n = 0;
    for (const i in ms) n++ & 3 || (delete ms[i], --pu);
  }
  const e = kv(t);
  if (e.length !== 4) throw new Error('Failed to parse "' + t + '" as color');
  for (const n of e)
    if (isNaN(n)) throw new Error('Failed to parse "' + t + '" as color');
  return h_(e), (ms[t] = e), ++pu, e;
}
function oo(t) {
  return Array.isArray(t) ? t : qh(t);
}
function h_(t) {
  return (
    (t[0] = Ie((t[0] + 0.5) | 0, 0, 255)),
    (t[1] = Ie((t[1] + 0.5) | 0, 0, 255)),
    (t[2] = Ie((t[2] + 0.5) | 0, 0, 255)),
    (t[3] = Ie(t[3], 0, 1)),
    t
  );
}
function Qh(t) {
  let e = t[0];
  e != (e | 0) && (e = (e + 0.5) | 0);
  let n = t[1];
  n != (n | 0) && (n = (n + 0.5) | 0);
  let i = t[2];
  i != (i | 0) && (i = (i + 0.5) | 0);
  const r = t[3] === void 0 ? 1 : Math.round(t[3] * 1e3) / 1e3;
  return "rgba(" + e + "," + n + "," + i + "," + r + ")";
}
function Ov(t) {
  try {
    return qh(t), !0;
  } catch {
    return !1;
  }
}
const vi =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  Fv = vi.includes("firefox"),
  Nv = vi.includes("safari") && !vi.includes("chrom");
Nv &&
  (vi.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(vi));
const zv = vi.includes("webkit") && !vi.includes("edge"),
  d_ = vi.includes("macintosh"),
  f_ = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  g_ =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  p_ = typeof Image < "u" && Image.prototype.decode,
  m_ = (function () {
    let t = !1;
    try {
      const e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
      window.addEventListener("_", null, e),
        window.removeEventListener("_", null, e);
    } catch {}
    return t;
  })();
function Xe(t, e, n, i) {
  let r;
  return (
    n && n.length
      ? (r = n.shift())
      : g_
        ? (r = new OffscreenCanvas(t || 300, e || 300))
        : (r = document.createElement("canvas")),
    t && (r.width = t),
    e && (r.height = e),
    r.getContext("2d", i)
  );
}
let mu;
function Pc() {
  return mu || (mu = Xe(1, 1)), mu;
}
function Ta(t) {
  const e = t.canvas;
  (e.width = 1), (e.height = 1), t.clearRect(0, 0, 1, 1);
}
function Hf(t, e) {
  const n = e.parentNode;
  n && n.replaceChild(t, e);
}
function Ac(t) {
  return t && t.parentNode ? t.parentNode.removeChild(t) : null;
}
function Gv(t) {
  for (; t.lastChild; ) t.removeChild(t.lastChild);
}
function Wv(t, e) {
  const n = t.childNodes;
  for (let i = 0; ; ++i) {
    const r = n[i],
      s = e[i];
    if (!r && !s) break;
    if (r !== s) {
      if (!r) {
        t.appendChild(s);
        continue;
      }
      if (!s) {
        t.removeChild(r), --i;
        continue;
      }
      t.insertBefore(s, r);
    }
  }
}
function bv(t, e, n) {
  const i = t;
  let r = !0,
    s = !1,
    o = !1;
  const l = [
    Bl(i, B.LOAD, function () {
      (o = !0), s || e();
    }),
  ];
  return (
    i.src && p_
      ? ((s = !0),
        i
          .decode()
          .then(function () {
            r && e();
          })
          .catch(function (a) {
            r && (o ? e() : n());
          }))
      : l.push(Bl(i, B.ERROR, n)),
    function () {
      (r = !1), l.forEach(pe);
    }
  );
}
function Xv(t, e) {
  return new Promise((n, i) => {
    function r() {
      o(), n(t);
    }
    function s() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      t.removeEventListener("load", r), t.removeEventListener("error", s);
    }
    t.addEventListener("load", r), t.addEventListener("error", s);
  });
}
function jv(t, e) {
  return (
    e && (t.src = e),
    t.src && p_
      ? new Promise((n, i) =>
          t
            .decode()
            .then(() => n(t))
            .catch((r) => (t.complete && t.width ? n(t) : i(r))),
        )
      : Xv(t)
  );
}
class Uv {
  constructor() {
    (this.cache_ = {}),
      (this.patternCache_ = {}),
      (this.cacheSize_ = 0),
      (this.maxCacheSize_ = 32);
  }
  clear() {
    (this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let e = 0;
      for (const n in this.cache_) {
        const i = this.cache_[n];
        !(e++ & 3) &&
          !i.hasListener() &&
          (delete this.cache_[n],
          delete this.patternCache_[n],
          --this.cacheSize_);
      }
    }
  }
  get(e, n, i) {
    const r = _u(e, n, i);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  getPattern(e, n, i) {
    const r = _u(e, n, i);
    return r in this.patternCache_ ? this.patternCache_[r] : null;
  }
  set(e, n, i, r, s) {
    const o = _u(e, n, i),
      l = o in this.cache_;
    (this.cache_[o] = r),
      s &&
        (r.getImageState() === $.IDLE && r.load(),
        r.getImageState() === $.LOADING
          ? r.ready().then(() => {
              this.patternCache_[o] = Pc().createPattern(
                r.getImage(1),
                "repeat",
              );
            })
          : (this.patternCache_[o] = Pc().createPattern(
              r.getImage(1),
              "repeat",
            ))),
      l || ++this.cacheSize_;
  }
  setSize(e) {
    (this.maxCacheSize_ = e), this.expire();
  }
}
function _u(t, e, n) {
  const i = n ? oo(n) : "null";
  return e + ":" + t + ":" + i;
}
const un = new Uv();
let _s = null;
class Yv extends _a {
  constructor(e, n, i, r, s) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = e),
      (this.crossOrigin_ = i),
      (this.canvas_ = {}),
      (this.color_ = s),
      (this.imageState_ = r === void 0 ? $.IDLE : r),
      (this.size_ = e && e.width && e.height ? [e.width, e.height] : null),
      (this.src_ = n),
      this.tainted_,
      (this.ready_ = null);
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === $.LOADED) {
      _s || (_s = Xe(1, 1, void 0, { willReadFrequently: !0 })),
        _s.drawImage(this.image_, 0, 0);
      try {
        _s.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (_s = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(B.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = $.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = $.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(e) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(e),
      this.canvas_[e] ? this.canvas_[e] : this.image_
    );
  }
  getPixelRatio(e) {
    return this.replaceColor_(e), this.canvas_[e] ? e : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const e = this.size_[0],
          n = this.size_[1],
          i = Xe(e, n);
        i.fillRect(0, 0, e, n), (this.hitDetectionImage_ = i.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === $.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = $.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        jv(this.image_, this.src_)
          .then((e) => {
            (this.image_ = e), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(e) {
    if (!this.color_ || this.canvas_[e] || this.imageState_ !== $.LOADED)
      return;
    const n = this.image_,
      i = document.createElement("canvas");
    (i.width = Math.ceil(n.width * e)), (i.height = Math.ceil(n.height * e));
    const r = i.getContext("2d");
    r.scale(e, e),
      r.drawImage(n, 0, 0),
      (r.globalCompositeOperation = "multiply"),
      (r.fillStyle = Mv(this.color_)),
      r.fillRect(0, 0, i.width / e, i.height / e),
      (r.globalCompositeOperation = "destination-in"),
      r.drawImage(n, 0, 0),
      (this.canvas_[e] = i);
  }
  ready() {
    return (
      this.ready_ ||
        (this.ready_ = new Promise((e) => {
          this.imageState_ === $.LOADED || this.imageState_ === $.ERROR
            ? e()
            : this.addEventListener(B.CHANGE, function n() {
                (this.imageState_ === $.LOADED ||
                  this.imageState_ === $.ERROR) &&
                  (this.removeEventListener(B.CHANGE, n), e());
              });
        })),
      this.ready_
    );
  }
}
function Jh(t, e, n, i, r, s) {
  let o = e === void 0 ? void 0 : un.get(e, n, r);
  return (
    o ||
      ((o = new Yv(
        t,
        t instanceof HTMLImageElement ? t.src || void 0 : e,
        n,
        i,
        r,
      )),
      un.set(e, n, r, o, s)),
    s && o && !un.getPattern(e, n, r) && un.set(e, n, r, o, s),
    o
  );
}
class gt {
  constructor(e) {
    (e = e || {}),
      (this.patternImage_ = null),
      (this.color_ = null),
      e.color !== void 0 && this.setColor(e.color);
  }
  clone() {
    const e = this.getColor();
    return new gt({ color: Array.isArray(e) ? e.slice() : e || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(e) {
    if (e !== null && typeof e == "object" && "src" in e) {
      const n = Jh(
        null,
        e.src,
        "anonymous",
        void 0,
        e.offset ? null : e.color ? e.color : null,
        !(e.offset && e.size),
      );
      n.ready().then(() => {
        this.patternImage_ = null;
      }),
        n.getImageState() === $.IDLE && n.load(),
        n.getImageState() === $.LOADING && (this.patternImage_ = n);
    }
    this.color_ = e;
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
function $f(t, e, n, i, r, s, o) {
  let l, a;
  const u = (n - e) / i;
  if (u === 1) l = e;
  else if (u === 2) (l = e), (a = r);
  else if (u !== 0) {
    let c = t[e],
      h = t[e + 1],
      d = 0;
    const f = [0];
    for (let E = e + i; E < n; E += i) {
      const m = t[E],
        g = t[E + 1];
      (d += Math.sqrt((m - c) * (m - c) + (g - h) * (g - h))),
        f.push(d),
        (c = m),
        (h = g);
    }
    const p = r * d,
      y = L1(f, p);
    y < 0
      ? ((a = (p - f[-y - 2]) / (f[-y - 1] - f[-y - 2])),
        (l = e + (-y - 2) * i))
      : (l = e + y * i);
  }
  (o = o > 1 ? o : 2), (s = s || new Array(o));
  for (let c = 0; c < o; ++c)
    s[c] =
      l === void 0
        ? NaN
        : a === void 0
          ? t[l + c]
          : At(t[l + c], t[l + i + c], a);
  return s;
}
function Bv(t, e, n, i) {
  let r = t[e],
    s = t[e + 1],
    o = 0;
  for (let l = e + i; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (o += Math.sqrt((a - r) * (a - r) + (u - s) * (u - s))), (r = a), (s = u);
  }
  return o;
}
class ft {
  constructor(e) {
    (e = e || {}),
      (this.color_ = e.color !== void 0 ? e.color : null),
      (this.lineCap_ = e.lineCap),
      (this.lineDash_ = e.lineDash !== void 0 ? e.lineDash : null),
      (this.lineDashOffset_ = e.lineDashOffset),
      (this.lineJoin_ = e.lineJoin),
      (this.miterLimit_ = e.miterLimit),
      (this.width_ = e.width);
  }
  clone() {
    const e = this.getColor();
    return new ft({
      color: Array.isArray(e) ? e.slice() : e || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(e) {
    this.color_ = e;
  }
  setLineCap(e) {
    this.lineCap_ = e;
  }
  setLineDash(e) {
    this.lineDash_ = e;
  }
  setLineDashOffset(e) {
    this.lineDashOffset_ = e;
  }
  setLineJoin(e) {
    this.lineJoin_ = e;
  }
  setMiterLimit(e) {
    this.miterLimit_ = e;
  }
  setWidth(e) {
    this.width_ = e;
  }
}
function qf(t) {
  return t[0] > 0 && t[1] > 0;
}
function Vv(t, e, n) {
  return (
    n === void 0 && (n = [0, 0]),
    (n[0] = (t[0] * e + 0.5) | 0),
    (n[1] = (t[1] * e + 0.5) | 0),
    n
  );
}
function vt(t, e) {
  return Array.isArray(t)
    ? t
    : (e === void 0 ? (e = [t, t]) : ((e[0] = t), (e[1] = t)), e);
}
class Ra {
  constructor(e) {
    (this.opacity_ = e.opacity),
      (this.rotateWithView_ = e.rotateWithView),
      (this.rotation_ = e.rotation),
      (this.scale_ = e.scale),
      (this.scaleArray_ = vt(e.scale)),
      (this.displacement_ = e.displacement),
      (this.declutterMode_ = e.declutterMode);
  }
  clone() {
    const e = this.getScale();
    return new Ra({
      opacity: this.getOpacity(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return ne();
  }
  getImage(e) {
    return ne();
  }
  getHitDetectionImage() {
    return ne();
  }
  getPixelRatio(e) {
    return 1;
  }
  getImageState() {
    return ne();
  }
  getImageSize() {
    return ne();
  }
  getOrigin() {
    return ne();
  }
  getSize() {
    return ne();
  }
  setDisplacement(e) {
    this.displacement_ = e;
  }
  setOpacity(e) {
    this.opacity_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = vt(e));
  }
  listenImageChange(e) {
    ne();
  }
  load() {
    ne();
  }
  unlistenImageChange(e) {
    ne();
  }
  ready() {
    return Promise.resolve();
  }
}
function cn(t) {
  return t
    ? Array.isArray(t)
      ? Qh(t)
      : typeof t == "object" && "src" in t
        ? Kv(t)
        : t
    : null;
}
function Kv(t) {
  if (!t.offset || !t.size) return un.getPattern(t.src, "anonymous", t.color);
  const e = t.src + ":" + t.offset,
    n = un.getPattern(e, void 0, t.color);
  if (n) return n;
  const i = un.get(t.src, "anonymous", null);
  if (i.getImageState() !== $.LOADED) return null;
  const r = Xe(t.size[0], t.size[1]);
  return (
    r.drawImage(
      i.getImage(1),
      t.offset[0],
      t.offset[1],
      t.size[0],
      t.size[1],
      0,
      0,
      t.size[0],
      t.size[1],
    ),
    Jh(r.canvas, e, void 0, $.LOADED, t.color, !0),
    un.getPattern(e, void 0, t.color)
  );
}
const el = "ol-hidden",
  Ia = "ol-unselectable",
  ed = "ol-control",
  Qf = "ol-collapsed",
  Zv = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  Jf = ["style", "variant", "weight", "size", "lineHeight", "family"],
  __ = function (t) {
    const e = t.match(Zv);
    if (!e) return null;
    const n = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let i = 0, r = Jf.length; i < r; ++i) {
      const s = e[i + 1];
      s !== void 0 && (n[Jf[i]] = s);
    }
    return (n.families = n.family.split(/,\s?/)), n;
  },
  y_ = "10px sans-serif",
  ot = "#000",
  Vr = "round",
  An = [],
  Dn = 0,
  Kr = "round",
  lo = 10,
  ao = "#000",
  uo = "center",
  $l = "middle",
  Ni = [0, 0, 0, 0],
  co = 1,
  Sn = new mn();
let lr = null,
  Dc;
const Oc = {},
  Hv = (function () {
    const e = "32px ",
      n = ["monospace", "serif"],
      i = n.length,
      r = "wmytzilWMYTZIL@#/&?$%10";
    let s, o;
    function l(u, c, h) {
      let d = !0;
      for (let f = 0; f < i; ++f) {
        const p = n[f];
        if (((o = ql(u + " " + c + " " + e + p, r)), h != p)) {
          const y = ql(u + " " + c + " " + e + h + "," + p, r);
          d = d && y != o;
        }
      }
      return !!d;
    }
    function a() {
      let u = !0;
      const c = Sn.getKeys();
      for (let h = 0, d = c.length; h < d; ++h) {
        const f = c[h];
        Sn.get(f) < 100 &&
          (l.apply(
            this,
            f.split(`
`),
          )
            ? (qr(Oc), (lr = null), (Dc = void 0), Sn.set(f, 100))
            : (Sn.set(f, Sn.get(f) + 1, !0), (u = !1)));
      }
      u && (clearInterval(s), (s = void 0));
    }
    return function (u) {
      const c = __(u);
      if (!c) return;
      const h = c.families;
      for (let d = 0, f = h.length; d < f; ++d) {
        const p = h[d],
          y =
            c.style +
            `
` +
            c.weight +
            `
` +
            p;
        Sn.get(y) === void 0 &&
          (Sn.set(y, 100, !0),
          l(c.style, c.weight, p) ||
            (Sn.set(y, 0, !0), s === void 0 && (s = setInterval(a, 32))));
      }
    };
  })(),
  $v = (function () {
    let t;
    return function (e) {
      let n = Oc[e];
      if (n == null) {
        if (g_) {
          const i = __(e),
            r = v_(e, "Žg");
          n =
            (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) *
            (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
        } else
          t ||
            ((t = document.createElement("div")),
            (t.innerHTML = "M"),
            (t.style.minHeight = "0"),
            (t.style.maxHeight = "none"),
            (t.style.height = "auto"),
            (t.style.padding = "0"),
            (t.style.border = "none"),
            (t.style.position = "absolute"),
            (t.style.display = "block"),
            (t.style.left = "-99999px")),
            (t.style.font = e),
            document.body.appendChild(t),
            (n = t.offsetHeight),
            document.body.removeChild(t);
        Oc[e] = n;
      }
      return n;
    };
  })();
function v_(t, e) {
  return (
    lr || (lr = Xe(1, 1)),
    t != Dc && ((lr.font = t), (Dc = lr.font)),
    lr.measureText(e)
  );
}
function ql(t, e) {
  return v_(t, e).width;
}
function eg(t, e, n) {
  if (e in n) return n[e];
  const i = e
    .split(
      `
`,
    )
    .reduce((r, s) => Math.max(r, ql(t, s)), 0);
  return (n[e] = i), i;
}
function qv(t, e) {
  const n = [],
    i = [],
    r = [];
  let s = 0,
    o = 0,
    l = 0,
    a = 0;
  for (let u = 0, c = e.length; u <= c; u += 2) {
    const h = e[u];
    if (
      h ===
        `
` ||
      u === c
    ) {
      (s = Math.max(s, o)), r.push(o), (o = 0), (l += a);
      continue;
    }
    const d = e[u + 1] || t.font,
      f = ql(d, h);
    n.push(f), (o += f);
    const p = $v(d);
    i.push(p), (a = Math.max(a, p));
  }
  return { width: s, height: l, widths: n, heights: i, lineWidths: r };
}
function Qv(t, e, n, i, r, s, o, l, a, u, c) {
  t.save(),
    n !== 1 &&
      (t.globalAlpha === void 0
        ? (t.globalAlpha = (h) => (h.globalAlpha *= n))
        : (t.globalAlpha *= n)),
    e && t.transform.apply(t, e),
    i.contextInstructions
      ? (t.translate(a, u), t.scale(c[0], c[1]), Jv(i, t))
      : c[0] < 0 || c[1] < 0
        ? (t.translate(a, u),
          t.scale(c[0], c[1]),
          t.drawImage(i, r, s, o, l, 0, 0, o, l))
        : t.drawImage(i, r, s, o, l, a, u, o * c[0], l * c[1]),
    t.restore();
}
function Jv(t, e) {
  const n = t.contextInstructions;
  for (let i = 0, r = n.length; i < r; i += 2)
    Array.isArray(n[i + 1]) ? e[n[i]].apply(e, n[i + 1]) : (e[n[i]] = n[i + 1]);
}
class La extends Ra {
  constructor(e) {
    super({
      opacity: 1,
      rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      scale: e.scale !== void 0 ? e.scale : 1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode,
    }),
      this.canvases_,
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = e.points),
      (this.radius_ = e.radius),
      (this.radius2_ = e.radius2),
      (this.angle_ = e.angle !== void 0 ? e.angle : 0),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      this.size_,
      this.renderOptions_,
      (this.imageState_ =
        this.fill_ && this.fill_.loading() ? $.LOADING : $.LOADED),
      this.imageState_ === $.LOADING &&
        this.ready().then(() => (this.imageState_ = $.LOADED)),
      this.render();
  }
  clone() {
    const e = this.getScale(),
      n = new La({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(e) ? e.slice() : e,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  getAnchor() {
    const e = this.size_,
      n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] / 2 - n[0] / i[0], e[1] / 2 + n[1] / i[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    (this.fill_ = e), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(e) {
    let n = this.canvases_[e];
    if (!n) {
      const i = this.renderOptions_,
        r = Xe(i.size * e, i.size * e);
      this.draw_(i, r, e), (n = r.canvas), (this.canvases_[e] = n);
    }
    return n;
  }
  getPixelRatio(e) {
    return e;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return this.imageState_;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius_;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    (this.stroke_ = e), this.render();
  }
  listenImageChange(e) {}
  load() {}
  unlistenImageChange(e) {}
  calculateLineJoinSize_(e, n, i) {
    if (n === 0 || this.points_ === 1 / 0 || (e !== "bevel" && e !== "miter"))
      return n;
    let r = this.radius_,
      s = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < s) {
      const C = r;
      (r = s), (s = C);
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      l = (2 * Math.PI) / o,
      a = s * Math.sin(l),
      u = Math.sqrt(s * s - a * a),
      c = r - u,
      h = Math.sqrt(a * a + c * c),
      d = h / a;
    if (e === "miter" && d <= i) return d * n;
    const f = n / 2 / d,
      p = (n / 2) * (c / h),
      E = Math.sqrt((r + f) * (r + f) + p * p) - r;
    if (this.radius2_ === void 0 || e === "bevel") return E * 2;
    const m = r * Math.sin(l),
      g = Math.sqrt(r * r - m * m),
      _ = s - g,
      w = Math.sqrt(m * m + _ * _) / m;
    if (w <= i) {
      const C = (w * n) / 2 - s - r;
      return 2 * Math.max(E, C);
    }
    return E * 2;
  }
  createRenderOptions() {
    let e = Vr,
      n = Kr,
      i = 0,
      r = null,
      s = 0,
      o,
      l = 0;
    this.stroke_ &&
      ((o = cn(this.stroke_.getColor() ?? ao)),
      (l = this.stroke_.getWidth() ?? co),
      (r = this.stroke_.getLineDash()),
      (s = this.stroke_.getLineDashOffset() ?? 0),
      (n = this.stroke_.getLineJoin() ?? Kr),
      (e = this.stroke_.getLineCap() ?? Vr),
      (i = this.stroke_.getMiterLimit() ?? lo));
    const a = this.calculateLineJoinSize_(n, l, i),
      u = Math.max(this.radius_, this.radius2_ || 0),
      c = Math.ceil(2 * u + a);
    return {
      strokeStyle: o,
      strokeWidth: l,
      size: c,
      lineCap: e,
      lineDash: r,
      lineDashOffset: s,
      lineJoin: n,
      miterLimit: i,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const e = this.renderOptions_.size;
    (this.canvases_ = {}),
      (this.hitDetectionCanvas_ = null),
      (this.size_ = [e, e]);
  }
  draw_(e, n, i) {
    if (
      (n.scale(i, i),
      n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      this.fill_)
    ) {
      let r = this.fill_.getColor();
      r === null && (r = ot), (n.fillStyle = cn(r)), n.fill();
    }
    e.strokeStyle &&
      ((n.strokeStyle = e.strokeStyle),
      (n.lineWidth = e.strokeWidth),
      e.lineDash &&
        (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
      (n.lineCap = e.lineCap),
      (n.lineJoin = e.lineJoin),
      (n.miterLimit = e.miterLimit),
      n.stroke());
  }
  createHitDetectionCanvas_(e) {
    let n;
    if (this.fill_) {
      let i = this.fill_.getColor(),
        r = 0;
      typeof i == "string" && (i = oo(i)),
        i === null
          ? (r = 1)
          : Array.isArray(i) && (r = i.length === 4 ? i[3] : 1),
        r === 0 &&
          ((n = Xe(e.size, e.size)), this.drawHitDetectionCanvas_(e, n));
    }
    return n ? n.canvas : this.getImage(1);
  }
  createPath_(e) {
    let n = this.points_;
    const i = this.radius_;
    if (n === 1 / 0) e.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (n *= 2);
      const s = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / n;
      for (let l = 0; l < n; l++) {
        const a = s + l * o,
          u = l % 2 === 0 ? i : r;
        e.lineTo(u * Math.cos(a), u * Math.sin(a));
      }
      e.closePath();
    }
  }
  drawHitDetectionCanvas_(e, n) {
    n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      (n.fillStyle = ot),
      n.fill(),
      e.strokeStyle &&
        ((n.strokeStyle = e.strokeStyle),
        (n.lineWidth = e.strokeWidth),
        e.lineDash &&
          (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
        (n.lineJoin = e.lineJoin),
        (n.miterLimit = e.miterLimit),
        n.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class Co extends La {
  constructor(e) {
    (e = e || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: e.fill,
        radius: e.radius,
        stroke: e.stroke,
        scale: e.scale !== void 0 ? e.scale : 1,
        rotation: e.rotation !== void 0 ? e.rotation : 0,
        rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
        displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
        declutterMode: e.declutterMode,
      });
  }
  clone() {
    const e = this.getScale(),
      n = new Co({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(e) ? e.slice() : e,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  setRadius(e) {
    (this.radius_ = e), this.render();
  }
}
class Fe {
  constructor(e) {
    (e = e || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = tg),
      e.geometry !== void 0 && this.setGeometry(e.geometry),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.image_ = e.image !== void 0 ? e.image : null),
      (this.renderer_ = e.renderer !== void 0 ? e.renderer : null),
      (this.hitDetectionRenderer_ =
        e.hitDetectionRenderer !== void 0 ? e.hitDetectionRenderer : null),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.text_ = e.text !== void 0 ? e.text : null),
      (this.zIndex_ = e.zIndex);
  }
  clone() {
    let e = this.getGeometry();
    return (
      e && typeof e == "object" && (e = e.clone()),
      new Fe({
        geometry: e ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(e) {
    this.renderer_ = e;
  }
  setHitDetectionRenderer(e) {
    this.hitDetectionRenderer_ = e;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    this.fill_ = e;
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    this.image_ = e;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  getText() {
    return this.text_;
  }
  setText(e) {
    this.text_ = e;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(e) {
    typeof e == "function"
      ? (this.geometryFunction_ = e)
      : typeof e == "string"
        ? (this.geometryFunction_ = function (n) {
            return n.get(e);
          })
        : e
          ? e !== void 0 &&
            (this.geometryFunction_ = function () {
              return e;
            })
          : (this.geometryFunction_ = tg),
      (this.geometry_ = e);
  }
  setZIndex(e) {
    this.zIndex_ = e;
  }
}
function eE(t) {
  let e;
  if (typeof t == "function") e = t;
  else {
    let n;
    Array.isArray(t)
      ? (n = t)
      : (te(
          typeof t.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (n = [t])),
      (e = function () {
        return n;
      });
  }
  return e;
}
let yu = null;
function tE(t, e) {
  if (!yu) {
    const n = new gt({ color: "rgba(255,255,255,0.4)" }),
      i = new ft({ color: "#3399CC", width: 1.25 });
    yu = [
      new Fe({
        image: new Co({ fill: n, stroke: i, radius: 5 }),
        fill: n,
        stroke: i,
      }),
    ];
  }
  return yu;
}
function nE() {
  const t = {},
    e = [255, 255, 255, 1],
    n = [0, 153, 255, 1],
    i = 3;
  return (
    (t.Polygon = [new Fe({ fill: new gt({ color: [255, 255, 255, 0.5] }) })]),
    (t.MultiPolygon = t.Polygon),
    (t.LineString = [
      new Fe({ stroke: new ft({ color: e, width: i + 2 }) }),
      new Fe({ stroke: new ft({ color: n, width: i }) }),
    ]),
    (t.MultiLineString = t.LineString),
    (t.Circle = t.Polygon.concat(t.LineString)),
    (t.Point = [
      new Fe({
        image: new Co({
          radius: i * 2,
          fill: new gt({ color: n }),
          stroke: new ft({ color: e, width: i / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (t.MultiPoint = t.Point),
    (t.GeometryCollection = t.Polygon.concat(t.LineString, t.Point)),
    t
  );
}
function tg(t) {
  return t.getGeometry();
}
const iE = "#333";
class So {
  constructor(e) {
    (e = e || {}),
      (this.font_ = e.font),
      (this.rotation_ = e.rotation),
      (this.rotateWithView_ = e.rotateWithView),
      (this.scale_ = e.scale),
      (this.scaleArray_ = vt(e.scale !== void 0 ? e.scale : 1)),
      (this.text_ = e.text),
      (this.textAlign_ = e.textAlign),
      (this.justify_ = e.justify),
      (this.repeat_ = e.repeat),
      (this.textBaseline_ = e.textBaseline),
      (this.fill_ = e.fill !== void 0 ? e.fill : new gt({ color: iE })),
      (this.maxAngle_ = e.maxAngle !== void 0 ? e.maxAngle : Math.PI / 4),
      (this.placement_ = e.placement !== void 0 ? e.placement : "point"),
      (this.overflow_ = !!e.overflow),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.offsetX_ = e.offsetX !== void 0 ? e.offsetX : 0),
      (this.offsetY_ = e.offsetY !== void 0 ? e.offsetY : 0),
      (this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null),
      (this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null),
      (this.padding_ = e.padding === void 0 ? null : e.padding),
      (this.declutterMode_ = e.declutterMode);
  }
  clone() {
    const e = this.getScale();
    return new So({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  setOverflow(e) {
    this.overflow_ = e;
  }
  setFont(e) {
    this.font_ = e;
  }
  setMaxAngle(e) {
    this.maxAngle_ = e;
  }
  setOffsetX(e) {
    this.offsetX_ = e;
  }
  setOffsetY(e) {
    this.offsetY_ = e;
  }
  setPlacement(e) {
    this.placement_ = e;
  }
  setRepeat(e) {
    this.repeat_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setFill(e) {
    this.fill_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = vt(e !== void 0 ? e : 1));
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  setText(e) {
    this.text_ = e;
  }
  setTextAlign(e) {
    this.textAlign_ = e;
  }
  setJustify(e) {
    this.justify_ = e;
  }
  setTextBaseline(e) {
    this.textBaseline_ = e;
  }
  setBackgroundFill(e) {
    this.backgroundFill_ = e;
  }
  setBackgroundStroke(e) {
    this.backgroundStroke_ = e;
  }
  setPadding(e) {
    this.padding_ = e;
  }
}
const se = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class E_ extends mn {
  constructor(e) {
    super(), this.on, this.once, this.un, (this.background_ = e.background);
    const n = Object.assign({}, e);
    typeof e.properties == "object" &&
      (delete n.properties, Object.assign(n, e.properties)),
      (n[se.OPACITY] = e.opacity !== void 0 ? e.opacity : 1),
      te(typeof n[se.OPACITY] == "number", "Layer opacity must be a number"),
      (n[se.VISIBLE] = e.visible !== void 0 ? e.visible : !0),
      (n[se.Z_INDEX] = e.zIndex),
      (n[se.MAX_RESOLUTION] =
        e.maxResolution !== void 0 ? e.maxResolution : 1 / 0),
      (n[se.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0),
      (n[se.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0),
      (n[se.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0),
      (this.className_ = n.className !== void 0 ? n.className : "ol-layer"),
      delete n.className,
      this.setProperties(n),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(e) {
    const n = this.state_ || { layer: this, managed: e === void 0 ? !0 : e },
      i = this.getZIndex();
    return (
      (n.opacity = Ie(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (n.visible = this.getVisible()),
      (n.extent = this.getExtent()),
      (n.zIndex = i === void 0 && !n.managed ? 1 / 0 : i),
      (n.maxResolution = this.getMaxResolution()),
      (n.minResolution = Math.max(this.getMinResolution(), 0)),
      (n.minZoom = this.getMinZoom()),
      (n.maxZoom = this.getMaxZoom()),
      (this.state_ = n),
      n
    );
  }
  getLayersArray(e) {
    return ne();
  }
  getLayerStatesArray(e) {
    return ne();
  }
  getExtent() {
    return this.get(se.EXTENT);
  }
  getMaxResolution() {
    return this.get(se.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(se.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(se.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(se.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(se.OPACITY);
  }
  getSourceState() {
    return ne();
  }
  getVisible() {
    return this.get(se.VISIBLE);
  }
  getZIndex() {
    return this.get(se.Z_INDEX);
  }
  setBackground(e) {
    (this.background_ = e), this.changed();
  }
  setExtent(e) {
    this.set(se.EXTENT, e);
  }
  setMaxResolution(e) {
    this.set(se.MAX_RESOLUTION, e);
  }
  setMinResolution(e) {
    this.set(se.MIN_RESOLUTION, e);
  }
  setMaxZoom(e) {
    this.set(se.MAX_ZOOM, e);
  }
  setMinZoom(e) {
    this.set(se.MIN_ZOOM, e);
  }
  setOpacity(e) {
    te(typeof e == "number", "Layer opacity must be a number"),
      this.set(se.OPACITY, e);
  }
  setVisible(e) {
    this.set(se.VISIBLE, e);
  }
  setZIndex(e) {
    this.set(se.Z_INDEX, e);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
const Ve = { ANIMATING: 0, INTERACTING: 1 },
  Bt = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" },
  rE = 42,
  td = 256;
function ng(t, e, n) {
  return function (i, r, s, o, l) {
    if (!i) return;
    if (!r && !e) return i;
    const a = e ? 0 : s[0] * r,
      u = e ? 0 : s[1] * r,
      c = l ? l[0] : 0,
      h = l ? l[1] : 0;
    let d = t[0] + a / 2 + c,
      f = t[2] - a / 2 + c,
      p = t[1] + u / 2 + h,
      y = t[3] - u / 2 + h;
    d > f && ((d = (f + d) / 2), (f = d)),
      p > y && ((p = (y + p) / 2), (y = p));
    let E = Ie(i[0], d, f),
      m = Ie(i[1], p, y);
    if (o && n && r) {
      const g = 30 * r;
      (E +=
        -g * Math.log(1 + Math.max(0, d - i[0]) / g) +
        g * Math.log(1 + Math.max(0, i[0] - f) / g)),
        (m +=
          -g * Math.log(1 + Math.max(0, p - i[1]) / g) +
          g * Math.log(1 + Math.max(0, i[1] - y) / g));
    }
    return [E, m];
  };
}
function sE(t) {
  return t;
}
function nd(t, e, n, i) {
  const r = oe(e) / n[0],
    s = Ze(e) / n[1];
  return i ? Math.min(t, Math.max(r, s)) : Math.min(t, Math.min(r, s));
}
function id(t, e, n) {
  let i = Math.min(t, e);
  const r = 50;
  return (
    (i *= Math.log(1 + r * Math.max(0, t / e - 1)) / r + 1),
    n &&
      ((i = Math.max(i, n)),
      (i /= Math.log(1 + r * Math.max(0, n / t - 1)) / r + 1)),
    Ie(i, n / 2, e * 2)
  );
}
function oE(t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, s, o, l) {
      if (r !== void 0) {
        const a = t[0],
          u = t[t.length - 1],
          c = n ? nd(a, n, o, i) : a;
        if (l) return e ? id(r, c, u) : Ie(r, u, c);
        const h = Math.min(c, r),
          d = Math.floor(Fh(t, h, s));
        return t[d] > c && d < t.length - 1 ? t[d + 1] : t[d];
      }
    }
  );
}
function lE(t, e, n, i, r, s) {
  return (
    (i = i !== void 0 ? i : !0),
    (n = n !== void 0 ? n : 0),
    function (o, l, a, u) {
      if (o !== void 0) {
        const c = r ? nd(e, r, a, s) : e;
        if (u) return i ? id(o, c, n) : Ie(o, n, c);
        const h = 1e-9,
          d = Math.ceil(Math.log(e / c) / Math.log(t) - h),
          f = -l * (0.5 - h) + 0.5,
          p = Math.min(c, o),
          y = Math.floor(Math.log(e / p) / Math.log(t) + f),
          E = Math.max(d, y),
          m = e / Math.pow(t, E);
        return Ie(m, n, c);
      }
    }
  );
}
function ig(t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    function (s, o, l, a) {
      if (s !== void 0) {
        const u = i ? nd(t, i, l, r) : t;
        return !n || !a ? Ie(s, e, u) : id(s, u, e);
      }
    }
  );
}
function rd(t) {
  if (t !== void 0) return 0;
}
function rg(t) {
  if (t !== void 0) return t;
}
function aE(t) {
  const e = (2 * Math.PI) / t;
  return function (n, i) {
    if (i) return n;
    if (n !== void 0) return (n = Math.floor(n / e + 0.5) * e), n;
  };
}
function uE(t) {
  const e = El(5);
  return function (n, i) {
    return i || n === void 0 ? n : Math.abs(n) <= e ? 0 : n;
  };
}
function w_(t) {
  return Math.pow(t, 3);
}
function Qr(t) {
  return 1 - w_(1 - t);
}
function cE(t) {
  return 3 * t * t - 2 * t * t * t;
}
function hE(t) {
  return t;
}
const vu = 0;
class ln extends mn {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = Object.assign({}, e)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Uh(e.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      e.projection && Qm(),
      e.center && (e.center = Cn(e.center, this.projection_)),
      e.extent && (e.extent = Oi(e.extent, this.projection_)),
      this.applyOptions_(e);
  }
  applyOptions_(e) {
    const n = Object.assign({}, e);
    for (const l in Bt) delete n[l];
    this.setProperties(n, !0);
    const i = fE(e);
    (this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = e.resolutions),
      (this.padding_ = e.padding),
      (this.minZoom_ = i.minZoom);
    const r = dE(e),
      s = i.constraint,
      o = gE(e);
    (this.constraints_ = { center: r, resolution: s, rotation: o }),
      this.setRotation(e.rotation !== void 0 ? e.rotation : 0),
      this.setCenterInternal(e.center !== void 0 ? e.center : null),
      e.resolution !== void 0
        ? this.setResolution(e.resolution)
        : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let n = this.padding_;
    this.padding_ = e;
    const i = this.getCenterInternal();
    if (i) {
      const r = e || [0, 0, 0, 0];
      n = n || [0, 0, 0, 0];
      const s = this.getResolution(),
        o = (s / 2) * (r[3] - n[3] + n[1] - r[1]),
        l = (s / 2) * (r[0] - n[0] + n[2] - r[2]);
      this.setCenterInternal([i[0] + o, i[1] - l]);
    }
  }
  getUpdatedOptions_(e) {
    const n = this.getProperties();
    return (
      n.resolution !== void 0
        ? (n.resolution = this.getResolution())
        : (n.zoom = this.getZoom()),
      (n.center = this.getCenterInternal()),
      (n.rotation = this.getRotation()),
      Object.assign({}, n, e)
    );
  }
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const n = new Array(arguments.length);
    for (let i = 0; i < n.length; ++i) {
      let r = arguments[i];
      r.center &&
        ((r = Object.assign({}, r)),
        (r.center = Cn(r.center, this.getProjection()))),
        r.anchor &&
          ((r = Object.assign({}, r)),
          (r.anchor = Cn(r.anchor, this.getProjection()))),
        (n[i] = r);
    }
    this.animateInternal.apply(this, n);
  }
  animateInternal(e) {
    let n = arguments.length,
      i;
    n > 1 &&
      typeof arguments[n - 1] == "function" &&
      ((i = arguments[n - 1]), --n);
    let r = 0;
    for (; r < n && !this.isDef(); ++r) {
      const c = arguments[r];
      c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0
          ? this.setZoom(c.zoom)
          : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (r === n) {
      i && tl(i, !0);
      return;
    }
    let s = Date.now(),
      o = this.targetCenter_.slice(),
      l = this.targetResolution_,
      a = this.targetRotation_;
    const u = [];
    for (; r < n; ++r) {
      const c = arguments[r],
        h = {
          start: s,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || cE,
          callback: i,
        };
      if (
        (c.center &&
          ((h.sourceCenter = o),
          (h.targetCenter = c.center.slice()),
          (o = h.targetCenter)),
        c.zoom !== void 0
          ? ((h.sourceResolution = l),
            (h.targetResolution = this.getResolutionForZoom(c.zoom)),
            (l = h.targetResolution))
          : c.resolution &&
            ((h.sourceResolution = l),
            (h.targetResolution = c.resolution),
            (l = h.targetResolution)),
        c.rotation !== void 0)
      ) {
        h.sourceRotation = a;
        const d = bi(c.rotation - a + Math.PI, 2 * Math.PI) - Math.PI;
        (h.targetRotation = a + d), (a = h.targetRotation);
      }
      pE(h) ? (h.complete = !0) : (s += h.duration), u.push(h);
    }
    this.animations_.push(u),
      this.setHint(Ve.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[Ve.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[Ve.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(Ve.ANIMATING, -this.hints_[Ve.ANIMATING]);
    let e;
    for (let n = 0, i = this.animations_.length; n < i; ++n) {
      const r = this.animations_[n];
      if ((r[0].callback && tl(r[0].callback, !1), !e))
        for (let s = 0, o = r.length; s < o; ++s) {
          const l = r[s];
          if (!l.complete) {
            e = l.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = e),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const e = Date.now();
    let n = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const r = this.animations_[i];
      let s = !0;
      for (let o = 0, l = r.length; o < l; ++o) {
        const a = r[o];
        if (a.complete) continue;
        const u = e - a.start;
        let c = a.duration > 0 ? u / a.duration : 1;
        c >= 1 ? ((a.complete = !0), (c = 1)) : (s = !1);
        const h = a.easing(c);
        if (a.sourceCenter) {
          const d = a.sourceCenter[0],
            f = a.sourceCenter[1],
            p = a.targetCenter[0],
            y = a.targetCenter[1];
          this.nextCenter_ = a.targetCenter;
          const E = d + h * (p - d),
            m = f + h * (y - f);
          this.targetCenter_ = [E, m];
        }
        if (a.sourceResolution && a.targetResolution) {
          const d =
            h === 1
              ? a.targetResolution
              : a.sourceResolution +
                h * (a.targetResolution - a.sourceResolution);
          if (a.anchor) {
            const f = this.getViewportSize_(this.getRotation()),
              p = this.constraints_.resolution(d, 0, f, !0);
            this.targetCenter_ = this.calculateCenterZoom(p, a.anchor);
          }
          (this.nextResolution_ = a.targetResolution),
            (this.targetResolution_ = d),
            this.applyTargetState_(!0);
        }
        if (a.sourceRotation !== void 0 && a.targetRotation !== void 0) {
          const d =
            h === 1
              ? bi(a.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : a.sourceRotation + h * (a.targetRotation - a.sourceRotation);
          if (a.anchor) {
            const f = this.constraints_.rotation(d, !0);
            this.targetCenter_ = this.calculateCenterRotate(f, a.anchor);
          }
          (this.nextRotation_ = a.targetRotation), (this.targetRotation_ = d);
        }
        if ((this.applyTargetState_(!0), (n = !0), !a.complete)) break;
      }
      if (s) {
        (this.animations_[i] = null),
          this.setHint(Ve.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const o = r[0].callback;
        o && tl(o, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      n &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(e, n) {
    let i;
    const r = this.getCenterInternal();
    return (
      r !== void 0 &&
        ((i = [r[0] - n[0], r[1] - n[1]]),
        Xh(i, e - this.getRotation()),
        ev(i, n)),
      i
    );
  }
  calculateCenterZoom(e, n) {
    let i;
    const r = this.getCenterInternal(),
      s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = n[0] - (e * (n[0] - r[0])) / s,
        l = n[1] - (e * (n[1] - r[1])) / s;
      i = [o, l];
    }
    return i;
  }
  getViewportSize_(e) {
    const n = this.viewportSize_;
    if (e) {
      const i = n[0],
        r = n[1];
      return [
        Math.abs(i * Math.cos(e)) + Math.abs(r * Math.sin(e)),
        Math.abs(i * Math.sin(e)) + Math.abs(r * Math.cos(e)),
      ];
    }
    return n;
  }
  setViewportSize(e) {
    (this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const e = this.getCenterInternal();
    return e && Mc(e, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Bt.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(e) {
    return e !== void 0
      ? ((e[0] = this.hints_[0]), (e[1] = this.hints_[1]), e)
      : this.hints_.slice();
  }
  calculateExtent(e) {
    const n = this.calculateExtentInternal(e);
    return e_(n, this.getProjection());
  }
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const n = this.getCenterInternal();
    te(n, "The view center is not defined");
    const i = this.getResolution();
    te(i !== void 0, "The view resolution is not defined");
    const r = this.getRotation();
    return te(r !== void 0, "The view rotation is not defined"), Rc(n, i, r, e);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(Bt.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(e, n) {
    return this.getResolutionForExtentInternal(Oi(e, this.getProjection()), n);
  }
  getResolutionForExtentInternal(e, n) {
    n = n || this.getViewportSizeMinusPadding_();
    const i = oe(e) / n[0],
      r = Ze(e) / n[1];
    return Math.max(i, r);
  }
  getResolutionForValueFunction(e) {
    e = e || 2;
    const n = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      r = Math.log(n / i) / Math.log(e);
    return function (s) {
      return n / Math.pow(e, s * r);
    };
  }
  getRotation() {
    return this.get(Bt.ROTATION);
  }
  getValueForResolutionFunction(e) {
    const n = Math.log(e || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      r = this.minResolution_,
      s = Math.log(i / r) / n;
    return function (o) {
      return Math.log(i / o) / n / s;
    };
  }
  getViewportSizeMinusPadding_(e) {
    let n = this.getViewportSize_(e);
    const i = this.padding_;
    return i && (n = [n[0] - i[1] - i[3], n[1] - i[0] - i[2]]), n;
  }
  getState() {
    const e = this.getProjection(),
      n = this.getResolution(),
      i = this.getRotation();
    let r = this.getCenterInternal();
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = Eu(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        n,
        i,
      );
    }
    return {
      center: r.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: n,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let e;
    const n = this.getResolution();
    return n !== void 0 && (e = this.getZoomForResolution(n)), e;
  }
  getZoomForResolution(e) {
    let n = this.minZoom_ || 0,
      i,
      r;
    if (this.resolutions_) {
      const s = Fh(this.resolutions_, e, 1);
      (n = s),
        (i = this.resolutions_[s]),
        s == this.resolutions_.length - 1
          ? (r = 2)
          : (r = i / this.resolutions_[s + 1]);
    } else (i = this.maxResolution_), (r = this.zoomFactor_);
    return n + Math.log(i / e) / Math.log(r);
  }
  getResolutionForZoom(e) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0;
      const n = Ie(Math.floor(e), 0, this.resolutions_.length - 2),
        i = this.resolutions_[n] / this.resolutions_[n + 1];
      return this.resolutions_[n] / Math.pow(i, Ie(e - n, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  fit(e, n) {
    let i;
    if (
      (te(
        Array.isArray(e) || typeof e.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(e))
    ) {
      te(!xa(e), "Cannot fit empty extent provided as `geometry`");
      const r = Oi(e, this.getProjection());
      i = Bf(r);
    } else if (e.getType() === "Circle") {
      const r = Oi(e.getExtent(), this.getProjection());
      (i = Bf(r)), i.rotate(this.getRotation(), Ki(r));
    } else i = e;
    this.fitInternal(i, n);
  }
  rotatedExtentForGeometry(e) {
    const n = this.getRotation(),
      i = Math.cos(n),
      r = Math.sin(-n),
      s = e.getFlatCoordinates(),
      o = e.getStride();
    let l = 1 / 0,
      a = 1 / 0,
      u = -1 / 0,
      c = -1 / 0;
    for (let h = 0, d = s.length; h < d; h += o) {
      const f = s[h] * i - s[h + 1] * r,
        p = s[h] * r + s[h + 1] * i;
      (l = Math.min(l, f)),
        (a = Math.min(a, p)),
        (u = Math.max(u, f)),
        (c = Math.max(c, p));
    }
    return [l, a, u, c];
  }
  fitInternal(e, n) {
    n = n || {};
    let i = n.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const r = n.padding !== void 0 ? n.padding : [0, 0, 0, 0],
      s = n.nearest !== void 0 ? n.nearest : !1;
    let o;
    n.minResolution !== void 0
      ? (o = n.minResolution)
      : n.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(n.maxZoom))
        : (o = 0);
    const l = this.rotatedExtentForGeometry(e);
    let a = this.getResolutionForExtentInternal(l, [
      i[0] - r[1] - r[3],
      i[1] - r[0] - r[2],
    ]);
    (a = isNaN(a) ? o : Math.max(a, o)),
      (a = this.getConstrainedResolution(a, s ? 0 : 1));
    const u = this.getRotation(),
      c = Math.sin(u),
      h = Math.cos(u),
      d = Ki(l);
    (d[0] += ((r[1] - r[3]) / 2) * a), (d[1] += ((r[0] - r[2]) / 2) * a);
    const f = d[0] * h - d[1] * c,
      p = d[1] * h + d[0] * c,
      y = this.getConstrainedCenter([f, p], a),
      E = n.callback ? n.callback : Ur;
    n.duration !== void 0
      ? this.animateInternal(
          { resolution: a, center: y, duration: n.duration, easing: n.easing },
          E,
        )
      : ((this.targetResolution_ = a),
        (this.targetCenter_ = y),
        this.applyTargetState_(!1, !0),
        tl(E, !0));
  }
  centerOn(e, n, i) {
    this.centerOnInternal(Cn(e, this.getProjection()), n, i);
  }
  centerOnInternal(e, n, i) {
    this.setCenterInternal(
      Eu(e, n, i, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(e, n, i, r) {
    let s;
    const o = this.padding_;
    if (o && e) {
      const l = this.getViewportSizeMinusPadding_(-i),
        a = Eu(e, r, [l[0] / 2 + o[3], l[1] / 2 + o[0]], n, i);
      s = [e[0] - a[0], e[1] - a[1]];
    }
    return s;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(e) {
    const n = Mc(this.targetCenter_, this.getProjection());
    this.setCenter([n[0] + e[0], n[1] + e[1]]);
  }
  adjustCenterInternal(e) {
    const n = this.targetCenter_;
    this.setCenterInternal([n[0] + e[0], n[1] + e[1]]);
  }
  adjustResolution(e, n) {
    (n = n && Cn(n, this.getProjection())), this.adjustResolutionInternal(e, n);
  }
  adjustResolutionInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.getViewportSize_(this.getRotation()),
      s = this.constraints_.resolution(this.targetResolution_ * e, 0, r, i);
    n && (this.targetCenter_ = this.calculateCenterZoom(s, n)),
      (this.targetResolution_ *= e),
      this.applyTargetState_();
  }
  adjustZoom(e, n) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), n);
  }
  adjustRotation(e, n) {
    n && (n = Cn(n, this.getProjection())), this.adjustRotationInternal(e, n);
  }
  adjustRotationInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.constraints_.rotation(this.targetRotation_ + e, i);
    n && (this.targetCenter_ = this.calculateCenterRotate(r, n)),
      (this.targetRotation_ += e),
      this.applyTargetState_();
  }
  setCenter(e) {
    this.setCenterInternal(e && Cn(e, this.getProjection()));
  }
  setCenterInternal(e) {
    (this.targetCenter_ = e), this.applyTargetState_();
  }
  setHint(e, n) {
    return (this.hints_[e] += n), this.changed(), this.hints_[e];
  }
  setResolution(e) {
    (this.targetResolution_ = e), this.applyTargetState_();
  }
  setRotation(e) {
    (this.targetRotation_ = e), this.applyTargetState_();
  }
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  applyTargetState_(e, n) {
    const i = this.getAnimating() || this.getInteracting() || n,
      r = this.constraints_.rotation(this.targetRotation_, i),
      s = this.getViewportSize_(r),
      o = this.constraints_.resolution(this.targetResolution_, 0, s, i),
      l = this.constraints_.center(
        this.targetCenter_,
        o,
        s,
        i,
        this.calculateCenterShift(this.targetCenter_, o, r, s),
      );
    this.get(Bt.ROTATION) !== r && this.set(Bt.ROTATION, r),
      this.get(Bt.RESOLUTION) !== o &&
        (this.set(Bt.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)),
      (!l || !this.get(Bt.CENTER) || !Kl(this.get(Bt.CENTER), l)) &&
        this.set(Bt.CENTER, l),
      this.getAnimating() && !e && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(e, n, i) {
    e = e !== void 0 ? e : 200;
    const r = n || 0,
      s = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(s),
      l = this.constraints_.resolution(this.targetResolution_, r, o),
      a = this.constraints_.center(
        this.targetCenter_,
        l,
        o,
        !1,
        this.calculateCenterShift(this.targetCenter_, l, s, o),
      );
    if (e === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = l),
        (this.targetRotation_ = s),
        (this.targetCenter_ = a),
        this.applyTargetState_();
      return;
    }
    (i = i || (e === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== l ||
        this.getRotation() !== s ||
        !this.getCenterInternal() ||
        !Kl(this.getCenterInternal(), a)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: s,
          center: a,
          resolution: l,
          duration: e,
          easing: Qr,
          anchor: i,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Ve.INTERACTING, 1);
  }
  endInteraction(e, n, i) {
    (i = i && Cn(i, this.getProjection())),
      this.endInteractionInternal(e, n, i);
  }
  endInteractionInternal(e, n, i) {
    this.getInteracting() &&
      (this.setHint(Ve.INTERACTING, -1), this.resolveConstraints(e, n, i));
  }
  getConstrainedCenter(e, n) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(e, n || this.getResolution(), i);
  }
  getConstrainedZoom(e, n) {
    const i = this.getResolutionForZoom(e);
    return this.getZoomForResolution(this.getConstrainedResolution(i, n));
  }
  getConstrainedResolution(e, n) {
    n = n || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, n, i);
  }
}
function tl(t, e) {
  setTimeout(function () {
    t(e);
  }, 0);
}
function dE(t) {
  if (t.extent !== void 0) {
    const n =
      t.smoothExtentConstraint !== void 0 ? t.smoothExtentConstraint : !0;
    return ng(t.extent, t.constrainOnlyCenter, n);
  }
  const e = Uh(t.projection, "EPSG:3857");
  if (t.multiWorld !== !0 && e.isGlobal()) {
    const n = e.getExtent().slice();
    return (n[0] = -1 / 0), (n[2] = 1 / 0), ng(n, !1, !1);
  }
  return sE;
}
function fE(t) {
  let e,
    n,
    i,
    o = t.minZoom !== void 0 ? t.minZoom : vu,
    l = t.maxZoom !== void 0 ? t.maxZoom : 28;
  const a = t.zoomFactor !== void 0 ? t.zoomFactor : 2,
    u = t.multiWorld !== void 0 ? t.multiWorld : !1,
    c =
      t.smoothResolutionConstraint !== void 0
        ? t.smoothResolutionConstraint
        : !0,
    h = t.showFullExtent !== void 0 ? t.showFullExtent : !1,
    d = Uh(t.projection, "EPSG:3857"),
    f = d.getExtent();
  let p = t.constrainOnlyCenter,
    y = t.extent;
  if (
    (!u && !y && d.isGlobal() && ((p = !1), (y = f)), t.resolutions !== void 0)
  ) {
    const E = t.resolutions;
    (n = E[o]),
      (i = E[l] !== void 0 ? E[l] : E[E.length - 1]),
      t.constrainResolution
        ? (e = oE(E, c, !p && y, h))
        : (e = ig(n, i, c, !p && y, h));
  } else {
    const m =
        (f
          ? Math.max(oe(f), Ze(f))
          : (360 * Wh.degrees) / d.getMetersPerUnit()) /
        td /
        Math.pow(2, vu),
      g = m / Math.pow(2, 28 - vu);
    (n = t.maxResolution),
      n !== void 0 ? (o = 0) : (n = m / Math.pow(a, o)),
      (i = t.minResolution),
      i === void 0 &&
        (t.maxZoom !== void 0
          ? t.maxResolution !== void 0
            ? (i = n / Math.pow(a, l))
            : (i = m / Math.pow(a, l))
          : (i = g)),
      (l = o + Math.floor(Math.log(n / i) / Math.log(a))),
      (i = n / Math.pow(a, l - o)),
      t.constrainResolution
        ? (e = lE(a, n, i, c, !p && y, h))
        : (e = ig(n, i, c, !p && y, h));
  }
  return {
    constraint: e,
    maxResolution: n,
    minResolution: i,
    minZoom: o,
    zoomFactor: a,
  };
}
function gE(t) {
  if (t.enableRotation !== void 0 ? t.enableRotation : !0) {
    const n = t.constrainRotation;
    return n === void 0 || n === !0
      ? uE()
      : n === !1
        ? rg
        : typeof n == "number"
          ? aE(n)
          : rg;
  }
  return rd;
}
function pE(t) {
  return !(
    (t.sourceCenter && t.targetCenter && !Kl(t.sourceCenter, t.targetCenter)) ||
    t.sourceResolution !== t.targetResolution ||
    t.sourceRotation !== t.targetRotation
  );
}
function Eu(t, e, n, i, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r),
    l = t[0] * s - t[1] * o,
    a = t[1] * s + t[0] * o;
  (l += (e[0] / 2 - n[0]) * i), (a += (n[1] - e[1] / 2) * i), (o = -o);
  const u = l * s - a * o,
    c = a * s + l * o;
  return [u, c];
}
class mE extends E_ {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.source,
      super(n),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      e.render && (this.render = e.render),
      e.map && this.setMap(e.map),
      this.addChangeListener(se.SOURCE, this.handleSourcePropertyChange_);
    const i = e.source ? e.source : null;
    this.setSource(i);
  }
  getLayersArray(e) {
    return (e = e || []), e.push(this), e;
  }
  getLayerStatesArray(e) {
    return (e = e || []), e.push(this.getLayerState()), e;
  }
  getSource() {
    return this.get(se.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (pe(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const e = this.getSource();
    e &&
      ((this.sourceChangeKey_ = ie(
        e,
        B.CHANGE,
        this.handleSourceChange_,
        this,
      )),
      e.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0))),
      this.changed();
  }
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  isVisible(e) {
    let n;
    const i = this.getMapInternal();
    !e && i && (e = i.getView()),
      e instanceof ln
        ? (n = { viewState: e.getState(), extent: e.calculateExtent() })
        : (n = e),
      !n.layerStatesArray &&
        i &&
        (n.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let r;
    n.layerStatesArray
      ? (r = n.layerStatesArray.find((o) => o.layer === this))
      : (r = this.getLayerState());
    const s = this.getExtent();
    return sd(r, n.viewState) && (!s || lt(s, n.extent));
  }
  getAttributions(e) {
    if (!this.isVisible(e)) return [];
    let n;
    const i = this.getSource();
    if ((i && (n = i.getAttributions()), !n)) return [];
    const r = e instanceof ln ? e.getViewStateAndExtent() : e;
    let s = n(r);
    return Array.isArray(s) || (s = [s]), s;
  }
  render(e, n) {
    const i = this.getRenderer();
    return i.prepareFrame(e)
      ? ((this.rendered = !0), i.renderFrame(e, n))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  getDeclutter() {}
  renderDeclutter(e, n) {}
  renderDeferred(e) {
    const n = this.getRenderer();
    n && n.renderDeferred(e);
  }
  setMapInternal(e) {
    e || this.unrender(), this.set(se.MAP, e);
  }
  getMapInternal() {
    return this.get(se.MAP);
  }
  setMap(e) {
    this.mapPrecomposeKey_ &&
      (pe(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      e || this.changed(),
      this.mapRenderKey_ &&
        (pe(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      e &&
        ((this.mapPrecomposeKey_ = ie(
          e,
          Ot.PRECOMPOSE,
          function (n) {
            const r = n.frameState.layerStatesArray,
              s = this.getLayerState(!1);
            te(
              !r.some(function (o) {
                return o.layer === s.layer;
              }),
              "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
            ),
              r.push(s);
          },
          this,
        )),
        (this.mapRenderKey_ = ie(this, B.CHANGE, e.render, e)),
        this.changed());
  }
  setSource(e) {
    this.set(se.SOURCE, e);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_),
      this.setSource(null),
      super.disposeInternal();
  }
}
function sd(t, e) {
  if (!t.visible) return !1;
  const n = e.resolution;
  if (n < t.minResolution || n >= t.maxResolution) return !1;
  const i = e.zoom;
  return i > t.minZoom && i <= t.maxZoom;
}
const ka = mE;
function _E(t, e, n, i, r) {
  x_(t, e, n || 0, i || t.length - 1, r || yE);
}
function x_(t, e, n, i, r) {
  for (; i > n; ) {
    if (i - n > 600) {
      var s = i - n + 1,
        o = e - n + 1,
        l = Math.log(s),
        a = 0.5 * Math.exp((2 * l) / 3),
        u = 0.5 * Math.sqrt((l * a * (s - a)) / s) * (o - s / 2 < 0 ? -1 : 1),
        c = Math.max(n, Math.floor(e - (o * a) / s + u)),
        h = Math.min(i, Math.floor(e + ((s - o) * a) / s + u));
      x_(t, e, c, h, r);
    }
    var d = t[e],
      f = n,
      p = i;
    for (ys(t, n, e), r(t[i], d) > 0 && ys(t, n, i); f < p; ) {
      for (ys(t, f, p), f++, p--; r(t[f], d) < 0; ) f++;
      for (; r(t[p], d) > 0; ) p--;
    }
    r(t[n], d) === 0 ? ys(t, n, p) : (p++, ys(t, p, i)),
      p <= e && (n = p + 1),
      e <= p && (i = p - 1);
  }
}
function ys(t, e, n) {
  var i = t[e];
  (t[e] = t[n]), (t[n] = i);
}
function yE(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
let C_ = class {
  constructor(e = 9) {
    (this._maxEntries = Math.max(4, e)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let n = this.data;
    const i = [];
    if (!il(e, n)) return i;
    const r = this.toBBox,
      s = [];
    for (; n; ) {
      for (let o = 0; o < n.children.length; o++) {
        const l = n.children[o],
          a = n.leaf ? r(l) : l;
        il(e, a) &&
          (n.leaf ? i.push(l) : xu(e, a) ? this._all(l, i) : s.push(l));
      }
      n = s.pop();
    }
    return i;
  }
  collides(e) {
    let n = this.data;
    if (!il(e, n)) return !1;
    const i = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const s = n.children[r],
          o = n.leaf ? this.toBBox(s) : s;
        if (il(e, o)) {
          if (n.leaf || xu(e, o)) return !0;
          i.push(s);
        }
      }
      n = i.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let i = 0; i < e.length; i++) this.insert(e[i]);
      return this;
    }
    let n = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length) this.data = n;
    else if (this.data.height === n.height) this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const i = this.data;
        (this.data = n), (n = i);
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return (this.data = ar([])), this;
  }
  remove(e, n) {
    if (!e) return this;
    let i = this.data;
    const r = this.toBBox(e),
      s = [],
      o = [];
    let l, a, u;
    for (; i || s.length; ) {
      if (
        (i || ((i = s.pop()), (a = s[s.length - 1]), (l = o.pop()), (u = !0)),
        i.leaf)
      ) {
        const c = vE(e, i.children, n);
        if (c !== -1)
          return i.children.splice(c, 1), s.push(i), this._condense(s), this;
      }
      !u && !i.leaf && xu(i, r)
        ? (s.push(i), o.push(l), (l = 0), (a = i), (i = i.children[0]))
        : a
          ? (l++, (i = a.children[l]), (u = !1))
          : (i = null);
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, n) {
    return e.minX - n.minX;
  }
  compareMinY(e, n) {
    return e.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return (this.data = e), this;
  }
  _all(e, n) {
    const i = [];
    for (; e; )
      e.leaf ? n.push(...e.children) : i.push(...e.children), (e = i.pop());
    return n;
  }
  _build(e, n, i, r) {
    const s = i - n + 1;
    let o = this._maxEntries,
      l;
    if (s <= o) return (l = ar(e.slice(n, i + 1))), nr(l, this.toBBox), l;
    r ||
      ((r = Math.ceil(Math.log(s) / Math.log(o))),
      (o = Math.ceil(s / Math.pow(o, r - 1)))),
      (l = ar([])),
      (l.leaf = !1),
      (l.height = r);
    const a = Math.ceil(s / o),
      u = a * Math.ceil(Math.sqrt(o));
    sg(e, n, i, u, this.compareMinX);
    for (let c = n; c <= i; c += u) {
      const h = Math.min(c + u - 1, i);
      sg(e, c, h, a, this.compareMinY);
      for (let d = c; d <= h; d += a) {
        const f = Math.min(d + a - 1, h);
        l.children.push(this._build(e, d, f, r - 1));
      }
    }
    return nr(l, this.toBBox), l;
  }
  _chooseSubtree(e, n, i, r) {
    for (; r.push(n), !(n.leaf || r.length - 1 === i); ) {
      let s = 1 / 0,
        o = 1 / 0,
        l;
      for (let a = 0; a < n.children.length; a++) {
        const u = n.children[a],
          c = wu(u),
          h = xE(e, u) - c;
        h < o
          ? ((o = h), (s = c < s ? c : s), (l = u))
          : h === o && c < s && ((s = c), (l = u));
      }
      n = l || n.children[0];
    }
    return n;
  }
  _insert(e, n, i) {
    const r = i ? e : this.toBBox(e),
      s = [],
      o = this._chooseSubtree(r, this.data, n, s);
    for (
      o.children.push(e), Ts(o, r);
      n >= 0 && s[n].children.length > this._maxEntries;

    )
      this._split(s, n), n--;
    this._adjustParentBBoxes(r, s, n);
  }
  _split(e, n) {
    const i = e[n],
      r = i.children.length,
      s = this._minEntries;
    this._chooseSplitAxis(i, s, r);
    const o = this._chooseSplitIndex(i, s, r),
      l = ar(i.children.splice(o, i.children.length - o));
    (l.height = i.height),
      (l.leaf = i.leaf),
      nr(i, this.toBBox),
      nr(l, this.toBBox),
      n ? e[n - 1].children.push(l) : this._splitRoot(i, l);
  }
  _splitRoot(e, n) {
    (this.data = ar([e, n])),
      (this.data.height = e.height + 1),
      (this.data.leaf = !1),
      nr(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, n, i) {
    let r,
      s = 1 / 0,
      o = 1 / 0;
    for (let l = n; l <= i - n; l++) {
      const a = Ss(e, 0, l, this.toBBox),
        u = Ss(e, l, i, this.toBBox),
        c = CE(a, u),
        h = wu(a) + wu(u);
      c < s
        ? ((s = c), (r = l), (o = h < o ? h : o))
        : c === s && h < o && ((o = h), (r = l));
    }
    return r || i - n;
  }
  _chooseSplitAxis(e, n, i) {
    const r = e.leaf ? this.compareMinX : EE,
      s = e.leaf ? this.compareMinY : wE,
      o = this._allDistMargin(e, n, i, r),
      l = this._allDistMargin(e, n, i, s);
    o < l && e.children.sort(r);
  }
  _allDistMargin(e, n, i, r) {
    e.children.sort(r);
    const s = this.toBBox,
      o = Ss(e, 0, n, s),
      l = Ss(e, i - n, i, s);
    let a = nl(o) + nl(l);
    for (let u = n; u < i - n; u++) {
      const c = e.children[u];
      Ts(o, e.leaf ? s(c) : c), (a += nl(o));
    }
    for (let u = i - n - 1; u >= n; u--) {
      const c = e.children[u];
      Ts(l, e.leaf ? s(c) : c), (a += nl(l));
    }
    return a;
  }
  _adjustParentBBoxes(e, n, i) {
    for (let r = i; r >= 0; r--) Ts(n[r], e);
  }
  _condense(e) {
    for (let n = e.length - 1, i; n >= 0; n--)
      e[n].children.length === 0
        ? n > 0
          ? ((i = e[n - 1].children), i.splice(i.indexOf(e[n]), 1))
          : this.clear()
        : nr(e[n], this.toBBox);
  }
};
function vE(t, e, n) {
  if (!n) return e.indexOf(t);
  for (let i = 0; i < e.length; i++) if (n(t, e[i])) return i;
  return -1;
}
function nr(t, e) {
  Ss(t, 0, t.children.length, e, t);
}
function Ss(t, e, n, i, r) {
  r || (r = ar(null)),
    (r.minX = 1 / 0),
    (r.minY = 1 / 0),
    (r.maxX = -1 / 0),
    (r.maxY = -1 / 0);
  for (let s = e; s < n; s++) {
    const o = t.children[s];
    Ts(r, t.leaf ? i(o) : o);
  }
  return r;
}
function Ts(t, e) {
  return (
    (t.minX = Math.min(t.minX, e.minX)),
    (t.minY = Math.min(t.minY, e.minY)),
    (t.maxX = Math.max(t.maxX, e.maxX)),
    (t.maxY = Math.max(t.maxY, e.maxY)),
    t
  );
}
function EE(t, e) {
  return t.minX - e.minX;
}
function wE(t, e) {
  return t.minY - e.minY;
}
function wu(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function nl(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function xE(t, e) {
  return (
    (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) *
    (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY))
  );
}
function CE(t, e) {
  const n = Math.max(t.minX, e.minX),
    i = Math.max(t.minY, e.minY),
    r = Math.min(t.maxX, e.maxX),
    s = Math.min(t.maxY, e.maxY);
  return Math.max(0, r - n) * Math.max(0, s - i);
}
function xu(t, e) {
  return (
    t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
  );
}
function il(t, e) {
  return (
    e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
  );
}
function ar(t) {
  return {
    children: t,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function sg(t, e, n, i, r) {
  const s = [e, n];
  for (; s.length; ) {
    if (((n = s.pop()), (e = s.pop()), n - e <= i)) continue;
    const o = e + Math.ceil((n - e) / i / 2) * i;
    _E(t, o, e, n, r), s.push(e, o, o, n);
  }
}
function og(t, e, n, i) {
  return n !== void 0 && i !== void 0
    ? [n / t, i / e]
    : n !== void 0
      ? n / t
      : i !== void 0
        ? i / e
        : 1;
}
class Jr extends Ra {
  constructor(e) {
    e = e || {};
    const n = e.opacity !== void 0 ? e.opacity : 1,
      i = e.rotation !== void 0 ? e.rotation : 0,
      r = e.scale !== void 0 ? e.scale : 1,
      s = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: n,
      rotation: i,
      scale: r,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      rotateWithView: s,
      declutterMode: e.declutterMode,
    }),
      (this.anchor_ = e.anchor !== void 0 ? e.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        e.anchorOrigin !== void 0 ? e.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        e.anchorXUnits !== void 0 ? e.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        e.anchorYUnits !== void 0 ? e.anchorYUnits : "fraction"),
      (this.crossOrigin_ = e.crossOrigin !== void 0 ? e.crossOrigin : null);
    const o = e.img !== void 0 ? e.img : null;
    let l = e.src;
    te(
      !(l !== void 0 && o),
      "`image` and `src` cannot be provided at the same time",
    ),
      (l === void 0 || l.length === 0) && o && (l = o.src || Q(o)),
      te(
        l !== void 0 && l.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      te(
        !((e.width !== void 0 || e.height !== void 0) && e.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let a;
    if (
      (e.src !== void 0
        ? (a = $.IDLE)
        : o !== void 0 &&
          (o instanceof HTMLImageElement
            ? o.complete
              ? (a = o.src ? $.LOADED : $.IDLE)
              : (a = $.LOADING)
            : (a = $.LOADED)),
      (this.color_ = e.color !== void 0 ? oo(e.color) : null),
      (this.iconImage_ = Jh(o, l, this.crossOrigin_, a, this.color_)),
      (this.offset_ = e.offset !== void 0 ? e.offset : [0, 0]),
      (this.offsetOrigin_ =
        e.offsetOrigin !== void 0 ? e.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = e.size !== void 0 ? e.size : null),
      e.width !== void 0 || e.height !== void 0)
    ) {
      let u, c;
      if (e.size) [u, c] = e.size;
      else {
        const h = this.getImage(1);
        if (h.width && h.height) (u = h.width), (c = h.height);
        else if (h instanceof HTMLImageElement) {
          this.initialOptions_ = e;
          const d = () => {
            if ((this.unlistenImageChange(d), !this.initialOptions_)) return;
            const f = this.iconImage_.getSize();
            this.setScale(og(f[0], f[1], e.width, e.height));
          };
          this.listenImageChange(d);
          return;
        }
      }
      u !== void 0 && this.setScale(og(u, c, e.width, e.height));
    }
  }
  clone() {
    let e, n, i;
    return (
      this.initialOptions_
        ? ((n = this.initialOptions_.width), (i = this.initialOptions_.height))
        : ((e = this.getScale()), (e = Array.isArray(e) ? e.slice() : e)),
      new Jr({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: e,
        width: n,
        height: i,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let e = this.normalizedAnchor_;
    if (!e) {
      e = this.anchor_;
      const r = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!r) return null;
        (e = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (e[0] *= r[0]),
          this.anchorYUnits_ == "fraction" && (e[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r) return null;
        e === this.anchor_ && (e = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[0] = -e[0] + r[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[1] = -e[1] + r[1]);
      }
      this.normalizedAnchor_ = e;
    }
    const n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] - n[0] / i[0], e[1] + n[1] / i[1]];
  }
  setAnchor(e) {
    (this.anchor_ = e), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(e) {
    return this.iconImage_.getImage(e);
  }
  getPixelRatio(e) {
    return this.iconImage_.getPixelRatio(e);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let e = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const n = this.getSize(),
        i = this.iconImage_.getSize();
      if (!n || !i) return null;
      (e = e.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[0] = i[0] - n[0] - e[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[1] = i[1] - n[1] - e[1]);
    }
    return (this.origin_ = e), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[0] * e[0];
    if (this.iconImage_.getImageState() == $.LOADED)
      return this.iconImage_.getSize()[0] * e[0];
  }
  getHeight() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[1] * e[1];
    if (this.iconImage_.getImageState() == $.LOADED)
      return this.iconImage_.getSize()[1] * e[1];
  }
  setScale(e) {
    delete this.initialOptions_, super.setScale(e);
  }
  listenImageChange(e) {
    this.iconImage_.addEventListener(B.CHANGE, e);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(e) {
    this.iconImage_.removeEventListener(B.CHANGE, e);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
let es = 0;
const ts = 0,
  we = 1 << es++,
  N = 1 << es++,
  _t = 1 << es++,
  De = 1 << es++,
  Gn = 1 << es++,
  Ye = Math.pow(2, es) - 1,
  S_ = {
    [we]: "boolean",
    [N]: "number",
    [_t]: "string",
    [De]: "color",
    [Gn]: "number[]",
  },
  SE = Object.keys(S_).map(Number).sort(Pn);
function He(t) {
  const e = [];
  for (const n of SE) TE(t, n) && e.push(S_[n]);
  return e.length === 0
    ? "untyped"
    : e.length < 3
      ? e.join(" or ")
      : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function TE(t, e) {
  return (t & e) === e;
}
function fn(t, e) {
  return !!(t & e);
}
function Ma(t, e) {
  return t === e;
}
class ii {
  constructor(e, n) {
    (this.type = e), (this.value = n);
  }
}
class RE {
  constructor(e, n, ...i) {
    (this.type = e), (this.operator = n), (this.args = i);
  }
}
function T_() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    geometryType: !1,
    style: {},
  };
}
function IE(t) {
  switch (t) {
    case "string":
      return _t;
    case "color":
      return De;
    case "number":
      return N;
    case "boolean":
      return we;
    case "number[]":
      return Gn;
    default:
      throw new Error(`Unrecognized type hint: ${t}`);
  }
}
function re(t, e, n) {
  switch (typeof t) {
    case "boolean":
      return new ii(we, t);
    case "number":
      return new ii(N, t);
    case "string": {
      let r = _t;
      return Ov(t) && (r |= De), Ma(r & n, ts) || (r &= n), new ii(r, t);
    }
  }
  if (!Array.isArray(t))
    throw new Error("Expression must be an array or a primitive value");
  if (t.length === 0) throw new Error("Empty expression");
  if (typeof t[0] == "string") return WE(t, e, n);
  for (const r of t)
    if (typeof r != "number") throw new Error("Expected an array of numbers");
  let i = Gn;
  return (
    (t.length === 3 || t.length === 4) && (i |= De), n && (i &= n), new ii(i, t)
  );
}
const T = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
  },
  LE = {
    [T.Get]: U(([t, e]) => (e !== void 0 ? IE(e.value) : Ye), H(1, 2), kE),
    [T.Var]: U(([t]) => t.type, H(1, 1), ME),
    [T.Id]: U(N | _t, vs, PE),
    [T.Concat]: U(_t, H(2, 1 / 0), J(Ye)),
    [T.GeometryType]: U(_t, vs, AE),
    [T.Resolution]: U(N, vs),
    [T.Zoom]: U(N, vs),
    [T.Time]: U(N, vs),
    [T.Any]: U(we, H(2, 1 / 0), J(we)),
    [T.All]: U(we, H(2, 1 / 0), J(we)),
    [T.Not]: U(we, H(1, 1), J(we)),
    [T.Equal]: U(we, H(2, 2), J(Ye), Un),
    [T.NotEqual]: U(we, H(2, 2), J(Ye), Un),
    [T.GreaterThan]: U(we, H(2, 2), J(Ye), Un),
    [T.GreaterThanOrEqualTo]: U(we, H(2, 2), J(Ye), Un),
    [T.LessThan]: U(we, H(2, 2), J(Ye), Un),
    [T.LessThanOrEqualTo]: U(we, H(2, 2), J(Ye), Un),
    [T.Multiply]: U(
      (t) => {
        let e = N | De;
        for (let n = 0; n < t.length; n++) e &= t[n].type;
        return e;
      },
      H(2, 1 / 0),
      J(N | De),
      Un,
    ),
    [T.Coalesce]: U(
      (t) => {
        let e = Ye;
        for (let n = 1; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      H(2, 1 / 0),
      J(Ye),
      Un,
    ),
    [T.Divide]: U(N, H(2, 2), J(N)),
    [T.Add]: U(N, H(2, 1 / 0), J(N)),
    [T.Subtract]: U(N, H(2, 2), J(N)),
    [T.Clamp]: U(N, H(3, 3), J(N)),
    [T.Mod]: U(N, H(2, 2), J(N)),
    [T.Pow]: U(N, H(2, 2), J(N)),
    [T.Abs]: U(N, H(1, 1), J(N)),
    [T.Floor]: U(N, H(1, 1), J(N)),
    [T.Ceil]: U(N, H(1, 1), J(N)),
    [T.Round]: U(N, H(1, 1), J(N)),
    [T.Sin]: U(N, H(1, 1), J(N)),
    [T.Cos]: U(N, H(1, 1), J(N)),
    [T.Atan]: U(N, H(1, 2), J(N)),
    [T.Sqrt]: U(N, H(1, 1), J(N)),
    [T.Match]: U(
      (t) => {
        let e = Ye;
        for (let n = 2; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      H(4, 1 / 0),
      lg,
      OE,
    ),
    [T.Between]: U(we, H(3, 3), J(N)),
    [T.Interpolate]: U(
      (t) => {
        let e = De | N;
        for (let n = 3; n < t.length; n += 2) e &= t[n].type;
        return e;
      },
      H(6, 1 / 0),
      lg,
      FE,
    ),
    [T.Case]: U(
      (t) => {
        let e = Ye;
        for (let n = 1; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      H(3, 1 / 0),
      DE,
      NE,
    ),
    [T.In]: U(we, H(2, 2), zE),
    [T.Number]: U(N, H(1, 1 / 0), J(Ye)),
    [T.String]: U(_t, H(1, 1 / 0), J(Ye)),
    [T.Array]: U(
      (t) => (t.length === 3 || t.length === 4 ? Gn | De : Gn),
      H(1, 1 / 0),
      J(N),
    ),
    [T.Color]: U(De, H(1, 4), J(N)),
    [T.Band]: U(N, H(1, 3), J(N)),
    [T.Palette]: U(De, H(2, 2), GE),
    [T.ToString]: U(_t, H(1, 1), J(we | N | _t | De)),
  };
function kE(t, e) {
  const n = re(t[1], e);
  if (!(n instanceof ii))
    throw new Error("Expected a literal argument for get operation");
  if (typeof n.value != "string")
    throw new Error("Expected a string argument for get operation");
  if ((e.properties.add(n.value), t.length === 3)) {
    const i = re(t[2], e);
    return [n, i];
  }
  return [n];
}
function ME(t, e, n, i) {
  const r = t[1];
  if (typeof r != "string")
    throw new Error("Expected a string argument for var operation");
  if (
    (e.variables.add(r),
    !("variables" in e.style) || e.style.variables[r] === void 0)
  )
    return [new ii(Ye, r)];
  const s = e.style.variables[r],
    o = re(s, e);
  if (((o.value = r), i && !fn(i, o.type)))
    throw new Error(
      `The variable ${r} has type ${He(o.type)} but the following type was expected: ${He(i)}`,
    );
  return [o];
}
function PE(t, e) {
  e.featureId = !0;
}
function AE(t, e) {
  e.geometryType = !0;
}
function vs(t, e) {
  const n = t[0];
  if (t.length !== 1)
    throw new Error(`Expected no arguments for ${n} operation`);
  return [];
}
function H(t, e) {
  return function (n, i) {
    const r = n[0],
      s = n.length - 1;
    if (t === e) {
      if (s !== t) {
        const o = t === 1 ? "" : "s";
        throw new Error(`Expected ${t} argument${o} for ${r}, got ${s}`);
      }
    } else if (s < t || s > e) {
      const o = e === 1 / 0 ? `${t} or more` : `${t} to ${e}`;
      throw new Error(`Expected ${o} arguments for ${r}, got ${s}`);
    }
  };
}
function J(t) {
  return function (e, n) {
    const i = e[0],
      r = e.length - 1,
      s = new Array(r);
    for (let o = 0; o < r; ++o) {
      const l = re(e[o + 1], n);
      if (!fn(t, l.type)) {
        const a = He(t),
          u = He(l.type);
        throw new Error(
          `Unexpected type for argument ${o} of ${i} operation, got ${a} but expected ${u}`,
        );
      }
      (l.type &= t), (s[o] = l);
    }
    return s;
  };
}
function Un(t, e, n) {
  const i = t[0],
    r = t.length - 1;
  let s = Ye;
  for (let l = 0; l < n.length; ++l) s &= n[l].type;
  if (s === ts)
    throw new Error(
      `No common type could be found for arguments of ${i} operation`,
    );
  const o = new Array(r);
  for (let l = 0; l < r; ++l) o[l] = re(t[l + 1], e, s);
  return o;
}
function DE(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 0)
    throw new Error(
      `An odd amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function lg(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 1)
    throw new Error(
      `An even amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function OE(t, e, n, i) {
  const r = t.length - 1;
  let o = re(t[1], e).type;
  const l = re(t[t.length - 1], e);
  let a = i !== void 0 ? i & l.type : l.type;
  const u = new Array(r - 2);
  for (let h = 0; h < r - 2; h += 2) {
    const d = re(t[h + 2], e),
      f = re(t[h + 3], e);
    (o &= d.type), (a &= f.type), (u[h] = d), (u[h + 1] = f);
  }
  const c = _t | N | we;
  if (!fn(c, o))
    throw new Error(
      `Expected an input of type ${He(c)} for the interpolate operation, got ${He(o)} instead`,
    );
  if (Ma(a, ts))
    throw new Error(
      "Could not find a common output type for the following match operation: " +
        JSON.stringify(t),
    );
  for (let h = 0; h < r - 2; h += 2) {
    const d = re(t[h + 2], e, o),
      f = re(t[h + 3], e, a);
    (u[h] = d), (u[h + 1] = f);
  }
  return [re(t[1], e, o), ...u, re(t[t.length - 1], e, a)];
}
function FE(t, e, n, i) {
  const r = t[1];
  let s;
  switch (r[0]) {
    case "linear":
      s = 1;
      break;
    case "exponential":
      if (((s = r[1]), typeof s != "number"))
        throw new Error(
          `Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`,
        );
      break;
    default:
      s = null;
  }
  if (!s) throw new Error(`Invalid interpolation type: ${JSON.stringify(r)}`);
  s = re(s, e);
  let o = re(t[2], e);
  if (!fn(N, o.type))
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${He(o.type)} instead`,
    );
  o = re(t[2], e, N);
  const l = new Array(t.length - 3);
  for (let a = 0; a < l.length; a += 2) {
    let u = re(t[a + 3], e);
    if (!fn(N, u.type))
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${He(u.type)} at position ${a + 2} instead`,
      );
    let c = re(t[a + 4], e);
    if (!fn(N | De, c.type))
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${He(c.type)} at position ${a + 3} instead`,
      );
    (u = re(t[a + 3], e, N)),
      (c = re(t[a + 4], e, N | De)),
      (l[a] = u),
      (l[a + 1] = c);
  }
  return [s, o, ...l];
}
function NE(t, e, n, i) {
  const r = re(t[t.length - 1], e);
  let s = i !== void 0 ? i & r.type : r.type;
  const o = new Array(t.length - 1);
  for (let l = 0; l < o.length - 1; l += 2) {
    const a = re(t[l + 1], e),
      u = re(t[l + 2], e);
    if (!fn(we, a.type))
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${He(a.type)} at position ${l} instead`,
      );
    (s &= u.type), (o[l] = a), (o[l + 1] = u);
  }
  if (Ma(s, ts))
    throw new Error(
      "Could not find a common output type for the following case operation: " +
        JSON.stringify(t),
    );
  for (let l = 0; l < o.length - 1; l += 2) o[l + 1] = re(t[l + 2], e, s);
  return (o[o.length - 1] = re(t[t.length - 1], e, s)), o;
}
function zE(t, e) {
  let n = t[2];
  if (!Array.isArray(n))
    throw new Error(
      'The "in" operator was provided a literal value which was not an array as second argument.',
    );
  if (typeof n[0] == "string") {
    if (n[0] !== "literal")
      throw new Error(
        'For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.',
      );
    if (!Array.isArray(n[1]))
      throw new Error(
        'The "in" operator was provided a literal value which was not an array as second argument.',
      );
    n = n[1];
  }
  let i = _t | N;
  const r = new Array(n.length);
  for (let o = 0; o < r.length; o++) {
    const l = re(n[o], e);
    (i &= l.type), (r[o] = l);
  }
  if (Ma(i, ts))
    throw new Error(
      "Could not find a common type for the following in operation: " +
        JSON.stringify(t),
    );
  return [re(t[1], e, i), ...r];
}
function GE(t, e) {
  const n = re(t[1], e, N);
  if (n.type !== N)
    throw new Error(
      `The first argument of palette must be an number, got ${He(n.type)} instead`,
    );
  const i = t[2];
  if (!Array.isArray(i))
    throw new Error("The second argument of palette must be an array");
  const r = new Array(i.length);
  for (let s = 0; s < r.length; s++) {
    const o = re(i[s], e, De);
    if (!(o instanceof ii))
      throw new Error(
        `The palette color at index ${s} must be a literal value`,
      );
    if (!fn(o.type, De))
      throw new Error(
        `The palette color at index ${s} should be of type color, got ${He(o.type)} instead`,
      );
    r[s] = o;
  }
  return [n, ...r];
}
function U(t, ...e) {
  return function (n, i, r) {
    const s = n[0];
    let o = [];
    for (let a = 0; a < e.length; a++) o = e[a](n, i, o, r) || o;
    let l = typeof t == "function" ? t(o) : t;
    if (r !== void 0) {
      if (!fn(l, r))
        throw new Error(
          `The following expression was expected to return ${He(r)}, but returns ${He(l)} instead: ${JSON.stringify(n)}`,
        );
      l &= r;
    }
    if (l === ts)
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(n)}`,
      );
    return new RE(l, s, ...o);
  };
}
function WE(t, e, n) {
  const i = t[0],
    r = LE[i];
  if (!r) throw new Error(`Unknown operator: ${i}`);
  return r(t, e, n);
}
function R_(t) {
  if (!t) return "";
  const e = t.getType();
  switch (e) {
    case "Point":
    case "LineString":
    case "Polygon":
      return e;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return e.substring(5);
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return R_(t.getGeometries()[0]);
    default:
      return "";
  }
}
function I_() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: "",
  };
}
function bn(t, e, n) {
  const i = re(t, n);
  if (!fn(e, i.type)) {
    const r = He(e),
      s = He(i.type);
    throw new Error(`Expected expression to be of type ${r}, got ${s}`);
  }
  return en(i);
}
function en(t, e) {
  if (t instanceof ii) {
    if (t.type === De && typeof t.value == "string") {
      const i = qh(t.value);
      return function () {
        return i;
      };
    }
    return function () {
      return t.value;
    };
  }
  const n = t.operator;
  switch (n) {
    case T.Number:
    case T.String:
    case T.Coalesce:
      return bE(t);
    case T.Get:
    case T.Var:
      return XE(t);
    case T.Id:
      return (i) => i.featureId;
    case T.GeometryType:
      return (i) => i.geometryType;
    case T.Concat: {
      const i = t.args.map((r) => en(r));
      return (r) => "".concat(...i.map((s) => s(r).toString()));
    }
    case T.Resolution:
      return (i) => i.resolution;
    case T.Any:
    case T.All:
    case T.Between:
    case T.In:
    case T.Not:
      return UE(t);
    case T.Equal:
    case T.NotEqual:
    case T.LessThan:
    case T.LessThanOrEqualTo:
    case T.GreaterThan:
    case T.GreaterThanOrEqualTo:
      return jE(t);
    case T.Multiply:
    case T.Divide:
    case T.Add:
    case T.Subtract:
    case T.Clamp:
    case T.Mod:
    case T.Pow:
    case T.Abs:
    case T.Floor:
    case T.Ceil:
    case T.Round:
    case T.Sin:
    case T.Cos:
    case T.Atan:
    case T.Sqrt:
      return YE(t);
    case T.Case:
      return BE(t);
    case T.Match:
      return VE(t);
    case T.Interpolate:
      return KE(t);
    case T.ToString:
      return ZE(t);
    default:
      throw new Error(`Unsupported operator ${n}`);
  }
}
function bE(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = en(t.args[s]);
  switch (n) {
    case T.Coalesce:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const l = r[o](s);
          if (typeof l < "u" && l !== null) return l;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case T.Number:
    case T.String:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const l = r[o](s);
          if (typeof l === n) return l;
        }
        throw new Error(`Expected one of the values to be a ${n}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${n}`);
  }
}
function XE(t, e) {
  const i = t.args[0].value;
  switch (t.operator) {
    case T.Get:
      return (r) => r.properties[i];
    case T.Var:
      return (r) => r.variables[i];
    default:
      throw new Error(`Unsupported accessor operator ${t.operator}`);
  }
}
function jE(t, e) {
  const n = t.operator,
    i = en(t.args[0]),
    r = en(t.args[1]);
  switch (n) {
    case T.Equal:
      return (s) => i(s) === r(s);
    case T.NotEqual:
      return (s) => i(s) !== r(s);
    case T.LessThan:
      return (s) => i(s) < r(s);
    case T.LessThanOrEqualTo:
      return (s) => i(s) <= r(s);
    case T.GreaterThan:
      return (s) => i(s) > r(s);
    case T.GreaterThanOrEqualTo:
      return (s) => i(s) >= r(s);
    default:
      throw new Error(`Unsupported comparison operator ${n}`);
  }
}
function UE(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = en(t.args[s]);
  switch (n) {
    case T.Any:
      return (s) => {
        for (let o = 0; o < i; ++o) if (r[o](s)) return !0;
        return !1;
      };
    case T.All:
      return (s) => {
        for (let o = 0; o < i; ++o) if (!r[o](s)) return !1;
        return !0;
      };
    case T.Between:
      return (s) => {
        const o = r[0](s),
          l = r[1](s),
          a = r[2](s);
        return o >= l && o <= a;
      };
    case T.In:
      return (s) => {
        const o = r[0](s);
        for (let l = 1; l < i; ++l) if (o === r[l](s)) return !0;
        return !1;
      };
    case T.Not:
      return (s) => !r[0](s);
    default:
      throw new Error(`Unsupported logical operator ${n}`);
  }
}
function YE(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = en(t.args[s]);
  switch (n) {
    case T.Multiply:
      return (s) => {
        let o = 1;
        for (let l = 0; l < i; ++l) o *= r[l](s);
        return o;
      };
    case T.Divide:
      return (s) => r[0](s) / r[1](s);
    case T.Add:
      return (s) => {
        let o = 0;
        for (let l = 0; l < i; ++l) o += r[l](s);
        return o;
      };
    case T.Subtract:
      return (s) => r[0](s) - r[1](s);
    case T.Clamp:
      return (s) => {
        const o = r[0](s),
          l = r[1](s);
        if (o < l) return l;
        const a = r[2](s);
        return o > a ? a : o;
      };
    case T.Mod:
      return (s) => r[0](s) % r[1](s);
    case T.Pow:
      return (s) => Math.pow(r[0](s), r[1](s));
    case T.Abs:
      return (s) => Math.abs(r[0](s));
    case T.Floor:
      return (s) => Math.floor(r[0](s));
    case T.Ceil:
      return (s) => Math.ceil(r[0](s));
    case T.Round:
      return (s) => Math.round(r[0](s));
    case T.Sin:
      return (s) => Math.sin(r[0](s));
    case T.Cos:
      return (s) => Math.cos(r[0](s));
    case T.Atan:
      return i === 2
        ? (s) => Math.atan2(r[0](s), r[1](s))
        : (s) => Math.atan(r[0](s));
    case T.Sqrt:
      return (s) => Math.sqrt(r[0](s));
    default:
      throw new Error(`Unsupported numeric operator ${n}`);
  }
}
function BE(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = en(t.args[r]);
  return (r) => {
    for (let s = 0; s < n - 1; s += 2) if (i[s](r)) return i[s + 1](r);
    return i[n - 1](r);
  };
}
function VE(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = en(t.args[r]);
  return (r) => {
    const s = i[0](r);
    for (let o = 1; o < n; o += 2) if (s === i[o](r)) return i[o + 1](r);
    return i[n - 1](r);
  };
}
function KE(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = en(t.args[r]);
  return (r) => {
    const s = i[0](r),
      o = i[1](r);
    let l, a;
    for (let u = 2; u < n; u += 2) {
      const c = i[u](r);
      let h = i[u + 1](r);
      const d = Array.isArray(h);
      if ((d && (h = Av(h)), c >= o))
        return u === 2 ? h : d ? HE(s, o, l, a, c, h) : Rs(s, o, l, a, c, h);
      (l = c), (a = h);
    }
    return a;
  };
}
function ZE(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = en(t.args[s]);
  switch (n) {
    case T.ToString:
      return (s) => {
        const o = r[0](s);
        return t.args[0].type === De ? Qh(o) : o.toString();
      };
    default:
      throw new Error(`Unsupported convert operator ${n}`);
  }
}
function Rs(t, e, n, i, r, s) {
  const o = r - n;
  if (o === 0) return i;
  const l = e - n,
    a = t === 1 ? l / o : (Math.pow(t, l) - 1) / (Math.pow(t, o) - 1);
  return i + a * (s - i);
}
function HE(t, e, n, i, r, s) {
  if (r - n === 0) return i;
  const l = Zf(i),
    a = Zf(s);
  let u = a[2] - l[2];
  u > 180 ? (u -= 360) : u < -180 && (u += 360);
  const c = [
    Rs(t, e, n, l[0], r, a[0]),
    Rs(t, e, n, l[1], r, a[1]),
    l[2] + Rs(t, e, n, 0, r, u),
    Rs(t, e, n, i[3], r, s[3]),
  ];
  return h_(Dv(c));
}
function $E(t) {
  return !0;
}
function qE(t) {
  const e = T_(),
    n = QE(t, e),
    i = I_();
  return function (r, s) {
    if (
      ((i.properties = r.getPropertiesInternal()),
      (i.resolution = s),
      e.featureId)
    ) {
      const o = r.getId();
      o !== void 0 ? (i.featureId = o) : (i.featureId = null);
    }
    return e.geometryType && (i.geometryType = R_(r.getGeometry())), n(i);
  };
}
function ag(t) {
  const e = T_(),
    n = t.length,
    i = new Array(n);
  for (let o = 0; o < n; ++o) i[o] = Fc(t[o], e);
  const r = I_(),
    s = new Array(n);
  return function (o, l) {
    if (
      ((r.properties = o.getPropertiesInternal()),
      (r.resolution = l),
      e.featureId)
    ) {
      const u = o.getId();
      u !== void 0 ? (r.featureId = u) : (r.featureId = null);
    }
    let a = 0;
    for (let u = 0; u < n; ++u) {
      const c = i[u](r);
      c && ((s[a] = c), (a += 1));
    }
    return (s.length = a), s;
  };
}
function QE(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) {
    const s = t[r],
      o = "filter" in s ? bn(s.filter, we, e) : $E;
    let l;
    if (Array.isArray(s.style)) {
      const a = s.style.length;
      l = new Array(a);
      for (let u = 0; u < a; ++u) l[u] = Fc(s.style[u], e);
    } else l = [Fc(s.style, e)];
    i[r] = { filter: o, styles: l };
  }
  return function (r) {
    const s = [];
    let o = !1;
    for (let l = 0; l < n; ++l) {
      const a = i[l].filter;
      if (a(r) && !(t[l].else && o)) {
        o = !0;
        for (const u of i[l].styles) {
          const c = u(r);
          c && s.push(c);
        }
      }
    }
    return s;
  };
}
function Fc(t, e) {
  const n = ho(t, "", e),
    i = fo(t, "", e),
    r = JE(t, e),
    s = ew(t, e),
    o = at(t, "z-index", e);
  if (!n && !i && !r && !s && !Yr(t))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(t),
    );
  const l = new Fe();
  return function (a) {
    let u = !0;
    if (n) {
      const c = n(a);
      c && (u = !1), l.setFill(c);
    }
    if (i) {
      const c = i(a);
      c && (u = !1), l.setStroke(c);
    }
    if (r) {
      const c = r(a);
      c && (u = !1), l.setText(c);
    }
    if (s) {
      const c = s(a);
      c && (u = !1), l.setImage(c);
    }
    return o && l.setZIndex(o(a)), u ? null : l;
  };
}
function ho(t, e, n) {
  let i;
  if (
    (e + "fill-pattern-src" in t
      ? (i = rw(t, e + "fill-", n))
      : (i = od(t, e + "fill-color", n)),
    !i)
  )
    return null;
  const r = new gt();
  return function (s) {
    const o = i(s);
    return o === "none" ? null : (r.setColor(o), r);
  };
}
function fo(t, e, n) {
  const i = at(t, e + "stroke-width", n),
    r = od(t, e + "stroke-color", n);
  if (!i && !r) return null;
  const s = In(t, e + "stroke-line-cap", n),
    o = In(t, e + "stroke-line-join", n),
    l = L_(t, e + "stroke-line-dash", n),
    a = at(t, e + "stroke-line-dash-offset", n),
    u = at(t, e + "stroke-miter-limit", n),
    c = new ft();
  return function (h) {
    if (r) {
      const d = r(h);
      if (d === "none") return null;
      c.setColor(d);
    }
    if ((i && c.setWidth(i(h)), s)) {
      const d = s(h);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      c.setLineCap(d);
    }
    if (o) {
      const d = o(h);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      c.setLineJoin(d);
    }
    return (
      l && c.setLineDash(l(h)),
      a && c.setLineDashOffset(a(h)),
      u && c.setMiterLimit(u(h)),
      c
    );
  };
}
function JE(t, e) {
  const n = "text-",
    i = In(t, n + "value", e);
  if (!i) return null;
  const r = ho(t, n, e),
    s = ho(t, n + "background-", e),
    o = fo(t, n, e),
    l = fo(t, n + "background-", e),
    a = In(t, n + "font", e),
    u = at(t, n + "max-angle", e),
    c = at(t, n + "offset-x", e),
    h = at(t, n + "offset-y", e),
    d = go(t, n + "overflow", e),
    f = In(t, n + "placement", e),
    p = at(t, n + "repeat", e),
    y = Pa(t, n + "scale", e),
    E = go(t, n + "rotate-with-view", e),
    m = at(t, n + "rotation", e),
    g = In(t, n + "align", e),
    _ = In(t, n + "justify", e),
    v = In(t, n + "baseline", e),
    w = L_(t, n + "padding", e),
    C = Aa(t, n + "declutter-mode"),
    S = new So({ declutterMode: C });
  return function (x) {
    if (
      (S.setText(i(x)),
      r && S.setFill(r(x)),
      s && S.setBackgroundFill(s(x)),
      o && S.setStroke(o(x)),
      l && S.setBackgroundStroke(l(x)),
      a && S.setFont(a(x)),
      u && S.setMaxAngle(u(x)),
      c && S.setOffsetX(c(x)),
      h && S.setOffsetY(h(x)),
      d && S.setOverflow(d(x)),
      f)
    ) {
      const R = f(x);
      if (R !== "point" && R !== "line")
        throw new Error("Expected point or line for text-placement");
      S.setPlacement(R);
    }
    if (
      (p && S.setRepeat(p(x)),
      y && S.setScale(y(x)),
      E && S.setRotateWithView(E(x)),
      m && S.setRotation(m(x)),
      g)
    ) {
      const R = g(x);
      if (
        R !== "left" &&
        R !== "center" &&
        R !== "right" &&
        R !== "end" &&
        R !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      S.setTextAlign(R);
    }
    if (_) {
      const R = _(x);
      if (R !== "left" && R !== "right" && R !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      S.setJustify(R);
    }
    if (v) {
      const R = v(x);
      if (
        R !== "bottom" &&
        R !== "top" &&
        R !== "middle" &&
        R !== "alphabetic" &&
        R !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      S.setTextBaseline(R);
    }
    return w && S.setPadding(w(x)), S;
  };
}
function ew(t, e) {
  return "icon-src" in t
    ? tw(t, e)
    : "shape-points" in t
      ? nw(t, e)
      : "circle-radius" in t
        ? iw(t, e)
        : null;
}
function tw(t, e) {
  const n = "icon-",
    i = n + "src",
    r = k_(t[i], i),
    s = Ql(t, n + "anchor", e),
    o = Pa(t, n + "scale", e),
    l = at(t, n + "opacity", e),
    a = Ql(t, n + "displacement", e),
    u = at(t, n + "rotation", e),
    c = go(t, n + "rotate-with-view", e),
    h = cg(t, n + "anchor-origin"),
    d = hg(t, n + "anchor-x-units"),
    f = hg(t, n + "anchor-y-units"),
    p = aw(t, n + "color"),
    y = ow(t, n + "cross-origin"),
    E = lw(t, n + "offset"),
    m = cg(t, n + "offset-origin"),
    g = Jl(t, n + "width"),
    _ = Jl(t, n + "height"),
    v = sw(t, n + "size"),
    w = Aa(t, n + "declutter-mode"),
    C = new Jr({
      src: r,
      anchorOrigin: h,
      anchorXUnits: d,
      anchorYUnits: f,
      color: p,
      crossOrigin: y,
      offset: E,
      offsetOrigin: m,
      height: _,
      width: g,
      size: v,
      declutterMode: w,
    });
  return function (S) {
    return (
      l && C.setOpacity(l(S)),
      a && C.setDisplacement(a(S)),
      u && C.setRotation(u(S)),
      c && C.setRotateWithView(c(S)),
      o && C.setScale(o(S)),
      s && C.setAnchor(s(S)),
      C
    );
  };
}
function nw(t, e) {
  const n = "shape-",
    i = n + "points",
    r = n + "radius",
    s = Nc(t[i], i),
    o = Nc(t[r], r),
    l = ho(t, n, e),
    a = fo(t, n, e),
    u = Pa(t, n + "scale", e),
    c = Ql(t, n + "displacement", e),
    h = at(t, n + "rotation", e),
    d = go(t, n + "rotate-with-view", e),
    f = Jl(t, n + "radius2"),
    p = Jl(t, n + "angle"),
    y = Aa(t, n + "declutter-mode"),
    E = new La({
      points: s,
      radius: o,
      radius2: f,
      angle: p,
      declutterMode: y,
    });
  return function (m) {
    return (
      l && E.setFill(l(m)),
      a && E.setStroke(a(m)),
      c && E.setDisplacement(c(m)),
      h && E.setRotation(h(m)),
      d && E.setRotateWithView(d(m)),
      u && E.setScale(u(m)),
      E
    );
  };
}
function iw(t, e) {
  const n = "circle-",
    i = ho(t, n, e),
    r = fo(t, n, e),
    s = at(t, n + "radius", e),
    o = Pa(t, n + "scale", e),
    l = Ql(t, n + "displacement", e),
    a = at(t, n + "rotation", e),
    u = go(t, n + "rotate-with-view", e),
    c = Aa(t, n + "declutter-mode"),
    h = new Co({ radius: 5, declutterMode: c });
  return function (d) {
    return (
      s && h.setRadius(s(d)),
      i && h.setFill(i(d)),
      r && h.setStroke(r(d)),
      l && h.setDisplacement(l(d)),
      a && h.setRotation(a(d)),
      u && h.setRotateWithView(u(d)),
      o && h.setScale(o(d)),
      h
    );
  };
}
function at(t, e, n) {
  if (!(e in t)) return;
  const i = bn(t[e], N, n);
  return function (r) {
    return Nc(i(r), e);
  };
}
function In(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], _t, n);
  return function (r) {
    return k_(i(r), e);
  };
}
function rw(t, e, n) {
  const i = In(t, e + "pattern-src", n),
    r = ug(t, e + "pattern-offset", n),
    s = ug(t, e + "pattern-size", n),
    o = od(t, e + "color", n);
  return function (l) {
    return { src: i(l), offset: r && r(l), size: s && s(l), color: o && o(l) };
  };
}
function go(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], we, n);
  return function (r) {
    const s = i(r);
    if (typeof s != "boolean") throw new Error(`Expected a boolean for ${e}`);
    return s;
  };
}
function od(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], De | _t, n);
  return function (r) {
    return M_(i(r), e);
  };
}
function L_(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], Gn, n);
  return function (r) {
    return To(i(r), e);
  };
}
function Ql(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], Gn, n);
  return function (r) {
    const s = To(i(r), e);
    if (s.length !== 2) throw new Error(`Expected two numbers for ${e}`);
    return s;
  };
}
function ug(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], Gn, n);
  return function (r) {
    return P_(i(r), e);
  };
}
function Pa(t, e, n) {
  if (!(e in t)) return null;
  const i = bn(t[e], Gn | N, n);
  return function (r) {
    return uw(i(r), e);
  };
}
function Jl(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "number") throw new Error(`Expected a number for ${e}`);
    return n;
  }
}
function sw(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n == "number") return vt(n);
    if (!Array.isArray(n))
      throw new Error(`Expected a number or size array for ${e}`);
    if (n.length !== 2 || typeof n[0] != "number" || typeof n[1] != "number")
      throw new Error(`Expected a number or size array for ${e}`);
    return n;
  }
}
function ow(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    return n;
  }
}
function cg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (
      n !== "bottom-left" &&
      n !== "bottom-right" &&
      n !== "top-left" &&
      n !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${e}`,
      );
    return n;
  }
}
function hg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (n !== "pixels" && n !== "fraction")
      throw new Error(`Expected pixels or fraction for ${e}`);
    return n;
  }
}
function lw(t, e) {
  const n = t[e];
  if (n !== void 0) return To(n, e);
}
function Aa(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    if (n !== "declutter" && n !== "obstacle" && n !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${e}`);
    return n;
  }
}
function aw(t, e) {
  const n = t[e];
  if (n !== void 0) return M_(n, e);
}
function To(t, e) {
  if (!Array.isArray(t)) throw new Error(`Expected an array for ${e}`);
  const n = t.length;
  for (let i = 0; i < n; ++i)
    if (typeof t[i] != "number")
      throw new Error(`Expected an array of numbers for ${e}`);
  return t;
}
function k_(t, e) {
  if (typeof t != "string") throw new Error(`Expected a string for ${e}`);
  return t;
}
function Nc(t, e) {
  if (typeof t != "number") throw new Error(`Expected a number for ${e}`);
  return t;
}
function M_(t, e) {
  if (typeof t == "string") return t;
  const n = To(t, e),
    i = n.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${e}`);
  return n;
}
function P_(t, e) {
  const n = To(t, e);
  if (n.length !== 2)
    throw new Error(`Expected an array of two numbers for ${e}`);
  return n;
}
function uw(t, e) {
  return typeof t == "number" ? t : P_(t, e);
}
const dg = { RENDER_ORDER: "renderOrder" };
class A_ extends ka {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.style,
      delete n.renderBuffer,
      delete n.updateWhileAnimating,
      delete n.updateWhileInteracting,
      super(n),
      (this.declutter_ = e.declutter ? String(e.declutter) : void 0),
      (this.renderBuffer_ = e.renderBuffer !== void 0 ? e.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(e.style),
      (this.updateWhileAnimating_ =
        e.updateWhileAnimating !== void 0 ? e.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        e.updateWhileInteracting !== void 0 ? e.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(e) {
    return super.getFeatures(e);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(dg.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(e, n) {
    const i = this.getDeclutter();
    i in e.declutter || (e.declutter[i] = new C_(9)),
      this.getRenderer().renderDeclutter(e, n);
  }
  setRenderOrder(e) {
    this.set(dg.RENDER_ORDER, e);
  }
  setStyle(e) {
    (this.style_ = cw(e)),
      (this.styleFunction_ = e === null ? void 0 : eE(this.style_)),
      this.changed();
  }
}
function cw(t) {
  if (t === void 0) return tE;
  if (!t) return null;
  if (typeof t == "function" || t instanceof Fe) return t;
  if (!Array.isArray(t)) return ag([t]);
  if (t.length === 0) return [];
  const e = t.length,
    n = t[0];
  if (n instanceof Fe) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!(o instanceof Fe))
        throw new Error("Expected a list of style instances");
      r[s] = o;
    }
    return r;
  }
  if ("style" in n) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      r[s] = o;
    }
    return qE(r);
  }
  return ag(t);
}
const z = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  rl = [z.FILL],
  ri = [z.STROKE],
  zi = [z.BEGIN_PATH],
  fg = [z.CLOSE_PATH];
class D_ {
  drawCustom(e, n, i, r, s) {}
  drawGeometry(e) {}
  setStyle(e) {}
  drawCircle(e, n, i) {}
  drawFeature(e, n, i) {}
  drawGeometryCollection(e, n, i) {}
  drawLineString(e, n, i) {}
  drawMultiLineString(e, n, i) {}
  drawMultiPoint(e, n, i) {}
  drawMultiPolygon(e, n, i) {}
  drawPoint(e, n, i) {}
  drawPolygon(e, n, i) {}
  drawText(e, n, i) {}
  setFillStrokeStyle(e, n) {}
  setImageStyle(e, n) {}
  setTextStyle(e, n) {}
}
class Ro extends D_ {
  constructor(e, n, i, r) {
    super(),
      (this.tolerance = e),
      (this.maxExtent = n),
      (this.pixelRatio = r),
      (this.maxLineWidth = 0),
      (this.resolution = i),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(e) {
    const n = this.pixelRatio;
    return n == 1
      ? e
      : e.map(function (i) {
          return i * n;
        });
  }
  appendFlatPointCoordinates(e, n) {
    const i = this.getBufferedMaxExtent(),
      r = this.tmpCoordinate_,
      s = this.coordinates;
    let o = s.length;
    for (let l = 0, a = e.length; l < a; l += n)
      (r[0] = e[l]),
        (r[1] = e[l + 1]),
        Br(i, r) && ((s[o++] = r[0]), (s[o++] = r[1]));
    return o;
  }
  appendFlatLineCoordinates(e, n, i, r, s, o) {
    const l = this.coordinates;
    let a = l.length;
    const u = this.getBufferedMaxExtent();
    o && (n += r);
    let c = e[n],
      h = e[n + 1];
    const d = this.tmpCoordinate_;
    let f = !0,
      p,
      y,
      E;
    for (p = n + r; p < i; p += r)
      (d[0] = e[p]),
        (d[1] = e[p + 1]),
        (E = Sc(u, d)),
        E !== y
          ? (f && ((l[a++] = c), (l[a++] = h), (f = !1)),
            (l[a++] = d[0]),
            (l[a++] = d[1]))
          : E === Me.INTERSECTING
            ? ((l[a++] = d[0]), (l[a++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (h = d[1]),
        (y = E);
    return ((s && f) || p === n + r) && ((l[a++] = c), (l[a++] = h)), a;
  }
  drawCustomCoordinates_(e, n, i, r, s) {
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = this.appendFlatLineCoordinates(e, n, a, r, !1, !1);
      s.push(u), (n = a);
    }
    return n;
  }
  drawCustom(e, n, i, r, s) {
    this.beginGeometry(e, n, s);
    const o = e.getType(),
      l = e.getStride(),
      a = this.coordinates.length;
    let u, c, h, d, f;
    switch (o) {
      case "MultiPolygon":
        (u = e.getOrientedFlatCoordinates()), (d = []);
        const p = e.getEndss();
        f = 0;
        for (let y = 0, E = p.length; y < E; ++y) {
          const m = [];
          (f = this.drawCustomCoordinates_(u, f, p[y], l, m)), d.push(m);
        }
        this.instructions.push([z.CUSTOM, a, d, e, i, Uf, s]),
          this.hitDetectionInstructions.push([
            z.CUSTOM,
            a,
            d,
            e,
            r || i,
            Uf,
            s,
          ]);
        break;
      case "Polygon":
      case "MultiLineString":
        (h = []),
          (u =
            o == "Polygon"
              ? e.getOrientedFlatCoordinates()
              : e.getFlatCoordinates()),
          (f = this.drawCustomCoordinates_(u, 0, e.getEnds(), l, h)),
          this.instructions.push([z.CUSTOM, a, h, e, i, Hl, s]),
          this.hitDetectionInstructions.push([
            z.CUSTOM,
            a,
            h,
            e,
            r || i,
            Hl,
            s,
          ]);
        break;
      case "LineString":
      case "Circle":
        (u = e.getFlatCoordinates()),
          (c = this.appendFlatLineCoordinates(u, 0, u.length, l, !1, !1)),
          this.instructions.push([z.CUSTOM, a, c, e, i, Tr, s]),
          this.hitDetectionInstructions.push([
            z.CUSTOM,
            a,
            c,
            e,
            r || i,
            Tr,
            s,
          ]);
        break;
      case "MultiPoint":
        (u = e.getFlatCoordinates()),
          (c = this.appendFlatPointCoordinates(u, l)),
          c > a &&
            (this.instructions.push([z.CUSTOM, a, c, e, i, Tr, s]),
            this.hitDetectionInstructions.push([
              z.CUSTOM,
              a,
              c,
              e,
              r || i,
              Tr,
              s,
            ]));
        break;
      case "Point":
        (u = e.getFlatCoordinates()),
          this.coordinates.push(u[0], u[1]),
          (c = this.coordinates.length),
          this.instructions.push([z.CUSTOM, a, c, e, i, void 0, s]),
          this.hitDetectionInstructions.push([
            z.CUSTOM,
            a,
            c,
            e,
            r || i,
            void 0,
            s,
          ]);
        break;
    }
    this.endGeometry(n);
  }
  beginGeometry(e, n, i) {
    (this.beginGeometryInstruction1_ = [z.BEGIN_GEOMETRY, n, 0, e, i]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [z.BEGIN_GEOMETRY, n, 0, e, i]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const e = this.hitDetectionInstructions;
    e.reverse();
    let n;
    const i = e.length;
    let r,
      s,
      o = -1;
    for (n = 0; n < i; ++n)
      (r = e[n]),
        (s = r[0]),
        s == z.END_GEOMETRY
          ? (o = n)
          : s == z.BEGIN_GEOMETRY &&
            ((r[2] = n), k1(this.hitDetectionInstructions, o, n), (o = -1));
  }
  setFillStrokeStyle(e, n) {
    const i = this.state;
    if (e) {
      const r = e.getColor();
      (i.fillPatternScale =
        r && typeof r == "object" && "src" in r ? this.pixelRatio : 1),
        (i.fillStyle = cn(r || ot));
    } else i.fillStyle = void 0;
    if (n) {
      const r = n.getColor();
      i.strokeStyle = cn(r || ao);
      const s = n.getLineCap();
      i.lineCap = s !== void 0 ? s : Vr;
      const o = n.getLineDash();
      i.lineDash = o ? o.slice() : An;
      const l = n.getLineDashOffset();
      i.lineDashOffset = l || Dn;
      const a = n.getLineJoin();
      i.lineJoin = a !== void 0 ? a : Kr;
      const u = n.getWidth();
      i.lineWidth = u !== void 0 ? u : co;
      const c = n.getMiterLimit();
      (i.miterLimit = c !== void 0 ? c : lo),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
  }
  createFill(e) {
    const n = e.fillStyle,
      i = [z.SET_FILL_STYLE, n];
    return typeof n != "string" && i.push(e.fillPatternScale), i;
  }
  applyStroke(e) {
    this.instructions.push(this.createStroke(e));
  }
  createStroke(e) {
    return [
      z.SET_STROKE_STYLE,
      e.strokeStyle,
      e.lineWidth * this.pixelRatio,
      e.lineCap,
      e.lineJoin,
      e.miterLimit,
      this.applyPixelRatio(e.lineDash),
      e.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(e, n) {
    const i = e.fillStyle;
    (typeof i != "string" || e.currentFillStyle != i) &&
      (i !== void 0 && this.instructions.push(n.call(this, e)),
      (e.currentFillStyle = i));
  }
  updateStrokeStyle(e, n) {
    const i = e.strokeStyle,
      r = e.lineCap,
      s = e.lineDash,
      o = e.lineDashOffset,
      l = e.lineJoin,
      a = e.lineWidth,
      u = e.miterLimit;
    (e.currentStrokeStyle != i ||
      e.currentLineCap != r ||
      (s != e.currentLineDash && !Ci(e.currentLineDash, s)) ||
      e.currentLineDashOffset != o ||
      e.currentLineJoin != l ||
      e.currentLineWidth != a ||
      e.currentMiterLimit != u) &&
      (i !== void 0 && n.call(this, e),
      (e.currentStrokeStyle = i),
      (e.currentLineCap = r),
      (e.currentLineDash = s),
      (e.currentLineDashOffset = o),
      (e.currentLineJoin = l),
      (e.currentLineWidth = a),
      (e.currentMiterLimit = u));
  }
  endGeometry(e) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const n = [z.END_GEOMETRY, e];
    this.instructions.push(n), this.hitDetectionInstructions.push(n);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = jm(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const e = (this.resolution * (this.maxLineWidth + 1)) / 2;
      zh(this.bufferedMaxExtent_, e, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class hw extends Ro {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(e, n, i) {
    if (
      !this.image_ ||
      (this.maxExtent && !Br(this.maxExtent, e.getFlatCoordinates()))
    )
      return;
    this.beginGeometry(e, n, i);
    const r = e.getFlatCoordinates(),
      s = e.getStride(),
      o = this.coordinates.length,
      l = this.appendFlatPointCoordinates(r, s);
    this.instructions.push([
      z.DRAW_IMAGE,
      o,
      l,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_IMAGE,
        o,
        l,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  drawMultiPoint(e, n, i) {
    if (!this.image_) return;
    this.beginGeometry(e, n, i);
    const r = e.getFlatCoordinates(),
      s = [];
    for (let a = 0, u = r.length; a < u; a += e.getStride())
      (!this.maxExtent || Br(this.maxExtent, r.slice(a, a + 2))) &&
        s.push(r[a], r[a + 1]);
    const o = this.coordinates.length,
      l = this.appendFlatPointCoordinates(s, 2);
    this.instructions.push([
      z.DRAW_IMAGE,
      o,
      l,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_IMAGE,
        o,
        l,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(e, n) {
    const i = e.getAnchor(),
      r = e.getSize(),
      s = e.getOrigin();
    (this.imagePixelRatio_ = e.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = i[0]),
      (this.anchorY_ = i[1]),
      (this.hitDetectionImage_ = e.getHitDetectionImage()),
      (this.image_ = e.getImage(this.pixelRatio)),
      (this.height_ = r[1]),
      (this.opacity_ = e.getOpacity()),
      (this.originX_ = s[0]),
      (this.originY_ = s[1]),
      (this.rotateWithView_ = e.getRotateWithView()),
      (this.rotation_ = e.getRotation()),
      (this.scale_ = e.getScaleArray()),
      (this.width_ = r[0]),
      (this.declutterMode_ = e.getDeclutterMode()),
      (this.declutterImageWithText_ = n);
  }
}
class dw extends Ro {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinates_(e, n, i, r) {
    const s = this.coordinates.length,
      o = this.appendFlatLineCoordinates(e, n, i, r, !1, !1),
      l = [z.MOVE_TO_LINE_TO, s, o];
    return this.instructions.push(l), this.hitDetectionInstructions.push(l), i;
  }
  drawLineString(e, n, i) {
    const r = this.state,
      s = r.strokeStyle,
      o = r.lineWidth;
    if (s === void 0 || o === void 0) return;
    this.updateStrokeStyle(r, this.applyStroke),
      this.beginGeometry(e, n, i),
      this.hitDetectionInstructions.push(
        [
          z.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          Dn,
        ],
        zi,
      );
    const l = e.getFlatCoordinates(),
      a = e.getStride();
    this.drawFlatCoordinates_(l, 0, l.length, a),
      this.hitDetectionInstructions.push(ri),
      this.endGeometry(n);
  }
  drawMultiLineString(e, n, i) {
    const r = this.state,
      s = r.strokeStyle,
      o = r.lineWidth;
    if (s === void 0 || o === void 0) return;
    this.updateStrokeStyle(r, this.applyStroke),
      this.beginGeometry(e, n, i),
      this.hitDetectionInstructions.push(
        [
          z.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          Dn,
        ],
        zi,
      );
    const l = e.getEnds(),
      a = e.getFlatCoordinates(),
      u = e.getStride();
    let c = 0;
    for (let h = 0, d = l.length; h < d; ++h)
      c = this.drawFlatCoordinates_(a, c, l[h], u);
    this.hitDetectionInstructions.push(ri), this.endGeometry(n);
  }
  finish() {
    const e = this.state;
    return (
      e.lastStroke != null &&
        e.lastStroke != this.coordinates.length &&
        this.instructions.push(ri),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(e) {
    e.lastStroke != null &&
      e.lastStroke != this.coordinates.length &&
      (this.instructions.push(ri), (e.lastStroke = this.coordinates.length)),
      (e.lastStroke = 0),
      super.applyStroke(e),
      this.instructions.push(zi);
  }
}
class gg extends Ro {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinatess_(e, n, i, r) {
    const s = this.state,
      o = s.fillStyle !== void 0,
      l = s.strokeStyle !== void 0,
      a = i.length;
    this.instructions.push(zi), this.hitDetectionInstructions.push(zi);
    for (let u = 0; u < a; ++u) {
      const c = i[u],
        h = this.coordinates.length,
        d = this.appendFlatLineCoordinates(e, n, c, r, !0, !l),
        f = [z.MOVE_TO_LINE_TO, h, d];
      this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        l &&
          (this.instructions.push(fg), this.hitDetectionInstructions.push(fg)),
        (n = c);
    }
    return (
      o && (this.instructions.push(rl), this.hitDetectionInstructions.push(rl)),
      l && (this.instructions.push(ri), this.hitDetectionInstructions.push(ri)),
      n
    );
  }
  drawCircle(e, n, i) {
    const r = this.state,
      s = r.fillStyle,
      o = r.strokeStyle;
    if (s === void 0 && o === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n, i),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, ot]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          Dn,
        ]);
    const l = e.getFlatCoordinates(),
      a = e.getStride(),
      u = this.coordinates.length;
    this.appendFlatLineCoordinates(l, 0, l.length, a, !1, !1);
    const c = [z.CIRCLE, u];
    this.instructions.push(zi, c),
      this.hitDetectionInstructions.push(zi, c),
      r.fillStyle !== void 0 &&
        (this.instructions.push(rl), this.hitDetectionInstructions.push(rl)),
      r.strokeStyle !== void 0 &&
        (this.instructions.push(ri), this.hitDetectionInstructions.push(ri)),
      this.endGeometry(n);
  }
  drawPolygon(e, n, i) {
    const r = this.state,
      s = r.fillStyle,
      o = r.strokeStyle;
    if (s === void 0 && o === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n, i),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, ot]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          Dn,
        ]);
    const l = e.getEnds(),
      a = e.getOrientedFlatCoordinates(),
      u = e.getStride();
    this.drawFlatCoordinatess_(a, 0, l, u), this.endGeometry(n);
  }
  drawMultiPolygon(e, n, i) {
    const r = this.state,
      s = r.fillStyle,
      o = r.strokeStyle;
    if (s === void 0 && o === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n, i),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, ot]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          Dn,
        ]);
    const l = e.getEndss(),
      a = e.getOrientedFlatCoordinates(),
      u = e.getStride();
    let c = 0;
    for (let h = 0, d = l.length; h < d; ++h)
      c = this.drawFlatCoordinatess_(a, c, l[h], u);
    this.endGeometry(n);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const e = this.tolerance;
    if (e !== 0) {
      const n = this.coordinates;
      for (let i = 0, r = n.length; i < r; ++i) n[i] = Mi(n[i], e);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const e = this.state;
    e.fillStyle !== void 0 && this.updateFillStyle(e, this.createFill),
      e.strokeStyle !== void 0 && this.updateStrokeStyle(e, this.applyStroke);
  }
}
function fw(t, e, n, i, r) {
  const s = [];
  let o = n,
    l = 0,
    a = e.slice(n, 2);
  for (; l < t && o + r < i; ) {
    const [u, c] = a.slice(-2),
      h = e[o + r],
      d = e[o + r + 1],
      f = Math.sqrt((h - u) * (h - u) + (d - c) * (d - c));
    if (((l += f), l >= t)) {
      const p = (t - l + f) / f,
        y = At(u, h, p),
        E = At(c, d, p);
      a.push(y, E), s.push(a), (a = [y, E]), l == t && (o += r), (l = 0);
    } else if (l < t) a.push(e[o + r], e[o + r + 1]), (o += r);
    else {
      const p = f - l,
        y = At(u, h, p / f),
        E = At(c, d, p / f);
      a.push(y, E), s.push(a), (a = [y, E]), (l = 0), (o += r);
    }
  }
  return l > 0 && s.push(a), s;
}
function gw(t, e, n, i, r) {
  let s = n,
    o = n,
    l = 0,
    a = 0,
    u = n,
    c,
    h,
    d,
    f,
    p,
    y,
    E,
    m,
    g,
    _;
  for (h = n; h < i; h += r) {
    const v = e[h],
      w = e[h + 1];
    p !== void 0 &&
      ((g = v - p),
      (_ = w - y),
      (f = Math.sqrt(g * g + _ * _)),
      E !== void 0 &&
        ((a += d),
        (c = Math.acos((E * g + m * _) / (d * f))),
        c > t && (a > l && ((l = a), (s = u), (o = h)), (a = 0), (u = h - r))),
      (d = f),
      (E = g),
      (m = _)),
      (p = v),
      (y = w);
  }
  return (a += f), a > l ? [u, h] : [s, o];
}
const ea = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class pw extends Ro {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[ot] = { fillStyle: ot }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const e = super.finish();
    return (
      (e.textStates = this.textStates),
      (e.fillStates = this.fillStates),
      (e.strokeStates = this.strokeStates),
      e
    );
  }
  drawText(e, n, i) {
    const r = this.textFillState_,
      s = this.textStrokeState_,
      o = this.textState_;
    if (this.text_ === "" || !o || (!r && !s)) return;
    const l = this.coordinates;
    let a = l.length;
    const u = e.getType();
    let c = null,
      h = e.getStride();
    if (
      o.placement === "line" &&
      (u == "LineString" ||
        u == "MultiLineString" ||
        u == "Polygon" ||
        u == "MultiPolygon")
    ) {
      if (!lt(this.maxExtent, e.getExtent())) return;
      let d;
      if (((c = e.getFlatCoordinates()), u == "LineString")) d = [c.length];
      else if (u == "MultiLineString") d = e.getEnds();
      else if (u == "Polygon") d = e.getEnds().slice(0, 1);
      else if (u == "MultiPolygon") {
        const E = e.getEndss();
        d = [];
        for (let m = 0, g = E.length; m < g; ++m) d.push(E[m][0]);
      }
      this.beginGeometry(e, n, i);
      const f = o.repeat,
        p = f ? void 0 : o.textAlign;
      let y = 0;
      for (let E = 0, m = d.length; E < m; ++E) {
        let g;
        f
          ? (g = fw(f * this.resolution, c, y, d[E], h))
          : (g = [c.slice(y, d[E])]);
        for (let _ = 0, v = g.length; _ < v; ++_) {
          const w = g[_];
          let C = 0,
            S = w.length;
          if (p == null) {
            const R = gw(o.maxAngle, w, 0, w.length, 2);
            (C = R[0]), (S = R[1]);
          }
          for (let R = C; R < S; R += h) l.push(w[R], w[R + 1]);
          const x = l.length;
          (y = d[E]), this.drawChars_(a, x), (a = x);
        }
      }
      this.endGeometry(n);
    } else {
      let d = o.overflow ? null : [];
      switch (u) {
        case "Point":
        case "MultiPoint":
          c = e.getFlatCoordinates();
          break;
        case "LineString":
          c = e.getFlatMidpoint();
          break;
        case "Circle":
          c = e.getCenter();
          break;
        case "MultiLineString":
          (c = e.getFlatMidpoints()), (h = 2);
          break;
        case "Polygon":
          (c = e.getFlatInteriorPoint()),
            o.overflow || d.push(c[2] / this.resolution),
            (h = 3);
          break;
        case "MultiPolygon":
          const g = e.getFlatInteriorPoints();
          c = [];
          for (let _ = 0, v = g.length; _ < v; _ += 3)
            o.overflow || d.push(g[_ + 2] / this.resolution),
              c.push(g[_], g[_ + 1]);
          if (c.length === 0) return;
          h = 2;
          break;
      }
      const f = this.appendFlatPointCoordinates(c, h);
      if (f === a) return;
      if (d && (f - a) / 2 !== c.length / h) {
        let g = a / 2;
        d = d.filter((_, v) => {
          const w =
            l[(g + v) * 2] === c[v * h] && l[(g + v) * 2 + 1] === c[v * h + 1];
          return w || --g, w;
        });
      }
      this.saveTextStates_(),
        (o.backgroundFill || o.backgroundStroke) &&
          (this.setFillStrokeStyle(o.backgroundFill, o.backgroundStroke),
          o.backgroundFill && this.updateFillStyle(this.state, this.createFill),
          o.backgroundStroke &&
            (this.updateStrokeStyle(this.state, this.applyStroke),
            this.hitDetectionInstructions.push(this.createStroke(this.state)))),
        this.beginGeometry(e, n, i);
      let p = o.padding;
      if (p != Ni && (o.scale[0] < 0 || o.scale[1] < 0)) {
        let g = o.padding[0],
          _ = o.padding[1],
          v = o.padding[2],
          w = o.padding[3];
        o.scale[0] < 0 && ((_ = -_), (w = -w)),
          o.scale[1] < 0 && ((g = -g), (v = -v)),
          (p = [g, _, v, w]);
      }
      const y = this.pixelRatio;
      this.instructions.push([
        z.DRAW_IMAGE,
        a,
        f,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        p == Ni
          ? Ni
          : p.map(function (g) {
              return g * y;
            }),
        !!o.backgroundFill,
        !!o.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d,
      ]);
      const E = 1 / y,
        m = this.state.fillStyle;
      o.backgroundFill &&
        ((this.state.fillStyle = ot),
        this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.hitDetectionInstructions.push([
          z.DRAW_IMAGE,
          a,
          f,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [E, E],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          p,
          !!o.backgroundFill,
          !!o.backgroundStroke,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? ot : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          d,
        ]),
        o.backgroundFill &&
          ((this.state.fillStyle = m),
          this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.endGeometry(n);
    }
  }
  saveTextStates_() {
    const e = this.textStrokeState_,
      n = this.textState_,
      i = this.textFillState_,
      r = this.strokeKey_;
    e &&
      (r in this.strokeStates ||
        (this.strokeStates[r] = {
          strokeStyle: e.strokeStyle,
          lineCap: e.lineCap,
          lineDashOffset: e.lineDashOffset,
          lineWidth: e.lineWidth,
          lineJoin: e.lineJoin,
          miterLimit: e.miterLimit,
          lineDash: e.lineDash,
        }));
    const s = this.textKey_;
    s in this.textStates ||
      (this.textStates[s] = {
        font: n.font,
        textAlign: n.textAlign || uo,
        justify: n.justify,
        textBaseline: n.textBaseline || $l,
        scale: n.scale,
      });
    const o = this.fillKey_;
    i &&
      (o in this.fillStates ||
        (this.fillStates[o] = { fillStyle: i.fillStyle }));
  }
  drawChars_(e, n) {
    const i = this.textStrokeState_,
      r = this.textState_,
      s = this.strokeKey_,
      o = this.textKey_,
      l = this.fillKey_;
    this.saveTextStates_();
    const a = this.pixelRatio,
      u = ea[r.textBaseline],
      c = this.textOffsetY_ * a,
      h = this.text_,
      d = i ? (i.lineWidth * Math.abs(r.scale[0])) / 2 : 0;
    this.instructions.push([
      z.DRAW_CHARS,
      e,
      n,
      u,
      r.overflow,
      l,
      r.maxAngle,
      a,
      c,
      s,
      d * a,
      h,
      o,
      1,
      this.declutterMode_,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_CHARS,
        e,
        n,
        u,
        r.overflow,
        l && ot,
        r.maxAngle,
        a,
        c,
        s,
        d * a,
        h,
        o,
        1 / a,
        this.declutterMode_,
      ]);
  }
  setTextStyle(e, n) {
    let i, r, s;
    if (!e) this.text_ = "";
    else {
      const o = e.getFill();
      o
        ? ((r = this.textFillState_),
          r || ((r = {}), (this.textFillState_ = r)),
          (r.fillStyle = cn(o.getColor() || ot)))
        : ((r = null), (this.textFillState_ = r));
      const l = e.getStroke();
      if (!l) (s = null), (this.textStrokeState_ = s);
      else {
        (s = this.textStrokeState_),
          s || ((s = {}), (this.textStrokeState_ = s));
        const p = l.getLineDash(),
          y = l.getLineDashOffset(),
          E = l.getWidth(),
          m = l.getMiterLimit();
        (s.lineCap = l.getLineCap() || Vr),
          (s.lineDash = p ? p.slice() : An),
          (s.lineDashOffset = y === void 0 ? Dn : y),
          (s.lineJoin = l.getLineJoin() || Kr),
          (s.lineWidth = E === void 0 ? co : E),
          (s.miterLimit = m === void 0 ? lo : m),
          (s.strokeStyle = cn(l.getColor() || ao));
      }
      i = this.textState_;
      const a = e.getFont() || y_;
      Hv(a);
      const u = e.getScaleArray();
      (i.overflow = e.getOverflow()),
        (i.font = a),
        (i.maxAngle = e.getMaxAngle()),
        (i.placement = e.getPlacement()),
        (i.textAlign = e.getTextAlign()),
        (i.repeat = e.getRepeat()),
        (i.justify = e.getJustify()),
        (i.textBaseline = e.getTextBaseline() || $l),
        (i.backgroundFill = e.getBackgroundFill()),
        (i.backgroundStroke = e.getBackgroundStroke()),
        (i.padding = e.getPadding() || Ni),
        (i.scale = u === void 0 ? [1, 1] : u);
      const c = e.getOffsetX(),
        h = e.getOffsetY(),
        d = e.getRotateWithView(),
        f = e.getRotation();
      (this.text_ = e.getText() || ""),
        (this.textOffsetX_ = c === void 0 ? 0 : c),
        (this.textOffsetY_ = h === void 0 ? 0 : h),
        (this.textRotateWithView_ = d === void 0 ? !1 : d),
        (this.textRotation_ = f === void 0 ? 0 : f),
        (this.strokeKey_ = s
          ? (typeof s.strokeStyle == "string"
              ? s.strokeStyle
              : Q(s.strokeStyle)) +
            s.lineCap +
            s.lineDashOffset +
            "|" +
            s.lineWidth +
            s.lineJoin +
            s.miterLimit +
            "[" +
            s.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          i.font +
          i.scale +
          (i.textAlign || "?") +
          (i.repeat || "?") +
          (i.justify || "?") +
          (i.textBaseline || "?")),
        (this.fillKey_ =
          r && r.fillStyle
            ? typeof r.fillStyle == "string"
              ? r.fillStyle
              : "|" + Q(r.fillStyle)
            : "");
    }
    (this.declutterMode_ = e.getDeclutterMode()),
      (this.declutterImageWithText_ = n);
  }
}
const mw = {
  Circle: gg,
  Default: Ro,
  Image: hw,
  LineString: dw,
  Polygon: gg,
  Text: pw,
};
class _w {
  constructor(e, n, i, r) {
    (this.tolerance_ = e),
      (this.maxExtent_ = n),
      (this.pixelRatio_ = r),
      (this.resolution_ = i),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const e = {};
    for (const n in this.buildersByZIndex_) {
      e[n] = e[n] || {};
      const i = this.buildersByZIndex_[n];
      for (const r in i) {
        const s = i[r].finish();
        e[n][r] = s;
      }
    }
    return e;
  }
  getBuilder(e, n) {
    const i = e !== void 0 ? e.toString() : "0";
    let r = this.buildersByZIndex_[i];
    r === void 0 && ((r = {}), (this.buildersByZIndex_[i] = r));
    let s = r[n];
    if (s === void 0) {
      const o = mw[n];
      (s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (r[n] = s);
    }
    return s;
  }
}
class yw extends wo {
  constructor(e) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = e),
      (this.declutterExecutorGroup = null);
  }
  getFeatures(e) {
    return ne();
  }
  getData(e) {
    return null;
  }
  prepareFrame(e) {
    return ne();
  }
  renderFrame(e, n) {
    return ne();
  }
  loadedTileCallback(e, n, i) {
    e[n] || (e[n] = {}), (e[n][i.tileCoord.toString()] = i);
  }
  createLoadedTileFinder(e, n, i) {
    return (r, s) => {
      const o = this.loadedTileCallback.bind(this, i, r);
      return e.forEachLoadedTile(n, r, s, o);
    };
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(e) {
    const n = e.target;
    (n.getState() === $.LOADED || n.getState() === $.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(e) {
    let n = e.getState();
    return (
      n != $.LOADED &&
        n != $.ERROR &&
        e.addEventListener(B.CHANGE, this.boundHandleImageChange_),
      n == $.IDLE && (e.load(), (n = e.getState())),
      n == $.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  renderDeferred(e) {}
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class O_ extends pn {
  constructor(e, n, i, r) {
    super(e),
      (this.inversePixelTransform = n),
      (this.frameState = i),
      (this.context = r);
  }
}
class F_ {
  constructor() {
    vd(
      this,
      "pushMethodArgs_",
      (...e) => (this.instructions_[this.zIndex + this.offset_].push(e), this),
    );
    (this.instructions_ = []),
      (this.zIndex = 0),
      (this.offset_ = 0),
      (this.context_ = new Proxy(CanvasRenderingContext2D.prototype, {
        get: (e, n) => {
          if (typeof Pc()[n] == "function")
            return (
              this.instructions_[this.zIndex + this.offset_] ||
                (this.instructions_[this.zIndex + this.offset_] = []),
              this.instructions_[this.zIndex + this.offset_].push(n),
              this.pushMethodArgs_
            );
        },
        set: (e, n, i) => (
          this.instructions_[this.zIndex + this.offset_] ||
            (this.instructions_[this.zIndex + this.offset_] = []),
          this.instructions_[this.zIndex + this.offset_].push(n, i),
          !0
        ),
      }));
  }
  getContext() {
    return this.context_;
  }
  draw(e) {
    this.instructions_.forEach((n) => {
      for (let i = 0, r = n.length; i < r; i += 2) {
        const s = n[i],
          o = n[i + 1];
        if (typeof e[s] == "function") e[s](...o);
        else {
          if (typeof o == "function") {
            e[s] = o(e);
            continue;
          }
          e[s] = o;
        }
      }
    });
  }
  clear() {
    (this.instructions_.length = 0), (this.zIndex = 0), (this.offset_ = 0);
  }
  offset() {
    (this.offset_ = this.instructions_.length), (this.zIndex = 0);
  }
}
const pg = [];
let ur = null;
function vw() {
  ur = Xe(1, 1, void 0, { willReadFrequently: !0 });
}
class N_ extends yw {
  constructor(e) {
    super(e),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Qt()),
      (this.pixelTransform = Qt()),
      (this.inversePixelTransform = Qt()),
      (this.context = null),
      (this.deferredContext_ = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null);
  }
  getImageData(e, n, i) {
    ur || vw(), ur.clearRect(0, 0, 1, 1);
    let r;
    try {
      ur.drawImage(e, n, i, 1, 1, 0, 0, 1, 1),
        (r = ur.getImageData(0, 0, 1, 1).data);
    } catch {
      return (ur = null), null;
    }
    return r;
  }
  getBackground(e) {
    let i = this.getLayer().getBackground();
    return (
      typeof i == "function" && (i = i(e.viewState.resolution)), i || void 0
    );
  }
  useContainer(e, n, i) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (
      e &&
      e.className === r &&
      (!i ||
        (e &&
          e.style.backgroundColor &&
          Ci(oo(e.style.backgroundColor), oo(i))))
    ) {
      const l = e.firstElementChild;
      l instanceof HTMLCanvasElement && (o = l.getContext("2d"));
    }
    if (
      (o && o.canvas.style.transform === n
        ? ((this.container = e),
          (this.context = o),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (s = document.createElement("div")), (s.className = r);
      let l = s.style;
      (l.position = "absolute"),
        (l.width = "100%"),
        (l.height = "100%"),
        (o = Xe());
      const a = o.canvas;
      s.appendChild(a),
        (l = a.style),
        (l.position = "absolute"),
        (l.left = "0"),
        (l.transformOrigin = "top left"),
        (this.container = s),
        (this.context = o);
    }
    !this.containerReused &&
      i &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = i);
  }
  clipUnrotated(e, n, i) {
    const r = $i(i),
      s = wa(i),
      o = Ea(i),
      l = va(i);
    Ae(n.coordinateToPixelTransform, r),
      Ae(n.coordinateToPixelTransform, s),
      Ae(n.coordinateToPixelTransform, o),
      Ae(n.coordinateToPixelTransform, l);
    const a = this.inversePixelTransform;
    Ae(a, r),
      Ae(a, s),
      Ae(a, o),
      Ae(a, l),
      e.save(),
      e.beginPath(),
      e.moveTo(Math.round(r[0]), Math.round(r[1])),
      e.lineTo(Math.round(s[0]), Math.round(s[1])),
      e.lineTo(Math.round(o[0]), Math.round(o[1])),
      e.lineTo(Math.round(l[0]), Math.round(l[1])),
      e.clip();
  }
  dispatchRenderEvent_(e, n, i) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      const s = new O_(e, this.inversePixelTransform, i, n);
      r.dispatchEvent(s);
    }
  }
  preRender(e, n) {
    (this.frameState = n),
      !n.declutter && this.dispatchRenderEvent_(Ot.PRERENDER, e, n);
  }
  postRender(e, n) {
    n.declutter || this.dispatchRenderEvent_(Ot.POSTRENDER, e, n);
  }
  renderDeferredInternal(e) {}
  getRenderContext(e) {
    return (
      e.declutter &&
        !this.deferredContext_ &&
        (this.deferredContext_ = new F_()),
      e.declutter ? this.deferredContext_.getContext() : this.context
    );
  }
  renderDeferred(e) {
    e.declutter &&
      (this.dispatchRenderEvent_(Ot.PRERENDER, this.context, e),
      e.declutter &&
        this.deferredContext_ &&
        (this.deferredContext_.draw(this.context),
        this.deferredContext_.clear()),
      this.renderDeferredInternal(e),
      this.dispatchRenderEvent_(Ot.POSTRENDER, this.context, e));
  }
  getRenderTransform(e, n, i, r, s, o, l) {
    const a = s / 2,
      u = o / 2,
      c = r / n,
      h = -c,
      d = -e[0] + l,
      f = -e[1];
    return gn(this.tempTransform, a, u, c, h, -i, d, f);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
function Ew(t, e, n, i, r, s, o, l, a, u, c, h) {
  let d = t[e],
    f = t[e + 1],
    p = 0,
    y = 0,
    E = 0,
    m = 0;
  function g() {
    (p = d),
      (y = f),
      (e += i),
      (d = t[e]),
      (f = t[e + 1]),
      (m += E),
      (E = Math.sqrt((d - p) * (d - p) + (f - y) * (f - y)));
  }
  do g();
  while (e < n - i && m + E < s);
  let _ = E === 0 ? 0 : (s - m) / E;
  const v = At(p, d, _),
    w = At(y, f, _),
    C = e - i,
    S = m,
    x = s + l * a(u, r, c);
  for (; e < n - i && m + E < x; ) g();
  _ = E === 0 ? 0 : (x - m) / E;
  const R = At(p, d, _),
    M = At(y, f, _);
  let F;
  if (h) {
    const O = [v, w, R, M];
    t_(O, 0, 4, 2, h, O, O), (F = O[0] > O[2]);
  } else F = v > R;
  const j = Math.PI,
    V = [],
    Z = C + i === e;
  (e = C), (E = 0), (m = S), (d = t[e]), (f = t[e + 1]);
  let K;
  if (Z) {
    g(), (K = Math.atan2(f - y, d - p)), F && (K += K > 0 ? -j : j);
    const O = (R + v) / 2,
      X = (M + w) / 2;
    return (V[0] = [O, X, (x - s) / 2, K, r]), V;
  }
  r = r.replace(/\n/g, " ");
  for (let O = 0, X = r.length; O < X; ) {
    g();
    let I = Math.atan2(f - y, d - p);
    if ((F && (I += I > 0 ? -j : j), K !== void 0)) {
      let L = I - K;
      if (((L += L > j ? -2 * j : L < -j ? 2 * j : 0), Math.abs(L) > o))
        return null;
    }
    K = I;
    const A = O;
    let P = 0;
    for (; O < X; ++O) {
      const L = F ? X - O - 1 : O,
        ae = l * a(u, r[L], c);
      if (e + i < n && m + E < s + P + ae / 2) break;
      P += ae;
    }
    if (O === A) continue;
    const W = F ? r.substring(X - A, X - O) : r.substring(A, O);
    _ = E === 0 ? 0 : (s + P / 2 - m) / E;
    const b = At(p, d, _),
      ue = At(y, f, _);
    V.push([b, ue, P / 2, I, W]), (s += P);
  }
  return V;
}
const ir = Gt(),
  Yn = [],
  wn = [],
  xn = [],
  Bn = [];
function mg(t) {
  return t[3].declutterBox;
}
const _g = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function Cu(t, e) {
  return (
    e === "start"
      ? (e = _g.test(t) ? "right" : "left")
      : e === "end" && (e = _g.test(t) ? "left" : "right"),
    ea[e]
  );
}
function ww(t, e, n) {
  return (
    n > 0 &&
      t.push(
        `
`,
        "",
      ),
    t.push(e, ""),
    t
  );
}
class xw {
  constructor(e, n, i, r, s) {
    (this.overlaps = i),
      (this.pixelRatio = n),
      (this.resolution = e),
      this.alignAndScaleFill_,
      (this.instructions = r.instructions),
      (this.coordinates = r.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Qt()),
      (this.hitDetectionInstructions = r.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = r.fillStates || {}),
      (this.strokeStates = r.strokeStates || {}),
      (this.textStates = r.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}),
      (this.zIndexContext_ = s ? new F_() : null);
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(e, n, i, r) {
    const s = e + n + i + r;
    if (this.labels_[s]) return this.labels_[s];
    const o = r ? this.strokeStates[r] : null,
      l = i ? this.fillStates[i] : null,
      a = this.textStates[n],
      u = this.pixelRatio,
      c = [a.scale[0] * u, a.scale[1] * u],
      h = Array.isArray(e),
      d = a.justify
        ? ea[a.justify]
        : Cu(Array.isArray(e) ? e[0] : e, a.textAlign || uo),
      f = r && o.lineWidth ? o.lineWidth : 0,
      p = h
        ? e
        : e
            .split(
              `
`,
            )
            .reduce(ww, []),
      { width: y, height: E, widths: m, heights: g, lineWidths: _ } = qv(a, p),
      v = y + f,
      w = [],
      C = (v + 2) * c[0],
      S = (E + f) * c[1],
      x = {
        width: C < 0 ? Math.floor(C) : Math.ceil(C),
        height: S < 0 ? Math.floor(S) : Math.ceil(S),
        contextInstructions: w,
      };
    (c[0] != 1 || c[1] != 1) && w.push("scale", c),
      r &&
        (w.push("strokeStyle", o.strokeStyle),
        w.push("lineWidth", f),
        w.push("lineCap", o.lineCap),
        w.push("lineJoin", o.lineJoin),
        w.push("miterLimit", o.miterLimit),
        w.push("setLineDash", [o.lineDash]),
        w.push("lineDashOffset", o.lineDashOffset)),
      i && w.push("fillStyle", l.fillStyle),
      w.push("textBaseline", "middle"),
      w.push("textAlign", "center");
    const R = 0.5 - d;
    let M = d * v + R * f;
    const F = [],
      j = [];
    let V = 0,
      Z = 0,
      K = 0,
      O = 0,
      X;
    for (let I = 0, A = p.length; I < A; I += 2) {
      const P = p[I];
      if (
        P ===
        `
`
      ) {
        (Z += V), (V = 0), (M = d * v + R * f), ++O;
        continue;
      }
      const W = p[I + 1] || a.font;
      W !== X && (r && F.push("font", W), i && j.push("font", W), (X = W)),
        (V = Math.max(V, g[K]));
      const b = [P, M + R * m[K] + d * (m[K] - _[O]), 0.5 * (f + V) + Z];
      (M += m[K]),
        r && F.push("strokeText", b),
        i && j.push("fillText", b),
        ++K;
    }
    return (
      Array.prototype.push.apply(w, F),
      Array.prototype.push.apply(w, j),
      (this.labels_[s] = x),
      x
    );
  }
  replayTextBackground_(e, n, i, r, s, o, l) {
    e.beginPath(),
      e.moveTo.apply(e, n),
      e.lineTo.apply(e, i),
      e.lineTo.apply(e, r),
      e.lineTo.apply(e, s),
      e.lineTo.apply(e, n),
      o && ((this.alignAndScaleFill_ = o[2]), this.fill_(e)),
      l && (this.setStrokeStyle_(e, l), e.stroke());
  }
  calculateImageOrLabelDimensions_(
    e,
    n,
    i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    p,
    y,
    E,
  ) {
    (l *= d[0]), (a *= d[1]);
    let m = i - l,
      g = r - a;
    const _ = s + u > e ? e - u : s,
      v = o + c > n ? n - c : o,
      w = p[3] + _ * d[0] + p[1],
      C = p[0] + v * d[1] + p[2],
      S = m - p[3],
      x = g - p[0];
    (y || h !== 0) &&
      ((Yn[0] = S),
      (Bn[0] = S),
      (Yn[1] = x),
      (wn[1] = x),
      (wn[0] = S + w),
      (xn[0] = wn[0]),
      (xn[1] = x + C),
      (Bn[1] = xn[1]));
    let R;
    return (
      h !== 0
        ? ((R = gn(Qt(), i, r, 1, 1, h, -i, -r)),
          Ae(R, Yn),
          Ae(R, wn),
          Ae(R, xn),
          Ae(R, Bn),
          _i(
            Math.min(Yn[0], wn[0], xn[0], Bn[0]),
            Math.min(Yn[1], wn[1], xn[1], Bn[1]),
            Math.max(Yn[0], wn[0], xn[0], Bn[0]),
            Math.max(Yn[1], wn[1], xn[1], Bn[1]),
            ir,
          ))
        : _i(
            Math.min(S, S + w),
            Math.min(x, x + C),
            Math.max(S, S + w),
            Math.max(x, x + C),
            ir,
          ),
      f && ((m = Math.round(m)), (g = Math.round(g))),
      {
        drawImageX: m,
        drawImageY: g,
        drawImageW: _,
        drawImageH: v,
        originX: u,
        originY: c,
        declutterBox: {
          minX: ir[0],
          minY: ir[1],
          maxX: ir[2],
          maxY: ir[3],
          value: E,
        },
        canvasTransform: R,
        scale: d,
      }
    );
  }
  replayImageOrLabel_(e, n, i, r, s, o, l) {
    const a = !!(o || l),
      u = r.declutterBox,
      c = l ? (l[2] * r.scale[0]) / 2 : 0;
    return (
      u.minX - c <= n[0] &&
        u.maxX + c >= 0 &&
        u.minY - c <= n[1] &&
        u.maxY + c >= 0 &&
        (a && this.replayTextBackground_(e, Yn, wn, xn, Bn, o, l),
        Qv(
          e,
          r.canvasTransform,
          s,
          i,
          r.originX,
          r.originY,
          r.drawImageW,
          r.drawImageH,
          r.drawImageX,
          r.drawImageY,
          r.scale,
        )),
      !0
    );
  }
  fill_(e) {
    const n = this.alignAndScaleFill_;
    if (n) {
      const i = Ae(this.renderedTransform_, [0, 0]),
        r = 512 * this.pixelRatio;
      e.save(),
        e.translate(i[0] % r, i[1] % r),
        n !== 1 && e.scale(n, n),
        e.rotate(this.viewRotation_);
    }
    e.fill(), n && e.restore();
  }
  setStrokeStyle_(e, n) {
    (e.strokeStyle = n[1]),
      (e.lineWidth = n[2]),
      (e.lineCap = n[3]),
      (e.lineJoin = n[4]),
      (e.miterLimit = n[5]),
      (e.lineDashOffset = n[7]),
      e.setLineDash(n[6]);
  }
  drawLabelWithPointPlacement_(e, n, i, r) {
    const s = this.textStates[n],
      o = this.createLabel(e, n, r, i),
      l = this.strokeStates[i],
      a = this.pixelRatio,
      u = Cu(Array.isArray(e) ? e[0] : e, s.textAlign || uo),
      c = ea[s.textBaseline || $l],
      h = l && l.lineWidth ? l.lineWidth : 0,
      d = o.width / a - 2 * s.scale[0],
      f = u * d + 2 * (0.5 - u) * h,
      p = (c * o.height) / a + 2 * (0.5 - c) * h;
    return { label: o, anchorX: f, anchorY: p };
  }
  execute_(e, n, i, r, s, o, l, a) {
    const u = this.zIndexContext_;
    let c;
    this.pixelCoordinates_ && Ci(i, this.renderedTransform_)
      ? (c = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (c = fi(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          i,
          this.pixelCoordinates_,
        )),
        F1(this.renderedTransform_, i));
    let h = 0;
    const d = r.length;
    let f = 0,
      p,
      y,
      E,
      m,
      g,
      _,
      v,
      w,
      C,
      S,
      x,
      R,
      M,
      F = 0,
      j = 0,
      V = null,
      Z = null;
    const K = this.coordinateCache_,
      O = this.viewRotation_,
      X = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12,
      I = {
        context: e,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: O,
      },
      A = this.instructions != r || this.overlaps ? 0 : 200;
    let P, W, b, ue;
    for (; h < d; ) {
      const L = r[h];
      switch (L[0]) {
        case z.BEGIN_GEOMETRY:
          (P = L[1]),
            (ue = L[3]),
            P.getGeometry()
              ? l !== void 0 && !lt(l, ue.getExtent())
                ? (h = L[2] + 1)
                : ++h
              : (h = L[2]),
            u && (u.zIndex = L[4]);
          break;
        case z.BEGIN_PATH:
          F > A && (this.fill_(e), (F = 0)),
            j > A && (e.stroke(), (j = 0)),
            !F && !j && (e.beginPath(), (g = NaN), (_ = NaN)),
            ++h;
          break;
        case z.CIRCLE:
          f = L[1];
          const Ce = c[f],
            fe = c[f + 1],
            it = c[f + 2],
            Xt = c[f + 3],
            rt = it - Ce,
            rs = Xt - fe,
            Si = Math.sqrt(rt * rt + rs * rs);
          e.moveTo(Ce + Si, fe), e.arc(Ce, fe, Si, 0, 2 * Math.PI, !0), ++h;
          break;
        case z.CLOSE_PATH:
          e.closePath(), ++h;
          break;
        case z.CUSTOM:
          (f = L[1]), (p = L[2]);
          const Na = L[3],
            Lo = L[4],
            ko = L[5];
          (I.geometry = Na), (I.feature = P), h in K || (K[h] = []);
          const St = K[h];
          ko
            ? ko(c, f, p, 2, St)
            : ((St[0] = c[f]), (St[1] = c[f + 1]), (St.length = 2)),
            u && (u.zIndex = L[6]),
            Lo(St, I),
            ++h;
          break;
        case z.DRAW_IMAGE:
          (f = L[1]), (p = L[2]), (C = L[3]), (y = L[4]), (E = L[5]);
          let qi = L[6];
          const Mo = L[7],
            za = L[8],
            Po = L[9],
            Ao = L[10];
          let pt = L[11];
          const jt = L[12];
          let tn = L[13];
          m = L[14] || "declutter";
          const Ut = L[15];
          if (!C && L.length >= 20) {
            (S = L[19]), (x = L[20]), (R = L[21]), (M = L[22]);
            const Tt = this.drawLabelWithPointPlacement_(S, x, R, M);
            (C = Tt.label), (L[3] = C);
            const Ti = L[23];
            (y = (Tt.anchorX - Ti) * this.pixelRatio), (L[4] = y);
            const Rt = L[24];
            (E = (Tt.anchorY - Rt) * this.pixelRatio),
              (L[5] = E),
              (qi = C.height),
              (L[6] = qi),
              (tn = C.width),
              (L[13] = tn);
          }
          let Qi;
          L.length > 25 && (Qi = L[25]);
          let Ji, Xn, _n;
          L.length > 17
            ? ((Ji = L[16]), (Xn = L[17]), (_n = L[18]))
            : ((Ji = Ni), (Xn = !1), (_n = !1)),
            Ao && X ? (pt += O) : !Ao && !X && (pt -= O);
          let Ga = 0;
          for (; f < p; f += 2) {
            if (Qi && Qi[Ga++] < tn / this.pixelRatio) continue;
            const Tt = this.calculateImageOrLabelDimensions_(
                C.width,
                C.height,
                c[f],
                c[f + 1],
                tn,
                qi,
                y,
                E,
                za,
                Po,
                pt,
                jt,
                s,
                Ji,
                Xn || _n,
                P,
              ),
              Ti = [e, n, C, Tt, Mo, Xn ? V : null, _n ? Z : null];
            if (a) {
              let Rt, nn, It;
              if (Ut) {
                const Ee = p - f;
                if (!Ut[Ee]) {
                  Ut[Ee] = { args: Ti, declutterMode: m };
                  continue;
                }
                const Qe = Ut[Ee];
                (Rt = Qe.args),
                  (nn = Qe.declutterMode),
                  delete Ut[Ee],
                  (It = mg(Rt));
              }
              let yn, vn;
              if (
                (Rt && (nn !== "declutter" || !a.collides(It)) && (yn = !0),
                (m !== "declutter" || !a.collides(Tt.declutterBox)) &&
                  (vn = !0),
                nn === "declutter" && m === "declutter")
              ) {
                const Ee = yn && vn;
                (yn = Ee), (vn = Ee);
              }
              yn &&
                (nn !== "none" && a.insert(It),
                this.replayImageOrLabel_.apply(this, Rt)),
                vn &&
                  (m !== "none" && a.insert(Tt.declutterBox),
                  this.replayImageOrLabel_.apply(this, Ti));
            } else this.replayImageOrLabel_.apply(this, Ti);
          }
          ++h;
          break;
        case z.DRAW_CHARS:
          const qe = L[1],
            fd = L[2],
            Wa = L[3],
            n0 = L[4];
          M = L[5];
          const i0 = L[6],
            gd = L[7],
            pd = L[8];
          R = L[9];
          const ba = L[10];
          (S = L[11]), (x = L[12]);
          const md = [L[13], L[13]];
          m = L[14] || "declutter";
          const Xa = this.textStates[x],
            ss = Xa.font,
            os = [Xa.scale[0] * gd, Xa.scale[1] * gd];
          let ls;
          ss in this.widths_
            ? (ls = this.widths_[ss])
            : ((ls = {}), (this.widths_[ss] = ls));
          const _d = Bv(c, qe, fd, 2),
            yd = Math.abs(os[0]) * eg(ss, S, ls);
          if (n0 || yd <= _d) {
            const Tt = this.textStates[x].textAlign,
              Ti = (_d - yd) * Cu(S, Tt),
              Rt = Ew(
                c,
                qe,
                fd,
                2,
                S,
                Ti,
                i0,
                Math.abs(os[0]),
                eg,
                ss,
                ls,
                X ? 0 : this.viewRotation_,
              );
            e: if (Rt) {
              const nn = [];
              let It, yn, vn, Ee, Qe;
              if (R)
                for (It = 0, yn = Rt.length; It < yn; ++It) {
                  (Qe = Rt[It]),
                    (vn = Qe[4]),
                    (Ee = this.createLabel(vn, x, "", R)),
                    (y = Qe[2] + (os[0] < 0 ? -ba : ba)),
                    (E =
                      Wa * Ee.height +
                      ((0.5 - Wa) * 2 * ba * os[1]) / os[0] -
                      pd);
                  const En = this.calculateImageOrLabelDimensions_(
                    Ee.width,
                    Ee.height,
                    Qe[0],
                    Qe[1],
                    Ee.width,
                    Ee.height,
                    y,
                    E,
                    0,
                    0,
                    Qe[3],
                    md,
                    !1,
                    Ni,
                    !1,
                    P,
                  );
                  if (a && m === "declutter" && a.collides(En.declutterBox))
                    break e;
                  nn.push([e, n, Ee, En, 1, null, null]);
                }
              if (M)
                for (It = 0, yn = Rt.length; It < yn; ++It) {
                  (Qe = Rt[It]),
                    (vn = Qe[4]),
                    (Ee = this.createLabel(vn, x, M, "")),
                    (y = Qe[2]),
                    (E = Wa * Ee.height - pd);
                  const En = this.calculateImageOrLabelDimensions_(
                    Ee.width,
                    Ee.height,
                    Qe[0],
                    Qe[1],
                    Ee.width,
                    Ee.height,
                    y,
                    E,
                    0,
                    0,
                    Qe[3],
                    md,
                    !1,
                    Ni,
                    !1,
                    P,
                  );
                  if (a && m === "declutter" && a.collides(En.declutterBox))
                    break e;
                  nn.push([e, n, Ee, En, 1, null, null]);
                }
              a && m !== "none" && a.load(nn.map(mg));
              for (let En = 0, r0 = nn.length; En < r0; ++En)
                this.replayImageOrLabel_.apply(this, nn[En]);
            }
          }
          ++h;
          break;
        case z.END_GEOMETRY:
          if (o !== void 0) {
            P = L[1];
            const Tt = o(P, ue);
            if (Tt) return Tt;
          }
          ++h;
          break;
        case z.FILL:
          A ? F++ : this.fill_(e), ++h;
          break;
        case z.MOVE_TO_LINE_TO:
          for (
            f = L[1],
              p = L[2],
              W = c[f],
              b = c[f + 1],
              v = (W + 0.5) | 0,
              w = (b + 0.5) | 0,
              (v !== g || w !== _) && (e.moveTo(W, b), (g = v), (_ = w)),
              f += 2;
            f < p;
            f += 2
          )
            (W = c[f]),
              (b = c[f + 1]),
              (v = (W + 0.5) | 0),
              (w = (b + 0.5) | 0),
              (f == p - 2 || v !== g || w !== _) &&
                (e.lineTo(W, b), (g = v), (_ = w));
          ++h;
          break;
        case z.SET_FILL_STYLE:
          (V = L),
            (this.alignAndScaleFill_ = L[2]),
            F && (this.fill_(e), (F = 0), j && (e.stroke(), (j = 0))),
            (e.fillStyle = L[1]),
            ++h;
          break;
        case z.SET_STROKE_STYLE:
          (Z = L), j && (e.stroke(), (j = 0)), this.setStrokeStyle_(e, L), ++h;
          break;
        case z.STROKE:
          A ? j++ : e.stroke(), ++h;
          break;
        default:
          ++h;
          break;
      }
    }
    F && this.fill_(e), j && e.stroke();
  }
  execute(e, n, i, r, s, o) {
    (this.viewRotation_ = r),
      this.execute_(e, n, i, this.instructions, s, void 0, void 0, o);
  }
  executeHitDetection(e, n, i, r, s) {
    return (
      (this.viewRotation_ = i),
      this.execute_(
        e,
        [e.canvas.width, e.canvas.height],
        n,
        this.hitDetectionInstructions,
        !0,
        r,
        s,
      )
    );
  }
}
const Gs = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"],
  z_ = ["Image", "Text"],
  Cw = Gs.filter((t) => !z_.includes(t));
class Sw {
  constructor(e, n, i, r, s, o, l) {
    (this.maxExtent_ = e),
      (this.overlaps_ = r),
      (this.pixelRatio_ = i),
      (this.resolution_ = n),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Qt()),
      (this.renderedContext_ = null),
      (this.deferredZIndexContexts_ = {}),
      this.createExecutors_(s, l);
  }
  clip(e, n) {
    const i = this.getClipCoords(n);
    e.beginPath(),
      e.moveTo(i[0], i[1]),
      e.lineTo(i[2], i[3]),
      e.lineTo(i[4], i[5]),
      e.lineTo(i[6], i[7]),
      e.clip();
  }
  createExecutors_(e, n) {
    for (const i in e) {
      let r = this.executorsByZIndex_[i];
      r === void 0 && ((r = {}), (this.executorsByZIndex_[i] = r));
      const s = e[i];
      for (const o in s) {
        const l = s[o];
        r[o] = new xw(this.resolution_, this.pixelRatio_, this.overlaps_, l, n);
      }
    }
  }
  hasExecutors(e) {
    for (const n in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[n];
      for (let r = 0, s = e.length; r < s; ++r) if (e[r] in i) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o) {
    r = Math.round(r);
    const l = r * 2 + 1,
      a = gn(
        this.hitDetectionTransform_,
        r + 0.5,
        r + 0.5,
        1 / n,
        -1 / n,
        -i,
        -e[0],
        -e[1],
      ),
      u = !this.hitDetectionContext_;
    u &&
      (this.hitDetectionContext_ = Xe(l, l, void 0, {
        willReadFrequently: !0,
      }));
    const c = this.hitDetectionContext_;
    c.canvas.width !== l || c.canvas.height !== l
      ? ((c.canvas.width = l), (c.canvas.height = l))
      : u || c.clearRect(0, 0, l, l);
    let h;
    this.renderBuffer_ !== void 0 &&
      ((h = Gt()), Ns(h, e), zh(h, n * (this.renderBuffer_ + r), h));
    const d = Tw(r);
    let f;
    function p(w, C) {
      const S = c.getImageData(0, 0, l, l).data;
      for (let x = 0, R = d.length; x < R; x++)
        if (S[d[x]] > 0) {
          if (!o || (f !== "Image" && f !== "Text") || o.includes(w)) {
            const M = (d[x] - 3) / 4,
              F = r - (M % l),
              j = r - ((M / l) | 0),
              V = s(w, C, F * F + j * j);
            if (V) return V;
          }
          c.clearRect(0, 0, l, l);
          break;
        }
    }
    const y = Object.keys(this.executorsByZIndex_).map(Number);
    y.sort(Pn);
    let E, m, g, _, v;
    for (E = y.length - 1; E >= 0; --E) {
      const w = y[E].toString();
      for (g = this.executorsByZIndex_[w], m = Gs.length - 1; m >= 0; --m)
        if (
          ((f = Gs[m]),
          (_ = g[f]),
          _ !== void 0 && ((v = _.executeHitDetection(c, a, i, p, h)), v))
        )
          return v;
    }
  }
  getClipCoords(e) {
    const n = this.maxExtent_;
    if (!n) return null;
    const i = n[0],
      r = n[1],
      s = n[2],
      o = n[3],
      l = [i, r, i, o, s, o, s, r];
    return fi(l, 0, 8, 2, e, l), l;
  }
  isEmpty() {
    return Yr(this.executorsByZIndex_);
  }
  execute(e, n, i, r, s, o, l) {
    const a = Object.keys(this.executorsByZIndex_).map(Number);
    a.sort(Pn), (o = o || Gs);
    let u, c, h, d, f, p;
    for (l && a.reverse(), u = 0, c = a.length; u < c; ++u) {
      const y = a[u].toString();
      for (f = this.executorsByZIndex_[y], h = 0, d = o.length; h < d; ++h) {
        const E = o[h];
        if (((p = f[E]), p !== void 0)) {
          const m = l === null ? void 0 : p.getZIndexContext(),
            g = m ? m.getContext() : e,
            _ = this.maxExtent_ && E !== "Image" && E !== "Text";
          if (
            (_ && (g.save(), this.clip(g, i)),
            p.execute(g, n, i, r, s, l),
            _ && g.restore(),
            m)
          ) {
            m.offset();
            const v = a[u];
            this.deferredZIndexContexts_[v] ||
              (this.deferredZIndexContexts_[v] = []),
              this.deferredZIndexContexts_[v].push(m);
          }
        }
      }
    }
    this.renderedContext_ = e;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const e = this.deferredZIndexContexts_,
      n = Object.keys(e).map(Number).sort(Pn);
    for (let i = 0, r = n.length; i < r; ++i)
      e[n[i]].forEach((s) => {
        s.draw(this.renderedContext_), s.clear();
      });
  }
}
const Su = {};
function Tw(t) {
  if (Su[t] !== void 0) return Su[t];
  const e = t * 2 + 1,
    n = t * t,
    i = new Array(n + 1);
  for (let s = 0; s <= t; ++s)
    for (let o = 0; o <= t; ++o) {
      const l = s * s + o * o;
      if (l > n) break;
      let a = i[l];
      a || ((a = []), (i[l] = a)),
        a.push(((t + s) * e + (t + o)) * 4 + 3),
        s > 0 && a.push(((t - s) * e + (t + o)) * 4 + 3),
        o > 0 &&
          (a.push(((t + s) * e + (t - o)) * 4 + 3),
          s > 0 && a.push(((t - s) * e + (t - o)) * 4 + 3));
    }
  const r = [];
  for (let s = 0, o = i.length; s < o; ++s) i[s] && r.push(...i[s]);
  return (Su[t] = r), r;
}
class Rw extends D_ {
  constructor(e, n, i, r, s, o, l) {
    super(),
      (this.context_ = e),
      (this.pixelRatio_ = n),
      (this.extent_ = i),
      (this.transform_ = r),
      (this.transformRotation_ = r ? bh(Math.atan2(r[1], r[0]), 10) : 0),
      (this.viewRotation_ = s),
      (this.squaredTolerance_ = o),
      (this.userTransform_ = l),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Qt());
  }
  drawImages_(e, n, i, r) {
    if (!this.image_) return;
    const s = fi(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_,
      l = this.tmpLocalTransform_,
      a = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = a * this.imageOpacity_);
    let u = this.imageRotation_;
    this.transformRotation_ === 0 && (u -= this.viewRotation_),
      this.imageRotateWithView_ && (u += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const d = s[c] - this.imageAnchorX_,
        f = s[c + 1] - this.imageAnchorY_;
      if (u !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const p = d + this.imageAnchorX_,
          y = f + this.imageAnchorY_;
        gn(l, p, y, 1, 1, u, -p, -y),
          o.save(),
          o.transform.apply(o, l),
          o.translate(p, y),
          o.scale(this.imageScale_[0], this.imageScale_[1]),
          o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = a);
  }
  drawText_(e, n, i, r) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const s = fi(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_;
    let l = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (l -= this.viewRotation_),
        this.textRotateWithView_ && (l += this.viewRotation_);
      n < i;
      n += r
    ) {
      const a = s[n] + this.textOffsetX_,
        u = s[n + 1] + this.textOffsetY_;
      l !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (o.save(),
          o.translate(a - this.textOffsetX_, u - this.textOffsetY_),
          o.rotate(l),
          o.translate(this.textOffsetX_, this.textOffsetY_),
          o.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && o.strokeText(this.text_, 0, 0),
          this.textFillState_ && o.fillText(this.text_, 0, 0),
          o.restore())
        : (this.textStrokeState_ && o.strokeText(this.text_, a, u),
          this.textFillState_ && o.fillText(this.text_, a, u));
    }
  }
  moveToLineTo_(e, n, i, r, s) {
    const o = this.context_,
      l = fi(e, n, i, r, this.transform_, this.pixelCoordinates_);
    o.moveTo(l[0], l[1]);
    let a = l.length;
    s && (a -= 2);
    for (let u = 2; u < a; u += 2) o.lineTo(l[u], l[u + 1]);
    return s && o.closePath(), i;
  }
  drawRings_(e, n, i, r) {
    for (let s = 0, o = i.length; s < o; ++s)
      n = this.moveToLineTo_(e, n, i[s], r, !0);
    return n;
  }
  drawCircle(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!lt(this.extent_, e.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = fv(e, this.transform_, this.pixelCoordinates_),
          i = n[2] - n[0],
          r = n[3] - n[1],
          s = Math.sqrt(i * i + r * r),
          o = this.context_;
        o.beginPath(),
          o.arc(n[0], n[1], s, 0, 2 * Math.PI),
          this.fillState_ && o.fill(),
          this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(e.getCenter(), 0, 2, 2);
    }
  }
  setStyle(e) {
    this.setFillStrokeStyle(e.getFill(), e.getStroke()),
      this.setImageStyle(e.getImage()),
      this.setTextStyle(e.getText());
  }
  setTransform(e) {
    this.transform_ = e;
  }
  drawGeometry(e) {
    switch (e.getType()) {
      case "Point":
        this.drawPoint(e);
        break;
      case "LineString":
        this.drawLineString(e);
        break;
      case "Polygon":
        this.drawPolygon(e);
        break;
      case "MultiPoint":
        this.drawMultiPoint(e);
        break;
      case "MultiLineString":
        this.drawMultiLineString(e);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(e);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(e);
        break;
      case "Circle":
        this.drawCircle(e);
        break;
    }
  }
  drawFeature(e, n) {
    const i = n.getGeometryFunction()(e);
    i && (this.setStyle(n), this.drawGeometry(i));
  }
  drawGeometryCollection(e) {
    const n = e.getGeometriesArray();
    for (let i = 0, r = n.length; i < r; ++i) this.drawGeometry(n[i]);
  }
  drawPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawMultiPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawLineString(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!lt(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getFlatCoordinates();
        n.beginPath(),
          this.moveToLineTo_(i, 0, i.length, e.getStride(), !1),
          n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatMidpoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getExtent();
    if (lt(this.extent_, n)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          r = e.getFlatCoordinates();
        let s = 0;
        const o = e.getEnds(),
          l = e.getStride();
        i.beginPath();
        for (let a = 0, u = o.length; a < u; ++a)
          s = this.moveToLineTo_(r, s, o[a], l, !1);
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = e.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  drawPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!lt(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_;
        n.beginPath(),
          this.drawRings_(
            e.getOrientedFlatCoordinates(),
            0,
            e.getEnds(),
            e.getStride(),
          ),
          this.fillState_ && n.fill(),
          this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!lt(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getOrientedFlatCoordinates();
        let r = 0;
        const s = e.getEndss(),
          o = e.getStride();
        n.beginPath();
        for (let l = 0, a = s.length; l < a; ++l) {
          const u = s[l];
          r = this.drawRings_(i, r, u, o);
        }
        this.fillState_ && n.fill(), this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoints();
        this.drawText_(n, 0, n.length, 2);
      }
    }
  }
  setContextFillState_(e) {
    const n = this.context_,
      i = this.contextFillState_;
    i
      ? i.fillStyle != e.fillStyle &&
        ((i.fillStyle = e.fillStyle), (n.fillStyle = e.fillStyle))
      : ((n.fillStyle = e.fillStyle),
        (this.contextFillState_ = { fillStyle: e.fillStyle }));
  }
  setContextStrokeState_(e) {
    const n = this.context_,
      i = this.contextStrokeState_;
    i
      ? (i.lineCap != e.lineCap &&
          ((i.lineCap = e.lineCap), (n.lineCap = e.lineCap)),
        Ci(i.lineDash, e.lineDash) || n.setLineDash((i.lineDash = e.lineDash)),
        i.lineDashOffset != e.lineDashOffset &&
          ((i.lineDashOffset = e.lineDashOffset),
          (n.lineDashOffset = e.lineDashOffset)),
        i.lineJoin != e.lineJoin &&
          ((i.lineJoin = e.lineJoin), (n.lineJoin = e.lineJoin)),
        i.lineWidth != e.lineWidth &&
          ((i.lineWidth = e.lineWidth), (n.lineWidth = e.lineWidth)),
        i.miterLimit != e.miterLimit &&
          ((i.miterLimit = e.miterLimit), (n.miterLimit = e.miterLimit)),
        i.strokeStyle != e.strokeStyle &&
          ((i.strokeStyle = e.strokeStyle), (n.strokeStyle = e.strokeStyle)))
      : ((n.lineCap = e.lineCap),
        n.setLineDash(e.lineDash),
        (n.lineDashOffset = e.lineDashOffset),
        (n.lineJoin = e.lineJoin),
        (n.lineWidth = e.lineWidth),
        (n.miterLimit = e.miterLimit),
        (n.strokeStyle = e.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: e.lineCap,
          lineDash: e.lineDash,
          lineDashOffset: e.lineDashOffset,
          lineJoin: e.lineJoin,
          lineWidth: e.lineWidth,
          miterLimit: e.miterLimit,
          strokeStyle: e.strokeStyle,
        }));
  }
  setContextTextState_(e) {
    const n = this.context_,
      i = this.contextTextState_,
      r = e.textAlign ? e.textAlign : uo;
    i
      ? (i.font != e.font && ((i.font = e.font), (n.font = e.font)),
        i.textAlign != r && ((i.textAlign = r), (n.textAlign = r)),
        i.textBaseline != e.textBaseline &&
          ((i.textBaseline = e.textBaseline),
          (n.textBaseline = e.textBaseline)))
      : ((n.font = e.font),
        (n.textAlign = r),
        (n.textBaseline = e.textBaseline),
        (this.contextTextState_ = {
          font: e.font,
          textAlign: r,
          textBaseline: e.textBaseline,
        }));
  }
  setFillStrokeStyle(e, n) {
    if (!e) this.fillState_ = null;
    else {
      const i = e.getColor();
      this.fillState_ = { fillStyle: cn(i || ot) };
    }
    if (!n) this.strokeState_ = null;
    else {
      const i = n.getColor(),
        r = n.getLineCap(),
        s = n.getLineDash(),
        o = n.getLineDashOffset(),
        l = n.getLineJoin(),
        a = n.getWidth(),
        u = n.getMiterLimit(),
        c = s || An;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : Vr,
        lineDash:
          this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || Dn) * this.pixelRatio_,
        lineJoin: l !== void 0 ? l : Kr,
        lineWidth: (a !== void 0 ? a : co) * this.pixelRatio_,
        miterLimit: u !== void 0 ? u : lo,
        strokeStyle: cn(i || ao),
      };
    }
  }
  setImageStyle(e) {
    let n;
    if (!e || !(n = e.getSize())) {
      this.image_ = null;
      return;
    }
    const i = e.getPixelRatio(this.pixelRatio_),
      r = e.getAnchor(),
      s = e.getOrigin();
    (this.image_ = e.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = r[0] * i),
      (this.imageAnchorY_ = r[1] * i),
      (this.imageHeight_ = n[1] * i),
      (this.imageOpacity_ = e.getOpacity()),
      (this.imageOriginX_ = s[0]),
      (this.imageOriginY_ = s[1]),
      (this.imageRotateWithView_ = e.getRotateWithView()),
      (this.imageRotation_ = e.getRotation());
    const o = e.getScaleArray();
    (this.imageScale_ = [
      (o[0] * this.pixelRatio_) / i,
      (o[1] * this.pixelRatio_) / i,
    ]),
      (this.imageWidth_ = n[0] * i);
  }
  setTextStyle(e) {
    if (!e) this.text_ = "";
    else {
      const n = e.getFill();
      if (!n) this.textFillState_ = null;
      else {
        const f = n.getColor();
        this.textFillState_ = { fillStyle: cn(f || ot) };
      }
      const i = e.getStroke();
      if (!i) this.textStrokeState_ = null;
      else {
        const f = i.getColor(),
          p = i.getLineCap(),
          y = i.getLineDash(),
          E = i.getLineDashOffset(),
          m = i.getLineJoin(),
          g = i.getWidth(),
          _ = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: p !== void 0 ? p : Vr,
          lineDash: y || An,
          lineDashOffset: E || Dn,
          lineJoin: m !== void 0 ? m : Kr,
          lineWidth: g !== void 0 ? g : co,
          miterLimit: _ !== void 0 ? _ : lo,
          strokeStyle: cn(f || ao),
        };
      }
      const r = e.getFont(),
        s = e.getOffsetX(),
        o = e.getOffsetY(),
        l = e.getRotateWithView(),
        a = e.getRotation(),
        u = e.getScaleArray(),
        c = e.getText(),
        h = e.getTextAlign(),
        d = e.getTextBaseline();
      (this.textState_ = {
        font: r !== void 0 ? r : y_,
        textAlign: h !== void 0 ? h : uo,
        textBaseline: d !== void 0 ? d : $l,
      }),
        (this.text_ =
          c !== void 0
            ? Array.isArray(c)
              ? c.reduce((f, p, y) => (f += y % 2 ? " " : p), "")
              : c
            : ""),
        (this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0),
        (this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textRotateWithView_ = l !== void 0 ? l : !1),
        (this.textRotation_ = a !== void 0 ? a : 0),
        (this.textScale_ = [this.pixelRatio_ * u[0], this.pixelRatio_ * u[1]]);
    }
  }
}
const an = 0.5;
function Iw(t, e, n, i, r, s, o, l, a) {
  const u = r,
    c = t[0] * an,
    h = t[1] * an,
    d = Xe(c, h);
  d.imageSmoothingEnabled = !1;
  const f = d.canvas,
    p = new Rw(d, an, r, null, o, l, null),
    y = n.length,
    E = Math.floor((256 * 256 * 256 - 1) / y),
    m = {};
  for (let _ = 1; _ <= y; ++_) {
    const v = n[_ - 1],
      w = v.getStyleFunction() || i;
    if (!w) continue;
    let C = w(v, s);
    if (!C) continue;
    Array.isArray(C) || (C = [C]);
    const x = (_ * E).toString(16).padStart(7, "#00000");
    for (let R = 0, M = C.length; R < M; ++R) {
      const F = C[R],
        j = F.getGeometryFunction()(v);
      if (!j || !lt(u, j.getExtent())) continue;
      const V = F.clone(),
        Z = V.getFill();
      Z && Z.setColor(x);
      const K = V.getStroke();
      K && (K.setColor(x), K.setLineDash(null)), V.setText(void 0);
      const O = F.getImage();
      if (O) {
        const P = O.getImageSize();
        if (!P) continue;
        const W = Xe(P[0], P[1], void 0, { alpha: !1 }),
          b = W.canvas;
        (W.fillStyle = x),
          W.fillRect(0, 0, b.width, b.height),
          V.setImage(
            new Jr({
              img: b,
              anchor: O.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: O.getOrigin(),
              opacity: 1,
              size: O.getSize(),
              scale: O.getScale(),
              rotation: O.getRotation(),
              rotateWithView: O.getRotateWithView(),
            }),
          );
      }
      const X = V.getZIndex() || 0;
      let I = m[X];
      I ||
        ((I = {}),
        (m[X] = I),
        (I.Polygon = []),
        (I.Circle = []),
        (I.LineString = []),
        (I.Point = []));
      const A = j.getType();
      if (A === "GeometryCollection") {
        const P = j.getGeometriesArrayRecursive();
        for (let W = 0, b = P.length; W < b; ++W) {
          const ue = P[W];
          I[ue.getType().replace("Multi", "")].push(ue, V);
        }
      } else I[A.replace("Multi", "")].push(j, V);
    }
  }
  const g = Object.keys(m).map(Number).sort(Pn);
  for (let _ = 0, v = g.length; _ < v; ++_) {
    const w = m[g[_]];
    for (const C in w) {
      const S = w[C];
      for (let x = 0, R = S.length; x < R; x += 2) {
        p.setStyle(S[x + 1]);
        for (let M = 0, F = e.length; M < F; ++M)
          p.setTransform(e[M]), p.drawGeometry(S[x]);
      }
    }
  }
  return d.getImageData(0, 0, f.width, f.height);
}
function Lw(t, e, n) {
  const i = [];
  if (n) {
    const r = Math.floor(Math.round(t[0]) * an),
      s = Math.floor(Math.round(t[1]) * an),
      o = (Ie(r, 0, n.width - 1) + Ie(s, 0, n.height - 1) * n.width) * 4,
      l = n.data[o],
      a = n.data[o + 1],
      c = n.data[o + 2] + 256 * (a + 256 * l),
      h = Math.floor((256 * 256 * 256 - 1) / e.length);
    c && c % h === 0 && i.push(e[c / h - 1]);
  }
  return i;
}
const kw = 0.5,
  G_ = {
    Point: zw,
    LineString: Ow,
    Polygon: Ww,
    MultiPoint: Gw,
    MultiLineString: Fw,
    MultiPolygon: Nw,
    GeometryCollection: Dw,
    Circle: Pw,
  };
function Mw(t, e) {
  return parseInt(Q(t), 10) - parseInt(Q(e), 10);
}
function yg(t, e) {
  const n = W_(t, e);
  return n * n;
}
function W_(t, e) {
  return (kw * t) / e;
}
function Pw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Circle");
    a.setFillStrokeStyle(s, o), a.drawCircle(e, i, r);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = t.getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
function vg(t, e, n, i, r, s, o, l) {
  const a = [],
    u = n.getImage();
  if (u) {
    let d = !0;
    const f = u.getImageState();
    f == $.LOADED || f == $.ERROR ? (d = !1) : f == $.IDLE && u.load(),
      d && a.push(u.ready());
  }
  const c = n.getFill();
  c && c.loading() && a.push(c.ready());
  const h = a.length > 0;
  return h && Promise.all(a).then(() => r(null)), Aw(t, e, n, i, s, o, l), h;
}
function Aw(t, e, n, i, r, s, o) {
  const l = n.getGeometryFunction()(e);
  if (!l) return;
  const a = l.simplifyTransformed(i, r);
  if (n.getRenderer()) b_(t, a, n, e, o);
  else {
    const c = G_[a.getType()];
    c(t, a, n, e, o, s);
  }
}
function b_(t, e, n, i, r) {
  if (e.getType() == "GeometryCollection") {
    const o = e.getGeometries();
    for (let l = 0, a = o.length; l < a; ++l) b_(t, o[l], n, i, r);
    return;
  }
  t.getBuilder(n.getZIndex(), "Default").drawCustom(
    e,
    i,
    n.getRenderer(),
    n.getHitDetectionRenderer(),
    r,
  );
}
function Dw(t, e, n, i, r, s) {
  const o = e.getGeometriesArray();
  let l, a;
  for (l = 0, a = o.length; l < a; ++l) {
    const u = G_[o[l].getType()];
    u(t, o[l], n, i, r, s);
  }
}
function Ow(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawLineString(e, i, r);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = t.getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i, r);
  }
}
function Fw(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawMultiLineString(e, i, r);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = t.getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i, r);
  }
}
function Nw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (o || s) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawMultiPolygon(e, i, r);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = t.getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i, r);
  }
}
function zw(t, e, n, i, r, s) {
  const o = n.getImage(),
    l = n.getText(),
    a = l && l.getText(),
    u = s && o && a ? {} : void 0;
  if (o) {
    if (o.getImageState() != $.LOADED) return;
    const c = t.getBuilder(n.getZIndex(), "Image");
    c.setImageStyle(o, u), c.drawPoint(e, i, r);
  }
  if (a) {
    const c = t.getBuilder(n.getZIndex(), "Text");
    c.setTextStyle(l, u), c.drawText(e, i, r);
  }
}
function Gw(t, e, n, i, r, s) {
  const o = n.getImage(),
    l = o && o.getOpacity() !== 0,
    a = n.getText(),
    u = a && a.getText(),
    c = s && l && u ? {} : void 0;
  if (l) {
    if (o.getImageState() != $.LOADED) return;
    const h = t.getBuilder(n.getZIndex(), "Image");
    h.setImageStyle(o, c), h.drawMultiPoint(e, i, r);
  }
  if (u) {
    const h = t.getBuilder(n.getZIndex(), "Text");
    h.setTextStyle(a, c), h.drawText(e, i, r);
  }
}
function Ww(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawPolygon(e, i, r);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = t.getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i, r);
  }
}
class bw extends N_ {
  constructor(e) {
    super(e),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Gt()),
      (this.wrappedRenderedExtent_ = Gt()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedPixelRatio_ = 1),
      (this.renderedRenderOrder_ = null),
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.clipping = !0),
      (this.targetContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(e, n, i) {
    const r = n.extent,
      s = n.viewState,
      o = s.center,
      l = s.resolution,
      a = s.projection,
      u = s.rotation,
      c = a.getExtent(),
      h = this.getLayer().getSource(),
      d = this.getLayer().getDeclutter(),
      f = n.pixelRatio,
      p = n.viewHints,
      y = !(p[Ve.ANIMATING] || p[Ve.INTERACTING]),
      E = this.context,
      m = Math.round((oe(r) / l) * f),
      g = Math.round((Ze(r) / l) * f),
      _ = h.getWrapX() && a.canWrapX(),
      v = _ ? oe(c) : null,
      w = _ ? Math.ceil((r[2] - c[2]) / v) + 1 : 1;
    let C = _ ? Math.floor((r[0] - c[0]) / v) : 0;
    do {
      const S = this.getRenderTransform(o, l, u, f, m, g, C * v);
      e.execute(
        E,
        [E.canvas.width, E.canvas.height],
        S,
        u,
        y,
        i === void 0 ? Gs : i ? z_ : Cw,
        i ? d && n.declutter[d] : void 0,
      );
    } while (++C < w);
  }
  setDrawContext_() {
    this.opacity_ !== 1 &&
      ((this.targetContext_ = this.context),
      (this.context = Xe(
        this.context.canvas.width,
        this.context.canvas.height,
        pg,
      )));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const e = this.targetContext_.globalAlpha;
      (this.targetContext_.globalAlpha = this.opacity_),
        this.targetContext_.drawImage(this.context.canvas, 0, 0),
        (this.targetContext_.globalAlpha = e),
        Ta(this.context),
        pg.push(this.context.canvas),
        (this.context = this.targetContext_),
        (this.targetContext_ = null);
    }
  }
  renderDeclutter(e) {
    !this.replayGroup_ ||
      !this.getLayer().getDeclutter() ||
      this.renderWorlds(this.replayGroup_, e, !0);
  }
  renderDeferredInternal(e) {
    this.replayGroup_ &&
      (this.replayGroup_.renderDeferred(), this.resetDrawContext_());
  }
  renderFrame(e, n) {
    const i = e.pixelRatio,
      r = e.layerStatesArray[e.layerIndex];
    this.opacity_ = r.opacity;
    const s = e.extent,
      o = e.viewState.resolution,
      l = Math.round((oe(s) / o) * i),
      a = Math.round((Ze(s) / o) * i);
    gn(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / i,
      1 / i,
      0,
      -l / 2,
      -a / 2,
    ),
      Nh(this.inversePixelTransform, this.pixelTransform);
    const u = Xm(this.pixelTransform);
    this.useContainer(n, u, this.getBackground(e));
    const c = this.context,
      h = c.canvas,
      d = this.replayGroup_;
    let f = d && !d.isEmpty();
    if (
      !f &&
      !(
        this.getLayer().hasListener(Ot.PRERENDER) ||
        this.getLayer().hasListener(Ot.POSTRENDER)
      )
    )
      return null;
    h.width != l || h.height != a
      ? ((h.width = l),
        (h.height = a),
        h.style.transform !== u && (h.style.transform = u))
      : this.containerReused || c.clearRect(0, 0, l, a),
      this.setDrawContext_(),
      this.preRender(c, e);
    const p = e.viewState;
    p.projection;
    let y = !1;
    if (f && r.extent && this.clipping) {
      const E = Oi(r.extent);
      (f = lt(E, e.extent)),
        (y = f && !Cr(E, e.extent)),
        y && this.clipUnrotated(c, e, E);
    }
    return (
      f &&
        this.renderWorlds(d, e, this.getLayer().getDeclutter() ? !1 : void 0),
      y && c.restore(),
      this.postRender(c, e),
      this.renderedRotation_ !== p.rotation &&
        ((this.renderedRotation_ = p.rotation),
        (this.hitDetectionImageData_ = null)),
      e.declutter || this.resetDrawContext_(),
      this.container
    );
  }
  getFeatures(e) {
    return new Promise((n) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        Ae(this.pixelTransform, i);
        const r = this.renderedCenter_,
          s = this.renderedResolution_,
          o = this.renderedRotation_,
          l = this.renderedProjection_,
          a = this.wrappedRenderedExtent_,
          u = this.getLayer(),
          c = [],
          h = i[0] * an,
          d = i[1] * an;
        c.push(this.getRenderTransform(r, s, o, an, h, d, 0).slice());
        const f = u.getSource(),
          p = l.getExtent();
        if (f.getWrapX() && l.canWrapX() && !Cr(p, a)) {
          let y = a[0];
          const E = oe(p);
          let m = 0,
            g;
          for (; y < p[0]; )
            --m,
              (g = E * m),
              c.push(this.getRenderTransform(r, s, o, an, h, d, g).slice()),
              (y += E);
          for (m = 0, y = a[2]; y > p[2]; )
            ++m,
              (g = E * m),
              c.push(this.getRenderTransform(r, s, o, an, h, d, g).slice()),
              (y -= E);
        }
        this.hitDetectionImageData_ = Iw(
          i,
          c,
          this.renderedFeatures_,
          u.getStyleFunction(),
          a,
          s,
          o,
          yg(s, this.renderedPixelRatio_),
        );
      }
      n(Lw(e, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {
    if (!this.replayGroup_) return;
    const o = n.viewState.resolution,
      l = n.viewState.rotation,
      a = this.getLayer(),
      u = {},
      c = function (p, y, E) {
        const m = Q(p),
          g = u[m];
        if (g) {
          if (g !== !0 && E < g.distanceSq) {
            if (E === 0)
              return (u[m] = !0), s.splice(s.lastIndexOf(g), 1), r(p, a, y);
            (g.geometry = y), (g.distanceSq = E);
          }
        } else {
          if (E === 0) return (u[m] = !0), r(p, a, y);
          s.push(
            (u[m] = {
              feature: p,
              layer: a,
              geometry: y,
              distanceSq: E,
              callback: r,
            }),
          );
        }
      };
    let h;
    const d = [this.replayGroup_],
      f = this.getLayer().getDeclutter();
    return (
      d.some(
        (p) =>
          (h = p.forEachFeatureAtCoordinate(
            e,
            o,
            l,
            i,
            c,
            f && n.declutter[f]
              ? n.declutter[f].all().map((y) => y.value)
              : null,
          )),
      ),
      h
    );
  }
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.replayGroup_ && e.changed();
  }
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(e) {
    const n = this.getLayer(),
      i = n.getSource();
    if (!i) return !1;
    const r = e.viewHints[Ve.ANIMATING],
      s = e.viewHints[Ve.INTERACTING],
      o = n.getUpdateWhileAnimating(),
      l = n.getUpdateWhileInteracting();
    if ((this.ready && !o && r) || (!l && s))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const a = e.extent,
      u = e.viewState,
      c = u.projection,
      h = u.resolution,
      d = e.pixelRatio,
      f = n.getRevision(),
      p = n.getRenderBuffer();
    let y = n.getRenderOrder();
    y === void 0 && (y = Mw);
    const E = u.center.slice(),
      m = zh(a, p * h),
      g = m.slice(),
      _ = [m.slice()],
      v = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !Cr(v, e.extent)) {
      const Z = oe(v),
        K = Math.max(oe(m) / 2, Z);
      (m[0] = v[0] - K), (m[2] = v[2] + K), $m(E, c);
      const O = Zm(_[0], c);
      O[0] < v[0] && O[2] < v[2]
        ? _.push([O[0] + Z, O[1], O[2] + Z, O[3]])
        : O[0] > v[0] &&
          O[2] > v[2] &&
          _.push([O[0] - Z, O[1], O[2] - Z, O[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == h &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == y &&
      Cr(this.wrappedRenderedExtent_, m)
    )
      return (
        Ci(this.renderedExtent_, g) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = g)),
        (this.renderedCenter_ = E),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const w = new _w(W_(h, d), m, h, d);
    let C;
    for (let Z = 0, K = _.length; Z < K; ++Z) i.loadFeatures(_[Z], h, c);
    const S = yg(h, d);
    let x = !0;
    const R = (Z, K) => {
        let O;
        const X = Z.getStyleFunction() || n.getStyleFunction();
        if ((X && (O = X(Z, h)), O)) {
          const I = this.renderFeature(
            Z,
            S,
            O,
            w,
            C,
            this.getLayer().getDeclutter(),
            K,
          );
          x = x && !I;
        }
      },
      M = e_(m),
      F = i.getFeaturesInExtent(M);
    y && F.sort(y);
    for (let Z = 0, K = F.length; Z < K; ++Z) R(F[Z], Z);
    (this.renderedFeatures_ = F), (this.ready = x);
    const j = w.finish(),
      V = new Sw(
        m,
        h,
        d,
        i.getOverlaps(),
        j,
        n.getRenderBuffer(),
        !!e.declutter,
      );
    return (
      (this.renderedResolution_ = h),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = y),
      (this.renderedExtent_ = g),
      (this.wrappedRenderedExtent_ = m),
      (this.renderedCenter_ = E),
      (this.renderedProjection_ = c),
      (this.renderedPixelRatio_ = d),
      (this.replayGroup_ = V),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(e, n, i, r, s, o, l) {
    if (!i) return !1;
    let a = !1;
    if (Array.isArray(i))
      for (let u = 0, c = i.length; u < c; ++u)
        a = vg(r, e, i[u], n, this.boundHandleStyleImageChange_, s, o, l) || a;
    else a = vg(r, e, i, n, this.boundHandleStyleImageChange_, s, o, l);
    return a;
  }
}
class bt extends A_ {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new bw(this);
  }
}
class Eg {
  constructor(e) {
    (this.rbush_ = new C_(e)), (this.items_ = {});
  }
  insert(e, n) {
    const i = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3], value: n };
    this.rbush_.insert(i), (this.items_[Q(n)] = i);
  }
  load(e, n) {
    const i = new Array(n.length);
    for (let r = 0, s = n.length; r < s; r++) {
      const o = e[r],
        l = n[r],
        a = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: l };
      (i[r] = a), (this.items_[Q(l)] = a);
    }
    this.rbush_.load(i);
  }
  remove(e) {
    const n = Q(e),
      i = this.items_[n];
    return delete this.items_[n], this.rbush_.remove(i) !== null;
  }
  update(e, n) {
    const i = this.items_[Q(n)],
      r = [i.minX, i.minY, i.maxX, i.maxY];
    io(r, e) || (this.remove(n), this.insert(e, n));
  }
  getAll() {
    return this.rbush_.all().map(function (n) {
      return n.value;
    });
  }
  getInExtent(e) {
    const n = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this.rbush_.search(n).map(function (r) {
      return r.value;
    });
  }
  forEach(e) {
    return this.forEach_(this.getAll(), e);
  }
  forEachInExtent(e, n) {
    return this.forEach_(this.getInExtent(e), n);
  }
  forEach_(e, n) {
    let i;
    for (let r = 0, s = e.length; r < s; r++) if (((i = n(e[r])), i)) return i;
    return i;
  }
  isEmpty() {
    return Yr(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(e) {
    const n = this.rbush_.toJSON();
    return _i(n.minX, n.minY, n.maxX, n.maxY, e);
  }
  concat(e) {
    this.rbush_.load(e.rbush_.all());
    for (const n in e.items_) this.items_[n] = e.items_[n];
  }
}
function Xw(t, e, n, i) {
  const r = [];
  let s = Gt();
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = Gh(t, e, a[0], i)),
      r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2),
      (e = a[a.length - 1]);
  }
  return r;
}
const wg = Qt();
class kt {
  constructor(e, n, i, r, s, o) {
    this.styleFunction,
      this.extent_,
      (this.id_ = o),
      (this.type_ = e),
      (this.flatCoordinates_ = n),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = i || null),
      (this.properties_ = s),
      this.squaredTolerance_,
      (this.stride_ = r),
      this.simplifiedGeometry_;
  }
  get(e) {
    return this.properties_[e];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? Bm(this.flatCoordinates_)
            : Gh(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const e = Ki(this.getExtent());
      this.flatInteriorPoints_ = Zh(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        e,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const e = Iv(this.flatCoordinates_, this.ends_),
        n = Xw(this.flatCoordinates_, 0, e, 2);
      this.flatInteriorPoints_ = xv(this.flatCoordinates_, 0, e, 2, n);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = $f(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const e = this.flatCoordinates_;
      let n = 0;
      const i = this.ends_;
      for (let r = 0, s = i.length; r < s; ++r) {
        const o = i[r],
          l = $f(e, n, o, 2, 0.5);
        no(this.flatMidpoints_, l), (n = o);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(e) {
    return this;
  }
  simplifyTransformed(e, n) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(e) {
    e = Wt(e);
    const n = e.getExtent(),
      i = e.getWorldExtent();
    if (n && i) {
      const r = Ze(i) / Ze(n);
      gn(wg, i[0], i[3], r, -r, 0, 0, 0),
        fi(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          wg,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(e) {
    e(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    var e;
    return new kt(
      this.type_,
      this.flatCoordinates_.slice(),
      (e = this.ends_) == null ? void 0 : e.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = bm((e, n) => {
        if (e === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          n && this.simplifiedGeometry_.applyTransform(n);
        const i = this.simplifiedGeometry_.getFlatCoordinates();
        let r;
        switch (this.type_) {
          case "LineString":
            (i.length = Kh(
              i,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              e,
              i,
              0,
            )),
              (r = [i.length]);
            break;
          case "MultiLineString":
            (r = []),
              (i.length = yv(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                e,
                i,
                0,
                r,
              ));
            break;
          case "Polygon":
            (r = []),
              (i.length = s_(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(e),
                i,
                0,
                r,
              ));
            break;
        }
        return (
          r &&
            (this.simplifiedGeometry_ = new kt(
              this.type_,
              i,
              r,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = e),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
kt.prototype.getFlatCoordinates = kt.prototype.getOrientedFlatCoordinates;
class X_ extends mn {
  constructor(e) {
    super(),
      (this.projection = Wt(e.projection)),
      (this.attributions_ = xg(e.attributions)),
      (this.attributionsCollapsible_ =
        e.attributionsCollapsible !== void 0 ? e.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = e.state !== void 0 ? e.state : "ready"),
      (this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1),
      (this.interpolate_ = !!e.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const n = this;
    this.viewPromise_ = new Promise(function (i, r) {
      (n.viewResolver = i), (n.viewRejector = r);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(e) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(e) {
    (this.attributions_ = xg(e)), this.changed();
  }
  setState(e) {
    (this.state_ = e), this.changed();
  }
}
function xg(t) {
  return t
    ? Array.isArray(t)
      ? function (e) {
          return t;
        }
      : typeof t == "function"
        ? t
        : function (e) {
            return [t];
          }
    : null;
}
const Lt = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
function jw(t, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let Uw = !1;
function Yw(t, e, n, i, r, s, o) {
  const l = new XMLHttpRequest();
  l.open("GET", typeof t == "function" ? t(n, i, r) : t, !0),
    e.getType() == "arraybuffer" && (l.responseType = "arraybuffer"),
    (l.withCredentials = Uw),
    (l.onload = function (a) {
      if (!l.status || (l.status >= 200 && l.status < 300)) {
        const u = e.getType();
        let c;
        u == "json"
          ? (c = JSON.parse(l.responseText))
          : u == "text"
            ? (c = l.responseText)
            : u == "xml"
              ? ((c = l.responseXML),
                c ||
                  (c = new DOMParser().parseFromString(
                    l.responseText,
                    "application/xml",
                  )))
              : u == "arraybuffer" && (c = l.response),
          c
            ? s(
                e.readFeatures(c, { extent: n, featureProjection: r }),
                e.readProjection(c),
              )
            : o();
      } else o();
    }),
    (l.onerror = o),
    l.send();
}
function Cg(t, e) {
  return function (n, i, r, s, o) {
    const l = this;
    Yw(
      t,
      e,
      n,
      i,
      r,
      function (a, u) {
        l.addFeatures(a), s !== void 0 && s(a);
      },
      o || Ur,
    );
  };
}
class Vn extends pn {
  constructor(e, n, i) {
    super(e), (this.feature = n), (this.features = i);
  }
}
class Da extends X_ {
  constructor(e) {
    (e = e || {}),
      super({
        attributions: e.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = Ur),
      (this.format_ = e.format),
      (this.overlaps_ = e.overlaps === void 0 ? !0 : e.overlaps),
      (this.url_ = e.url),
      e.loader !== void 0
        ? (this.loader_ = e.loader)
        : this.url_ !== void 0 &&
          (te(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = Cg(this.url_, this.format_))),
      (this.strategy_ = e.strategy !== void 0 ? e.strategy : jw);
    const n = e.useSpatialIndex !== void 0 ? e.useSpatialIndex : !0;
    (this.featuresRtree_ = n ? new Eg() : null),
      (this.loadedExtentsRtree_ = new Eg()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let i, r;
    Array.isArray(e.features)
      ? (r = e.features)
      : e.features && ((i = e.features), (r = i.getArray())),
      !n && i === void 0 && (i = new Ht(r)),
      r !== void 0 && this.addFeaturesInternal(r),
      i !== void 0 && this.bindFeaturesCollection_(i);
  }
  addFeature(e) {
    this.addFeatureInternal(e), this.changed();
  }
  addFeatureInternal(e) {
    const n = Q(e);
    if (!this.addToIndex_(n, e)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e);
      return;
    }
    this.setupChangeEvents_(n, e);
    const i = e.getGeometry();
    if (i) {
      const r = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, e);
    } else this.nullGeometryFeatures_[n] = e;
    this.dispatchEvent(new Vn(Lt.ADDFEATURE, e));
  }
  setupChangeEvents_(e, n) {
    n instanceof kt ||
      (this.featureChangeKeys_[e] = [
        ie(n, B.CHANGE, this.handleFeatureChange_, this),
        ie(n, jr.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(e, n) {
    let i = !0;
    if (n.getId() !== void 0) {
      const r = String(n.getId());
      if (!(r in this.idIndex_)) this.idIndex_[r] = n;
      else if (n instanceof kt) {
        const s = this.idIndex_[r];
        s instanceof kt
          ? Array.isArray(s)
            ? s.push(n)
            : (this.idIndex_[r] = [s, n])
          : (i = !1);
      } else i = !1;
    }
    return (
      i &&
        (te(
          !(e in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[e] = n)),
      i
    );
  }
  addFeatures(e) {
    this.addFeaturesInternal(e), this.changed();
  }
  addFeaturesInternal(e) {
    const n = [],
      i = [],
      r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const l = e[s],
        a = Q(l);
      this.addToIndex_(a, l) && i.push(l);
    }
    for (let s = 0, o = i.length; s < o; s++) {
      const l = i[s],
        a = Q(l);
      this.setupChangeEvents_(a, l);
      const u = l.getGeometry();
      if (u) {
        const c = u.getExtent();
        n.push(c), r.push(l);
      } else this.nullGeometryFeatures_[a] = l;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(n, r),
      this.hasListener(Lt.ADDFEATURE))
    )
      for (let s = 0, o = i.length; s < o; s++)
        this.dispatchEvent(new Vn(Lt.ADDFEATURE, i[s]));
  }
  bindFeaturesCollection_(e) {
    let n = !1;
    this.addEventListener(Lt.ADDFEATURE, function (i) {
      n || ((n = !0), e.push(i.feature), (n = !1));
    }),
      this.addEventListener(Lt.REMOVEFEATURE, function (i) {
        n || ((n = !0), e.remove(i.feature), (n = !1));
      }),
      e.addEventListener(Oe.ADD, (i) => {
        n || ((n = !0), this.addFeature(i.element), (n = !1));
      }),
      e.addEventListener(Oe.REMOVE, (i) => {
        n || ((n = !0), this.removeFeature(i.element), (n = !1));
      }),
      (this.featuresCollection_ = e);
  }
  clear(e) {
    if (e) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(pe);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      const i = (r) => {
        this.removeFeatureInternal(r);
      };
      this.featuresRtree_.forEach(i);
      for (const r in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[r]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const n = new Vn(Lt.CLEAR);
    this.dispatchEvent(n), this.changed();
  }
  forEachFeature(e) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  forEachFeatureAtCoordinateDirect(e, n) {
    const i = [e[0], e[1], e[0], e[1]];
    return this.forEachFeatureInExtent(i, function (r) {
      const s = r.getGeometry();
      if (s instanceof kt || s.intersectsCoordinate(e)) return n(r);
    });
  }
  forEachFeatureInExtent(e, n) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(e, n);
    this.featuresCollection_ && this.featuresCollection_.forEach(n);
  }
  forEachFeatureIntersectingExtent(e, n) {
    return this.forEachFeatureInExtent(e, function (i) {
      const r = i.getGeometry();
      if (r instanceof kt || r.intersectsExtent(e)) {
        const s = n(i);
        if (s) return s;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let e;
    return (
      this.featuresCollection_
        ? (e = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((e = this.featuresRtree_.getAll()),
          Yr(this.nullGeometryFeatures_) ||
            no(e, Object.values(this.nullGeometryFeatures_))),
      e
    );
  }
  getFeaturesAtCoordinate(e) {
    const n = [];
    return (
      this.forEachFeatureAtCoordinateDirect(e, function (i) {
        n.push(i);
      }),
      n
    );
  }
  getFeaturesInExtent(e, n) {
    if (this.featuresRtree_) {
      if (!(n && n.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e);
      const r = j1(e, n);
      return [].concat(...r.map((s) => this.featuresRtree_.getInExtent(s)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(e, n) {
    const i = e[0],
      r = e[1];
    let s = null;
    const o = [NaN, NaN];
    let l = 1 / 0;
    const a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (n = n || Vi),
      this.featuresRtree_.forEachInExtent(a, function (u) {
        if (n(u)) {
          const c = u.getGeometry(),
            h = l;
          if (
            ((l = c instanceof kt ? 0 : c.closestPointXY(i, r, o, l)), l < h)
          ) {
            s = u;
            const d = Math.sqrt(l);
            (a[0] = i - d), (a[1] = r - d), (a[2] = i + d), (a[3] = r + d);
          }
        }
      }),
      s
    );
  }
  getExtent(e) {
    return this.featuresRtree_.getExtent(e);
  }
  getFeatureById(e) {
    const n = this.idIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getFeatureByUid(e) {
    const n = this.uidIndex_[e];
    return n !== void 0 ? n : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(e) {
    const n = e.target,
      i = Q(n),
      r = n.getGeometry();
    if (!r)
      i in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(n),
        (this.nullGeometryFeatures_[i] = n));
    else {
      const o = r.getExtent();
      i in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[i],
          this.featuresRtree_ && this.featuresRtree_.insert(o, n))
        : this.featuresRtree_ && this.featuresRtree_.update(o, n);
    }
    const s = n.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== n &&
        (this.removeFromIdIndex_(n), (this.idIndex_[o] = n));
    } else this.removeFromIdIndex_(n), (this.uidIndex_[i] = n);
    this.changed(), this.dispatchEvent(new Vn(Lt.CHANGEFEATURE, n));
  }
  hasFeature(e) {
    const n = e.getId();
    return n !== void 0 ? n in this.idIndex_ : Q(e) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && Yr(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(e, n, i) {
    const r = this.loadedExtentsRtree_,
      s = this.strategy_(e, n, i);
    for (let o = 0, l = s.length; o < l; ++o) {
      const a = s[o];
      r.forEachInExtent(a, function (c) {
        return Cr(c.extent, a);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new Vn(Lt.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          a,
          n,
          i,
          (c) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Vn(Lt.FEATURESLOADEND, void 0, c));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Vn(Lt.FEATURESLOADERROR));
          },
        ),
        r.insert(a, { extent: a.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(e) {
    const n = this.loadedExtentsRtree_;
    let i;
    n.forEachInExtent(e, function (r) {
      if (io(r.extent, e)) return (i = r), !0;
    }),
      i && n.remove(i);
  }
  removeFeatures(e) {
    const n = [];
    for (let i = 0, r = e.length; i < r; ++i) {
      const s = e[i],
        o = this.removeFeatureInternal(s);
      o && n.push(o);
    }
    n.length > 0 && this.changed();
  }
  removeFeature(e) {
    if (!e) return;
    this.removeFeatureInternal(e) && this.changed();
  }
  removeFeatureInternal(e) {
    const n = Q(e);
    n in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[n]
      : this.featuresRtree_ && this.featuresRtree_.remove(e);
    const i = this.featureChangeKeys_[n];
    if (!i) return;
    i.forEach(pe), delete this.featureChangeKeys_[n];
    const r = e.getId();
    return (
      r !== void 0 && delete this.idIndex_[r.toString()],
      delete this.uidIndex_[n],
      this.hasListener(Lt.REMOVEFEATURE) &&
        this.dispatchEvent(new Vn(Lt.REMOVEFEATURE, e)),
      e
    );
  }
  removeFromIdIndex_(e) {
    let n = !1;
    for (const i in this.idIndex_) {
      const r = this.idIndex_[i];
      if (e instanceof kt && Array.isArray(r) && r.includes(e))
        r.splice(r.indexOf(e), 1);
      else if (this.idIndex_[i] === e) {
        delete this.idIndex_[i], (n = !0);
        break;
      }
    }
    return n;
  }
  setLoader(e) {
    this.loader_ = e;
  }
  setUrl(e) {
    te(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = e),
      this.setLoader(Cg(e, this.format_));
  }
}
const G = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class j_ extends _a {
  constructor(e, n, i) {
    super(),
      (i = i || {}),
      (this.tileCoord = e),
      (this.state = n),
      (this.interimTile = null),
      (this.key = ""),
      (this.transition_ = i.transition === void 0 ? 250 : i.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!i.interpolate);
  }
  changed() {
    this.dispatchEvent(B.CHANGE);
  }
  release() {
    this.state === G.ERROR && this.setState(G.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getInterimTile() {
    let e = this.interimTile;
    if (!e) return this;
    do {
      if (e.getState() == G.LOADED) return (this.transition_ = 0), e;
      e = e.interimTile;
    } while (e);
    return this;
  }
  refreshInterimChain() {
    let e = this.interimTile;
    if (!e) return;
    let n = this;
    do {
      if (e.getState() == G.LOADED) {
        e.interimTile = null;
        break;
      }
      e.getState() == G.LOADING
        ? (n = e)
        : e.getState() == G.IDLE
          ? (n.interimTile = e.interimTile)
          : (n = e),
        (e = n.interimTile);
    } while (e);
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(e) {
    if (this.state !== G.ERROR && this.state > e)
      throw new Error("Tile load sequence violation");
    (this.state = e), this.changed();
  }
  load() {
    ne();
  }
  getAlpha(e, n) {
    if (!this.transition_) return 1;
    let i = this.transitionStarts_[e];
    if (!i) (i = n), (this.transitionStarts_[e] = i);
    else if (i === -1) return 1;
    const r = n - i + 1e3 / 60;
    return r >= this.transition_ ? 1 : w_(r / this.transition_);
  }
  inTransition(e) {
    return this.transition_ ? this.transitionStarts_[e] !== -1 : !1;
  }
  endTransition(e) {
    this.transition_ && (this.transitionStarts_[e] = -1);
  }
}
class U_ extends j_ {
  constructor(e, n, i, r, s, o) {
    super(e, n, o),
      (this.crossOrigin_ = r),
      (this.src_ = i),
      (this.key = i),
      (this.image_ = new Image()),
      r !== null && (this.image_.crossOrigin = r),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = s);
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    (this.image_ = e),
      (this.state = G.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = G.ERROR),
      this.unlistenImage_(),
      (this.image_ = Bw()),
      this.changed();
  }
  handleImageLoad_() {
    const e = this.image_;
    e.naturalWidth && e.naturalHeight
      ? (this.state = G.LOADED)
      : (this.state = G.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == G.ERROR &&
      ((this.state = G.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == G.IDLE &&
        ((this.state = G.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = bv(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
}
function Bw() {
  const t = Xe(1, 1);
  return (t.fillStyle = "rgba(0,0,0,0)"), t.fillRect(0, 0, 1, 1), t.canvas;
}
class Vw {
  constructor(e, n, i) {
    (this.decay_ = e),
      (this.minVelocity_ = n),
      (this.delay_ = i),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(e, n) {
    this.points_.push(e, n, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const e = Date.now() - this.delay_,
      n = this.points_.length - 3;
    if (this.points_[n + 2] < e) return !1;
    let i = n - 3;
    for (; i > 0 && this.points_[i + 2] > e; ) i -= 3;
    const r = this.points_[n + 2] - this.points_[i + 2];
    if (r < 1e3 / 60) return !1;
    const s = this.points_[n] - this.points_[i],
      o = this.points_[n + 1] - this.points_[i + 1];
    return (
      (this.angle_ = Math.atan2(o, s)),
      (this.initialVelocity_ = Math.sqrt(s * s + o * o) / r),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class Kw extends Oh {
  constructor(e) {
    super(), (this.map_ = e);
  }
  dispatchRenderEvent(e, n) {
    ne();
  }
  calculateMatrices2D(e) {
    const n = e.viewState,
      i = e.coordinateToPixelTransform,
      r = e.pixelToCoordinateTransform;
    gn(
      i,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / n.resolution,
      -1 / n.resolution,
      -n.rotation,
      -n.center[0],
      -n.center[1],
    ),
      Nh(r, i);
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o, l, a) {
    let u;
    const c = n.viewState;
    function h(v, w, C, S) {
      return s.call(o, w, v ? C : null, S);
    }
    const d = c.projection,
      f = $m(e.slice(), d),
      p = [[0, 0]];
    if (d.canWrapX() && r) {
      const v = d.getExtent(),
        w = oe(v);
      p.push([-w, 0], [w, 0]);
    }
    const y = n.layerStatesArray,
      E = y.length,
      m = [],
      g = [];
    for (let v = 0; v < p.length; v++)
      for (let w = E - 1; w >= 0; --w) {
        const C = y[w],
          S = C.layer;
        if (S.hasRenderer() && sd(C, c) && l.call(a, S)) {
          const x = S.getRenderer(),
            R = S.getSource();
          if (x && R) {
            const M = R.getWrapX() ? f : e,
              F = h.bind(null, C.managed);
            (g[0] = M[0] + p[v][0]),
              (g[1] = M[1] + p[v][1]),
              (u = x.forEachFeatureAtCoordinate(g, n, i, F, m));
          }
          if (u) return u;
        }
      }
    if (m.length === 0) return;
    const _ = 1 / m.length;
    return (
      m.forEach((v, w) => (v.distanceSq += w * _)),
      m.sort((v, w) => v.distanceSq - w.distanceSq),
      m.some((v) => (u = v.callback(v.feature, v.layer, v.geometry))),
      u
    );
  }
  hasFeatureAtCoordinate(e, n, i, r, s, o) {
    return (
      this.forEachFeatureAtCoordinate(e, n, i, r, Vi, this, s, o) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(e) {
    ne();
  }
  scheduleExpireIconCache(e) {
    un.canExpireCache() && e.postRenderFunctions.push(Zw);
  }
}
function Zw(t, e) {
  un.expire();
}
class Hw extends Kw {
  constructor(e) {
    super(e),
      (this.fontChangeListenerKey_ = ie(
        Sn,
        jr.PROPERTYCHANGE,
        e.redrawText.bind(e),
      )),
      (this.element_ = document.createElement("div"));
    const n = this.element_.style;
    (n.position = "absolute"),
      (n.width = "100%"),
      (n.height = "100%"),
      (n.zIndex = "0"),
      (this.element_.className = Ia + " ol-layers");
    const i = e.getViewport();
    i.insertBefore(this.element_, i.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0);
  }
  dispatchRenderEvent(e, n) {
    const i = this.getMap();
    if (i.hasListener(e)) {
      const r = new O_(e, void 0, n);
      i.dispatchEvent(r);
    }
  }
  disposeInternal() {
    pe(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal();
  }
  renderFrame(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(e), this.dispatchRenderEvent(Ot.PRECOMPOSE, e);
    const n = e.layerStatesArray.sort(function (l, a) {
      return l.zIndex - a.zIndex;
    });
    n.some((l) => l.layer instanceof A_ && l.layer.getDeclutter()) &&
      (e.declutter = {});
    const r = e.viewState;
    this.children_.length = 0;
    const s = [];
    let o = null;
    for (let l = 0, a = n.length; l < a; ++l) {
      const u = n[l];
      e.layerIndex = l;
      const c = u.layer,
        h = c.getSourceState();
      if (!sd(u, r) || (h != "ready" && h != "undefined")) {
        c.unrender();
        continue;
      }
      const d = c.render(e, o);
      d && (d !== o && (this.children_.push(d), (o = d)), s.push(u));
    }
    this.declutter(e, s),
      Wv(this.element_, this.children_),
      this.dispatchRenderEvent(Ot.POSTCOMPOSE, e),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(e);
  }
  declutter(e, n) {
    for (let i = n.length - 1; i >= 0; --i) {
      const r = n[i],
        s = r.layer;
      s.getDeclutter() && s.renderDeclutter(e, r);
    }
    n.forEach((i) => i.layer.renderDeferred(e));
  }
}
class Qn extends pn {
  constructor(e, n) {
    super(e), (this.layer = n);
  }
}
const Tu = { LAYERS: "layers" };
class ns extends E_ {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.layers;
    let i = e.layers;
    super(n),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Tu.LAYERS, this.handleLayersChanged_),
      i
        ? Array.isArray(i)
          ? (i = new Ht(i.slice(), { unique: !0 }))
          : te(
              typeof i.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (i = new Ht(void 0, { unique: !0 })),
      this.setLayers(i);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(pe), (this.layersListenerKeys_.length = 0);
    const e = this.getLayers();
    this.layersListenerKeys_.push(
      ie(e, Oe.ADD, this.handleLayersAdd_, this),
      ie(e, Oe.REMOVE, this.handleLayersRemove_, this),
    );
    for (const i in this.listenerKeys_) this.listenerKeys_[i].forEach(pe);
    qr(this.listenerKeys_);
    const n = e.getArray();
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      this.registerLayerListeners_(s),
        this.dispatchEvent(new Qn("addlayer", s));
    }
    this.changed();
  }
  registerLayerListeners_(e) {
    const n = [
      ie(e, jr.PROPERTYCHANGE, this.handleLayerChange_, this),
      ie(e, B.CHANGE, this.handleLayerChange_, this),
    ];
    e instanceof ns &&
      n.push(
        ie(e, "addlayer", this.handleLayerGroupAdd_, this),
        ie(e, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[Q(e)] = n);
  }
  handleLayerGroupAdd_(e) {
    this.dispatchEvent(new Qn("addlayer", e.layer));
  }
  handleLayerGroupRemove_(e) {
    this.dispatchEvent(new Qn("removelayer", e.layer));
  }
  handleLayersAdd_(e) {
    const n = e.element;
    this.registerLayerListeners_(n),
      this.dispatchEvent(new Qn("addlayer", n)),
      this.changed();
  }
  handleLayersRemove_(e) {
    const n = e.element,
      i = Q(n);
    this.listenerKeys_[i].forEach(pe),
      delete this.listenerKeys_[i],
      this.dispatchEvent(new Qn("removelayer", n)),
      this.changed();
  }
  getLayers() {
    return this.get(Tu.LAYERS);
  }
  setLayers(e) {
    const n = this.getLayers();
    if (n) {
      const i = n.getArray();
      for (let r = 0, s = i.length; r < s; ++r)
        this.dispatchEvent(new Qn("removelayer", i[r]));
    }
    this.set(Tu.LAYERS, e);
  }
  getLayersArray(e) {
    return (
      (e = e !== void 0 ? e : []),
      this.getLayers().forEach(function (n) {
        n.getLayersArray(e);
      }),
      e
    );
  }
  getLayerStatesArray(e) {
    const n = e !== void 0 ? e : [],
      i = n.length;
    this.getLayers().forEach(function (o) {
      o.getLayerStatesArray(n);
    });
    const r = this.getLayerState();
    let s = r.zIndex;
    !e && r.zIndex === void 0 && (s = 0);
    for (let o = i, l = n.length; o < l; o++) {
      const a = n[o];
      (a.opacity *= r.opacity),
        (a.visible = a.visible && r.visible),
        (a.maxResolution = Math.min(a.maxResolution, r.maxResolution)),
        (a.minResolution = Math.max(a.minResolution, r.minResolution)),
        (a.minZoom = Math.max(a.minZoom, r.minZoom)),
        (a.maxZoom = Math.min(a.maxZoom, r.maxZoom)),
        r.extent !== void 0 &&
          (a.extent !== void 0
            ? (a.extent = zs(a.extent, r.extent))
            : (a.extent = r.extent)),
        a.zIndex === void 0 && (a.zIndex = s);
    }
    return n;
  }
  getSourceState() {
    return "ready";
  }
}
class cr extends pn {
  constructor(e, n, i) {
    super(e), (this.map = n), (this.frameState = i !== void 0 ? i : null);
  }
}
class Zn extends cr {
  constructor(e, n, i, r, s, o) {
    super(e, n, s),
      (this.originalEvent = i),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = r !== void 0 ? r : !1),
      (this.activePointers = o);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(e) {
    this.pixel_ = e;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(e) {
    this.coordinate_ = e;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const me = {
    SINGLECLICK: "singleclick",
    CLICK: B.CLICK,
    DBLCLICK: B.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  zc = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  };
class $w extends _a {
  constructor(e, n) {
    super(e),
      (this.map_ = e),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = n === void 0 ? 1 : n),
      (this.down_ = null);
    const i = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = i),
      (this.pointerdownListenerKey_ = ie(
        i,
        zc.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = ie(
        i,
        zc.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        B.TOUCHMOVE,
        this.boundHandleTouchMove_,
        m_ ? { passive: !1 } : !1,
      );
  }
  emulateClick_(e) {
    let n = new Zn(me.CLICK, this.map_, e);
    this.dispatchEvent(n),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (n = new Zn(me.DBLCLICK, this.map_, e)),
          this.dispatchEvent(n))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const i = new Zn(me.SINGLECLICK, this.map_, e);
            this.dispatchEvent(i);
          }, 250));
  }
  updateActivePointers_(e) {
    const n = e,
      i = n.pointerId;
    if (n.type == me.POINTERUP || n.type == me.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const r in this.trackedTouches_)
        if (this.trackedTouches_[r].target !== n.target) {
          delete this.trackedTouches_[r];
          break;
        }
    } else
      (n.type == me.POINTERDOWN || n.type == me.POINTERMOVE) &&
        (this.trackedTouches_[i] = n);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(e) {
    this.updateActivePointers_(e);
    const n = new Zn(
      me.POINTERUP,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(n),
      this.emulateClicks_ &&
        !n.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(e) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(pe),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(e) {
    return e.button === 0;
  }
  handlePointerDown_(e) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(e);
    const n = new Zn(
      me.POINTERDOWN,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(n),
      (this.down_ = new PointerEvent(e.type, e)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: e.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        ie(i, me.POINTERMOVE, this.handlePointerMove_, this),
        ie(i, me.POINTERUP, this.handlePointerUp_, this),
        ie(this.element_, me.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== i &&
          this.dragListenerKeys_.push(
            ie(
              this.element_.getRootNode(),
              me.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(e) {
    if (this.isMoving_(e)) {
      this.updateActivePointers_(e), (this.dragging_ = !0);
      const n = new Zn(
        me.POINTERDRAG,
        this.map_,
        e,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(n);
    }
  }
  relayMoveEvent_(e) {
    this.originalPointerMoveEvent_ = e;
    const n = !!(this.down_ && this.isMoving_(e));
    this.dispatchEvent(new Zn(me.POINTERMOVE, this.map_, e, n));
  }
  handleTouchMove_(e) {
    const n = this.originalPointerMoveEvent_;
    (!n || n.defaultPrevented) &&
      (typeof e.cancelable != "boolean" || e.cancelable === !0) &&
      e.preventDefault();
  }
  isMoving_(e) {
    return (
      this.dragging_ ||
      Math.abs(e.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(e.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (pe(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        B.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (pe(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(pe),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const Hn = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  Be = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  ta = 1 / 0;
class qw {
  constructor(e, n) {
    (this.priorityFunction_ = e),
      (this.keyFunction_ = n),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      qr(this.queuedElements_);
  }
  dequeue() {
    const e = this.elements_,
      n = this.priorities_,
      i = e[0];
    e.length == 1
      ? ((e.length = 0), (n.length = 0))
      : ((e[0] = e.pop()), (n[0] = n.pop()), this.siftUp_(0));
    const r = this.keyFunction_(i);
    return delete this.queuedElements_[r], i;
  }
  enqueue(e) {
    te(
      !(this.keyFunction_(e) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const n = this.priorityFunction_(e);
    return n != ta
      ? (this.elements_.push(e),
        this.priorities_.push(n),
        (this.queuedElements_[this.keyFunction_(e)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(e) {
    return e * 2 + 1;
  }
  getRightChildIndex_(e) {
    return e * 2 + 2;
  }
  getParentIndex_(e) {
    return (e - 1) >> 1;
  }
  heapify_() {
    let e;
    for (e = (this.elements_.length >> 1) - 1; e >= 0; e--) this.siftUp_(e);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(e) {
    return e in this.queuedElements_;
  }
  isQueued(e) {
    return this.isKeyQueued(this.keyFunction_(e));
  }
  siftUp_(e) {
    const n = this.elements_,
      i = this.priorities_,
      r = n.length,
      s = n[e],
      o = i[e],
      l = e;
    for (; e < r >> 1; ) {
      const a = this.getLeftChildIndex_(e),
        u = this.getRightChildIndex_(e),
        c = u < r && i[u] < i[a] ? u : a;
      (n[e] = n[c]), (i[e] = i[c]), (e = c);
    }
    (n[e] = s), (i[e] = o), this.siftDown_(l, e);
  }
  siftDown_(e, n) {
    const i = this.elements_,
      r = this.priorities_,
      s = i[n],
      o = r[n];
    for (; n > e; ) {
      const l = this.getParentIndex_(n);
      if (r[l] > o) (i[n] = i[l]), (r[n] = r[l]), (n = l);
      else break;
    }
    (i[n] = s), (r[n] = o);
  }
  reprioritize() {
    const e = this.priorityFunction_,
      n = this.elements_,
      i = this.priorities_;
    let r = 0;
    const s = n.length;
    let o, l, a;
    for (l = 0; l < s; ++l)
      (o = n[l]),
        (a = e(o)),
        a == ta
          ? delete this.queuedElements_[this.keyFunction_(o)]
          : ((i[r] = a), (n[r++] = o));
    (n.length = r), (i.length = r), this.heapify_();
  }
}
class Qw extends qw {
  constructor(e, n) {
    super(
      function (i) {
        return e.apply(null, i);
      },
      function (i) {
        return i[0].getKey();
      },
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = n),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(e) {
    const n = super.enqueue(e);
    return n && e[0].addEventListener(B.CHANGE, this.boundHandleTileChange_), n;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(e) {
    const n = e.target,
      i = n.getState();
    if (i === G.LOADED || i === G.ERROR || i === G.EMPTY) {
      i !== G.ERROR &&
        n.removeEventListener(B.CHANGE, this.boundHandleTileChange_);
      const r = n.getKey();
      r in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[r], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(e, n) {
    let i = 0,
      r,
      s,
      o;
    for (; this.tilesLoading_ < e && i < n && this.getCount() > 0; )
      (s = this.dequeue()[0]),
        (o = s.getKey()),
        (r = s.getState()),
        r === G.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0),
          ++this.tilesLoading_,
          ++i,
          s.load());
  }
}
function Jw(t, e, n, i, r) {
  if (!t || !(n in t.wantedTiles) || !t.wantedTiles[n][e.getKey()]) return ta;
  const s = t.viewState.center,
    o = i[0] - s[0],
    l = i[1] - s[1];
  return 65536 * Math.log(r) + Math.sqrt(o * o + l * l) / r;
}
class ld extends mn {
  constructor(e) {
    super();
    const n = e.element;
    n &&
      !e.target &&
      !n.style.pointerEvents &&
      (n.style.pointerEvents = "auto"),
      (this.element = n || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      e.render && (this.render = e.render),
      e.target && this.setTarget(e.target);
  }
  disposeInternal() {
    Ac(this.element), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(e) {
    this.map_ && Ac(this.element);
    for (let n = 0, i = this.listenerKeys.length; n < i; ++n)
      pe(this.listenerKeys[n]);
    (this.listenerKeys.length = 0),
      (this.map_ = e),
      e &&
        ((this.target_
          ? this.target_
          : e.getOverlayContainerStopEvent()
        ).appendChild(this.element),
        this.render !== Ur &&
          this.listenerKeys.push(ie(e, Hn.POSTRENDER, this.render, this)),
        e.render());
  }
  render(e) {}
  setTarget(e) {
    this.target_ = typeof e == "string" ? document.getElementById(e) : e;
  }
}
class ex extends ld {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = e.collapsed !== void 0 ? e.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = e.collapsible !== void 0),
      (this.collapsible_ = e.collapsible !== void 0 ? e.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1);
    const n = e.className !== void 0 ? e.className : "ol-attribution",
      i = e.tipLabel !== void 0 ? e.tipLabel : "Attributions",
      r = e.expandClassName !== void 0 ? e.expandClassName : n + "-expand",
      s = e.collapseLabel !== void 0 ? e.collapseLabel : "›",
      o =
        e.collapseClassName !== void 0 ? e.collapseClassName : n + "-collapse";
    typeof s == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = s),
        (this.collapseLabel_.className = o))
      : (this.collapseLabel_ = s);
    const l = e.label !== void 0 ? e.label : "i";
    typeof l == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = l),
        (this.label_.className = r))
      : (this.label_ = l);
    const a =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = i),
      this.toggleButton_.appendChild(a),
      this.toggleButton_.addEventListener(
        B.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const u =
        n +
        " " +
        Ia +
        " " +
        ed +
        (this.collapsed_ && this.collapsible_ ? " " + Qf : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      c = this.element;
    (c.className = u),
      c.appendChild(this.toggleButton_),
      c.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(e) {
    const n = Array.from(
        new Set(
          this.getMap()
            .getAllLayers()
            .flatMap((r) => r.getAttributions(e)),
        ),
      ),
      i = !this.getMap()
        .getAllLayers()
        .some(
          (r) =>
            r.getSource() && r.getSource().getAttributionsCollapsible() === !1,
        );
    return this.overrideCollapsible_ || this.setCollapsible(i), n;
  }
  async updateElement_(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const n = await Promise.all(
        this.collectSourceAttributions_(e).map((r) => P1(() => r)),
      ),
      i = n.length > 0;
    if (
      (this.renderedVisible_ != i &&
        ((this.element.style.display = i ? "" : "none"),
        (this.renderedVisible_ = i)),
      !Ci(n, this.renderedAttributions_))
    ) {
      Gv(this.ulElement_);
      for (let r = 0, s = n.length; r < s; ++r) {
        const o = document.createElement("li");
        (o.innerHTML = n[r]), this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = n;
    }
  }
  handleClick_(e) {
    e.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(Qf),
      this.collapsed_
        ? Hf(this.collapseLabel_, this.label_)
        : Hf(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(e) {
    this.collapsible_ !== e &&
      ((this.collapsible_ = e),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(e) {
    (this.userCollapsed_ = e),
      !(!this.collapsible_ || this.collapsed_ === e) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(e) {
    this.updateElement_(e.frameState);
  }
}
class tx extends ld {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      });
    const n = e.className !== void 0 ? e.className : "ol-rotate",
      i = e.label !== void 0 ? e.label : "⇧",
      r = e.compassClassName !== void 0 ? e.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof i == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = r),
          (this.label_.textContent = i))
        : ((this.label_ = i), this.label_.classList.add(r));
    const s = e.tipLabel ? e.tipLabel : "Reset rotation",
      o = document.createElement("button");
    (o.className = n + "-reset"),
      o.setAttribute("type", "button"),
      (o.title = s),
      o.appendChild(this.label_),
      o.addEventListener(B.CLICK, this.handleClick_.bind(this), !1);
    const l = n + " " + Ia + " " + ed,
      a = this.element;
    (a.className = l),
      a.appendChild(o),
      (this.callResetNorth_ = e.resetNorth ? e.resetNorth : void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.autoHide_ = e.autoHide !== void 0 ? e.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(el);
  }
  handleClick_(e) {
    e.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const n = this.getMap().getView();
    if (!n) return;
    const i = n.getRotation();
    i !== void 0 &&
      (this.duration_ > 0 && i % (2 * Math.PI) !== 0
        ? n.animate({ rotation: 0, duration: this.duration_, easing: Qr })
        : n.setRotation(0));
  }
  render(e) {
    const n = e.frameState;
    if (!n) return;
    const i = n.viewState.rotation;
    if (i != this.rotation_) {
      const r = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const s = this.element.classList.contains(el);
        !s && i === 0
          ? this.element.classList.add(el)
          : s && i !== 0 && this.element.classList.remove(el);
      }
      this.label_.style.transform = r;
    }
    this.rotation_ = i;
  }
}
class nx extends ld {
  constructor(e) {
    (e = e || {}),
      super({ element: document.createElement("div"), target: e.target });
    const n = e.className !== void 0 ? e.className : "ol-zoom",
      i = e.delta !== void 0 ? e.delta : 1,
      r = e.zoomInClassName !== void 0 ? e.zoomInClassName : n + "-in",
      s = e.zoomOutClassName !== void 0 ? e.zoomOutClassName : n + "-out",
      o = e.zoomInLabel !== void 0 ? e.zoomInLabel : "+",
      l = e.zoomOutLabel !== void 0 ? e.zoomOutLabel : "–",
      a = e.zoomInTipLabel !== void 0 ? e.zoomInTipLabel : "Zoom in",
      u = e.zoomOutTipLabel !== void 0 ? e.zoomOutTipLabel : "Zoom out",
      c = document.createElement("button");
    (c.className = r),
      c.setAttribute("type", "button"),
      (c.title = a),
      c.appendChild(typeof o == "string" ? document.createTextNode(o) : o),
      c.addEventListener(B.CLICK, this.handleClick_.bind(this, i), !1);
    const h = document.createElement("button");
    (h.className = s),
      h.setAttribute("type", "button"),
      (h.title = u),
      h.appendChild(typeof l == "string" ? document.createTextNode(l) : l),
      h.addEventListener(B.CLICK, this.handleClick_.bind(this, -i), !1);
    const d = n + " " + Ia + " " + ed,
      f = this.element;
    (f.className = d),
      f.appendChild(c),
      f.appendChild(h),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleClick_(e, n) {
    n.preventDefault(), this.zoomByDelta_(e);
  }
  zoomByDelta_(e) {
    const i = this.getMap().getView();
    if (!i) return;
    const r = i.getZoom();
    if (r !== void 0) {
      const s = i.getConstrainedZoom(r + e);
      this.duration_ > 0
        ? (i.getAnimating() && i.cancelAnimations(),
          i.animate({ zoom: s, duration: this.duration_, easing: Qr }))
        : i.setZoom(s);
    }
  }
}
function ix(t) {
  t = t || {};
  const e = new Ht();
  return (
    (t.zoom !== void 0 ? t.zoom : !0) && e.push(new nx(t.zoomOptions)),
    (t.rotate !== void 0 ? t.rotate : !0) && e.push(new tx(t.rotateOptions)),
    (t.attribution !== void 0 ? t.attribution : !0) &&
      e.push(new ex(t.attributionOptions)),
    e
  );
}
const Sg = { ACTIVE: "active" };
class is extends mn {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      e && e.handleEvent && (this.handleEvent = e.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(Sg.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(e) {
    return !0;
  }
  setActive(e) {
    this.set(Sg.ACTIVE, e);
  }
  setMap(e) {
    this.map_ = e;
  }
}
function rx(t, e, n) {
  const i = t.getCenterInternal();
  if (i) {
    const r = [i[0] + e[0], i[1] + e[1]];
    t.animateInternal({
      duration: n !== void 0 ? n : 250,
      easing: hE,
      center: t.getConstrainedCenter(r),
    });
  }
}
function ad(t, e, n, i) {
  const r = t.getZoom();
  if (r === void 0) return;
  const s = t.getConstrainedZoom(r + e),
    o = t.getResolutionForZoom(s);
  t.getAnimating() && t.cancelAnimations(),
    t.animate({
      resolution: o,
      anchor: n,
      duration: i !== void 0 ? i : 250,
      easing: Qr,
    });
}
class sx extends is {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == me.DBLCLICK) {
      const i = e.originalEvent,
        r = e.map,
        s = e.coordinate,
        o = i.shiftKey ? -this.delta_ : this.delta_,
        l = r.getView();
      ad(l, o, s, this.duration_), i.preventDefault(), (n = !0);
    }
    return !n;
  }
}
class Io extends is {
  constructor(e) {
    (e = e || {}),
      super(e),
      e.handleDownEvent && (this.handleDownEvent = e.handleDownEvent),
      e.handleDragEvent && (this.handleDragEvent = e.handleDragEvent),
      e.handleMoveEvent && (this.handleMoveEvent = e.handleMoveEvent),
      e.handleUpEvent && (this.handleUpEvent = e.handleUpEvent),
      e.stopDown && (this.stopDown = e.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(e) {
    return !1;
  }
  handleDragEvent(e) {}
  handleEvent(e) {
    if (!e.originalEvent) return !0;
    let n = !1;
    if ((this.updateTrackedPointers_(e), this.handlingDownUpSequence)) {
      if (e.type == me.POINTERDRAG)
        this.handleDragEvent(e), e.originalEvent.preventDefault();
      else if (e.type == me.POINTERUP) {
        const i = this.handleUpEvent(e);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (e.type == me.POINTERDOWN) {
      const i = this.handleDownEvent(e);
      (this.handlingDownUpSequence = i), (n = this.stopDown(i));
    } else e.type == me.POINTERMOVE && this.handleMoveEvent(e);
    return !n;
  }
  handleMoveEvent(e) {}
  handleUpEvent(e) {
    return !1;
  }
  stopDown(e) {
    return e;
  }
  updateTrackedPointers_(e) {
    e.activePointers && (this.targetPointers = e.activePointers);
  }
}
function ud(t) {
  const e = t.length;
  let n = 0,
    i = 0;
  for (let r = 0; r < e; r++) (n += t[r].clientX), (i += t[r].clientY);
  return { clientX: n / e, clientY: i / e };
}
function Gc(t) {
  const e = arguments;
  return function (n) {
    let i = !0;
    for (let r = 0, s = e.length; r < s && ((i = i && e[r](n)), !!i); ++r);
    return i;
  };
}
const ox = function (t) {
    const e = t.originalEvent;
    return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  lx = function (t) {
    const e = t.map.getTargetElement(),
      n = t.map.getOwnerDocument().activeElement;
    return e.contains(n);
  },
  Y_ = function (t) {
    return t.map.getTargetElement().hasAttribute("tabindex") ? lx(t) : !0;
  },
  ax = Vi,
  B_ = function (t) {
    const e = t.originalEvent;
    return e.button == 0 && !(zv && d_ && e.ctrlKey);
  },
  Tg = Eo,
  ux = function (t) {
    return t.type == me.SINGLECLICK;
  },
  V_ = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
  },
  cx = function (t) {
    const e = t.originalEvent;
    return d_ ? e.metaKey : e.ctrlKey;
  },
  K_ = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  Z_ = function (t) {
    const e = t.originalEvent,
      n = e.target.tagName;
    return (
      n !== "INPUT" &&
      n !== "SELECT" &&
      n !== "TEXTAREA" &&
      !e.target.isContentEditable
    );
  },
  Ru = function (t) {
    const e = t.originalEvent;
    return (
      te(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.pointerType == "mouse"
    );
  },
  hx = function (t) {
    const e = t.originalEvent;
    return (
      te(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.isPrimary && e.button === 0
    );
  };
class dx extends Io {
  constructor(e) {
    super({ stopDown: Eo }),
      (e = e || {}),
      (this.kinetic_ = e.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const n = e.condition ? e.condition : Gc(V_, hx);
    (this.condition_ = e.onFocusOnly ? Gc(Y_, n) : n), (this.noKinetic_ = !1);
  }
  handleDragEvent(e) {
    const n = e.map;
    this.panning_ || ((this.panning_ = !0), n.getView().beginInteraction());
    const i = this.targetPointers,
      r = n.getEventPixel(ud(i));
    if (i.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid)
      ) {
        const s = [this.lastCentroid[0] - r[0], r[1] - this.lastCentroid[1]],
          l = e.map.getView();
        tv(s, l.getResolution()),
          Xh(s, l.getRotation()),
          l.adjustCenterInternal(s);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = r),
      (this.lastPointersCount_ = i.length),
      e.originalEvent.preventDefault();
  }
  handleUpEvent(e) {
    const n = e.map,
      i = n.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const r = this.kinetic_.getDistance(),
          s = this.kinetic_.getAngle(),
          o = i.getCenterInternal(),
          l = n.getPixelFromCoordinateInternal(o),
          a = n.getCoordinateFromPixelInternal([
            l[0] - r * Math.cos(s),
            l[1] - r * Math.sin(s),
          ]);
        i.animateInternal({
          center: i.getConstrainedCenter(a),
          duration: 500,
          easing: Qr,
        });
      }
      return this.panning_ && ((this.panning_ = !1), i.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(e) {
    if (this.targetPointers.length > 0 && this.condition_(e)) {
      const i = e.map.getView();
      return (
        (this.lastCentroid = null),
        i.getAnimating() && i.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
class fx extends Io {
  constructor(e) {
    (e = e || {}),
      super({ stopDown: Eo }),
      (this.condition_ = e.condition ? e.condition : ox),
      (this.lastAngle_ = void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    if (!Ru(e)) return;
    const n = e.map,
      i = n.getView();
    if (i.getConstraints().rotation === rd) return;
    const r = n.getSize(),
      s = e.pixel,
      o = Math.atan2(r[1] / 2 - s[1], s[0] - r[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const l = o - this.lastAngle_;
      i.adjustRotationInternal(-l);
    }
    this.lastAngle_ = o;
  }
  handleUpEvent(e) {
    return Ru(e) ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(e) {
    return Ru(e) && B_(e) && this.condition_(e)
      ? (e.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class gx extends Oh {
  constructor(e) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + e),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const e = this.startPixel_,
      n = this.endPixel_,
      i = "px",
      r = this.element_.style;
    (r.left = Math.min(e[0], n[0]) + i),
      (r.top = Math.min(e[1], n[1]) + i),
      (r.width = Math.abs(n[0] - e[0]) + i),
      (r.height = Math.abs(n[1] - e[1]) + i);
  }
  setMap(e) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const n = this.element_.style;
      (n.left = "inherit"),
        (n.top = "inherit"),
        (n.width = "inherit"),
        (n.height = "inherit");
    }
    (this.map_ = e),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(e, n) {
    (this.startPixel_ = e),
      (this.endPixel_ = n),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    const e = this.startPixel_,
      n = this.endPixel_,
      r = [e, [e[0], n[1]], n, [n[0], e[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (r[4] = r[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([r])
        : (this.geometry_ = new yi([r]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const sl = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class Iu extends pn {
  constructor(e, n, i) {
    super(e), (this.coordinate = n), (this.mapBrowserEvent = i);
  }
}
class px extends Io {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = e || {}),
      (this.box_ = new gx(e.className || "ol-dragbox")),
      (this.minArea_ = e.minArea !== void 0 ? e.minArea : 64),
      e.onBoxEnd && (this.onBoxEnd = e.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = e.condition ? e.condition : B_),
      (this.boxEndCondition_ = e.boxEndCondition
        ? e.boxEndCondition
        : this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(e, n, i) {
    const r = i[0] - n[0],
      s = i[1] - n[1];
    return r * r + s * s >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(e) {
    this.box_.setPixels(this.startPixel_, e.pixel),
      this.dispatchEvent(new Iu(sl.BOXDRAG, e.coordinate, e));
  }
  handleUpEvent(e) {
    this.box_.setMap(null);
    const n = this.boxEndCondition_(e, this.startPixel_, e.pixel);
    return (
      n && this.onBoxEnd(e),
      this.dispatchEvent(new Iu(n ? sl.BOXEND : sl.BOXCANCEL, e.coordinate, e)),
      !1
    );
  }
  handleDownEvent(e) {
    return this.condition_(e)
      ? ((this.startPixel_ = e.pixel),
        this.box_.setMap(e.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new Iu(sl.BOXSTART, e.coordinate, e)),
        !0)
      : !1;
  }
  onBoxEnd(e) {}
}
class mx extends px {
  constructor(e) {
    e = e || {};
    const n = e.condition ? e.condition : K_;
    super({
      condition: n,
      className: e.className || "ol-dragzoom",
      minArea: e.minArea,
    }),
      (this.duration_ = e.duration !== void 0 ? e.duration : 200),
      (this.out_ = e.out !== void 0 ? e.out : !1);
  }
  onBoxEnd(e) {
    const i = this.getMap().getView();
    let r = this.getGeometry();
    if (this.out_) {
      const s = i.rotatedExtentForGeometry(r),
        o = i.getResolutionForExtentInternal(s),
        l = i.getResolution() / o;
      (r = r.clone()), r.scale(l * l);
    }
    i.fitInternal(r, { duration: this.duration_, easing: Qr });
  }
}
const Ii = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
};
class _x extends is {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.defaultCondition_ = function (n) {
        return V_(n) && Z_(n);
      }),
      (this.condition_ =
        e.condition !== void 0 ? e.condition : this.defaultCondition_),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100),
      (this.pixelDelta_ = e.pixelDelta !== void 0 ? e.pixelDelta : 128);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == B.KEYDOWN) {
      const i = e.originalEvent,
        r = i.key;
      if (
        this.condition_(e) &&
        (r == Ii.DOWN || r == Ii.LEFT || r == Ii.RIGHT || r == Ii.UP)
      ) {
        const o = e.map.getView(),
          l = o.getResolution() * this.pixelDelta_;
        let a = 0,
          u = 0;
        r == Ii.DOWN
          ? (u = -l)
          : r == Ii.LEFT
            ? (a = -l)
            : r == Ii.RIGHT
              ? (a = l)
              : (u = l);
        const c = [a, u];
        Xh(c, o.getRotation()),
          rx(o, c, this.duration_),
          i.preventDefault(),
          (n = !0);
      }
    }
    return !n;
  }
}
class yx extends is {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.condition_ = e.condition
        ? e.condition
        : function (n) {
            return !cx(n) && Z_(n);
          }),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == B.KEYDOWN || e.type == B.KEYPRESS) {
      const i = e.originalEvent,
        r = i.key;
      if (this.condition_(e) && (r === "+" || r === "-")) {
        const s = e.map,
          o = r === "+" ? this.delta_ : -this.delta_,
          l = s.getView();
        ad(l, o, void 0, this.duration_), i.preventDefault(), (n = !0);
      }
    }
    return !n;
  }
}
class vx extends is {
  constructor(e) {
    (e = e || {}),
      super(e),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = e.maxDelta !== void 0 ? e.maxDelta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.timeout_ = e.timeout !== void 0 ? e.timeout : 80),
      (this.useAnchor_ = e.useAnchor !== void 0 ? e.useAnchor : !0),
      (this.constrainResolution_ =
        e.constrainResolution !== void 0 ? e.constrainResolution : !1);
    const n = e.condition ? e.condition : ax;
    (this.condition_ = e.onFocusOnly ? Gc(Y_, n) : n),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const e = this.getMap();
    if (!e) return;
    e.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_,
    );
  }
  handleEvent(e) {
    if (!this.condition_(e) || e.type !== B.WHEEL) return !0;
    const i = e.map,
      r = e.originalEvent;
    r.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e.coordinate);
    let s;
    if (
      (e.type == B.WHEEL &&
        ((s = r.deltaY),
        Fv && r.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (s /= f_),
        r.deltaMode === WheelEvent.DOM_DELTA_LINE && (s *= 40)),
      s === 0)
    )
      return !1;
    this.lastDelta_ = s;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o),
      (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(s) < 4 ? "trackpad" : "wheel");
    const l = i.getView();
    if (
      this.mode_ === "trackpad" &&
      !(l.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (l.getAnimating() && l.cancelAnimations(), l.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        l.adjustZoom(-s / this.deltaPerZoom_, this.lastAnchor_),
        (this.startTime_ = o),
        !1
      );
    this.totalDelta_ += s;
    const a = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, i), a)),
      !1
    );
  }
  handleWheelZoom_(e) {
    const n = e.getView();
    n.getAnimating() && n.cancelAnimations();
    let i =
      -Ie(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (n.getConstrainResolution() || this.constrainResolution_) &&
      (i = i ? (i > 0 ? 1 : -1) : 0),
      ad(n, i, this.lastAnchor_, this.duration_),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(e) {
    (this.useAnchor_ = e), e || (this.lastAnchor_ = null);
  }
}
class Ex extends Io {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = Eo),
      super(n),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = e.threshold !== void 0 ? e.threshold : 0.3),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    let n = 0;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = Math.atan2(r.clientY - i.clientY, r.clientX - i.clientX);
    if (this.lastAngle_ !== void 0) {
      const a = s - this.lastAngle_;
      (this.rotationDelta_ += a),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (n = a);
    }
    this.lastAngle_ = s;
    const o = e.map,
      l = o.getView();
    l.getConstraints().rotation !== rd &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(
        o.getEventPixel(ud(this.targetPointers)),
      )),
      this.rotating_ &&
        (o.render(), l.adjustRotationInternal(n, this.anchor_)));
  }
  handleUpEvent(e) {
    return this.targetPointers.length < 2
      ? (e.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class wx extends Io {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = Eo),
      super(n),
      (this.anchor_ = null),
      (this.duration_ = e.duration !== void 0 ? e.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(e) {
    let n = 1;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = i.clientX - r.clientX,
      o = i.clientY - r.clientY,
      l = Math.sqrt(s * s + o * o);
    this.lastDistance_ !== void 0 && (n = this.lastDistance_ / l),
      (this.lastDistance_ = l);
    const a = e.map,
      u = a.getView();
    n != 1 && (this.lastScaleDelta_ = n),
      (this.anchor_ = a.getCoordinateFromPixelInternal(
        a.getEventPixel(ud(this.targetPointers)),
      )),
      a.render(),
      u.adjustResolutionInternal(n, this.anchor_);
  }
  handleUpEvent(e) {
    if (this.targetPointers.length < 2) {
      const i = e.map.getView(),
        r = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, r), !1;
    }
    return !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
function xx(t) {
  t = t || {};
  const e = new Ht(),
    n = new Vw(-0.005, 0.05, 100);
  return (
    (t.altShiftDragRotate !== void 0 ? t.altShiftDragRotate : !0) &&
      e.push(new fx()),
    (t.doubleClickZoom !== void 0 ? t.doubleClickZoom : !0) &&
      e.push(new sx({ delta: t.zoomDelta, duration: t.zoomDuration })),
    (t.dragPan !== void 0 ? t.dragPan : !0) &&
      e.push(new dx({ onFocusOnly: t.onFocusOnly, kinetic: n })),
    (t.pinchRotate !== void 0 ? t.pinchRotate : !0) && e.push(new Ex()),
    (t.pinchZoom !== void 0 ? t.pinchZoom : !0) &&
      e.push(new wx({ duration: t.zoomDuration })),
    (t.keyboard !== void 0 ? t.keyboard : !0) &&
      (e.push(new _x()),
      e.push(new yx({ delta: t.zoomDelta, duration: t.zoomDuration }))),
    (t.mouseWheelZoom !== void 0 ? t.mouseWheelZoom : !0) &&
      e.push(new vx({ onFocusOnly: t.onFocusOnly, duration: t.zoomDuration })),
    (t.shiftDragZoom !== void 0 ? t.shiftDragZoom : !0) &&
      e.push(new mx({ duration: t.zoomDuration })),
    e
  );
}
function H_(t) {
  if (t instanceof ka) {
    t.setMapInternal(null);
    return;
  }
  t instanceof ns && t.getLayers().forEach(H_);
}
function $_(t, e) {
  if (t instanceof ka) {
    t.setMapInternal(e);
    return;
  }
  if (t instanceof ns) {
    const n = t.getLayers().getArray();
    for (let i = 0, r = n.length; i < r; ++i) $_(n[i], e);
  }
}
let Cx = class extends mn {
  constructor(e) {
    super(), (e = e || {}), this.on, this.once, this.un;
    const n = Sx(e);
    this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        e.maxTilesLoading !== void 0 ? e.maxTilesLoading : 16),
      (this.pixelRatio_ = e.pixelRatio !== void 0 ? e.pixelRatio : f_),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Qt()),
      (this.pixelToCoordinateTransform_ = Qt()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = e.moveTolerance),
      (this.keyboardEventTarget_ = n.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = n.controls || ix()),
      (this.interactions = n.interactions || xx({ onFocusOnly: !0 })),
      (this.overlays_ = n.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new Qw(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(Be.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(Be.VIEW, this.handleViewChanged_),
      this.addChangeListener(Be.SIZE, this.handleSizeChanged_),
      this.addChangeListener(Be.TARGET, this.handleTargetChanged_),
      this.setProperties(n.values);
    const i = this;
    e.view &&
      !(e.view instanceof ln) &&
      e.view.then(function (r) {
        i.setView(new ln(r));
      }),
      this.controls.addEventListener(Oe.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.controls.addEventListener(Oe.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.interactions.addEventListener(Oe.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.interactions.addEventListener(Oe.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.overlays_.addEventListener(Oe.ADD, (r) => {
        this.addOverlayInternal_(r.element);
      }),
      this.overlays_.addEventListener(Oe.REMOVE, (r) => {
        const s = r.element.getId();
        s !== void 0 && delete this.overlayIdIndex_[s.toString()],
          r.element.setMap(null);
      }),
      this.controls.forEach((r) => {
        r.setMap(this);
      }),
      this.interactions.forEach((r) => {
        r.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(e) {
    this.getControls().push(e);
  }
  addInteraction(e) {
    this.getInteractions().push(e);
  }
  addLayer(e) {
    this.getLayerGroup().getLayers().push(e);
  }
  handleLayerAdd_(e) {
    $_(e.layer, this);
  }
  addOverlay(e) {
    this.getOverlays().push(e);
  }
  addOverlayInternal_(e) {
    const n = e.getId();
    n !== void 0 && (this.overlayIdIndex_[n.toString()] = e), e.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(e, n, i) {
    if (!this.frameState_ || !this.renderer_) return;
    const r = this.getCoordinateFromPixelInternal(e);
    i = i !== void 0 ? i : {};
    const s = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      o = i.layerFilter !== void 0 ? i.layerFilter : Vi,
      l = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      r,
      this.frameState_,
      s,
      l,
      n,
      null,
      o,
      null,
    );
  }
  getFeaturesAtPixel(e, n) {
    const i = [];
    return (
      this.forEachFeatureAtPixel(
        e,
        function (r) {
          i.push(r);
        },
        n,
      ),
      i
    );
  }
  getAllLayers() {
    const e = [];
    function n(i) {
      i.forEach(function (r) {
        r instanceof ns ? n(r.getLayers()) : e.push(r);
      });
    }
    return n(this.getLayers()), e;
  }
  hasFeatureAtPixel(e, n) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const i = this.getCoordinateFromPixelInternal(e);
    n = n !== void 0 ? n : {};
    const r = n.layerFilter !== void 0 ? n.layerFilter : Vi,
      s = n.hitTolerance !== void 0 ? n.hitTolerance : 0,
      o = n.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      s,
      o,
      r,
      null,
    );
  }
  getEventCoordinate(e) {
    return this.getCoordinateFromPixel(this.getEventPixel(e));
  }
  getEventCoordinateInternal(e) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e));
  }
  getEventPixel(e) {
    const i = this.viewport_.getBoundingClientRect(),
      r = this.getSize(),
      s = i.width / r[0],
      o = i.height / r[1],
      l = "changedTouches" in e ? e.changedTouches[0] : e;
    return [(l.clientX - i.left) / s, (l.clientY - i.top) / o];
  }
  getTarget() {
    return this.get(Be.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(e) {
    return Mc(
      this.getCoordinateFromPixelInternal(e),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(e) {
    const n = this.frameState_;
    return n ? Ae(n.pixelToCoordinateTransform, e.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(e) {
    const n = this.overlayIdIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(Be.LAYERGROUP);
  }
  setLayers(e) {
    const n = this.getLayerGroup();
    if (e instanceof Ht) {
      n.setLayers(e);
      return;
    }
    const i = n.getLayers();
    i.clear(), i.extend(e);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n];
      if (!r.visible) continue;
      const s = r.layer.getRenderer();
      if (s && !s.ready) return !0;
      const o = r.layer.getSource();
      if (o && o.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(e) {
    const n = Cn(e, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(n);
  }
  getPixelFromCoordinateInternal(e) {
    const n = this.frameState_;
    return n ? Ae(n.coordinateToPixelTransform, e.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(Be.SIZE);
  }
  getView() {
    return this.get(Be.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const e = this.getTargetElement();
    return e ? e.ownerDocument : document;
  }
  getTilePriority(e, n, i, r) {
    return Jw(this.frameState_, e, n, i, r);
  }
  handleBrowserEvent(e, n) {
    n = n || e.type;
    const i = new Zn(n, this, e);
    this.handleMapBrowserEvent(i);
  }
  handleMapBrowserEvent(e) {
    if (!this.frameState_) return;
    const n = e.originalEvent,
      i = n.type;
    if (i === zc.POINTERDOWN || i === B.WHEEL || i === B.KEYDOWN) {
      const r = this.getOwnerDocument(),
        s = this.viewport_.getRootNode ? this.viewport_.getRootNode() : r,
        o = n.target;
      if (
        this.overlayContainerStopEvent_.contains(o) ||
        !(s === r ? r.documentElement : s).contains(o)
      )
        return;
    }
    if (((e.frameState = this.frameState_), this.dispatchEvent(e) !== !1)) {
      const r = this.getInteractions().getArray().slice();
      for (let s = r.length - 1; s >= 0; s--) {
        const o = r[s];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(e) || e.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const e = this.frameState_,
      n = this.tileQueue_;
    if (!n.isEmpty()) {
      let r = this.maxTilesLoading_,
        s = r;
      if (e) {
        const o = e.viewHints;
        if (o[Ve.ANIMATING] || o[Ve.INTERACTING]) {
          const l = Date.now() - e.time > 8;
          (r = l ? 0 : 8), (s = l ? 0 : 2);
        }
      }
      n.getTilesLoading() < r && (n.reprioritize(), n.loadMoreTiles(r, s));
    }
    e &&
      this.renderer_ &&
      !e.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(Ot.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(Ot.RENDERCOMPLETE, e),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new cr(Hn.LOADEND, this, e))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new cr(Hn.LOADSTART, this, e))));
    const i = this.postRenderFunctions_;
    for (let r = 0, s = i.length; r < s; ++r) i[r](this, e);
    i.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, r = this.targetChangeHandlerKeys_.length; i < r; ++i)
        pe(this.targetChangeHandlerKeys_[i]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          B.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          B.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        Ac(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host),
        this.setSize(void 0);
    }
    const e = this.getTarget(),
      n = typeof e == "string" ? document.getElementById(e) : e;
    if (((this.targetElement_ = n), !n))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      n.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new Hw(this)),
        (this.mapBrowserEventHandler_ = new $w(this, this.moveTolerance_));
      for (const s in me)
        this.mapBrowserEventHandler_.addEventListener(
          me[s],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        B.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          B.WHEEL,
          this.boundHandleBrowserEvent_,
          m_ ? { passive: !1 } : !1,
        );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : n;
      this.targetChangeHandlerKeys_ = [
        ie(i, B.KEYDOWN, this.handleBrowserEvent, this),
        ie(i, B.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const r = n.getRootNode();
      r instanceof ShadowRoot && this.resizeObserver_.observe(r.host),
        this.resizeObserver_.observe(n);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (pe(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (pe(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const e = this.getView();
    e &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = ie(
        e,
        jr.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = ie(
        e,
        B.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      e.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(pe),
      (this.layerGroupPropertyListenerKeys_ = null));
    const e = this.getLayerGroup();
    e &&
      (this.handleLayerAdd_(new Qn("addlayer", e)),
      (this.layerGroupPropertyListenerKeys_ = [
        ie(e, jr.PROPERTYCHANGE, this.render, this),
        ie(e, B.CHANGE, this.render, this),
        ie(e, "addlayer", this.handleLayerAdd_, this),
        ie(e, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n].layer;
      r.hasRenderer() && r.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  removeControl(e) {
    return this.getControls().remove(e);
  }
  removeInteraction(e) {
    return this.getInteractions().remove(e);
  }
  removeLayer(e) {
    return this.getLayerGroup().getLayers().remove(e);
  }
  handleLayerRemove_(e) {
    H_(e.layer);
  }
  removeOverlay(e) {
    return this.getOverlays().remove(e);
  }
  renderFrame_(e) {
    const n = this.getSize(),
      i = this.getView(),
      r = this.frameState_;
    let s = null;
    if (n !== void 0 && qf(n) && i && i.isDef()) {
      const o = i.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        l = i.getState();
      if (
        ((s = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: Rc(l.center, l.resolution, l.rotation, n),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: n,
          tileQueue: this.tileQueue_,
          time: e,
          usedTiles: {},
          viewState: l,
          viewHints: o,
          wantedTiles: {},
          mapId: Q(this),
          renderTargets: {},
        }),
        l.nextCenter && l.nextResolution)
      ) {
        const a = isNaN(l.nextRotation) ? l.rotation : l.nextRotation;
        s.nextExtent = Rc(l.nextCenter, l.nextResolution, a, n);
      }
    }
    (this.frameState_ = s),
      this.renderer_.renderFrame(s),
      s &&
        (s.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          s.postRenderFunctions,
        ),
        r &&
          (!this.previousExtent_ ||
            (!xa(this.previousExtent_) &&
              !io(s.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new cr(Hn.MOVESTART, this, r)),
          (this.previousExtent_ = ya(this.previousExtent_))),
        this.previousExtent_ &&
          !s.viewHints[Ve.ANIMATING] &&
          !s.viewHints[Ve.INTERACTING] &&
          !io(s.extent, this.previousExtent_) &&
          (this.dispatchEvent(new cr(Hn.MOVEEND, this, s)),
          jm(s.extent, this.previousExtent_))),
      this.dispatchEvent(new cr(Hn.POSTRENDER, this, s)),
      (this.renderComplete_ =
        this.hasListener(Hn.LOADSTART) ||
        this.hasListener(Hn.LOADEND) ||
        this.hasListener(Ot.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() &&
            !this.tileQueue_.getCount() &&
            !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(e) {
    const n = this.getLayerGroup();
    n && this.handleLayerRemove_(new Qn("removelayer", n)),
      this.set(Be.LAYERGROUP, e);
  }
  setSize(e) {
    this.set(Be.SIZE, e);
  }
  setTarget(e) {
    this.set(Be.TARGET, e);
  }
  setView(e) {
    if (!e || e instanceof ln) {
      this.set(Be.VIEW, e);
      return;
    }
    this.set(Be.VIEW, new ln());
    const n = this;
    e.then(function (i) {
      n.setView(new ln(i));
    });
  }
  updateSize() {
    const e = this.getTargetElement();
    let n;
    if (e) {
      const r = getComputedStyle(e),
        s =
          e.offsetWidth -
          parseFloat(r.borderLeftWidth) -
          parseFloat(r.paddingLeft) -
          parseFloat(r.paddingRight) -
          parseFloat(r.borderRightWidth),
        o =
          e.offsetHeight -
          parseFloat(r.borderTopWidth) -
          parseFloat(r.paddingTop) -
          parseFloat(r.paddingBottom) -
          parseFloat(r.borderBottomWidth);
      !isNaN(s) &&
        !isNaN(o) &&
        ((n = [s, o]),
        !qf(n) &&
          (e.offsetWidth || e.offsetHeight || e.getClientRects().length) &&
          qm(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const i = this.getSize();
    n && (!i || !Ci(n, i)) && (this.setSize(n), this.updateViewportSize_(n));
  }
  updateViewportSize_(e) {
    const n = this.getView();
    n && n.setViewportSize(e);
  }
};
function Sx(t) {
  let e = null;
  t.keyboardEventTarget !== void 0 &&
    (e =
      typeof t.keyboardEventTarget == "string"
        ? document.getElementById(t.keyboardEventTarget)
        : t.keyboardEventTarget);
  const n = {},
    i =
      t.layers && typeof t.layers.getLayers == "function"
        ? t.layers
        : new ns({ layers: t.layers });
  (n[Be.LAYERGROUP] = i),
    (n[Be.TARGET] = t.target),
    (n[Be.VIEW] = t.view instanceof ln ? t.view : new ln());
  let r;
  t.controls !== void 0 &&
    (Array.isArray(t.controls)
      ? (r = new Ht(t.controls.slice()))
      : (te(
          typeof t.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (r = t.controls)));
  let s;
  t.interactions !== void 0 &&
    (Array.isArray(t.interactions)
      ? (s = new Ht(t.interactions.slice()))
      : (te(
          typeof t.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (s = t.interactions)));
  let o;
  return (
    t.overlays !== void 0
      ? Array.isArray(t.overlays)
        ? (o = new Ht(t.overlays.slice()))
        : (te(
            typeof t.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (o = t.overlays))
      : (o = new Ht()),
    {
      controls: r,
      interactions: s,
      keyboardEventTarget: e,
      overlays: o,
      values: n,
    }
  );
}
class Tx {
  constructor(e) {
    (this.highWaterMark = e !== void 0 ? e : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(e) {
    for (; this.canExpireCache(); ) this.pop();
  }
  clear() {
    (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  forEach(e) {
    let n = this.oldest_;
    for (; n; ) e(n.value_, n.key_, this), (n = n.newer);
  }
  get(e, n) {
    const i = this.entries_[e];
    return (
      te(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_ ||
        (i === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
        (i.newer = null),
        (i.older = this.newest_),
        (this.newest_.newer = i),
        (this.newest_ = i)),
      i.value_
    );
  }
  remove(e) {
    const n = this.entries_[e];
    return (
      te(
        n !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      n === this.newest_
        ? ((this.newest_ = n.older),
          this.newest_ && (this.newest_.newer = null))
        : n === this.oldest_
          ? ((this.oldest_ = n.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((n.newer.older = n.older), (n.older.newer = n.newer)),
      delete this.entries_[e],
      --this.count_,
      n.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.key_;
    return e;
  }
  getValues() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.value_;
    return e;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(e) {
    var n;
    return (n = this.entries_[e]) == null ? void 0 : n.value_;
  }
  pop() {
    const e = this.oldest_;
    return (
      delete this.entries_[e.key_],
      e.newer && (e.newer.older = null),
      (this.oldest_ = e.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      e.value_
    );
  }
  replace(e, n) {
    this.get(e), (this.entries_[e].value_ = n);
  }
  set(e, n) {
    te(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const i = { key_: e, newer: null, older: this.newest_, value_: n };
    this.newest_ ? (this.newest_.newer = i) : (this.oldest_ = i),
      (this.newest_ = i),
      (this.entries_[e] = i),
      ++this.count_;
  }
  setSize(e) {
    this.highWaterMark = e;
  }
}
function Rg(t, e, n, i) {
  return i !== void 0 ? ((i[0] = t), (i[1] = e), (i[2] = n), i) : [t, e, n];
}
function Oa(t, e, n) {
  return t + "/" + e + "/" + n;
}
function q_(t) {
  return Oa(t[0], t[1], t[2]);
}
function Rx(t) {
  return t.split("/").map(Number);
}
function Ix(t) {
  return (t[1] << t[0]) + t[2];
}
function Lx(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2];
  if (e.getMinZoom() > n || n > e.getMaxZoom()) return !1;
  const s = e.getFullTileRange(n);
  return s ? s.containsXY(i, r) : !0;
}
class Q_ extends Tx {
  clear() {
    for (; this.getCount() > 0; ) this.pop().release();
    super.clear();
  }
  expireCache(e) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e); )
      this.pop().release();
  }
  pruneExceptNewestZ() {
    if (this.getCount() === 0) return;
    const e = this.peekFirstKey(),
      i = Rx(e)[0];
    this.forEach((r) => {
      r.tileCoord[0] !== i && (this.remove(q_(r.tileCoord)), r.release());
    });
  }
}
class cd {
  constructor(e, n, i, r) {
    (this.minX = e), (this.maxX = n), (this.minY = i), (this.maxY = r);
  }
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  containsTileRange(e) {
    return (
      this.minX <= e.minX &&
      e.maxX <= this.maxX &&
      this.minY <= e.minY &&
      e.maxY <= this.maxY
    );
  }
  containsXY(e, n) {
    return this.minX <= e && e <= this.maxX && this.minY <= n && n <= this.maxY;
  }
  equals(e) {
    return (
      this.minX == e.minX &&
      this.minY == e.minY &&
      this.maxX == e.maxX &&
      this.maxY == e.maxY
    );
  }
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX),
      e.maxX > this.maxX && (this.maxX = e.maxX),
      e.minY < this.minY && (this.minY = e.minY),
      e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(e) {
    return (
      this.minX <= e.maxX &&
      this.maxX >= e.minX &&
      this.minY <= e.maxY &&
      this.maxY >= e.minY
    );
  }
}
function rr(t, e, n, i, r) {
  return r !== void 0
    ? ((r.minX = t), (r.maxX = e), (r.minY = n), (r.maxY = i), r)
    : new cd(t, e, n, i);
}
const ol = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class kx extends ka {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.preload,
      delete n.useInterimTilesOnError,
      super(n),
      this.on,
      this.once,
      this.un,
      this.setPreload(e.preload !== void 0 ? e.preload : 0),
      this.setUseInterimTilesOnError(
        e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0,
      );
  }
  getPreload() {
    return this.get(ol.PRELOAD);
  }
  setPreload(e) {
    this.set(ol.PRELOAD, e);
  }
  getUseInterimTilesOnError() {
    return this.get(ol.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(e) {
    this.set(ol.USE_INTERIM_TILES_ON_ERROR, e);
  }
  getData(e) {
    return super.getData(e);
  }
}
const Mx = 0.5,
  Px = 10,
  Ig = 0.25;
class Ax {
  constructor(e, n, i, r, s, o) {
    (this.sourceProj_ = e), (this.targetProj_ = n);
    let l = {};
    const a = Zl(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (g) {
      const _ = g[0] + "/" + g[1];
      return l[_] || (l[_] = a(g)), l[_];
    }),
      (this.maxSourceExtent_ = r),
      (this.errorThresholdSquared_ = s * s),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!r &&
        !!this.sourceProj_.getExtent() &&
        oe(r) >= oe(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? oe(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? oe(this.targetProj_.getExtent())
        : null);
    const u = $i(i),
      c = wa(i),
      h = Ea(i),
      d = va(i),
      f = this.transformInv_(u),
      p = this.transformInv_(c),
      y = this.transformInv_(h),
      E = this.transformInv_(d),
      m =
        Px +
        (o
          ? Math.max(0, Math.ceil(Math.log2(Tc(i) / (o * o * 256 * 256))))
          : 0);
    if ((this.addQuad_(u, c, h, d, f, p, y, E, m), this.wrapsXInSource_)) {
      let g = 1 / 0;
      this.triangles_.forEach(function (_, v, w) {
        g = Math.min(g, _.source[0][0], _.source[1][0], _.source[2][0]);
      }),
        this.triangles_.forEach((_) => {
          if (
            Math.max(_.source[0][0], _.source[1][0], _.source[2][0]) - g >
            this.sourceWorldWidth_ / 2
          ) {
            const v = [
              [_.source[0][0], _.source[0][1]],
              [_.source[1][0], _.source[1][1]],
              [_.source[2][0], _.source[2][1]],
            ];
            v[0][0] - g > this.sourceWorldWidth_ / 2 &&
              (v[0][0] -= this.sourceWorldWidth_),
              v[1][0] - g > this.sourceWorldWidth_ / 2 &&
                (v[1][0] -= this.sourceWorldWidth_),
              v[2][0] - g > this.sourceWorldWidth_ / 2 &&
                (v[2][0] -= this.sourceWorldWidth_);
            const w = Math.min(v[0][0], v[1][0], v[2][0]);
            Math.max(v[0][0], v[1][0], v[2][0]) - w <
              this.sourceWorldWidth_ / 2 && (_.source = v);
          }
        });
    }
    l = {};
  }
  addTriangle_(e, n, i, r, s, o) {
    this.triangles_.push({ source: [r, s, o], target: [e, n, i] });
  }
  addQuad_(e, n, i, r, s, o, l, a, u) {
    const c = Df([s, o, l, a]),
      h = this.sourceWorldWidth_ ? oe(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && h > 0.5 && h < 1;
    let p = !1;
    if (u > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const E = Df([e, n, i, r]);
        p = oe(E) / this.targetWorldWidth_ > Ig || p;
      }
      !f && this.sourceProj_.isGlobal() && h && (p = h > Ig || p);
    }
    if (
      !p &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !lt(c, this.maxSourceExtent_)
    )
      return;
    let y = 0;
    if (
      !p &&
      (!isFinite(s[0]) ||
        !isFinite(s[1]) ||
        !isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(l[0]) ||
        !isFinite(l[1]) ||
        !isFinite(a[0]) ||
        !isFinite(a[1]))
    ) {
      if (u > 0) p = !0;
      else if (
        ((y =
          (!isFinite(s[0]) || !isFinite(s[1]) ? 8 : 0) +
          (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) +
          (!isFinite(l[0]) || !isFinite(l[1]) ? 2 : 0) +
          (!isFinite(a[0]) || !isFinite(a[1]) ? 1 : 0)),
        y != 1 && y != 2 && y != 4 && y != 8)
      )
        return;
    }
    if (u > 0) {
      if (!p) {
        const E = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
          m = this.transformInv_(E);
        let g;
        f
          ? (g = (bi(s[0], d) + bi(l[0], d)) / 2 - bi(m[0], d))
          : (g = (s[0] + l[0]) / 2 - m[0]);
        const _ = (s[1] + l[1]) / 2 - m[1];
        p = g * g + _ * _ > this.errorThresholdSquared_;
      }
      if (p) {
        if (Math.abs(e[0] - i[0]) <= Math.abs(e[1] - i[1])) {
          const E = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
            m = this.transformInv_(E),
            g = [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2],
            _ = this.transformInv_(g);
          this.addQuad_(e, n, E, g, s, o, m, _, u - 1),
            this.addQuad_(g, E, i, r, _, m, l, a, u - 1);
        } else {
          const E = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
            m = this.transformInv_(E),
            g = [(i[0] + r[0]) / 2, (i[1] + r[1]) / 2],
            _ = this.transformInv_(g);
          this.addQuad_(e, E, g, r, s, m, _, a, u - 1),
            this.addQuad_(E, n, i, g, m, o, l, _, u - 1);
        }
        return;
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    y & 11 || this.addTriangle_(e, i, r, s, l, a),
      y & 14 || this.addTriangle_(e, i, n, s, l, o),
      y &&
        (y & 13 || this.addTriangle_(n, r, e, o, a, s),
        y & 7 || this.addTriangle_(n, r, i, o, a, l));
  }
  calculateSourceExtent() {
    const e = Gt();
    return (
      this.triangles_.forEach(function (n, i, r) {
        const s = n.source;
        Ns(e, s[0]), Ns(e, s[1]), Ns(e, s[2]);
      }),
      e
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
let Lu;
const Or = [];
function Lg(t, e, n, i, r) {
  t.beginPath(),
    t.moveTo(0, 0),
    t.lineTo(e, n),
    t.lineTo(i, r),
    t.closePath(),
    t.save(),
    t.clip(),
    t.fillRect(0, 0, Math.max(e, i) + 1, Math.max(n, r)),
    t.restore();
}
function ku(t, e) {
  return (
    Math.abs(t[e * 4] - 210) > 2 || Math.abs(t[e * 4 + 3] - 0.75 * 255) > 2
  );
}
function Dx() {
  if (Lu === void 0) {
    const t = Xe(6, 6, Or);
    (t.globalCompositeOperation = "lighter"),
      (t.fillStyle = "rgba(210, 0, 0, 0.75)"),
      Lg(t, 4, 5, 4, 0),
      Lg(t, 4, 5, 0, 5);
    const e = t.getImageData(0, 0, 3, 3).data;
    (Lu = ku(e, 0) || ku(e, 4) || ku(e, 8)), Ta(t), Or.push(t.canvas);
  }
  return Lu;
}
function kg(t, e, n, i) {
  const r = Bh(n, e, t);
  let s = Gf(e, i, n);
  const o = e.getMetersPerUnit();
  o !== void 0 && (s *= o);
  const l = t.getMetersPerUnit();
  l !== void 0 && (s /= l);
  const a = t.getExtent();
  if (!a || Br(a, r)) {
    const u = Gf(t, s, r) / s;
    isFinite(u) && u > 0 && (s /= u);
  }
  return s;
}
function Ox(t, e, n, i) {
  const r = Ki(n);
  let s = kg(t, e, r, i);
  return (
    (!isFinite(s) || s <= 0) &&
      Km(n, function (o) {
        return (s = kg(t, e, o, i)), isFinite(s) && s > 0;
      }),
    s
  );
}
function Fx(t, e, n, i, r, s, o, l, a, u, c, h, d, f) {
  const p = Xe(Math.round(n * t), Math.round(n * e), Or);
  if ((h || (p.imageSmoothingEnabled = !1), a.length === 0)) return p.canvas;
  p.scale(n, n);
  function y(w) {
    return Math.round(w * n) / n;
  }
  p.globalCompositeOperation = "lighter";
  const E = Gt();
  a.forEach(function (w, C, S) {
    z1(E, w.extent);
  });
  let m;
  const g = n / i,
    _ = (h ? 1 : 1 + Math.pow(2, -24)) / g;
  {
    if (
      ((m = Xe(Math.round(oe(E) * g), Math.round(Ze(E) * g), Or)),
      h || (m.imageSmoothingEnabled = !1),
      r && f)
    ) {
      const w = (r[0] - E[0]) * g,
        C = -(r[3] - E[3]) * g,
        S = oe(r) * g,
        x = Ze(r) * g;
      m.rect(w, C, S, x), m.clip();
    }
    a.forEach(function (w, C, S) {
      const x = (w.extent[0] - E[0]) * g,
        R = -(w.extent[3] - E[3]) * g,
        M = oe(w.extent) * g,
        F = Ze(w.extent) * g;
      w.image.width > 0 &&
        w.image.height > 0 &&
        m.drawImage(
          w.image,
          u,
          u,
          w.image.width - 2 * u,
          w.image.height - 2 * u,
          h ? x : Math.round(x),
          h ? R : Math.round(R),
          h ? M : Math.round(x + M) - Math.round(x),
          h ? F : Math.round(R + F) - Math.round(R),
        );
    });
  }
  const v = $i(o);
  return (
    l.getTriangles().forEach(function (w, C, S) {
      const x = w.source,
        R = w.target;
      let M = x[0][0],
        F = x[0][1],
        j = x[1][0],
        V = x[1][1],
        Z = x[2][0],
        K = x[2][1];
      const O = y((R[0][0] - v[0]) / s),
        X = y(-(R[0][1] - v[1]) / s),
        I = y((R[1][0] - v[0]) / s),
        A = y(-(R[1][1] - v[1]) / s),
        P = y((R[2][0] - v[0]) / s),
        W = y(-(R[2][1] - v[1]) / s),
        b = M,
        ue = F;
      (M = 0), (F = 0), (j -= b), (V -= ue), (Z -= b), (K -= ue);
      const L = [
          [j, V, 0, 0, I - O],
          [Z, K, 0, 0, P - O],
          [0, 0, j, V, A - X],
          [0, 0, Z, K, W - X],
        ],
        ae = J1(L);
      if (!ae) return;
      if ((p.save(), p.beginPath(), Dx() || !h)) {
        p.moveTo(I, A);
        const fe = 4,
          it = O - I,
          Xt = X - A;
        for (let rt = 0; rt < fe; rt++)
          p.lineTo(I + y(((rt + 1) * it) / fe), A + y((rt * Xt) / (fe - 1))),
            rt != fe - 1 &&
              p.lineTo(
                I + y(((rt + 1) * it) / fe),
                A + y(((rt + 1) * Xt) / (fe - 1)),
              );
        p.lineTo(P, W);
      } else p.moveTo(I, A), p.lineTo(O, X), p.lineTo(P, W);
      p.clip(),
        p.transform(ae[0], ae[2], ae[1], ae[3], O, X),
        p.translate(E[0] - b, E[3] - ue);
      let Ce;
      if (m) (Ce = m.canvas), p.scale(_, -_);
      else {
        const fe = a[0],
          it = fe.extent;
        (Ce = fe.image), p.scale(oe(it) / Ce.width, -Ze(it) / Ce.height);
      }
      p.drawImage(Ce, 0, 0), p.restore();
    }),
    m && (Ta(m), Or.push(m.canvas)),
    c &&
      (p.save(),
      (p.globalCompositeOperation = "source-over"),
      (p.strokeStyle = "black"),
      (p.lineWidth = 1),
      l.getTriangles().forEach(function (w, C, S) {
        const x = w.target,
          R = (x[0][0] - v[0]) / s,
          M = -(x[0][1] - v[1]) / s,
          F = (x[1][0] - v[0]) / s,
          j = -(x[1][1] - v[1]) / s,
          V = (x[2][0] - v[0]) / s,
          Z = -(x[2][1] - v[1]) / s;
        p.beginPath(),
          p.moveTo(F, j),
          p.lineTo(R, M),
          p.lineTo(V, Z),
          p.closePath(),
          p.stroke();
      }),
      p.restore()),
    p.canvas
  );
}
class Wc extends j_ {
  constructor(e, n, i, r, s, o, l, a, u, c, h, d) {
    super(s, G.IDLE, d),
      (this.renderEdges_ = h !== void 0 ? h : !1),
      (this.pixelRatio_ = l),
      (this.gutter_ = a),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = n),
      (this.targetTileGrid_ = r),
      (this.wrappedTileCoord_ = o || s),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0);
    const f = r.getTileCoordExtent(this.wrappedTileCoord_),
      p = this.targetTileGrid_.getExtent();
    let y = this.sourceTileGrid_.getExtent();
    const E = p ? zs(f, p) : f;
    if (Tc(E) === 0) {
      this.state = G.EMPTY;
      return;
    }
    const m = e.getExtent();
    m && (y ? (y = zs(y, m)) : (y = m));
    const g = r.getResolution(this.wrappedTileCoord_[0]),
      _ = Ox(e, i, E, g);
    if (!isFinite(_) || _ <= 0) {
      this.state = G.EMPTY;
      return;
    }
    const v = c !== void 0 ? c : Mx;
    if (
      ((this.triangulation_ = new Ax(e, i, E, y, _ * v, g)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = G.EMPTY;
      return;
    }
    this.sourceZ_ = n.getZForResolution(_);
    let w = this.triangulation_.calculateSourceExtent();
    if (
      (y &&
        (e.canWrapX()
          ? ((w[1] = Ie(w[1], y[1], y[3])), (w[3] = Ie(w[3], y[1], y[3])))
          : (w = zs(w, y))),
      !Tc(w))
    )
      this.state = G.EMPTY;
    else {
      const C = n.getTileRangeForExtentAndZ(w, this.sourceZ_);
      for (let S = C.minX; S <= C.maxX; S++)
        for (let x = C.minY; x <= C.maxY; x++) {
          const R = u(this.sourceZ_, S, x, l);
          R && this.sourceTiles_.push(R);
        }
      this.sourceTiles_.length === 0 && (this.state = G.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const e = [];
    if (
      (this.sourceTiles_.forEach((n) => {
        n &&
          n.getState() == G.LOADED &&
          e.push({
            extent: this.sourceTileGrid_.getTileCoordExtent(n.tileCoord),
            image: n.getImage(),
          });
      }),
      (this.sourceTiles_.length = 0),
      e.length === 0)
    )
      this.state = G.ERROR;
    else {
      const n = this.wrappedTileCoord_[0],
        i = this.targetTileGrid_.getTileSize(n),
        r = typeof i == "number" ? i : i[0],
        s = typeof i == "number" ? i : i[1],
        o = this.targetTileGrid_.getResolution(n),
        l = this.sourceTileGrid_.getResolution(this.sourceZ_),
        a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = Fx(
        r,
        s,
        this.pixelRatio_,
        l,
        this.sourceTileGrid_.getExtent(),
        o,
        a,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = G.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == G.IDLE) {
      (this.state = G.LOADING), this.changed();
      let e = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach((n) => {
          const i = n.getState();
          if (i == G.IDLE || i == G.LOADING) {
            e++;
            const r = ie(
              n,
              B.CHANGE,
              function (s) {
                const o = n.getState();
                (o == G.LOADED || o == G.ERROR || o == G.EMPTY) &&
                  (pe(r),
                  e--,
                  e === 0 && (this.unlistenSources_(), this.reproject_()));
              },
              this,
            );
            this.sourcesListenerKeys_.push(r);
          }
        }),
        e === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (n, i, r) {
              n.getState() == G.IDLE && n.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(pe), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (Ta(this.canvas_.getContext("2d")),
      Or.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class Nx extends N_ {
  constructor(e) {
    super(e),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = Gt()),
      (this.tmpTileRange_ = new cd(0, 0, 0, 0));
  }
  isDrawableTile(e) {
    const n = this.getLayer(),
      i = e.getState(),
      r = n.getUseInterimTilesOnError();
    return i == G.LOADED || i == G.EMPTY || (i == G.ERROR && !r);
  }
  getTile(e, n, i, r) {
    const s = r.pixelRatio,
      o = r.viewState.projection,
      l = this.getLayer();
    let u = l.getSource().getTile(e, n, i, s, o);
    return (
      u.getState() == G.ERROR &&
        l.getUseInterimTilesOnError() &&
        l.getPreload() > 0 &&
        (this.newTiles_ = !0),
      this.isDrawableTile(u) || (u = u.getInterimTile()),
      u
    );
  }
  getData(e) {
    const n = this.frameState;
    if (!n) return null;
    const i = this.getLayer(),
      r = Ae(n.pixelToCoordinateTransform, e.slice()),
      s = i.getExtent();
    if (s && !Br(s, r)) return null;
    const o = n.pixelRatio,
      l = n.viewState.projection,
      a = n.viewState,
      u = i.getRenderSource(),
      c = u.getTileGridForProjection(a.projection),
      h = u.getTilePixelRatio(n.pixelRatio);
    for (let d = c.getZForResolution(a.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(r, d),
        p = u.getTile(d, f[1], f[2], o, l);
      if (
        !(p instanceof U_ || p instanceof Wc) ||
        (p instanceof Wc && p.getState() === G.EMPTY)
      )
        return null;
      if (p.getState() !== G.LOADED) continue;
      const y = c.getOrigin(d),
        E = vt(c.getTileSize(d)),
        m = c.getResolution(d),
        g = Math.floor(h * ((r[0] - y[0]) / m - f[1] * E[0])),
        _ = Math.floor(h * ((y[1] - r[1]) / m - f[2] * E[1])),
        v = Math.round(h * u.getGutterForProjection(a.projection));
      return this.getImageData(p.getImage(), g + v, _ + v);
    }
    return null;
  }
  loadedTileCallback(e, n, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(e, n, i) : !1;
  }
  prepareFrame(e) {
    return !!this.getLayer().getSource();
  }
  renderFrame(e, n) {
    const i = e.layerStatesArray[e.layerIndex],
      r = e.viewState,
      s = r.projection,
      o = r.resolution,
      l = r.center,
      a = r.rotation,
      u = e.pixelRatio,
      c = this.getLayer(),
      h = c.getSource(),
      d = h.getRevision(),
      f = h.getTileGridForProjection(s),
      p = f.getZForResolution(o, h.zDirection),
      y = f.getResolution(p);
    let E = e.extent;
    const m = e.viewState.resolution,
      g = h.getTilePixelRatio(u),
      _ = Math.round((oe(E) / m) * u),
      v = Math.round((Ze(E) / m) * u),
      w = i.extent && Oi(i.extent);
    w && (E = zs(E, Oi(i.extent)));
    const C = (y * _) / 2 / g,
      S = (y * v) / 2 / g,
      x = [l[0] - C, l[1] - S, l[0] + C, l[1] + S],
      R = f.getTileRangeForExtentAndZ(E, p),
      M = {};
    M[p] = {};
    const F = this.createLoadedTileFinder(h, s, M),
      j = this.tmpExtent,
      V = this.tmpTileRange_;
    this.newTiles_ = !1;
    const Z = a ? Ic(r.center, m, a, e.size) : void 0;
    for (let ue = R.minX; ue <= R.maxX; ++ue)
      for (let L = R.minY; L <= R.maxY; ++L) {
        if (a && !f.tileCoordIntersectsViewport([p, ue, L], Z)) continue;
        const ae = this.getTile(p, ue, L, e);
        if (this.isDrawableTile(ae)) {
          const it = Q(this);
          if (ae.getState() == G.LOADED) {
            M[p][ae.tileCoord.toString()] = ae;
            let Xt = ae.inTransition(it);
            Xt && i.opacity !== 1 && (ae.endTransition(it), (Xt = !1)),
              !this.newTiles_ &&
                (Xt || !this.renderedTiles.includes(ae)) &&
                (this.newTiles_ = !0);
          }
          if (ae.getAlpha(it, e.time) === 1) continue;
        }
        const Ce = f.getTileCoordChildTileRange(ae.tileCoord, V, j);
        let fe = !1;
        Ce && (fe = F(p + 1, Ce)),
          fe || f.forEachTileCoordParentTileRange(ae.tileCoord, F, V, j);
      }
    const K = ((y / o) * u) / g;
    gn(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / u,
      1 / u,
      a,
      -_ / 2,
      -v / 2,
    );
    const O = Xm(this.pixelTransform);
    this.useContainer(n, O, this.getBackground(e));
    const X = this.getRenderContext(e),
      I = this.context.canvas;
    Nh(this.inversePixelTransform, this.pixelTransform),
      gn(this.tempTransform, _ / 2, v / 2, K, K, 0, -_ / 2, -v / 2),
      I.width != _ || I.height != v
        ? ((I.width = _), (I.height = v))
        : this.containerReused || X.clearRect(0, 0, _, v),
      w && this.clipUnrotated(X, e, w),
      h.getInterpolate() || (X.imageSmoothingEnabled = !1),
      this.preRender(X, e),
      (this.renderedTiles.length = 0);
    let A = Object.keys(M).map(Number);
    A.sort(Pn);
    let P, W, b;
    i.opacity === 1 &&
    (!this.containerReused || h.getOpaque(e.viewState.projection))
      ? (A = A.reverse())
      : ((P = []), (W = []));
    for (let ue = A.length - 1; ue >= 0; --ue) {
      const L = A[ue],
        ae = h.getTilePixelSize(L, u, s),
        fe = f.getResolution(L) / y,
        it = ae[0] * fe * K,
        Xt = ae[1] * fe * K,
        rt = f.getTileCoordForCoordAndZ($i(x), L),
        rs = f.getTileCoordExtent(rt),
        Si = Ae(this.tempTransform, [
          (g * (rs[0] - x[0])) / y,
          (g * (x[3] - rs[3])) / y,
        ]),
        Na = g * h.getGutterForProjection(s),
        Lo = M[L];
      for (const ko in Lo) {
        const St = Lo[ko],
          qi = St.tileCoord,
          Mo = rt[1] - qi[1],
          za = Math.round(Si[0] - (Mo - 1) * it),
          Po = rt[2] - qi[2],
          Ao = Math.round(Si[1] - (Po - 1) * Xt),
          pt = Math.round(Si[0] - Mo * it),
          jt = Math.round(Si[1] - Po * Xt),
          tn = za - pt,
          Ut = Ao - jt,
          Qi = p === L,
          Ji = Qi && St.getAlpha(Q(this), e.time) !== 1;
        let Xn = !1;
        if (!Ji)
          if (P) {
            b = [pt, jt, pt + tn, jt, pt + tn, jt + Ut, pt, jt + Ut];
            for (let _n = 0, Ga = P.length; _n < Ga; ++_n)
              if (p !== L && L < W[_n]) {
                const qe = P[_n];
                lt([pt, jt, pt + tn, jt + Ut], [qe[0], qe[3], qe[4], qe[7]]) &&
                  (Xn || (X.save(), (Xn = !0)),
                  X.beginPath(),
                  X.moveTo(b[0], b[1]),
                  X.lineTo(b[2], b[3]),
                  X.lineTo(b[4], b[5]),
                  X.lineTo(b[6], b[7]),
                  X.moveTo(qe[6], qe[7]),
                  X.lineTo(qe[4], qe[5]),
                  X.lineTo(qe[2], qe[3]),
                  X.lineTo(qe[0], qe[1]),
                  X.clip());
              }
            P.push(b), W.push(L);
          } else X.clearRect(pt, jt, tn, Ut);
        this.drawTileImage(St, e, pt, jt, tn, Ut, Na, Qi),
          P && !Ji
            ? (Xn && X.restore(), this.renderedTiles.unshift(St))
            : this.renderedTiles.push(St),
          this.updateUsedTiles(e.usedTiles, h, St);
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = y),
      (this.extentChanged =
        !this.renderedExtent_ || !io(this.renderedExtent_, x)),
      (this.renderedExtent_ = x),
      (this.renderedPixelRatio = u),
      (this.renderedProjection = s),
      this.manageTilePyramid(e, h, f, u, s, E, p, c.getPreload()),
      this.scheduleExpireCache(e, h),
      this.postRender(this.context, e),
      i.extent && X.restore(),
      (X.imageSmoothingEnabled = !0),
      O !== I.style.transform && (I.style.transform = O),
      this.container
    );
  }
  drawTileImage(e, n, i, r, s, o, l, a) {
    const u = this.getTileImage(e);
    if (!u) return;
    const c = this.getRenderContext(n),
      h = Q(this),
      d = n.layerStatesArray[n.layerIndex],
      f = d.opacity * (a ? e.getAlpha(h, n.time) : 1),
      p = f !== c.globalAlpha;
    p && (c.save(), (c.globalAlpha = f)),
      c.drawImage(u, l, l, u.width - 2 * l, u.height - 2 * l, i, r, s, o),
      p && c.restore(),
      f !== d.opacity ? (n.animate = !0) : a && e.endTransition(h);
  }
  getImage() {
    const e = this.context;
    return e ? e.canvas : null;
  }
  getTileImage(e) {
    return e.getImage();
  }
  scheduleExpireCache(e, n) {
    if (n.canExpireCache()) {
      const i = function (r, s, o) {
        const l = Q(r);
        l in o.usedTiles &&
          r.expireCache(o.viewState.projection, o.usedTiles[l]);
      }.bind(null, n);
      e.postRenderFunctions.push(i);
    }
  }
  updateUsedTiles(e, n, i) {
    const r = Q(n);
    r in e || (e[r] = {}), (e[r][i.getKey()] = !0);
  }
  manageTilePyramid(e, n, i, r, s, o, l, a, u) {
    const c = Q(n);
    c in e.wantedTiles || (e.wantedTiles[c] = {});
    const h = e.wantedTiles[c],
      d = e.tileQueue,
      f = i.getMinZoom(),
      p = e.viewState.rotation,
      y = p
        ? Ic(e.viewState.center, e.viewState.resolution, p, e.size)
        : void 0;
    let E = 0,
      m,
      g,
      _,
      v,
      w,
      C;
    for (C = f; C <= l; ++C)
      for (
        g = i.getTileRangeForExtentAndZ(o, C, g),
          _ = i.getResolution(C),
          v = g.minX;
        v <= g.maxX;
        ++v
      )
        for (w = g.minY; w <= g.maxY; ++w)
          (p && !i.tileCoordIntersectsViewport([C, v, w], y)) ||
            (l - C <= a
              ? (++E,
                (m = n.getTile(C, v, w, r, s)),
                m.getState() == G.IDLE &&
                  ((h[m.getKey()] = !0),
                  d.isKeyQueued(m.getKey()) ||
                    d.enqueue([m, c, i.getTileCoordCenter(m.tileCoord), _])),
                u !== void 0 && u(m))
              : n.useTile(C, v, w, s));
    n.updateCacheSize(E, s);
  }
}
class zx extends kx {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new Nx(this);
  }
}
const Mu = {
    TILELOADSTART: "tileloadstart",
    TILELOADEND: "tileloadend",
    TILELOADERROR: "tileloaderror",
  },
  sr = [0, 0, 0],
  Kn = 5;
class J_ {
  constructor(e) {
    (this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0),
      (this.resolutions_ = e.resolutions),
      te(
        M1(this.resolutions_, (r, s) => s - r),
        "`resolutions` must be sorted in descending order",
      );
    let n;
    if (!e.origins) {
      for (let r = 0, s = this.resolutions_.length - 1; r < s; ++r)
        if (!n) n = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== n) {
          n = void 0;
          break;
        }
    }
    (this.zoomFactor_ = n),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = e.origin !== void 0 ? e.origin : null),
      (this.origins_ = null),
      e.origins !== void 0 &&
        ((this.origins_ = e.origins),
        te(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const i = e.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = $i(i)),
      te(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      e.tileSizes !== void 0 &&
        ((this.tileSizes_ = e.tileSizes),
        te(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : td),
      te(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = i !== void 0 ? i : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      e.sizes !== void 0
        ? (this.fullTileRanges_ = e.sizes.map((r, s) => {
            const o = new cd(
              Math.min(0, r[0]),
              Math.max(r[0] - 1, -1),
              Math.min(0, r[1]),
              Math.max(r[1] - 1, -1),
            );
            if (i) {
              const l = this.getTileRangeForExtentAndZ(i, s);
              (o.minX = Math.max(l.minX, o.minX)),
                (o.maxX = Math.min(l.maxX, o.maxX)),
                (o.minY = Math.max(l.minY, o.minY)),
                (o.maxY = Math.min(l.maxY, o.maxY));
            }
            return o;
          }))
        : i && this.calculateTileRanges_(i);
  }
  forEachTileCoord(e, n, i) {
    const r = this.getTileRangeForExtentAndZ(e, n);
    for (let s = r.minX, o = r.maxX; s <= o; ++s)
      for (let l = r.minY, a = r.maxY; l <= a; ++l) i([n, s, l]);
  }
  forEachTileCoordParentTileRange(e, n, i, r) {
    let s,
      o,
      l,
      a = null,
      u = e[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((o = e[1]), (l = e[2]))
        : (a = this.getTileCoordExtent(e, r));
      u >= this.minZoom;

    ) {
      if (
        (o !== void 0 && l !== void 0
          ? ((o = Math.floor(o / 2)),
            (l = Math.floor(l / 2)),
            (s = rr(o, o, l, l, i)))
          : (s = this.getTileRangeForExtentAndZ(a, u, i)),
        n(u, s))
      )
        return !0;
      --u;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  getResolution(e) {
    return this.resolutions_[e];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(e, n, i) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const s = e[1] * 2,
          o = e[2] * 2;
        return rr(s, s + 1, o, o + 1, n);
      }
      const r = this.getTileCoordExtent(e, i || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(r, e[0] + 1, n);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(e, n, i) {
    if (n > this.maxZoom || n < this.minZoom) return null;
    const r = e[0],
      s = e[1],
      o = e[2];
    if (n === r) return rr(s, o, s, o, i);
    if (this.zoomFactor_) {
      const a = Math.pow(this.zoomFactor_, n - r),
        u = Math.floor(s * a),
        c = Math.floor(o * a);
      if (n < r) return rr(u, u, c, c, i);
      const h = Math.floor(a * (s + 1)) - 1,
        d = Math.floor(a * (o + 1)) - 1;
      return rr(u, h, c, d, i);
    }
    const l = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(l, n, i);
  }
  getTileRangeForExtentAndZ(e, n, i) {
    this.getTileCoordForXYAndZ_(e[0], e[3], n, !1, sr);
    const r = sr[1],
      s = sr[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], n, !0, sr);
    const o = sr[1],
      l = sr[2];
    return rr(r, o, s, l, i);
  }
  getTileCoordCenter(e) {
    const n = this.getOrigin(e[0]),
      i = this.getResolution(e[0]),
      r = vt(this.getTileSize(e[0]), this.tmpSize_);
    return [n[0] + (e[1] + 0.5) * r[0] * i, n[1] - (e[2] + 0.5) * r[1] * i];
  }
  getTileCoordExtent(e, n) {
    const i = this.getOrigin(e[0]),
      r = this.getResolution(e[0]),
      s = vt(this.getTileSize(e[0]), this.tmpSize_),
      o = i[0] + e[1] * s[0] * r,
      l = i[1] - (e[2] + 1) * s[1] * r,
      a = o + s[0] * r,
      u = l + s[1] * r;
    return _i(o, l, a, u, n);
  }
  getTileCoordForCoordAndResolution(e, n, i) {
    return this.getTileCoordForXYAndResolution_(e[0], e[1], n, !1, i);
  }
  getTileCoordForXYAndResolution_(e, n, i, r, s) {
    const o = this.getZForResolution(i),
      l = i / this.getResolution(o),
      a = this.getOrigin(o),
      u = vt(this.getTileSize(o), this.tmpSize_);
    let c = (l * (e - a[0])) / i / u[0],
      h = (l * (a[1] - n)) / i / u[1];
    return (
      r
        ? ((c = Jo(c, Kn) - 1), (h = Jo(h, Kn) - 1))
        : ((c = Qo(c, Kn)), (h = Qo(h, Kn))),
      Rg(o, c, h, s)
    );
  }
  getTileCoordForXYAndZ_(e, n, i, r, s) {
    const o = this.getOrigin(i),
      l = this.getResolution(i),
      a = vt(this.getTileSize(i), this.tmpSize_);
    let u = (e - o[0]) / l / a[0],
      c = (o[1] - n) / l / a[1];
    return (
      r
        ? ((u = Jo(u, Kn) - 1), (c = Jo(c, Kn) - 1))
        : ((u = Qo(u, Kn)), (c = Qo(c, Kn))),
      Rg(i, u, c, s)
    );
  }
  getTileCoordForCoordAndZ(e, n, i) {
    return this.getTileCoordForXYAndZ_(e[0], e[1], n, !1, i);
  }
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  getFullTileRange(e) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[e]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, e)
        : null;
  }
  getZForResolution(e, n) {
    const i = Fh(this.resolutions_, e, n || 0);
    return Ie(i, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(e, n) {
    return u_(n, 0, n.length, 2, this.getTileCoordExtent(e));
  }
  calculateTileRanges_(e) {
    const n = this.resolutions_.length,
      i = new Array(n);
    for (let r = this.minZoom; r < n; ++r)
      i[r] = this.getTileRangeForExtentAndZ(e, r);
    this.fullTileRanges_ = i;
  }
}
function e0(t) {
  let e = t.getDefaultTileGrid();
  return e || ((e = Xx(t)), t.setDefaultTileGrid(e)), e;
}
function Gx(t, e, n) {
  const i = e[0],
    r = t.getTileCoordCenter(e),
    s = hd(n);
  if (!Br(s, r)) {
    const o = oe(s),
      l = Math.ceil((s[0] - r[0]) / o);
    return (r[0] += o * l), t.getTileCoordForCoordAndZ(r, i);
  }
  return e;
}
function Wx(t, e, n, i) {
  i = i !== void 0 ? i : "top-left";
  const r = t0(t, e, n);
  return new J_({ extent: t, origin: W1(t, i), resolutions: r, tileSize: n });
}
function bx(t) {
  const e = t || {},
    n = e.extent || Wt("EPSG:3857").getExtent(),
    i = {
      extent: n,
      minZoom: e.minZoom,
      tileSize: e.tileSize,
      resolutions: t0(n, e.maxZoom, e.tileSize, e.maxResolution),
    };
  return new J_(i);
}
function t0(t, e, n, i) {
  (e = e !== void 0 ? e : rE), (n = vt(n !== void 0 ? n : td));
  const r = Ze(t),
    s = oe(t);
  i = i > 0 ? i : Math.max(s / n[0], r / n[1]);
  const o = e + 1,
    l = new Array(o);
  for (let a = 0; a < o; ++a) l[a] = i / Math.pow(2, a);
  return l;
}
function Xx(t, e, n, i) {
  const r = hd(t);
  return Wx(r, e, n, i);
}
function hd(t) {
  t = Wt(t);
  let e = t.getExtent();
  if (!e) {
    const n = (180 * Wh.degrees) / t.getMetersPerUnit();
    e = _i(-n, -n, n, n);
  }
  return e;
}
class jx extends X_ {
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.opaque_ = e.opaque !== void 0 ? e.opaque : !1),
      (this.tilePixelRatio_ =
        e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1),
      (this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null);
    const n = [256, 256];
    this.tileGrid &&
      vt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), n),
      (this.tileCache = new Q_(e.cacheSize || 0)),
      (this.tmpSize = [0, 0]),
      (this.key_ = e.key || ""),
      (this.tileOptions = {
        transition: e.transition,
        interpolate: e.interpolate,
      }),
      (this.zDirection = e.zDirection ? e.zDirection : 0);
  }
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    i && i.expireCache(n);
  }
  forEachLoadedTile(e, n, i, r) {
    const s = this.getTileCacheForProjection(e);
    if (!s) return !1;
    let o = !0,
      l,
      a,
      u;
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let h = i.minY; h <= i.maxY; ++h)
        (a = Oa(n, c, h)),
          (u = !1),
          s.containsKey(a) &&
            ((l = s.get(a)),
            (u = l.getState() === G.LOADED),
            u && (u = r(l) !== !1)),
          u || (o = !1);
    return o;
  }
  getGutterForProjection(e) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(e) {
    this.key_ !== e && ((this.key_ = e), this.changed());
  }
  getOpaque(e) {
    return this.opaque_;
  }
  getResolutions(e) {
    const n = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return n ? n.getResolutions() : null;
  }
  getTile(e, n, i, r, s) {
    return ne();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : e0(e);
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    return (
      te(
        n === null || or(n, e),
        "A VectorTile source can only be rendered if it has a projection compatible with the view projection.",
      ),
      this.tileCache
    );
  }
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(e, n, i) {
    const r = this.getTileGridForProjection(i),
      s = this.getTilePixelRatio(n),
      o = vt(r.getTileSize(e), this.tmpSize);
    return s == 1 ? o : Vv(o, s, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(e, n) {
    n = n !== void 0 ? n : this.getProjection();
    const i = this.getTileGridForProjection(n);
    return (
      this.getWrapX() && n.isGlobal() && (e = Gx(i, e, n)), Lx(e, i) ? e : null
    );
  }
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear(), super.refresh();
  }
  updateCacheSize(e, n) {
    const i = this.getTileCacheForProjection(n);
    e > i.highWaterMark && (i.highWaterMark = e);
  }
  useTile(e, n, i, r) {}
}
class Ux extends pn {
  constructor(e, n) {
    super(e), (this.tile = n);
  }
}
function Yx(t, e) {
  const n = /\{z\}/g,
    i = /\{x\}/g,
    r = /\{y\}/g,
    s = /\{-y\}/g;
  return function (o, l, a) {
    if (o)
      return t
        .replace(n, o[0].toString())
        .replace(i, o[1].toString())
        .replace(r, o[2].toString())
        .replace(s, function () {
          const u = o[0],
            c = e.getFullTileRange(u);
          if (!c)
            throw new Error(
              "The {-y} placeholder requires a tile grid with extent",
            );
          return (c.getHeight() - o[2] - 1).toString();
        });
  };
}
function Bx(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = Yx(t[r], e);
  return Vx(i);
}
function Vx(t) {
  return t.length === 1
    ? t[0]
    : function (e, n, i) {
        if (!e) return;
        const r = Ix(e),
          s = bi(r, t.length);
        return t[s](e, n, i);
      };
}
function Kx(t) {
  const e = [];
  let n = /\{([a-z])-([a-z])\}/.exec(t);
  if (n) {
    const i = n[1].charCodeAt(0),
      r = n[2].charCodeAt(0);
    let s;
    for (s = i; s <= r; ++s) e.push(t.replace(n[0], String.fromCharCode(s)));
    return e;
  }
  if (((n = /\{(\d+)-(\d+)\}/.exec(t)), n)) {
    const i = parseInt(n[2], 10);
    for (let r = parseInt(n[1], 10); r <= i; r++)
      e.push(t.replace(n[0], r.toString()));
    return e;
  }
  return e.push(t), e;
}
class dd extends jx {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tilePixelRatio: e.tilePixelRatio,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === dd.prototype.tileUrlFunction),
      (this.tileLoadFunction = e.tileLoadFunction),
      e.tileUrlFunction && (this.tileUrlFunction = e.tileUrlFunction),
      (this.urls = null),
      e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(e) {
    const n = e.target,
      i = Q(n),
      r = n.getState();
    let s;
    r == G.LOADING
      ? ((this.tileLoadingKeys_[i] = !0), (s = Mu.TILELOADSTART))
      : i in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[i],
        (s =
          r == G.ERROR
            ? Mu.TILELOADERROR
            : r == G.LOADED
              ? Mu.TILELOADEND
              : void 0)),
      s != null && this.dispatchEvent(new Ux(s, n));
  }
  setTileLoadFunction(e) {
    this.tileCache.clear(), (this.tileLoadFunction = e), this.changed();
  }
  setTileUrlFunction(e, n) {
    (this.tileUrlFunction = e),
      this.tileCache.pruneExceptNewestZ(),
      typeof n < "u" ? this.setKey(n) : this.changed();
  }
  setUrl(e) {
    const n = Kx(e);
    (this.urls = n), this.setUrls(n);
  }
  setUrls(e) {
    this.urls = e;
    const n = e.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(Bx(e, this.tileGrid), n)
      : this.setKey(n);
  }
  tileUrlFunction(e, n, i) {}
  useTile(e, n, i) {
    const r = Oa(e, n, i);
    this.tileCache.containsKey(r) && this.tileCache.get(r);
  }
}
class Zx extends dd {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : Hx,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.crossOrigin = e.crossOrigin !== void 0 ? e.crossOrigin : null),
      (this.tileClass = e.tileClass !== void 0 ? e.tileClass : U_),
      (this.tileCacheForProjection = {}),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  canExpireCache() {
    if (this.tileCache.canExpireCache()) return !0;
    for (const e in this.tileCacheForProjection)
      if (this.tileCacheForProjection[e].canExpireCache()) return !0;
    return !1;
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    this.tileCache.expireCache(this.tileCache == i ? n : {});
    for (const r in this.tileCacheForProjection) {
      const s = this.tileCacheForProjection[r];
      s.expireCache(s == i ? n : {});
    }
  }
  getGutterForProjection(e) {
    return this.getProjection() && e && !or(this.getProjection(), e)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let e = super.getKey();
    return this.getInterpolate() || (e += ":disable-interpolation"), e;
  }
  getOpaque(e) {
    return this.getProjection() && e && !or(this.getProjection(), e)
      ? !1
      : super.getOpaque(e);
  }
  getTileGridForProjection(e) {
    const n = this.getProjection();
    if (this.tileGrid && (!n || or(n, e))) return this.tileGrid;
    const i = Q(e);
    return (
      i in this.tileGridForProjection ||
        (this.tileGridForProjection[i] = e0(e)),
      this.tileGridForProjection[i]
    );
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    if (!n || or(n, e)) return this.tileCache;
    const i = Q(e);
    return (
      i in this.tileCacheForProjection ||
        (this.tileCacheForProjection[i] = new Q_(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[i]
    );
  }
  createTile_(e, n, i, r, s, o) {
    const l = [e, n, i],
      a = this.getTileCoordForTileUrlFunction(l, s),
      u = a ? this.tileUrlFunction(a, r, s) : void 0,
      c = new this.tileClass(
        l,
        u !== void 0 ? G.IDLE : G.EMPTY,
        u !== void 0 ? u : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (c.key = o),
      c.addEventListener(B.CHANGE, this.handleTileChange.bind(this)),
      c
    );
  }
  getTile(e, n, i, r, s) {
    const o = this.getProjection();
    if (!o || !s || or(o, s)) return this.getTileInternal(e, n, i, r, o || s);
    const l = this.getTileCacheForProjection(s),
      a = [e, n, i];
    let u;
    const c = q_(a);
    l.containsKey(c) && (u = l.get(c));
    const h = this.getKey();
    if (u && u.key == h) return u;
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(s),
      p = this.getTileCoordForTileUrlFunction(a, s),
      y = new Wc(
        o,
        d,
        s,
        f,
        a,
        p,
        this.getTilePixelRatio(r),
        this.getGutter(),
        (E, m, g, _) => this.getTileInternal(E, m, g, _, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (
      (y.key = h),
      u
        ? ((y.interimTile = u), y.refreshInterimChain(), l.replace(c, y))
        : l.set(c, y),
      y
    );
  }
  getTileInternal(e, n, i, r, s) {
    let o = null;
    const l = Oa(e, n, i),
      a = this.getKey();
    if (!this.tileCache.containsKey(l))
      (o = this.createTile_(e, n, i, r, s, a)), this.tileCache.set(l, o);
    else if (((o = this.tileCache.get(l)), o.key != a)) {
      const u = o;
      (o = this.createTile_(e, n, i, r, s, a)),
        u.getState() == G.IDLE
          ? (o.interimTile = u.interimTile)
          : (o.interimTile = u),
        o.refreshInterimChain(),
        this.tileCache.replace(l, o);
    }
    return o;
  }
  setRenderReprojectionEdges(e) {
    if (this.renderReprojectionEdges_ != e) {
      this.renderReprojectionEdges_ = e;
      for (const n in this.tileCacheForProjection)
        this.tileCacheForProjection[n].clear();
      this.changed();
    }
  }
  setTileGridForProjection(e, n) {
    const i = Wt(e);
    if (i) {
      const r = Q(i);
      r in this.tileGridForProjection || (this.tileGridForProjection[r] = n);
    }
  }
  clear() {
    super.clear();
    for (const e in this.tileCacheForProjection)
      this.tileCacheForProjection[e].clear();
  }
}
function Hx(t, e) {
  t.getImage().src = e;
}
class $x extends Zx {
  constructor(e) {
    e = e || {};
    const n = e.projection !== void 0 ? e.projection : "EPSG:3857",
      i =
        e.tileGrid !== void 0
          ? e.tileGrid
          : bx({
              extent: hd(n),
              maxResolution: e.maxResolution,
              maxZoom: e.maxZoom,
              minZoom: e.minZoom,
              tileSize: e.tileSize,
            });
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      crossOrigin: e.crossOrigin,
      interpolate: e.interpolate,
      opaque: e.opaque,
      projection: n,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: e.tileLoadFunction,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      transition: e.transition,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.gutter_ = e.gutter !== void 0 ? e.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
function qx({ map: t }) {
  const e = Se.useRef();
  return (
    Se.useEffect(
      () => (
        t.setTarget(e.current),
        () => {
          t.setTarget(void 0);
        }
      ),
      [t],
    ),
    Y.createElement("main", { ref: e, className: "map-container" })
  );
}
const Qx = { SELECT: "select" };
class Jx extends pn {
  constructor(e, n, i, r) {
    super(e),
      (this.selected = n),
      (this.deselected = i),
      (this.mapBrowserEvent = r);
  }
}
const ll = {};
class Fa extends is {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = e || {}),
      (this.boundAddFeature_ = this.addFeature_.bind(this)),
      (this.boundRemoveFeature_ = this.removeFeature_.bind(this)),
      (this.condition_ = e.condition ? e.condition : ux),
      (this.addCondition_ = e.addCondition ? e.addCondition : Tg),
      (this.removeCondition_ = e.removeCondition ? e.removeCondition : Tg),
      (this.toggleCondition_ = e.toggleCondition ? e.toggleCondition : K_),
      (this.multi_ = e.multi ? e.multi : !1),
      (this.filter_ = e.filter ? e.filter : Vi),
      (this.hitTolerance_ = e.hitTolerance ? e.hitTolerance : 0),
      (this.style_ = e.style !== void 0 ? e.style : eC()),
      (this.features_ = e.features || new Ht());
    let n;
    if (e.layers)
      if (typeof e.layers == "function") n = e.layers;
      else {
        const i = e.layers;
        n = function (r) {
          return i.includes(r);
        };
      }
    else n = Vi;
    (this.layerFilter_ = n), (this.featureLayerAssociation_ = {});
  }
  addFeatureLayerAssociation_(e, n) {
    this.featureLayerAssociation_[Q(e)] = n;
  }
  getFeatures() {
    return this.features_;
  }
  getHitTolerance() {
    return this.hitTolerance_;
  }
  getLayer(e) {
    return this.featureLayerAssociation_[Q(e)];
  }
  setHitTolerance(e) {
    this.hitTolerance_ = e;
  }
  setMap(e) {
    this.getMap() &&
      this.style_ &&
      this.features_.forEach(this.restorePreviousStyle_.bind(this)),
      super.setMap(e),
      e
        ? (this.features_.addEventListener(Oe.ADD, this.boundAddFeature_),
          this.features_.addEventListener(Oe.REMOVE, this.boundRemoveFeature_),
          this.style_ &&
            this.features_.forEach(this.applySelectedStyle_.bind(this)))
        : (this.features_.removeEventListener(Oe.ADD, this.boundAddFeature_),
          this.features_.removeEventListener(
            Oe.REMOVE,
            this.boundRemoveFeature_,
          ));
  }
  addFeature_(e) {
    const n = e.element;
    if ((this.style_ && this.applySelectedStyle_(n), !this.getLayer(n))) {
      const i = this.getMap()
        .getAllLayers()
        .find(function (r) {
          if (r instanceof bt && r.getSource() && r.getSource().hasFeature(n))
            return r;
        });
      i && this.addFeatureLayerAssociation_(n, i);
    }
  }
  removeFeature_(e) {
    this.style_ && this.restorePreviousStyle_(e.element);
  }
  getStyle() {
    return this.style_;
  }
  applySelectedStyle_(e) {
    const n = Q(e);
    n in ll || (ll[n] = e.getStyle()), e.setStyle(this.style_);
  }
  restorePreviousStyle_(e) {
    const n = this.getMap().getInteractions().getArray();
    for (let r = n.length - 1; r >= 0; --r) {
      const s = n[r];
      if (
        s !== this &&
        s instanceof Fa &&
        s.getStyle() &&
        s.getFeatures().getArray().lastIndexOf(e) !== -1
      ) {
        e.setStyle(s.getStyle());
        return;
      }
    }
    const i = Q(e);
    e.setStyle(ll[i]), delete ll[i];
  }
  removeFeatureLayerAssociation_(e) {
    delete this.featureLayerAssociation_[Q(e)];
  }
  handleEvent(e) {
    if (!this.condition_(e)) return !0;
    const n = this.addCondition_(e),
      i = this.removeCondition_(e),
      r = this.toggleCondition_(e),
      s = !n && !i && !r,
      o = e.map,
      l = this.getFeatures(),
      a = [],
      u = [];
    if (s) {
      qr(this.featureLayerAssociation_),
        o.forEachFeatureAtPixel(
          e.pixel,
          (c, h) => {
            if (!(!(c instanceof mi) || !this.filter_(c, h)))
              return (
                this.addFeatureLayerAssociation_(c, h), u.push(c), !this.multi_
              );
          },
          { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ },
        );
      for (let c = l.getLength() - 1; c >= 0; --c) {
        const h = l.item(c),
          d = u.indexOf(h);
        d > -1 ? u.splice(d, 1) : (l.remove(h), a.push(h));
      }
      u.length !== 0 && l.extend(u);
    } else {
      o.forEachFeatureAtPixel(
        e.pixel,
        (c, h) => {
          if (!(!(c instanceof mi) || !this.filter_(c, h)))
            return (
              (n || r) && !l.getArray().includes(c)
                ? (this.addFeatureLayerAssociation_(c, h), u.push(c))
                : (i || r) &&
                  l.getArray().includes(c) &&
                  (a.push(c), this.removeFeatureLayerAssociation_(c)),
              !this.multi_
            );
        },
        { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ },
      );
      for (let c = a.length - 1; c >= 0; --c) l.remove(a[c]);
      l.extend(u);
    }
    return (
      (u.length > 0 || a.length > 0) &&
        this.dispatchEvent(new Jx(Qx.SELECT, u, a, e)),
      !0
    );
  }
}
function eC() {
  const t = nE();
  return (
    no(t.Polygon, t.LineString),
    no(t.GeometryCollection, t.LineString),
    function (e) {
      return e.getGeometry() ? t[e.getGeometry().getType()] : null;
    }
  );
}
function tC(t) {
  const e = "LandingInfo",
    n = new Fa({
      layers: (i) => i instanceof bt && i.get("id") === "landingSites",
      style: (i) => {
        const r = i.get("label"),
          s = nC(r);
        return new Fe({
          image: new Jr({ anchor: [0.5, 0.5], src: s, scale: 0.08 }),
        });
      },
    });
  return (
    t.addInteraction(n),
    n.on("select", async (i) => {
      const r = document.getElementById(e);
      if (r)
        if (i.selected.length === 0) r.innerHTML = "";
        else {
          r.innerHTML = "Loading...";
          const o = i.selected[0].get("label");
          if (o)
            try {
              const u = (
                await (await fetch("public/data/moon_landings.json")).json()
              ).find((c) => c.label === o);
              u
                ? (r.innerHTML = `
                <img src="${u.image || "N/A"}", class="my-image-class" />
                <h3>${u.label}</h3>
                <div><b>Program:</b> ${u.program || "N/A"}</div>
                <div><b>Agency:</b> ${u.agency || "N/A"}</div>
                <div><b>Date:</b> ${new Date(u.date).toDateString()}</div>
                </br>
                <div> ${u.description || "N/A"}</div>
                
                <div><b>Read more:</b> <a href="${u.url}" target="_blank">wikipedia</a></div>
            `)
                : (r.innerHTML = "No data available");
            } catch (l) {
              console.error("Error fetching data:", l),
                (r.innerHTML = "Error fetching data");
            }
          else r.innerHTML = "Label not available";
        }
    }),
    n
  );
}
function nC(t) {
  return t.startsWith("Apollo")
    ? "./Apollo_Lander_Icon_Selected.png"
    : t.startsWith("Chang-e")
      ? "./Chang-e_Mission_Icon_Selected.png"
      : t.startsWith("LCROSS")
        ? "./LCROSS_Probe_Icon_Selected.png"
        : t.startsWith("Luna")
          ? "./Luna_Mission_Icon_Selected.png"
          : "./Default_Icon.webp";
}
const iC = (t) =>
    t.startsWith("Apollo")
      ? "./Apollo_Lander_Icon.png"
      : t.startsWith("Chang-e")
        ? "./Chang-e_Mission_Icon.png"
        : t.startsWith("LCROSS")
          ? "./LCROSS_Probe_Icon.png"
          : t.startsWith("Luna")
            ? "./Luna_Mission_Icon.png"
            : "./Default_Icon.webp",
  rC = async (t, e) => {
    try {
      const n = await fetch("public/data/moon_landings.json");
      if (!n.ok) throw new Error("Error fetching the requested data.");
      const r = (await n.json()).filter((l) =>
          e === "Apollo"
            ? l.label.startsWith("Apollo")
            : e === "Luna"
              ? l.label.startsWith("Luna")
              : e === "Chang-e"
                ? l.label.startsWith("Chang-e")
                : e === "LCROSS"
                  ? l.label.startsWith("LCROSS")
                  : e === "all",
        ),
        s = new Da({
          features: r.map((l) => {
            const a = new mi({
                geometry: new Sa(Ca([l.lng, l.lat])),
                name: l.label,
              }),
              u = iC(l.label),
              c = new Fe({
                image: new Jr({ anchor: [0.5, 0.5], src: u, scale: 0.06 }),
              });
            return a.setStyle(c), a.set("label", l.label), a;
          }),
        }),
        o = new bt({
          source: s,
          properties: { id: "landingSites" },
          minZoom: 2.8,
          zIndex: 30,
        });
      t
        .getLayers()
        .getArray()
        .filter((l) => l.get("id") === "landingSites")
        .forEach((l) => t.removeLayer(l)),
        t.addLayer(o);
    } catch (n) {
      console.error("Error fetching moon data:", n);
    }
  },
  sC = ({ map: t, mission: e, show: n }) => (
    Se.useEffect(() => {
      if (!n) {
        t.getLayers()
          .getArray()
          .filter((s) => s.get("id") === "landingSites")
          .forEach((s) => t.removeLayer(s));
        const r = document.getElementById("LandingInfo");
        r && (r.innerHTML = "");
        return;
      }
      async function i() {
        await rC(t, e), tC(t);
      }
      i();
    }, [t, e, n]),
    null
  ),
  oC = 1737.4;
function lC(t) {
  const e = "LandingInfo",
    n = new Fa({
      layers: (i) => i instanceof bt && i.get("id") === "Craters",
      style: new Fe({
        fill: new gt({ color: "rgba(255, 204, 51, 0.2)" }),
        stroke: new ft({ color: "#ffcc33", width: 2 }),
      }),
    });
  return (
    t.addInteraction(n),
    n.on("select", (i) => {
      const r = document.getElementById(e);
      if (r)
        if (i.selected.length === 0) r.innerHTML = "";
        else {
          r.innerHTML = "Loading...";
          const s = i.selected[0],
            o = s.get("name"),
            l = s.get("eponym"),
            a = s.get("image_url"),
            u = s.get("wiki"),
            c = s.get("depth"),
            d = (s.get("radius") * oC * 0.17843).toFixed(2);
          r.innerHTML = `
      <img src="${a || "images/default-image.jpg"}" class="my-image-class" />
        <h3>${o}</h3>
        <p>Approximate Width: ${d} km</p>
        <p>Depth: ${c || "N/A"}</p>
        <p>Eponym: ${l || "N/A"}</p>
        ${u ? `<p><a href="${u}" target="_blank">More Info</a></p>` : ""}
      `;
        }
    }),
    n
  );
}
async function aC(t) {
  try {
    const e = await fetch("public/data/craters.geojson");
    if (!e.ok) throw new Error("Error fetching data");
    const i = (await e.json()).features,
      r = new Da({
        features: i.map((o) => {
          const l = o.properties,
            a = o.geometry.coordinates,
            u = l.numPoints || 16,
            c = l.radius,
            h = [];
          for (let p = 0; p < u; p++) {
            const y = (p * 2 * Math.PI) / u,
              E = ((a[1] + c * Math.sin(y)) * Math.PI) / 180,
              m = a[0] + ((c * Math.cos(y)) / Math.cos(E)) * 4.5,
              g = a[1] + c * Math.sin(y) * 4.5;
            h.push(Ca([m, g]));
          }
          h.push(h[0]);
          const d = new yi([h]),
            f = new mi({
              geometry: d,
              name: l.name,
              wiki: l.Wiki,
              radius: l.radius,
              depth: l.depth,
              eponym: l.eponym,
              image_url: l.image_url,
            });
          return (
            f.setStyle(
              new Fe({
                fill: new gt({ color: "rgba(255, 204, 51, 0.1)" }),
                stroke: new ft({ color: "rgba(255, 204, 51, 0.5)", width: 2 }),
                text: new So({
                  font: "14px Calibri,sans-serif",
                  fill: new gt({ color: "#000" }),
                  stroke: new ft({ color: "#fff", width: 2 }),
                  text: f.get("name"),
                }),
              }),
            ),
            f
          );
        }),
      }),
      s = new bt({
        source: r,
        properties: { id: "Craters" },
        minZoom: 3,
        zIndex: 20,
      });
    t
      .getLayers()
      .getArray()
      .filter((o) => o instanceof bt && o.get("id") === "Craters")
      .forEach((o) => t.removeLayer(o)),
      t.addLayer(s),
      lC(t);
  } catch (e) {
    console.error("Error fetching or processing data:", e);
  }
}
const uC = ({ map: t, show: e }) => (
  Se.useEffect(() => {
    e
      ? aC(t)
      : t
          .getLayers()
          .getArray()
          .filter((n) => n instanceof bt && n.get("id") === "Craters")
          .forEach((n) => t.removeLayer(n));
  }, [t, e]),
  null
);
async function cC(t) {
  try {
    const e = await fetch("public/data/mare.geojson");
    if (!e.ok) throw new Error("Error fetching data from the local file");
    const i = (await e.json()).features.map((o) => {
        const a = o.geometry.coordinates.map((c) => c.map((h) => Ca(h))),
          u = new yi(a);
        return new mi({ geometry: u, name: o.properties.name });
      }),
      r = new Da({ features: i }),
      s = new bt({
        source: r,
        properties: { id: "mares" },
        maxZoom: 6,
        zIndex: 10,
        style: (o) => {
          const l = o.get("name");
          return new Fe({
            stroke: new ft({ color: "rgba(30, 80, 155, 0.5)", width: 2 }),
            fill: new gt({ color: "rgba(30, 80, 155, 0.1)" }),
            text: new So({
              font: "14px Calibri,sans-serif",
              fill: new gt({ color: "#ffffff" }),
              stroke: new ft({ color: "#000000", width: 3 }),
              text: l || "",
            }),
          });
        },
      });
    t
      .getLayers()
      .getArray()
      .filter((o) => o instanceof bt && o.get("id") === "mares")
      .forEach((o) => t.removeLayer(o)),
      t.addLayer(s);
  } catch (e) {
    console.error("Failed to load local moon mares:", e);
  }
}
const hC = ({ map: t, show: e }) => (
    Se.useEffect(
      () => (
        e
          ? cC(t)
          : t
              .getLayers()
              .getArray()
              .filter((i) => i instanceof bt && i.get("id") === "mares")
              .forEach((i) => t.removeLayer(i)),
        () => {
          t.getLayers()
            .getArray()
            .filter((i) => i instanceof bt && i.get("id") === "mares")
            .forEach((i) => t.removeLayer(i));
        }
      ),
      [t, e],
    ),
    null
  ),
  dC = (t) => {
    const e = t.get("name");
    if (e === "Nearside")
      return new Fe({
        stroke: new ft({ color: "rgba(255, 255, 255, 0.075)", width: 3 }),
        fill: new gt({ color: "rgba(255, 255, 255, 0.12)" }),
      });
    if (e === "Farside")
      return new Fe({
        stroke: new ft({ color: "rgba(0, 0, 0, 0.075)", width: 3 }),
        fill: new gt({ color: "rgba(0, 0, 0, 0.12)" }),
      });
  },
  fC = ({ map: t, show: e }) => {
    const [n, i] = Se.useState([]);
    return (
      Se.useEffect(() => {
        (async () => {
          try {
            const s = await fetch("public/data/far-near-side.geojson");
            if (!s.ok) throw new Error("Error fetching the local data.");
            const a = (await s.json()).features.map((u) => {
              const c = u.geometry.coordinates[0].map((d) => Ca(d)),
                h = new yi([c]);
              return new mi({ geometry: h, name: u.properties.name });
            });
            i(a);
          } catch (s) {
            console.error("Failed to fetch or process moon sides data:", s);
          }
        })();
      }, []),
      Se.useEffect(() => {
        if (e && n.length > 0) {
          const r = new Da({ features: n }),
            s = new bt({ source: r, style: dC });
          return (
            t.addLayer(s),
            () => {
              t.removeLayer(s);
            }
          );
        }
      }, [e, n, t]),
      null
    );
  },
  gC = ({ map: t }) => {
    const [e, n] = Se.useState("No data");
    return (
      Se.useEffect(() => {
        if (!t) return;
        const i = (r) => {
          const s = lv(r.coordinate),
            o = `Coordinates: ${s[0].toFixed(6)}, ${s[1].toFixed(6)}`;
          n(o);
        };
        return (
          t.on("pointermove", i),
          () => {
            t && t.un("pointermove", i);
          }
        );
      }, [t]),
      Y.createElement("div", { className: "mouse-position-display" }, e)
    );
  },
  pC = ({ map: t }) => {
    const [e, n] = Se.useState(2557.94),
      i = 1737,
      r = 256,
      s = 35,
      o = 6500,
      l = (a) =>
        (((2 * Math.PI * i * 1e3) / (r * Math.pow(2, a))) * window.innerWidth) /
        2 /
        1e3;
    return (
      Se.useEffect(() => {
        if (!t) return;
        const a = () => {
          const u = t.getView().getZoom();
          if (u) {
            const c = l(u);
            n(c);
          }
        };
        return (
          t.getView().on("change:resolution", a),
          () => {
            t.getView().un("change:resolution", a);
          }
        );
      }, [t]),
      Y.createElement(
        "div",
        { className: "altitude-container" },
        Y.createElement(
          "div",
          { className: "altitude-display" },
          "Approximate Altitude: ",
          e.toFixed(2),
          " km",
        ),
        Y.createElement("input", {
          type: "range",
          min: s,
          max: o,
          value: e,
          className: "altitude-slider",
          readOnly: !0,
        }),
      )
    );
  };
function mC() {
  const [t] = Se.useState(
      new Cx({
        layers: [
          new zx({
            source: new $x({
              url: "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{-y}.png",
            }),
          }),
        ],
        view: new ln({ center: [0, 0], zoom: 4, maxZoom: 15 }),
      }),
    ),
    [e, n] = Se.useState("all"),
    [i, r] = Se.useState(!0),
    [s, o] = Se.useState(!0),
    [l, a] = Se.useState(!0),
    [u, c] = Se.useState(!0),
    [h, d] = Se.useState(
      "Click on a feature on the map to see detailed information.",
    );
  function f() {
    const p = document.getElementById("LandingInfo");
    p &&
      (p.innerHTML = `<h3>Information about the near and far side of the moon.</h3>The <a href="https://en.wikipedia.org/wiki/Far_side_of_the_Moon">far side of the Moon</a>(Darker area) is the lunar hemisphere that always faces away from Earth, opposite to the <a href="https://en.wikipedia.org/wiki/Near_side_of_the_Moon">near side</a>(Light area), because of synchronous rotation in the Moons orbit. Compared to the near side, the far sides terrain is rugged, with a multitude of impact craters and relatively few flat and dark lunar maria (seas), giving it an appearance closer to other barren places in the Solar System such as Mercury and Callisto.<br><br><h3>Mare Information</h3>The lunar <a href="https://en.wikipedia.org/wiki/Lunar_mare">maria</a> (mares) are large, dark, basaltic plains on the Earth's Moon, formed by lava flowing into ancient impact basins. They were dubbed maria (Latin for 'seas') by early astronomers who mistook them for actual seas. They are less reflective than the "highlands" as a result of their iron-rich composition, and hence appear dark to the naked eye. The maria cover about 16% of the lunar surface, mostly on the side visible from Earth.`);
  }
  return Y.createElement(
    Y.Fragment,
    null,
    Y.createElement(
      "div",
      { id: "mainContainer" },
      Y.createElement("header", null, Y.createElement("h1", null, "Lunar Map")),
      Y.createElement("div", { id: "LandingInfo" }, h),
      Y.createElement(
        "div",
        { id: "selectEra" },
        Y.createElement("label", null, "Select Missions:"),
        Y.createElement("br", null),
        Y.createElement(
          "select",
          { onChange: (p) => n(p.target.value), value: e },
          Y.createElement("option", { value: "all" }, "All"),
          Y.createElement("option", { value: "Apollo" }, "Apollo"),
          Y.createElement("option", { value: "Luna" }, "Luna"),
          Y.createElement("option", { value: "Chang-e" }, "Chang-e"),
          Y.createElement("option", { value: "LCROSS" }, "LCROSS"),
        ),
      ),
      Y.createElement(
        "div",
        { id: "checkBoxlayers" },
        Y.createElement(
          "label",
          null,
          Y.createElement("input", {
            type: "checkbox",
            checked: i,
            onChange: () => r(!i),
          }),
          "Show Mission Data",
        ),
        Y.createElement("br", null),
        Y.createElement(
          "label",
          null,
          Y.createElement("input", {
            type: "checkbox",
            checked: s,
            onChange: () => o(!s),
          }),
          "Show Craters",
        ),
        Y.createElement("br", null),
        Y.createElement(
          "label",
          null,
          Y.createElement("input", {
            type: "checkbox",
            checked: l,
            onChange: () => a(!l),
          }),
          "Show Mares",
        ),
        Y.createElement("br", null),
        Y.createElement(
          "label",
          null,
          Y.createElement("input", {
            type: "checkbox",
            checked: u,
            onChange: () => c(!u),
          }),
          "Show Near/Far Sides",
        ),
      ),
      Y.createElement("button", { onClick: f }, "Additional Information"),
      Y.createElement(
        "p",
        null,
        "*All data-points features on this web-page are proximate and not meant for scientific use.",
      ),
    ),
    Y.createElement(qx, { map: t }),
    Y.createElement(sC, { map: t, mission: e, show: i }),
    Y.createElement(uC, { map: t, show: s }),
    Y.createElement(hC, { map: t, show: l }),
    Y.createElement(fC, { map: t, show: u }),
    Y.createElement(gC, { map: t }),
    Y.createElement(pC, { map: t }),
  );
}
const _C = Pu.createRoot(document.getElementById("root"));
_C.render(Y.createElement(Y.StrictMode, null, Y.createElement(mC, null)));
