import ue, { useState as re, useRef as de, useEffect as ae } from "react";
var B = { exports: {} }, L = {};
var ne;
function fe() {
  if (ne) return L;
  ne = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function E(h, f, u) {
    var y = null;
    if (u !== void 0 && (y = "" + u), f.key !== void 0 && (y = "" + f.key), "key" in f) {
      u = {};
      for (var g in f)
        g !== "key" && (u[g] = f[g]);
    } else u = f;
    return f = u.ref, {
      $$typeof: i,
      type: h,
      key: y,
      ref: f !== void 0 ? f : null,
      props: u
    };
  }
  return L.Fragment = d, L.jsx = E, L.jsxs = E, L;
}
var W = {};
var oe;
function pe() {
  return oe || (oe = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case k:
          return "Profiler";
        case x:
          return "StrictMode";
        case Z:
          return "Suspense";
        case p:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case S:
            return e.displayName || "Context";
          case j:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case w:
            return a = e.displayName || null, a !== null ? a : i(e.type) || "Memo";
          case O:
            a = e._payload, e = e._init;
            try {
              return i(e(a));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function E(e) {
      try {
        d(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var o = a.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), d(e);
      }
    }
    function h(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var a = i(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function y(e) {
      if (z.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function g(e, a) {
      function o() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function H() {
      var e = i(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, a, o, l, M, F) {
      var t = o.ref;
      return e = {
        $$typeof: Y,
        type: e,
        key: a,
        props: o,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: M
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, a, o, l, M, F) {
      var t = a.children;
      if (t !== void 0)
        if (l)
          if (te(t)) {
            for (l = 0; l < t.length; l++)
              J(t[l]);
            Object.freeze && Object.freeze(t);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else J(t);
      if (z.call(a, "key")) {
        t = i(e);
        var r = Object.keys(a).filter(function(c) {
          return c !== "key";
        });
        l = 0 < r.length ? "{key: someKey, " + r.join(": ..., ") + ": ...}" : "{key: someKey}", K[t + l] || (r = 0 < r.length ? "{" + r.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          t,
          r,
          t
        ), K[t + l] = !0);
      }
      if (t = null, o !== void 0 && (E(o), t = "" + o), y(a) && (E(a.key), t = "" + a.key), "key" in a) {
        o = {};
        for (var n in a)
          n !== "key" && (o[n] = a[n]);
      } else o = a;
      return t && g(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        t,
        o,
        f(),
        M,
        F
      );
    }
    function J(e) {
      D(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? D(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function D(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Y;
    }
    var _ = ue, Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.client.reference"), P = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, te = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, G = {}, X = _.react_stack_bottom_frame.bind(
      _,
      u
    )(), C = v(h(u)), K = {};
    W.Fragment = R, W.jsx = function(e, a, o) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        o,
        !1,
        l ? Error("react-stack-top-frame") : X,
        l ? v(h(e)) : C
      );
    }, W.jsxs = function(e, a, o) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        o,
        !0,
        l ? Error("react-stack-top-frame") : X,
        l ? v(h(e)) : C
      );
    };
  })()), W;
}
var se;
function me() {
  return se || (se = 1, process.env.NODE_ENV === "production" ? B.exports = fe() : B.exports = pe()), B.exports;
}
var s = me();
const le = {
  "YYYY-MM-DD": { separator: "-", order: ["year", "month", "day"], pattern: /^(\d{4})-(\d{2})-(\d{2})$/ },
  "YYYY/MM/DD": { separator: "/", order: ["year", "month", "day"], pattern: /^(\d{4})\/(\d{2})\/(\d{2})$/ },
  "DD-MM-YYYY": { separator: "-", order: ["day", "month", "year"], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  "DD/MM/YYYY": { separator: "/", order: ["day", "month", "year"], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ },
  "MM-DD-YYYY": { separator: "-", order: ["month", "day", "year"], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  "MM/DD/YYYY": { separator: "/", order: ["month", "day", "year"], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ }
};
function ge({
  value: i = "",
  onChange: d,
  placeholder: E = "Select a date",
  id: h,
  name: f,
  label: u,
  minDate: y,
  maxDate: g,
  format: H = "YYYY-MM-DD",
  disabled: T = !1,
  required: N = !1,
  className: J = ""
}) {
  const D = le[H] || le["YYYY-MM-DD"], _ = (t, r) => {
    if (!t) return null;
    const n = t.match(r.pattern);
    if (!n) return null;
    const c = {};
    r.order.forEach(($, I) => {
      c[$] = parseInt(n[I + 1], 10);
    });
    const b = new Date(c.year, c.month - 1, c.day);
    return b.getFullYear() !== c.year || b.getMonth() !== c.month - 1 || b.getDate() !== c.day ? null : b;
  }, Y = (t) => _(t, D), U = (t) => {
    const r = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), c = String(t.getDate()).padStart(2, "0"), b = D, $ = { year: r, month: n, day: c };
    return b.order.map((I) => $[I]).join(b.separator);
  }, R = (t) => {
    if (!t) return "";
    const r = _(t, D);
    return r && !isNaN(r.getTime()) ? t : U(/* @__PURE__ */ new Date());
  }, [x, k] = re(!1), [j, S] = re(() => R(i)), A = de(null), Z = () => {
    const t = R(i);
    if (t) {
      const n = Y(t);
      if (n && !isNaN(n.getTime()))
        return new Date(n.getFullYear(), n.getMonth(), 1);
    }
    const r = /* @__PURE__ */ new Date();
    return new Date(r.getFullYear(), r.getMonth(), 1);
  }, [p, w] = re(Z), O = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Q = [
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
  ae(() => {
    const t = R(i);
    S(t), i && t !== i && d && d(t);
  }, [i]), ae(() => {
    const t = (r) => {
      A.current && !A.current.contains(r.target) && k(!1);
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, []);
  const ee = (t) => {
    const r = t.getFullYear(), n = t.getMonth(), c = new Date(r, n, 1), $ = new Date(r, n + 1, 0).getDate(), I = c.getDay(), V = [], ce = new Date(r, n, 0).getDate();
    for (let m = I - 1; m >= 0; m--)
      V.push({
        date: new Date(r, n - 1, ce - m),
        isCurrentMonth: !1
      });
    for (let m = 1; m <= $; m++)
      V.push({
        date: new Date(r, n, m),
        isCurrentMonth: !0
      });
    const ie = 35 - V.length;
    for (let m = 1; m <= ie; m++)
      V.push({
        date: new Date(r, n + 1, m),
        isCurrentMonth: !1
      });
    return V;
  }, P = () => {
    const t = (/* @__PURE__ */ new Date()).getFullYear(), r = [];
    for (let n = t - 50; n <= t + 50; n++)
      r.push(n);
    return r;
  }, z = (t) => {
    const r = parseInt(t.target.value, 10);
    w(new Date(p.getFullYear(), r, 1));
  }, te = (t) => {
    const r = parseInt(t.target.value, 10);
    w(new Date(r, p.getMonth(), 1));
  }, v = (t) => !(!t || y && t < y || g && t > g), q = (t) => {
    if (!t || !j) return !1;
    const r = Y(j);
    return r ? t.toDateString() === r.toDateString() : !1;
  }, G = P(), X = (t) => t ? t.toDateString() === (/* @__PURE__ */ new Date()).toDateString() : !1, C = (t) => {
    if (!t || !v(t)) return;
    const r = U(t);
    S(r), k(!1), d && d(r);
  }, K = () => {
    w(new Date(p.getFullYear(), p.getMonth() - 1, 1));
  }, e = () => {
    w(new Date(p.getFullYear(), p.getMonth() + 1, 1));
  }, a = (t) => t.split("").filter((r) => /\d/.test(r) || r === "-" || r === "/").join(""), o = (t) => {
    const r = D.separator;
    return t.replace(/[-/]/g, r);
  }, l = (t) => {
    const r = a(t.target.value);
    S(r);
    const n = o(r), c = Y(n);
    c && v(c) && (w(new Date(c.getFullYear(), c.getMonth(), 1)), d && d(n));
  }, M = (t) => {
    if (["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
      t.key === "Escape" ? k(!1) : t.key === "Enter" && !x && k(!0);
      return;
    }
    t.ctrlKey || t.metaKey || t.key === "-" || t.key === "/" || /^\d$/.test(t.key) || t.preventDefault();
  }, F = ee(p);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `datepicker-container ${J}`,
      ref: A,
      children: [
        u && /* @__PURE__ */ s.jsxs("label", { htmlFor: h, className: "datepicker-label", children: [
          u,
          N && /* @__PURE__ */ s.jsx("span", { className: "datepicker-required", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "datepicker-input-wrapper", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              id: h,
              name: f,
              value: j,
              onChange: l,
              onFocus: () => !T && k(!0),
              onKeyDown: M,
              placeholder: E,
              disabled: T,
              required: N,
              className: "datepicker-input",
              "aria-label": u || "Select date",
              "aria-expanded": x,
              "aria-haspopup": "dialog"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "datepicker-toggle",
              onClick: () => !T && k(!x),
              disabled: T,
              "aria-label": "Toggle calendar",
              children: "📅"
            }
          )
        ] }),
        x && /* @__PURE__ */ s.jsxs("div", { className: "datepicker-calendar", role: "dialog", "aria-label": "Calendar", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "datepicker-header", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-nav-btn",
                onClick: K,
                "aria-label": "Previous month",
                children: "◀"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { className: "datepicker-selectors", children: [
              /* @__PURE__ */ s.jsx(
                "select",
                {
                  className: "datepicker-month-select",
                  value: p.getMonth(),
                  onChange: z,
                  "aria-label": "Select month",
                  children: Q.map((t, r) => /* @__PURE__ */ s.jsx("option", { value: r, children: t }, t))
                }
              ),
              /* @__PURE__ */ s.jsx(
                "select",
                {
                  className: "datepicker-year-select",
                  value: p.getFullYear(),
                  onChange: te,
                  "aria-label": "Select year",
                  children: G.map((t) => /* @__PURE__ */ s.jsx("option", { value: t, children: t }, t))
                }
              )
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-nav-btn",
                onClick: e,
                "aria-label": "Next month",
                children: "▶"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "datepicker-weekdays", children: O.map((t) => /* @__PURE__ */ s.jsx("span", { className: "datepicker-weekday", children: t }, t)) }),
          /* @__PURE__ */ s.jsx("div", { className: "datepicker-days", children: F.map((t, r) => /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: `datepicker-day ${t.isCurrentMonth ? "" : "datepicker-day-other-month"} ${q(t.date) ? "datepicker-day-selected" : ""} ${X(t.date) ? "datepicker-day-today" : ""} ${v(t.date) ? "" : "datepicker-day-disabled"}`,
              onClick: () => C(t.date),
              disabled: !v(t.date),
              "aria-label": t.date.toDateString(),
              children: t.date.getDate()
            },
            r
          )) }),
          /* @__PURE__ */ s.jsxs("div", { className: "datepicker-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-today-btn",
                onClick: () => C(/* @__PURE__ */ new Date()),
                children: "Today"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "datepicker-clear-btn",
                onClick: () => {
                  S(""), d && d("");
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
  ge as DatePicker
};
