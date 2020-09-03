! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.deepScatter = e() : t.deepScatter = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var a = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var a in t) n.d(r, a, function (e) {
                    return t[e]
                }.bind(null, a));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 0)
    }([function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function (t, e) {
                return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
            },
            a = function (t) {
                return 1 === t.length && (t = function (t) {
                    return function (e, n) {
                        return r(t(e), n)
                    }
                }(t)), {
                    left: function (e, n, r, a) {
                        for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                            var i = r + a >>> 1;
                            t(e[i], n) < 0 ? r = i + 1 : a = i
                        }
                        return r
                    },
                    right: function (e, n, r, a) {
                        for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                            var i = r + a >>> 1;
                            t(e[i], n) > 0 ? a = i : r = i + 1
                        }
                        return r
                    }
                }
            };
        var i = a(r),
            o = i.right,
            f = (i.left, o);
        var c = function (t) {
                return null === t ? NaN : +t
            },
            u = Array.prototype,
            s = (u.slice, u.map, function (t, e, n) {
                t = +t, e = +e, n = (a = arguments.length) < 2 ? (e = t, t = 0, 1) : a < 3 ? 1 : +n;
                for (var r = -1, a = 0 | Math.max(0, Math.ceil((e - t) / n)), i = new Array(a); ++r < a;) i[r] = t + r * n;
                return i
            }),
            l = Math.sqrt(50),
            d = Math.sqrt(10),
            h = Math.sqrt(2),
            b = function (t, e, n) {
                var r, a, i, o, f = -1;
                if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];
                if ((r = e < t) && (a = t, t = e, e = a), 0 === (o = p(t, e, n)) || !isFinite(o)) return [];
                if (o > 0)
                    for (t = Math.ceil(t / o), e = Math.floor(e / o), i = new Array(a = Math.ceil(e - t + 1)); ++f < a;) i[f] = (t + f) * o;
                else
                    for (t = Math.floor(t * o), e = Math.ceil(e * o), i = new Array(a = Math.ceil(t - e + 1)); ++f < a;) i[f] = (t - f) / o;
                return r && i.reverse(), i
            };

        function p(t, e, n) {
            var r = (e - t) / Math.max(0, n),
                a = Math.floor(Math.log(r) / Math.LN10),
                i = r / Math.pow(10, a);
            return a >= 0 ? (i >= l ? 10 : i >= d ? 5 : i >= h ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (i >= l ? 10 : i >= d ? 5 : i >= h ? 2 : 1)
        }

        function g(t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n),
                a = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                i = r / a;
            return i >= l ? a *= 10 : i >= d ? a *= 5 : i >= h && (a *= 2), e < t ? -a : a
        }
        var m = function (t, e) {
                var n, r, a = t.length,
                    i = -1;
                if (null == e) {
                    for (; ++i < a;)
                        if (null != (n = t[i]) && n >= n)
                            for (r = n; ++i < a;) null != (n = t[i]) && n > r && (r = n)
                } else
                    for (; ++i < a;)
                        if (null != (n = e(t[i], i, t)) && n >= n)
                            for (r = n; ++i < a;) null != (n = e(t[i], i, t)) && n > r && (r = n);
                return r
            },
            y = function (t, e) {
                var n, r = t.length,
                    a = r,
                    i = -1,
                    o = 0;
                if (null == e)
                    for (; ++i < r;) isNaN(n = c(t[i])) ? --a : o += n;
                else
                    for (; ++i < r;) isNaN(n = c(e(t[i], i, t))) ? --a : o += n;
                if (a) return o / a
            },
            v = function (t, e) {
                var n, r, a = t.length,
                    i = -1;
                if (null == e) {
                    for (; ++i < a;)
                        if (null != (n = t[i]) && n >= n)
                            for (r = n; ++i < a;) null != (n = t[i]) && r > n && (r = n)
                } else
                    for (; ++i < a;)
                        if (null != (n = e(t[i], i, t)) && n >= n)
                            for (r = n; ++i < a;) null != (n = e(t[i], i, t)) && r > n && (r = n);
                return r
            };

        function w() {}

        function _(t, e) {
            var n = new w;
            if (t instanceof w) t.each(function (t, e) {
                n.set(e, t)
            });
            else if (Array.isArray(t)) {
                var r, a = -1,
                    i = t.length;
                if (null == e)
                    for (; ++a < i;) n.set(a, t[a]);
                else
                    for (; ++a < i;) n.set(e(r = t[a], a, t), r)
            } else if (t)
                for (var o in t) n.set(o, t[o]);
            return n
        }
        w.prototype = _.prototype = {
            constructor: w,
            has: function (t) {
                return "$" + t in this
            },
            get: function (t) {
                return this["$" + t]
            },
            set: function (t, e) {
                return this["$" + t] = e, this
            },
            remove: function (t) {
                var e = "$" + t;
                return e in this && delete this[e]
            },
            clear: function () {
                for (var t in this) "$" === t[0] && delete this[t]
            },
            keys: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push(e.slice(1));
                return t
            },
            values: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push(this[e]);
                return t
            },
            entries: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push({
                    key: e.slice(1),
                    value: this[e]
                });
                return t
            },
            size: function () {
                var t = 0;
                for (var e in this) "$" === e[0] && ++t;
                return t
            },
            empty: function () {
                for (var t in this)
                    if ("$" === t[0]) return !1;
                return !0
            },
            each: function (t) {
                for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this)
            }
        };
        var x = _;

        function M() {}
        var k = x.prototype;

        function A(t, e) {
            var n = new M;
            if (t instanceof M) t.each(function (t) {
                n.add(t)
            });
            else if (t) {
                var r = -1,
                    a = t.length;
                if (null == e)
                    for (; ++r < a;) n.add(t[r]);
                else
                    for (; ++r < a;) n.add(e(t[r], r, t))
            }
            return n
        }
        M.prototype = A.prototype = {
            constructor: M,
            has: k.has,
            add: function (t) {
                return this["$" + (t += "")] = t, this
            },
            remove: k.remove,
            clear: k.clear,
            values: k.keys,
            size: k.size,
            empty: k.empty,
            each: k.each
        };
        var N = A,
            T = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e
            },
            S = Array.prototype,
            z = S.map,
            C = S.slice,
            E = {
                name: "implicit"
            };

        function $(t) {
            var e = x(),
                n = [],
                r = E;

            function a(a) {
                var i = a + "",
                    o = e.get(i);
                if (!o) {
                    if (r !== E) return r;
                    e.set(i, o = n.push(a))
                }
                return t[(o - 1) % t.length]
            }
            return t = null == t ? [] : C.call(t), a.domain = function (t) {
                if (!arguments.length) return n.slice();
                n = [], e = x();
                for (var r, i, o = -1, f = t.length; ++o < f;) e.has(i = (r = t[o]) + "") || e.set(i, n.push(r));
                return a
            }, a.range = function (e) {
                return arguments.length ? (t = C.call(e), a) : t.slice()
            }, a.unknown = function (t) {
                return arguments.length ? (r = t, a) : r
            }, a.copy = function () {
                return $().domain(n).range(t).unknown(r)
            }, a
        }
        var D = function (t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t
        };

        function P(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e) n[r] = e[r];
            return n
        }

        function U() {}
        var Y = "\\s*([+-]?\\d+)\\s*",
            q = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            X = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            F = /^#([0-9a-f]{3})$/,
            I = /^#([0-9a-f]{6})$/,
            j = new RegExp("^rgb\\(" + [Y, Y, Y] + "\\)$"),
            O = new RegExp("^rgb\\(" + [X, X, X] + "\\)$"),
            R = new RegExp("^rgba\\(" + [Y, Y, Y, q] + "\\)$"),
            H = new RegExp("^rgba\\(" + [X, X, X, q] + "\\)$"),
            L = new RegExp("^hsl\\(" + [q, X, X] + "\\)$"),
            V = new RegExp("^hsla\\(" + [q, X, X, q] + "\\)$"),
            B = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function W(t) {
            var e;
            return t = (t + "").trim().toLowerCase(), (e = F.exec(t)) ? new K((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = I.exec(t)) ? Z(parseInt(e[1], 16)) : (e = j.exec(t)) ? new K(e[1], e[2], e[3], 1) : (e = O.exec(t)) ? new K(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = R.exec(t)) ? J(e[1], e[2], e[3], e[4]) : (e = H.exec(t)) ? J(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = L.exec(t)) ? et(e[1], e[2] / 100, e[3] / 100, 1) : (e = V.exec(t)) ? et(e[1], e[2] / 100, e[3] / 100, e[4]) : B.hasOwnProperty(t) ? Z(B[t]) : "transparent" === t ? new K(NaN, NaN, NaN, 0) : null
        }

        function Z(t) {
            return new K(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function J(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new K(t, e, n, r)
        }

        function Q(t) {
            return t instanceof U || (t = W(t)), t ? new K((t = t.rgb()).r, t.g, t.b, t.opacity) : new K
        }

        function G(t, e, n, r) {
            return 1 === arguments.length ? Q(t) : new K(t, e, n, null == r ? 1 : r)
        }

        function K(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
        }

        function tt(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function et(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new rt(t, e, n, r)
        }

        function nt(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof rt) return new rt(t.h, t.s, t.l, t.opacity);
                if (t instanceof U || (t = W(t)), !t) return new rt;
                if (t instanceof rt) return t;
                var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    a = Math.min(e, n, r),
                    i = Math.max(e, n, r),
                    o = NaN,
                    f = i - a,
                    c = (i + a) / 2;
                return f ? (o = e === i ? (n - r) / f + 6 * (n < r) : n === i ? (r - e) / f + 2 : (e - n) / f + 4, f /= c < .5 ? i + a : 2 - i - a, o *= 60) : f = c > 0 && c < 1 ? 0 : o, new rt(o, f, c, t.opacity)
            }(t) : new rt(t, e, n, null == r ? 1 : r)
        }

        function rt(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function at(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }
        D(U, W, {
            displayable: function () {
                return this.rgb().displayable()
            },
            hex: function () {
                return this.rgb().hex()
            },
            toString: function () {
                return this.rgb() + ""
            }
        }), D(K, G, P(U, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new K(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new K(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function () {
                return this
            },
            displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function () {
                return "#" + tt(this.r) + tt(this.g) + tt(this.b)
            },
            toString: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), D(rt, nt, P(U, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new rt(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new rt(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0),
                    e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e,
                    a = 2 * n - r;
                return new K(at(t >= 240 ? t - 240 : t + 120, a, r), at(t, a, r), at(t < 120 ? t + 240 : t - 120, a, r), this.opacity)
            },
            displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var it = Math.PI / 180,
            ot = 180 / Math.PI,
            ft = .96422,
            ct = 1,
            ut = .82521,
            st = 4 / 29,
            lt = 6 / 29,
            dt = 3 * lt * lt,
            ht = lt * lt * lt;

        function bt(t) {
            if (t instanceof gt) return new gt(t.l, t.a, t.b, t.opacity);
            if (t instanceof Mt) {
                if (isNaN(t.h)) return new gt(t.l, 0, 0, t.opacity);
                var e = t.h * it;
                return new gt(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            t instanceof K || (t = Q(t));
            var n, r, a = wt(t.r),
                i = wt(t.g),
                o = wt(t.b),
                f = mt((.2225045 * a + .7168786 * i + .0606169 * o) / ct);
            return a === i && i === o ? n = r = f : (n = mt((.4360747 * a + .3850649 * i + .1430804 * o) / ft), r = mt((.0139322 * a + .0971045 * i + .7141733 * o) / ut)), new gt(116 * f - 16, 500 * (n - f), 200 * (f - r), t.opacity)
        }

        function pt(t, e, n, r) {
            return 1 === arguments.length ? bt(t) : new gt(t, e, n, null == r ? 1 : r)
        }

        function gt(t, e, n, r) {
            this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
        }

        function mt(t) {
            return t > ht ? Math.pow(t, 1 / 3) : t / dt + st
        }

        function yt(t) {
            return t > lt ? t * t * t : dt * (t - st)
        }

        function vt(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function wt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function _t(t) {
            if (t instanceof Mt) return new Mt(t.h, t.c, t.l, t.opacity);
            if (t instanceof gt || (t = bt(t)), 0 === t.a && 0 === t.b) return new Mt(NaN, 0, t.l, t.opacity);
            var e = Math.atan2(t.b, t.a) * ot;
            return new Mt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function xt(t, e, n, r) {
            return 1 === arguments.length ? _t(t) : new Mt(t, e, n, null == r ? 1 : r)
        }

        function Mt(t, e, n, r) {
            this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
        }
        D(gt, pt, P(U, {
            brighter: function (t) {
                return new gt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function (t) {
                return new gt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function () {
                var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200;
                return new K(vt(3.1338561 * (e = ft * yt(e)) - 1.6168667 * (t = ct * yt(t)) - .4906146 * (n = ut * yt(n))), vt(-.9787684 * e + 1.9161415 * t + .033454 * n), vt(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
            }
        })), D(Mt, xt, P(U, {
            brighter: function (t) {
                return new Mt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function (t) {
                return new Mt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function () {
                return bt(this).rgb()
            }
        }));
        var kt = -.14861,
            At = 1.78277,
            Nt = -.29227,
            Tt = -.90649,
            St = 1.97294,
            zt = St * Tt,
            Ct = St * At,
            Et = At * Nt - Tt * kt;

        function $t(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof Dt) return new Dt(t.h, t.s, t.l, t.opacity);
                t instanceof K || (t = Q(t));
                var e = t.r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    a = (Et * r + zt * e - Ct * n) / (Et + zt - Ct),
                    i = r - a,
                    o = (St * (n - a) - Nt * i) / Tt,
                    f = Math.sqrt(o * o + i * i) / (St * a * (1 - a)),
                    c = f ? Math.atan2(o, i) * ot - 120 : NaN;
                return new Dt(c < 0 ? c + 360 : c, f, a, t.opacity)
            }(t) : new Dt(t, e, n, null == r ? 1 : r)
        }

        function Dt(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function Pt(t, e, n, r, a) {
            var i = t * t,
                o = i * t;
            return ((1 - 3 * t + 3 * i - o) * e + (4 - 6 * i + 3 * o) * n + (1 + 3 * t + 3 * i - 3 * o) * r + o * a) / 6
        }
        D(Dt, $t, P(U, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Dt(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Dt(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * it,
                    e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                    r = Math.cos(t),
                    a = Math.sin(t);
                return new K(255 * (e + n * (kt * r + At * a)), 255 * (e + n * (Nt * r + Tt * a)), 255 * (e + n * (St * r)), this.opacity)
            }
        }));
        var Ut = function (t) {
            return function () {
                return t
            }
        };

        function Yt(t, e) {
            return function (n) {
                return t + n * e
            }
        }

        function qt(t, e) {
            var n = e - t;
            return n ? Yt(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Ut(isNaN(t) ? e : t)
        }

        function Xt(t) {
            return 1 == (t = +t) ? Ft : function (e, n) {
                return n - e ? function (t, e, n) {
                    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                        function (r) {
                            return Math.pow(t + r * e, n)
                        }
                }(e, n, t) : Ut(isNaN(e) ? n : e)
            }
        }

        function Ft(t, e) {
            var n = e - t;
            return n ? Yt(t, n) : Ut(isNaN(t) ? e : t)
        }
        var It = function t(e) {
            var n = Xt(e);

            function r(t, e) {
                var r = n((t = G(t)).r, (e = G(e)).r),
                    a = n(t.g, e.g),
                    i = n(t.b, e.b),
                    o = Ft(t.opacity, e.opacity);
                return function (e) {
                    return t.r = r(e), t.g = a(e), t.b = i(e), t.opacity = o(e), t + ""
                }
            }
            return r.gamma = t, r
        }(1);

        function jt(t) {
            return function (e) {
                var n, r, a = e.length,
                    i = new Array(a),
                    o = new Array(a),
                    f = new Array(a);
                for (n = 0; n < a; ++n) r = G(e[n]), i[n] = r.r || 0, o[n] = r.g || 0, f[n] = r.b || 0;
                return i = t(i), o = t(o), f = t(f), r.opacity = 1,
                    function (t) {
                        return r.r = i(t), r.g = o(t), r.b = f(t), r + ""
                    }
            }
        }
        jt(function (t) {
            var e = t.length - 1;
            return function (n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                    a = t[r],
                    i = t[r + 1],
                    o = r > 0 ? t[r - 1] : 2 * a - i,
                    f = r < e - 1 ? t[r + 2] : 2 * i - a;
                return Pt((n - r / e) * e, o, a, i, f)
            }
        }), jt(function (t) {
            var e = t.length;
            return function (n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                    a = t[(r + e - 1) % e],
                    i = t[r % e],
                    o = t[(r + 1) % e],
                    f = t[(r + 2) % e];
                return Pt((n - r / e) * e, a, i, o, f)
            }
        });
        var Ot = function (t, e) {
                return e -= t = +t,
                    function (n) {
                        return t + e * n
                    }
            },
            Rt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Ht = new RegExp(Rt.source, "g");
        var Lt, Vt, Bt, Wt, Zt = function (t, e) {
                var n, r = typeof e;
                return null == e || "boolean" === r ? Ut(e) : ("number" === r ? Ot : "string" === r ? (n = W(e)) ? (e = n, It) : function (t, e) {
                    var n, r, a, i = Rt.lastIndex = Ht.lastIndex = 0,
                        o = -1,
                        f = [],
                        c = [];
                    for (t += "", e += "";
                        (n = Rt.exec(t)) && (r = Ht.exec(e));)(a = r.index) > i && (a = e.slice(i, a), f[o] ? f[o] += a : f[++o] = a), (n = n[0]) === (r = r[0]) ? f[o] ? f[o] += r : f[++o] = r : (f[++o] = null, c.push({
                        i: o,
                        x: Ot(n, r)
                    })), i = Ht.lastIndex;
                    return i < e.length && (a = e.slice(i), f[o] ? f[o] += a : f[++o] = a), f.length < 2 ? c[0] ? function (t) {
                        return function (e) {
                            return t(e) + ""
                        }
                    }(c[0].x) : function (t) {
                        return function () {
                            return t
                        }
                    }(e) : (e = c.length, function (t) {
                        for (var n, r = 0; r < e; ++r) f[(n = c[r]).i] = n.x(t);
                        return f.join("")
                    })
                } : e instanceof W ? It : e instanceof Date ? function (t, e) {
                    var n = new Date;
                    return e -= t = +t,
                        function (r) {
                            return n.setTime(t + e * r), n
                        }
                } : Array.isArray(e) ? function (t, e) {
                    var n, r = e ? e.length : 0,
                        a = t ? Math.min(r, t.length) : 0,
                        i = new Array(a),
                        o = new Array(r);
                    for (n = 0; n < a; ++n) i[n] = Zt(t[n], e[n]);
                    for (; n < r; ++n) o[n] = e[n];
                    return function (t) {
                        for (n = 0; n < a; ++n) o[n] = i[n](t);
                        return o
                    }
                } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function (t, e) {
                    var n, r = {},
                        a = {};
                    for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = Zt(t[n], e[n]) : a[n] = e[n];
                    return function (t) {
                        for (n in r) a[n] = r[n](t);
                        return a
                    }
                } : Ot)(t, e)
            },
            Jt = function (t, e) {
                return e -= t = +t,
                    function (n) {
                        return Math.round(t + e * n)
                    }
            },
            Qt = 180 / Math.PI,
            Gt = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            Kt = function (t, e, n, r, a, i) {
                var o, f, c;
                return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (f = Math.sqrt(n * n + r * r)) && (n /= f, r /= f, c /= f), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
                    translateX: a,
                    translateY: i,
                    rotate: Math.atan2(e, t) * Qt,
                    skewX: Math.atan(c) * Qt,
                    scaleX: o,
                    scaleY: f
                }
            };

        function te(t, e, n, r) {
            function a(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function (i, o) {
                var f = [],
                    c = [];
                return i = t(i), o = t(o),
                    function (t, r, a, i, o, f) {
                        if (t !== a || r !== i) {
                            var c = o.push("translate(", null, e, null, n);
                            f.push({
                                i: c - 4,
                                x: Ot(t, a)
                            }, {
                                i: c - 2,
                                x: Ot(r, i)
                            })
                        } else(a || i) && o.push("translate(" + a + e + i + n)
                    }(i.translateX, i.translateY, o.translateX, o.translateY, f, c),
                    function (t, e, n, i) {
                        t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), i.push({
                            i: n.push(a(n) + "rotate(", null, r) - 2,
                            x: Ot(t, e)
                        })) : e && n.push(a(n) + "rotate(" + e + r)
                    }(i.rotate, o.rotate, f, c),
                    function (t, e, n, i) {
                        t !== e ? i.push({
                            i: n.push(a(n) + "skewX(", null, r) - 2,
                            x: Ot(t, e)
                        }) : e && n.push(a(n) + "skewX(" + e + r)
                    }(i.skewX, o.skewX, f, c),
                    function (t, e, n, r, i, o) {
                        if (t !== n || e !== r) {
                            var f = i.push(a(i) + "scale(", null, ",", null, ")");
                            o.push({
                                i: f - 4,
                                x: Ot(t, n)
                            }, {
                                i: f - 2,
                                x: Ot(e, r)
                            })
                        } else 1 === n && 1 === r || i.push(a(i) + "scale(" + n + "," + r + ")")
                    }(i.scaleX, i.scaleY, o.scaleX, o.scaleY, f, c), i = o = null,
                    function (t) {
                        for (var e, n = -1, r = c.length; ++n < r;) f[(e = c[n]).i] = e.x(t);
                        return f.join("")
                    }
            }
        }
        te(function (t) {
            return "none" === t ? Gt : (Lt || (Lt = document.createElement("DIV"), Vt = document.documentElement, Bt = document.defaultView), Lt.style.transform = t, t = Bt.getComputedStyle(Vt.appendChild(Lt), null).getPropertyValue("transform"), Vt.removeChild(Lt), t = t.slice(7, -1).split(","), Kt(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }, "px, ", "px)", "deg)"), te(function (t) {
            return null == t ? Gt : (Wt || (Wt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wt.setAttribute("transform", t), (t = Wt.transform.baseVal.consolidate()) ? (t = t.matrix, Kt(t.a, t.b, t.c, t.d, t.e, t.f)) : Gt)
        }, ", ", ")", ")"), Math.SQRT2;

        function ee(t) {
            return function (e, n) {
                var r = t((e = nt(e)).h, (n = nt(n)).h),
                    a = Ft(e.s, n.s),
                    i = Ft(e.l, n.l),
                    o = Ft(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.s = a(t), e.l = i(t), e.opacity = o(t), e + ""
                }
            }
        }
        ee(qt), ee(Ft);

        function ne(t) {
            return function (e, n) {
                var r = t((e = xt(e)).h, (n = xt(n)).h),
                    a = Ft(e.c, n.c),
                    i = Ft(e.l, n.l),
                    o = Ft(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.c = a(t), e.l = i(t), e.opacity = o(t), e + ""
                }
            }
        }
        ne(qt), ne(Ft);

        function re(t) {
            return function e(n) {
                function r(e, r) {
                    var a = t((e = $t(e)).h, (r = $t(r)).h),
                        i = Ft(e.s, r.s),
                        o = Ft(e.l, r.l),
                        f = Ft(e.opacity, r.opacity);
                    return function (t) {
                        return e.h = a(t), e.s = i(t), e.l = o(Math.pow(t, n)), e.opacity = f(t), e + ""
                    }
                }
                return n = +n, r.gamma = e, r
            }(1)
        }
        re(qt), re(Ft);
        var ae = function (t) {
                return function () {
                    return t
                }
            },
            ie = function (t) {
                return +t
            },
            oe = [0, 1];

        function fe(t, e) {
            return (e -= t = +t) ? function (n) {
                return (n - t) / e
            } : ae(e)
        }

        function ce(t, e, n, r) {
            var a = t[0],
                i = t[1],
                o = e[0],
                f = e[1];
            return i < a ? (a = n(i, a), o = r(f, o)) : (a = n(a, i), o = r(o, f)),
                function (t) {
                    return o(a(t))
                }
        }

        function ue(t, e, n, r) {
            var a = Math.min(t.length, e.length) - 1,
                i = new Array(a),
                o = new Array(a),
                c = -1;
            for (t[a] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < a;) i[c] = n(t[c], t[c + 1]), o[c] = r(e[c], e[c + 1]);
            return function (e) {
                var n = f(t, e, 1, a) - 1;
                return o[n](i[n](e))
            }
        }

        function se(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }

        function le(t, e) {
            var n, r, a, i = oe,
                o = oe,
                f = Zt,
                c = !1;

            function u() {
                return n = Math.min(i.length, o.length) > 2 ? ue : ce, r = a = null, s
            }

            function s(e) {
                return (r || (r = n(i, o, c ? function (t) {
                    return function (e, n) {
                        var r = t(e = +e, n = +n);
                        return function (t) {
                            return t <= e ? 0 : t >= n ? 1 : r(t)
                        }
                    }
                }(t) : t, f)))(+e)
            }
            return s.invert = function (t) {
                return (a || (a = n(o, i, fe, c ? function (t) {
                    return function (e, n) {
                        var r = t(e = +e, n = +n);
                        return function (t) {
                            return t <= 0 ? e : t >= 1 ? n : r(t)
                        }
                    }
                }(e) : e)))(+t)
            }, s.domain = function (t) {
                return arguments.length ? (i = z.call(t, ie), u()) : i.slice()
            }, s.range = function (t) {
                return arguments.length ? (o = C.call(t), u()) : o.slice()
            }, s.rangeRound = function (t) {
                return o = C.call(t), f = Jt, u()
            }, s.clamp = function (t) {
                return arguments.length ? (c = !!t, u()) : c
            }, s.interpolate = function (t) {
                return arguments.length ? (f = t, u()) : f
            }, u()
        }
        var de = function (t, e) {
                if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var n, r = t.slice(0, n);
                return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
            },
            he = function (t) {
                return (t = de(Math.abs(t))) ? t[1] : NaN
            },
            be = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function pe(t) {
            return new ge(t)
        }

        function ge(t) {
            if (!(e = be.exec(t))) throw new Error("invalid format: " + t);
            var e;
            this.fill = e[1] || " ", this.align = e[2] || ">", this.sign = e[3] || "-", this.symbol = e[4] || "", this.zero = !!e[5], this.width = e[6] && +e[6], this.comma = !!e[7], this.precision = e[8] && +e[8].slice(1), this.trim = !!e[9], this.type = e[10] || ""
        }
        pe.prototype = ge.prototype, ge.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
        var me, ye, ve, we, _e = function (t) {
                t: for (var e, n = t.length, r = 1, a = -1; r < n; ++r) switch (t[r]) {
                    case ".":
                        a = e = r;
                        break;
                    case "0":
                        0 === a && (a = r), e = r;
                        break;
                    default:
                        if (a > 0) {
                            if (!+t[r]) break t;
                            a = 0
                        }
                }
                return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
            },
            xe = function (t, e) {
                var n = de(t, e);
                if (!n) return t + "";
                var r = n[0],
                    a = n[1];
                return a < 0 ? "0." + new Array(-a).join("0") + r : r.length > a + 1 ? r.slice(0, a + 1) + "." + r.slice(a + 1) : r + new Array(a - r.length + 2).join("0")
            },
            Me = {
                "%": function (t, e) {
                    return (100 * t).toFixed(e)
                },
                b: function (t) {
                    return Math.round(t).toString(2)
                },
                c: function (t) {
                    return t + ""
                },
                d: function (t) {
                    return Math.round(t).toString(10)
                },
                e: function (t, e) {
                    return t.toExponential(e)
                },
                f: function (t, e) {
                    return t.toFixed(e)
                },
                g: function (t, e) {
                    return t.toPrecision(e)
                },
                o: function (t) {
                    return Math.round(t).toString(8)
                },
                p: function (t, e) {
                    return xe(100 * t, e)
                },
                r: xe,
                s: function (t, e) {
                    var n = de(t, e);
                    if (!n) return t + "";
                    var r = n[0],
                        a = n[1],
                        i = a - (me = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
                        o = r.length;
                    return i === o ? r : i > o ? r + new Array(i - o + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + de(t, Math.max(0, e + i - 1))[0]
                },
                X: function (t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function (t) {
                    return Math.round(t).toString(16)
                }
            },
            ke = function (t) {
                return t
            },
            Ae = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
            Ne = function (t) {
                var e = t.grouping && t.thousands ? function (t, e) {
                        return function (n, r) {
                            for (var a = n.length, i = [], o = 0, f = t[0], c = 0; a > 0 && f > 0 && (c + f + 1 > r && (f = Math.max(1, r - c)), i.push(n.substring(a -= f, a + f)), !((c += f + 1) > r));) f = t[o = (o + 1) % t.length];
                            return i.reverse().join(e)
                        }
                    }(t.grouping, t.thousands) : ke,
                    n = t.currency,
                    r = t.decimal,
                    a = t.numerals ? function (t) {
                        return function (e) {
                            return e.replace(/[0-9]/g, function (e) {
                                return t[+e]
                            })
                        }
                    }(t.numerals) : ke,
                    i = t.percent || "%";

                function o(t) {
                    var o = (t = pe(t)).fill,
                        f = t.align,
                        c = t.sign,
                        u = t.symbol,
                        s = t.zero,
                        l = t.width,
                        d = t.comma,
                        h = t.precision,
                        b = t.trim,
                        p = t.type;
                    "n" === p ? (d = !0, p = "g") : Me[p] || (null == h && (h = 12), b = !0, p = "g"), (s || "0" === o && "=" === f) && (s = !0, o = "0", f = "=");
                    var g = "$" === u ? n[0] : "#" === u && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
                        m = "$" === u ? n[1] : /[%p]/.test(p) ? i : "",
                        y = Me[p],
                        v = /[defgprs%]/.test(p);

                    function w(t) {
                        var n, i, u, w = g,
                            _ = m;
                        if ("c" === p) _ = y(t) + _, t = "";
                        else {
                            var x = (t = +t) < 0;
                            if (t = y(Math.abs(t), h), b && (t = _e(t)), x && 0 == +t && (x = !1), w = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + w, _ = ("s" === p ? Ae[8 + me / 3] : "") + _ + (x && "(" === c ? ")" : ""), v)
                                for (n = -1, i = t.length; ++n < i;)
                                    if (48 > (u = t.charCodeAt(n)) || u > 57) {
                                        _ = (46 === u ? r + t.slice(n + 1) : t.slice(n)) + _, t = t.slice(0, n);
                                        break
                                    }
                        }
                        d && !s && (t = e(t, 1 / 0));
                        var M = w.length + t.length + _.length,
                            k = M < l ? new Array(l - M + 1).join(o) : "";
                        switch (d && s && (t = e(k + t, k.length ? l - _.length : 1 / 0), k = ""), f) {
                            case "<":
                                t = w + t + _ + k;
                                break;
                            case "=":
                                t = w + k + t + _;
                                break;
                            case "^":
                                t = k.slice(0, M = k.length >> 1) + w + t + _ + k.slice(M);
                                break;
                            default:
                                t = k + w + t + _
                        }
                        return a(t)
                    }
                    return h = null == h ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), w.toString = function () {
                        return t + ""
                    }, w
                }
                return {
                    format: o,
                    formatPrefix: function (t, e) {
                        var n = o(((t = pe(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(he(e) / 3))),
                            a = Math.pow(10, -r),
                            i = Ae[8 + r / 3];
                        return function (t) {
                            return n(a * t) + i
                        }
                    }
                }
            };
        ! function (t) {
            ye = Ne(t), ve = ye.format, we = ye.formatPrefix
        }({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        var Te = function (t, e, n) {
            var r, a = t[0],
                i = t[t.length - 1],
                o = g(a, i, null == e ? 10 : e);
            switch ((n = pe(null == n ? ",f" : n)).type) {
                case "s":
                    var f = Math.max(Math.abs(a), Math.abs(i));
                    return null != n.precision || isNaN(r = function (t, e) {
                        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(he(e) / 3))) - he(Math.abs(t)))
                    }(o, f)) || (n.precision = r), we(n, f);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != n.precision || isNaN(r = function (t, e) {
                        return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, he(e) - he(t)) + 1
                    }(o, Math.max(Math.abs(a), Math.abs(i)))) || (n.precision = r - ("e" === n.type));
                    break;
                case "f":
                case "%":
                    null != n.precision || isNaN(r = function (t) {
                        return Math.max(0, -he(Math.abs(t)))
                    }(o)) || (n.precision = r - 2 * ("%" === n.type))
            }
            return ve(n)
        };

        function Se(t) {
            var e = t.domain;
            return t.ticks = function (t) {
                var n = e();
                return b(n[0], n[n.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function (t, n) {
                return Te(e(), t, n)
            }, t.nice = function (n) {
                null == n && (n = 10);
                var r, a = e(),
                    i = 0,
                    o = a.length - 1,
                    f = a[i],
                    c = a[o];
                return c < f && (r = f, f = c, c = r, r = i, i = o, o = r), (r = p(f, c, n)) > 0 ? r = p(f = Math.floor(f / r) * r, c = Math.ceil(c / r) * r, n) : r < 0 && (r = p(f = Math.ceil(f * r) / r, c = Math.floor(c * r) / r, n)), r > 0 ? (a[i] = Math.floor(f / r) * r, a[o] = Math.ceil(c / r) * r, e(a)) : r < 0 && (a[i] = Math.ceil(f * r) / r, a[o] = Math.floor(c * r) / r, e(a)), t
            }, t
        }

        function ze() {
            var t = le(fe, Ot);
            return t.copy = function () {
                return se(t, ze())
            }, Se(t)
        }

        function Ce(t, e) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
        }

        function Ee() {
            var t = 1,
                e = le(function (e, n) {
                    return (n = Ce(n, t) - (e = Ce(e, t))) ? function (r) {
                        return (Ce(r, t) - e) / n
                    } : ae(n)
                }, function (e, n) {
                    return n = Ce(n, t) - (e = Ce(e, t)),
                        function (r) {
                            return Ce(e + n * r, 1 / t)
                        }
                }),
                n = e.domain;
            return e.exponent = function (e) {
                return arguments.length ? (t = +e, n(n())) : t
            }, e.copy = function () {
                return se(e, Ee().exponent(t))
            }, Se(e)
        }

        function $e() {
            var t = 0,
                e = 1,
                n = 1,
                r = [.5],
                a = [0, 1];

            function i(t) {
                if (t <= t) return a[f(r, t, 0, n)]
            }

            function o() {
                var a = -1;
                for (r = new Array(n); ++a < n;) r[a] = ((a + 1) * e - (a - n) * t) / (n + 1);
                return i
            }
            return i.domain = function (n) {
                return arguments.length ? (t = +n[0], e = +n[1], o()) : [t, e]
            }, i.range = function (t) {
                return arguments.length ? (n = (a = C.call(t)).length - 1, o()) : a.slice()
            }, i.invertExtent = function (i) {
                var o = a.indexOf(i);
                return o < 0 ? [NaN, NaN] : o < 1 ? [t, r[0]] : o >= n ? [r[n - 1], e] : [r[o - 1], r[o]]
            }, i.copy = function () {
                return $e().domain([t, e]).range(a)
            }, Se(i)
        }
        var De = new Date,
            Pe = new Date;

        function Ue(t, e, n, r) {
            function a(e) {
                return t(e = new Date(+e)), e
            }
            return a.floor = a, a.ceil = function (n) {
                return t(n = new Date(n - 1)), e(n, 1), t(n), n
            }, a.round = function (t) {
                var e = a(t),
                    n = a.ceil(t);
                return t - e < n - t ? e : n
            }, a.offset = function (t, n) {
                return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
            }, a.range = function (n, r, i) {
                var o, f = [];
                if (n = a.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return f;
                do {
                    f.push(o = new Date(+n)), e(n, i), t(n)
                } while (o < n && n < r);
                return f
            }, a.filter = function (n) {
                return Ue(function (e) {
                    if (e >= e)
                        for (; t(e), !n(e);) e.setTime(e - 1)
                }, function (t, r) {
                    if (t >= t)
                        if (r < 0)
                            for (; ++r <= 0;)
                                for (; e(t, -1), !n(t););
                        else
                            for (; --r >= 0;)
                                for (; e(t, 1), !n(t););
                })
            }, n && (a.count = function (e, r) {
                return De.setTime(+e), Pe.setTime(+r), t(De), t(Pe), Math.floor(n(De, Pe))
            }, a.every = function (t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? a.filter(r ? function (e) {
                    return r(e) % t == 0
                } : function (e) {
                    return a.count(0, e) % t == 0
                }) : a : null
            }), a
        }
        var Ye = Ue(function () {}, function (t, e) {
            t.setTime(+t + e)
        }, function (t, e) {
            return e - t
        });
        Ye.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Ue(function (e) {
                e.setTime(Math.floor(e / t) * t)
            }, function (e, n) {
                e.setTime(+e + n * t)
            }, function (e, n) {
                return (n - e) / t
            }) : Ye : null
        };
        Ye.range;
        var qe = 6e4,
            Xe = 6048e5,
            Fe = Ue(function (t) {
                t.setTime(1e3 * Math.floor(t / 1e3))
            }, function (t, e) {
                t.setTime(+t + 1e3 * e)
            }, function (t, e) {
                return (e - t) / 1e3
            }, function (t) {
                return t.getUTCSeconds()
            }),
            Ie = (Fe.range, Ue(function (t) {
                t.setTime(Math.floor(t / qe) * qe)
            }, function (t, e) {
                t.setTime(+t + e * qe)
            }, function (t, e) {
                return (e - t) / qe
            }, function (t) {
                return t.getMinutes()
            })),
            je = (Ie.range, Ue(function (t) {
                var e = t.getTimezoneOffset() * qe % 36e5;
                e < 0 && (e += 36e5), t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e)
            }, function (t, e) {
                t.setTime(+t + 36e5 * e)
            }, function (t, e) {
                return (e - t) / 36e5
            }, function (t) {
                return t.getHours()
            })),
            Oe = (je.range, Ue(function (t) {
                t.setHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setDate(t.getDate() + e)
            }, function (t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * qe) / 864e5
            }, function (t) {
                return t.getDate() - 1
            })),
            Re = Oe;
        Oe.range;

        function He(t) {
            return Ue(function (e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setDate(t.getDate() + 7 * e)
            }, function (t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * qe) / Xe
            })
        }
        var Le = He(0),
            Ve = He(1),
            Be = He(2),
            We = He(3),
            Ze = He(4),
            Je = He(5),
            Qe = He(6),
            Ge = (Le.range, Ve.range, Be.range, We.range, Ze.range, Je.range, Qe.range, Ue(function (t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setMonth(t.getMonth() + e)
            }, function (t, e) {
                return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
            }, function (t) {
                return t.getMonth()
            })),
            Ke = (Ge.range, Ue(function (t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setFullYear(t.getFullYear() + e)
            }, function (t, e) {
                return e.getFullYear() - t.getFullYear()
            }, function (t) {
                return t.getFullYear()
            }));
        Ke.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Ue(function (e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
            }, function (e, n) {
                e.setFullYear(e.getFullYear() + n * t)
            }) : null
        };
        var tn = Ke,
            en = (Ke.range, Ue(function (t) {
                t.setUTCSeconds(0, 0)
            }, function (t, e) {
                t.setTime(+t + e * qe)
            }, function (t, e) {
                return (e - t) / qe
            }, function (t) {
                return t.getUTCMinutes()
            })),
            nn = (en.range, Ue(function (t) {
                t.setUTCMinutes(0, 0, 0)
            }, function (t, e) {
                t.setTime(+t + 36e5 * e)
            }, function (t, e) {
                return (e - t) / 36e5
            }, function (t) {
                return t.getUTCHours()
            })),
            rn = (nn.range, Ue(function (t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setUTCDate(t.getUTCDate() + e)
            }, function (t, e) {
                return (e - t) / 864e5
            }, function (t) {
                return t.getUTCDate() - 1
            })),
            an = rn;
        rn.range;

        function on(t) {
            return Ue(function (e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }, function (t, e) {
                return (e - t) / Xe
            })
        }
        var fn = on(0),
            cn = on(1),
            un = on(2),
            sn = on(3),
            ln = on(4),
            dn = on(5),
            hn = on(6),
            bn = (fn.range, cn.range, un.range, sn.range, ln.range, dn.range, hn.range, Ue(function (t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setUTCMonth(t.getUTCMonth() + e)
            }, function (t, e) {
                return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
            }, function (t) {
                return t.getUTCMonth()
            })),
            pn = (bn.range, Ue(function (t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setUTCFullYear(t.getUTCFullYear() + e)
            }, function (t, e) {
                return e.getUTCFullYear() - t.getUTCFullYear()
            }, function (t) {
                return t.getUTCFullYear()
            }));
        pn.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Ue(function (e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            }, function (e, n) {
                e.setUTCFullYear(e.getUTCFullYear() + n * t)
            }) : null
        };
        var gn = pn;
        pn.range;

        function mn(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return e.setFullYear(t.y), e
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function yn(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y), e
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function vn(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        var wn, _n, xn, Mn = {
                "-": "",
                _: " ",
                0: "0"
            },
            kn = /^\s*\d+/,
            An = /^%/,
            Nn = /[\\^$*+?|[\]().{}]/g;

        function Tn(t, e, n) {
            var r = t < 0 ? "-" : "",
                a = (r ? -t : t) + "",
                i = a.length;
            return r + (i < n ? new Array(n - i + 1).join(e) + a : a)
        }

        function Sn(t) {
            return t.replace(Nn, "\\$&")
        }

        function zn(t) {
            return new RegExp("^(?:" + t.map(Sn).join("|") + ")", "i")
        }

        function Cn(t) {
            for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
            return e
        }

        function En(t, e, n) {
            var r = kn.exec(e.slice(n, n + 1));
            return r ? (t.w = +r[0], n + r[0].length) : -1
        }

        function $n(t, e, n) {
            var r = kn.exec(e.slice(n, n + 1));
            return r ? (t.u = +r[0], n + r[0].length) : -1
        }

        function Dn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.U = +r[0], n + r[0].length) : -1
        }

        function Pn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.V = +r[0], n + r[0].length) : -1
        }

        function Un(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.W = +r[0], n + r[0].length) : -1
        }

        function Yn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 4));
            return r ? (t.y = +r[0], n + r[0].length) : -1
        }

        function qn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
        }

        function Xn(t, e, n) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
        }

        function Fn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.m = r[0] - 1, n + r[0].length) : -1
        }

        function In(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.d = +r[0], n + r[0].length) : -1
        }

        function jn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 3));
            return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
        }

        function On(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.H = +r[0], n + r[0].length) : -1
        }

        function Rn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.M = +r[0], n + r[0].length) : -1
        }

        function Hn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 2));
            return r ? (t.S = +r[0], n + r[0].length) : -1
        }

        function Ln(t, e, n) {
            var r = kn.exec(e.slice(n, n + 3));
            return r ? (t.L = +r[0], n + r[0].length) : -1
        }

        function Vn(t, e, n) {
            var r = kn.exec(e.slice(n, n + 6));
            return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
        }

        function Bn(t, e, n) {
            var r = An.exec(e.slice(n, n + 1));
            return r ? n + r[0].length : -1
        }

        function Wn(t, e, n) {
            var r = kn.exec(e.slice(n));
            return r ? (t.Q = +r[0], n + r[0].length) : -1
        }

        function Zn(t, e, n) {
            var r = kn.exec(e.slice(n));
            return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1
        }

        function Jn(t, e) {
            return Tn(t.getDate(), e, 2)
        }

        function Qn(t, e) {
            return Tn(t.getHours(), e, 2)
        }

        function Gn(t, e) {
            return Tn(t.getHours() % 12 || 12, e, 2)
        }

        function Kn(t, e) {
            return Tn(1 + Re.count(tn(t), t), e, 3)
        }

        function tr(t, e) {
            return Tn(t.getMilliseconds(), e, 3)
        }

        function er(t, e) {
            return tr(t, e) + "000"
        }

        function nr(t, e) {
            return Tn(t.getMonth() + 1, e, 2)
        }

        function rr(t, e) {
            return Tn(t.getMinutes(), e, 2)
        }

        function ar(t, e) {
            return Tn(t.getSeconds(), e, 2)
        }

        function ir(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        }

        function or(t, e) {
            return Tn(Le.count(tn(t), t), e, 2)
        }

        function fr(t, e) {
            var n = t.getDay();
            return t = n >= 4 || 0 === n ? Ze(t) : Ze.ceil(t), Tn(Ze.count(tn(t), t) + (4 === tn(t).getDay()), e, 2)
        }

        function cr(t) {
            return t.getDay()
        }

        function ur(t, e) {
            return Tn(Ve.count(tn(t), t), e, 2)
        }

        function sr(t, e) {
            return Tn(t.getFullYear() % 100, e, 2)
        }

        function lr(t, e) {
            return Tn(t.getFullYear() % 1e4, e, 4)
        }

        function dr(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1, "+")) + Tn(e / 60 | 0, "0", 2) + Tn(e % 60, "0", 2)
        }

        function hr(t, e) {
            return Tn(t.getUTCDate(), e, 2)
        }

        function br(t, e) {
            return Tn(t.getUTCHours(), e, 2)
        }

        function pr(t, e) {
            return Tn(t.getUTCHours() % 12 || 12, e, 2)
        }

        function gr(t, e) {
            return Tn(1 + an.count(gn(t), t), e, 3)
        }

        function mr(t, e) {
            return Tn(t.getUTCMilliseconds(), e, 3)
        }

        function yr(t, e) {
            return mr(t, e) + "000"
        }

        function vr(t, e) {
            return Tn(t.getUTCMonth() + 1, e, 2)
        }

        function wr(t, e) {
            return Tn(t.getUTCMinutes(), e, 2)
        }

        function _r(t, e) {
            return Tn(t.getUTCSeconds(), e, 2)
        }

        function xr(t) {
            var e = t.getUTCDay();
            return 0 === e ? 7 : e
        }

        function Mr(t, e) {
            return Tn(fn.count(gn(t), t), e, 2)
        }

        function kr(t, e) {
            var n = t.getUTCDay();
            return t = n >= 4 || 0 === n ? ln(t) : ln.ceil(t), Tn(ln.count(gn(t), t) + (4 === gn(t).getUTCDay()), e, 2)
        }

        function Ar(t) {
            return t.getUTCDay()
        }

        function Nr(t, e) {
            return Tn(cn.count(gn(t), t), e, 2)
        }

        function Tr(t, e) {
            return Tn(t.getUTCFullYear() % 100, e, 2)
        }

        function Sr(t, e) {
            return Tn(t.getUTCFullYear() % 1e4, e, 4)
        }

        function zr() {
            return "+0000"
        }

        function Cr() {
            return "%"
        }

        function Er(t) {
            return +t
        }

        function $r(t) {
            return Math.floor(+t / 1e3)
        }! function (t) {
            wn = function (t) {
                var e = t.dateTime,
                    n = t.date,
                    r = t.time,
                    a = t.periods,
                    i = t.days,
                    o = t.shortDays,
                    f = t.months,
                    c = t.shortMonths,
                    u = zn(a),
                    s = Cn(a),
                    l = zn(i),
                    d = Cn(i),
                    h = zn(o),
                    b = Cn(o),
                    p = zn(f),
                    g = Cn(f),
                    m = zn(c),
                    y = Cn(c),
                    v = {
                        a: function (t) {
                            return o[t.getDay()]
                        },
                        A: function (t) {
                            return i[t.getDay()]
                        },
                        b: function (t) {
                            return c[t.getMonth()]
                        },
                        B: function (t) {
                            return f[t.getMonth()]
                        },
                        c: null,
                        d: Jn,
                        e: Jn,
                        f: er,
                        H: Qn,
                        I: Gn,
                        j: Kn,
                        L: tr,
                        m: nr,
                        M: rr,
                        p: function (t) {
                            return a[+(t.getHours() >= 12)]
                        },
                        Q: Er,
                        s: $r,
                        S: ar,
                        u: ir,
                        U: or,
                        V: fr,
                        w: cr,
                        W: ur,
                        x: null,
                        X: null,
                        y: sr,
                        Y: lr,
                        Z: dr,
                        "%": Cr
                    },
                    w = {
                        a: function (t) {
                            return o[t.getUTCDay()]
                        },
                        A: function (t) {
                            return i[t.getUTCDay()]
                        },
                        b: function (t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function (t) {
                            return f[t.getUTCMonth()]
                        },
                        c: null,
                        d: hr,
                        e: hr,
                        f: yr,
                        H: br,
                        I: pr,
                        j: gr,
                        L: mr,
                        m: vr,
                        M: wr,
                        p: function (t) {
                            return a[+(t.getUTCHours() >= 12)]
                        },
                        Q: Er,
                        s: $r,
                        S: _r,
                        u: xr,
                        U: Mr,
                        V: kr,
                        w: Ar,
                        W: Nr,
                        x: null,
                        X: null,
                        y: Tr,
                        Y: Sr,
                        Z: zr,
                        "%": Cr
                    },
                    _ = {
                        a: function (t, e, n) {
                            var r = h.exec(e.slice(n));
                            return r ? (t.w = b[r[0].toLowerCase()], n + r[0].length) : -1
                        },
                        A: function (t, e, n) {
                            var r = l.exec(e.slice(n));
                            return r ? (t.w = d[r[0].toLowerCase()], n + r[0].length) : -1
                        },
                        b: function (t, e, n) {
                            var r = m.exec(e.slice(n));
                            return r ? (t.m = y[r[0].toLowerCase()], n + r[0].length) : -1
                        },
                        B: function (t, e, n) {
                            var r = p.exec(e.slice(n));
                            return r ? (t.m = g[r[0].toLowerCase()], n + r[0].length) : -1
                        },
                        c: function (t, n, r) {
                            return k(t, e, n, r)
                        },
                        d: In,
                        e: In,
                        f: Vn,
                        H: On,
                        I: On,
                        j: jn,
                        L: Ln,
                        m: Fn,
                        M: Rn,
                        p: function (t, e, n) {
                            var r = u.exec(e.slice(n));
                            return r ? (t.p = s[r[0].toLowerCase()], n + r[0].length) : -1
                        },
                        Q: Wn,
                        s: Zn,
                        S: Hn,
                        u: $n,
                        U: Dn,
                        V: Pn,
                        w: En,
                        W: Un,
                        x: function (t, e, r) {
                            return k(t, n, e, r)
                        },
                        X: function (t, e, n) {
                            return k(t, r, e, n)
                        },
                        y: qn,
                        Y: Yn,
                        Z: Xn,
                        "%": Bn
                    };

                function x(t, e) {
                    return function (n) {
                        var r, a, i, o = [],
                            f = -1,
                            c = 0,
                            u = t.length;
                        for (n instanceof Date || (n = new Date(+n)); ++f < u;) 37 === t.charCodeAt(f) && (o.push(t.slice(c, f)), null != (a = Mn[r = t.charAt(++f)]) ? r = t.charAt(++f) : a = "e" === r ? " " : "0", (i = e[r]) && (r = i(n, a)), o.push(r), c = f + 1);
                        return o.push(t.slice(c, f)), o.join("")
                    }
                }

                function M(t, e) {
                    return function (n) {
                        var r, a, i = vn(1900);
                        if (k(i, t, n += "", 0) != n.length) return null;
                        if ("Q" in i) return new Date(i.Q);
                        if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "V" in i) {
                            if (i.V < 1 || i.V > 53) return null;
                            "w" in i || (i.w = 1), "Z" in i ? (r = (a = (r = yn(vn(i.y))).getUTCDay()) > 4 || 0 === a ? cn.ceil(r) : cn(r), r = an.offset(r, 7 * (i.V - 1)), i.y = r.getUTCFullYear(), i.m = r.getUTCMonth(), i.d = r.getUTCDate() + (i.w + 6) % 7) : (r = (a = (r = e(vn(i.y))).getDay()) > 4 || 0 === a ? Ve.ceil(r) : Ve(r), r = Re.offset(r, 7 * (i.V - 1)), i.y = r.getFullYear(), i.m = r.getMonth(), i.d = r.getDate() + (i.w + 6) % 7)
                        } else("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), a = "Z" in i ? yn(vn(i.y)).getUTCDay() : e(vn(i.y)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7);
                        return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, yn(i)) : e(i)
                    }
                }

                function k(t, e, n, r) {
                    for (var a, i, o = 0, f = e.length, c = n.length; o < f;) {
                        if (r >= c) return -1;
                        if (37 === (a = e.charCodeAt(o++))) {
                            if (a = e.charAt(o++), !(i = _[a in Mn ? e.charAt(o++) : a]) || (r = i(t, n, r)) < 0) return -1
                        } else if (a != n.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return v.x = x(n, v), v.X = x(r, v), v.c = x(e, v), w.x = x(n, w), w.X = x(r, w), w.c = x(e, w), {
                    format: function (t) {
                        var e = x(t += "", v);
                        return e.toString = function () {
                            return t
                        }, e
                    },
                    parse: function (t) {
                        var e = M(t += "", mn);
                        return e.toString = function () {
                            return t
                        }, e
                    },
                    utcFormat: function (t) {
                        var e = x(t += "", w);
                        return e.toString = function () {
                            return t
                        }, e
                    },
                    utcParse: function (t) {
                        var e = M(t, yn);
                        return e.toString = function () {
                            return t
                        }, e
                    }
                }
            }(t), wn.format, wn.parse, _n = wn.utcFormat, xn = wn.utcParse
        }({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        Date.prototype.toISOString || _n("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || xn("%Y-%m-%dT%H:%M:%S.%LZ");

        function Dr(t) {
            return --t * t * t + 1
        }(function t(e) {
            function n(t) {
                return Math.pow(t, e)
            }
            return e = +e, n.exponent = t, n
        })(3),
        function t(e) {
            function n(t) {
                return 1 - Math.pow(1 - t, e)
            }
            return e = +e, n.exponent = t, n
        }(3),
        function t(e) {
            function n(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            }
            return e = +e, n.exponent = t, n
        }(3);
        var Pr = Math.PI;

        function Ur(t) {
            return (1 - Math.cos(Pr * t)) / 2
        }(function t(e) {
            function n(t) {
                return t * t * ((e + 1) * t - e)
            }
            return e = +e, n.overshoot = t, n
        })(1.70158),
        function t(e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }
            return e = +e, n.overshoot = t, n
        }(1.70158),
        function t(e) {
            function n(t) {
                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            }
            return e = +e, n.overshoot = t, n
        }(1.70158);
        var Yr, qr, Xr = 2 * Math.PI,
            Fr = (function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Xr);

                function a(t) {
                    return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n)
                }
                return a.amplitude = function (e) {
                    return t(e, n * Xr)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Xr);

                function a(t) {
                    return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n)
                }
                return a.amplitude = function (e) {
                    return t(e, n * Xr)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Xr);

                function a(t) {
                    return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
                }
                return a.amplitude = function (e) {
                    return t(e, n * Xr)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), 0),
            Ir = 0,
            jr = 0,
            Or = 1e3,
            Rr = 0,
            Hr = 0,
            Lr = 0,
            Vr = "object" == typeof performance && performance.now ? performance : Date,
            Br = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                setTimeout(t, 17)
            };

        function Wr() {
            return Hr || (Br(Zr), Hr = Vr.now() + Lr)
        }

        function Zr() {
            Hr = 0
        }

        function Jr() {
            this._call = this._time = this._next = null
        }

        function Qr(t, e, n) {
            var r = new Jr;
            return r.restart(t, e, n), r
        }

        function Gr() {
            Hr = (Rr = Vr.now()) + Lr, Fr = Ir = 0;
            try {
                ! function () {
                    Wr(), ++Fr;
                    for (var t, e = Yr; e;)(t = Hr - e._time) >= 0 && e._call.call(null, t), e = e._next;
                    --Fr
                }()
            } finally {
                Fr = 0,
                    function () {
                        var t, e, n = Yr,
                            r = 1 / 0;
                        for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Yr = e);
                        qr = t, ta(r)
                    }(), Hr = 0
            }
        }

        function Kr() {
            var t = Vr.now(),
                e = t - Rr;
            e > Or && (Lr -= e, Rr = t)
        }

        function ta(t) {
            Fr || (Ir && (Ir = clearTimeout(Ir)), t - Hr > 24 ? (t < 1 / 0 && (Ir = setTimeout(Gr, t - Vr.now() - Lr)), jr && (jr = clearInterval(jr))) : (jr || (Rr = Vr.now(), jr = setInterval(Kr, Or)), Fr = 1, Br(Gr)))
        }
        Jr.prototype = Qr.prototype = {
            constructor: Jr,
            restart: function (t, e, n) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                n = (null == n ? Wr() : +n) + (null == e ? 0 : +e), this._next || qr === this || (qr ? qr._next = this : Yr = this, qr = this), this._call = t, this._time = n, ta()
            },
            stop: function () {
                this._call && (this._call = null, this._time = 1 / 0, ta())
            }
        };
        var ea = function (t, e, n) {
            var r = new Jr;
            return e = null == e ? 0 : +e, r.restart(function (n) {
                r.stop(), t(n + e)
            }, e, n), r
        };

        function na(t, e, n, r) {
            if (isNaN(e) || isNaN(n)) return t;
            var a, i, o, f, c, u, s, l, d, h = t._root,
                b = {
                    data: r
                },
                p = t._x0,
                g = t._y0,
                m = t._x1,
                y = t._y1;
            if (!h) return t._root = b, t;
            for (; h.length;)
                if ((u = e >= (i = (p + m) / 2)) ? p = i : m = i, (s = n >= (o = (g + y) / 2)) ? g = o : y = o, a = h, !(h = h[l = s << 1 | u])) return a[l] = b, t;
            if (f = +t._x.call(null, h.data), c = +t._y.call(null, h.data), e === f && n === c) return b.next = h, a ? a[l] = b : t._root = b, t;
            do {
                a = a ? a[l] = new Array(4) : t._root = new Array(4), (u = e >= (i = (p + m) / 2)) ? p = i : m = i, (s = n >= (o = (g + y) / 2)) ? g = o : y = o
            } while ((l = s << 1 | u) == (d = (c >= o) << 1 | f >= i));
            return a[d] = h, a[l] = b, t
        }
        var ra = function (t, e, n, r, a) {
            this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = a
        };

        function aa(t) {
            return t[0]
        }

        function ia(t) {
            return t[1]
        }

        function oa(t, e, n) {
            var r = new fa(null == e ? aa : e, null == n ? ia : n, NaN, NaN, NaN, NaN);
            return null == t ? r : r.addAll(t)
        }

        function fa(t, e, n, r, a, i) {
            this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = a, this._y1 = i, this._root = void 0
        }

        function ca(t) {
            for (var e = {
                    data: t.data
                }, n = e; t = t.next;) n = n.next = {
                data: t.data
            };
            return e
        }
        var ua = oa.prototype = fa.prototype;
        ua.copy = function () {
            var t, e, n = new fa(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                r = this._root;
            if (!r) return n;
            if (!r.length) return n._root = ca(r), n;
            for (t = [{
                    source: r,
                    target: n._root = new Array(4)
                }]; r = t.pop();)
                for (var a = 0; a < 4; ++a)(e = r.source[a]) && (e.length ? t.push({
                    source: e,
                    target: r.target[a] = new Array(4)
                }) : r.target[a] = ca(e));
            return n
        }, ua.add = function (t) {
            var e = +this._x.call(null, t),
                n = +this._y.call(null, t);
            return na(this.cover(e, n), e, n, t)
        }, ua.addAll = function (t) {
            var e, n, r, a, i = t.length,
                o = new Array(i),
                f = new Array(i),
                c = 1 / 0,
                u = 1 / 0,
                s = -1 / 0,
                l = -1 / 0;
            for (n = 0; n < i; ++n) isNaN(r = +this._x.call(null, e = t[n])) || isNaN(a = +this._y.call(null, e)) || (o[n] = r, f[n] = a, r < c && (c = r), r > s && (s = r), a < u && (u = a), a > l && (l = a));
            for (s < c && (c = this._x0, s = this._x1), l < u && (u = this._y0, l = this._y1), this.cover(c, u).cover(s, l), n = 0; n < i; ++n) na(this, o[n], f[n], t[n]);
            return this
        }, ua.cover = function (t, e) {
            if (isNaN(t = +t) || isNaN(e = +e)) return this;
            var n = this._x0,
                r = this._y0,
                a = this._x1,
                i = this._y1;
            if (isNaN(n)) a = (n = Math.floor(t)) + 1, i = (r = Math.floor(e)) + 1;
            else {
                if (!(n > t || t > a || r > e || e > i)) return this;
                var o, f, c = a - n,
                    u = this._root;
                switch (f = (e < (r + i) / 2) << 1 | t < (n + a) / 2) {
                    case 0:
                        do {
                            (o = new Array(4))[f] = u, u = o
                        } while (i = r + (c *= 2), t > (a = n + c) || e > i);
                        break;
                    case 1:
                        do {
                            (o = new Array(4))[f] = u, u = o
                        } while (i = r + (c *= 2), (n = a - c) > t || e > i);
                        break;
                    case 2:
                        do {
                            (o = new Array(4))[f] = u, u = o
                        } while (r = i - (c *= 2), t > (a = n + c) || r > e);
                        break;
                    case 3:
                        do {
                            (o = new Array(4))[f] = u, u = o
                        } while (r = i - (c *= 2), (n = a - c) > t || r > e)
                }
                this._root && this._root.length && (this._root = u)
            }
            return this._x0 = n, this._y0 = r, this._x1 = a, this._y1 = i, this
        }, ua.data = function () {
            var t = [];
            return this.visit(function (e) {
                if (!e.length)
                    do {
                        t.push(e.data)
                    } while (e = e.next)
            }), t
        }, ua.extent = function (t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                [this._x0, this._y0],
                [this._x1, this._y1]
            ]
        }, ua.find = function (t, e, n) {
            var r, a, i, o, f, c, u, s = this._x0,
                l = this._y0,
                d = this._x1,
                h = this._y1,
                b = [],
                p = this._root;
            for (p && b.push(new ra(p, s, l, d, h)), null == n ? n = 1 / 0 : (s = t - n, l = e - n, d = t + n, h = e + n, n *= n); c = b.pop();)
                if (!(!(p = c.node) || (a = c.x0) > d || (i = c.y0) > h || (o = c.x1) < s || (f = c.y1) < l))
                    if (p.length) {
                        var g = (a + o) / 2,
                            m = (i + f) / 2;
                        b.push(new ra(p[3], g, m, o, f), new ra(p[2], a, m, g, f), new ra(p[1], g, i, o, m), new ra(p[0], a, i, g, m)), (u = (e >= m) << 1 | t >= g) && (c = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - u], b[b.length - 1 - u] = c)
                    } else {
                        var y = t - +this._x.call(null, p.data),
                            v = e - +this._y.call(null, p.data),
                            w = y * y + v * v;
                        if (w < n) {
                            var _ = Math.sqrt(n = w);
                            s = t - _, l = e - _, d = t + _, h = e + _, r = p.data
                        }
                    } return r
        }, ua.remove = function (t) {
            if (isNaN(i = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
            var e, n, r, a, i, o, f, c, u, s, l, d, h = this._root,
                b = this._x0,
                p = this._y0,
                g = this._x1,
                m = this._y1;
            if (!h) return this;
            if (h.length)
                for (;;) {
                    if ((u = i >= (f = (b + g) / 2)) ? b = f : g = f, (s = o >= (c = (p + m) / 2)) ? p = c : m = c, e = h, !(h = h[l = s << 1 | u])) return this;
                    if (!h.length) break;
                    (e[l + 1 & 3] || e[l + 2 & 3] || e[l + 3 & 3]) && (n = e, d = l)
                }
            for (; h.data !== t;)
                if (r = h, !(h = h.next)) return this;
            return (a = h.next) && delete h.next, r ? (a ? r.next = a : delete r.next, this) : e ? (a ? e[l] = a : delete e[l], (h = e[0] || e[1] || e[2] || e[3]) && h === (e[3] || e[2] || e[1] || e[0]) && !h.length && (n ? n[d] = h : this._root = h), this) : (this._root = a, this)
        }, ua.removeAll = function (t) {
            for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
            return this
        }, ua.root = function () {
            return this._root
        }, ua.size = function () {
            var t = 0;
            return this.visit(function (e) {
                if (!e.length)
                    do {
                        ++t
                    } while (e = e.next)
            }), t
        }, ua.visit = function (t) {
            var e, n, r, a, i, o, f = [],
                c = this._root;
            for (c && f.push(new ra(c, this._x0, this._y0, this._x1, this._y1)); e = f.pop();)
                if (!t(c = e.node, r = e.x0, a = e.y0, i = e.x1, o = e.y1) && c.length) {
                    var u = (r + i) / 2,
                        s = (a + o) / 2;
                    (n = c[3]) && f.push(new ra(n, u, s, i, o)), (n = c[2]) && f.push(new ra(n, r, s, u, o)), (n = c[1]) && f.push(new ra(n, u, a, i, s)), (n = c[0]) && f.push(new ra(n, r, a, u, s))
                } return this
        }, ua.visitAfter = function (t) {
            var e, n = [],
                r = [];
            for (this._root && n.push(new ra(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop();) {
                var a = e.node;
                if (a.length) {
                    var i, o = e.x0,
                        f = e.y0,
                        c = e.x1,
                        u = e.y1,
                        s = (o + c) / 2,
                        l = (f + u) / 2;
                    (i = a[0]) && n.push(new ra(i, o, f, s, l)), (i = a[1]) && n.push(new ra(i, s, f, c, l)), (i = a[2]) && n.push(new ra(i, o, l, s, u)), (i = a[3]) && n.push(new ra(i, s, l, c, u))
                }
                r.push(e)
            }
            for (; e = r.pop();) t(e.node, e.x0, e.y0, e.x1, e.y1);
            return this
        }, ua.x = function (t) {
            return arguments.length ? (this._x = t, this) : this._x
        }, ua.y = function (t) {
            return arguments.length ? (this._y = t, this) : this._y
        };
        var sa = {
            value: function () {}
        };

        function la() {
            for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
                if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new da(r)
        }

        function da(t) {
            this._ = t
        }

        function ha(t, e) {
            for (var n, r = 0, a = t.length; r < a; ++r)
                if ((n = t[r]).name === e) return n.value
        }

        function ba(t, e, n) {
            for (var r = 0, a = t.length; r < a; ++r)
                if (t[r].name === e) {
                    t[r] = sa, t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                } return null != n && t.push({
                name: e,
                value: n
            }), t
        }
        da.prototype = la.prototype = {
            constructor: da,
            on: function (t, e) {
                var n, r = this._,
                    a = function (t, e) {
                        return t.trim().split(/^|\s+/).map(function (t) {
                            var n = "",
                                r = t.indexOf(".");
                            if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                            return {
                                type: t,
                                name: n
                            }
                        })
                    }(t + "", r),
                    i = -1,
                    o = a.length;
                if (!(arguments.length < 2)) {
                    if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                    for (; ++i < o;)
                        if (n = (t = a[i]).type) r[n] = ba(r[n], t.name, e);
                        else if (null == e)
                        for (n in r) r[n] = ba(r[n], t.name, null);
                    return this
                }
                for (; ++i < o;)
                    if ((n = (t = a[i]).type) && (n = ha(r[n], t.name))) return n
            },
            copy: function () {
                var t = {},
                    e = this._;
                for (var n in e) t[n] = e[n].slice();
                return new da(t)
            },
            call: function (t, e) {
                if ((n = arguments.length - 2) > 0)
                    for (var n, r, a = new Array(n), i = 0; i < n; ++i) a[i] = arguments[i + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (i = 0, n = (r = this._[t]).length; i < n; ++i) r[i].value.apply(e, a)
            },
            apply: function (t, e, n) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], a = 0, i = r.length; a < i; ++a) r[a].value.apply(e, n)
            }
        };
        var pa = la,
            ga = "http://www.w3.org/1999/xhtml",
            ma = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: ga,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            ya = function (t) {
                var e = t += "",
                    n = e.indexOf(":");
                return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), ma.hasOwnProperty(e) ? {
                    space: ma[e],
                    local: t
                } : t
            };
        var va = function (t) {
            var e = ya(t);
            return (e.local ? function (t) {
                return function () {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    var e = this.ownerDocument,
                        n = this.namespaceURI;
                    return n === ga && e.documentElement.namespaceURI === ga ? e.createElement(t) : e.createElementNS(n, t)
                }
            })(e)
        };

        function wa() {}
        var _a = function (t) {
            return null == t ? wa : function () {
                return this.querySelector(t)
            }
        };

        function xa() {
            return []
        }
        var Ma = function (t) {
                return null == t ? xa : function () {
                    return this.querySelectorAll(t)
                }
            },
            ka = function (t) {
                return function () {
                    return this.matches(t)
                }
            };
        if ("undefined" != typeof document) {
            var Aa = document.documentElement;
            if (!Aa.matches) {
                var Na = Aa.webkitMatchesSelector || Aa.msMatchesSelector || Aa.mozMatchesSelector || Aa.oMatchesSelector;
                ka = function (t) {
                    return function () {
                        return Na.call(this, t)
                    }
                }
            }
        }
        var Ta = ka,
            Sa = function (t) {
                return new Array(t.length)
            };

        function za(t, e) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
        }
        za.prototype = {
            constructor: za,
            appendChild: function (t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function (t, e) {
                return this._parent.insertBefore(t, e)
            },
            querySelector: function (t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function (t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var Ca = "$";

        function Ea(t, e, n, r, a, i) {
            for (var o, f = 0, c = e.length, u = i.length; f < u; ++f)(o = e[f]) ? (o.__data__ = i[f], r[f] = o) : n[f] = new za(t, i[f]);
            for (; f < c; ++f)(o = e[f]) && (a[f] = o)
        }

        function $a(t, e, n, r, a, i, o) {
            var f, c, u, s = {},
                l = e.length,
                d = i.length,
                h = new Array(l);
            for (f = 0; f < l; ++f)(c = e[f]) && (h[f] = u = Ca + o.call(c, c.__data__, f, e), u in s ? a[f] = c : s[u] = c);
            for (f = 0; f < d; ++f)(c = s[u = Ca + o.call(t, i[f], f, i)]) ? (r[f] = c, c.__data__ = i[f], s[u] = null) : n[f] = new za(t, i[f]);
            for (f = 0; f < l; ++f)(c = e[f]) && s[h[f]] === c && (a[f] = c)
        }

        function Da(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        var Pa = function (t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function Ua(t, e) {
            return t.style.getPropertyValue(e) || Pa(t).getComputedStyle(t, null).getPropertyValue(e)
        }

        function Ya(t) {
            return t.trim().split(/^|\s+/)
        }

        function qa(t) {
            return t.classList || new Xa(t)
        }

        function Xa(t) {
            this._node = t, this._names = Ya(t.getAttribute("class") || "")
        }

        function Fa(t, e) {
            for (var n = qa(t), r = -1, a = e.length; ++r < a;) n.add(e[r])
        }

        function Ia(t, e) {
            for (var n = qa(t), r = -1, a = e.length; ++r < a;) n.remove(e[r])
        }
        Xa.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function (t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function ja() {
            this.textContent = ""
        }

        function Oa() {
            this.innerHTML = ""
        }

        function Ra() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function Ha() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function La() {
            return null
        }

        function Va() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function Ba() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function Wa() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }
        var Za = {},
            Ja = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (Za = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function Qa(t, e, n) {
            return t = Ga(t, e, n),
                function (e) {
                    var n = e.relatedTarget;
                    n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
                }
        }

        function Ga(t, e, n) {
            return function (r) {
                var a = Ja;
                Ja = r;
                try {
                    t.call(this, this.__data__, e, n)
                } finally {
                    Ja = a
                }
            }
        }

        function Ka(t) {
            return function () {
                var e = this.__on;
                if (e) {
                    for (var n, r = 0, a = -1, i = e.length; r < i; ++r) n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++a] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++a ? e.length = a : delete this.__on
                }
            }
        }

        function ti(t, e, n) {
            var r = Za.hasOwnProperty(t.type) ? Qa : Ga;
            return function (a, i, o) {
                var f, c = this.__on,
                    u = r(e, i, o);
                if (c)
                    for (var s = 0, l = c.length; s < l; ++s)
                        if ((f = c[s]).type === t.type && f.name === t.name) return this.removeEventListener(f.type, f.listener, f.capture), this.addEventListener(f.type, f.listener = u, f.capture = n), void(f.value = e);
                this.addEventListener(t.type, u, n), f = {
                    type: t.type,
                    name: t.name,
                    value: e,
                    listener: u,
                    capture: n
                }, c ? c.push(f) : this.__on = [f]
            }
        }

        function ei(t, e, n, r) {
            var a = Ja;
            t.sourceEvent = Ja, Ja = t;
            try {
                return e.apply(n, r)
            } finally {
                Ja = a
            }
        }

        function ni(t, e, n) {
            var r = Pa(t),
                a = r.CustomEvent;
            "function" == typeof a ? a = new a(e, n) : (a = r.document.createEvent("Event"), n ? (a.initEvent(e, n.bubbles, n.cancelable), a.detail = n.detail) : a.initEvent(e, !1, !1)), t.dispatchEvent(a)
        }
        var ri = [null];

        function ai(t, e) {
            this._groups = t, this._parents = e
        }

        function ii() {
            return new ai([
                [document.documentElement]
            ], ri)
        }
        ai.prototype = ii.prototype = {
            constructor: ai,
            select: function (t) {
                "function" != typeof t && (t = _a(t));
                for (var e = this._groups, n = e.length, r = new Array(n), a = 0; a < n; ++a)
                    for (var i, o, f = e[a], c = f.length, u = r[a] = new Array(c), s = 0; s < c; ++s)(i = f[s]) && (o = t.call(i, i.__data__, s, f)) && ("__data__" in i && (o.__data__ = i.__data__), u[s] = o);
                return new ai(r, this._parents)
            },
            selectAll: function (t) {
                "function" != typeof t && (t = Ma(t));
                for (var e = this._groups, n = e.length, r = [], a = [], i = 0; i < n; ++i)
                    for (var o, f = e[i], c = f.length, u = 0; u < c; ++u)(o = f[u]) && (r.push(t.call(o, o.__data__, u, f)), a.push(o));
                return new ai(r, a)
            },
            filter: function (t) {
                "function" != typeof t && (t = Ta(t));
                for (var e = this._groups, n = e.length, r = new Array(n), a = 0; a < n; ++a)
                    for (var i, o = e[a], f = o.length, c = r[a] = [], u = 0; u < f; ++u)(i = o[u]) && t.call(i, i.__data__, u, o) && c.push(i);
                return new ai(r, this._parents)
            },
            data: function (t, e) {
                if (!t) return h = new Array(this.size()), u = -1, this.each(function (t) {
                    h[++u] = t
                }), h;
                var n = e ? $a : Ea,
                    r = this._parents,
                    a = this._groups;
                "function" != typeof t && (t = function (t) {
                    return function () {
                        return t
                    }
                }(t));
                for (var i = a.length, o = new Array(i), f = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
                    var s = r[u],
                        l = a[u],
                        d = l.length,
                        h = t.call(s, s && s.__data__, u, r),
                        b = h.length,
                        p = f[u] = new Array(b),
                        g = o[u] = new Array(b);
                    n(s, l, p, g, c[u] = new Array(d), h, e);
                    for (var m, y, v = 0, w = 0; v < b; ++v)
                        if (m = p[v]) {
                            for (v >= w && (w = v + 1); !(y = g[w]) && ++w < b;);
                            m._next = y || null
                        }
                }
                return (o = new ai(o, r))._enter = f, o._exit = c, o
            },
            enter: function () {
                return new ai(this._enter || this._groups.map(Sa), this._parents)
            },
            exit: function () {
                return new ai(this._exit || this._groups.map(Sa), this._parents)
            },
            merge: function (t) {
                for (var e = this._groups, n = t._groups, r = e.length, a = n.length, i = Math.min(r, a), o = new Array(r), f = 0; f < i; ++f)
                    for (var c, u = e[f], s = n[f], l = u.length, d = o[f] = new Array(l), h = 0; h < l; ++h)(c = u[h] || s[h]) && (d[h] = c);
                for (; f < r; ++f) o[f] = e[f];
                return new ai(o, this._parents)
            },
            order: function () {
                for (var t = this._groups, e = -1, n = t.length; ++e < n;)
                    for (var r, a = t[e], i = a.length - 1, o = a[i]; --i >= 0;)(r = a[i]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
                return this
            },
            sort: function (t) {
                function e(e, n) {
                    return e && n ? t(e.__data__, n.__data__) : !e - !n
                }
                t || (t = Da);
                for (var n = this._groups, r = n.length, a = new Array(r), i = 0; i < r; ++i) {
                    for (var o, f = n[i], c = f.length, u = a[i] = new Array(c), s = 0; s < c; ++s)(o = f[s]) && (u[s] = o);
                    u.sort(e)
                }
                return new ai(a, this._parents).order()
            },
            call: function () {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            nodes: function () {
                var t = new Array(this.size()),
                    e = -1;
                return this.each(function () {
                    t[++e] = this
                }), t
            },
            node: function () {
                for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                    for (var r = t[e], a = 0, i = r.length; a < i; ++a) {
                        var o = r[a];
                        if (o) return o
                    }
                return null
            },
            size: function () {
                var t = 0;
                return this.each(function () {
                    ++t
                }), t
            },
            empty: function () {
                return !this.node()
            },
            each: function (t) {
                for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
                    for (var a, i = e[n], o = 0, f = i.length; o < f; ++o)(a = i[o]) && t.call(a, a.__data__, o, i);
                return this
            },
            attr: function (t, e) {
                var n = ya(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
                }
                return this.each((null == e ? n.local ? function (t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                } : "function" == typeof e ? n.local ? function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                    }
                } : function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                    }
                } : n.local ? function (t, e) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, e)
                    }
                } : function (t, e) {
                    return function () {
                        this.setAttribute(t, e)
                    }
                })(n, e))
            },
            style: function (t, e, n) {
                return arguments.length > 1 ? this.each((null == e ? function (t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                } : "function" == typeof e ? function (t, e, n) {
                    return function () {
                        var r = e.apply(this, arguments);
                        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
                    }
                } : function (t, e, n) {
                    return function () {
                        this.style.setProperty(t, e, n)
                    }
                })(t, e, null == n ? "" : n)) : Ua(this.node(), t)
            },
            property: function (t, e) {
                return arguments.length > 1 ? this.each((null == e ? function (t) {
                    return function () {
                        delete this[t]
                    }
                } : "function" == typeof e ? function (t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? delete this[t] : this[t] = n
                    }
                } : function (t, e) {
                    return function () {
                        this[t] = e
                    }
                })(t, e)) : this.node()[t]
            },
            classed: function (t, e) {
                var n = Ya(t + "");
                if (arguments.length < 2) {
                    for (var r = qa(this.node()), a = -1, i = n.length; ++a < i;)
                        if (!r.contains(n[a])) return !1;
                    return !0
                }
                return this.each(("function" == typeof e ? function (t, e) {
                    return function () {
                        (e.apply(this, arguments) ? Fa : Ia)(this, t)
                    }
                } : e ? function (t) {
                    return function () {
                        Fa(this, t)
                    }
                } : function (t) {
                    return function () {
                        Ia(this, t)
                    }
                })(n, e))
            },
            text: function (t) {
                return arguments.length ? this.each(null == t ? ja : ("function" == typeof t ? function (t) {
                    return function () {
                        var e = t.apply(this, arguments);
                        this.textContent = null == e ? "" : e
                    }
                } : function (t) {
                    return function () {
                        this.textContent = t
                    }
                })(t)) : this.node().textContent
            },
            html: function (t) {
                return arguments.length ? this.each(null == t ? Oa : ("function" == typeof t ? function (t) {
                    return function () {
                        var e = t.apply(this, arguments);
                        this.innerHTML = null == e ? "" : e
                    }
                } : function (t) {
                    return function () {
                        this.innerHTML = t
                    }
                })(t)) : this.node().innerHTML
            },
            raise: function () {
                return this.each(Ra)
            },
            lower: function () {
                return this.each(Ha)
            },
            append: function (t) {
                var e = "function" == typeof t ? t : va(t);
                return this.select(function () {
                    return this.appendChild(e.apply(this, arguments))
                })
            },
            insert: function (t, e) {
                var n = "function" == typeof t ? t : va(t),
                    r = null == e ? La : "function" == typeof e ? e : _a(e);
                return this.select(function () {
                    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
                })
            },
            remove: function () {
                return this.each(Va)
            },
            clone: function (t) {
                return this.select(t ? Wa : Ba)
            },
            datum: function (t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function (t, e, n) {
                var r, a, i = function (t) {
                        return t.trim().split(/^|\s+/).map(function (t) {
                            var e = "",
                                n = t.indexOf(".");
                            return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {
                                type: t,
                                name: e
                            }
                        })
                    }(t + ""),
                    o = i.length;
                if (!(arguments.length < 2)) {
                    for (f = e ? ti : Ka, null == n && (n = !1), r = 0; r < o; ++r) this.each(f(i[r], e, n));
                    return this
                }
                var f = this.node().__on;
                if (f)
                    for (var c, u = 0, s = f.length; u < s; ++u)
                        for (r = 0, c = f[u]; r < o; ++r)
                            if ((a = i[r]).type === c.type && a.name === c.name) return c.value
            },
            dispatch: function (t, e) {
                return this.each(("function" == typeof e ? function (t, e) {
                    return function () {
                        return ni(this, t, e.apply(this, arguments))
                    }
                } : function (t, e) {
                    return function () {
                        return ni(this, t, e)
                    }
                })(t, e))
            }
        };
        var oi = ii,
            fi = function (t) {
                return "string" == typeof t ? new ai([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new ai([
                    [t]
                ], ri)
            },
            ci = 0;

        function ui() {
            this._ = "@" + (++ci).toString(36)
        }
        ui.prototype = function () {
            return new ui
        }.prototype = {
            constructor: ui,
            get: function (t) {
                for (var e = this._; !(e in t);)
                    if (!(t = t.parentNode)) return;
                return t[e]
            },
            set: function (t, e) {
                return t[this._] = e
            },
            remove: function (t) {
                return this._ in t && delete t[this._]
            },
            toString: function () {
                return this._
            }
        };
        var si = function () {
                for (var t, e = Ja; t = e.sourceEvent;) e = t;
                return e
            },
            li = function (t, e) {
                var n = t.ownerSVGElement || t;
                if (n.createSVGPoint) {
                    var r = n.createSVGPoint();
                    return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var a = t.getBoundingClientRect();
                return [e.clientX - a.left - t.clientLeft, e.clientY - a.top - t.clientTop]
            },
            di = function (t) {
                var e = si();
                return e.changedTouches && (e = e.changedTouches[0]), li(t, e)
            },
            hi = function (t) {
                return "string" == typeof t ? new ai([document.querySelectorAll(t)], [document.documentElement]) : new ai([null == t ? [] : t], ri)
            },
            bi = function (t, e, n) {
                arguments.length < 3 && (n = e, e = si().changedTouches);
                for (var r, a = 0, i = e ? e.length : 0; a < i; ++a)
                    if ((r = e[a]).identifier === n) return li(t, r);
                return null
            };
        var pi = function () {
                Ja.preventDefault(), Ja.stopImmediatePropagation()
            },
            gi = function (t) {
                var e = t.document.documentElement,
                    n = fi(t).on("dragstart.drag", pi, !0);
                "onselectstart" in e ? n.on("selectstart.drag", pi, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none")
            };

        function mi(t, e) {
            var n = t.document.documentElement,
                r = fi(t).on("dragstart.drag", null);
            e && (r.on("click.drag", pi, !0), setTimeout(function () {
                r.on("click.drag", null)
            }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
        }

        function yi(t, e, n, r, a, i, o, f, c, u) {
            this.target = t, this.type = e, this.subject = n, this.identifier = r, this.active = a, this.x = i, this.y = o, this.dx = f, this.dy = c, this._ = u
        }
        yi.prototype.on = function () {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
        var vi = function (t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t
        };

        function wi(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e) n[r] = e[r];
            return n
        }

        function _i() {}
        var xi = "\\s*([+-]?\\d+)\\s*",
            Mi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            ki = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            Ai = /^#([0-9a-f]{3})$/,
            Ni = /^#([0-9a-f]{6})$/,
            Ti = new RegExp("^rgb\\(" + [xi, xi, xi] + "\\)$"),
            Si = new RegExp("^rgb\\(" + [ki, ki, ki] + "\\)$"),
            zi = new RegExp("^rgba\\(" + [xi, xi, xi, Mi] + "\\)$"),
            Ci = new RegExp("^rgba\\(" + [ki, ki, ki, Mi] + "\\)$"),
            Ei = new RegExp("^hsl\\(" + [Mi, ki, ki] + "\\)$"),
            $i = new RegExp("^hsla\\(" + [Mi, ki, ki, Mi] + "\\)$"),
            Di = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function Pi(t) {
            var e;
            return t = (t + "").trim().toLowerCase(), (e = Ai.exec(t)) ? new Fi((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = Ni.exec(t)) ? Ui(parseInt(e[1], 16)) : (e = Ti.exec(t)) ? new Fi(e[1], e[2], e[3], 1) : (e = Si.exec(t)) ? new Fi(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = zi.exec(t)) ? Yi(e[1], e[2], e[3], e[4]) : (e = Ci.exec(t)) ? Yi(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Ei.exec(t)) ? ji(e[1], e[2] / 100, e[3] / 100, 1) : (e = $i.exec(t)) ? ji(e[1], e[2] / 100, e[3] / 100, e[4]) : Di.hasOwnProperty(t) ? Ui(Di[t]) : "transparent" === t ? new Fi(NaN, NaN, NaN, 0) : null
        }

        function Ui(t) {
            return new Fi(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function Yi(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new Fi(t, e, n, r)
        }

        function qi(t) {
            return t instanceof _i || (t = Pi(t)), t ? new Fi((t = t.rgb()).r, t.g, t.b, t.opacity) : new Fi
        }

        function Xi(t, e, n, r) {
            return 1 === arguments.length ? qi(t) : new Fi(t, e, n, null == r ? 1 : r)
        }

        function Fi(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
        }

        function Ii(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function ji(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ri(t, e, n, r)
        }

        function Oi(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof Ri) return new Ri(t.h, t.s, t.l, t.opacity);
                if (t instanceof _i || (t = Pi(t)), !t) return new Ri;
                if (t instanceof Ri) return t;
                var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    a = Math.min(e, n, r),
                    i = Math.max(e, n, r),
                    o = NaN,
                    f = i - a,
                    c = (i + a) / 2;
                return f ? (o = e === i ? (n - r) / f + 6 * (n < r) : n === i ? (r - e) / f + 2 : (e - n) / f + 4, f /= c < .5 ? i + a : 2 - i - a, o *= 60) : f = c > 0 && c < 1 ? 0 : o, new Ri(o, f, c, t.opacity)
            }(t) : new Ri(t, e, n, null == r ? 1 : r)
        }

        function Ri(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function Hi(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }
        vi(_i, Pi, {
            displayable: function () {
                return this.rgb().displayable()
            },
            hex: function () {
                return this.rgb().hex()
            },
            toString: function () {
                return this.rgb() + ""
            }
        }), vi(Fi, Xi, wi(_i, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Fi(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Fi(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function () {
                return this
            },
            displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function () {
                return "#" + Ii(this.r) + Ii(this.g) + Ii(this.b)
            },
            toString: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), vi(Ri, Oi, wi(_i, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ri(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Ri(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0),
                    e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e,
                    a = 2 * n - r;
                return new Fi(Hi(t >= 240 ? t - 240 : t + 120, a, r), Hi(t, a, r), Hi(t < 120 ? t + 240 : t - 120, a, r), this.opacity)
            },
            displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var Li = Math.PI / 180,
            Vi = 180 / Math.PI,
            Bi = .96422,
            Wi = 1,
            Zi = .82521,
            Ji = 4 / 29,
            Qi = 6 / 29,
            Gi = 3 * Qi * Qi,
            Ki = Qi * Qi * Qi;

        function to(t) {
            if (t instanceof no) return new no(t.l, t.a, t.b, t.opacity);
            if (t instanceof uo) {
                if (isNaN(t.h)) return new no(t.l, 0, 0, t.opacity);
                var e = t.h * Li;
                return new no(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            t instanceof Fi || (t = qi(t));
            var n, r, a = oo(t.r),
                i = oo(t.g),
                o = oo(t.b),
                f = ro((.2225045 * a + .7168786 * i + .0606169 * o) / Wi);
            return a === i && i === o ? n = r = f : (n = ro((.4360747 * a + .3850649 * i + .1430804 * o) / Bi), r = ro((.0139322 * a + .0971045 * i + .7141733 * o) / Zi)), new no(116 * f - 16, 500 * (n - f), 200 * (f - r), t.opacity)
        }

        function eo(t, e, n, r) {
            return 1 === arguments.length ? to(t) : new no(t, e, n, null == r ? 1 : r)
        }

        function no(t, e, n, r) {
            this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
        }

        function ro(t) {
            return t > Ki ? Math.pow(t, 1 / 3) : t / Gi + Ji
        }

        function ao(t) {
            return t > Qi ? t * t * t : Gi * (t - Ji)
        }

        function io(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function oo(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function fo(t) {
            if (t instanceof uo) return new uo(t.h, t.c, t.l, t.opacity);
            if (t instanceof no || (t = to(t)), 0 === t.a && 0 === t.b) return new uo(NaN, 0, t.l, t.opacity);
            var e = Math.atan2(t.b, t.a) * Vi;
            return new uo(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function co(t, e, n, r) {
            return 1 === arguments.length ? fo(t) : new uo(t, e, n, null == r ? 1 : r)
        }

        function uo(t, e, n, r) {
            this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
        }
        vi(no, eo, wi(_i, {
            brighter: function (t) {
                return new no(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function (t) {
                return new no(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function () {
                var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200;
                return new Fi(io(3.1338561 * (e = Bi * ao(e)) - 1.6168667 * (t = Wi * ao(t)) - .4906146 * (n = Zi * ao(n))), io(-.9787684 * e + 1.9161415 * t + .033454 * n), io(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
            }
        })), vi(uo, co, wi(_i, {
            brighter: function (t) {
                return new uo(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function (t) {
                return new uo(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function () {
                return to(this).rgb()
            }
        }));
        var so = -.29227,
            lo = -.90649,
            ho = 1.97294,
            bo = ho * lo,
            po = 1.78277 * ho,
            go = 1.78277 * so - -.14861 * lo;

        function mo(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
                if (t instanceof yo) return new yo(t.h, t.s, t.l, t.opacity);
                t instanceof Fi || (t = qi(t));
                var e = t.r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    a = (go * r + bo * e - po * n) / (go + bo - po),
                    i = r - a,
                    o = (ho * (n - a) - so * i) / lo,
                    f = Math.sqrt(o * o + i * i) / (ho * a * (1 - a)),
                    c = f ? Math.atan2(o, i) * Vi - 120 : NaN;
                return new yo(c < 0 ? c + 360 : c, f, a, t.opacity)
            }(t) : new yo(t, e, n, null == r ? 1 : r)
        }

        function yo(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function vo(t, e, n, r, a) {
            var i = t * t,
                o = i * t;
            return ((1 - 3 * t + 3 * i - o) * e + (4 - 6 * i + 3 * o) * n + (1 + 3 * t + 3 * i - 3 * o) * r + o * a) / 6
        }
        vi(yo, mo, wi(_i, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new yo(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new yo(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * Li,
                    e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                    r = Math.cos(t),
                    a = Math.sin(t);
                return new Fi(255 * (e + n * (-.14861 * r + 1.78277 * a)), 255 * (e + n * (so * r + lo * a)), 255 * (e + n * (ho * r)), this.opacity)
            }
        }));
        var wo = function (t) {
            return function () {
                return t
            }
        };

        function _o(t, e) {
            return function (n) {
                return t + n * e
            }
        }

        function xo(t, e) {
            var n = e - t;
            return n ? _o(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : wo(isNaN(t) ? e : t)
        }

        function Mo(t) {
            return 1 == (t = +t) ? ko : function (e, n) {
                return n - e ? function (t, e, n) {
                    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                        function (r) {
                            return Math.pow(t + r * e, n)
                        }
                }(e, n, t) : wo(isNaN(e) ? n : e)
            }
        }

        function ko(t, e) {
            var n = e - t;
            return n ? _o(t, n) : wo(isNaN(t) ? e : t)
        }
        var Ao = function t(e) {
            var n = Mo(e);

            function r(t, e) {
                var r = n((t = Xi(t)).r, (e = Xi(e)).r),
                    a = n(t.g, e.g),
                    i = n(t.b, e.b),
                    o = ko(t.opacity, e.opacity);
                return function (e) {
                    return t.r = r(e), t.g = a(e), t.b = i(e), t.opacity = o(e), t + ""
                }
            }
            return r.gamma = t, r
        }(1);

        function No(t) {
            return function (e) {
                var n, r, a = e.length,
                    i = new Array(a),
                    o = new Array(a),
                    f = new Array(a);
                for (n = 0; n < a; ++n) r = Xi(e[n]), i[n] = r.r || 0, o[n] = r.g || 0, f[n] = r.b || 0;
                return i = t(i), o = t(o), f = t(f), r.opacity = 1,
                    function (t) {
                        return r.r = i(t), r.g = o(t), r.b = f(t), r + ""
                    }
            }
        }
        var To = No(function (t) {
                var e = t.length - 1;
                return function (n) {
                    var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                        a = t[r],
                        i = t[r + 1],
                        o = r > 0 ? t[r - 1] : 2 * a - i,
                        f = r < e - 1 ? t[r + 2] : 2 * i - a;
                    return vo((n - r / e) * e, o, a, i, f)
                }
            }),
            So = (No(function (t) {
                var e = t.length;
                return function (n) {
                    var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                        a = t[(r + e - 1) % e],
                        i = t[r % e],
                        o = t[(r + 1) % e],
                        f = t[(r + 2) % e];
                    return vo((n - r / e) * e, a, i, o, f)
                }
            }), function (t, e) {
                return e -= t = +t,
                    function (n) {
                        return t + e * n
                    }
            }),
            zo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Co = new RegExp(zo.source, "g");
        var Eo, $o, Do, Po, Uo = function (t, e) {
                var n, r, a, i = zo.lastIndex = Co.lastIndex = 0,
                    o = -1,
                    f = [],
                    c = [];
                for (t += "", e += "";
                    (n = zo.exec(t)) && (r = Co.exec(e));)(a = r.index) > i && (a = e.slice(i, a), f[o] ? f[o] += a : f[++o] = a), (n = n[0]) === (r = r[0]) ? f[o] ? f[o] += r : f[++o] = r : (f[++o] = null, c.push({
                    i: o,
                    x: So(n, r)
                })), i = Co.lastIndex;
                return i < e.length && (a = e.slice(i), f[o] ? f[o] += a : f[++o] = a), f.length < 2 ? c[0] ? function (t) {
                    return function (e) {
                        return t(e) + ""
                    }
                }(c[0].x) : function (t) {
                    return function () {
                        return t
                    }
                }(e) : (e = c.length, function (t) {
                    for (var n, r = 0; r < e; ++r) f[(n = c[r]).i] = n.x(t);
                    return f.join("")
                })
            },
            Yo = 180 / Math.PI,
            qo = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            Xo = function (t, e, n, r, a, i) {
                var o, f, c;
                return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (f = Math.sqrt(n * n + r * r)) && (n /= f, r /= f, c /= f), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
                    translateX: a,
                    translateY: i,
                    rotate: Math.atan2(e, t) * Yo,
                    skewX: Math.atan(c) * Yo,
                    scaleX: o,
                    scaleY: f
                }
            };

        function Fo(t, e, n, r) {
            function a(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function (i, o) {
                var f = [],
                    c = [];
                return i = t(i), o = t(o),
                    function (t, r, a, i, o, f) {
                        if (t !== a || r !== i) {
                            var c = o.push("translate(", null, e, null, n);
                            f.push({
                                i: c - 4,
                                x: So(t, a)
                            }, {
                                i: c - 2,
                                x: So(r, i)
                            })
                        } else(a || i) && o.push("translate(" + a + e + i + n)
                    }(i.translateX, i.translateY, o.translateX, o.translateY, f, c),
                    function (t, e, n, i) {
                        t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), i.push({
                            i: n.push(a(n) + "rotate(", null, r) - 2,
                            x: So(t, e)
                        })) : e && n.push(a(n) + "rotate(" + e + r)
                    }(i.rotate, o.rotate, f, c),
                    function (t, e, n, i) {
                        t !== e ? i.push({
                            i: n.push(a(n) + "skewX(", null, r) - 2,
                            x: So(t, e)
                        }) : e && n.push(a(n) + "skewX(" + e + r)
                    }(i.skewX, o.skewX, f, c),
                    function (t, e, n, r, i, o) {
                        if (t !== n || e !== r) {
                            var f = i.push(a(i) + "scale(", null, ",", null, ")");
                            o.push({
                                i: f - 4,
                                x: So(t, n)
                            }, {
                                i: f - 2,
                                x: So(e, r)
                            })
                        } else 1 === n && 1 === r || i.push(a(i) + "scale(" + n + "," + r + ")")
                    }(i.scaleX, i.scaleY, o.scaleX, o.scaleY, f, c), i = o = null,
                    function (t) {
                        for (var e, n = -1, r = c.length; ++n < r;) f[(e = c[n]).i] = e.x(t);
                        return f.join("")
                    }
            }
        }
        var Io = Fo(function (t) {
                return "none" === t ? qo : (Eo || (Eo = document.createElement("DIV"), $o = document.documentElement, Do = document.defaultView), Eo.style.transform = t, t = Do.getComputedStyle($o.appendChild(Eo), null).getPropertyValue("transform"), $o.removeChild(Eo), t = t.slice(7, -1).split(","), Xo(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }, "px, ", "px)", "deg)"),
            jo = Fo(function (t) {
                return null == t ? qo : (Po || (Po = document.createElementNS("http://www.w3.org/2000/svg", "g")), Po.setAttribute("transform", t), (t = Po.transform.baseVal.consolidate()) ? (t = t.matrix, Xo(t.a, t.b, t.c, t.d, t.e, t.f)) : qo)
            }, ", ", ")", ")"),
            Oo = Math.SQRT2;

        function Ro(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var Ho = function (t, e) {
            var n, r, a = t[0],
                i = t[1],
                o = t[2],
                f = e[0],
                c = e[1],
                u = e[2],
                s = f - a,
                l = c - i,
                d = s * s + l * l;
            if (d < 1e-12) r = Math.log(u / o) / Oo, n = function (t) {
                return [a + t * s, i + t * l, o * Math.exp(Oo * t * r)]
            };
            else {
                var h = Math.sqrt(d),
                    b = (u * u - o * o + 4 * d) / (2 * o * 2 * h),
                    p = (u * u - o * o - 4 * d) / (2 * u * 2 * h),
                    g = Math.log(Math.sqrt(b * b + 1) - b),
                    m = Math.log(Math.sqrt(p * p + 1) - p);
                r = (m - g) / Oo, n = function (t) {
                    var e = t * r,
                        n = Ro(g),
                        f = o / (2 * h) * (n * function (t) {
                            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                        }(Oo * e + g) - function (t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2
                        }(g));
                    return [a + f * s, i + f * l, o * n / Ro(Oo * e + g)]
                }
            }
            return n.duration = 1e3 * r, n
        };

        function Lo(t) {
            return function (e, n) {
                var r = t((e = Oi(e)).h, (n = Oi(n)).h),
                    a = ko(e.s, n.s),
                    i = ko(e.l, n.l),
                    o = ko(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.s = a(t), e.l = i(t), e.opacity = o(t), e + ""
                }
            }
        }
        Lo(xo), Lo(ko);

        function Vo(t) {
            return function (e, n) {
                var r = t((e = co(e)).h, (n = co(n)).h),
                    a = ko(e.c, n.c),
                    i = ko(e.l, n.l),
                    o = ko(e.opacity, n.opacity);
                return function (t) {
                    return e.h = r(t), e.c = a(t), e.l = i(t), e.opacity = o(t), e + ""
                }
            }
        }
        Vo(xo), Vo(ko);

        function Bo(t) {
            return function e(n) {
                function r(e, r) {
                    var a = t((e = mo(e)).h, (r = mo(r)).h),
                        i = ko(e.s, r.s),
                        o = ko(e.l, r.l),
                        f = ko(e.opacity, r.opacity);
                    return function (t) {
                        return e.h = a(t), e.s = i(t), e.l = o(Math.pow(t, n)), e.opacity = f(t), e + ""
                    }
                }
                return n = +n, r.gamma = e, r
            }(1)
        }
        Bo(xo);
        var Wo = Bo(ko);
        var Zo = pa("start", "end", "interrupt"),
            Jo = [],
            Qo = 0,
            Go = 1,
            Ko = 2,
            tf = 3,
            ef = 4,
            nf = 5,
            rf = 6,
            af = function (t, e, n, r, a, i) {
                var o = t.__transition;
                if (o) {
                    if (n in o) return
                } else t.__transition = {};
                ! function (t, e, n) {
                    var r, a = t.__transition;

                    function i(c) {
                        var u, s, l, d;
                        if (n.state !== Go) return f();
                        for (u in a)
                            if ((d = a[u]).name === n.name) {
                                if (d.state === tf) return ea(i);
                                d.state === ef ? (d.state = rf, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete a[u]) : +u < e && (d.state = rf, d.timer.stop(), delete a[u])
                            } if (ea(function () {
                                n.state === tf && (n.state = ef, n.timer.restart(o, n.delay, n.time), o(c))
                            }), n.state = Ko, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ko) {
                            for (n.state = tf, r = new Array(l = n.tween.length), u = 0, s = -1; u < l; ++u)(d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (r[++s] = d);
                            r.length = s + 1
                        }
                    }

                    function o(e) {
                        for (var a = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(f), n.state = nf, 1), i = -1, o = r.length; ++i < o;) r[i].call(null, a);
                        n.state === nf && (n.on.call("end", t, t.__data__, n.index, n.group), f())
                    }

                    function f() {
                        for (var r in n.state = rf, n.timer.stop(), delete a[e], a) return;
                        delete t.__transition
                    }
                    a[e] = n, n.timer = Qr(function (t) {
                        n.state = Go, n.timer.restart(i, n.delay, n.time), n.delay <= t && i(t - n.delay)
                    }, 0, n.time)
                }(t, n, {
                    name: e,
                    index: r,
                    group: a,
                    on: Zo,
                    tween: Jo,
                    time: i.time,
                    delay: i.delay,
                    duration: i.duration,
                    ease: i.ease,
                    timer: null,
                    state: Qo
                })
            };

        function of (t, e) {
            var n = cf(t, e);
            if (n.state > Qo) throw new Error("too late; already scheduled");
            return n
        }

        function ff(t, e) {
            var n = cf(t, e);
            if (n.state > Ko) throw new Error("too late; already started");
            return n
        }

        function cf(t, e) {
            var n = t.__transition;
            if (!n || !(n = n[e])) throw new Error("transition not found");
            return n
        }
        var uf = function (t, e) {
            var n, r, a, i = t.__transition,
                o = !0;
            if (i) {
                for (a in e = null == e ? null : e + "", i)(n = i[a]).name === e ? (r = n.state > Ko && n.state < nf, n.state = rf, n.timer.stop(), r && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete i[a]) : o = !1;
                o && delete t.__transition
            }
        };

        function sf(t, e, n) {
            var r = t._id;
            return t.each(function () {
                    var t = ff(this, r);
                    (t.value || (t.value = {}))[e] = n.apply(this, arguments)
                }),
                function (t) {
                    return cf(t, r).value[e]
                }
        }
        var lf = function (t, e) {
            var n;
            return ("number" == typeof e ? So : e instanceof Pi ? Ao : (n = Pi(e)) ? (e = n, Ao) : Uo)(t, e)
        };
        var df = oi.prototype.constructor;
        var hf = 0;

        function bf(t, e, n, r) {
            this._groups = t, this._parents = e, this._name = n, this._id = r
        }

        function pf() {
            return ++hf
        }
        var gf = oi.prototype;
        bf.prototype = function (t) {
            return oi().transition(t)
        }.prototype = {
            constructor: bf,
            select: function (t) {
                var e = this._name,
                    n = this._id;
                "function" != typeof t && (t = _a(t));
                for (var r = this._groups, a = r.length, i = new Array(a), o = 0; o < a; ++o)
                    for (var f, c, u = r[o], s = u.length, l = i[o] = new Array(s), d = 0; d < s; ++d)(f = u[d]) && (c = t.call(f, f.__data__, d, u)) && ("__data__" in f && (c.__data__ = f.__data__), l[d] = c, af(l[d], e, n, d, l, cf(f, n)));
                return new bf(i, this._parents, e, n)
            },
            selectAll: function (t) {
                var e = this._name,
                    n = this._id;
                "function" != typeof t && (t = Ma(t));
                for (var r = this._groups, a = r.length, i = [], o = [], f = 0; f < a; ++f)
                    for (var c, u = r[f], s = u.length, l = 0; l < s; ++l)
                        if (c = u[l]) {
                            for (var d, h = t.call(c, c.__data__, l, u), b = cf(c, n), p = 0, g = h.length; p < g; ++p)(d = h[p]) && af(d, e, n, p, h, b);
                            i.push(h), o.push(c)
                        } return new bf(i, o, e, n)
            },
            filter: function (t) {
                "function" != typeof t && (t = Ta(t));
                for (var e = this._groups, n = e.length, r = new Array(n), a = 0; a < n; ++a)
                    for (var i, o = e[a], f = o.length, c = r[a] = [], u = 0; u < f; ++u)(i = o[u]) && t.call(i, i.__data__, u, o) && c.push(i);
                return new bf(r, this._parents, this._name, this._id)
            },
            merge: function (t) {
                if (t._id !== this._id) throw new Error;
                for (var e = this._groups, n = t._groups, r = e.length, a = n.length, i = Math.min(r, a), o = new Array(r), f = 0; f < i; ++f)
                    for (var c, u = e[f], s = n[f], l = u.length, d = o[f] = new Array(l), h = 0; h < l; ++h)(c = u[h] || s[h]) && (d[h] = c);
                for (; f < r; ++f) o[f] = e[f];
                return new bf(o, this._parents, this._name, this._id)
            },
            selection: function () {
                return new df(this._groups, this._parents)
            },
            transition: function () {
                for (var t = this._name, e = this._id, n = pf(), r = this._groups, a = r.length, i = 0; i < a; ++i)
                    for (var o, f = r[i], c = f.length, u = 0; u < c; ++u)
                        if (o = f[u]) {
                            var s = cf(o, e);
                            af(o, t, n, u, f, {
                                time: s.time + s.delay + s.duration,
                                delay: 0,
                                duration: s.duration,
                                ease: s.ease
                            })
                        } return new bf(r, this._parents, t, n)
            },
            call: gf.call,
            nodes: gf.nodes,
            node: gf.node,
            size: gf.size,
            empty: gf.empty,
            each: gf.each,
            on: function (t, e) {
                var n = this._id;
                return arguments.length < 2 ? cf(this.node(), n).on.on(t) : this.each(function (t, e, n) {
                    var r, a, i = function (t) {
                        return (t + "").trim().split(/^|\s+/).every(function (t) {
                            var e = t.indexOf(".");
                            return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                        })
                    }(e) ? of : ff;
                    return function () {
                        var o = i(this, t),
                            f = o.on;
                        f !== r && (a = (r = f).copy()).on(e, n), o.on = a
                    }
                }(n, t, e))
            },
            attr: function (t, e) {
                var n = ya(t),
                    r = "transform" === n ? jo : lf;
                return this.attrTween(t, "function" == typeof e ? (n.local ? function (t, e, n) {
                    var r, a, i;
                    return function () {
                        var o, f = n(this);
                        if (null != f) return (o = this.getAttributeNS(t.space, t.local)) === f ? null : o === r && f === a ? i : i = e(r = o, a = f);
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t, e, n) {
                    var r, a, i;
                    return function () {
                        var o, f = n(this);
                        if (null != f) return (o = this.getAttribute(t)) === f ? null : o === r && f === a ? i : i = e(r = o, a = f);
                        this.removeAttribute(t)
                    }
                })(n, r, sf(this, "attr." + t, e)) : null == e ? (n.local ? function (t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function (t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                })(n) : (n.local ? function (t, e, n) {
                    var r, a;
                    return function () {
                        var i = this.getAttributeNS(t.space, t.local);
                        return i === n ? null : i === r ? a : a = e(r = i, n)
                    }
                } : function (t, e, n) {
                    var r, a;
                    return function () {
                        var i = this.getAttribute(t);
                        return i === n ? null : i === r ? a : a = e(r = i, n)
                    }
                })(n, r, e + ""))
            },
            attrTween: function (t, e) {
                var n = "attr." + t;
                if (arguments.length < 2) return (n = this.tween(n)) && n._value;
                if (null == e) return this.tween(n, null);
                if ("function" != typeof e) throw new Error;
                var r = ya(t);
                return this.tween(n, (r.local ? function (t, e) {
                    function n() {
                        var n = this,
                            r = e.apply(n, arguments);
                        return r && function (e) {
                            n.setAttributeNS(t.space, t.local, r(e))
                        }
                    }
                    return n._value = e, n
                } : function (t, e) {
                    function n() {
                        var n = this,
                            r = e.apply(n, arguments);
                        return r && function (e) {
                            n.setAttribute(t, r(e))
                        }
                    }
                    return n._value = e, n
                })(r, e))
            },
            style: function (t, e, n) {
                var r = "transform" == (t += "") ? Io : lf;
                return null == e ? this.styleTween(t, function (t, e) {
                    var n, r, a;
                    return function () {
                        var i = Ua(this, t),
                            o = (this.style.removeProperty(t), Ua(this, t));
                        return i === o ? null : i === n && o === r ? a : a = e(n = i, r = o)
                    }
                }(t, r)).on("end.style." + t, function (t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                }(t)) : this.styleTween(t, "function" == typeof e ? function (t, e, n) {
                    var r, a, i;
                    return function () {
                        var o = Ua(this, t),
                            f = n(this);
                        return null == f && (this.style.removeProperty(t), f = Ua(this, t)), o === f ? null : o === r && f === a ? i : i = e(r = o, a = f)
                    }
                }(t, r, sf(this, "style." + t, e)) : function (t, e, n) {
                    var r, a;
                    return function () {
                        var i = Ua(this, t);
                        return i === n ? null : i === r ? a : a = e(r = i, n)
                    }
                }(t, r, e + ""), n)
            },
            styleTween: function (t, e, n) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == e) return this.tween(r, null);
                if ("function" != typeof e) throw new Error;
                return this.tween(r, function (t, e, n) {
                    function r() {
                        var r = this,
                            a = e.apply(r, arguments);
                        return a && function (e) {
                            r.style.setProperty(t, a(e), n)
                        }
                    }
                    return r._value = e, r
                }(t, e, null == n ? "" : n))
            },
            text: function (t) {
                return this.tween("text", "function" == typeof t ? function (t) {
                    return function () {
                        var e = t(this);
                        this.textContent = null == e ? "" : e
                    }
                }(sf(this, "text", t)) : function (t) {
                    return function () {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            remove: function () {
                return this.on("end.remove", function (t) {
                    return function () {
                        var e = this.parentNode;
                        for (var n in this.__transition)
                            if (+n !== t) return;
                        e && e.removeChild(this)
                    }
                }(this._id))
            },
            tween: function (t, e) {
                var n = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, a = cf(this.node(), n).tween, i = 0, o = a.length; i < o; ++i)
                        if ((r = a[i]).name === t) return r.value;
                    return null
                }
                return this.each((null == e ? function (t, e) {
                    var n, r;
                    return function () {
                        var a = ff(this, t),
                            i = a.tween;
                        if (i !== n)
                            for (var o = 0, f = (r = n = i).length; o < f; ++o)
                                if (r[o].name === e) {
                                    (r = r.slice()).splice(o, 1);
                                    break
                                } a.tween = r
                    }
                } : function (t, e, n) {
                    var r, a;
                    if ("function" != typeof n) throw new Error;
                    return function () {
                        var i = ff(this, t),
                            o = i.tween;
                        if (o !== r) {
                            a = (r = o).slice();
                            for (var f = {
                                    name: e,
                                    value: n
                                }, c = 0, u = a.length; c < u; ++c)
                                if (a[c].name === e) {
                                    a[c] = f;
                                    break
                                } c === u && a.push(f)
                        }
                        i.tween = a
                    }
                })(n, t, e))
            },
            delay: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                    return function () {
                        of (this, t).delay = +e.apply(this, arguments)
                    }
                } : function (t, e) {
                    return e = +e,
                        function () {
                            of (this, t).delay = e
                        }
                })(e, t)) : cf(this.node(), e).delay
            },
            duration: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                    return function () {
                        ff(this, t).duration = +e.apply(this, arguments)
                    }
                } : function (t, e) {
                    return e = +e,
                        function () {
                            ff(this, t).duration = e
                        }
                })(e, t)) : cf(this.node(), e).duration
            },
            ease: function (t) {
                var e = this._id;
                return arguments.length ? this.each(function (t, e) {
                    if ("function" != typeof e) throw new Error;
                    return function () {
                        ff(this, t).ease = e
                    }
                }(e, t)) : cf(this.node(), e).ease
            }
        };
        (function t(e) {
            function n(t) {
                return Math.pow(t, e)
            }
            return e = +e, n.exponent = t, n
        })(3),
        function t(e) {
            function n(t) {
                return 1 - Math.pow(1 - t, e)
            }
            return e = +e, n.exponent = t, n
        }(3),
        function t(e) {
            function n(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            }
            return e = +e, n.exponent = t, n
        }(3), Math.PI;
        (function t(e) {
            function n(t) {
                return t * t * ((e + 1) * t - e)
            }
            return e = +e, n.overshoot = t, n
        })(1.70158),
        function t(e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }
            return e = +e, n.overshoot = t, n
        }(1.70158),
        function t(e) {
            function n(t) {
                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            }
            return e = +e, n.overshoot = t, n
        }(1.70158);
        var mf = 2 * Math.PI,
            yf = (function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= mf);

                function a(t) {
                    return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n)
                }
                return a.amplitude = function (e) {
                    return t(e, n * mf)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= mf);

                function a(t) {
                    return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n)
                }
                return a.amplitude = function (e) {
                    return t(e, n * mf)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= mf);

                function a(t) {
                    return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
                }
                return a.amplitude = function (e) {
                    return t(e, n * mf)
                }, a.period = function (n) {
                    return t(e, n)
                }, a
            }(1, .3), {
                time: null,
                delay: 0,
                duration: 250,
                ease: function (t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                }
            });

        function vf(t, e) {
            for (var n; !(n = t.__transition) || !(n = n[e]);)
                if (!(t = t.parentNode)) return yf.time = Wr(), yf;
            return n
        }
        oi.prototype.interrupt = function (t) {
            return this.each(function () {
                uf(this, t)
            })
        }, oi.prototype.transition = function (t) {
            var e, n;
            t instanceof bf ? (e = t._id, t = t._name) : (e = pf(), (n = yf).time = Wr(), t = null == t ? null : t + "");
            for (var r = this._groups, a = r.length, i = 0; i < a; ++i)
                for (var o, f = r[i], c = f.length, u = 0; u < c; ++u)(o = f[u]) && af(o, t, e, u, f, n || vf(o, e));
            return new bf(r, this._parents, t, e)
        };
        var wf = function (t) {
            return function () {
                return t
            }
        };

        function _f(t, e, n) {
            this.k = t, this.x = e, this.y = n
        }
        _f.prototype = {
            constructor: _f,
            scale: function (t) {
                return 1 === t ? this : new _f(this.k * t, this.x, this.y)
            },
            translate: function (t, e) {
                return 0 === t & 0 === e ? this : new _f(this.k, this.x + this.k * t, this.y + this.k * e)
            },
            apply: function (t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function (t) {
                return t * this.k + this.x
            },
            applyY: function (t) {
                return t * this.k + this.y
            },
            invert: function (t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function (t) {
                return (t - this.x) / this.k
            },
            invertY: function (t) {
                return (t - this.y) / this.k
            },
            rescaleX: function (t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function (t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function () {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var xf = new _f(1, 0, 0);

        function Mf() {
            Ja.stopImmediatePropagation()
        }
        _f.prototype;
        var kf = function () {
            Ja.preventDefault(), Ja.stopImmediatePropagation()
        };

        function Af() {
            return !Ja.button
        }

        function Nf() {
            var t, e, n = this;
            return n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value, e = n.height.baseVal.value) : (t = n.clientWidth, e = n.clientHeight), [
                [0, 0],
                [t, e]
            ]
        }

        function Tf() {
            return this.__zoom || xf
        }

        function Sf() {
            return -Ja.deltaY * (Ja.deltaMode ? 120 : 1) / 500
        }

        function zf() {
            return "ontouchstart" in this
        }

        function Cf(t, e, n) {
            var r = t.invertX(e[0][0]) - n[0][0],
                a = t.invertX(e[1][0]) - n[1][0],
                i = t.invertY(e[0][1]) - n[0][1],
                o = t.invertY(e[1][1]) - n[1][1];
            return t.translate(a > r ? (r + a) / 2 : Math.min(0, r) || Math.max(0, a), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o))
        }
        var Ef = function () {
                var t, e, n = Af,
                    r = Nf,
                    a = Cf,
                    i = Sf,
                    o = zf,
                    f = [0, 1 / 0],
                    c = [
                        [-1 / 0, -1 / 0],
                        [1 / 0, 1 / 0]
                    ],
                    u = 250,
                    s = Ho,
                    l = [],
                    d = pa("start", "zoom", "end"),
                    h = 500,
                    b = 150,
                    p = 0;

                function g(t) {
                    t.property("__zoom", Tf).on("wheel.zoom", M).on("mousedown.zoom", k).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function m(t, e) {
                    return (e = Math.max(f[0], Math.min(f[1], e))) === t.k ? t : new _f(e, t.x, t.y)
                }

                function y(t, e, n) {
                    var r = e[0] - n[0] * t.k,
                        a = e[1] - n[1] * t.k;
                    return r === t.x && a === t.y ? t : new _f(t.k, r, a)
                }

                function v(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function w(t, e, n) {
                    t.on("start.zoom", function () {
                        _(this, arguments).start()
                    }).on("interrupt.zoom end.zoom", function () {
                        _(this, arguments).end()
                    }).tween("zoom", function () {
                        var t = arguments,
                            a = _(this, t),
                            i = r.apply(this, t),
                            o = n || v(i),
                            f = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
                            c = this.__zoom,
                            u = "function" == typeof e ? e.apply(this, t) : e,
                            l = s(c.invert(o).concat(f / c.k), u.invert(o).concat(f / u.k));
                        return function (t) {
                            if (1 === t) t = u;
                            else {
                                var e = l(t),
                                    n = f / e[2];
                                t = new _f(n, o[0] - e[0] * n, o[1] - e[1] * n)
                            }
                            a.zoom(null, t)
                        }
                    })
                }

                function _(t, e) {
                    for (var n, r = 0, a = l.length; r < a; ++r)
                        if ((n = l[r]).that === t) return n;
                    return new x(t, e)
                }

                function x(t, e) {
                    this.that = t, this.args = e, this.index = -1, this.active = 0, this.extent = r.apply(t, e)
                }

                function M() {
                    if (n.apply(this, arguments)) {
                        var t = _(this, arguments),
                            e = this.__zoom,
                            r = Math.max(f[0], Math.min(f[1], e.k * Math.pow(2, i.apply(this, arguments)))),
                            o = di(this);
                        if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = e.invert(t.mouse[0] = o)), clearTimeout(t.wheel);
                        else {
                            if (e.k === r) return;
                            t.mouse = [o, e.invert(o)], uf(this), t.start()
                        }
                        kf(), t.wheel = setTimeout(function () {
                            t.wheel = null, t.end()
                        }, b), t.zoom("mouse", a(y(m(e, r), t.mouse[0], t.mouse[1]), t.extent, c))
                    }
                }

                function k() {
                    if (!e && n.apply(this, arguments)) {
                        var t = _(this, arguments),
                            r = fi(Ja.view).on("mousemove.zoom", function () {
                                if (kf(), !t.moved) {
                                    var e = Ja.clientX - o,
                                        n = Ja.clientY - f;
                                    t.moved = e * e + n * n > p
                                }
                                t.zoom("mouse", a(y(t.that.__zoom, t.mouse[0] = di(t.that), t.mouse[1]), t.extent, c))
                            }, !0).on("mouseup.zoom", function () {
                                r.on("mousemove.zoom mouseup.zoom", null), mi(Ja.view, t.moved), kf(), t.end()
                            }, !0),
                            i = di(this),
                            o = Ja.clientX,
                            f = Ja.clientY;
                        gi(Ja.view), Mf(), t.mouse = [i, this.__zoom.invert(i)], uf(this), t.start()
                    }
                }

                function A() {
                    if (n.apply(this, arguments)) {
                        var t = this.__zoom,
                            e = di(this),
                            i = t.invert(e),
                            o = t.k * (Ja.shiftKey ? .5 : 2),
                            f = a(y(m(t, o), e, i), r.apply(this, arguments), c);
                        kf(), u > 0 ? fi(this).transition().duration(u).call(w, f, e) : fi(this).call(g.transform, f)
                    }
                }

                function N() {
                    if (n.apply(this, arguments)) {
                        var e, r, a, i, o = _(this, arguments),
                            f = Ja.changedTouches,
                            c = f.length;
                        for (Mf(), r = 0; r < c; ++r) a = f[r], i = [i = bi(this, f, a.identifier), this.__zoom.invert(i), a.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, e = !0);
                        if (t && (t = clearTimeout(t), !o.touch1)) return o.end(), void((i = fi(this).on("dblclick.zoom")) && i.apply(this, arguments));
                        e && (t = setTimeout(function () {
                            t = null
                        }, h), uf(this), o.start())
                    }
                }

                function T() {
                    var e, n, r, i, o = _(this, arguments),
                        f = Ja.changedTouches,
                        u = f.length;
                    for (kf(), t && (t = clearTimeout(t)), e = 0; e < u; ++e) n = f[e], r = bi(this, f, n.identifier), o.touch0 && o.touch0[2] === n.identifier ? o.touch0[0] = r : o.touch1 && o.touch1[2] === n.identifier && (o.touch1[0] = r);
                    if (n = o.that.__zoom, o.touch1) {
                        var s = o.touch0[0],
                            l = o.touch0[1],
                            d = o.touch1[0],
                            h = o.touch1[1],
                            b = (b = d[0] - s[0]) * b + (b = d[1] - s[1]) * b,
                            p = (p = h[0] - l[0]) * p + (p = h[1] - l[1]) * p;
                        n = m(n, Math.sqrt(b / p)), r = [(s[0] + d[0]) / 2, (s[1] + d[1]) / 2], i = [(l[0] + h[0]) / 2, (l[1] + h[1]) / 2]
                    } else {
                        if (!o.touch0) return;
                        r = o.touch0[0], i = o.touch0[1]
                    }
                    o.zoom("touch", a(y(n, r, i), o.extent, c))
                }

                function S() {
                    var t, n, r = _(this, arguments),
                        a = Ja.changedTouches,
                        i = a.length;
                    for (Mf(), e && clearTimeout(e), e = setTimeout(function () {
                            e = null
                        }, h), t = 0; t < i; ++t) n = a[t], r.touch0 && r.touch0[2] === n.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
                    r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
                }
                return g.transform = function (t, e) {
                    var n = t.selection ? t.selection() : t;
                    n.property("__zoom", Tf), t !== n ? w(t, e) : n.interrupt().each(function () {
                        _(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end()
                    })
                }, g.scaleBy = function (t, e) {
                    g.scaleTo(t, function () {
                        return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
                    })
                }, g.scaleTo = function (t, e) {
                    g.transform(t, function () {
                        var t = r.apply(this, arguments),
                            n = this.__zoom,
                            i = v(t),
                            o = n.invert(i),
                            f = "function" == typeof e ? e.apply(this, arguments) : e;
                        return a(y(m(n, f), i, o), t, c)
                    })
                }, g.translateBy = function (t, e, n) {
                    g.transform(t, function () {
                        return a(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), r.apply(this, arguments), c)
                    })
                }, g.translateTo = function (t, e, n) {
                    g.transform(t, function () {
                        var t = r.apply(this, arguments),
                            i = this.__zoom,
                            o = v(t);
                        return a(xf.translate(o[0], o[1]).scale(i.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, c)
                    })
                }, x.prototype = {
                    start: function () {
                        return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")), this
                    },
                    zoom: function (t, e) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this
                    },
                    end: function () {
                        return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this
                    },
                    emit: function (t) {
                        ei(new function (t, e, n) {
                            this.target = t, this.type = e, this.transform = n
                        }(g, t, this.that.__zoom), d.apply, d, [t, this.that, this.args])
                    }
                }, g.wheelDelta = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : wf(+t), g) : i
                }, g.filter = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : wf(!!t), g) : n
                }, g.touchable = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : wf(!!t), g) : o
                }, g.extent = function (t) {
                    return arguments.length ? (r = "function" == typeof t ? t : wf([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), g) : r
                }, g.scaleExtent = function (t) {
                    return arguments.length ? (f[0] = +t[0], f[1] = +t[1], g) : [f[0], f[1]]
                }, g.translateExtent = function (t) {
                    return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], g) : [
                        [c[0][0], c[0][1]],
                        [c[1][0], c[1][1]]
                    ]
                }, g.constrain = function (t) {
                    return arguments.length ? (a = t, g) : a
                }, g.duration = function (t) {
                    return arguments.length ? (u = +t, g) : u
                }, g.interpolate = function (t) {
                    return arguments.length ? (s = t, g) : s
                }, g.on = function () {
                    var t = d.on.apply(d, arguments);
                    return t === d ? g : t
                }, g.clickDistance = function (t) {
                    return arguments.length ? (p = (t = +t) * t, g) : Math.sqrt(p)
                }, g
            },
            $f = function (t) {
                for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) n[r] = "#" + t.slice(6 * r, 6 * ++r);
                return n
            },
            Df = $f("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
            Pf = ($f("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), $f("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), $f("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), $f("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), $f("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), $f("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), $f("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), $f("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f")),
            Uf = function (t) {
                return To(t[t.length - 1])
            };
        Uf(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map($f)), Uf(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map($f)), Uf(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map($f)), Uf(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map($f)), Uf(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map($f)), Uf(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map($f)), Uf(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map($f)), Uf(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map($f)), Uf(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map($f)), Uf(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map($f)), Uf(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map($f)), Uf(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map($f)), Uf(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map($f)), Uf(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map($f)), Uf(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map($f)), Uf(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map($f)), Uf(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map($f)), Uf(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map($f)), Uf(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map($f)), Uf(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map($f)), Uf(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map($f)), Uf(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map($f)), Uf(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map($f)), Uf(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map($f)), Uf(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map($f)), Uf(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map($f)), Uf(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map($f)), Wo(mo(300, .5, 0), mo(-240, .5, 1)), Wo(mo(-100, .75, .35), mo(80, 1.5, .8)), Wo(mo(260, .75, .35), mo(80, 1.5, .8)), mo(), Xi(), Math.PI, Math.PI;

        function Yf(t) {
            var e = t.length;
            return function (n) {
                return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]
            }
        }
        var qf = Yf($f("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
        Yf($f("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Yf($f("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Yf($f("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
        var Xf = {},
            Ff = {},
            If = 34,
            jf = 10,
            Of = 13;

        function Rf(t) {
            return new Function("d", "return {" + t.map(function (t, e) {
                return JSON.stringify(t) + ": d[" + e + "]"
            }).join(",") + "}")
        }
        var Hf = function (t) {
                var e = new RegExp('["' + t + "\n\r]"),
                    n = t.charCodeAt(0);

                function r(t, e) {
                    var r, a = [],
                        i = t.length,
                        o = 0,
                        f = 0,
                        c = i <= 0,
                        u = !1;

                    function s() {
                        if (c) return Ff;
                        if (u) return u = !1, Xf;
                        var e, r, a = o;
                        if (t.charCodeAt(a) === If) {
                            for (; o++ < i && t.charCodeAt(o) !== If || t.charCodeAt(++o) === If;);
                            return (e = o) >= i ? c = !0 : (r = t.charCodeAt(o++)) === jf ? u = !0 : r === Of && (u = !0, t.charCodeAt(o) === jf && ++o), t.slice(a + 1, e - 1).replace(/""/g, '"')
                        }
                        for (; o < i;) {
                            if ((r = t.charCodeAt(e = o++)) === jf) u = !0;
                            else if (r === Of) u = !0, t.charCodeAt(o) === jf && ++o;
                            else if (r !== n) continue;
                            return t.slice(a, e)
                        }
                        return c = !0, t.slice(a, i)
                    }
                    for (t.charCodeAt(i - 1) === jf && --i, t.charCodeAt(i - 1) === Of && --i;
                        (r = s()) !== Ff;) {
                        for (var l = []; r !== Xf && r !== Ff;) l.push(r), r = s();
                        e && null == (l = e(l, f++)) || a.push(l)
                    }
                    return a
                }

                function a(e) {
                    return e.map(i).join(t)
                }

                function i(t) {
                    return null == t ? "" : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function (t, e) {
                        var n, a, i = r(t, function (t, r) {
                            if (n) return n(t, r - 1);
                            a = t, n = e ? function (t, e) {
                                var n = Rf(t);
                                return function (r, a) {
                                    return e(n(r), a, t)
                                }
                            }(t, e) : Rf(t)
                        });
                        return i.columns = a || [], i
                    },
                    parseRows: r,
                    format: function (e, n) {
                        return null == n && (n = function (t) {
                            var e = Object.create(null),
                                n = [];
                            return t.forEach(function (t) {
                                for (var r in t) r in e || n.push(e[r] = r)
                            }), n
                        }(e)), [n.map(i).join(t)].concat(e.map(function (e) {
                            return n.map(function (t) {
                                return i(e[t])
                            }).join(t)
                        })).join("\n")
                    },
                    formatRows: function (t) {
                        return t.map(a).join("\n")
                    }
                }
            },
            Lf = Hf(","),
            Vf = Lf.parse,
            Bf = (Lf.parseRows, Lf.format, Lf.formatRows, Hf("\t")),
            Wf = Bf.parse;
        Bf.parseRows, Bf.format, Bf.formatRows;

        function Zf(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var Jf = function (t, e) {
            return fetch(t, e).then(Zf)
        };

        function Qf(t) {
            return function (e, n, r) {
                return 2 === arguments.length && "function" == typeof n && (r = n, n = void 0), Jf(e, n).then(function (e) {
                    return t(e, r)
                })
            }
        }
        Qf(Vf);
        var Gf = Qf(Wf);

        function Kf(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.json()
        }
        var tc = function (t, e) {
            return fetch(t, e).then(Kf)
        };

        function ec(t) {
            return function (e, n) {
                return Jf(e, n).then(function (e) {
                    return (new DOMParser).parseFromString(e, t)
                })
            }
        }
        ec("application/xml"), ec("text/html"), ec("image/svg+xml");

        function nc(t, e = 600, n = 400) {
            const r = {};
            let a, i = "_",
                o = {};
            const f = [];
            let c = function (t) {
                console.log(t);
                const e = t.id || t.htid;
                window.open(`http://babel.hathitrust.org/cgi/pt?id=${e}`)
            };
            const u = function (t) {
                let e = t.name;
                e = e.replace(" ", "%20"), window.open(`https://www.mapquest.com/search/results?query=${e}%20(Road)&boundingBox=46.07323062540835,-125.72753906249999,28.92163128242129,-66.9287109375&page=0`)
            };
            let l, d, h, b = "light";

            function p() {
                fi(t).node();
                (a = fi(t).selectAll("canvas")).empty() && (a = fi(t).append("canvas")), a.attr("width", e).attr("height", n).style("background", t => "light" === b ? "white" : "dark" === b ? "black" : "streets" === b ? "white" : void 0), r.canvas(a)
            }
            r.canvas = function (t) {
                return t ? (a = t, void 0 === l && (l = fi(a.node().parentNode).append("svg").attr("width", e).attr("height", n).style("position", "absolute").style("top", 0).style("left", 0), d = l.append("g").attr("id", "point-layer"), h = l.append("g").attr("id", "legend-layer")), r) : a
            }, p();
            const g = [],
                w = e < n ? 0 : (e - n) / 2,
                _ = ze().range([0 + w, e - w]);
            let x = _;
            const M = n < e ? 0 : (n - e) / 2,
                k = ze().range([0 + M, n - M]);
            let A, S = k;
            const z = {};
            r.cache = z;
            const C = N([]);
            let E, D = !0;

            function P() {
                E = "streets" === b ? "SantaBarbaraStreetsMedium" === K ? "#4E2F2F" : "rgba(48,132,70,1)" : "rgba(5,5,5,.6)"
            }
            r.variable_point_size = function (t) {
                if (void 0 !== t) {
                    D = t;
                    try {
                        fi("#point_size_slider").node().value = t
                    } catch (t) {}
                    return r
                }
                return D
            }, r.scheme = (t => void 0 !== t ? (b = t, p(), P(), r) : b);
            let U = !1;
            r.variable_text_size = function (t) {
                return void 0 !== t ? (U = t, r) : U
            };
            const Y = Ee().exponent(1 / 3).domain([0, 7e4]).range([5, .85]);
            let q = function () {
                return Y(F)
            };
            r.point_size = function (t) {
                return t ? (q = t, r) : q
            };
            const X = {};
            r.add_key = function (t, e) {
                return X[t] = {}, Gf(`${et}/${e}`).then(e => {
                    e.forEach(e => {
                        X[t][e.key] = e.label
                    })
                })
            };
            var F = 1e3;
            let I = .8;
            r.point_opacity = function (t) {
                return t ? (I = t, r) : I
            }, r.add_card_section = function (e, n, r, a) {
                const i = r || `section${Math.random()}`;
                a || (a = A) || (! function (e = t) {
                    let n = fi(e).selectAll("div.data-control");
                    n.empty && (n = fi(e).append("div").attr("class", "data-control")), A = n.append("div").attr("aria-multiselectable", "true")
                }(), a = A);
                const o = a,
                    f = (o.attr("id"), o.append("div").attr("class", "card"));
                e = f.append("div").attr("class", "card-header").append("a").attr("data-toggle", "collapse").attr("data-parent", "#cards").attr("href", `#${i}`).attr("aria-expanded", "true").attr("aria-controls", i).text(e);
                return f.append("div").attr("id", i).attr("aria-labelledby", i).attr("class", "collapse").attr("role", "tabpanel").append("div").attr("class", "card-body").html(n)
            }, r.add_search_box = function () {
                const t = r.add_card_section("Search for a word", "", "searchcard");
                return t.append("input").attr("id", "search").on("keyup", t => {
                    "Enter" === Ja.key && r.zoom_to_word(fi("#search").node().value)
                }), t.append("button").text("find word").on("click", t => {
                    r.zoom_to_word(fi("#search").node().value, 5e3)
                }), r
            };
            let j = !1;
            r.add_sequence_point = function (t, e) {
                if (j) n = fi("#nav_points");
                else {
                    var n = r.add_card_section("Navbar", "", "navstory").append("div").attr("id", "nav_points");
                    j = !0
                }
                n.append("a").text(`${t}---`).style("font-size", "8px").on("click", e)
            }, r.bind_window_resize = function () {
                return fi(window).on("resize", () => {
                    updateBBox(), a.attr("width", e), a.attr("height", n), l.attr("width", e), l.attr("height", n), _.range([0, e]), k.range([0, n]), r.redraw()
                }), r
            };
            let O = 1.5;
            r.point_threshold = function (t) {
                if (t) {
                    O = t;
                    const e = fi("#density_slider");
                    return e.empty() || (e.node().value = Math.sqrt(t)), r
                }
                return O
            };
            let R = .25;
            r.label_threshold = function (t) {
                if (void 0 !== t) {
                    R = t;
                    try {
                        fi("#label_threshold_slider").node().value = Math.sqrt(t)
                    } catch (t) {}
                    return r
                }
                return R
            }, r.click = function (t) {
                return t ? (c = t, r) : c
            };
            let H = 0;
            const L = 0;
            r.show_only_n_categories = function (t, e) {
                t > 0 ? H = t : (H = 0, r.delete_filter("top_n_filter"))
            }, r.slowly = function (t, e, n = 6e3) {
                const a = ze().domain([0, n]).range([r[t](), e]).clamp(!0),
                    i = Qr(e => {
                        r[t](a(e)), bt(), e > a.domain()[1] && i.stop()
                    });
                f.push(i)
            };
            let V, B = (new Date).getTime();
            r.top_n_colors = function (t, e) {
                const n = (new Date).getTime();
                if (n - B < 666 && void 0 !== V) return V;
                B = n;
                t = t || 10;
                void 0 === e && (e = .001);
                var r = {};
                const a = $e().range(s(15)).domain(x.domain()),
                    i = $e().range(s(15)).domain(S.domain()),
                    o = {};
                T(W).forEach(t => {
                    "top_n_filter" !== t && (o[t] = W[t])
                }), C.values().forEach(t => {
                    const e = z[t];
                    e && e.data && e.data.forEach(t => {
                        if (dt(t, o)) {
                            const e = t[nt];
                            if (!e) return;
                            const n = +t.x,
                                o = (a(n), +t.y),
                                f = (a(o), `${a(n)}-${i(o)}`);
                            r[e] || (r[e] = {
                                label: e
                            }, r[e][nt] = e), r[e].points || (r[e].points = {}), r[e].points[f] = r[e].points[f] + 1 || 1, r[e].x = r[e].x + n || +n, r[e].y = r[e].y + o || +o, r[e].n = r[e].n + 1 || 1
                        }
                    })
                });
                let f = 0;
                return (r = T(r).map(t => r[t])).forEach(t => {
                    f += t.n
                }), (r = r.filter(t => !(t.n < f * e || t.n < 5) && (t.label_points = [], t.mode_x = void 0, t.mode_y = void 0, t.mode_n = -1, T(t.points).forEach(e => {
                    if (t.points[e] > t.mode_n) {
                        t.mode_n = t.points[e];
                        const n = e.split("-");
                        t.mode_x = x(y(a.invertExtent(+n[0]))), t.mode_y = S(y(i.invertExtent(+n[1])))
                    }
                }), !0))).sort((t, e) => e.n - t.n), V = r.slice(0, t)
            }, r.annotate_legend = function () {
                const t = L || 10;
                hi("div.ttooltip").remove();
                const e = r.top_n_colors(t, .003),
                    n = h.selectAll("g.legend").data(e, t => t.label);
                n.exit().remove();
                const a = n.enter().append("g").attr("class", "legend").attr("transform", t => `translate(${t.mode_x},${t.mode_y})`);
                a.append("rect").attr("class", "bboxLabel").style("fill-opacity", .85).attr("rx", 15).attr("ry", 15).style("fill", "light" === b ? "white" : "black"), a.append("text").attr("class", "legend").text(t => (function (t, e) {
                    return X[e] ? X[e][t[e]] : t[e]
                })(t, nt)).style("font-size", t => "36px").attr("text-anchor", "middle"), n.merge(a).style("fill", t => Q(t.label)).on("mousemove", () => {}).on("click", function (t) {
                    fi(this).classed("highlit") ? (delete W.hover_effect, h.selectAll("g.legend").classed("muted", !1).classed("highlit", !1), r.redraw()) : function (t) {
                        h.selectAll("g.legend").classed("muted", e => t[nt] !== e[nt]).classed("highlit", e => t[nt] === e[nt]), W.hover_effect = function (e) {
                            return e[nt] === t[nt]
                        }, r.redraw()
                    }(t)
                }).each(function (t) {
                    t.bbox = fi(this).select("text").node().getBBox();
                    fi(this).selectAll("rect").attr("x", t.bbox.x - 10).attr("y", t.bbox.y - 10).attr("width", t.bbox.width + 20).attr("height", t.bbox.height + 20)
                }).transition().attr("transform", t => `translate(${t.mode_x},${t.mode_y})`)
            };
            var W = {};
            r.zoom_to_word = function (t, e) {
                if (t = t.replace("/", "."), "_" === i && setTimeout(() => {
                        r.zoom_to_word(t)
                    }, 500), o[t]) {
                    const n = o[t];
                    return void r.zoom_to(m([40, +n[0]]), +n[1], +n[2], e)
                }
                let n;
                i.some(e => t < e.end && (n = e.file, !0)), o.length > 3e5 && (o = {}), n && Gf(n).then(e => {
                    e.forEach(t => {
                        o[t.id] = [m([32, 1.8 * t.z]), t.x_, t.y_]
                    }), o[t] && r.zoom_to_word(t)
                })
            }, r.promiseIndex = function () {
                return Gf(`${et}/index_desc.tsv`).then(t => {
                    i = t
                })
            };
            const Z = {
                label_field: void 0,
                colorize_by: void 0,
                scale_type: {}
            };
            let J;
            r.appearance = Z, r.filter = function (t) {
                Z.filter = t
            }, r.label = function (t) {
                return t ? (rt = t, r) : rt
            };
            let Q = function () {};
            r.colorscale = Q;
            let G, K, tt, et = "/";
            r.base_dir = (t => t ? (et = t, "/data/scatter/streets" === t && (c = u), r) : et), r.debug = (t => void 0 !== t ? (G = t, r) : G), r.font = (t => void 0 !== t ? (tt = "Overpass" == K ? "bold" : "", K = t, P(), r) : K), r.font("Arial"), r.colorize_by = (t => void 0 === t ? nt : (nt = t, r));
            let nt, rt, at, it = !0;

            function ot(t, e) {
                const n = {};
                n[t] = e.value, r.plotAPI(n)
            }

            function ft() {
                Q = $("light" === b ? Df : Pf), N(["date", "year", "inferreddate", "record_date"]).has(nt) && (Q = function t(e) {
                    var n = 0,
                        r = 1,
                        a = 1,
                        i = !1;

                    function o(t) {
                        var r = (t - n) * a;
                        return e(i ? Math.max(0, Math.min(1, r)) : r)
                    }
                    return o.domain = function (t) {
                        return arguments.length ? (n = +t[0], r = +t[1], a = n === r ? 0 : 1 / (r - n), o) : [n, r]
                    }, o.clamp = function (t) {
                        return arguments.length ? (i = !!t, o) : i
                    }, o.interpolator = function (t) {
                        return arguments.length ? (e = t, o) : e
                    }, o.copy = function () {
                        return t(e).domain([n, r]).clamp(i)
                    }, Se(o)
                }().interpolator(qf).domain([1800, 2e3])), "gradient2" === Z.scale_type[nt] && (Q = ze().domain([-.4, 0, .4]).range(["blue", "grey", "red"]))
            }

            function ct() {
                const t = hi("#regex-filter");
                if (t.empty()) return;
                const e = t.node().value;
                T(W).forEach(t => {
                    t.startsWith("regex") && delete W[t]
                }), "" != e && r.add_regex_filter(e, Z.filter)
            }
            r.collisionDetection = (t => void 0 === t ? it : (it = t, r)), r.label_field = (t => void 0 === t ? rt : (rt = t, r)), r.updateFromAPI = function (t, e, n) {
                const a = N(["label_threshold", "point_size", "scheme", "font", "debug", "point_opacity", "point_threshold", "variable_point_size", "variable_text_size", "base_dir", "hide_uncolored", "show_only_n_categories", "color_legend_toggle", "colorize_by", "label_field", "collisionDetection"]);
                0 == e && t.slowly && "start" !== n && (t.slowly.forEach(e => {
                    t[e.field] = e.value
                }), t.slowly = void 0), T(t).forEach(e => {
                    const n = t[e];
                    a.has(e) ? (console.log(`Setting ${e} to ${n}`), r[e](n)) : "filters" === e || "+filters" === e ? ("filters" === e && r.clear_filters(), r.filters(n)) : "keys" === e && T(n).forEach(t => {
                        r.add_key(t, n[t])
                    })
                }), t.slowly && e && t.slowly.forEach(t => {
                    r.slowly(t.field, t.value, t.duration)
                })
            }, r.add_color_legend = function () {
                const t = r.add_card_section("Colors", "", "color-legend"),
                    e = gt,
                    n = T(e);
                n.forEach(t => {
                    Z.scale_type[t] = e[t]
                }), nt = n[0], rt = mt[0];
                t.append("div").append("button").attr("class", "color_legend_button").text("Show color legend").on("click", a);

                function a(t) {
                    const e = hi(".color_legend_button");
                    let n;
                    (n = "on" !== t && ("off" === t || e.classed("displaying"))) ? (h.selectAll(".legend").remove(), l.style("background", "rgba(255,255,255,0)"), e.classed("displaying", !1), e.text("Show color legend")) : (r.annotate_legend(), e.classed("displaying", !0), e.text("Hide color legend"))
                }
                t.append("div").text("colorize by: ").append("select").on("change", function (t) {
                    ot("colorize_by", this)
                }).selectAll("option").data(n).enter().append("option").text(t => t), fi("buttons").append("select").selectAll("option").data(n).append("option").text(t => t), r.color_legend_toggle = a
            }, r.add_filter_legend = function () {
                const t = r.add_card_section("Filters", "Use a search term or regular expression to filter points.", "filter-legend");
                t.append("button").on("click", () => {
                    r.clear_filters(), fi("#regex-filter").node().value = "", r.hide_uncolored(!1), ct(), r.plotAPI()
                }).text("Drop all filters");
                const e = t.append("div").append("span").text("Limit "),
                    n = e.append("select").attr("id", "regex-filter-field").on("change", function (t) {
                        Z.filter = fi(this).node().value, ct(), r.plotAPI()
                    }),
                    a = T(gt),
                    i = N(a.concat(void 0)).values();
                Z.filter = i[0], n.selectAll("option").data(i).enter().append("option").text(t => t), e.append("text").text(" to match "), at = e.append("input").attr("id", "regex-filter").on("keyup", () => {
                    ct(), r.plotAPI()
                })
            }, r.add_label_legend = function () {
                const t = r.add_card_section("Labels", "", "label-legend");
                t.append("div");

                function e() {
                    const t = fi(this).node().value;
                    r.plotAPI({
                        label_threshold: t * t
                    })
                }
                t.append("div").text("Label by: ").append("select").on("input", function (t) {
                    ot("label_field", this)
                }).on("change", function (t) {
                    ot("label_field", this)
                }).selectAll("option").data(mt).enter().append("option").text(t => t), t.append("text").text("% of points w/ labels"), t.append("input").attr("id", "label_threshold_slider").attr("type", "range").attr("min", 0).attr("max", 1).attr("step", .02).on("input", e).on("change", e)
            }, r.color_legend_toggle = (() => void 0), r.add_legend = function (t, e) {
                const n = r.add_card_section("Points", "", "legend");

                function a() {
                    const t = +fi(this).node().value;
                    t === +fi("#density_slider").attr("max") && fi("#density_slider").attr("max", t + .5), r.plotAPI({
                        point_threshold: t * t
                    })
                }
                const i = n.append("div");

                function o() {
                    const t = fi(this).node().value;
                    r.plotAPI({
                        point_size: t
                    })
                }
                i.append("text").text("Number of points "), i.append("input").attr("id", "density_slider").attr("type", "range").attr("min", 1).attr("max", 4.99).attr("step", .01).attr("defaultValue", 1).on("input", a).on("change", a), i.append("text").attr("id", "pointcount");
                const f = n.append("div");
                return f.append("text").text("Point size"), f.append("input").attr("id", "point_size_slider").attr("type", "range").attr("min", .5).attr("max", 5).attr("step", .05).on("input", o).on("change", o), r
            }, r.where_am_i = function () {
                const t = x.invert(e / 2),
                    r = S.invert(n / 2),
                    a = lt.k,
                    i = fi(".chunk.graph-scroll-active").selectAll("pre.api").select("code"),
                    o = JSON.parse(i.text());
                return o.zoom = [Math.round(50 * a) / 50, Math.round(1e3 * t) / 1e3, Math.round(1e3 * r) / 1e3], i.text(JSON.stringify(o).replace(/,"/g, '\n  ,"')), `"zoom": [${a}, ${t}, ${r}]`
            }, r.add_regex_filter = function (t, e) {
                const n = new RegExp(t);
                W[`regex_${e}`] = function (t) {
                    return !!t[e] && !!t[e].match(n)
                }
            }, r.clear_filters = function () {
                st = {}, W = {}, ct()
            }, r.redraw = function () {
                throw "Redrawing before chart created..."
            }, r.add_filter = function (t, e, n) {
                e = e || Math.random().toString(36), W[e] = t
            }, r.delete_filter = function (t) {
                W[t] && delete W[t]
            };
            let ut, st = {};
            r.filters = function (t) {
                if (void 0 === t) return st;
                T(t).forEach(e => {
                    const n = t[e];
                    if (st[e] = n, n.arguments) r.add_filter(n, e);
                    else if (n.startsWith("/") && n.endsWith("/")) r.add_regex_filter(n.slice(1, -1), e);
                    else {
                        const t = Function("d", `return ${n}`);
                        r.add_filter(t, e)
                    }
                })
            };
            let lt = xf;

            function dt(t, r) {
                if (r = r || W, t.zoom >= lt.k * O) return !1;
                const a = T(r);
                for (let e = 0; e < a.length; e++)
                    if (!r[a[e]](t)) return !1;
                return !(ht && ! function (t) {
                    return t[nt]
                }(t)) && (t.cx = x(t.x), t.cy = S(t.y), t.cx > 0 && t.cx < e && t.cy > 0 && t.cy < n)
            }
            var ht = !1;
            r.hide_uncolored = function (t) {
                return void 0 === t ? ht : (ht = t, r)
            }, r.redraw_frames = [];
            let bt, pt, gt, mt;
            return r.updateData = bt, r.create = function (t) {
                return pt || (r.updateFromAPI(t, !1, "start"), pt = Gf(`${et}/tiles/1/0/0.tsv`, t => ac(t, 1, "foo")).then(t => {
                    const e = [],
                        n = {};
                    T(t[0]).filter(t => -1 === ["x", "y", "htid", "id", "zoom", "ix", "Xwidths", "quadrant", "base_zoom"].indexOf(t)).forEach(t => {
                        n[t] = {}, e.push(t)
                    }), gt = n, mt = e
                }).then(() => tc(`${et}/data_description.json`)).then(i => {
                    t.guides && t.guides.forEach(t => {
                        this[`add_${t}`]()
                    }), _.domain([i.limits[0][0], i.limits[0][1]]), k.domain([i.limits[1][0], i.limits[1][1]]);
                    const o = Ef().scaleExtent([1, 12 * i.max_zoom]).on("zoom", function () {
                        lt = Ja.transform, x = Ja.transform.rescaleX(_), S = Ja.transform.rescaleY(k), bt();
                        const t = (new Date).getTime();
                        r.redraw_frames.push(t)
                    });
                    lt = xf, r.zoom_to = function (t, a, i, f = 6e3) {
                        r.create().then(() => {
                            const r = xf.translate(e / 2, n / 2).scale(t).translate(-_(a), -k(i));
                            fi("svg").transition().duration(f).ease(Ur).call(o.transform, r)
                        })
                    };
                    const f = function () {
                            return oa().extent([
                                [i.limits[0][0], i.limits[1][0]],
                                [i.limits[0][1], i.limits[1][1]]
                            ]).x(t => t.x).y(t => t.y)
                        },
                        u = a.node().getContext("2d");
                    x = _, S = k, bt = function () {
                        ! function () {
                            C.values().map(t => {
                                C.remove(t)
                            });
                            const t = [x.invert(0), x.invert(e)],
                                r = [S.invert(0), S.invert(n)],
                                a = i.limits;
                            for (let e = 1; e / O <= lt.k; e *= 2) {
                                const n = ze().domain(a[1]).range([0, e - 1e-8]),
                                    i = ze().domain(a[0]).range([0, e - 1e-8]),
                                    o = t.map(t => Math.floor(i(t))),
                                    f = r.map(t => Math.floor(n(t)));
                                s(o[0], o[1] + 1).forEach(t => {
                                    s(f[0], f[1] + 1).forEach(n => {
                                        C.add([e, t, n])
                                    })
                                })
                            }
                        }(x.domain(), S.domain());
                        const t = C.values().map(t => {
                            const e = t.split(",");
                            ! function t(e, n, r, a) {
                                a = a || lt.k * O;
                                const o = [e, n, r].join(",");
                                if (e > i.max_zoom || e < 1) return Promise.resolve(0);
                                if (r >= e || n >= e || r < 0 || n < 0) return Promise.resolve(0);
                                if (h[o]) return h[o];
                                const f = function (t, e, n) {
                                    return [t / 2, Math.floor(e / 2), Math.floor(n / 2)]
                                }(e, n, r);
                                return t(f[0], f[1], f[2], a).then(t => t > a ? Promise.resolve(t) : p(e, n, r))
                            }(+e[0], +e[1], +e[2])
                        });
                        Promise.all(t).then(() => {
                            r.redraw()
                        })
                    };
                    const h = {};

                    function p(t, e, n) {
                        const a = [t, e, n].join(",");
                        return h[a] ? h[a] : n >= t || e >= t || n < 0 || e < 0 ? (h[a] = Promise.resolve(1 / 0), Promise.resolve(1 / 0)) : (h[a] = Gf(`${et}/tiles/${t}/${e}/${n}.tsv`, e => ac(e, t, a)).catch(t => void 0).then(t => {
                            if (void 0 === t) return 1 / 0;
                            t.length;
                            t.forEach((t, e) => {
                                t.zoom = t.ix / i.tile_depth, "streets" == b && ("</s>" == t.name ? t.name = "" : t.name = t.name.replace(/_/g, " "))
                            }), z[a] = {
                                data: t,
                                quadtree: f([])
                            }, window.foo = z;
                            //TODO: Uncaught (in promise) TypeError: Cannot read property 'ix' of undefined
                            // console.log("t:", t);
                            let e;
                            try{
                                e = t[t.length - 1].ix / i.tile_depth;
                            }
                            catch(e){
                                console.log("t:", t);
                                console.log("t[t.length - 1]", t[t.length - 1])
                            }

                            return t.length < i.tile_depth && (e = 1 / 0), t.forEach(t => {
                                z[a].quadtree.add(t)
                            }), l.on("tap", t => {
                                console.log("tap")
                            }).on("mousemove", ut).call(o), fi(l.node().parentNode).on("wheel", () => {
                                Ja.preventDefault()
                            }), r.redraw(), e
                        }), h[a])
                    }
                    r.promise_tile = p, r.tile_promises = h;
                    let y, w;
                    fi("#buttons").append("div").attr("display", "float").selectAll("button").data([]).enter().append("button").on("click", t => {
                        t.function()
                    }).text(t => t.name), r.redraw = function (t = !1) {
                        u.clearRect(0, 0, e, n), "streets" === b && (u.fillStyle = "#80BFEB", u.fillRect(0, 0, e, n)), d.selectAll("rect").remove();
                        const a = hi(".color_legend_button");
                        return !a.empty() && a.classed("displaying") && r.annotate_legend(), J(t)
                    }, J = function (t = !1) {
                        g.length = 0;
                        const e = f().x(t => t.x).y(t => t.y);
                        let n = 0,
                            a = 0;
                        const o = [];
                        nt !== y && (ft(), y = nt), H && function () {
                            let t = r.top_n_colors(H, L).map(t => t.label);
                            t = N(t), W.top_n_filter = function (e) {
                                return t.has(e[nt])
                            }
                        }(), u.fill(), u.textAlign = "center", u.beginPath();
                        let c, s, l = C.values();
                        l = l.sort(), c = "function" == typeof q ? q() : q, F = 0, s = fi("#filter").node() ? fi("#filter").node().value : "";
                        new RegExp(s);
                        u.globalAlpha = I, l.forEach(r => {
                            const i = z[r];
                            if ("theoretical" === G && s(), "fetching" === i) return;
                            if (!i) return;
                            let f = !1;

                            function s() {
                                const [t, e, n] = r.split(",");
                                if (+e < 0 || +e >= +t || +n < 0 || +n >= +t) return;
                                const a = ze().domain([0, t]).range(_.domain()),
                                    i = ze().domain([0, t]).range(k.domain());
                                let o;
                                u.strokeStyle = "rgba(128, 128, 128, .5)", u.lineWidth = m([40 / t * lt.k, 4]), u.strokeRect(x(a(e)), S(i(n)), x(a(1)) - x(a(0)), S(i(1)) - S(i(0))), (o = "theoretical" === G ? Promise.resolve(r) : h[r].then(r => `${e}, ${n}|${t}->${ve(".1f")(r)}`)).then(r => {
                                    u.fillStyle = "rgba(128,128,128,1)";
                                    const o = v([m([64 * lt.k / +t, 10]), 64]);
                                    u.font = `${tt} ${o}px ${K}`, u.fillText(r, x(a(+e + .5)), 16 + S(i(+n + .5)))
                                })
                            }
                            z[r].data.some(r => r.zoom >= lt.k * O || (f = !0, function (r) {
                                if (!dt(r)) return;
                                nt ? r[nt] ? u.fillStyle = Q(r[nt]) : u.fillStyle = "light" === b ? "rgba(5,5,5,.4)" : "rgba(250,250,250,.4)" : u.fillStyle = E, F += 1;
                                let i = !0;
                                if (t && g.push(r), r.zoom <= lt.k * O * R && rt && r[rt]) {
                                    if (i = !1, U) {
                                        r.zoom;
                                        lt.k;
                                        var f = m([6 * c, 6 * Math.log(lt.k / r.zoom) * c])
                                    } else f = 16;
                                    const t = r[rt];
                                    r.Xwidths || (r.Xwidths = {}), r.Xwidths[K] || (r.Xwidths[K] = {});
                                    const s = "streets" === b ? .2 * f : .02 * f;
                                    r.Xwidths[K][rt] || (u.font = `${tt} ${f}px ${K}`, r.Xwidths[K][rt] = u.measureText(t).width / f);
                                    const l = f * r.Xwidths[K][rt],
                                        d = [r.cx - l / 2 - 5 * s, r.cx + l / 2 + 5 * s, r.cy - f - s / 4, r.cy + f / 3 + s / 4];
                                    l > n && (n = l), f > a && (a = f), e.visit((t, e, r, o, f) => !!i || (t.length ? !rc(d, [e - n / 2, o + n / 2, r - a, f]) : void(rc(d, t.data.corners) && it && (i = !0)))), i || (e.add({
                                        x: r.cx,
                                        y: r.cy,
                                        corners: d,
                                        index: r.index
                                    }), o.push([t, f, r, u.fillStyle, l, d]), i = !1)
                                }
                                if (i) {
                                    let t;
                                    if ((t = D ? v([c, Math.sqrt(lt.k / r.zoom) * c]) : c) > 21.5) u.moveTo(r.cx, r.cy), u.beginPath(), u.arc(r.cx, r.cy, t, 0, 2 * Math.PI), u.closePath(), u.fill();
                                    else {
                                        const e = 1.77 * t;
                                        u.fillRect(r.cx - e / 2, r.cy - e / 2, 3 * e / 4, 4 * e / 3)
                                    }
                                }
                            }(r), !1)), "actual" == G && f && s(), "light" === b ? u.fillStyle = "rgba(255,255,255,.3)" : "dark" === b ? u.fillStyle = "rgba(5,5,5,.3)" : "streets" === b && (u.fillStyle = "default_color"), o.forEach(t => {
                                const [e, n, r, a, i, o] = t, [f, c, s, l] = o;
                                u.fillRect(f, s, c - f, l - s)
                            })
                        }), o.forEach(t => {
                            const [e, n, r, a, i] = t;
                            u.fillStyle = "streets" == b ? "rgba(250, 230, 240, 1)" : a, u.font = `${tt} ${n}px ${K}`, u.fillText(e, r.cx, r.cy)
                        });
                        const d = lt.k * O / i.max_zoom,
                            p = ve(",")(F);
                        hi("#pointcount").text(p);
                        Math.floor(Math.log10(F));
                        let w;
                        if (d < 1) {
                            let t = Math.floor(Math.log10(F));
                            t < 1 && (t = 1), w = `~${ve(`,.${t}r`)(F/d)}`
                        } else w = p;
                        if (hi("#regioncount").text(w), t) return g
                    }, ut = function () {
                        const t = di(this),
                            [e, n] = [t[0], t[1]];
                        let r = x.invert(35) - x.invert(0),
                            a = null;
                        if (C.values().forEach(function (t) {
                                if (!z[t]) return !1;
                                t.split(",")[0];
                                const i = z[t].quadtree;
                                if (!i) return !1;
                                const o = i.find(x.invert(e), S.invert(n), r, t => dt(t));
                                if (o) {
                                    const t = Math.sqrt(Math.pow(x.invert(e) - o.x, 2) + Math.pow(S.invert(n) - o.y, 2));
                                    a = o, r = t
                                }
                            }), null === a) return d.selectAll("rect").remove(), void(w = "nothing");
                        if (w !== a.ix) {
                            w = a.ix, d.selectAll("rect").remove();
                            let e = d.selectAll("rect").data([a]);
                            const n = 6,
                                r = 4,
                                i = 12,
                                o = 18,
                                f = e.enter().append("rect");
                            (e = e.merge(f)).style("stroke", "none").attr("width", n).attr("height", r).style("opacity", 1).style("fill", t => Q(t[nt])).style("fill-opacity", 1).attr("x", x(a.x)).attr("y", S(a.y)).attr("transform", `translate(-${n/2}, -${r/2})`).on("click", c).transition().duration(750).ease(Dr).attr("width", i).attr("height", o).attr("transform", `translate(-${i/2}, -${o/2})`), hi("div.ttooltip").remove();
                            const u = fi("body").append("div").attr("class", "ttooltip");
                            const s = T(a).filter(t => -1 === ["x", "y", "lc0", "lc1", "zoom", "genre", "cx", "cy", "base_zoom", "quadrant", "dist", "Xwidths", "ix"].indexOf(t)).filter(t => a[t]);
                            let l = u.selectAll("div").data(s);
                            (l = l.merge(l.enter().append("div").attr("class", "metadata-item"))).append("span").attr("class", "metadata-label").text(t => t), l.append("span").attr("class", "metadata-text").text(t => a[t]), u.classed("visible", !0).style("left", `${t[0]+10}px`).style("top", `${t[1]+5}px`).on("click", function () {
                                c(a)
                            }).transition().duration(7e3).on("end", () => u.classed("visible", !1))
                        }
                    }, bt()
                }))
            }, r.load_preset_buttons = function () {
                const t = r.add_card_section("Some interesting locations", "", "presets");
                return Gf(`${et}/presets.tsv`).then(e => {
                    t.selectAll("a").data(e).enter().append("a").attr("class", "btn").text(t => t.label).on("click", t => {
                        r.zoom_to(t.z, t.x, t.y)
                    })
                }), r
            }, r.plotAPI = function (t = {}, e = !0) {
                return f.forEach(t => t.stop()), f.length = 0, r.create(t).then(() => (r.updateFromAPI(t, e), e ? (t.zoom && "undefined" !== t.zoom && r.zoom_to.apply(null, t.zoom), r.redraw(), 1) : 1))
            }, r.drawSVG = function (t = 2, e = "circle") {
                const n = r.redraw(!0),
                    a = l.selectAll(e).data(n, t => t.ix);
                a.exit().remove();
                const i = a.enter().append(e);
                a.merge(i).attr("cx", t => x(t.x)).attr("cy", t => S(t.y)).attr("fill", t => Q(t[nt])).attr("r", t)
            }, r
        }

        function rc(t, e) {
            return t[2] < e[3] && t[3] > e[2] && t[0] < e[1] && t[1] > e[0]
        }

        function ac(t, e, n) {
            if (t.base_zoom = e, t.quadrant = n, void 0 == t.ix && (t.ix = t.building), t.lc1 && (t.Classification = t.lc1.substr(0, 1), t.Subclassification = t.lc1), t.htid && (t.library = t.htid.split(".")[0]), t.id && (t.first_author_name || t.lc1 || t.language) && (t.library = t.id.split(".")[0]), t.title && t.htid) {
                const e = t.title;
                e.endsWith(" /") && (t.title = t.title.slice(0, -2)), t.genre = e.search(/[pP]oe(try|m)/) > -1 ? "Poetry" : e.search(/[Nn]ovel/) > -1 ? "Novel" : e.search(/[Pp]lay/) > -1 ? "Play" : void 0
            }
            return t
        }
        n.d(e, "default", function () {
            return nc
        })
    }])
});