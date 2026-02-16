import oe, { useState as H, useRef as se, useEffect as K } from "react";
var W = { exports: {} }, A = {};
var ee;
function le() {
  if (ee) return A;
  ee = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function E(m, c, s) {
    var h = null;
    if (s !== void 0 && (h = "" + s), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      s = {};
      for (var v in c)
        v !== "key" && (s[v] = c[v]);
    } else s = c;
    return c = s.ref, {
      $$typeof: l,
      type: m,
      key: h,
      ref: c !== void 0 ? c : null,
      props: s
    };
  }
  return A.Fragment = i, A.jsx = E, A.jsxs = E, A;
}
var O = {};
var te;
function ce() {
  return te || (te = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === X ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case f:
          return "Profiler";
        case J:
          return "StrictMode";
        case q:
          return "Suspense";
        case M:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case x:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case R:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return t = e.displayName || null, t !== null ? t : l(e.type) || "Memo";
          case S:
            t = e._payload, e = e._init;
            try {
              return l(e(t));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function E(e) {
      try {
        i(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var r = t.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), i(e);
      }
    }
    function m(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var t = l(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (C.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, t) {
      function r() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: r,
        configurable: !0
      });
    }
    function Z() {
      var e = l(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, t, r, n, b, L) {
      var o = r.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: t,
        props: r,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: Z
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
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function D(e, t, r, n, b, L) {
      var o = t.children;
      if (o !== void 0)
        if (n)
          if (B(o)) {
            for (n = 0; n < o.length; n++)
              P(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(o);
      if (C.call(t, "key")) {
        o = l(e);
        var k = Object.keys(t).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", I[o + n] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          k,
          o
        ), I[o + n] = !0);
      }
      if (o = null, r !== void 0 && (E(r), o = "" + r), h(t) && (E(t.key), o = "" + t.key), "key" in t) {
        r = {};
        for (var p in t)
          p !== "key" && (r[p] = t[p]);
      } else r = t;
      return o && v(
        r,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        o,
        r,
        c(),
        b,
        L
      );
    }
    function P(e) {
      _(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === S && (e._payload.status === "fulfilled" ? _(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var u = oe, w = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), z = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), X = /* @__PURE__ */ Symbol.for("react.client.reference"), g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, B = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var j, Y = {}, F = u.react_stack_bottom_frame.bind(
      u,
      s
    )(), $ = N(m(s)), I = {};
    O.Fragment = y, O.jsx = function(e, t, r) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return D(
        e,
        t,
        r,
        !1,
        n ? Error("react-stack-top-frame") : F,
        n ? N(m(e)) : $
      );
    }, O.jsxs = function(e, t, r) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return D(
        e,
        t,
        r,
        !0,
        n ? Error("react-stack-top-frame") : F,
        n ? N(m(e)) : $
      );
    };
  })()), O;
}
var re;
function ie() {
  return re || (re = 1, process.env.NODE_ENV === "production" ? W.exports = le() : W.exports = ce()), W.exports;
}
var a = ie();
function fe({
  value: l = "",
  onChange: i,
  placeholder: E = "Select a date",
  id: m,
  name: c,
  label: s,
  minDate: h,
  maxDate: v,
  format: Z = "YYYY-MM-DD",
  disabled: T = !1,
  required: D = !1,
  className: P = ""
}) {
  const [_, u] = H(!1), [w, x] = H(l), y = se(null), J = () => {
    if (l) {
      const r = l.split("-");
      if (r.length === 3) {
        const n = new Date(r[0], r[1] - 1, r[2]);
        if (!isNaN(n.getTime()))
          return new Date(n.getFullYear(), n.getMonth(), 1);
      }
    }
    const t = /* @__PURE__ */ new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  }, [f, R] = H(J), V = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], U = [
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
  K(() => {
    x(l);
  }, [l]), K(() => {
    const t = (r) => {
      y.current && !y.current.contains(r.target) && u(!1);
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, []);
  const q = (t) => {
    const r = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), b = String(t.getDate()).padStart(2, "0");
    return `${r}-${n}-${b}`;
  }, M = (t) => {
    if (!t) return null;
    const r = t.split("-");
    return r.length === 3 ? new Date(r[0], r[1] - 1, r[2]) : null;
  }, z = (t) => {
    const r = t.getFullYear(), n = t.getMonth(), b = new Date(r, n, 1), o = new Date(r, n + 1, 0).getDate(), k = b.getDay(), p = [], ne = new Date(r, n, 0).getDate();
    for (let d = k - 1; d >= 0; d--)
      p.push({
        date: new Date(r, n - 1, ne - d),
        isCurrentMonth: !1
      });
    for (let d = 1; d <= o; d++)
      p.push({
        date: new Date(r, n, d),
        isCurrentMonth: !0
      });
    const ae = 42 - p.length;
    for (let d = 1; d <= ae; d++)
      p.push({
        date: new Date(r, n + 1, d),
        isCurrentMonth: !1
      });
    return p;
  }, S = () => {
    const t = (/* @__PURE__ */ new Date()).getFullYear(), r = [];
    for (let n = t - 50; n <= t + 50; n++)
      r.push(n);
    return r;
  }, G = (t) => {
    const r = parseInt(t.target.value, 10);
    R(new Date(f.getFullYear(), r, 1));
  }, X = (t) => {
    const r = parseInt(t.target.value, 10);
    R(new Date(r, f.getMonth(), 1));
  }, g = (t) => !(!t || h && t < h || v && t > v), C = (t) => {
    if (!t || !w) return !1;
    const r = M(w);
    return r ? t.toDateString() === r.toDateString() : !1;
  }, B = S(), N = (t) => t ? t.toDateString() === (/* @__PURE__ */ new Date()).toDateString() : !1, j = (t) => {
    if (!t || !g(t)) return;
    const r = q(t);
    x(r), u(!1), i && i(r);
  }, Y = () => {
    R(new Date(f.getFullYear(), f.getMonth() - 1, 1));
  }, F = () => {
    R(new Date(f.getFullYear(), f.getMonth() + 1, 1));
  }, $ = (t) => {
    const r = t.target.value;
    x(r);
    const n = M(r);
    n && g(n) && (R(n), i && i(r));
  }, I = (t) => {
    t.key === "Escape" ? u(!1) : t.key === "Enter" && !_ && u(!0);
  }, e = z(f);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `datepicker-container ${P}`,
      ref: y,
      children: [
        s && /* @__PURE__ */ a.jsxs("label", { htmlFor: m, className: "datepicker-label", children: [
          s,
          D && /* @__PURE__ */ a.jsx("span", { className: "datepicker-required", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "datepicker-input-wrapper", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              id: m,
              name: c,
              value: w,
              onChange: $,
              onFocus: () => !T && u(!0),
              onKeyDown: I,
              placeholder: E,
              disabled: T,
              required: D,
              className: "datepicker-input",
              "aria-label": s || "Select date",
              "aria-expanded": _,
              "aria-haspopup": "dialog"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "datepicker-toggle",
              onClick: () => !T && u(!_),
              disabled: T,
              "aria-label": "Toggle calendar",
              children: "📅"
            }
          )
        ] }),
        _ && /* @__PURE__ */ a.jsxs("div", { className: "datepicker-calendar", role: "dialog", "aria-label": "Calendar", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "datepicker-header", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-nav-btn",
                onClick: Y,
                "aria-label": "Previous month",
                children: "◀"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { className: "datepicker-selectors", children: [
              /* @__PURE__ */ a.jsx(
                "select",
                {
                  className: "datepicker-month-select",
                  value: f.getMonth(),
                  onChange: G,
                  "aria-label": "Select month",
                  children: U.map((t, r) => /* @__PURE__ */ a.jsx("option", { value: r, children: t }, t))
                }
              ),
              /* @__PURE__ */ a.jsx(
                "select",
                {
                  className: "datepicker-year-select",
                  value: f.getFullYear(),
                  onChange: X,
                  "aria-label": "Select year",
                  children: B.map((t) => /* @__PURE__ */ a.jsx("option", { value: t, children: t }, t))
                }
              )
            ] }),
            /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsx("div", { className: "datepicker-weekdays", children: V.map((t) => /* @__PURE__ */ a.jsx("span", { className: "datepicker-weekday", children: t }, t)) }),
          /* @__PURE__ */ a.jsx("div", { className: "datepicker-days", children: e.map((t, r) => /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: `datepicker-day ${t.isCurrentMonth ? "" : "datepicker-day-other-month"} ${C(t.date) ? "datepicker-day-selected" : ""} ${N(t.date) ? "datepicker-day-today" : ""} ${g(t.date) ? "" : "datepicker-day-disabled"}`,
              onClick: () => j(t.date),
              disabled: !g(t.date),
              "aria-label": t.date.toDateString(),
              children: t.date.getDate()
            },
            r
          )) }),
          /* @__PURE__ */ a.jsxs("div", { className: "datepicker-footer", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-today-btn",
                onClick: () => j(/* @__PURE__ */ new Date()),
                children: "Today"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-clear-btn",
                onClick: () => {
                  x(""), i && i("");
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
  fe as DatePicker
};
