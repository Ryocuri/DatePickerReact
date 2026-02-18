import ie, { useState as te, useRef as ue, useEffect as re } from "react";
var K = { exports: {} }, V = {};
var ae;
function de() {
  if (ae) return V;
  ae = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function D(y, f, u) {
    var g = null;
    if (u !== void 0 && (g = "" + u), f.key !== void 0 && (g = "" + f.key), "key" in f) {
      u = {};
      for (var k in f)
        k !== "key" && (u[k] = f[k]);
    } else u = f;
    return f = u.ref, {
      $$typeof: i,
      type: y,
      key: g,
      ref: f !== void 0 ? f : null,
      props: u
    };
  }
  return V.Fragment = d, V.jsx = D, V.jsxs = D, V;
}
var L = {};
var ne;
function fe() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case E:
          return "Profiler";
        case x:
          return "StrictMode";
        case H:
          return "Suspense";
        case p:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case S:
            return e.displayName || "Context";
          case j:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
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
    function D(e) {
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
    function y(e) {
      if (e === w) return "<>";
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
    function g(e) {
      if (U.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, a) {
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
    function B() {
      var e = i(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, a, o, l, M, t) {
      var r = o.ref;
      return e = {
        $$typeof: Y,
        type: e,
        key: a,
        props: o,
        _owner: l
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: B
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
        value: t
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, a, o, l, M, t) {
      var r = a.children;
      if (r !== void 0)
        if (l)
          if (ee(r)) {
            for (l = 0; l < r.length; l++)
              W(r[l]);
            Object.freeze && Object.freeze(r);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(r);
      if (U.call(a, "key")) {
        r = i(e);
        var n = Object.keys(a).filter(function(h) {
          return h !== "key";
        });
        l = 0 < n.length ? "{key: someKey, " + n.join(": ..., ") + ": ...}" : "{key: someKey}", X[r + l] || (n = 0 < n.length ? "{" + n.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          r,
          n,
          r
        ), X[r + l] = !0);
      }
      if (r = null, o !== void 0 && (D(o), r = "" + o), g(a) && (D(a.key), r = "" + a.key), "key" in a) {
        o = {};
        for (var c in a)
          c !== "key" && (o[c] = a[c]);
      } else o = a;
      return r && k(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        r,
        o,
        f(),
        M,
        t
      );
    }
    function W(e) {
      v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function v(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Y;
    }
    var _ = ie, Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), J = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), P = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, ee = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, z = {}, G = _.react_stack_bottom_frame.bind(
      _,
      u
    )(), C = b(y(u)), X = {};
    L.Fragment = w, L.jsx = function(e, a, o) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        o,
        !1,
        l ? Error("react-stack-top-frame") : G,
        l ? b(y(e)) : C
      );
    }, L.jsxs = function(e, a, o) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        o,
        !0,
        l ? Error("react-stack-top-frame") : G,
        l ? b(y(e)) : C
      );
    };
  })()), L;
}
var oe;
function pe() {
  return oe || (oe = 1, process.env.NODE_ENV === "production" ? K.exports = de() : K.exports = fe()), K.exports;
}
var s = pe();
const se = {
  "YYYY-MM-DD": { separator: "-", order: ["year", "month", "day"], pattern: /^(\d{4})-(\d{2})-(\d{2})$/ },
  "YYYY/MM/DD": { separator: "/", order: ["year", "month", "day"], pattern: /^(\d{4})\/(\d{2})\/(\d{2})$/ },
  "DD-MM-YYYY": { separator: "-", order: ["day", "month", "year"], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  "DD/MM/YYYY": { separator: "/", order: ["day", "month", "year"], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ },
  "MM-DD-YYYY": { separator: "-", order: ["month", "day", "year"], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  "MM/DD/YYYY": { separator: "/", order: ["month", "day", "year"], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ }
};
function ye({
  value: i = "",
  onChange: d,
  placeholder: D = "Select a date",
  id: y,
  name: f,
  label: u,
  minDate: g,
  maxDate: k,
  format: B = "YYYY-MM-DD",
  disabled: T = !1,
  required: N = !1,
  className: W = ""
}) {
  const v = se[B] || se["YYYY-MM-DD"], _ = (t, r) => {
    if (!t) return null;
    const n = t.match(r.pattern);
    if (!n) return null;
    const c = {};
    r.order.forEach((F, $) => {
      c[F] = parseInt(n[$ + 1], 10);
    });
    const h = new Date(c.year, c.month - 1, c.day);
    return h.getFullYear() !== c.year || h.getMonth() !== c.month - 1 || h.getDate() !== c.day ? null : h;
  }, Y = (t) => _(t, v), J = (t) => {
    const r = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), c = String(t.getDate()).padStart(2, "0"), h = v, F = { year: r, month: n, day: c };
    return h.order.map(($) => F[$]).join(h.separator);
  }, w = (t) => {
    if (!t) return "";
    const r = _(t, v);
    return r && !isNaN(r.getTime()) ? t : J(/* @__PURE__ */ new Date());
  }, [x, E] = te(!1), [j, S] = te(() => w(i)), A = ue(null), H = () => {
    const t = w(i);
    if (t) {
      const n = Y(t);
      if (n && !isNaN(n.getTime()))
        return new Date(n.getFullYear(), n.getMonth(), 1);
    }
    const r = /* @__PURE__ */ new Date();
    return new Date(r.getFullYear(), r.getMonth(), 1);
  }, [p, R] = te(H), O = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Z = [
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
  re(() => {
    const t = w(i);
    S(t), i && t !== i && d && d(t);
  }, [i]), re(() => {
    const t = (r) => {
      A.current && !A.current.contains(r.target) && E(!1);
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, []);
  const Q = (t) => {
    const r = t.getFullYear(), n = t.getMonth(), c = new Date(r, n, 1), F = new Date(r, n + 1, 0).getDate(), $ = c.getDay(), I = [], le = new Date(r, n, 0).getDate();
    for (let m = $ - 1; m >= 0; m--)
      I.push({
        date: new Date(r, n - 1, le - m),
        isCurrentMonth: !1
      });
    for (let m = 1; m <= F; m++)
      I.push({
        date: new Date(r, n, m),
        isCurrentMonth: !0
      });
    const ce = 35 - I.length;
    for (let m = 1; m <= ce; m++)
      I.push({
        date: new Date(r, n + 1, m),
        isCurrentMonth: !1
      });
    return I;
  }, P = () => {
    const t = (/* @__PURE__ */ new Date()).getFullYear(), r = [];
    for (let n = t - 50; n <= t + 50; n++)
      r.push(n);
    return r;
  }, U = (t) => {
    const r = parseInt(t.target.value, 10);
    R(new Date(p.getFullYear(), r, 1));
  }, ee = (t) => {
    const r = parseInt(t.target.value, 10);
    R(new Date(r, p.getMonth(), 1));
  }, b = (t) => !(!t || g && t < g || k && t > k), q = (t) => {
    if (!t || !j) return !1;
    const r = Y(j);
    return r ? t.toDateString() === r.toDateString() : !1;
  }, z = P(), G = (t) => t ? t.toDateString() === (/* @__PURE__ */ new Date()).toDateString() : !1, C = (t) => {
    if (!t || !b(t)) return;
    const r = J(t);
    S(r), E(!1), d && d(r);
  }, X = () => {
    R(new Date(p.getFullYear(), p.getMonth() - 1, 1));
  }, e = () => {
    R(new Date(p.getFullYear(), p.getMonth() + 1, 1));
  }, a = (t) => {
    const r = v.separator, n = new RegExp(`[^0-9${r === "/" ? "\\/" : r}]`, "g");
    return t.replace(n, "");
  }, o = (t) => {
    const r = a(t.target.value);
    S(r);
    const n = Y(r);
    n && b(n) && (R(new Date(n.getFullYear(), n.getMonth(), 1)), d && d(r));
  }, l = (t) => {
    if (["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
      t.key === "Escape" ? E(!1) : t.key === "Enter" && !x && E(!0);
      return;
    }
    if (t.ctrlKey || t.metaKey)
      return;
    const n = v.separator;
    t.key !== n && (/^\d$/.test(t.key) || t.preventDefault());
  }, M = Q(p);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `datepicker-container ${W}`,
      ref: A,
      children: [
        u && /* @__PURE__ */ s.jsxs("label", { htmlFor: y, className: "datepicker-label", children: [
          u,
          N && /* @__PURE__ */ s.jsx("span", { className: "datepicker-required", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "datepicker-input-wrapper", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              id: y,
              name: f,
              value: j,
              onChange: o,
              onFocus: () => !T && E(!0),
              onKeyDown: l,
              placeholder: D,
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
              onClick: () => !T && E(!x),
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
                onClick: X,
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
                  onChange: U,
                  "aria-label": "Select month",
                  children: Z.map((t, r) => /* @__PURE__ */ s.jsx("option", { value: r, children: t }, t))
                }
              ),
              /* @__PURE__ */ s.jsx(
                "select",
                {
                  className: "datepicker-year-select",
                  value: p.getFullYear(),
                  onChange: ee,
                  "aria-label": "Select year",
                  children: z.map((t) => /* @__PURE__ */ s.jsx("option", { value: t, children: t }, t))
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
          /* @__PURE__ */ s.jsx("div", { className: "datepicker-days", children: M.map((t, r) => /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: `datepicker-day ${t.isCurrentMonth ? "" : "datepicker-day-other-month"} ${q(t.date) ? "datepicker-day-selected" : ""} ${G(t.date) ? "datepicker-day-today" : ""} ${b(t.date) ? "" : "datepicker-day-disabled"}`,
              onClick: () => C(t.date),
              disabled: !b(t.date),
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
  ye as DatePicker
};
