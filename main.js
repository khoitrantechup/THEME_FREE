(() => {
    var t = {
            9662: (t, n, e) => {
                var r = e(7854),
                    o = e(614),
                    a = e(6330),
                    i = r.TypeError;
                t.exports = function (t) {
                    if (o(t)) return t;
                    throw i(a(t) + " is not a function");
                };
            },
            9670: (t, n, e) => {
                var r = e(7854),
                    o = e(111),
                    a = r.String,
                    i = r.TypeError;
                t.exports = function (t) {
                    if (o(t)) return t;
                    throw i(a(t) + " is not an object");
                };
            },
            8533: (t, n, e) => {
                "use strict";
                var r = e(2092).forEach,
                    o = e(9341)("forEach");
                t.exports = o
                    ? [].forEach
                    : function (t) {
                          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                      };
            },
            1318: (t, n, e) => {
                var r = e(5656),
                    o = e(1400),
                    a = e(6244),
                    i = function (t) {
                        return function (n, e, i) {
                            var s,
                                l = r(n),
                                c = a(l),
                                u = o(i, c);
                            if (t && e != e) {
                                for (; c > u; ) if ((s = l[u++]) != s) return !0;
                            } else for (; c > u; u++) if ((t || u in l) && l[u] === e) return t || u || 0;
                            return !t && -1;
                        };
                    };
                t.exports = { includes: i(!0), indexOf: i(!1) };
            },
            2092: (t, n, e) => {
                var r = e(9974),
                    o = e(1702),
                    a = e(8361),
                    i = e(7908),
                    s = e(6244),
                    l = e(5417),
                    c = o([].push),
                    u = function (t) {
                        var n = 1 == t,
                            e = 2 == t,
                            o = 3 == t,
                            u = 4 == t,
                            d = 6 == t,
                            p = 7 == t,
                            f = 5 == t || d;
                        return function (m, h, b, g) {
                            for (
                                var v,
                                    w,
                                    y = i(m),
                                    k = a(y),
                                    x = r(h, b),
                                    S = s(k),
                                    O = 0,
                                    j = g || l,
                                    E = n ? j(m, S) : e || p ? j(m, 0) : void 0;
                                S > O;
                                O++
                            )
                                if ((f || O in k) && ((w = x((v = k[O]), O, y)), t))
                                    if (n) E[O] = w;
                                    else if (w)
                                        switch (t) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return v;
                                            case 6:
                                                return O;
                                            case 2:
                                                c(E, v);
                                        }
                                    else
                                        switch (t) {
                                            case 4:
                                                return !1;
                                            case 7:
                                                c(E, v);
                                        }
                            return d ? -1 : o || u ? u : E;
                        };
                    };
                t.exports = {
                    forEach: u(0),
                    map: u(1),
                    filter: u(2),
                    some: u(3),
                    every: u(4),
                    find: u(5),
                    findIndex: u(6),
                    filterReject: u(7)
                };
            },
            1194: (t, n, e) => {
                var r = e(7293),
                    o = e(5112),
                    a = e(7392),
                    i = o("species");
                t.exports = function (t) {
                    return (
                        a >= 51 ||
                        !r(function () {
                            var n = [];
                            return (
                                ((n.constructor = {})[i] = function () {
                                    return { foo: 1 };
                                }),
                                1 !== n[t](Boolean).foo
                            );
                        })
                    );
                };
            },
            9341: (t, n, e) => {
                "use strict";
                var r = e(7293);
                t.exports = function (t, n) {
                    var e = [][t];
                    return (
                        !!e &&
                        r(function () {
                            e.call(
                                null,
                                n ||
                                    function () {
                                        return 1;
                                    },
                                1
                            );
                        })
                    );
                };
            },
            1589: (t, n, e) => {
                var r = e(7854),
                    o = e(1400),
                    a = e(6244),
                    i = e(6135),
                    s = r.Array,
                    l = Math.max;
                t.exports = function (t, n, e) {
                    for (
                        var r = a(t), c = o(n, r), u = o(void 0 === e ? r : e, r), d = s(l(u - c, 0)), p = 0;
                        c < u;
                        c++, p++
                    )
                        i(d, p, t[c]);
                    return (d.length = p), d;
                };
            },
            206: (t, n, e) => {
                var r = e(1702);
                t.exports = r([].slice);
            },
            7475: (t, n, e) => {
                var r = e(7854),
                    o = e(3157),
                    a = e(4411),
                    i = e(111),
                    s = e(5112)("species"),
                    l = r.Array;
                t.exports = function (t) {
                    var n;
                    return (
                        o(t) &&
                            ((n = t.constructor),
                            ((a(n) && (n === l || o(n.prototype))) || (i(n) && null === (n = n[s]))) && (n = void 0)),
                        void 0 === n ? l : n
                    );
                };
            },
            5417: (t, n, e) => {
                var r = e(7475);
                t.exports = function (t, n) {
                    return new (r(t))(0 === n ? 0 : n);
                };
            },
            4326: (t, n, e) => {
                var r = e(1702),
                    o = r({}.toString),
                    a = r("".slice);
                t.exports = function (t) {
                    return a(o(t), 8, -1);
                };
            },
            648: (t, n, e) => {
                var r = e(7854),
                    o = e(1694),
                    a = e(614),
                    i = e(4326),
                    s = e(5112)("toStringTag"),
                    l = r.Object,
                    c =
                        "Arguments" ==
                        i(
                            (function () {
                                return arguments;
                            })()
                        );
                t.exports = o
                    ? i
                    : function (t) {
                          var n, e, r;
                          return void 0 === t
                              ? "Undefined"
                              : null === t
                              ? "Null"
                              : "string" ==
                                typeof (e = (function (t, n) {
                                    try {
                                        return t[n];
                                    } catch (t) {}
                                })((n = l(t)), s))
                              ? e
                              : c
                              ? i(n)
                              : "Object" == (r = i(n)) && a(n.callee)
                              ? "Arguments"
                              : r;
                      };
            },
            9920: (t, n, e) => {
                var r = e(2597),
                    o = e(3887),
                    a = e(1236),
                    i = e(3070);
                t.exports = function (t, n, e) {
                    for (var s = o(n), l = i.f, c = a.f, u = 0; u < s.length; u++) {
                        var d = s[u];
                        r(t, d) || (e && r(e, d)) || l(t, d, c(n, d));
                    }
                };
            },
            4230: (t, n, e) => {
                var r = e(1702),
                    o = e(4488),
                    a = e(1340),
                    i = /"/g,
                    s = r("".replace);
                t.exports = function (t, n, e, r) {
                    var l = a(o(t)),
                        c = "<" + n;
                    return "" !== e && (c += " " + e + '="' + s(a(r), i, "&quot;") + '"'), c + ">" + l + "</" + n + ">";
                };
            },
            8880: (t, n, e) => {
                var r = e(9781),
                    o = e(3070),
                    a = e(9114);
                t.exports = r
                    ? function (t, n, e) {
                          return o.f(t, n, a(1, e));
                      }
                    : function (t, n, e) {
                          return (t[n] = e), t;
                      };
            },
            9114: t => {
                t.exports = function (t, n) {
                    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
                };
            },
            6135: (t, n, e) => {
                "use strict";
                var r = e(4948),
                    o = e(3070),
                    a = e(9114);
                t.exports = function (t, n, e) {
                    var i = r(n);
                    i in t ? o.f(t, i, a(0, e)) : (t[i] = e);
                };
            },
            7235: (t, n, e) => {
                var r = e(857),
                    o = e(2597),
                    a = e(6061),
                    i = e(3070).f;
                t.exports = function (t) {
                    var n = r.Symbol || (r.Symbol = {});
                    o(n, t) || i(n, t, { value: a.f(t) });
                };
            },
            9781: (t, n, e) => {
                var r = e(7293);
                t.exports = !r(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, 1, {
                            get: function () {
                                return 7;
                            }
                        })[1]
                    );
                });
            },
            317: (t, n, e) => {
                var r = e(7854),
                    o = e(111),
                    a = r.document,
                    i = o(a) && o(a.createElement);
                t.exports = function (t) {
                    return i ? a.createElement(t) : {};
                };
            },
            8324: t => {
                t.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                };
            },
            8509: (t, n, e) => {
                var r = e(317)("span").classList,
                    o = r && r.constructor && r.constructor.prototype;
                t.exports = o === Object.prototype ? void 0 : o;
            },
            8113: (t, n, e) => {
                var r = e(5005);
                t.exports = r("navigator", "userAgent") || "";
            },
            7392: (t, n, e) => {
                var r,
                    o,
                    a = e(7854),
                    i = e(8113),
                    s = a.process,
                    l = a.Deno,
                    c = (s && s.versions) || (l && l.version),
                    u = c && c.v8;
                u && (o = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
                    !o &&
                        i &&
                        (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
                        (r = i.match(/Chrome\/(\d+)/)) &&
                        (o = +r[1]),
                    (t.exports = o);
            },
            748: t => {
                t.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf"
                ];
            },
            2109: (t, n, e) => {
                var r = e(7854),
                    o = e(1236).f,
                    a = e(8880),
                    i = e(1320),
                    s = e(3505),
                    l = e(9920),
                    c = e(4705);
                t.exports = function (t, n) {
                    var e,
                        u,
                        d,
                        p,
                        f,
                        m = t.target,
                        h = t.global,
                        b = t.stat;
                    if ((e = h ? r : b ? r[m] || s(m, {}) : (r[m] || {}).prototype))
                        for (u in n) {
                            if (
                                ((p = n[u]),
                                (d = t.noTargetGet ? (f = o(e, u)) && f.value : e[u]),
                                !c(h ? u : m + (b ? "." : "#") + u, t.forced) && void 0 !== d)
                            ) {
                                if (typeof p == typeof d) continue;
                                l(p, d);
                            }
                            (t.sham || (d && d.sham)) && a(p, "sham", !0), i(e, u, p, t);
                        }
                };
            },
            7293: t => {
                t.exports = function (t) {
                    try {
                        return !!t();
                    } catch (t) {
                        return !0;
                    }
                };
            },
            2104: (t, n, e) => {
                var r = e(4374),
                    o = Function.prototype,
                    a = o.apply,
                    i = o.call;
                t.exports =
                    ("object" == typeof Reflect && Reflect.apply) ||
                    (r
                        ? i.bind(a)
                        : function () {
                              return i.apply(a, arguments);
                          });
            },
            9974: (t, n, e) => {
                var r = e(1702),
                    o = e(9662),
                    a = e(4374),
                    i = r(r.bind);
                t.exports = function (t, n) {
                    return (
                        o(t),
                        void 0 === n
                            ? t
                            : a
                            ? i(t, n)
                            : function () {
                                  return t.apply(n, arguments);
                              }
                    );
                };
            },
            4374: (t, n, e) => {
                var r = e(7293);
                t.exports = !r(function () {
                    var t = function () {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype");
                });
            },
            6916: (t, n, e) => {
                var r = e(4374),
                    o = Function.prototype.call;
                t.exports = r
                    ? o.bind(o)
                    : function () {
                          return o.apply(o, arguments);
                      };
            },
            6530: (t, n, e) => {
                var r = e(9781),
                    o = e(2597),
                    a = Function.prototype,
                    i = r && Object.getOwnPropertyDescriptor,
                    s = o(a, "name"),
                    l = s && "something" === function () {}.name,
                    c = s && (!r || (r && i(a, "name").configurable));
                t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
            },
            1702: (t, n, e) => {
                var r = e(4374),
                    o = Function.prototype,
                    a = o.bind,
                    i = o.call,
                    s = r && a.bind(i, i);
                t.exports = r
                    ? function (t) {
                          return t && s(t);
                      }
                    : function (t) {
                          return (
                              t &&
                              function () {
                                  return i.apply(t, arguments);
                              }
                          );
                      };
            },
            5005: (t, n, e) => {
                var r = e(7854),
                    o = e(614),
                    a = function (t) {
                        return o(t) ? t : void 0;
                    };
                t.exports = function (t, n) {
                    return arguments.length < 2 ? a(r[t]) : r[t] && r[t][n];
                };
            },
            8173: (t, n, e) => {
                var r = e(9662);
                t.exports = function (t, n) {
                    var e = t[n];
                    return null == e ? void 0 : r(e);
                };
            },
            7854: (t, n, e) => {
                var r = function (t) {
                    return t && t.Math == Math && t;
                };
                t.exports =
                    r("object" == typeof globalThis && globalThis) ||
                    r("object" == typeof window && window) ||
                    r("object" == typeof self && self) ||
                    r("object" == typeof e.g && e.g) ||
                    (function () {
                        return this;
                    })() ||
                    Function("return this")();
            },
            2597: (t, n, e) => {
                var r = e(1702),
                    o = e(7908),
                    a = r({}.hasOwnProperty);
                t.exports =
                    Object.hasOwn ||
                    function (t, n) {
                        return a(o(t), n);
                    };
            },
            3501: t => {
                t.exports = {};
            },
            490: (t, n, e) => {
                var r = e(5005);
                t.exports = r("document", "documentElement");
            },
            4664: (t, n, e) => {
                var r = e(9781),
                    o = e(7293),
                    a = e(317);
                t.exports =
                    !r &&
                    !o(function () {
                        return (
                            7 !=
                            Object.defineProperty(a("div"), "a", {
                                get: function () {
                                    return 7;
                                }
                            }).a
                        );
                    });
            },
            8361: (t, n, e) => {
                var r = e(7854),
                    o = e(1702),
                    a = e(7293),
                    i = e(4326),
                    s = r.Object,
                    l = o("".split);
                t.exports = a(function () {
                    return !s("z").propertyIsEnumerable(0);
                })
                    ? function (t) {
                          return "String" == i(t) ? l(t, "") : s(t);
                      }
                    : s;
            },
            2788: (t, n, e) => {
                var r = e(1702),
                    o = e(614),
                    a = e(5465),
                    i = r(Function.toString);
                o(a.inspectSource) ||
                    (a.inspectSource = function (t) {
                        return i(t);
                    }),
                    (t.exports = a.inspectSource);
            },
            9909: (t, n, e) => {
                var r,
                    o,
                    a,
                    i = e(8536),
                    s = e(7854),
                    l = e(1702),
                    c = e(111),
                    u = e(8880),
                    d = e(2597),
                    p = e(5465),
                    f = e(6200),
                    m = e(3501),
                    h = "Object already initialized",
                    b = s.TypeError,
                    g = s.WeakMap;
                if (i || p.state) {
                    var v = p.state || (p.state = new g()),
                        w = l(v.get),
                        y = l(v.has),
                        k = l(v.set);
                    (r = function (t, n) {
                        if (y(v, t)) throw new b(h);
                        return (n.facade = t), k(v, t, n), n;
                    }),
                        (o = function (t) {
                            return w(v, t) || {};
                        }),
                        (a = function (t) {
                            return y(v, t);
                        });
                } else {
                    var x = f("state");
                    (m[x] = !0),
                        (r = function (t, n) {
                            if (d(t, x)) throw new b(h);
                            return (n.facade = t), u(t, x, n), n;
                        }),
                        (o = function (t) {
                            return d(t, x) ? t[x] : {};
                        }),
                        (a = function (t) {
                            return d(t, x);
                        });
                }
                t.exports = {
                    set: r,
                    get: o,
                    has: a,
                    enforce: function (t) {
                        return a(t) ? o(t) : r(t, {});
                    },
                    getterFor: function (t) {
                        return function (n) {
                            var e;
                            if (!c(n) || (e = o(n)).type !== t) throw b("Incompatible receiver, " + t + " required");
                            return e;
                        };
                    }
                };
            },
            3157: (t, n, e) => {
                var r = e(4326);
                t.exports =
                    Array.isArray ||
                    function (t) {
                        return "Array" == r(t);
                    };
            },
            614: t => {
                t.exports = function (t) {
                    return "function" == typeof t;
                };
            },
            4411: (t, n, e) => {
                var r = e(1702),
                    o = e(7293),
                    a = e(614),
                    i = e(648),
                    s = e(5005),
                    l = e(2788),
                    c = function () {},
                    u = [],
                    d = s("Reflect", "construct"),
                    p = /^\s*(?:class|function)\b/,
                    f = r(p.exec),
                    m = !p.exec(c),
                    h = function (t) {
                        if (!a(t)) return !1;
                        try {
                            return d(c, u, t), !0;
                        } catch (t) {
                            return !1;
                        }
                    },
                    b = function (t) {
                        if (!a(t)) return !1;
                        switch (i(t)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1;
                        }
                        try {
                            return m || !!f(p, l(t));
                        } catch (t) {
                            return !0;
                        }
                    };
                (b.sham = !0),
                    (t.exports =
                        !d ||
                        o(function () {
                            var t;
                            return (
                                h(h.call) ||
                                !h(Object) ||
                                !h(function () {
                                    t = !0;
                                }) ||
                                t
                            );
                        })
                            ? b
                            : h);
            },
            4705: (t, n, e) => {
                var r = e(7293),
                    o = e(614),
                    a = /#|\.prototype\./,
                    i = function (t, n) {
                        var e = l[s(t)];
                        return e == u || (e != c && (o(n) ? r(n) : !!n));
                    },
                    s = (i.normalize = function (t) {
                        return String(t).replace(a, ".").toLowerCase();
                    }),
                    l = (i.data = {}),
                    c = (i.NATIVE = "N"),
                    u = (i.POLYFILL = "P");
                t.exports = i;
            },
            111: (t, n, e) => {
                var r = e(614);
                t.exports = function (t) {
                    return "object" == typeof t ? null !== t : r(t);
                };
            },
            1913: t => {
                t.exports = !1;
            },
            2190: (t, n, e) => {
                var r = e(7854),
                    o = e(5005),
                    a = e(614),
                    i = e(7976),
                    s = e(3307),
                    l = r.Object;
                t.exports = s
                    ? function (t) {
                          return "symbol" == typeof t;
                      }
                    : function (t) {
                          var n = o("Symbol");
                          return a(n) && i(n.prototype, l(t));
                      };
            },
            6244: (t, n, e) => {
                var r = e(7466);
                t.exports = function (t) {
                    return r(t.length);
                };
            },
            133: (t, n, e) => {
                var r = e(7392),
                    o = e(7293);
                t.exports =
                    !!Object.getOwnPropertySymbols &&
                    !o(function () {
                        var t = Symbol();
                        return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
                    });
            },
            8536: (t, n, e) => {
                var r = e(7854),
                    o = e(614),
                    a = e(2788),
                    i = r.WeakMap;
                t.exports = o(i) && /native code/.test(a(i));
            },
            30: (t, n, e) => {
                var r,
                    o = e(9670),
                    a = e(6048),
                    i = e(748),
                    s = e(3501),
                    l = e(490),
                    c = e(317),
                    u = e(6200)("IE_PROTO"),
                    d = function () {},
                    p = function (t) {
                        return "<script>" + t + "</script>";
                    },
                    f = function (t) {
                        t.write(p("")), t.close();
                        var n = t.parentWindow.Object;
                        return (t = null), n;
                    },
                    m = function () {
                        try {
                            r = new ActiveXObject("htmlfile");
                        } catch (t) {}
                        var t, n;
                        m =
                            "undefined" != typeof document
                                ? document.domain && r
                                    ? f(r)
                                    : (((n = c("iframe")).style.display = "none"),
                                      l.appendChild(n),
                                      (n.src = String("javascript:")),
                                      (t = n.contentWindow.document).open(),
                                      t.write(p("document.F=Object")),
                                      t.close(),
                                      t.F)
                                : f(r);
                        for (var e = i.length; e--; ) delete m.prototype[i[e]];
                        return m();
                    };
                (s[u] = !0),
                    (t.exports =
                        Object.create ||
                        function (t, n) {
                            var e;
                            return (
                                null !== t
                                    ? ((d.prototype = o(t)), (e = new d()), (d.prototype = null), (e[u] = t))
                                    : (e = m()),
                                void 0 === n ? e : a.f(e, n)
                            );
                        });
            },
            6048: (t, n, e) => {
                var r = e(9781),
                    o = e(3353),
                    a = e(3070),
                    i = e(9670),
                    s = e(5656),
                    l = e(1956);
                n.f =
                    r && !o
                        ? Object.defineProperties
                        : function (t, n) {
                              i(t);
                              for (var e, r = s(n), o = l(n), c = o.length, u = 0; c > u; ) a.f(t, (e = o[u++]), r[e]);
                              return t;
                          };
            },
            3070: (t, n, e) => {
                var r = e(7854),
                    o = e(9781),
                    a = e(4664),
                    i = e(3353),
                    s = e(9670),
                    l = e(4948),
                    c = r.TypeError,
                    u = Object.defineProperty,
                    d = Object.getOwnPropertyDescriptor;
                n.f = o
                    ? i
                        ? function (t, n, e) {
                              if (
                                  (s(t),
                                  (n = l(n)),
                                  s(e),
                                  "function" == typeof t &&
                                      "prototype" === n &&
                                      "value" in e &&
                                      "writable" in e &&
                                      !e.writable)
                              ) {
                                  var r = d(t, n);
                                  r &&
                                      r.writable &&
                                      ((t[n] = e.value),
                                      (e = {
                                          configurable: "configurable" in e ? e.configurable : r.configurable,
                                          enumerable: "enumerable" in e ? e.enumerable : r.enumerable,
                                          writable: !1
                                      }));
                              }
                              return u(t, n, e);
                          }
                        : u
                    : function (t, n, e) {
                          if ((s(t), (n = l(n)), s(e), a))
                              try {
                                  return u(t, n, e);
                              } catch (t) {}
                          if ("get" in e || "set" in e) throw c("Accessors not supported");
                          return "value" in e && (t[n] = e.value), t;
                      };
            },
            1236: (t, n, e) => {
                var r = e(9781),
                    o = e(6916),
                    a = e(5296),
                    i = e(9114),
                    s = e(5656),
                    l = e(4948),
                    c = e(2597),
                    u = e(4664),
                    d = Object.getOwnPropertyDescriptor;
                n.f = r
                    ? d
                    : function (t, n) {
                          if (((t = s(t)), (n = l(n)), u))
                              try {
                                  return d(t, n);
                              } catch (t) {}
                          if (c(t, n)) return i(!o(a.f, t, n), t[n]);
                      };
            },
            1156: (t, n, e) => {
                var r = e(4326),
                    o = e(5656),
                    a = e(8006).f,
                    i = e(1589),
                    s =
                        "object" == typeof window && window && Object.getOwnPropertyNames
                            ? Object.getOwnPropertyNames(window)
                            : [];
                t.exports.f = function (t) {
                    return s && "Window" == r(t)
                        ? (function (t) {
                              try {
                                  return a(t);
                              } catch (t) {
                                  return i(s);
                              }
                          })(t)
                        : a(o(t));
                };
            },
            8006: (t, n, e) => {
                var r = e(6324),
                    o = e(748).concat("length", "prototype");
                n.f =
                    Object.getOwnPropertyNames ||
                    function (t) {
                        return r(t, o);
                    };
            },
            5181: (t, n) => {
                n.f = Object.getOwnPropertySymbols;
            },
            7976: (t, n, e) => {
                var r = e(1702);
                t.exports = r({}.isPrototypeOf);
            },
            6324: (t, n, e) => {
                var r = e(1702),
                    o = e(2597),
                    a = e(5656),
                    i = e(1318).indexOf,
                    s = e(3501),
                    l = r([].push);
                t.exports = function (t, n) {
                    var e,
                        r = a(t),
                        c = 0,
                        u = [];
                    for (e in r) !o(s, e) && o(r, e) && l(u, e);
                    for (; n.length > c; ) o(r, (e = n[c++])) && (~i(u, e) || l(u, e));
                    return u;
                };
            },
            1956: (t, n, e) => {
                var r = e(6324),
                    o = e(748);
                t.exports =
                    Object.keys ||
                    function (t) {
                        return r(t, o);
                    };
            },
            5296: (t, n) => {
                "use strict";
                var e = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !e.call({ 1: 2 }, 1);
                n.f = o
                    ? function (t) {
                          var n = r(this, t);
                          return !!n && n.enumerable;
                      }
                    : e;
            },
            288: (t, n, e) => {
                "use strict";
                var r = e(1694),
                    o = e(648);
                t.exports = r
                    ? {}.toString
                    : function () {
                          return "[object " + o(this) + "]";
                      };
            },
            2140: (t, n, e) => {
                var r = e(7854),
                    o = e(6916),
                    a = e(614),
                    i = e(111),
                    s = r.TypeError;
                t.exports = function (t, n) {
                    var e, r;
                    if ("string" === n && a((e = t.toString)) && !i((r = o(e, t)))) return r;
                    if (a((e = t.valueOf)) && !i((r = o(e, t)))) return r;
                    if ("string" !== n && a((e = t.toString)) && !i((r = o(e, t)))) return r;
                    throw s("Can't convert object to primitive value");
                };
            },
            3887: (t, n, e) => {
                var r = e(5005),
                    o = e(1702),
                    a = e(8006),
                    i = e(5181),
                    s = e(9670),
                    l = o([].concat);
                t.exports =
                    r("Reflect", "ownKeys") ||
                    function (t) {
                        var n = a.f(s(t)),
                            e = i.f;
                        return e ? l(n, e(t)) : n;
                    };
            },
            857: (t, n, e) => {
                var r = e(7854);
                t.exports = r;
            },
            1320: (t, n, e) => {
                var r = e(7854),
                    o = e(614),
                    a = e(2597),
                    i = e(8880),
                    s = e(3505),
                    l = e(2788),
                    c = e(9909),
                    u = e(6530).CONFIGURABLE,
                    d = c.get,
                    p = c.enforce,
                    f = String(String).split("String");
                (t.exports = function (t, n, e, l) {
                    var c,
                        d = !!l && !!l.unsafe,
                        m = !!l && !!l.enumerable,
                        h = !!l && !!l.noTargetGet,
                        b = l && void 0 !== l.name ? l.name : n;
                    o(e) &&
                        ("Symbol(" === String(b).slice(0, 7) &&
                            (b = "[" + String(b).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                        (!a(e, "name") || (u && e.name !== b)) && i(e, "name", b),
                        (c = p(e)).source || (c.source = f.join("string" == typeof b ? b : ""))),
                        t !== r
                            ? (d ? !h && t[n] && (m = !0) : delete t[n], m ? (t[n] = e) : i(t, n, e))
                            : m
                            ? (t[n] = e)
                            : s(n, e);
                })(Function.prototype, "toString", function () {
                    return (o(this) && d(this).source) || l(this);
                });
            },
            4488: (t, n, e) => {
                var r = e(7854).TypeError;
                t.exports = function (t) {
                    if (null == t) throw r("Can't call method on " + t);
                    return t;
                };
            },
            3505: (t, n, e) => {
                var r = e(7854),
                    o = Object.defineProperty;
                t.exports = function (t, n) {
                    try {
                        o(r, t, { value: n, configurable: !0, writable: !0 });
                    } catch (e) {
                        r[t] = n;
                    }
                    return n;
                };
            },
            8003: (t, n, e) => {
                var r = e(3070).f,
                    o = e(2597),
                    a = e(5112)("toStringTag");
                t.exports = function (t, n, e) {
                    t && !e && (t = t.prototype), t && !o(t, a) && r(t, a, { configurable: !0, value: n });
                };
            },
            6200: (t, n, e) => {
                var r = e(2309),
                    o = e(9711),
                    a = r("keys");
                t.exports = function (t) {
                    return a[t] || (a[t] = o(t));
                };
            },
            5465: (t, n, e) => {
                var r = e(7854),
                    o = e(3505),
                    a = "__core-js_shared__",
                    i = r[a] || o(a, {});
                t.exports = i;
            },
            2309: (t, n, e) => {
                var r = e(1913),
                    o = e(5465);
                (t.exports = function (t, n) {
                    return o[t] || (o[t] = void 0 !== n ? n : {});
                })("versions", []).push({
                    version: "3.21.1",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                });
            },
            3429: (t, n, e) => {
                var r = e(7293);
                t.exports = function (t) {
                    return r(function () {
                        var n = ""[t]('"');
                        return n !== n.toLowerCase() || n.split('"').length > 3;
                    });
                };
            },
            1400: (t, n, e) => {
                var r = e(9303),
                    o = Math.max,
                    a = Math.min;
                t.exports = function (t, n) {
                    var e = r(t);
                    return e < 0 ? o(e + n, 0) : a(e, n);
                };
            },
            5656: (t, n, e) => {
                var r = e(8361),
                    o = e(4488);
                t.exports = function (t) {
                    return r(o(t));
                };
            },
            9303: t => {
                var n = Math.ceil,
                    e = Math.floor;
                t.exports = function (t) {
                    var r = +t;
                    return r != r || 0 === r ? 0 : (r > 0 ? e : n)(r);
                };
            },
            7466: (t, n, e) => {
                var r = e(9303),
                    o = Math.min;
                t.exports = function (t) {
                    return t > 0 ? o(r(t), 9007199254740991) : 0;
                };
            },
            7908: (t, n, e) => {
                var r = e(7854),
                    o = e(4488),
                    a = r.Object;
                t.exports = function (t) {
                    return a(o(t));
                };
            },
            7593: (t, n, e) => {
                var r = e(7854),
                    o = e(6916),
                    a = e(111),
                    i = e(2190),
                    s = e(8173),
                    l = e(2140),
                    c = e(5112),
                    u = r.TypeError,
                    d = c("toPrimitive");
                t.exports = function (t, n) {
                    if (!a(t) || i(t)) return t;
                    var e,
                        r = s(t, d);
                    if (r) {
                        if ((void 0 === n && (n = "default"), (e = o(r, t, n)), !a(e) || i(e))) return e;
                        throw u("Can't convert object to primitive value");
                    }
                    return void 0 === n && (n = "number"), l(t, n);
                };
            },
            4948: (t, n, e) => {
                var r = e(7593),
                    o = e(2190);
                t.exports = function (t) {
                    var n = r(t, "string");
                    return o(n) ? n : n + "";
                };
            },
            1694: (t, n, e) => {
                var r = {};
                (r[e(5112)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
            },
            1340: (t, n, e) => {
                var r = e(7854),
                    o = e(648),
                    a = r.String;
                t.exports = function (t) {
                    if ("Symbol" === o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return a(t);
                };
            },
            6330: (t, n, e) => {
                var r = e(7854).String;
                t.exports = function (t) {
                    try {
                        return r(t);
                    } catch (t) {
                        return "Object";
                    }
                };
            },
            9711: (t, n, e) => {
                var r = e(1702),
                    o = 0,
                    a = Math.random(),
                    i = r((1).toString);
                t.exports = function (t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + i(++o + a, 36);
                };
            },
            3307: (t, n, e) => {
                var r = e(133);
                t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            3353: (t, n, e) => {
                var r = e(9781),
                    o = e(7293);
                t.exports =
                    r &&
                    o(function () {
                        return (
                            42 !=
                            Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype
                        );
                    });
            },
            6061: (t, n, e) => {
                var r = e(5112);
                n.f = r;
            },
            5112: (t, n, e) => {
                var r = e(7854),
                    o = e(2309),
                    a = e(2597),
                    i = e(9711),
                    s = e(133),
                    l = e(3307),
                    c = o("wks"),
                    u = r.Symbol,
                    d = u && u.for,
                    p = l ? u : (u && u.withoutSetter) || i;
                t.exports = function (t) {
                    if (!a(c, t) || (!s && "string" != typeof c[t])) {
                        var n = "Symbol." + t;
                        s && a(u, t) ? (c[t] = u[t]) : (c[t] = l && d ? d(n) : p(n));
                    }
                    return c[t];
                };
            },
            2222: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(7854),
                    a = e(7293),
                    i = e(3157),
                    s = e(111),
                    l = e(7908),
                    c = e(6244),
                    u = e(6135),
                    d = e(5417),
                    p = e(1194),
                    f = e(5112),
                    m = e(7392),
                    h = f("isConcatSpreadable"),
                    b = 9007199254740991,
                    g = "Maximum allowed index exceeded",
                    v = o.TypeError,
                    w =
                        m >= 51 ||
                        !a(function () {
                            var t = [];
                            return (t[h] = !1), t.concat()[0] !== t;
                        }),
                    y = p("concat"),
                    k = function (t) {
                        if (!s(t)) return !1;
                        var n = t[h];
                        return void 0 !== n ? !!n : i(t);
                    };
                r(
                    { target: "Array", proto: !0, forced: !w || !y },
                    {
                        concat: function (t) {
                            var n,
                                e,
                                r,
                                o,
                                a,
                                i = l(this),
                                s = d(i, 0),
                                p = 0;
                            for (n = -1, r = arguments.length; n < r; n++)
                                if (k((a = -1 === n ? i : arguments[n]))) {
                                    if (p + (o = c(a)) > b) throw v(g);
                                    for (e = 0; e < o; e++, p++) e in a && u(s, p, a[e]);
                                } else {
                                    if (p >= b) throw v(g);
                                    u(s, p++, a);
                                }
                            return (s.length = p), s;
                        }
                    }
                );
            },
            7327: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(2092).filter;
                r(
                    { target: "Array", proto: !0, forced: !e(1194)("filter") },
                    {
                        filter: function (t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        }
                    }
                );
            },
            9554: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(8533);
                r({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o });
            },
            1249: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(2092).map;
                r(
                    { target: "Array", proto: !0, forced: !e(1194)("map") },
                    {
                        map: function (t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        }
                    }
                );
            },
            3321: (t, n, e) => {
                var r = e(2109),
                    o = e(9781),
                    a = e(6048).f;
                r(
                    { target: "Object", stat: !0, forced: Object.defineProperties !== a, sham: !o },
                    { defineProperties: a }
                );
            },
            9070: (t, n, e) => {
                var r = e(2109),
                    o = e(9781),
                    a = e(3070).f;
                r({ target: "Object", stat: !0, forced: Object.defineProperty !== a, sham: !o }, { defineProperty: a });
            },
            5003: (t, n, e) => {
                var r = e(2109),
                    o = e(7293),
                    a = e(5656),
                    i = e(1236).f,
                    s = e(9781),
                    l = o(function () {
                        i(1);
                    });
                r(
                    { target: "Object", stat: !0, forced: !s || l, sham: !s },
                    {
                        getOwnPropertyDescriptor: function (t, n) {
                            return i(a(t), n);
                        }
                    }
                );
            },
            9337: (t, n, e) => {
                var r = e(2109),
                    o = e(9781),
                    a = e(3887),
                    i = e(5656),
                    s = e(1236),
                    l = e(6135);
                r(
                    { target: "Object", stat: !0, sham: !o },
                    {
                        getOwnPropertyDescriptors: function (t) {
                            for (var n, e, r = i(t), o = s.f, c = a(r), u = {}, d = 0; c.length > d; )
                                void 0 !== (e = o(r, (n = c[d++]))) && l(u, n, e);
                            return u;
                        }
                    }
                );
            },
            7941: (t, n, e) => {
                var r = e(2109),
                    o = e(7908),
                    a = e(1956);
                r(
                    {
                        target: "Object",
                        stat: !0,
                        forced: e(7293)(function () {
                            a(1);
                        })
                    },
                    {
                        keys: function (t) {
                            return a(o(t));
                        }
                    }
                );
            },
            1539: (t, n, e) => {
                var r = e(1694),
                    o = e(1320),
                    a = e(288);
                r || o(Object.prototype, "toString", a, { unsafe: !0 });
            },
            9254: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(4230);
                r(
                    { target: "String", proto: !0, forced: e(3429)("link") },
                    {
                        link: function (t) {
                            return o(this, "a", "href", t);
                        }
                    }
                );
            },
            2526: (t, n, e) => {
                "use strict";
                var r = e(2109),
                    o = e(7854),
                    a = e(5005),
                    i = e(2104),
                    s = e(6916),
                    l = e(1702),
                    c = e(1913),
                    u = e(9781),
                    d = e(133),
                    p = e(7293),
                    f = e(2597),
                    m = e(3157),
                    h = e(614),
                    b = e(111),
                    g = e(7976),
                    v = e(2190),
                    w = e(9670),
                    y = e(7908),
                    k = e(5656),
                    x = e(4948),
                    S = e(1340),
                    O = e(9114),
                    j = e(30),
                    E = e(1956),
                    z = e(8006),
                    C = e(1156),
                    P = e(5181),
                    L = e(1236),
                    N = e(3070),
                    _ = e(6048),
                    M = e(5296),
                    A = e(206),
                    T = e(1320),
                    F = e(2309),
                    R = e(6200),
                    I = e(3501),
                    D = e(9711),
                    B = e(5112),
                    U = e(6061),
                    H = e(7235),
                    V = e(8003),
                    W = e(9909),
                    G = e(2092).forEach,
                    q = R("hidden"),
                    Z = "Symbol",
                    X = B("toPrimitive"),
                    J = W.set,
                    Y = W.getterFor(Z),
                    K = Object.prototype,
                    Q = o.Symbol,
                    $ = Q && Q.prototype,
                    tt = o.TypeError,
                    nt = o.QObject,
                    et = a("JSON", "stringify"),
                    rt = L.f,
                    ot = N.f,
                    at = C.f,
                    it = M.f,
                    st = l([].push),
                    lt = F("symbols"),
                    ct = F("op-symbols"),
                    ut = F("string-to-symbol-registry"),
                    dt = F("symbol-to-string-registry"),
                    pt = F("wks"),
                    ft = !nt || !nt.prototype || !nt.prototype.findChild,
                    mt =
                        u &&
                        p(function () {
                            return (
                                7 !=
                                j(
                                    ot({}, "a", {
                                        get: function () {
                                            return ot(this, "a", { value: 7 }).a;
                                        }
                                    })
                                ).a
                            );
                        })
                            ? function (t, n, e) {
                                  var r = rt(K, n);
                                  r && delete K[n], ot(t, n, e), r && t !== K && ot(K, n, r);
                              }
                            : ot,
                    ht = function (t, n) {
                        var e = (lt[t] = j($));
                        return J(e, { type: Z, tag: t, description: n }), u || (e.description = n), e;
                    },
                    bt = function (t, n, e) {
                        t === K && bt(ct, n, e), w(t);
                        var r = x(n);
                        return (
                            w(e),
                            f(lt, r)
                                ? (e.enumerable
                                      ? (f(t, q) && t[q][r] && (t[q][r] = !1), (e = j(e, { enumerable: O(0, !1) })))
                                      : (f(t, q) || ot(t, q, O(1, {})), (t[q][r] = !0)),
                                  mt(t, r, e))
                                : ot(t, r, e)
                        );
                    },
                    gt = function (t, n) {
                        w(t);
                        var e = k(n),
                            r = E(e).concat(kt(e));
                        return (
                            G(r, function (n) {
                                (u && !s(vt, e, n)) || bt(t, n, e[n]);
                            }),
                            t
                        );
                    },
                    vt = function (t) {
                        var n = x(t),
                            e = s(it, this, n);
                        return (
                            !(this === K && f(lt, n) && !f(ct, n)) &&
                            (!(e || !f(this, n) || !f(lt, n) || (f(this, q) && this[q][n])) || e)
                        );
                    },
                    wt = function (t, n) {
                        var e = k(t),
                            r = x(n);
                        if (e !== K || !f(lt, r) || f(ct, r)) {
                            var o = rt(e, r);
                            return !o || !f(lt, r) || (f(e, q) && e[q][r]) || (o.enumerable = !0), o;
                        }
                    },
                    yt = function (t) {
                        var n = at(k(t)),
                            e = [];
                        return (
                            G(n, function (t) {
                                f(lt, t) || f(I, t) || st(e, t);
                            }),
                            e
                        );
                    },
                    kt = function (t) {
                        var n = t === K,
                            e = at(n ? ct : k(t)),
                            r = [];
                        return (
                            G(e, function (t) {
                                !f(lt, t) || (n && !f(K, t)) || st(r, lt[t]);
                            }),
                            r
                        );
                    };
                if (
                    (d ||
                        (T(
                            ($ = (Q = function () {
                                if (g($, this)) throw tt("Symbol is not a constructor");
                                var t = arguments.length && void 0 !== arguments[0] ? S(arguments[0]) : void 0,
                                    n = D(t),
                                    e = function (t) {
                                        this === K && s(e, ct, t),
                                            f(this, q) && f(this[q], n) && (this[q][n] = !1),
                                            mt(this, n, O(1, t));
                                    };
                                return u && ft && mt(K, n, { configurable: !0, set: e }), ht(n, t);
                            }).prototype),
                            "toString",
                            function () {
                                return Y(this).tag;
                            }
                        ),
                        T(Q, "withoutSetter", function (t) {
                            return ht(D(t), t);
                        }),
                        (M.f = vt),
                        (N.f = bt),
                        (_.f = gt),
                        (L.f = wt),
                        (z.f = C.f = yt),
                        (P.f = kt),
                        (U.f = function (t) {
                            return ht(B(t), t);
                        }),
                        u &&
                            (ot($, "description", {
                                configurable: !0,
                                get: function () {
                                    return Y(this).description;
                                }
                            }),
                            c || T(K, "propertyIsEnumerable", vt, { unsafe: !0 }))),
                    r({ global: !0, wrap: !0, forced: !d, sham: !d }, { Symbol: Q }),
                    G(E(pt), function (t) {
                        H(t);
                    }),
                    r(
                        { target: Z, stat: !0, forced: !d },
                        {
                            for: function (t) {
                                var n = S(t);
                                if (f(ut, n)) return ut[n];
                                var e = Q(n);
                                return (ut[n] = e), (dt[e] = n), e;
                            },
                            keyFor: function (t) {
                                if (!v(t)) throw tt(t + " is not a symbol");
                                if (f(dt, t)) return dt[t];
                            },
                            useSetter: function () {
                                ft = !0;
                            },
                            useSimple: function () {
                                ft = !1;
                            }
                        }
                    ),
                    r(
                        { target: "Object", stat: !0, forced: !d, sham: !u },
                        {
                            create: function (t, n) {
                                return void 0 === n ? j(t) : gt(j(t), n);
                            },
                            defineProperty: bt,
                            defineProperties: gt,
                            getOwnPropertyDescriptor: wt
                        }
                    ),
                    r(
                        { target: "Object", stat: !0, forced: !d },
                        { getOwnPropertyNames: yt, getOwnPropertySymbols: kt }
                    ),
                    r(
                        {
                            target: "Object",
                            stat: !0,
                            forced: p(function () {
                                P.f(1);
                            })
                        },
                        {
                            getOwnPropertySymbols: function (t) {
                                return P.f(y(t));
                            }
                        }
                    ),
                    et &&
                        r(
                            {
                                target: "JSON",
                                stat: !0,
                                forced:
                                    !d ||
                                    p(function () {
                                        var t = Q();
                                        return "[null]" != et([t]) || "{}" != et({ a: t }) || "{}" != et(Object(t));
                                    })
                            },
                            {
                                stringify: function (t, n, e) {
                                    var r = A(arguments),
                                        o = n;
                                    if ((b(n) || void 0 !== t) && !v(t))
                                        return (
                                            m(n) ||
                                                (n = function (t, n) {
                                                    if ((h(o) && (n = s(o, this, t, n)), !v(n))) return n;
                                                }),
                                            (r[1] = n),
                                            i(et, null, r)
                                        );
                                }
                            }
                        ),
                    !$[X])
                ) {
                    var xt = $.valueOf;
                    T($, X, function (t) {
                        return s(xt, this);
                    });
                }
                V(Q, Z), (I[q] = !0);
            },
            4747: (t, n, e) => {
                var r = e(7854),
                    o = e(8324),
                    a = e(8509),
                    i = e(8533),
                    s = e(8880),
                    l = function (t) {
                        if (t && t.forEach !== i)
                            try {
                                s(t, "forEach", i);
                            } catch (n) {
                                t.forEach = i;
                            }
                    };
                for (var c in o) o[c] && l(r[c] && r[c].prototype);
                l(a);
            },
            6387: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => s });
                var r = e(8081),
                    o = e.n(r),
                    a = e(3645),
                    i = e.n(a)()(o());
                i.push([
                    t.id,
                    '/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n.linkstar *,\n.linkstar ::before,\n.linkstar ::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n.linkstar ::before,\n.linkstar ::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\n.linkstar html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\n.linkstar body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\n.linkstar hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n.linkstar abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\n.linkstar h1,\n.linkstar h2,\n.linkstar h3,\n.linkstar h4,\n.linkstar h5,\n.linkstar h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\n.linkstar a {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\n.linkstar b,\n.linkstar strong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\n.linkstar code,\n.linkstar kbd,\n.linkstar samp,\n.linkstar pre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\n.linkstar small {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n.linkstar sub,\n.linkstar sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\n.linkstar sub {\n  bottom: -0.25em;\n}\n\n.linkstar sup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\n.linkstar table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\n.linkstar button,\n.linkstar input,\n.linkstar optgroup,\n.linkstar select,\n.linkstar textarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\n.linkstar button,\n.linkstar select {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\n.linkstar button,\n.linkstar [type=\'button\'],\n.linkstar [type=\'reset\'],\n.linkstar [type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n.linkstar :-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n.linkstar :-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n.linkstar progress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n.linkstar ::-webkit-inner-spin-button,\n.linkstar ::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n.linkstar [type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n.linkstar ::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n.linkstar ::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n.linkstar summary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\n.linkstar blockquote,\n.linkstar dl,\n.linkstar dd,\n.linkstar h1,\n.linkstar h2,\n.linkstar h3,\n.linkstar h4,\n.linkstar h5,\n.linkstar h6,\n.linkstar hr,\n.linkstar figure,\n.linkstar p,\n.linkstar pre {\n  margin: 0;\n}\n\n.linkstar fieldset {\n  margin: 0;\n  padding: 0;\n}\n\n.linkstar legend {\n  padding: 0;\n}\n\n.linkstar ol,\n.linkstar ul,\n.linkstar menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\n.linkstar textarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\n.linkstar input::-moz-placeholder, .linkstar textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n.linkstar input:-ms-input-placeholder, .linkstar textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n.linkstar input::placeholder,\n.linkstar textarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\n.linkstar button,\n.linkstar [role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n.linkstar :disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\n.linkstar img,\n.linkstar svg,\n.linkstar video,\n.linkstar canvas,\n.linkstar audio,\n.linkstar iframe,\n.linkstar embed,\n.linkstar object {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\n.linkstar img,\n.linkstar video {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n.linkstar [hidden] {\n  display: none;\n}\n\n.linkstar *, .linkstar ::before, .linkstar ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.linkstar .invisible {\n  visibility: hidden;\n}\n.linkstar .absolute {\n  position: absolute;\n}\n.linkstar .relative {\n  position: relative;\n}\n.linkstar .top-0 {\n  top: 0px;\n}\n.linkstar .z-10 {\n  z-index: 10;\n}\n.linkstar .z-50 {\n  z-index: 50;\n}\n.linkstar .z-0 {\n  z-index: 0;\n}\n.linkstar .mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.linkstar .mb-6 {\n  margin-bottom: 1.5rem;\n}\n.linkstar .-mt-14 {\n  margin-top: -3.5rem;\n}\n.linkstar .mt-3 {\n  margin-top: 0.75rem;\n}\n.linkstar .mt-2 {\n  margin-top: 0.5rem;\n}\n.linkstar .mt-10 {\n  margin-top: 2.5rem;\n}\n.linkstar .mt-auto {\n  margin-top: auto;\n}\n.linkstar .mb-1 {\n  margin-bottom: 0.25rem;\n}\n.linkstar .mt-1 {\n  margin-top: 0.25rem;\n}\n.linkstar .mb-4 {\n  margin-bottom: 1rem;\n}\n.linkstar .inline {\n  display: inline;\n}\n.linkstar .flex {\n  display: flex;\n}\n.linkstar .grid {\n  display: grid;\n}\n.linkstar .hidden {\n  display: none;\n}\n.linkstar .aspect-\\[5\\/2\\] {\n  aspect-ratio: 5 / 2;\n}\n.linkstar .h-full {\n  height: 100%;\n}\n.linkstar .h-24 {\n  height: 6rem;\n}\n.linkstar .h-20 {\n  height: 5rem;\n}\n.linkstar .h-10 {\n  height: 2.5rem;\n}\n.linkstar .min-h-full {\n  min-height: 100%;\n}\n.linkstar .w-full {\n  width: 100%;\n}\n.linkstar .w-20 {\n  width: 5rem;\n}\n.linkstar .w-10 {\n  width: 2.5rem;\n}\n.linkstar .w-px {\n  width: 1px;\n}\n.linkstar .max-w-screen-sm {\n  max-width: 640px;\n}\n.linkstar .flex-1 {\n  flex: 1 1 0%;\n}\n.linkstar .flex-col {\n  flex-direction: column;\n}\n.linkstar .items-center {\n  align-items: center;\n}\n.linkstar .justify-center {\n  justify-content: center;\n}\n.linkstar .overflow-hidden {\n  overflow: hidden;\n}\n.linkstar .rounded-2xl {\n  border-radius: 1rem;\n}\n.linkstar .rounded-3xl {\n  border-radius: 1.5rem;\n}\n.linkstar .rounded-full {\n  border-radius: 9999px;\n}\n.linkstar .border-4 {\n  border-width: 4px;\n}\n.linkstar .border-2 {\n  border-width: 2px;\n}\n.linkstar .border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(37, 99, 235, var(--tw-border-opacity));\n}\n.linkstar .border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(220, 38, 38, var(--tw-border-opacity));\n}\n.linkstar .border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n}\n.linkstar .border-zinc-800 {\n  --tw-border-opacity: 1;\n  border-color: rgba(39, 39, 42, var(--tw-border-opacity));\n}\n.linkstar .bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.linkstar .bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.linkstar .bg-white\\/80 {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.linkstar .bg-opacity-20 {\n  --tw-bg-opacity: 0.2;\n}\n.linkstar .bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.linkstar .from-\\[\\#e1c93f\\] {\n  --tw-gradient-from: #e1c93f;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(225, 201, 63, 0));\n}\n.linkstar .to-\\[\\#fdfbf9\\] {\n  --tw-gradient-to: #fdfbf9;\n}\n.linkstar .bg-cover {\n  background-size: cover;\n}\n.linkstar .object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.linkstar .object-fill {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.linkstar .object-center {\n  -o-object-position: center;\n     object-position: center;\n}\n.linkstar .p-4 {\n  padding: 1rem;\n}\n.linkstar .px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.linkstar .px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.linkstar .py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.linkstar .pt-10 {\n  padding-top: 2.5rem;\n}\n.linkstar .pt-3 {\n  padding-top: 0.75rem;\n}\n.linkstar .pb-8 {\n  padding-bottom: 2rem;\n}\n.linkstar .text-center {\n  text-align: center;\n}\n.linkstar .text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.linkstar .text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.linkstar .font-semibold {\n  font-weight: 600;\n}\n.linkstar .text-stone-700 {\n  --tw-text-opacity: 1;\n  color: rgba(68, 64, 60, var(--tw-text-opacity));\n}\n.linkstar .text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.linkstar .text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.linkstar .text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.linkstar .text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.linkstar .text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n.linkstar .text-zinc-800 {\n  --tw-text-opacity: 1;\n  color: rgba(39, 39, 42, var(--tw-text-opacity));\n}\n.linkstar .opacity-60 {\n  opacity: 0.6;\n}\n.linkstar .opacity-70 {\n  opacity: 0.7;\n}\n.linkstar .shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.linkstar .shadow-black\\/10 {\n  --tw-shadow-color: rgba(0, 0, 0, 0.1);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.linkstar .outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.linkstar .drop-shadow-md {\n  --tw-drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.linkstar .backdrop-blur-2xl {\n  --tw-backdrop-blur: blur(40px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.linkstar .transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.linkstar .transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.linkstar {\n    width: 100%;\n    height: 100%;\n}\n\n.linkstar .last\\:mb-0:last-child {\n  margin-bottom: 0px;\n}\n\n.linkstar .hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.linkstar .hover\\:bg-gradient-to-l:hover {\n  background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\n\n.linkstar .group:hover .group-hover\\:bg-opacity-20 {\n  --tw-bg-opacity: 0.2;\n}\n\n@media (min-width: 320px) {\n\n  .linkstar .xs\\:aspect-\\[3\\/2\\] {\n    aspect-ratio: 3 / 2;\n  }\n\n  .linkstar .xs\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .linkstar .xs\\:leading-10 {\n    line-height: 2.5rem;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .linkstar .sm\\:mt-1 {\n    margin-top: 0.25rem;\n  }\n\n  .linkstar .sm\\:aspect-\\[4\\] {\n    aspect-ratio: 4;\n  }\n\n  .linkstar .sm\\:h-24 {\n    height: 6rem;\n  }\n\n  .linkstar .sm\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .linkstar .sm\\:w-24 {\n    width: 6rem;\n  }\n\n  .linkstar .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .linkstar .sm\\:pt-6 {\n    padding-top: 1.5rem;\n  }\n\n  .linkstar .sm\\:leading-10 {\n    line-height: 2.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .linkstar .md\\:-mt-\\[3\\.75rem\\] {\n    margin-top: -3.75rem;\n  }\n\n  .linkstar .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .linkstar .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .linkstar .md\\:block {\n    display: block;\n  }\n\n  .linkstar .md\\:h-32 {\n    height: 8rem;\n  }\n\n  .linkstar .md\\:h-28 {\n    height: 7rem;\n  }\n\n  .linkstar .md\\:h-12 {\n    height: 3rem;\n  }\n\n  .linkstar .md\\:w-28 {\n    width: 7rem;\n  }\n\n  .linkstar .md\\:w-12 {\n    width: 3rem;\n  }\n\n  .linkstar .md\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .linkstar .md\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .linkstar .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .linkstar .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .linkstar .md\\:leading-\\[48px\\] {\n    line-height: 48px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .linkstar .lg\\:h-12 {\n    height: 3rem;\n  }\n\n  .linkstar .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .linkstar .lg\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .linkstar .lg\\:leading-\\[48px\\] {\n    line-height: 48px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .linkstar .xl\\:aspect-\\[5\\/1\\] {\n    aspect-ratio: 5 / 1;\n  }\n\n  .linkstar .xl\\:h-12 {\n    height: 3rem;\n  }\n\n  .linkstar .xl\\:rounded-t-none {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n  }\n\n  .linkstar .xl\\:px-36 {\n    padding-left: 9rem;\n    padding-right: 9rem;\n  }\n\n  .linkstar .xl\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  .linkstar .xl\\:leading-\\[48px\\] {\n    line-height: 48px;\n  }\n}\n',
                    ""
                ]);
                const s = i;
            },
            3645: t => {
                "use strict";
                t.exports = function (t) {
                    var n = [];
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var e = "",
                                    r = void 0 !== n[5];
                                return (
                                    n[4] && (e += "@supports (".concat(n[4], ") {")),
                                    n[2] && (e += "@media ".concat(n[2], " {")),
                                    r && (e += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")),
                                    (e += t(n)),
                                    r && (e += "}"),
                                    n[2] && (e += "}"),
                                    n[4] && (e += "}"),
                                    e
                                );
                            }).join("");
                        }),
                        (n.i = function (t, e, r, o, a) {
                            "string" == typeof t && (t = [[null, t, void 0]]);
                            var i = {};
                            if (r)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0];
                                    null != l && (i[l] = !0);
                                }
                            for (var c = 0; c < t.length; c++) {
                                var u = [].concat(t[c]);
                                (r && i[u[0]]) ||
                                    (void 0 !== a &&
                                        (void 0 === u[5] ||
                                            (u[1] = "@layer"
                                                .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                                                .concat(u[1], "}")),
                                        (u[5] = a)),
                                    e &&
                                        (u[2]
                                            ? ((u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")), (u[2] = e))
                                            : (u[2] = e)),
                                    o &&
                                        (u[4]
                                            ? ((u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}")), (u[4] = o))
                                            : (u[4] = "".concat(o))),
                                    n.push(u));
                            }
                        }),
                        n
                    );
                };
            },
            8081: t => {
                "use strict";
                t.exports = function (t) {
                    return t[1];
                };
            },
            3379: t => {
                "use strict";
                var n = [];
                function e(t) {
                    for (var e = -1, r = 0; r < n.length; r++)
                        if (n[r].identifier === t) {
                            e = r;
                            break;
                        }
                    return e;
                }
                function r(t, r) {
                    for (var a = {}, i = [], s = 0; s < t.length; s++) {
                        var l = t[s],
                            c = r.base ? l[0] + r.base : l[0],
                            u = a[c] || 0,
                            d = "".concat(c, " ").concat(u);
                        a[c] = u + 1;
                        var p = e(d),
                            f = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
                        if (-1 !== p) n[p].references++, n[p].updater(f);
                        else {
                            var m = o(f, r);
                            (r.byIndex = s), n.splice(s, 0, { identifier: d, updater: m, references: 1 });
                        }
                        i.push(d);
                    }
                    return i;
                }
                function o(t, n) {
                    var e = n.domAPI(n);
                    return (
                        e.update(t),
                        function (n) {
                            if (n) {
                                if (
                                    n.css === t.css &&
                                    n.media === t.media &&
                                    n.sourceMap === t.sourceMap &&
                                    n.supports === t.supports &&
                                    n.layer === t.layer
                                )
                                    return;
                                e.update((t = n));
                            } else e.remove();
                        }
                    );
                }
                t.exports = function (t, o) {
                    var a = r((t = t || []), (o = o || {}));
                    return function (t) {
                        t = t || [];
                        for (var i = 0; i < a.length; i++) {
                            var s = e(a[i]);
                            n[s].references--;
                        }
                        for (var l = r(t, o), c = 0; c < a.length; c++) {
                            var u = e(a[c]);
                            0 === n[u].references && (n[u].updater(), n.splice(u, 1));
                        }
                        a = l;
                    };
                };
            },
            569: t => {
                "use strict";
                var n = {};
                t.exports = function (t, e) {
                    var r = (function (t) {
                        if (void 0 === n[t]) {
                            var e = document.querySelector(t);
                            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                                try {
                                    e = e.contentDocument.head;
                                } catch (t) {
                                    e = null;
                                }
                            n[t] = e;
                        }
                        return n[t];
                    })(t);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    r.appendChild(e);
                };
            },
            9216: t => {
                "use strict";
                t.exports = function (t) {
                    var n = document.createElement("style");
                    return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
                };
            },
            3565: (t, n, e) => {
                "use strict";
                t.exports = function (t) {
                    var n = e.nc;
                    n && t.setAttribute("nonce", n);
                };
            },
            7795: t => {
                "use strict";
                t.exports = function (t) {
                    var n = t.insertStyleElement(t);
                    return {
                        update: function (e) {
                            !(function (t, n, e) {
                                var r = "";
                                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                                    e.media && (r += "@media ".concat(e.media, " {"));
                                var o = void 0 !== e.layer;
                                o && (r += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")),
                                    (r += e.css),
                                    o && (r += "}"),
                                    e.media && (r += "}"),
                                    e.supports && (r += "}");
                                var a = e.sourceMap;
                                a &&
                                    "undefined" != typeof btoa &&
                                    (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                                        " */"
                                    )),
                                    n.styleTagTransform(r, t, n.options);
                            })(n, t, e);
                        },
                        remove: function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        }
                    };
                };
            },
            4589: t => {
                "use strict";
                t.exports = function (t, n) {
                    if (n.styleSheet) n.styleSheet.cssText = t;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(t));
                    }
                };
            }
        },
        n = {};
    function e(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var a = (n[r] = { id: r, exports: {} });
        return t[r](a, a.exports, e), a.exports;
    }
    (e.n = t => {
        var n = t && t.__esModule ? () => t.default : () => t;
        return e.d(n, { a: n }), n;
    }),
        (e.d = (t, n) => {
            for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
        }),
        (e.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
        (e.r = t => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        });
    var r = {};
    (() => {
        "use strict";
        e.r(r), e.d(r, { default: () => H }), e(1249);
        const t = require("react");
        var n = e.n(t);
        e(9254), e(2222);
        const o = function (t) {
                var e = t.children,
                    r = t.invisible,
                    o = void 0 !== r && r,
                    a = t.isAlwaysShow,
                    i = void 0 !== a && a,
                    s = t.className,
                    l = t.style,
                    c = "w-10 md:w-12",
                    u = o ? "invisible" : "";
                return (
                    !i && o ? (c = "w-px") : o && (c = "w-10 hidden md:block invisible md:block"),
                    n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                            "div",
                            {
                                className: "flex items-center justify-center "
                                    .concat(
                                        c,
                                        " h-10 md:h-12 rounded-full border-2 bg-white/80 bg-opacity-20 group-hover:bg-opacity-20 transition-colors "
                                    )
                                    .concat(u, " ")
                                    .concat(s),
                                style: l
                            },
                            e
                        )
                    )
                );
            },
            a = function (t) {
                var e = t.link,
                    r = t.icons,
                    a = t.onClickLink,
                    i = e.title,
                    s = e.link,
                    l = e.host,
                    c = e.is_published,
                    u = e.host_key,
                    d = {
                        facebook: "text-blue-600 border-blue-600",
                        youtube: "text-red-600 border-red-600",
                        twitter: "text-blue-500 border-blue-500",
                        instagram: "text-red-600 border-red-600",
                        linkedin: "text-blue-600 border-blue-600",
                        soundcloud: "text-red-600 border-red-600",
                        telegram: "text-blue-600 border-blue-600",
                        default: "text-zinc-800 border-zinc-800"
                    };
                return n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                        "a",
                        {
                            href: s,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                                "  flex items-center group rounded-2xl py-2 px-3 md:py-3 mb-4 md:px-4 last:mb-0 transition-all border-2  hover:bg-gradient-to-l from-[#e1c93f] to-[#fdfbf9] outline-none hover:scale-105 text-black ".concat(
                                    !c && "opacity-60",
                                    " shadow-md"
                                ),
                            onClick: function (t) {
                                t.preventDefault(), a(e.uuid);
                            }
                        },
                        n().createElement(
                            "div",
                            { className: "w-full xs:h-10 sm:h-10 md:h-12 lg:h-12 xl:h-12 relative" },
                            n().createElement(
                                o,
                                {
                                    isAlwaysShow: !0,
                                    className: "".concat(d[u] || d.default, " opacity-70 z-10 inline")
                                },
                                n().createElement(r, { hostname: u, size: 24 })
                            ),
                            n().createElement(
                                "div",
                                {
                                    className:
                                        "absolute w-full px-4 top-0 h-full xs:leading-10 sm:leading-10 md:leading-[48px] lg:leading-[48px] xl:leading-[48px] font-semibold text-center z-0 inline"
                                },
                                i || l
                            ),
                            n().createElement(
                                o,
                                { invisible: !0, isAlwaysShow: !0 },
                                n().createElement(r, { hostname: u, size: 24 })
                            )
                        )
                    )
                );
            };
        function i(t, n, e) {
            return (
                n in t
                    ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[n] = e),
                t
            );
        }
        e(7941), e(2526), e(7327), e(1539), e(5003), e(9554), e(4747), e(9337), e(3321), e(9070);
        var s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
            l = n().createContext && n().createContext(s),
            c = function () {
                return (
                    (c =
                        Object.assign ||
                        function (t) {
                            for (var n, e = 1, r = arguments.length; e < r; e++)
                                for (var o in (n = arguments[e]))
                                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                            return t;
                        }),
                    c.apply(this, arguments)
                );
            };
        function u(t) {
            return (
                t &&
                t.map(function (t, e) {
                    return n().createElement(t.tag, c({ key: e }, t.attr), u(t.child));
                })
            );
        }
        function d(t) {
            return function (e) {
                return n().createElement(p, c({ attr: c({}, t.attr) }, e), u(t.child));
            };
        }
        function p(t) {
            var e = function (e) {
                var r,
                    o = t.attr,
                    a = t.size,
                    i = t.title,
                    s = (function (t, n) {
                        var e = {};
                        for (var r in t)
                            Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                                n.indexOf(r[o]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                                    (e[r[o]] = t[r[o]]);
                        }
                        return e;
                    })(t, ["attr", "size", "title"]),
                    l = a || e.size || "1em";
                return (
                    e.className && (r = e.className),
                    t.className && (r = (r ? r + " " : "") + t.className),
                    n().createElement(
                        "svg",
                        c({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, e.attr, o, s, {
                            className: r,
                            style: c(c({ color: t.color || e.color }, e.style), t.style),
                            height: l,
                            width: l,
                            xmlns: "http://www.w3.org/2000/svg"
                        }),
                        i && n().createElement("title", null, i),
                        t.children
                    )
                );
            };
            return void 0 !== l
                ? n().createElement(l.Consumer, null, function (t) {
                      return e(t);
                  })
                : e(s);
        }
        function f(t) {
            return d({
                tag: "svg",
                attr: { t: "1569683925316", viewBox: "0 0 1024 1024", version: "1.1" },
                child: [
                    { tag: "defs", attr: {}, child: [] },
                    {
                        tag: "path",
                        attr: {
                            d: "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"
                        }
                    },
                    {
                        tag: "path",
                        attr: {
                            d: "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"
                        }
                    }
                ]
            })(t);
        }
        function m(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    { tag: "path", attr: { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" } }
                ]
            })(t);
        }
        function h(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    { tag: "rect", attr: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" } },
                    { tag: "path", attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" } },
                    { tag: "line", attr: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" } }
                ]
            })(t);
        }
        function b(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    {
                        tag: "path",
                        attr: { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
                    },
                    { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" } },
                    { tag: "circle", attr: { cx: "4", cy: "4", r: "2" } }
                ]
            })(t);
        }
        function g(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    {
                        tag: "path",
                        attr: { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
                    },
                    { tag: "polyline", attr: { points: "22,6 12,13 2,6" } }
                ]
            })(t);
        }
        function v(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    {
                        tag: "path",
                        attr: {
                            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        }
                    }
                ]
            })(t);
        }
        function w(t) {
            return d({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [
                    {
                        tag: "path",
                        attr: {
                            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                        }
                    },
                    { tag: "polygon", attr: { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" } }
                ]
            })(t);
        }
        function y(t) {
            return d({
                tag: "svg",
                attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                child: [
                    {
                        tag: "path",
                        attr: {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        }
                    }
                ]
            })(t);
        }
        function k(t) {
            return d({
                tag: "svg",
                attr: { viewBox: "0 0 24 24" },
                child: [
                    {
                        tag: "g",
                        attr: {},
                        child: [
                            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                            {
                                tag: "path",
                                attr: {
                                    d: "M4 10a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1zm3 1a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm3-4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm5-1a6 6 0 0 1 5.996 5.775l.003.26a3.5 3.5 0 0 1-.307 6.96L20.5 19h-3.501a1 1 0 0 1-.117-1.993L17 17h3.447l.138-.002a1.5 1.5 0 0 0 .267-2.957l-.135-.026-1.77-.252.053-1.787-.004-.176A4 4 0 0 0 15.2 8.005L15 8c-.268 0-.531.026-.788.077L14 8.126V18a1 1 0 0 1-.883.993L13 19a1 1 0 0 1-1-1l-.001-11.197A5.972 5.972 0 0 1 15 6zM1 12a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1z"
                                }
                            }
                        ]
                    }
                ]
            })(t);
        }
        function x(t) {
            return d({
                tag: "svg",
                attr: { viewBox: "0 0 24 24" },
                child: [
                    {
                        tag: "g",
                        attr: {},
                        child: [
                            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                            {
                                tag: "path",
                                attr: {
                                    fillRule: "nonzero",
                                    d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"
                                }
                            }
                        ]
                    }
                ]
            })(t);
        }
        var S = ["hostname", "children"];
        function O(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                n &&
                    (r = r.filter(function (n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })),
                    e.push.apply(e, r);
            }
            return e;
        }
        const j = function (t) {
                if (!t) return n().createElement("div", null, "LinkStarIcons");
                var e = t.hostname,
                    r = t.children,
                    o = (function (t, n) {
                        if (null == t) return {};
                        var e,
                            r,
                            o = (function (t, n) {
                                if (null == t) return {};
                                var e,
                                    r,
                                    o = {},
                                    a = Object.keys(t);
                                for (r = 0; r < a.length; r++) (e = a[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
                                return o;
                            })(t, n);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < a.length; r++)
                                (e = a[r]),
                                    n.indexOf(e) >= 0 ||
                                        (Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]));
                        }
                        return o;
                    })(t, S),
                    a = {
                        facebook: n().createElement(m, null),
                        youtube: n().createElement(w, null),
                        gmail: n().createElement(g, null),
                        twitter: n().createElement(v, null),
                        instagram: n().createElement(h, null),
                        soundcloud: n().createElement(k, null),
                        linkedin: n().createElement(b, null),
                        whatsapp: n().createElement(f, null),
                        telegram: n().createElement(x, null),
                        default: n().createElement(y, null)
                    };
                return n().cloneElement(
                    a[e] || a.default,
                    (function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = null != arguments[n] ? arguments[n] : {};
                            n % 2
                                ? O(Object(e), !0).forEach(function (n) {
                                      i(t, n, e[n]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                                : O(Object(e)).forEach(function (n) {
                                      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                                  });
                        }
                        return t;
                    })({}, o),
                    r
                );
            },
            E = {
                default_avatar: "https://i.ibb.co/BwZxthk/Deafautl.jpg",
                linkstar_logo: "https://res.cloudinary.com/encacap/image/upload/v1649831510/techupcorp/logo_zq9bt2.png",
                cover: "https://res.cloudinary.com/encacap/image/upload/v1649831510/techupcorp/logo_zq9bt2.png"
            },
            z = {
                first_name: "LinkStar",
                last_name: "Admin",
                display_name: "Link Star",
                cover_img_absolute: "",
                username: "linkstar",
                user_links: [
                    {
                        uuid: 1,
                        link: "https://www.facebook.com/linkstar",
                        host: "www.facebook.com",
                        host_key: "facebook",
                        title: "Follow me on Facebook",
                        user_uuid: 1,
                        priority: 0,
                        is_published: !0
                    },
                    {
                        uuid: 2,
                        link: "https://www.twitter.com/linkstar",
                        host: "www.twitter.com",
                        host_key: "twitter",
                        title: "Follow me on Twitter",
                        user_uuid: 1,
                        priority: 0,
                        is_published: !1
                    },
                    {
                        uuid: 3,
                        link: "https://www.instagram.com/linkstar",
                        host: "www.instagram.com",
                        host_key: "instagram",
                        title: "Follow me on Instagram",
                        user_uuid: 1,
                        priority: 0,
                        is_published: !1
                    }
                ]
            };
        var C = e(3379),
            P = e.n(C),
            L = e(7795),
            N = e.n(L),
            _ = e(569),
            M = e.n(_),
            A = e(3565),
            T = e.n(A),
            F = e(9216),
            R = e.n(F),
            I = e(4589),
            D = e.n(I),
            B = e(6387),
            U = {};
        (U.styleTagTransform = D()),
            (U.setAttributes = T()),
            (U.insert = M().bind(null, "head")),
            (U.domAPI = N()),
            (U.insertStyleElement = R()),
            P()(B.Z, U),
            B.Z && B.Z.locals && B.Z.locals;
        const H = function (t) {
            var e = t.user,
                r = void 0 === e ? z : e,
                o = t.themeConfigs,
                i = void 0 === o ? E : o,
                s = t.icons,
                l = void 0 === s ? j : s,
                c = t.onClickLink;
            return n().createElement(
                n().Fragment,
                null,
                r &&
                    l &&
                    n().createElement(
                        "div",
                        { className: "linkstar " },
                        n().createElement(
                            "div",
                            { className: "relative w-full h-full group " },
                            n().createElement(
                                "div",
                                { className: "absolute w-full h-full pt-10" },
                                n().createElement("img", {
                                    src:
                                        (null == r ? void 0 : r.cover_img_absolute) ||
                                        (null == i ? void 0 : i.cover) ||
                                        r.avatar_img_absolute ||
                                        (null == i ? void 0 : i.default_avatar),
                                    className: "object-fill  w-full h-full",
                                    alt: r.username
                                })
                            ),
                            n().createElement(
                                "div",
                                {
                                    className:
                                        "relative  grid min-h-full backdrop-blur-2xl bg-cover bg-gradient-to-r from-[#e1c93f] to-[#fdfbf9]"
                                },
                                n().createElement(
                                    "div",
                                    { className: "relative z-10 flex flex-col h-full text-stone-700" },
                                    n().createElement(
                                        "div",
                                        null,
                                        r.cover_img_absolute
                                            ? n().createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "w-full aspect-[5/2] sm:aspect-[4] xs:aspect-[3/2]  xl:aspect-[5/1] px-3 pt-3 mx-auto sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 xl:px-36 xl:py-0"
                                                  },
                                                  n().createElement("img", {
                                                      src: r.cover_img_absolute || "",
                                                      alt: "".concat(r.username, "'s cover"),
                                                      className:
                                                          "object-cover object-center w-full h-full bg-gray-100 shadow-md rounded-2xl shadow-black/10 xl:rounded-t-none"
                                                  })
                                              )
                                            : n().createElement("div", { className: "h-24 md:h-32" })
                                    ),
                                    n().createElement(
                                        "div",
                                        { className: "w-full  max-w-screen-sm mx-auto mb-6 -mt-14 md:-mt-[3.75rem]" },
                                        n().createElement(
                                            "div",
                                            { className: "mt-3 sm:mt-1 rounded-3xl z-50 md:mt-0 relative text-center" },
                                            n().createElement(
                                                "div",
                                                {
                                                    className:
                                                        "w-20 h-20 sm:w-24  md:w-28 sm:h-24 md:h-28 mx-auto overflow-hidden border-4 shadow-md   rounded-full bg-white ".concat(
                                                            !r.avatar_img_absolute && "p-4"
                                                        )
                                                },
                                                n().createElement("img", {
                                                    src: r.avatar_img_absolute || i.default_avatar,
                                                    className: "object-cover object-center w-full h-full",
                                                    alt: r.username
                                                })
                                            ),
                                            n().createElement(
                                                "div",
                                                {
                                                    className:
                                                        "mt-2 text-black  font-semibold text-xs text-center  md:text-lg"
                                                },
                                                n().createElement(
                                                    "div",
                                                    { className: "drop-shadow-md" },
                                                    r.display_name || r.last_name + " " + r.first_name
                                                ),
                                                n().createElement(
                                                    "div",
                                                    { className: "drop-shadow-md" },
                                                    "@",
                                                    r.username
                                                )
                                            )
                                        ),
                                        n().createElement(
                                            "div",
                                            { className: "flex-1 px-4 mt-10  md:mt-16 md:px-0" },
                                            r.user_links.map(function (t) {
                                                return n().createElement(a, {
                                                    key: t.uuid,
                                                    link: t,
                                                    icons: l,
                                                    onClickLink: c
                                                });
                                            })
                                        )
                                    ),
                                    n().createElement(
                                        "div",
                                        { className: "mx-auto mt-auto" },
                                        n().createElement(
                                            "div",
                                            {
                                                className:
                                                    "flex flex-col items-center text-white w-full pb-8 mx-auto mt-10"
                                            },
                                            n().createElement(
                                                "div",
                                                { className: "mb-1 text-sm font-semibold" },
                                                "Powered By"
                                            ),
                                            n().createElement("img", {
                                                src: null == i ? void 0 : i.linkstar_logo,
                                                alt: "LinkStar",
                                                className: "h-10"
                                            }),
                                            n().createElement(
                                                "div",
                                                { className: "mt-1 text-sm font-semibold" },
                                                "© LinkStar. All rights reserved."
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
            );
        };
    })();
    var o = exports;
    for (var a in r) o[a] = r[a];
    r.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
})();
