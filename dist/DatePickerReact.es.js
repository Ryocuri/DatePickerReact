import te, { useState as B, useRef as ne, useEffect as Z } from "react";
var L = { exports: {} }, P = {};
var Q;
function ae() {
  if (Q) return P;
  Q = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(k, i, c) {
    var E = null;
    if (c !== void 0 && (E = "" + c), i.key !== void 0 && (E = "" + i.key), "key" in i) {
      c = {};
      for (var v in i)
        v !== "key" && (c[v] = i[v]);
    } else c = i;
    return i = c.ref, {
      $$typeof: f,
      type: k,
      key: E,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return P.Fragment = d, P.jsx = y, P.jsxs = y, P;
}
var C = {};
var K;
function oe() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && (function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === $ ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case N:
          return "Profiler";
        case g:
          return "StrictMode";
        case M:
          return "Suspense";
        case U:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case j:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case W:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case T:
            return t = e.displayName || null, t !== null ? t : f(e.type) || "Memo";
          case O:
            t = e._payload, e = e._init;
            try {
              return f(e(t));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function y(e) {
      try {
        d(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var a = t.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), d(e);
      }
    }
    function k(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var t = f(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (F.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, t) {
      function a() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function H() {
      var e = f(this.type);
      return r[e] || (r[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, t, a, o, m, G) {
      var s = a.ref;
      return e = {
        $$typeof: b,
        type: e,
        key: t,
        props: a,
        _owner: o
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: H
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: m
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, t, a, o, m, G) {
      var s = t.children;
      if (s !== void 0)
        if (o)
          if (z(s)) {
            for (o = 0; o < s.length; o++)
              Y(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Y(s);
      if (F.call(t, "key")) {
        s = f(e);
        var S = Object.keys(t).filter(function(re) {
          return re !== "key";
        });
        o = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", x[s + o] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          S,
          s
        ), x[s + o] = !0);
      }
      if (s = null, a !== void 0 && (y(a), s = "" + a), E(t) && (y(t.key), s = "" + t.key), "key" in t) {
        a = {};
        for (var X in t)
          X !== "key" && (a[X] = t[X]);
      } else a = t;
      return s && v(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        s,
        a,
        i(),
        m,
        G
      );
    }
    function Y(e) {
      _(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? _(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    var p = te, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), U = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), $ = /* @__PURE__ */ Symbol.for("react.client.reference"), D = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, z = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, r = {}, n = p.react_stack_bottom_frame.bind(
      p,
      c
    )(), u = A(k(c)), x = {};
    C.Fragment = h, C.jsx = function(e, t, a) {
      var o = 1e4 > D.recentlyCreatedOwnerStacks++;
      return w(
        e,
        t,
        a,
        !1,
        o ? Error("react-stack-top-frame") : n,
        o ? A(k(e)) : u
      );
    }, C.jsxs = function(e, t, a) {
      var o = 1e4 > D.recentlyCreatedOwnerStacks++;
      return w(
        e,
        t,
        a,
        !0,
        o ? Error("react-stack-top-frame") : n,
        o ? A(k(e)) : u
      );
    };
  })()), C;
}
var ee;
function se() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? L.exports = ae() : L.exports = oe()), L.exports;
}
var l = se();
function ce({
  value: f = "",
  onChange: d,
  placeholder: y = "Select a date",
  id: k,
  name: i,
  label: c,
  minDate: E,
  maxDate: v,
  format: H = "YYYY-MM-DD",
  disabled: R = !1,
  required: w = !1,
  className: Y = ""
}) {
  const [_, p] = B(!1), [b, j] = B(/* @__PURE__ */ new Date()), [h, g] = B(f), N = ne(null), W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], J = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  Z(() => {
    g(f);
  }, [f]), Z(() => {
    const r = (n) => {
      N.current && !N.current.contains(n.target) && p(!1);
    };
    return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
  }, []);
  const V = (r) => {
    const n = r.getFullYear(), u = String(r.getMonth() + 1).padStart(2, "0"), x = String(r.getDate()).padStart(2, "0");
    return `${n}-${u}-${x}`;
  }, M = (r) => {
    if (!r) return null;
    const n = r.split("-");
    return n.length === 3 ? new Date(n[0], n[1] - 1, n[2]) : null;
  }, U = (r) => {
    const n = r.getFullYear(), u = r.getMonth(), x = new Date(n, u, 1), t = new Date(n, u + 1, 0).getDate(), a = x.getDay(), o = [];
    for (let m = 0; m < a; m++)
      o.push(null);
    for (let m = 1; m <= t; m++)
      o.push(new Date(n, u, m));
    return o;
  }, T = (r) => !(!r || E && r < E || v && r > v), O = (r) => {
    if (!r || !h) return !1;
    const n = M(h);
    return n ? r.toDateString() === n.toDateString() : !1;
  }, q = (r) => r ? r.toDateString() === (/* @__PURE__ */ new Date()).toDateString() : !1, $ = (r) => {
    if (!r || !T(r)) return;
    const n = V(r);
    g(n), p(!1), d && d(n);
  }, D = () => {
    j(new Date(b.getFullYear(), b.getMonth() - 1, 1));
  }, F = () => {
    j(new Date(b.getFullYear(), b.getMonth() + 1, 1));
  }, z = (r) => {
    const n = r.target.value;
    g(n);
    const u = M(n);
    u && T(u) && (j(u), d && d(n));
  }, A = (r) => {
    r.key === "Escape" ? p(!1) : r.key === "Enter" && !_ && p(!0);
  }, I = U(b);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `datepicker-container ${Y}`,
      ref: N,
      children: [
        c && /* @__PURE__ */ l.jsxs("label", { htmlFor: k, className: "datepicker-label", children: [
          c,
          w && /* @__PURE__ */ l.jsx("span", { className: "datepicker-required", children: "*" })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "datepicker-input-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              id: k,
              name: i,
              value: h,
              onChange: z,
              onFocus: () => !R && p(!0),
              onKeyDown: A,
              placeholder: y,
              disabled: R,
              required: w,
              className: "datepicker-input",
              "aria-label": c || "Select date",
              "aria-expanded": _,
              "aria-haspopup": "dialog"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "datepicker-toggle",
              onClick: () => !R && p(!_),
              disabled: R,
              "aria-label": "Toggle calendar",
              children: "📅"
            }
          )
        ] }),
        _ && /* @__PURE__ */ l.jsxs("div", { className: "datepicker-calendar", role: "dialog", "aria-label": "Calendar", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "datepicker-header", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-nav-btn",
                onClick: D,
                "aria-label": "Previous month",
                children: "◀"
              }
            ),
            /* @__PURE__ */ l.jsxs("span", { className: "datepicker-month-year", children: [
              J[b.getMonth()],
              " ",
              b.getFullYear()
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-nav-btn",
                onClick: F,
                "aria-label": "Next month",
                children: "▶"
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "datepicker-weekdays", children: W.map((r) => /* @__PURE__ */ l.jsx("span", { className: "datepicker-weekday", children: r }, r)) }),
          /* @__PURE__ */ l.jsx("div", { className: "datepicker-days", children: I.map((r, n) => /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `datepicker-day ${r ? "" : "datepicker-day-empty"} ${r && O(r) ? "datepicker-day-selected" : ""} ${r && q(r) ? "datepicker-day-today" : ""} ${r && !T(r) ? "datepicker-day-disabled" : ""}`,
              onClick: () => $(r),
              disabled: !r || !T(r),
              "aria-label": r ? r.toDateString() : void 0,
              children: r ? r.getDate() : ""
            },
            n
          )) }),
          /* @__PURE__ */ l.jsxs("div", { className: "datepicker-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-today-btn",
                onClick: () => $(/* @__PURE__ */ new Date()),
                children: "Today"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-clear-btn",
                onClick: () => {
                  g(""), d && d("");
                },
                children: "Clear"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ce as DatePicker
};
