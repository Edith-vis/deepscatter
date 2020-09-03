(("undefined" != typeof self ? self : this).webpackJsonp = ("undefined" != typeof self ? self : this).webpackJsonp || []).push([
    [8], {
        12: function (t, n, e) {
            "use strict";
            var r = e(0),
                i = Math.abs,
                a = (Math.atan, Math.atan2),
                o = (Math.ceil, Math.cos),
                s = Math.exp,
                c = (Math.floor, Math.log),
                u = (Math.max, Math.min, Math.pow),
                l = (Math.round, Math.sign || function (t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                }),
                f = Math.sin,
                h = Math.tan,
                d = 1e-6,
                p = Math.PI,
                y = p / 2,
                _ = (Math.SQRT1_2, w(2)),
                v = w(p),
                g = 180 / p,
                b = p / 180;

            function m(t) {
                return t > 1 ? y : t < -1 ? -y : Math.asin(t)
            }

            function x(t) {
                return t > 1 ? 0 : t < -1 ? p : Math.acos(t)
            }

            function w(t) {
                return t > 0 ? Math.sqrt(t) : 0
            }

            function M(t) {
                return (s(t) - s(-t)) / 2
            }

            function k(t) {
                return (s(t) + s(-t)) / 2
            }

            function S(t, n) {
                var e = o(n),
                    r = function (t) {
                        return t ? t / Math.sin(t) : 1
                    }(x(e * o(t /= 2)));
                return [2 * e * f(t) * r, f(n) * r]
            }

            function j(t, n) {
                var e = h(n / 2),
                    r = w(1 - e * e),
                    i = 1 + r * o(t /= 2),
                    a = f(t) * r / i,
                    s = e / i,
                    c = a * a,
                    u = s * s;
                return [4 / 3 * a * (3 + c - 3 * u), 4 / 3 * s * (3 + 3 * c - u)]
            }
            S.invert = function (t, n) {
                if (!(t * t + 4 * n * n > p * p + d)) {
                    var e = t,
                        r = n,
                        a = 25;
                    do {
                        var s, c = f(e),
                            u = f(e / 2),
                            l = o(e / 2),
                            h = f(r),
                            y = o(r),
                            _ = f(2 * r),
                            v = h * h,
                            g = y * y,
                            b = u * u,
                            m = 1 - g * l * l,
                            M = m ? x(y * l) * w(s = 1 / m) : s = 0,
                            k = 2 * M * y * u - t,
                            S = M * h - n,
                            j = s * (g * b + M * y * l * v),
                            N = s * (.5 * c * _ - 2 * M * h * u),
                            A = .25 * s * (_ * u - M * h * g * c),
                            E = s * (v * l + M * b * y),
                            O = N * A - E * j;
                        if (!O) break;
                        var P = (S * N - k * E) / O,
                            T = (k * A - S * j) / O;
                        e -= P, r -= T
                    } while ((i(P) > d || i(T) > d) && --a > 0);
                    return [e, r]
                }
            }, j.invert = function (t, n) {
                if (n *= 3 / 8, !(t *= 3 / 8) && i(n) > 1) return null;
                var e = 1 + t * t + n * n,
                    r = w((e - w(e * e - 4 * n * n)) / 2),
                    s = m(r) / 3,
                    u = r ? function (t) {
                        return c(t + w(t * t - 1))
                    }(i(n / r)) / 3 : function (t) {
                        return c(t + w(t * t + 1))
                    }(i(t)) / 3,
                    h = o(s),
                    d = k(u),
                    p = d * d - h * h;
                return [2 * l(t) * a(M(u) * h, .25 - p), 2 * l(n) * a(d * f(s), .25 + p)]
            };
            w(8), c(1 + _);

            function N(t, n) {
                var e, r = t * f(n),
                    a = 30;
                do {
                    n -= e = (n + f(n) - r) / (1 + o(n))
                } while (i(e) > d && --a > 0);
                return n / 2
            }

            function A(t, n, e) {
                function r(r, i) {
                    return [t * r * o(i = N(e, i)), n * f(i)]
                }
                return r.invert = function (r, i) {
                    return i = m(i / n), [r / (t * o(i)), m((2 * i + f(2 * i)) / e)]
                }, r
            }
            var E = A(_ / y, _, p),
                O = function () {
                    return Object(r.A)(E).scale(169.529)
                };

            function P(t, n) {
                return [t * o(n), n]
            }

            function T(t) {
                if (!t) return P;
                var n = 1 / h(t);

                function e(e, r) {
                    var i = n + t - r,
                        a = i ? e * o(r) / i : i;
                    return [i * f(a), n - i * o(a)]
                }
                return e.invert = function (e, r) {
                    var i = w(e * e + (r = n - r) * r),
                        s = n + t - i;
                    return [i / o(s) * a(e, r), s]
                }, e
            }
            P.invert = function (t, n) {
                return [t / o(n), n]
            };
            var C = function () {
                return (t = T, n = 0, e = Object(r.B)(t), i = e(n), i.parallel = function (t) {
                    return arguments.length ? e(n = t * b) : n * g
                }, i).scale(123.082).center([0, 26.1441]).parallel(45);
                var t, n, e, i
            };

            function R(t, n) {
                var e = w(1 - f(n));
                return [2 / v * t * e, v * (1 - e)]
            }
            A(1, 4 / p, p), R.invert = function (t, n) {
                var e = (e = n / v - 1) * e;
                return [e > 0 ? t * w(p / e) / 2 : 0, m(1 - e)]
            };
            w(3);
            o(35 * b);
            var q = function (t, n, e, r, a, s, c, u) {
                function l(i, l) {
                    if (!l) return [t * i / p, 0];
                    var h = l * l,
                        d = t + h * (n + h * (e + h * r)),
                        y = l * (a - 1 + h * (s - u + h * c)),
                        _ = (d * d + y * y) / (2 * y),
                        v = i * m(d / _) / p;
                    return [_ * f(v), l * (1 + h * u) + _ * (1 - o(v))]
                }
                return arguments.length < 8 && (u = 0), l.invert = function (l, h) {
                    var y, _, v = p * l / t,
                        g = h,
                        b = 50;
                    do {
                        var x = g * g,
                            M = t + x * (n + x * (e + x * r)),
                            k = g * (a - 1 + x * (s - u + x * c)),
                            S = M * M + k * k,
                            j = 2 * k,
                            N = S / j,
                            A = N * N,
                            E = m(M / N) / p,
                            O = v * E,
                            P = M * M,
                            T = (2 * n + x * (4 * e + 6 * x * r)) * g,
                            C = a + x * (3 * s + 5 * x * c),
                            R = (2 * (M * T + k * (C - 1)) * j - S * (2 * (C - 1))) / (j * j),
                            q = o(O),
                            z = f(O),
                            I = N * q,
                            D = N * z,
                            L = v / p * (1 / w(1 - P / A)) * (T * N - M * R) / A,
                            B = D - l,
                            F = g * (1 + x * u) + N - I - h,
                            U = R * z + I * L,
                            W = I * E,
                            H = 1 + R - (R * q - D * L),
                            V = D * E,
                            X = U * V - H * W;
                        if (!X) break;
                        v -= y = (F * U - B * H) / X, g -= _ = (B * V - F * W) / X
                    } while ((i(y) > d || i(_) > d) && --b > 0);
                    return [v, g]
                }, l
            };
            q(2.8284, -1.6988, .75432, -.18071, 1.76003, -.38914, .042555), q(2.583819, -.835827, .170354, -.038094, 1.543313, -.411435, .082742), q(5 / 6 * p, -.62636, -.0344, 0, 1.3493, -.05524, 0, .045), q(2.6516, -.76534, .19123, -.047094, 1.36289, -.13965, .031762);
            var z = e(2);
            ! function (t) {
                var n = o(t);

                function e(t, e) {
                    return [t * n, f(e) / n]
                }
                e.invert = function (t, e) {
                    return [t / n, m(e * n)]
                }
            }(0);

            function I(t, n) {
                return i(t[0] - n[0]) < d && i(t[1] - n[1]) < d
            }

            function D(t, n) {
                for (var e, r, i, a = -1, o = t.length, s = t[0], c = []; ++a < o;) {
                    r = ((e = t[a])[0] - s[0]) / n, i = (e[1] - s[1]) / n;
                    for (var u = 0; u < n; ++u) c.push([s[0] + u * r, s[1] + u * i]);
                    s = e
                }
                return c.push(e), c
            }
            var L = function (t, n) {
                var e, i;

                function a(e, r) {
                    for (var i = r < 0 ? -1 : 1, a = n[+(r < 0)], o = 0, s = a.length - 1; o < s && e > a[o][2][0]; ++o);
                    var c = t(e - a[o][1][0], r);
                    return c[0] += t(a[o][1][0], i * r > i * a[o][0][1] ? a[o][0][1] : r)[0], c
                }
                t.invert && (a.invert = function (e, r) {
                    for (var o = i[+(r < 0)], s = n[+(r < 0)], c = 0, u = o.length; c < u; ++c) {
                        var l = o[c];
                        if (l[0][0] <= e && e < l[1][0] && l[0][1] <= r && r < l[1][1]) {
                            var f = t.invert(e - t(s[c][1][0], 0)[0], r);
                            return f[0] += s[c][1][0], I(a(f[0], f[1]), [e, r]) ? f : null
                        }
                    }
                });
                var o = Object(r.A)(a),
                    s = o.stream;
                return o.stream = function (t) {
                    var n = o.rotate(),
                        i = s(t),
                        a = (o.rotate([0, 0]), s(t));
                    return o.rotate(n), i.sphere = function () {
                        Object(r.F)(e, a)
                    }, i
                }, o.lobes = function (r) {
                    return arguments.length ? (e = function (t) {
                        var n, e, r, i, a, o, s, c = [],
                            u = t[0].length;
                        for (s = 0; s < u; ++s) e = (n = t[0][s])[0][0], r = n[0][1], i = n[1][1], a = n[2][0], o = n[2][1], c.push(D([
                            [e + d, r + d],
                            [e + d, i - d],
                            [a - d, i - d],
                            [a - d, o + d]
                        ], 30));
                        for (s = t[1].length - 1; s >= 0; --s) e = (n = t[1][s])[0][0], r = n[0][1], i = n[1][1], a = n[2][0], o = n[2][1], c.push(D([
                            [a - d, o - d],
                            [a - d, i + d],
                            [e + d, i + d],
                            [e + d, r - d]
                        ], 30));
                        return {
                            type: "Polygon",
                            coordinates: [Object(z.g)(c)]
                        }
                    }(r), n = r.map(function (t) {
                        return t.map(function (t) {
                            return [
                                [t[0][0] * b, t[0][1] * b],
                                [t[1][0] * b, t[1][1] * b],
                                [t[2][0] * b, t[2][1] * b]
                            ]
                        })
                    }), i = n.map(function (n) {
                        return n.map(function (n) {
                            var e, r = t(n[0][0], n[0][1])[0],
                                i = t(n[2][0], n[2][1])[0],
                                a = t(n[1][0], n[0][1])[1],
                                o = t(n[1][0], n[1][1])[1];
                            return a > o && (e = a, a = o, o = e), [
                                [r, a],
                                [i, o]
                            ]
                        })
                    }), o) : n.map(function (t) {
                        return t.map(function (t) {
                            return [
                                [t[0][0] * g, t[0][1] * g],
                                [t[1][0] * g, t[1][1] * g],
                                [t[2][0] * g, t[2][1] * g]
                            ]
                        })
                    })
                }, null != n && o.lobes(n), o
            };

            function B(t) {
                function n(n, e) {
                    if (i(i(e) - y) < d) return [0, e < 0 ? -2 : 2];
                    var r = f(e),
                        a = u((1 + r) / (1 - r), t / 2),
                        s = .5 * (a + 1 / a) + o(n *= t);
                    return [2 * f(n) / s, (a - 1 / a) / s]
                }
                return n.invert = function (n, e) {
                    var r = i(e);
                    if (i(r - 2) < d) return n ? null : [0, l(e) * y];
                    if (r > 2) return null;
                    var o = (n /= 2) * n,
                        s = (e /= 2) * e,
                        c = 2 * e / (1 + o + s);
                    return c = u((1 + c) / (1 - c), 1 / t), [a(2 * n, 1 - o - s) / t, m((c - 1) / (c + 1))]
                }, n
            }
            w(6), w(7);
            var F = [
                [0, 90],
                [-90, 0],
                [0, 0],
                [90, 0],
                [180, 0],
                [0, -90]
            ];
            [
                [0, 2, 1],
                [0, 3, 2],
                [5, 1, 2],
                [5, 2, 3],
                [0, 1, 4],
                [0, 4, 3],
                [5, 4, 1],
                [5, 3, 4]
            ].map(function (t) {
                return t.map(function (t) {
                    return F[t]
                })
            }), w(3);
            var U = function () {},
                W = function (t, n) {
                    var e, r = n.stream;
                    if (!r) throw new Error("invalid projection");
                    switch (t && t.type) {
                        case "Feature":
                            e = V;
                            break;
                        case "FeatureCollection":
                            e = H;
                            break;
                        default:
                            e = X
                    }
                    return e(t, r)
                };

            function H(t, n) {
                return {
                    type: "FeatureCollection",
                    features: t.features.map(function (t) {
                        return V(t, n)
                    })
                }
            }

            function V(t, n) {
                return {
                    type: "Feature",
                    id: t.id,
                    properties: t.properties,
                    geometry: X(t.geometry, n)
                }
            }

            function X(t, n) {
                if (!t) return null;
                if ("GeometryCollection" === t.type) return function (t, n) {
                    return {
                        type: "GeometryCollection",
                        geometries: t.geometries.map(function (t) {
                            return X(t, n)
                        })
                    }
                }(t, n);
                var e;
                switch (t.type) {
                    case "Point":
                    case "MultiPoint":
                        e = $;
                        break;
                    case "LineString":
                    case "MultiLineString":
                        e = J;
                        break;
                    case "Polygon":
                    case "MultiPolygon":
                    case "Sphere":
                        e = Z;
                        break;
                    default:
                        return null
                }
                return Object(r.F)(t, n(e)), e.result()
            }
            var Y = [],
                G = [],
                $ = {
                    point: function (t, n) {
                        Y.push([t, n])
                    },
                    result: function () {
                        var t = Y.length ? Y.length < 2 ? {
                            type: "Point",
                            coordinates: Y[0]
                        } : {
                            type: "MultiPoint",
                            coordinates: Y
                        } : null;
                        return Y = [], t
                    }
                },
                J = {
                    lineStart: U,
                    point: function (t, n) {
                        Y.push([t, n])
                    },
                    lineEnd: function () {
                        Y.length && (G.push(Y), Y = [])
                    },
                    result: function () {
                        var t = G.length ? G.length < 2 ? {
                            type: "LineString",
                            coordinates: G[0]
                        } : {
                            type: "MultiLineString",
                            coordinates: G
                        } : null;
                        return G = [], t
                    }
                },
                Z = {
                    polygonStart: U,
                    lineStart: U,
                    point: function (t, n) {
                        Y.push([t, n])
                    },
                    lineEnd: function () {
                        var t = Y.length;
                        if (t) {
                            do {
                                Y.push(Y[0].slice())
                            } while (++t < 4);
                            G.push(Y), Y = []
                        }
                    },
                    polygonEnd: U,
                    result: function () {
                        if (!G.length) return null;
                        var t = [],
                            n = [];
                        return G.forEach(function (e) {
                            ! function (t) {
                                if ((n = t.length) < 4) return !1;
                                for (var n, e = 0, r = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1]; ++e < n;) r += t[e - 1][1] * t[e][0] - t[e - 1][0] * t[e][1];
                                return r <= 0
                            }(e) ? n.push(e): t.push([e])
                        }), n.forEach(function (n) {
                            var e = n[0];
                            t.some(function (t) {
                                if (function (t, n) {
                                        for (var e = n[0], r = n[1], i = !1, a = 0, o = t.length, s = o - 1; a < o; s = a++) {
                                            var c = t[a],
                                                u = c[0],
                                                l = c[1],
                                                f = t[s],
                                                h = f[0],
                                                d = f[1];
                                            l > r ^ d > r && e < (h - u) * (r - l) / (d - l) + u && (i = !i)
                                        }
                                        return i
                                    }(t[0], e)) return t.push(n), !0
                            }) || t.push([n])
                        }), G = [], t.length ? t.length > 1 ? {
                            type: "MultiPolygon",
                            coordinates: t
                        } : {
                            type: "Polygon",
                            coordinates: t[0]
                        } : null
                    }
                },
                Q = [
                    [.9986, -.062],
                    [1, 0],
                    [.9986, .062],
                    [.9954, .124],
                    [.99, .186],
                    [.9822, .248],
                    [.973, .31],
                    [.96, .372],
                    [.9427, .434],
                    [.9216, .4958],
                    [.8962, .5571],
                    [.8679, .6176],
                    [.835, .6769],
                    [.7986, .7346],
                    [.7597, .7903],
                    [.7186, .8435],
                    [.6732, .8936],
                    [.6213, .9394],
                    [.5722, .9761],
                    [.5322, 1]
                ];
            Q.forEach(function (t) {
                t[1] *= 1.0144
            });
            var K = 4 * p + 3 * w(3),
                tt = 2 * w(2 * p * w(3) / K);
            A(tt * w(3) / p, tt, K / 6), e.d(n, "a", function () {
                return C
            }), e.d(n, "b", function () {
                return R
            }), e.d(n, "c", function () {
                return L
            }), e.d(n, "d", function () {
                return B
            }), e.d(n, "e", function () {
                return O
            }), e.d(n, "f", function () {
                return E
            }), e.d(n, "g", function () {
                return W
            })
        },
        40: function (t, n, e) {
            "use strict";
            var r = function (t) {
                    for (var n, e = -1, r = t.length, i = t[r - 1], a = 0; ++e < r;) n = i, i = t[e], a += n[1] * i[0] - n[0] * i[1];
                    return a / 2
                },
                i = function (t) {
                    for (var n, e, r = -1, i = t.length, a = 0, o = 0, s = t[i - 1], c = 0; ++r < i;) n = s, s = t[r], c += e = n[0] * s[1] - s[0] * n[1], a += (n[0] + s[0]) * e, o += (n[1] + s[1]) * e;
                    return [a / (c *= 3), o / c]
                };
            e.d(n, "a", function () {
                return r
            }), e.d(n, "b", function () {
                return i
            })
        },
        44: function (t, n, e) {
            "use strict";
            var r = "http://www.w3.org/1999/xhtml",
                i = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: r,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                a = function (t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? {
                        space: i[n],
                        local: t
                    } : t
                },
                o = function (t) {
                    var n = a(t);
                    return (n.local ? function (t) {
                        return function () {
                            return this.ownerDocument.createElementNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            var n = this.ownerDocument,
                                e = this.namespaceURI;
                            return e === r && n.documentElement.namespaceURI === r ? n.createElement(t) : n.createElementNS(e, t)
                        }
                    })(n)
                },
                s = 0;

            function c() {
                this._ = "@" + (++s).toString(36)
            }
            c.prototype = function () {
                return new c
            }.prototype = {
                constructor: c,
                get: function (t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function (t, n) {
                    return t[this._] = n
                },
                remove: function (t) {
                    return this._ in t && delete t[this._]
                },
                toString: function () {
                    return this._
                }
            };
            var u = function (t) {
                return function () {
                    return this.matches(t)
                }
            };
            if ("undefined" != typeof document) {
                var l = document.documentElement;
                if (!l.matches) {
                    var f = l.webkitMatchesSelector || l.msMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector;
                    u = function (t) {
                        return function () {
                            return f.call(this, t)
                        }
                    }
                }
            }
            var h = u,
                d = {},
                p = null;

            function y(t, n, e) {
                return t = _(t, n, e),
                    function (n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function _(t, n, e) {
                return function (r) {
                    var i = p;
                    p = r;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        p = i
                    }
                }
            }

            function v(t) {
                return function () {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, a = n.length; r < a; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function g(t, n, e) {
                var r = d.hasOwnProperty(t.type) ? y : _;
                return function (i, a, o) {
                    var s, c = this.__on,
                        u = r(n, a, o);
                    if (c)
                        for (var l = 0, f = c.length; l < f; ++l)
                            if ((s = c[l]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = u, s.capture = e), void(s.value = n);
                    this.addEventListener(t.type, u, e), s = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: u,
                        capture: e
                    }, c ? c.push(s) : this.__on = [s]
                }
            }

            function b(t, n, e, r) {
                var i = p;
                t.sourceEvent = p, p = t;
                try {
                    return n.apply(e, r)
                } finally {
                    p = i
                }
            }
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (d = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));
            var m = function () {
                    for (var t, n = p; t = n.sourceEvent;) n = t;
                    return n
                },
                x = function (t, n) {
                    var e = t.ownerSVGElement || t;
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint();
                        return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                    }
                    var i = t.getBoundingClientRect();
                    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
                },
                w = function (t) {
                    var n = m();
                    return n.changedTouches && (n = n.changedTouches[0]), x(t, n)
                };

            function M() {}
            var k = function (t) {
                return null == t ? M : function () {
                    return this.querySelector(t)
                }
            };

            function S() {
                return []
            }
            var j = function (t) {
                return new Array(t.length)
            };

            function N(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            N.prototype = {
                constructor: N,
                appendChild: function (t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function (t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function (t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function (t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var A = "$";

            function E(t, n, e, r, i, a) {
                for (var o, s = 0, c = n.length, u = a.length; s < u; ++s)(o = n[s]) ? (o.__data__ = a[s], r[s] = o) : e[s] = new N(t, a[s]);
                for (; s < c; ++s)(o = n[s]) && (i[s] = o)
            }

            function O(t, n, e, r, i, a, o) {
                var s, c, u, l = {},
                    f = n.length,
                    h = a.length,
                    d = new Array(f);
                for (s = 0; s < f; ++s)(c = n[s]) && (d[s] = u = A + o.call(c, c.__data__, s, n), u in l ? i[s] = c : l[u] = c);
                for (s = 0; s < h; ++s)(c = l[u = A + o.call(t, a[s], s, a)]) ? (r[s] = c, c.__data__ = a[s], l[u] = null) : e[s] = new N(t, a[s]);
                for (s = 0; s < f; ++s)(c = n[s]) && l[d[s]] === c && (i[s] = c)
            }

            function P(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var T = function (t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function C(t) {
                return t.trim().split(/^|\s+/)
            }

            function R(t) {
                return t.classList || new q(t)
            }

            function q(t) {
                this._node = t, this._names = C(t.getAttribute("class") || "")
            }

            function z(t, n) {
                for (var e = R(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function I(t, n) {
                for (var e = R(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function D() {
                this.textContent = ""
            }

            function L() {
                this.innerHTML = ""
            }

            function B() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function F() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function U() {
                return null
            }

            function W() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function H(t, n, e) {
                var r = T(t),
                    i = r.CustomEvent;
                i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }
            q.prototype = {
                add: function (t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function (t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function (t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var V = [null];

            function X(t, n) {
                this._groups = t, this._parents = n
            }
            X.prototype = function () {
                return new X([
                    [document.documentElement]
                ], V)
            }.prototype = {
                constructor: X,
                select: function (t) {
                    "function" != typeof t && (t = k(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var a, o, s = n[i], c = s.length, u = r[i] = new Array(c), l = 0; l < c; ++l)(a = s[l]) && (o = t.call(a, a.__data__, l, s)) && ("__data__" in a && (o.__data__ = a.__data__), u[l] = o);
                    return new X(r, this._parents)
                },
                selectAll: function (t) {
                    "function" != typeof t && (t = function (t) {
                        return null == t ? S : function () {
                            return this.querySelectorAll(t)
                        }
                    }(t));
                    for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
                        for (var o, s = n[a], c = s.length, u = 0; u < c; ++u)(o = s[u]) && (r.push(t.call(o, o.__data__, u, s)), i.push(o));
                    return new X(r, i)
                },
                filter: function (t) {
                    "function" != typeof t && (t = h(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var a, o = n[i], s = o.length, c = r[i] = [], u = 0; u < s; ++u)(a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
                    return new X(r, this._parents)
                },
                data: function (t, n) {
                    if (!t) return d = new Array(this.size()), u = -1, this.each(function (t) {
                        d[++u] = t
                    }), d;
                    var e = n ? O : E,
                        r = this._parents,
                        i = this._groups;
                    "function" != typeof t && (t = function (t) {
                        return function () {
                            return t
                        }
                    }(t));
                    for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
                        var l = r[u],
                            f = i[u],
                            h = f.length,
                            d = t.call(l, l && l.__data__, u, r),
                            p = d.length,
                            y = s[u] = new Array(p),
                            _ = o[u] = new Array(p);
                        e(l, f, y, _, c[u] = new Array(h), d, n);
                        for (var v, g, b = 0, m = 0; b < p; ++b)
                            if (v = y[b]) {
                                for (b >= m && (m = b + 1); !(g = _[m]) && ++m < p;);
                                v._next = g || null
                            }
                    }
                    return (o = new X(o, r))._enter = s, o._exit = c, o
                },
                enter: function () {
                    return new X(this._enter || this._groups.map(j), this._parents)
                },
                exit: function () {
                    return new X(this._exit || this._groups.map(j), this._parents)
                },
                merge: function (t) {
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
                        for (var c, u = n[s], l = e[s], f = u.length, h = o[s] = new Array(f), d = 0; d < f; ++d)(c = u[d] || l[d]) && (h[d] = c);
                    for (; s < r; ++s) o[s] = n[s];
                    return new X(o, this._parents)
                },
                order: function () {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
                    return this
                },
                sort: function (t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = P);
                    for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
                        for (var o, s = e[a], c = s.length, u = i[a] = new Array(c), l = 0; l < c; ++l)(o = s[l]) && (u[l] = o);
                        u.sort(n)
                    }
                    return new X(i, this._parents).order()
                },
                call: function () {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function () {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each(function () {
                        t[++n] = this
                    }), t
                },
                node: function () {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                            var o = r[i];
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
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, a = n[e], o = 0, s = a.length; o < s; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
                    return this
                },
                attr: function (t, n) {
                    var e = a(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? function (t) {
                        return function () {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof n ? e.local ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                        }
                    } : e.local ? function (t, n) {
                        return function () {
                            this.setAttributeNS(t.space, t.local, n)
                        }
                    } : function (t, n) {
                        return function () {
                            this.setAttribute(t, n)
                        }
                    })(e, n))
                },
                style: function (t, n, e) {
                    var r;
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof n ? function (t, n, e) {
                        return function () {
                            var r = n.apply(this, arguments);
                            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                        }
                    } : function (t, n, e) {
                        return function () {
                            this.style.setProperty(t, n, e)
                        }
                    })(t, n, null == e ? "" : e)) : T(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
                },
                property: function (t, n) {
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            delete this[t]
                        }
                    } : "function" == typeof n ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? delete this[t] : this[t] = e
                        }
                    } : function (t, n) {
                        return function () {
                            this[t] = n
                        }
                    })(t, n)) : this.node()[t]
                },
                classed: function (t, n) {
                    var e = C(t + "");
                    if (arguments.length < 2) {
                        for (var r = R(this.node()), i = -1, a = e.length; ++i < a;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            (n.apply(this, arguments) ? z : I)(this, t)
                        }
                    } : n ? function (t) {
                        return function () {
                            z(this, t)
                        }
                    } : function (t) {
                        return function () {
                            I(this, t)
                        }
                    })(e, n))
                },
                text: function (t) {
                    return arguments.length ? this.each(null == t ? D : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function (t) {
                    return arguments.length ? this.each(null == t ? L : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function () {
                    return this.each(B)
                },
                lower: function () {
                    return this.each(F)
                },
                append: function (t) {
                    var n = "function" == typeof t ? t : o(t);
                    return this.select(function () {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function (t, n) {
                    var e = "function" == typeof t ? t : o(t),
                        r = null == n ? U : "function" == typeof n ? n : k(n);
                    return this.select(function () {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    })
                },
                remove: function () {
                    return this.each(W)
                },
                datum: function (t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function (t, n, e) {
                    var r, i, a = function (t) {
                            return t.trim().split(/^|\s+/).map(function (t) {
                                var n = "",
                                    e = t.indexOf(".");
                                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                    type: t,
                                    name: n
                                }
                            })
                        }(t + ""),
                        o = a.length;
                    if (!(arguments.length < 2)) {
                        for (s = n ? g : v, null == e && (e = !1), r = 0; r < o; ++r) this.each(s(a[r], n, e));
                        return this
                    }
                    var s = this.node().__on;
                    if (s)
                        for (var c, u = 0, l = s.length; u < l; ++u)
                            for (r = 0, c = s[u]; r < o; ++r)
                                if ((i = a[r]).type === c.type && i.name === c.name) return c.value
                },
                dispatch: function (t, n) {
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            return H(this, t, n.apply(this, arguments))
                        }
                    } : function (t, n) {
                        return function () {
                            return H(this, t, n)
                        }
                    })(t, n))
                }
            };
            var Y = function (t) {
                    return "string" == typeof t ? new X([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new X([
                        [t]
                    ], V)
                },
                G = function (t, n, e) {
                    arguments.length < 3 && (e = n, n = m().changedTouches);
                    for (var r, i = 0, a = n ? n.length : 0; i < a; ++i)
                        if ((r = n[i]).identifier === e) return x(t, r);
                    return null
                },
                $ = {
                    value: function () {}
                };

            function J() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new Z(r)
            }

            function Z(t) {
                this._ = t
            }

            function Q(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }

            function K(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        t[r] = $, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            Z.prototype = J.prototype = {
                constructor: Z,
                on: function (t, n) {
                    var e, r = this._,
                        i = function (t, n) {
                            return t.trim().split(/^|\s+/).map(function (t) {
                                var e = "",
                                    r = t.indexOf(".");
                                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                                return {
                                    type: t,
                                    name: e
                                }
                            })
                        }(t + "", r),
                        a = -1,
                        o = i.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++a < o;)
                            if (e = (t = i[a]).type) r[e] = K(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = K(r[e], t.name, null);
                        return this
                    }
                    for (; ++a < o;)
                        if ((e = (t = i[a]).type) && (e = Q(r[e], t.name))) return e
                },
                copy: function () {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new Z(t)
                },
                call: function (t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
                },
                apply: function (t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
                }
            };
            var tt = J;

            function nt() {
                p.stopImmediatePropagation()
            }
            var et = function () {
                    p.preventDefault(), p.stopImmediatePropagation()
                },
                rt = function (t) {
                    var n = t.document.documentElement,
                        e = Y(t).on("dragstart.drag", et, !0);
                    "onselectstart" in n ? e.on("selectstart.drag", et, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                },
                it = function (t) {
                    return function () {
                        return t
                    }
                };

            function at(t, n, e, r, i, a, o, s, c, u) {
                this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = a, this.y = o, this.dx = s, this.dy = c, this._ = u
            }

            function ot() {
                return !p.button
            }

            function st() {
                return this.parentNode
            }

            function ct(t) {
                return null == t ? {
                    x: p.x,
                    y: p.y
                } : t
            }
            at.prototype.on = function () {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var ut = function () {
                    var t, n, e = ot,
                        r = st,
                        i = ct,
                        a = {},
                        o = tt("start", "drag", "end"),
                        s = 0;

                    function c(t) {
                        t.on("mousedown.drag", u).on("touchstart.drag", h).on("touchmove.drag", d).on("touchend.drag touchcancel.drag", y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                    }

                    function u() {
                        if (!n && e.apply(this, arguments)) {
                            var i = _("mouse", r.apply(this, arguments), w, this, arguments);
                            i && (Y(p.view).on("mousemove.drag", l, !0).on("mouseup.drag", f, !0), rt(p.view), nt(), t = !1, i("start"))
                        }
                    }

                    function l() {
                        et(), t = !0, a.mouse("drag")
                    }

                    function f() {
                        Y(p.view).on("mousemove.drag mouseup.drag", null),
                            function (t, n) {
                                var e = t.document.documentElement,
                                    r = Y(t).on("dragstart.drag", null);
                                n && (r.on("click.drag", et, !0), setTimeout(function () {
                                    r.on("click.drag", null)
                                }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
                            }(p.view, t), et(), a.mouse("end")
                    }

                    function h() {
                        if (e.apply(this, arguments)) {
                            var t, n, i = p.changedTouches,
                                a = r.apply(this, arguments),
                                o = i.length;
                            for (t = 0; t < o; ++t)(n = _(i[t].identifier, a, G, this, arguments)) && (nt(), n("start"))
                        }
                    }

                    function d() {
                        var t, n, e = p.changedTouches,
                            r = e.length;
                        for (t = 0; t < r; ++t)(n = a[e[t].identifier]) && (et(), n("drag"))
                    }

                    function y() {
                        var t, e, r = p.changedTouches,
                            i = r.length;
                        for (n && clearTimeout(n), n = setTimeout(function () {
                                n = null
                            }, 500), t = 0; t < i; ++t)(e = a[r[t].identifier]) && (nt(), e("end"))
                    }

                    function _(t, n, e, r, u) {
                        var l, f, h, d = e(n, t),
                            y = o.copy();
                        if (b(new at(c, "beforestart", l, t, s, d[0], d[1], 0, 0, y), function () {
                                return null != (p.subject = l = i.apply(r, u)) && (f = l.x - d[0] || 0, h = l.y - d[1] || 0, !0)
                            })) return function i(o) {
                            var p, _ = d;
                            switch (o) {
                                case "start":
                                    a[t] = i, p = s++;
                                    break;
                                case "end":
                                    delete a[t], --s;
                                case "drag":
                                    d = e(n, t), p = s
                            }
                            b(new at(c, o, l, t, p, d[0] + f, d[1] + h, d[0] - _[0], d[1] - _[1], y), y.apply, y, [o, r, u])
                        }
                    }
                    return c.filter = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : it(!!t), c) : e
                    }, c.container = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : it(t), c) : r
                    }, c.subject = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : it(t), c) : i
                    }, c.on = function () {
                        var t = o.on.apply(o, arguments);
                        return t === o ? c : t
                    }, c
                },
                lt = e(10),
                ft = function (t) {
                    return function () {
                        return t
                    }
                },
                ht = 1e-12,
                dt = Math.PI,
                pt = dt / 2,
                yt = 2 * dt;

            function _t(t) {
                return t.innerRadius
            }

            function vt(t) {
                return t.outerRadius
            }

            function gt(t) {
                return t.startAngle
            }

            function bt(t) {
                return t.endAngle
            }

            function mt(t) {
                return t && t.padAngle
            }

            function xt(t) {
                return t >= 1 ? pt : t <= -1 ? -pt : Math.asin(t)
            }

            function wt(t, n, e, r, i, a, o) {
                var s = t - e,
                    c = n - r,
                    u = (o ? a : -a) / Math.sqrt(s * s + c * c),
                    l = u * c,
                    f = -u * s,
                    h = t + l,
                    d = n + f,
                    p = e + l,
                    y = r + f,
                    _ = (h + p) / 2,
                    v = (d + y) / 2,
                    g = p - h,
                    b = y - d,
                    m = g * g + b * b,
                    x = i - a,
                    w = h * y - p * d,
                    M = (b < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * m - w * w)),
                    k = (w * b - g * M) / m,
                    S = (-w * g - b * M) / m,
                    j = (w * b + g * M) / m,
                    N = (-w * g + b * M) / m,
                    A = k - _,
                    E = S - v,
                    O = j - _,
                    P = N - v;
                return A * A + E * E > O * O + P * P && (k = j, S = N), {
                    cx: k,
                    cy: S,
                    x01: -l,
                    y01: -f,
                    x11: k * (i / x - 1),
                    y11: S * (i / x - 1)
                }
            }

            function Mt(t) {
                this._context = t
            }
            Mt.prototype = {
                areaStart: function () {
                    this._line = 0
                },
                areaEnd: function () {
                    this._line = NaN
                },
                lineStart: function () {
                    this._point = 0
                },
                lineEnd: function () {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, n)
                    }
                }
            };
            var kt = function (t) {
                return new Mt(t)
            };

            function St(t) {
                return t[0]
            }

            function jt(t) {
                return t[1]
            }

            function Nt(t) {
                this._curve = t
            }! function (t) {
                function n(n) {
                    return new Nt(t(n))
                }
                n._curve = t
            }(kt), Nt.prototype = {
                areaStart: function () {
                    this._curve.areaStart()
                },
                areaEnd: function () {
                    this._curve.areaEnd()
                },
                lineStart: function () {
                    this._curve.lineStart()
                },
                lineEnd: function () {
                    this._curve.lineEnd()
                },
                point: function (t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                }
            }, Math.sqrt(1 / 3);
            Math.sin(dt / 10), Math.sin(7 * dt / 10);
            var At = (Math.sin(yt / 10), Math.cos(yt / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function () {});

            function Et(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function Ot(t) {
                this._context = t
            }

            function Pt(t, n) {
                this._basis = new Ot(t), this._beta = n
            }

            function Tt(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function Ct(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function Rt(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function qt(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function zt(t, n, e) {
                var r = t._x1,
                    i = t._y1,
                    a = t._x2,
                    o = t._y2;
                if (t._l01_a > ht) {
                    var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    r = (r * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
                }
                if (t._l23_a > ht) {
                    var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / l, o = (o * u + t._y1 * t._l23_2a - e * t._l12_2a) / l
                }
                t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
            }

            function It(t, n) {
                this._context = t, this._alpha = n
            }
            Ot.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 3:
                                Et(this, this._x1, this._y1);
                            case 2:
                                this._context.lineTo(this._x1, this._y1)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                            default:
                                Et(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                    }
                }, Pt.prototype = {
                    lineStart: function () {
                        this._x = [], this._y = [], this._basis.lineStart()
                    },
                    lineEnd: function () {
                        var t = this._x,
                            n = this._y,
                            e = t.length - 1;
                        if (e > 0)
                            for (var r, i = t[0], a = n[0], o = t[e] - i, s = n[e] - a, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * o), this._beta * n[c] + (1 - this._beta) * (a + r * s));
                        this._x = this._y = null, this._basis.lineEnd()
                    },
                    point: function (t, n) {
                        this._x.push(+t), this._y.push(+n)
                    }
                },
                function t(n) {
                    function e(t) {
                        return 1 === n ? new Ot(t) : new Pt(t, n)
                    }
                    return e.beta = function (n) {
                        return t(+n)
                    }, e
                }(.85), Ct.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                Tt(this, this._x1, this._y1)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2, this._x1 = t, this._y1 = n;
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                Tt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                },
                function t(n) {
                    function e(t) {
                        return new Ct(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0), Rt.prototype = {
                    areaStart: At,
                    areaEnd: At,
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                        }
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._x3 = t, this._y3 = n;
                                break;
                            case 1:
                                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                                break;
                            case 2:
                                this._point = 3, this._x5 = t, this._y5 = n;
                                break;
                            default:
                                Tt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                },
                function t(n) {
                    function e(t) {
                        return new Rt(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0), qt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                Tt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                },
                function t(n) {
                    function e(t) {
                        return new qt(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0), It.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                this.point(this._x2, this._y2)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                zt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
            var Dt = function t(n) {
                function e(t) {
                    return n ? new It(t, n) : new Ct(t, 0)
                }
                return e.alpha = function (n) {
                    return t(+n)
                }, e
            }(.5);

            function Lt(t, n) {
                this._context = t, this._alpha = n
            }

            function Bt(t, n) {
                this._context = t, this._alpha = n
            }

            function Ft(t) {
                return t < 0 ? -1 : 1
            }

            function Ut(t, n, e) {
                var r = t._x1 - t._x0,
                    i = n - t._x1,
                    a = (t._y1 - t._y0) / (r || i < 0 && -0),
                    o = (e - t._y1) / (i || r < 0 && -0),
                    s = (a * i + o * r) / (r + i);
                return (Ft(a) + Ft(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0
            }

            function Wt(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function Ht(t, n, e) {
                var r = t._x0,
                    i = t._y0,
                    a = t._x1,
                    o = t._y1,
                    s = (a - r) / 3;
                t._context.bezierCurveTo(r + s, i + s * n, a - s, o - s * e, a, o)
            }

            function Vt(t) {
                this._context = t
            }

            function Xt(t) {
                this._context = t
            }
            Lt.prototype = {
                    areaStart: At,
                    areaEnd: At,
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                        }
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._x3 = t, this._y3 = n;
                                break;
                            case 1:
                                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                                break;
                            case 2:
                                this._point = 3, this._x5 = t, this._y5 = n;
                                break;
                            default:
                                zt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                },
                function t(n) {
                    function e(t) {
                        return n ? new Lt(t, n) : new Rt(t, 0)
                    }
                    return e.alpha = function (n) {
                        return t(+n)
                    }, e
                }(.5), Bt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                zt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                },
                function t(n) {
                    function e(t) {
                        return n ? new Bt(t, n) : new qt(t, 0)
                    }
                    return e.alpha = function (n) {
                        return t(+n)
                    }, e
                }(.5), Vt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x1, this._y1);
                                break;
                            case 3:
                                Ht(this, this._t0, Wt(this, this._t0))
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        var e = NaN;
                        if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                            switch (this._point) {
                                case 0:
                                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                    break;
                                case 1:
                                    this._point = 2;
                                    break;
                                case 2:
                                    this._point = 3, Ht(this, Wt(this, e = Ut(this, t, n)), e);
                                    break;
                                default:
                                    Ht(this, this._t0, e = Ut(this, t, n))
                            }
                            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                        }
                    }
                }, (function (t) {
                    this._context = new Xt(t)
                }.prototype = Object.create(Vt.prototype)).point = function (t, n) {
                    Vt.prototype.point.call(this, n, t)
                }, Xt.prototype = {
                    moveTo: function (t, n) {
                        this._context.moveTo(n, t)
                    },
                    closePath: function () {
                        this._context.closePath()
                    },
                    lineTo: function (t, n) {
                        this._context.lineTo(n, t)
                    },
                    bezierCurveTo: function (t, n, e, r, i, a) {
                        this._context.bezierCurveTo(n, t, r, e, a, i)
                    }
                }, Array.prototype.slice, e.d(n, "a", function () {
                    return wn
                }), e.d(n, "c", function () {
                    return yn
                }), e.d(n, "b", function () {
                    return vn
                });
            var Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                Gt = function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                },
                $t = function () {
                    function t(t, n) {
                        for (var e = 0; e < n.length; e++) {
                            var r = n[e];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function (n, e, r) {
                        return e && t(n.prototype, e), r && t(n, r), n
                    }
                }(),
                Jt = Object.assign || function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }
                    return t
                },
                Zt = function t(n, e, r) {
                    null === n && (n = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(n, e);
                    if (void 0 === i) {
                        var a = Object.getPrototypeOf(n);
                        return null === a ? void 0 : t(a, e, r)
                    }
                    if ("value" in i) return i.value;
                    var o = i.get;
                    return void 0 !== o ? o.call(r) : void 0
                },
                Qt = function (t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
                },
                Kt = function (t, n) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !n || "object" != typeof n && "function" != typeof n ? t : n
                },
                tn = function () {
                    function t(n) {
                        var e = n.x,
                            r = void 0 === e ? 0 : e,
                            i = n.y,
                            a = void 0 === i ? 0 : i,
                            o = n.nx,
                            s = n.ny,
                            c = n.dy,
                            u = void 0 === c ? 0 : c,
                            l = n.dx,
                            f = void 0 === l ? 0 : l,
                            h = n.color,
                            d = void 0 === h ? "grey" : h,
                            p = n.data,
                            y = n.type,
                            _ = n.subject,
                            v = n.connector,
                            g = n.note,
                            b = n.disable,
                            m = n.id,
                            x = n.className;
                        Gt(this, t), this._dx = void 0 !== o ? o - r : f, this._dy = void 0 !== s ? s - a : u, this._x = r, this._y = a, this._color = d, this.id = m, this._className = x || "", this._type = y || "", this.data = p, this.note = g || {}, this.connector = v || {}, this.subject = _ || {}, this.disable = b || []
                    }
                    return $t(t, [{
                        key: "updatePosition",
                        value: function () {
                            this.type.setPosition && (this.type.setPosition(), this.type.subject && 0 !== this.type.subject.selectAll(":not(.handle)").nodes().length && this.type.redrawSubject())
                        }
                    }, {
                        key: "clearComponents",
                        value: function () {
                            this.type.clearComponents && this.type.clearComponents()
                        }
                    }, {
                        key: "updateOffset",
                        value: function () {
                            this.type.setOffset && (this.type.setOffset(), 0 !== this.type.connector.selectAll(":not(.handle)").nodes().length && this.type.redrawConnector(), this.type.redrawNote())
                        }
                    }, {
                        key: "className",
                        get: function () {
                            return this._className
                        },
                        set: function (t) {
                            this._className = t, this.type.setClassName && this.type.setClassName()
                        }
                    }, {
                        key: "type",
                        get: function () {
                            return this._type
                        },
                        set: function (t) {
                            this._type = t, this.clearComponents()
                        }
                    }, {
                        key: "x",
                        get: function () {
                            return this._x
                        },
                        set: function (t) {
                            this._x = t, this.updatePosition()
                        }
                    }, {
                        key: "y",
                        get: function () {
                            return this._y
                        },
                        set: function (t) {
                            this._y = t, this.updatePosition()
                        }
                    }, {
                        key: "color",
                        get: function () {
                            return this._color
                        },
                        set: function (t) {
                            this._color = t, this.updatePosition()
                        }
                    }, {
                        key: "dx",
                        get: function () {
                            return this._dx
                        },
                        set: function (t) {
                            this._dx = t, this.updateOffset()
                        }
                    }, {
                        key: "dy",
                        get: function () {
                            return this._dy
                        },
                        set: function (t) {
                            this._dy = t, this.updateOffset()
                        }
                    }, {
                        key: "nx",
                        set: function (t) {
                            this._dx = t - this._x, this.updateOffset()
                        }
                    }, {
                        key: "ny",
                        set: function (t) {
                            this._dy = t - this._y, this.updateOffset()
                        }
                    }, {
                        key: "offset",
                        get: function () {
                            return {
                                x: this._dx,
                                y: this._dy
                            }
                        },
                        set: function (t) {
                            var n = t.x,
                                e = t.y;
                            this._dx = n, this._dy = e, this.updateOffset()
                        }
                    }, {
                        key: "position",
                        get: function () {
                            return {
                                x: this._x,
                                y: this._y
                            }
                        },
                        set: function (t) {
                            var n = t.x,
                                e = t.y;
                            this._x = n, this._y = e, this.updatePosition()
                        }
                    }, {
                        key: "translation",
                        get: function () {
                            return {
                                x: this._x + this._dx,
                                y: this._y + this._dy
                            }
                        }
                    }, {
                        key: "json",
                        get: function () {
                            var t = {
                                x: this._x,
                                y: this._y,
                                dx: this._dx,
                                dy: this._dy
                            };
                            return this.data && Object.keys(this.data).length > 0 && (t.data = this.data), this.type && (t.type = this.type), this._className && (t.className = this._className), Object.keys(this.connector).length > 0 && (t.connector = this.connector), Object.keys(this.subject).length > 0 && (t.subject = this.subject), Object.keys(this.note).length > 0 && (t.note = this.note), t
                        }
                    }]), t
                }(),
                nn = function () {
                    function t(n) {
                        var e = n.annotations,
                            r = n.accessors,
                            i = n.accessorsInverse;
                        Gt(this, t), this.accessors = r, this.accessorsInverse = i, this.annotations = e
                    }
                    return $t(t, [{
                        key: "clearTypes",
                        value: function (t) {
                            this.annotations.forEach(function (n) {
                                n.type = void 0, n.subject = t && t.subject || n.subject, n.connector = t && t.connector || n.connector, n.note = t && t.note || n.note
                            })
                        }
                    }, {
                        key: "setPositionWithAccessors",
                        value: function () {
                            var t = this;
                            this.annotations.forEach(function (n) {
                                n.type.setPositionWithAccessors(t.accessors)
                            })
                        }
                    }, {
                        key: "editMode",
                        value: function (t) {
                            this.annotations.forEach(function (n) {
                                n.type && (n.type.editMode = t, n.type.updateEditMode())
                            })
                        }
                    }, {
                        key: "updateDisable",
                        value: function (t) {
                            this.annotations.forEach(function (n) {
                                n.disable = t, n.type && t.forEach(function (t) {
                                    n.type[t] && (n.type[t].remove && n.type[t].remove(), n.type[t] = void 0)
                                })
                            })
                        }
                    }, {
                        key: "updateTextWrap",
                        value: function (t) {
                            this.annotations.forEach(function (n) {
                                n.type && n.type.updateTextWrap && n.type.updateTextWrap(t)
                            })
                        }
                    }, {
                        key: "updateText",
                        value: function () {
                            this.annotations.forEach(function (t) {
                                t.type && t.type.drawText && t.type.drawText()
                            })
                        }
                    }, {
                        key: "updateNotePadding",
                        value: function (t) {
                            this.annotations.forEach(function (n) {
                                n.type && (n.type.notePadding = t)
                            })
                        }
                    }, {
                        key: "json",
                        get: function () {
                            var t = this;
                            return this.annotations.map(function (n) {
                                var e = n.json;
                                return t.accessorsInverse && n.data && (e.data = {}, Object.keys(t.accessorsInverse).forEach(function (r) {
                                    e.data[r] = t.accessorsInverse[r]({
                                        x: n.x,
                                        y: n.y
                                    })
                                })), e
                            })
                        }
                    }, {
                        key: "noteNodes",
                        get: function () {
                            return this.annotations.map(function (t) {
                                return Jt({}, t.type.getNoteBBoxOffset(), {
                                    positionX: t.x,
                                    positionY: t.y
                                })
                            })
                        }
                    }]), t
                }(),
                en = function (t, n) {
                    return "dynamic" !== t && "left" !== t && "right" !== t || (t = n < 0 ? "top" : "bottom"), t
                },
                rn = function (t, n) {
                    return "dynamic" !== t && "top" !== t && "bottom" !== t || (t = n < 0 ? "right" : "left"), t
                },
                an = ["topBottom", "top", "bottom"],
                on = ["leftRight", "left", "right"],
                sn = function (t) {
                    var n = t.data,
                        e = t.curve,
                        r = void 0 === e ? kt : e,
                        i = t.canvasContext,
                        a = t.className,
                        o = t.classID,
                        s = function () {
                            var t = St,
                                n = jt,
                                e = ft(!0),
                                r = null,
                                i = kt,
                                a = null;

                            function o(o) {
                                var s, c, u, l = o.length,
                                    f = !1;
                                for (null == r && (a = i(u = Object(lt.a)())), s = 0; s <= l; ++s) !(s < l && e(c = o[s], s, o)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(c, s, o), +n(c, s, o));
                                if (u) return a = null, u + "" || null
                            }
                            return o.x = function (n) {
                                return arguments.length ? (t = "function" == typeof n ? n : ft(+n), o) : t
                            }, o.y = function (t) {
                                return arguments.length ? (n = "function" == typeof t ? t : ft(+t), o) : n
                            }, o.defined = function (t) {
                                return arguments.length ? (e = "function" == typeof t ? t : ft(!!t), o) : e
                            }, o.curve = function (t) {
                                return arguments.length ? (i = t, null != r && (a = i(r)), o) : i
                            }, o.context = function (t) {
                                return arguments.length ? (null == t ? r = a = null : a = i(r = t), o) : r
                            }, o
                        }().curve(r),
                        c = {
                            type: "path",
                            className: a,
                            classID: o,
                            data: n
                        };
                    return i ? (s.context(i), c.pathMethods = s) : c.attrs = {
                        d: s(n)
                    }, c
                },
                cn = function (t) {
                    var n = t.data,
                        e = t.canvasContext,
                        r = {
                            type: "path",
                            className: t.className,
                            classID: t.classID,
                            data: n
                        },
                        i = function () {
                            var t = _t,
                                n = vt,
                                e = ft(0),
                                r = null,
                                i = gt,
                                a = bt,
                                o = mt,
                                s = null;

                            function c() {
                                var c, u, l = +t.apply(this, arguments),
                                    f = +n.apply(this, arguments),
                                    h = i.apply(this, arguments) - pt,
                                    d = a.apply(this, arguments) - pt,
                                    p = Math.abs(d - h),
                                    y = d > h;
                                if (s || (s = c = Object(lt.a)()), f < l && (u = f, f = l, l = u), f > ht)
                                    if (p > yt - ht) s.moveTo(f * Math.cos(h), f * Math.sin(h)), s.arc(0, 0, f, h, d, !y), l > ht && (s.moveTo(l * Math.cos(d), l * Math.sin(d)), s.arc(0, 0, l, d, h, y));
                                    else {
                                        var _, v, g = h,
                                            b = d,
                                            m = h,
                                            x = d,
                                            w = p,
                                            M = p,
                                            k = o.apply(this, arguments) / 2,
                                            S = k > ht && (r ? +r.apply(this, arguments) : Math.sqrt(l * l + f * f)),
                                            j = Math.min(Math.abs(f - l) / 2, +e.apply(this, arguments)),
                                            N = j,
                                            A = j;
                                        if (S > ht) {
                                            var E = xt(S / l * Math.sin(k)),
                                                O = xt(S / f * Math.sin(k));
                                            (w -= 2 * E) > ht ? (m += E *= y ? 1 : -1, x -= E) : (w = 0, m = x = (h + d) / 2), (M -= 2 * O) > ht ? (g += O *= y ? 1 : -1, b -= O) : (M = 0, g = b = (h + d) / 2)
                                        }
                                        var P = f * Math.cos(g),
                                            T = f * Math.sin(g),
                                            C = l * Math.cos(x),
                                            R = l * Math.sin(x);
                                        if (j > ht) {
                                            var q = f * Math.cos(b),
                                                z = f * Math.sin(b),
                                                I = l * Math.cos(m),
                                                D = l * Math.sin(m);
                                            if (p < dt) {
                                                var L = w > ht ? function (t, n, e, r, i, a, o, s) {
                                                        var c = I - P,
                                                            u = D - T,
                                                            l = C - q,
                                                            f = R - z,
                                                            h = (l * (T - z) - f * (P - q)) / (f * c - l * u);
                                                        return [P + h * c, T + h * u]
                                                    }() : [C, R],
                                                    B = P - L[0],
                                                    F = T - L[1],
                                                    U = q - L[0],
                                                    W = z - L[1],
                                                    H = 1 / Math.sin(Math.acos((B * U + F * W) / (Math.sqrt(B * B + F * F) * Math.sqrt(U * U + W * W))) / 2),
                                                    V = Math.sqrt(L[0] * L[0] + L[1] * L[1]);
                                                N = Math.min(j, (l - V) / (H - 1)), A = Math.min(j, (f - V) / (H + 1))
                                            }
                                        }
                                        M > ht ? A > ht ? (_ = wt(I, D, P, T, f, A, y), v = wt(q, z, C, R, f, A, y), s.moveTo(_.cx + _.x01, _.cy + _.y01), A < j ? s.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(v.y01, v.x01), !y) : (s.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !y), s.arc(0, 0, f, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(v.cy + v.y11, v.cx + v.x11), !y), s.arc(v.cx, v.cy, A, Math.atan2(v.y11, v.x11), Math.atan2(v.y01, v.x01), !y))) : (s.moveTo(P, T), s.arc(0, 0, f, g, b, !y)) : s.moveTo(P, T), l > ht && w > ht ? N > ht ? (_ = wt(C, R, q, z, l, -N, y), v = wt(P, T, I, D, l, -N, y), s.lineTo(_.cx + _.x01, _.cy + _.y01), N < j ? s.arc(_.cx, _.cy, N, Math.atan2(_.y01, _.x01), Math.atan2(v.y01, v.x01), !y) : (s.arc(_.cx, _.cy, N, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !y), s.arc(0, 0, l, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(v.cy + v.y11, v.cx + v.x11), y), s.arc(v.cx, v.cy, N, Math.atan2(v.y11, v.x11), Math.atan2(v.y01, v.x01), !y))) : s.arc(0, 0, l, x, m, y) : s.lineTo(C, R)
                                    }
                                else s.moveTo(0, 0);
                                if (s.closePath(), c) return s = null, c + "" || null
                            }
                            return c.centroid = function () {
                                var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                                    r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - dt / 2;
                                return [Math.cos(r) * e, Math.sin(r) * e]
                            }, c.innerRadius = function (n) {
                                return arguments.length ? (t = "function" == typeof n ? n : ft(+n), c) : t
                            }, c.outerRadius = function (t) {
                                return arguments.length ? (n = "function" == typeof t ? t : ft(+t), c) : n
                            }, c.cornerRadius = function (t) {
                                return arguments.length ? (e = "function" == typeof t ? t : ft(+t), c) : e
                            }, c.padRadius = function (t) {
                                return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : ft(+t), c) : r
                            }, c.startAngle = function (t) {
                                return arguments.length ? (i = "function" == typeof t ? t : ft(+t), c) : i
                            }, c.endAngle = function (t) {
                                return arguments.length ? (a = "function" == typeof t ? t : ft(+t), c) : a
                            }, c.padAngle = function (t) {
                                return arguments.length ? (o = "function" == typeof t ? t : ft(+t), c) : o
                            }, c.context = function (t) {
                                return arguments.length ? (s = null == t ? null : t, c) : s
                            }, c
                        }().innerRadius(n.innerRadius || 0).outerRadius(n.outerRadius || n.radius || 2).startAngle(n.startAngle || 0).endAngle(n.endAngle || 2 * Math.PI);
                    return e ? (i.context(e), r.pathMethods = lineGen) : r.attrs = {
                        d: i()
                    }, r
                },
                un = function (t) {
                    var n = t.type,
                        e = t.subjectType,
                        r = n.annotation,
                        i = r.position,
                        a = r.x - i.x,
                        o = a + r.dx,
                        s = r.y - i.y,
                        c = s + r.dy,
                        u = r.subject;
                    if ("circle" === e && (u.outerRadius || u.radius)) {
                        var l = Math.sqrt((a - o) * (a - o) + (s - c) * (s - c)),
                            f = Math.asin(-c / l),
                            h = u.outerRadius || u.radius + (u.radiusPadding || 0);
                        a = Math.abs(Math.cos(f) * h) * (o < 0 ? -1 : 1), s = Math.abs(Math.sin(f) * h) * (c < 0 ? -1 : 1)
                    }
                    if ("rect" === e) {
                        var d = u.width,
                            p = u.height;
                        (d > 0 && r.dx > 0 || d < 0 && r.dx < 0) && (a = Math.abs(d) > Math.abs(r.dx) ? d / 2 : d), (p > 0 && r.dy > 0 || p < 0 && r.dy < 0) && (s = Math.abs(p) > Math.abs(r.dy) ? p / 2 : p), a === d / 2 && s === p / 2 && (a = o, s = c)
                    }
                    return [
                        [a, s],
                        [o, c]
                    ]
                },
                ln = function (t) {
                    var n = t.type,
                        e = t.connectorData,
                        r = t.subjectType;
                    e || (e = {}), e.points && "number" != typeof e.points || (e.points = fn(n.annotation.offset, e.points)), e.curve || (e.curve = Dt);
                    var i = [];
                    if (n.editMode) {
                        var a = e.points.map(function (t, n) {
                            return Jt({}, function (t) {
                                var n = t.cx,
                                    e = t.cy;
                                return {
                                    move: {
                                        x: void 0 === n ? 0 : n,
                                        y: void 0 === e ? 0 : e
                                    }
                                }
                            }({
                                cx: t[0],
                                cy: t[1]
                            }), {
                                index: n
                            })
                        });
                        i = n.mapHandles(a.map(function (t) {
                            return Jt({}, t.move, {
                                drag: function (t) {
                                    e.points[t][0] += p.dx, e.points[t][1] += p.dy, n.redrawConnector()
                                }.bind(n, t.index)
                            })
                        }))
                    }
                    var o = un({
                        type: n,
                        subjectType: r
                    });
                    return o = [o[0]].concat(function (t) {
                        if (Array.isArray(t)) {
                            for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                            return e
                        }
                        return Array.from(t)
                    }(e.points), [o[1]]), {
                        components: [sn({
                            data: o,
                            curve: e.curve,
                            className: "connector"
                        })],
                        handles: i
                    }
                },
                fn = function (t) {
                    for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, e = t.x / (n + 1), r = t.y / (n + 1), i = [], a = 1; a <= n; a++) i.push([e * a + a % 2 * 20, r * a - a % 2 * 20]);
                    return i
                },
                hn = function () {
                    function t(n) {
                        var e = n.a,
                            r = n.annotation,
                            i = n.editMode,
                            a = n.dispatcher,
                            o = n.notePadding,
                            s = n.accessors;
                        if (Gt(this, t), this.a = e, this.note = -1 === r.disable.indexOf("note") && e.select("g.annotation-note"), this.noteContent = this.note && e.select("g.annotation-note-content"), this.connector = -1 === r.disable.indexOf("connector") && e.select("g.annotation-connector"), this.subject = -1 === r.disable.indexOf("subject") && e.select("g.annotation-subject"), this.dispatcher = a, a) {
                            var c = bn.bind(null, a, r);
                            c({
                                component: this.note,
                                name: "note"
                            }), c({
                                component: this.connector,
                                name: "connector"
                            }), c({
                                component: this.subject,
                                name: "subject"
                            })
                        }
                        this.annotation = r, this.editMode = r.editMode || i, this.notePadding = void 0 !== o ? o : 3, this.offsetCornerX = 0, this.offsetCornerY = 0, s && r.data && this.init(s)
                    }
                    return $t(t, [{
                        key: "init",
                        value: function (t) {
                            this.annotation.x || this.mapX(t), this.annotation.y || this.mapY(t)
                        }
                    }, {
                        key: "mapY",
                        value: function (t) {
                            t.y && (this.annotation.y = t.y(this.annotation.data))
                        }
                    }, {
                        key: "mapX",
                        value: function (t) {
                            t.x && (this.annotation.x = t.x(this.annotation.data))
                        }
                    }, {
                        key: "updateEditMode",
                        value: function () {
                            this.a.selectAll("circle.handle").remove()
                        }
                    }, {
                        key: "drawOnSVG",
                        value: function (t, n) {
                            var e = this;
                            Array.isArray(n) || (n = [n]), n.filter(function (t) {
                                return t
                            }).forEach(function (n) {
                                var r = n.type,
                                    i = n.className,
                                    a = n.attrs,
                                    o = n.handles,
                                    s = n.classID;
                                if ("handle" === r) ! function (t) {
                                    var n = t.group,
                                        e = t.handles,
                                        r = t.r,
                                        i = void 0 === r ? 10 : r,
                                        a = n.selectAll("circle.handle").data(e);
                                    a.enter().append("circle").attr("class", "handle").attr("fill", "grey").attr("fill-opacity", .1).attr("cursor", "move").attr("stroke-dasharray", 5).attr("stroke", "grey").call(ut().container(Y("g.annotations").node()).on("start", function (t) {
                                        return t.start && t.start(t)
                                    }).on("drag", function (t) {
                                        return t.drag && t.drag(t)
                                    }).on("end", function (t) {
                                        return t.end && t.end(t)
                                    })), n.selectAll("circle.handle").attr("cx", function (t) {
                                        return t.x
                                    }).attr("cy", function (t) {
                                        return t.y
                                    }).attr("r", function (t) {
                                        return t.r || i
                                    }).attr("class", function (t) {
                                        return "handle " + (t.className || "")
                                    }), a.exit().remove()
                                }({
                                    group: t,
                                    r: a && a.r,
                                    handles: o
                                });
                                else {
                                    gn(t, [e.annotation], r, i, s);
                                    for (var c = t.select(r + "." + (s || i)), u = Object.keys(a), l = [], f = c.node().attributes, h = f.length - 1; h >= 0; h--) {
                                        var d = f[h].name; - 1 === u.indexOf(d) && "class" !== d && l.push(d)
                                    }
                                    u.forEach(function (t) {
                                        "text" === t ? c.text(a[t]) : c.attr(t, a[t])
                                    }), l.forEach(function (t) {
                                        return c.attr(t, null)
                                    })
                                }
                            })
                        }
                    }, {
                        key: "getNoteBBox",
                        value: function () {
                            return xn(this.note, ".annotation-note-content text")
                        }
                    }, {
                        key: "getNoteBBoxOffset",
                        value: function () {
                            var t = xn(this.note, ".annotation-note-content"),
                                n = this.noteContent.attr("transform").split(/\(|\,|\)/g);
                            return t.offsetCornerX = parseFloat(n[1]) + this.annotation.dx, t.offsetCornerY = parseFloat(n[2]) + this.annotation.dy, t.offsetX = this.annotation.dx, t.offsetY = this.annotation.dy, t
                        }
                    }, {
                        key: "drawSubject",
                        value: function () {
                            var t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = this.annotation.subject,
                                r = n.type,
                                i = {
                                    type: this,
                                    subjectData: e
                                },
                                a = {};
                            "circle" === r ? a = function (t) {
                                var n = t.subjectData,
                                    e = t.type;
                                n.radius || n.outerRadius || (n.radius = 20);
                                var r = [],
                                    i = cn({
                                        data: n,
                                        className: "subject"
                                    });
                                if (e.editMode) {
                                    var a = function (t) {
                                            var n = t.cx,
                                                e = void 0 === n ? 0 : n,
                                                r = t.cy,
                                                i = void 0 === r ? 0 : r,
                                                a = t.r1,
                                                o = t.r2,
                                                s = t.padding,
                                                c = {
                                                    move: {
                                                        x: e,
                                                        y: i
                                                    }
                                                };
                                            return void 0 !== a && (c.r1 = {
                                                x: e + a / Math.sqrt(2),
                                                y: i + a / Math.sqrt(2)
                                            }), void 0 !== o && (c.r2 = {
                                                x: e + o / Math.sqrt(2),
                                                y: i + o / Math.sqrt(2)
                                            }), void 0 !== s && (c.padding = {
                                                x: e + a + s,
                                                y: i
                                            }), c
                                        }({
                                            r1: i.data.outerRadius || i.data.radius,
                                            r2: i.data.innerRadius,
                                            padding: n.radiusPadding
                                        }),
                                        o = function (t) {
                                            var r = n[t] + p.dx * Math.sqrt(2);
                                            n[t] = r, e.redrawSubject(), e.redrawConnector()
                                        },
                                        s = [Jt({}, a.r1, {
                                            drag: o.bind(e, void 0 !== n.outerRadius ? "outerRadius" : "radius")
                                        })];
                                    n.innerRadius && s.push(Jt({}, a.r2, {
                                        drag: o.bind(e, "innerRadius")
                                    })), r = e.mapHandles(s)
                                }
                                return i.attrs["fill-opacity"] = 0, {
                                    components: [i],
                                    handles: r
                                }
                            }(i) : "rect" === r ? a = function (t) {
                                var n = t.subjectData,
                                    e = t.type;
                                n.width || (n.width = 100), n.height || (n.height = 100);
                                var r = [],
                                    i = n.width,
                                    a = n.height,
                                    o = sn({
                                        data: [
                                            [0, 0],
                                            [i, 0],
                                            [i, a],
                                            [0, a],
                                            [0, 0]
                                        ],
                                        className: "subject"
                                    });
                                if (e.editMode) {
                                    var s = [{
                                        x: i,
                                        y: a / 2,
                                        drag: function () {
                                            n.width = p.x, e.redrawSubject(), e.redrawConnector()
                                        }.bind(e)
                                    }, {
                                        x: i / 2,
                                        y: a,
                                        drag: function () {
                                            n.height = p.y, e.redrawSubject(), e.redrawConnector()
                                        }.bind(e)
                                    }];
                                    r = e.mapHandles(s)
                                }
                                return o.attrs["fill-opacity"] = .1, {
                                    components: [o],
                                    handles: r
                                }
                            }(i) : "threshold" === r ? a = function (t) {
                                var n = t.subjectData,
                                    e = t.type.annotation.position,
                                    r = (void 0 !== n.x1 ? n.x1 : e.x) - e.x,
                                    i = (void 0 !== n.x2 ? n.x2 : e.x) - e.x,
                                    a = (void 0 !== n.y1 ? n.y1 : e.y) - e.y,
                                    o = (void 0 !== n.y2 ? n.y2 : e.y) - e.y;
                                return {
                                    components: [sn({
                                        data: [
                                            [r, a],
                                            [i, o]
                                        ],
                                        className: "subject"
                                    })]
                                }
                            }(i) : "badge" === r && (a = function (t) {
                                var n = t.subjectData,
                                    e = void 0 === n ? {} : n,
                                    r = t.type,
                                    i = void 0 === r ? {} : r,
                                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    o = i.typeSettings && i.typeSettings.subject;
                                e.radius || (o && o.radius ? e.radius = o.radius : e.radius = 14), e.x || o && o.x && (e.x = o.x), e.y || o && o.y && (e.y = o.y);
                                var s = [],
                                    c = [],
                                    u = e.radius,
                                    l = .7 * u,
                                    f = 0,
                                    h = 0,
                                    d = Math.sqrt(2) * u,
                                    y = {
                                        xleftcorner: -u,
                                        xrightcorner: u,
                                        ytopcorner: -u,
                                        ybottomcorner: u,
                                        xleft: -d,
                                        xright: d,
                                        ytop: -d,
                                        ybottom: d
                                    };
                                e.x && !e.y ? f = y["x" + e.x] : e.y && !e.x ? h = y["y" + e.y] : e.x && e.y && (f = y["x" + e.x + "corner"], h = y["y" + e.y + "corner"]);
                                var _ = "translate(" + f + ", " + h + ")",
                                    v = cn({
                                        className: "subject",
                                        data: {
                                            radius: u
                                        }
                                    });
                                v.attrs.transform = _, v.attrs.fill = a.color, v.attrs["stroke-linecap"] = "round", v.attrs["stroke-width"] = "3px";
                                var g = cn({
                                    className: "subject-ring",
                                    data: {
                                        outerRadius: u,
                                        innerRadius: l
                                    }
                                });
                                g.attrs.transform = _, g.attrs["stroke-width"] = "3px", g.attrs.fill = "white";
                                var b = void 0;
                                if (f && h || !f && !h) b = sn({
                                    className: "subject-pointer",
                                    data: [
                                        [0, 0],
                                        [f || 0, 0],
                                        [0, h || 0],
                                        [0, 0]
                                    ]
                                });
                                else if (f || h) {
                                    var m = function (t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                        return t && t / Math.sqrt(2) / Math.sqrt(2) || n * u / Math.sqrt(2)
                                    };
                                    b = sn({
                                        className: "subject-pointer",
                                        data: [
                                            [0, 0],
                                            [m(f), m(h)],
                                            [m(f, -1), m(h, -1)],
                                            [0, 0]
                                        ]
                                    })
                                }
                                if (b && (b.attrs.fill = a.color, b.attrs["stroke-linecap"] = "round", b.attrs["stroke-width"] = "3px", c.push(b)), i.editMode) {
                                    var x = {
                                        x: 2 * f,
                                        y: 2 * h,
                                        drag: function () {
                                            e.x = p.x < 2 * -u ? "left" : p.x > 2 * u ? "right" : void 0, e.y = p.y < 2 * -u ? "top" : p.y > 2 * u ? "bottom" : void 0, i.redrawSubject()
                                        }.bind(i)
                                    };
                                    x.x || x.y || (x.y = -u), s = i.mapHandles([x])
                                }
                                var w = void 0;
                                return e.text && (w = {
                                    type: "text",
                                    className: "badge-text",
                                    attrs: {
                                        fill: "white",
                                        stroke: "none",
                                        "font-size": ".7em",
                                        text: e.text,
                                        "text-anchor": "middle",
                                        dy: ".25em",
                                        x: f,
                                        y: h
                                    }
                                }), c.push(v), c.push(g), c.push(w), {
                                    components: c,
                                    handles: s
                                }
                            }(i, this.annotation));
                            var o = a,
                                s = o.components,
                                c = void 0 === s ? [] : s,
                                u = o.handles,
                                l = void 0 === u ? [] : u;
                            return c.forEach(function (n) {
                                n && n.attrs && !n.attrs.stroke && (n.attrs.stroke = t.annotation.color)
                            }), this.editMode && (l = l.concat(this.mapHandles([{
                                drag: this.dragSubject.bind(this)
                            }])), c.push({
                                type: "handle",
                                handles: l
                            })), c
                        }
                    }, {
                        key: "drawConnector",
                        value: function () {
                            var t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = this.annotation.connector,
                                r = e.type || n.type,
                                i = {
                                    type: this,
                                    connectorData: e
                                };
                            i.subjectType = this.typeSettings && this.typeSettings.subject && this.typeSettings.subject.type;
                            var a = "curve" === r ? ln(i) : "elbow" === r ? function (t) {
                                    var n = t.type,
                                        e = t.subjectType,
                                        r = n.annotation,
                                        i = r.position,
                                        a = r.x - i.x,
                                        o = a + r.dx,
                                        s = r.y - i.y,
                                        c = s + r.dy,
                                        u = r.subject;
                                    if ("rect" === e) {
                                        var l = u.width,
                                            f = u.height;
                                        (l > 0 && r.dx > 0 || l < 0 && r.dx < 0) && (a = Math.abs(l) > Math.abs(r.dx) ? l / 2 : l), (f > 0 && r.dy > 0 || f < 0 && r.dy < 0) && (s = Math.abs(f) > Math.abs(r.dy) ? f / 2 : f), a === l / 2 && s === f / 2 && (a = o, s = c)
                                    }
                                    var h = [
                                            [a, s],
                                            [o, c]
                                        ],
                                        d = c - s,
                                        p = o - a,
                                        y = o,
                                        _ = c,
                                        v = c < s && o > a || o < a && c > s ? -1 : 1;
                                    if (Math.abs(p) < Math.abs(d) ? (y = o, _ = s + p * v) : (_ = c, y = a + d * v), "circle" === e && (u.outerRadius || u.radius)) {
                                        var g = (u.outerRadius || u.radius) + (u.radiusPadding || 0),
                                            b = g / Math.sqrt(2);
                                        if (Math.abs(p) > b && Math.abs(d) > b) h = [
                                            [a = b * (o < 0 ? -1 : 1), s = b * (c < 0 ? -1 : 1)],
                                            [y, _],
                                            [o, c]
                                        ];
                                        else if (Math.abs(p) > Math.abs(d)) {
                                            var m = Math.asin(-c / g);
                                            h = [
                                                [a = Math.abs(Math.cos(m) * g) * (o < 0 ? -1 : 1), c],
                                                [o, c]
                                            ]
                                        } else {
                                            var x = Math.acos(o / g);
                                            h = [
                                                [o, s = Math.abs(Math.sin(x) * g) * (c < 0 ? -1 : 1)],
                                                [o, c]
                                            ]
                                        }
                                    } else h = [
                                        [a, s],
                                        [y, _],
                                        [o, c]
                                    ];
                                    return {
                                        components: [sn({
                                            data: h,
                                            className: "connector"
                                        })]
                                    }
                                }(i) : function (t) {
                                    var n = un(i);
                                    return {
                                        components: [sn({
                                            data: n,
                                            className: "connector"
                                        })]
                                    }
                                }(),
                                o = a.components,
                                s = void 0 === o ? [] : o,
                                c = a.handles,
                                u = void 0 === c ? [] : c,
                                l = s[0];
                            l && (l.attrs.stroke = this.annotation.color, l.attrs.fill = "none");
                            var f = e.end || n.end,
                                h = {};
                            if ("arrow" === f) {
                                var d = l.data[1],
                                    p = l.data[0];
                                Math.sqrt(Math.pow(d[0] - p[0], 2) + Math.pow(d[1] - p[1], 2)) < 5 && l.data[2] && (d = l.data[2]), h = function (t) {
                                    var n = t.annotation,
                                        e = t.start,
                                        r = t.end,
                                        i = t.scale,
                                        a = void 0 === i ? 1 : i,
                                        o = n.position;
                                    e = e ? [-r[0] + e[0], -r[1] + e[1]] : [n.dx, n.dy], r || (r = [n.x - o.x, n.y - o.y]);
                                    var s = r[0],
                                        c = r[1],
                                        u = e[0],
                                        l = e[1],
                                        f = 10 * a,
                                        h = 16 / 180 * Math.PI,
                                        d = Math.atan(l / u);
                                    u < 0 && (d += Math.PI);
                                    var p = [
                                        [s, c],
                                        [Math.cos(d + h) * f + s, Math.sin(d + h) * f + c],
                                        [Math.cos(d - h) * f + s, Math.sin(d - h) * f + c],
                                        [s, c]
                                    ];
                                    return {
                                        components: [sn({
                                            data: p,
                                            className: "connector-end connector-arrow",
                                            classID: "connector-end"
                                        })]
                                    }
                                }({
                                    annotation: this.annotation,
                                    start: d,
                                    end: p,
                                    scale: e.endScale
                                })
                            } else "dot" === f ? h = function (t) {
                                var n = t.line,
                                    e = t.scale,
                                    r = void 0 === e ? 1 : e,
                                    i = cn({
                                        className: "connector-end connector-dot",
                                        classID: "connector-end",
                                        data: {
                                            radius: 3 * Math.sqrt(r)
                                        }
                                    });
                                return i.attrs.transform = "translate(" + n.data[0][0] + ", " + n.data[0][1] + ")", {
                                    components: [i]
                                }
                            }({
                                line: l,
                                scale: e.endScale
                            }) : f && "none" !== f || this.connector && this.connector.select(".connector-end").remove();
                            return h.components && (h.components.forEach(function (n) {
                                n.attrs.fill = t.annotation.color, n.attrs.stroke = t.annotation.color
                            }), s = s.concat(h.components)), this.editMode && 0 !== u.length && s.push({
                                type: "handle",
                                handles: u
                            }), s
                        }
                    }, {
                        key: "drawNote",
                        value: function () {
                            var t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = this.annotation.note,
                                r = e.align || n.align || "dynamic",
                                i = {
                                    bbox: n.bbox,
                                    align: r,
                                    offset: this.annotation.offset
                                },
                                a = e.lineType || n.lineType,
                                o = {};
                            "vertical" === a ? o = function (t) {
                                var n = t.align,
                                    e = t.x,
                                    r = void 0 === e ? 0 : e,
                                    i = t.y,
                                    a = void 0 === i ? 0 : i,
                                    o = t.bbox;
                                "top" === (n = en(n, t.offset.y)) ? a -= o.height: "middle" === n && (a -= o.height / 2);
                                var s = [
                                    [r, a],
                                    [r, a + o.height]
                                ];
                                return {
                                    components: [sn({
                                        data: s,
                                        className: "note-line"
                                    })]
                                }
                            }(i) : "horizontal" === a && (o = function (t) {
                                var n = t.align,
                                    e = t.x,
                                    r = void 0 === e ? 0 : e,
                                    i = t.y,
                                    a = void 0 === i ? 0 : i,
                                    o = t.bbox;
                                "right" === (n = rn(n, t.offset.x)) ? r -= o.width: "middle" === n && (r -= o.width / 2);
                                var s = [
                                    [r, a],
                                    [r + o.width, a]
                                ];
                                return {
                                    components: [sn({
                                        data: s,
                                        className: "note-line"
                                    })]
                                }
                            }(i));
                            var s = o,
                                c = s.components,
                                u = void 0 === c ? [] : c,
                                l = s.handles,
                                f = void 0 === l ? [] : l;
                            if (u.forEach(function (n) {
                                    n.attrs.stroke = t.annotation.color
                                }), this.editMode) {
                                f = this.mapHandles([{
                                    x: 0,
                                    y: 0,
                                    drag: this.dragNote.bind(this)
                                }]), u.push({
                                    type: "handle",
                                    handles: f
                                });
                                var h = this.dragNote.bind(this),
                                    d = this.dragstarted.bind(this),
                                    p = this.dragended.bind(this);
                                this.note.call(ut().container(Y("g.annotations").node()).on("start", function (t) {
                                    return d(t)
                                }).on("drag", function (t) {
                                    return h(t)
                                }).on("end", function (t) {
                                    return p(t)
                                }))
                            } else this.note.on("mousedown.drag", null);
                            return u
                        }
                    }, {
                        key: "drawNoteContent",
                        value: function (t) {
                            var n = this.annotation.note,
                                e = void 0 !== n.padding ? n.padding : this.notePadding,
                                r = n.orientation || t.orientation || "topBottom",
                                i = n.lineType || t.lineType,
                                a = n.align || t.align || "dynamic";
                            "vertical" === i ? r = "leftRight" : "horizontal" === i && (r = "topBottom");
                            var o = function (t) {
                                    var n = t.padding,
                                        e = void 0 === n ? 0 : n,
                                        r = t.bbox,
                                        i = void 0 === r ? {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0
                                        } : r,
                                        a = t.align,
                                        o = t.orientation,
                                        s = t.offset,
                                        c = void 0 === s ? {
                                            x: 0,
                                            y: 0
                                        } : s,
                                        u = -i.x,
                                        l = 0;
                                    return -1 !== an.indexOf(o) ? (a = rn(a, c.x), c.y < 0 && "topBottom" === o || "top" === o ? l -= i.height + e : l += e, "middle" === a ? u -= i.width / 2 : "right" === a && (u -= i.width)) : -1 !== on.indexOf(o) && (a = en(a, c.y), c.x < 0 && "leftRight" === o || "left" === o ? u -= i.width + e : u += e, "middle" === a ? l -= i.height / 2 : "top" === a && (l -= i.height)), {
                                        x: u,
                                        y: l
                                    }
                                }({
                                    padding: e,
                                    bbox: t.bbox,
                                    offset: this.annotation.offset,
                                    orientation: r,
                                    align: a
                                }),
                                s = o.x,
                                c = o.y;
                            return this.offsetCornerX = s + this.annotation.dx, this.offsetCornerY = c + this.annotation.dy, this.note && this.noteContent.attr("transform", "translate(" + s + ", " + c + ")"), []
                        }
                    }, {
                        key: "drawOnScreen",
                        value: function (t, n) {
                            return this.drawOnSVG(t, n)
                        }
                    }, {
                        key: "redrawSubject",
                        value: function () {
                            this.subject && this.drawOnScreen(this.subject, this.drawSubject())
                        }
                    }, {
                        key: "redrawConnector",
                        value: function () {
                            this.connector && this.drawOnScreen(this.connector, this.drawConnector())
                        }
                    }, {
                        key: "redrawNote",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getNoteBBox();
                            this.noteContent && this.drawOnScreen(this.noteContent, this.drawNoteContent({
                                bbox: t
                            })), this.note && this.drawOnScreen(this.note, this.drawNote({
                                bbox: t
                            }))
                        }
                    }, {
                        key: "setPosition",
                        value: function () {
                            var t = this.annotation.position;
                            this.a.attr("transform", "translate(" + t.x + ", " + t.y + ")")
                        }
                    }, {
                        key: "clearComponents",
                        value: function () {
                            this.subject && this.subject.select("*").remove(), this.connector && this.connector.select("*").remove()
                        }
                    }, {
                        key: "setOffset",
                        value: function () {
                            if (this.note) {
                                var t = this.annotation.offset;
                                this.note.attr("transform", "translate(" + t.x + ", " + t.y + ")")
                            }
                        }
                    }, {
                        key: "setPositionWithAccessors",
                        value: function (t) {
                            t && this.annotation.data && (this.mapX(t), this.mapY(t)), this.setPosition()
                        }
                    }, {
                        key: "setClassName",
                        value: function () {
                            this.a.attr("class", "annotation " + (this.className && this.className()) + " " + (this.editMode ? "editable" : "") + " " + (this.annotation.className || ""))
                        }
                    }, {
                        key: "draw",
                        value: function () {
                            this.setClassName(), this.setPosition(), this.setOffset(), this.redrawSubject(), this.redrawConnector(), this.redrawNote()
                        }
                    }, {
                        key: "dragstarted",
                        value: function () {
                            p.sourceEvent.stopPropagation(), this.dispatcher && this.dispatcher.call("dragstart", this.a, this.annotation), this.a.classed("dragging", !0), this.a.selectAll("circle.handle").style("pointer-events", "none")
                        }
                    }, {
                        key: "dragended",
                        value: function () {
                            this.dispatcher && this.dispatcher.call("dragend", this.a, this.annotation), this.a.classed("dragging", !1), this.a.selectAll("circle.handle").style("pointer-events", "all")
                        }
                    }, {
                        key: "dragSubject",
                        value: function () {
                            var t = this.annotation.position;
                            t.x += p.dx, t.y += p.dy, this.annotation.position = t
                        }
                    }, {
                        key: "dragNote",
                        value: function () {
                            var t = this.annotation.offset;
                            t.x += p.dx, t.y += p.dy, this.annotation.offset = t
                        }
                    }, {
                        key: "mapHandles",
                        value: function (t) {
                            var n = this;
                            return t.map(function (t) {
                                return Jt({}, t, {
                                    start: n.dragstarted.bind(n),
                                    end: n.dragended.bind(n)
                                })
                            })
                        }
                    }]), t
                }(),
                dn = function (t, n, e) {
                    return function (r) {
                        function i(t) {
                            Gt(this, i);
                            var e = Kt(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                            return e.typeSettings = n, n.disable && n.disable.forEach(function (t) {
                                e[t] && e[t].remove(), e[t] = void 0, "note" === t && (e.noteContent = void 0)
                            }), e
                        }
                        return Qt(i, t), $t(i, [{
                            key: "className",
                            value: function () {
                                return "" + (n.className || Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "className", this) && Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "className", this).call(this) || "")
                            }
                        }, {
                            key: "drawSubject",
                            value: function (t) {
                                return this.typeSettings.subject = Jt({}, n.subject, this.typeSettings.subject), Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "drawSubject", this).call(this, Jt({}, t, this.typeSettings.subject))
                            }
                        }, {
                            key: "drawConnector",
                            value: function (t) {
                                return this.typeSettings.connector = Jt({}, n.connector, this.typeSettings.connector), Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "drawConnector", this).call(this, Jt({}, t, n.connector, this.typeSettings.connector))
                            }
                        }, {
                            key: "drawNote",
                            value: function (t) {
                                return this.typeSettings.note = Jt({}, n.note, this.typeSettings.note), Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "drawNote", this).call(this, Jt({}, t, n.note, this.typeSettings.note))
                            }
                        }, {
                            key: "drawNoteContent",
                            value: function (t) {
                                return Zt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "drawNoteContent", this).call(this, Jt({}, t, n.note, this.typeSettings.note))
                            }
                        }], [{
                            key: "init",
                            value: function (t, n) {
                                return Zt(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, t, n), e && (t = e(t, n)), t
                            }
                        }]), i
                    }()
                },
                pn = function (t) {
                    function n(t) {
                        Gt(this, n);
                        var e = Kt(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
                        return e.textWrap = t.textWrap || 120, e.drawText(), e
                    }
                    return Qt(n, hn), $t(n, [{
                        key: "updateTextWrap",
                        value: function (t) {
                            this.textWrap = t, this.drawText()
                        }
                    }, {
                        key: "drawText",
                        value: function () {
                            if (this.note) {
                                gn(this.note, [this.annotation], "g", "annotation-note-content");
                                var t = this.note.select("g.annotation-note-content");
                                gn(t, [this.annotation], "rect", "annotation-note-bg"), gn(t, [this.annotation], "text", "annotation-note-label"), gn(t, [this.annotation], "text", "annotation-note-title");
                                var n = {
                                        height: 0
                                    },
                                    e = this.a.select("text.annotation-note-label"),
                                    r = this.annotation.note && this.annotation.note.wrap || this.typeSettings && this.typeSettings.note && this.typeSettings.note.wrap || this.textWrap,
                                    i = this.annotation.note && this.annotation.note.wrapSplitter || this.typeSettings && this.typeSettings.note && this.typeSettings.note.wrapSplitter,
                                    a = this.annotation.note && this.annotation.note.bgPadding || this.typeSettings && this.typeSettings.note && this.typeSettings.note.bgPadding,
                                    o = {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0
                                    };
                                if ("number" == typeof a ? o = {
                                        top: a,
                                        bottom: a,
                                        left: a,
                                        right: a
                                    } : a && "object" === (void 0 === a ? "undefined" : Yt(a)) && (o = Jt(o, a)), this.annotation.note.title) {
                                    var s = this.a.select("text.annotation-note-title");
                                    s.text(this.annotation.note.title), s.attr("fill", this.annotation.color), s.attr("font-weight", "bold"), s.call(mn, r, i), n = s.node().getBBox()
                                }
                                e.text(this.annotation.note.label).attr("dx", "0"), e.call(mn, r, i), e.attr("y", 1.1 * n.height || 0), e.attr("fill", this.annotation.color);
                                var c = this.getNoteBBox();
                                this.a.select("rect.annotation-note-bg").attr("width", c.width + o.left + o.right).attr("height", c.height + o.top + o.bottom).attr("x", c.x - o.left).attr("y", -o.top).attr("fill", "white").attr("fill-opacity", 0)
                            }
                        }
                    }]), n
                }(),
                yn = dn(pn, {
                    className: "label",
                    note: {
                        align: "middle"
                    }
                }),
                _n = dn(pn, {
                    className: "callout",
                    note: {
                        lineType: "horizontal"
                    }
                }),
                vn = (dn(_n, {
                    className: "callout elbow",
                    connector: {
                        type: "elbow"
                    }
                }), dn(_n, {
                    className: "callout curve",
                    connector: {
                        type: "curve"
                    }
                }), dn(hn, {
                    className: "badge",
                    subject: {
                        type: "badge"
                    },
                    disable: ["connector", "note"]
                }), dn(pn, {
                    className: "callout circle",
                    subject: {
                        type: "circle"
                    },
                    note: {
                        lineType: "horizontal"
                    },
                    connector: {
                        type: "elbow"
                    }
                })),
                gn = (dn(pn, {
                    className: "callout rect",
                    subject: {
                        type: "rect"
                    },
                    note: {
                        lineType: "horizontal"
                    },
                    connector: {
                        type: "elbow"
                    }
                }), dn(function (t) {
                    function n() {
                        return Gt(this, n), Kt(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return Qt(n, _n), $t(n, [{
                        key: "mapY",
                        value: function (t) {
                            Zt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "mapY", this).call(this, t);
                            var e = this.annotation;
                            (e.subject.x1 || e.subject.x2) && e.data && t.y && (e.y = t.y(e.data)), !e.subject.x1 && !e.subject.x2 || e.x || (e.x = e.subject.x1 || e.subject.x2)
                        }
                    }, {
                        key: "mapX",
                        value: function (t) {
                            Zt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "mapX", this).call(this, t);
                            var e = this.annotation;
                            (e.subject.y1 || e.subject.y2) && e.data && t.x && (e.x = t.x(e.data)), !e.subject.y1 && !e.subject.y2 || e.y || (e.y = e.subject.y1 || e.subject.y2)
                        }
                    }]), n
                }(), {
                    className: "callout xythreshold",
                    subject: {
                        type: "threshold"
                    }
                }), function (t, n, e, r, i) {
                    var a = t.selectAll(e + "." + (i || r)).data(n);
                    return a.enter().append(e).merge(a).attr("class", r), a.exit().remove(), t
                }),
                bn = function (t, n, e) {
                    var r = e.component,
                        i = e.name;
                    r && r.on("mouseover.annotations", function () {
                        t.call(i + "over", r, n)
                    }).on("mouseout.annotations", function () {
                        return t.call(i + "out", r, n)
                    }).on("click.annotations", function () {
                        return t.call(i + "click", r, n)
                    })
                },
                mn = function (t, n, e) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1.2;
                    t.each(function () {
                        for (var t = Y(this), i = t.text().split(e || /[ \t\r\n]+/).reverse().filter(function (t) {
                                return "" !== t
                            }), a = void 0, o = [], s = t.text(null).append("tspan").attr("x", 0).attr("dy", "0.8em"); a = i.pop();) o.push(a), s.text(o.join(" ")), s.node().getComputedTextLength() > n && o.length > 1 && (o.pop(), s.text(o.join(" ")), o = [a], s = t.append("tspan").attr("x", 0).attr("dy", r + "em").text(a))
                    })
                },
                xn = function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":not(.handle)";
                    return t ? t.selectAll(n).nodes().reduce(function (t, n) {
                        var e = n.getBBox();
                        t.x = Math.min(t.x, e.x), t.y = Math.min(t.y, e.y), t.width = Math.max(t.width, e.width);
                        var r = n && n.attributes && n.attributes.y;
                        return t.height = Math.max(t.height, (r && parseFloat(r.value) || 0) + e.height), t
                    }, {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }) : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                };

            function wn() {
                var t = [],
                    n = void 0,
                    e = void 0,
                    r = [],
                    i = {},
                    a = {},
                    o = !1,
                    s = void 0,
                    c = _n,
                    u = void 0,
                    l = void 0,
                    f = tt("subjectover", "subjectout", "subjectclick", "connectorover", "connectorout", "connectorclick", "noteover", "noteout", "noteclick", "dragend", "dragstart"),
                    h = void 0,
                    d = function (e) {
                        h = e, o || e.selectAll("circle.handle").remove();
                        var d = t.map(function (t) {
                            return t.type || (t.type = c), t.disable || (t.disable = r), new tn(t)
                        });
                        n = n || new nn({
                            annotations: d,
                            accessors: i,
                            accessorsInverse: a,
                            ids: s
                        }), e.selectAll("g").data([n]).enter().append("g").attr("class", "annotations");
                        var p = e.select("g.annotations");
                        gn(p, n.annotations, "g", "annotation"), p.selectAll("g.annotation").each(function (t) {
                            var n = Y(this);
                            n.attr("class", "annotation"), gn(n, [t], "g", "annotation-connector"), gn(n, [t], "g", "annotation-subject"), gn(n, [t], "g", "annotation-note"), gn(n.select("g.annotation-note"), [t], "g", "annotation-note-content"), t.type = "[object Object]" === t.type.toString() ? t.type : new t.type({
                                a: n,
                                annotation: t,
                                textWrap: u,
                                notePadding: l,
                                editMode: o,
                                dispatcher: f,
                                accessors: i
                            }), t.type.draw(), t.type.drawText && t.type.drawText()
                        })
                    };
                return d.json = function () {
                    return console.log("Annotations JSON was copied to your clipboard. Please note the annotation type is not JSON compatible. It appears in the objects array in the console, but not in the copied JSON.", n.json), window.copy(JSON.stringify(n.json.map(function (t) {
                        return delete t.type, t
                    }))), d
                }, d.update = function () {
                    return t && n && (t = n.annotations.map(function (t) {
                        return t.type.draw(), t
                    })), d
                }, d.updateText = function () {
                    return n && (n.updateText(u), t = n.annotations), d
                }, d.updatedAccessors = function () {
                    return n.setPositionWithAccessors(), t = n.annotations, d
                }, d.disable = function (e) {
                    return arguments.length ? (r = e, n && (n.updateDisable(r), t = n.annotations), d) : r
                }, d.textWrap = function (e) {
                    return arguments.length ? (u = e, n && (n.updateTextWrap(u), t = n.annotations), d) : u
                }, d.notePadding = function (e) {
                    return arguments.length ? (l = e, n && (n.updateNotePadding(l), t = n.annotations), d) : l
                }, d.type = function (e, r) {
                    return arguments.length ? (c = e, n && (n.annotations.map(function (t) {
                        t.type.note && t.type.note.selectAll("*:not(.annotation-note-content)").remove(), t.type.noteContent && t.type.noteContent.selectAll("*").remove(), t.type.subject && t.type.subject.selectAll("*").remove(), t.type.connector && t.type.connector.selectAll("*").remove(), t.type.typeSettings = {}, t.type = c, t.subject = r && r.subject || t.subject, t.connector = r && r.connector || t.connector, t.note = r && r.note || t.note
                    }), t = n.annotations), d) : c
                }, d.annotations = function (e) {
                    return arguments.length ? (t = e, n && n.annotations && (t.some(function (t) {
                        return !t.type || "[object Object]" !== t.type.toString()
                    }) ? (n = null, d(h)) : n.annotations = t), d) : n && n.annotations || t
                }, d.context = function (t) {
                    return arguments.length ? (e = t, d) : e
                }, d.accessors = function (t) {
                    return arguments.length ? (i = t, d) : i
                }, d.accessorsInverse = function (t) {
                    return arguments.length ? (a = t, d) : a
                }, d.ids = function (t) {
                    return arguments.length ? (s = t, d) : s
                }, d.editMode = function (e) {
                    return arguments.length ? (o = e, h && h.selectAll("g.annotation").classed("editable", o), n && (n.editMode(o), t = n.annotations), d) : o
                }, d.collection = function (t) {
                    return arguments.length ? (n = t, d) : n
                }, d.on = function () {
                    var t = f.on.apply(f, arguments);
                    return t === f ? d : t
                }, d
            }
        },
        51: function (t, n, e) {
            "use strict";
            var r = function (t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                i = function (t) {
                    return 1 === t.length && (t = function (t) {
                        return function (n, e) {
                            return r(t(n), e)
                        }
                    }(t)), {
                        left: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var a = r + i >>> 1;
                                t(n[a], e) < 0 ? r = a + 1 : i = a
                            }
                            return r
                        },
                        right: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var a = r + i >>> 1;
                                t(n[a], e) > 0 ? i = a : r = a + 1
                            }
                            return r
                        }
                    }
                }(r);
            i.right, i.left;
            var a = Array.prototype;

            function o(t, n) {
                let e;
                if (void 0 === n)
                    for (let n of t) null != n && n >= n && (void 0 === e || e < n) && (e = n);
                else {
                    let r = -1;
                    for (let i of t) null != (i = n(i, ++r, t)) && i >= i && (void 0 === e || e < i) && (e = i)
                }
                return e
            }

            function s(t, n) {
                let e;
                if (void 0 === n)
                    for (let n of t) null != n && n >= n && (void 0 === e || e > n) && (e = n);
                else {
                    let r = -1;
                    for (let i of t) null != (i = n(i, ++r, t)) && i >= i && (void 0 === e || e > i) && (e = i)
                }
                return e
            }

            function c(t, n = r) {
                let e, i, a = -1;
                for (const r of t) ++a, (void 0 === i ? 0 === n(r, r) : n(r, e) < 0) && (e = r, i = a);
                return i
            }
            a.slice, a.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
            var u = Array.prototype.slice,
                l = function (t) {
                    return t
                },
                f = 1,
                h = 2,
                d = 3,
                p = 4,
                y = 1e-6;

            function _(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function v(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function g() {
                return !this.__axis
            }

            function b(t, n) {
                var e = [],
                    r = null,
                    i = null,
                    a = 6,
                    o = 6,
                    s = 3,
                    c = t === f || t === p ? -1 : 1,
                    b = t === p || t === h ? "x" : "y",
                    m = t === f || t === d ? _ : v;

                function x(u) {
                    var _ = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                        v = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : l : i,
                        x = Math.max(a, 0) + s,
                        w = n.range(),
                        M = +w[0] + .5,
                        k = +w[w.length - 1] + .5,
                        S = (n.bandwidth ? function (t) {
                            var n = Math.max(0, t.bandwidth() - 1) / 2;
                            return t.round() && (n = Math.round(n)),
                                function (e) {
                                    return +t(e) + n
                                }
                        } : function (t) {
                            return function (n) {
                                return +t(n)
                            }
                        })(n.copy()),
                        j = u.selection ? u.selection() : u,
                        N = j.selectAll(".domain").data([null]),
                        A = j.selectAll(".tick").data(_, n).order(),
                        E = A.exit(),
                        O = A.enter().append("g").attr("class", "tick"),
                        P = A.select("line"),
                        T = A.select("text");
                    N = N.merge(N.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(O), P = P.merge(O.append("line").attr("stroke", "currentColor").attr(b + "2", c * a)), T = T.merge(O.append("text").attr("fill", "currentColor").attr(b, c * x).attr("dy", t === f ? "0em" : t === d ? "0.71em" : "0.32em")), u !== j && (N = N.transition(u), A = A.transition(u), P = P.transition(u), T = T.transition(u), E = E.transition(u).attr("opacity", y).attr("transform", function (t) {
                        return isFinite(t = S(t)) ? m(t) : this.getAttribute("transform")
                    }), O.attr("opacity", y).attr("transform", function (t) {
                        var n = this.parentNode.__axis;
                        return m(n && isFinite(n = n(t)) ? n : S(t))
                    })), E.remove(), N.attr("d", t === p || t == h ? o ? "M" + c * o + "," + M + "H0.5V" + k + "H" + c * o : "M0.5," + M + "V" + k : o ? "M" + M + "," + c * o + "V0.5H" + k + "V" + c * o : "M" + M + ",0.5H" + k), A.attr("opacity", 1).attr("transform", function (t) {
                        return m(S(t))
                    }), P.attr(b + "2", c * a), T.attr(b, c * x).text(v), j.filter(g).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === h ? "start" : t === p ? "end" : "middle"), j.each(function () {
                        this.__axis = S
                    })
                }
                return x.scale = function (t) {
                    return arguments.length ? (n = t, x) : n
                }, x.ticks = function () {
                    return e = u.call(arguments), x
                }, x.tickArguments = function (t) {
                    return arguments.length ? (e = null == t ? [] : u.call(t), x) : e.slice()
                }, x.tickValues = function (t) {
                    return arguments.length ? (r = null == t ? null : u.call(t), x) : r && r.slice()
                }, x.tickFormat = function (t) {
                    return arguments.length ? (i = t, x) : i
                }, x.tickSize = function (t) {
                    return arguments.length ? (a = o = +t, x) : a
                }, x.tickSizeInner = function (t) {
                    return arguments.length ? (a = +t, x) : a
                }, x.tickSizeOuter = function (t) {
                    return arguments.length ? (o = +t, x) : o
                }, x.tickPadding = function (t) {
                    return arguments.length ? (s = +t, x) : s
                }, x
            }

            function m(t) {
                return b(f, t)
            }

            function x(t) {
                return b(h, t)
            }

            function w(t) {
                return b(d, t)
            }

            function M(t) {
                return b(p, t)
            }
            var k = e(23),
                S = e(36),
                j = e(24),
                N = e(7),
                A = e(1),
                E = (e(35), 200),
                O = 8,
                P = 1,
                T = 2,
                C = 3,
                R = 4;

            function q(t) {
                return "translate(" + t + ",0)"
            }

            function z(t) {
                return "translate(0," + t + ")"
            }

            function I(t) {
                return function (t, n) {
                    n = void 0 !== n ? n : null;
                    var e = [0],
                        r = [0],
                        i = [0, 10],
                        a = 100,
                        u = 100,
                        l = !0,
                        f = "M-5.5,-5.5v10l6,5.5l6,-5.5v-10z",
                        h = null,
                        d = null,
                        p = null,
                        y = null,
                        _ = null,
                        v = null,
                        g = null,
                        b = Object(k.a)("onchange", "start", "end", "drag"),
                        I = null,
                        D = null,
                        L = null,
                        B = t === P || t === R ? -1 : 1,
                        F = t === R || t === T ? "y" : "x",
                        U = t === R || t === T ? "x" : "y",
                        W = t === P || t === C ? q : z,
                        H = t === P || t === C ? z : q,
                        V = null;
                    switch (t) {
                        case P:
                            V = m;
                            break;
                        case T:
                            V = x;
                            break;
                        case C:
                            V = w;
                            break;
                        case R:
                            V = M
                    }
                    var X = null,
                        Y = null;

                    function G(r) {
                        I = r.selection ? r.selection() : r, n = n ? n.range([s(n.range()), s(n.range()) + (t === P || t === C ? a : u)]) : (n = i[0] instanceof Date ? Object(N.l)() : Object(N.c)()).domain(i).range([0, t === P || t === C ? a : u]).clamp(!0), D = Object(N.c)().range(n.range()).domain(n.range()).clamp(!0), e = e.map(function (t) {
                            return Object(N.c)().range(i).domain(i).clamp(!0)(t)
                        }), y = y || n.tickFormat(), v = v || y || n.tickFormat(), I.selectAll(".axis").data([null]).enter().append("g").attr("transform", H(7 * B)).attr("class", "axis");
                        var o = I.selectAll(".slider").data([null]),
                            h = o.enter().append("g").attr("class", "slider").attr("cursor", t === P || t === C ? "ew-resize" : "ns-resize").call(Object(S.a)().on("start", function () {
                                console.log("Drag started"), Object(A.g)(this).classed("active", !0);
                                var r = D(t === C || t === P ? A.c.x : A.c.y);
                                L = c(e.map(function (t) {
                                    return Math.abs(t - J(n.invert(r)))
                                }));
                                var i = e.map(function (t, e) {
                                    return e === L ? J(n.invert(r)) : t
                                });
                                Q(i), b.call("start", o, 1 === i.length ? i[0] : i), Z(i, !0)
                            }).on("drag", function () {
                                var r = D(t === C || t === P ? A.c.x : A.c.y),
                                    i = J(n.invert(r)),
                                    a = e.map(function (t, n) {
                                        return 2 === e.length ? n === L ? 0 === L ? Math.min(i, J(e[1])) : Math.max(i, J(e[0])) : t : n === L ? i : t
                                    });
                                Q(a), b.call("drag", o, 1 === a.length ? a[0] : a), Z(a, !0)
                            }).on("end", function () {
                                Object(A.g)(this).classed("active", !1);
                                var r = D(t === C || t === P ? A.c.x : A.c.y),
                                    i = e.map(function (t, e) {
                                        return e === L ? J(n.invert(r)) : t
                                    });
                                Q(i), b.call("end", o, 1 === i.length ? i[0] : i), Z(i, !0), L = null
                            }));
                        h.append("line").attr("class", "track").attr(F + "1", n.range()[0] - O).attr("stroke", "#bbb").attr("stroke-width", 6).attr("stroke-linecap", "round"), h.append("line").attr("class", "track-inset").attr(F + "1", n.range()[0] - O).attr("stroke", "#eee").attr("stroke-width", 4).attr("stroke-linecap", "round"), g && h.append("line").attr("class", "track-fill").attr(F + "1", 1 === e.length ? n.range()[0] - O : n(e[0])).attr("stroke", g).attr("stroke-width", 4).attr("stroke-linecap", "round"), h.append("line").attr("class", "track-overlay").attr(F + "1", n.range()[0] - O).attr("stroke", "transparent").attr("stroke-width", 40).attr("stroke-linecap", "round").merge(o.select(".track-overlay"));
                        var p = h.selectAll(".parameter-value").data(e).enter().append("g").attr("class", "parameter-value").attr("transform", function (t) {
                            return W(n(t))
                        }).attr("font-family", "sans-serif").attr("text-anchor", t === T ? "start" : t === R ? "end" : "middle");
                        p.append("path").attr("transform", "rotate(" + 90 * (t + 1) + ")").attr("d", f).attr("fill", "white").attr("stroke", "#777"), l && 1 === e.length && p.append("text").attr("font-size", 10).attr(U, 27 * B).attr("dy", t === P ? "0em" : t === C ? ".71em" : ".32em").text(y(e[0])), r.select(".track").attr(F + "2", n.range()[1] + O), r.select(".track-inset").attr(F + "2", n.range()[1] + O), g && r.select(".track-fill").attr(F + "2", 1 === e.length ? n(e[0]) : n(e[1])), r.select(".track-overlay").attr(F + "2", n.range()[1] + O), r.select(".axis").call(V(n).tickFormat(y).ticks(_).tickValues(d)), I.select(".axis").select(".domain").remove(), r.select(".axis").attr("transform", H(7 * B)), r.selectAll(".axis text").attr("fill", "#aaa").attr(U, 20 * B).attr("dy", t === P ? "0em" : t === C ? ".71em" : ".32em").attr("text-anchor", t === T ? "start" : t === R ? "end" : "middle"), r.selectAll(".axis line").attr("stroke", "#aaa"), r.selectAll(".parameter-value").attr("transform", function (t) {
                            return W(n(t))
                        }), $(), Y = I.select(".parameter-value text"), X = I.select(".track-fill")
                    }

                    function $() {
                        if (I && l && 1 === e.length) {
                            var t = [];
                            I.selectAll(".axis .tick").each(function (n) {
                                t.push(Math.abs(n - e[0]))
                            });
                            var n = c(t);
                            I.selectAll(".axis .tick text").attr("opacity", function (t, e) {
                                return e === n ? 0 : 1
                            })
                        }
                    }

                    function J(t) {
                        if (h) {
                            var n = (t - i[0]) % h,
                                e = t - n;
                            return 2 * n > h && (e += h), t instanceof Date ? new Date(e) : e
                        }
                        if (p) {
                            var r = c(p.map(function (n) {
                                return Math.abs(t - n)
                            }));
                            return p[r]
                        }
                        return t
                    }

                    function Z(t, n) {
                        (e[0] !== t[0] || e.length > 1 && e[1] !== t[1]) && (e = t, n && b.call("onchange", G, 1 === t.length ? t[0] : t), $())
                    }

                    function Q(t, r) {
                        I && ((r = void 0 !== r && r) ? (I.selectAll(".parameter-value").data(t).transition().ease(j.d).duration(E).attr("transform", function (t) {
                            return W(n(t))
                        }), g && X.transition().ease(j.d).duration(E).attr(F + "1", 1 === e.length ? n.range()[0] - O : n(t[0])).attr(F + "2", 1 === e.length ? n(t[0]) : n(t[1]))) : (I.selectAll(".parameter-value").data(t).attr("transform", function (t) {
                            return W(n(t))
                        }), g && X.attr(F + "1", 1 === e.length ? n.range()[0] - O : n(t[0])).attr(F + "2", 1 === e.length ? n(t[0]) : n(t[1]))), l && Y.text(v(t[0])))
                    }
                    return n && (i = [s(n.domain()), o(n.domain())], t === P || t === C ? a = o(n.range()) - s(n.range()) : u = o(n.range()) - s(n.range()), n = n.clamp(!0)), G.min = function (t) {
                        return arguments.length ? (i[0] = t, G) : i[0]
                    }, G.max = function (t) {
                        return arguments.length ? (i[1] = t, G) : i[1]
                    }, G.domain = function (t) {
                        return arguments.length ? (i = t, G) : i
                    }, G.width = function (t) {
                        return arguments.length ? (a = t, G) : a
                    }, G.height = function (t) {
                        return arguments.length ? (u = t, G) : u
                    }, G.tickFormat = function (t) {
                        return arguments.length ? (y = t, G) : y
                    }, G.displayFormat = function (t) {
                        return arguments.length ? (v = t, G) : v
                    }, G.ticks = function (t) {
                        return arguments.length ? (_ = t, G) : _
                    }, G.value = function (t) {
                        if (!arguments.length) return 1 === e.length ? e[0] : e;
                        var r = Array.isArray(t) ? t : [t];
                        r.sort((t, n) => t - n);
                        var i = r.map(n).map(D).map(n.invert).map(J);
                        return Q(i, !0), Z(i, !0), G
                    }, G.silentValue = function (t) {
                        if (!arguments.length) return 1 === e.length ? e[0] : e;
                        var r = Array.isArray(t) ? t : [t];
                        r.sort((t, n) => t - n);
                        var i = r.map(n).map(D).map(n.invert).map(J);
                        return Q(i, !1), Z(i, !1), G
                    }, G.default = function (t) {
                        if (!arguments.length) return 1 === r.length ? r[0] : r;
                        var n = Array.isArray(t) ? t : [t];
                        return n.sort((t, n) => t - n), r = n, e = n, G
                    }, G.step = function (t) {
                        return arguments.length ? (h = t, G) : h
                    }, G.tickValues = function (t) {
                        return arguments.length ? (d = t, G) : d
                    }, G.marks = function (t) {
                        return arguments.length ? (p = t, G) : p
                    }, G.handle = function (t) {
                        return arguments.length ? (f = t, G) : f
                    }, G.displayValue = function (t) {
                        return arguments.length ? (l = t, G) : l
                    }, G.fill = function (t) {
                        return arguments.length ? (g = t, G) : g
                    }, G.on = function () {
                        var t = b.on.apply(b, arguments);
                        return t === b ? G : t
                    }, G
                }(C, t)
            }
            e.d(n, "a", function () {
                return I
            })
        },
        52: function (t, n, e) {
            "use strict";

            function r() {}
            var i = Math.abs,
                a = Math.atan,
                o = Math.atan2,
                s = (Math.ceil, Math.cos),
                c = (Math.exp, Math.floor, Math.log, Math.max),
                u = Math.min,
                l = (Math.pow, Math.round, Math.sign || function (t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                }),
                f = Math.sin,
                h = (Math.tan, 1e-6),
                d = 1e-12,
                p = Math.PI,
                y = p / 2,
                _ = p / 4,
                v = Math.SQRT1_2,
                g = (w(2), w(p), 2 * p),
                b = 180 / p,
                m = p / 180;

            function x(t) {
                return t > 1 ? y : t < -1 ? -y : Math.asin(t)
            }

            function w(t) {
                return t > 0 ? Math.sqrt(t) : 0
            }

            function M(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }
            var k = function (t, n, e, r, a) {
                var o, s, c = [],
                    u = [];
                if (t.forEach(function (t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, r = t[0],
                                s = t[n];
                            if (function (t, n) {
                                    return i(t[0] - n[0]) < h && i(t[1] - n[1]) < h
                                }(r, s)) {
                                for (a.lineStart(), o = 0; o < n; ++o) a.point((r = t[o])[0], r[1]);
                                a.lineEnd()
                            } else c.push(e = new M(r, t, null, !0)), u.push(e.o = new M(r, null, e, !1)), c.push(e = new M(s, t, null, !1)), u.push(e.o = new M(s, null, e, !0))
                        }
                    }), c.length) {
                    for (u.sort(n), S(c), S(u), o = 0, s = u.length; o < s; ++o) u[o].e = e = !e;
                    for (var l, f, d = c[0];;) {
                        for (var p = d, y = !0; p.v;)
                            if ((p = p.n) === d) return;
                        l = p.z, a.lineStart();
                        do {
                            if (p.v = p.o.v = !0, p.e) {
                                if (y)
                                    for (o = 0, s = l.length; o < s; ++o) a.point((f = l[o])[0], f[1]);
                                else r(p.x, p.n.x, 1, a);
                                p = p.n
                            } else {
                                if (y)
                                    for (l = p.p.z, o = l.length - 1; o >= 0; --o) a.point((f = l[o])[0], f[1]);
                                else r(p.x, p.p.x, -1, a);
                                p = p.p
                            }
                            l = (p = p.o).z, y = !y
                        } while (!p.v);
                        a.lineEnd()
                    }
                }
            };

            function S(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i
                }
            }

            function j() {
                this.reset()
            }
            j.prototype = {
                constructor: j,
                reset: function () {
                    this.s = this.t = 0
                },
                add: function (t) {
                    A(N, t, this.t), A(this, N.s, this.s), this.s ? this.t += N.t : this.s = N.t
                },
                valueOf: function () {
                    return this.s
                }
            };
            var N = new j;

            function A(t, n, e) {
                var r = t.s = n + e,
                    i = r - n,
                    a = r - i;
                t.t = n - a + (e - i)
            }

            function E(t) {
                return [o(t[1], t[0]), x(t[2])]
            }

            function O(t) {
                var n = t[0],
                    e = t[1],
                    r = s(e);
                return [r * s(n), r * f(n), f(e)]
            }

            function P(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }

            function T(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function C(t) {
                var n = w(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }

            function R(t, n) {
                var e = n[0] - t[0],
                    r = n[1] - t[1],
                    i = n[2] - t[2];
                return e * e + r * r + i * i < d * d
            }
            var q = new j,
                z = function (t, n) {
                    var e = n[0],
                        r = n[1],
                        i = [f(e), -s(e), 0],
                        a = 0,
                        c = 0;
                    q.reset();
                    for (var u = 0, l = t.length; u < l; ++u)
                        if (y = (d = t[u]).length)
                            for (var d, y, v = d[y - 1], b = v[0], m = v[1] / 2 + _, w = f(m), M = s(m), k = 0; k < y; ++k, b = j, w = A, M = E, v = S) {
                                var S = d[k],
                                    j = S[0],
                                    N = S[1] / 2 + _,
                                    A = f(N),
                                    E = s(N),
                                    P = j - b,
                                    R = P >= 0 ? 1 : -1,
                                    z = R * P,
                                    I = z > p,
                                    D = w * A;
                                if (q.add(o(D * R * f(z), M * E + D * s(z))), a += I ? P + R * g : P, I ^ b >= e ^ j >= e) {
                                    var L = T(O(v), O(S));
                                    C(L);
                                    var B = T(i, L);
                                    C(B);
                                    var F = (I ^ P >= 0 ? -1 : 1) * x(B[2]);
                                    (r > F || r === F && (L[0] || L[1])) && (c += I ^ P >= 0 ? 1 : -1)
                                }
                            }
                    return (a < -h || a < h && q < -h) ^ 1 & c
                },
                I = e(2),
                D = function (t, n, e, i, a) {
                    return void 0 === a && (a = B),
                        function (o) {
                            var s, c, u, l = n(o),
                                f = function () {
                                    var t, n = [];
                                    return {
                                        point: function (n, e, r, i) {
                                            var a = [n, e];
                                            arguments.length > 2 && (a.index = r, a.t = i), t.push(a)
                                        },
                                        lineStart: function () {
                                            n.push(t = [])
                                        },
                                        lineEnd: r,
                                        rejoin: function () {
                                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                                        },
                                        result: function () {
                                            var e = n;
                                            return n = [], t = null, e
                                        }
                                    }
                                }(),
                                h = n(f),
                                d = !1,
                                p = {
                                    point: y,
                                    lineStart: v,
                                    lineEnd: g,
                                    polygonStart: function () {
                                        p.point = b, p.lineStart = m, p.lineEnd = x, c = [], s = []
                                    },
                                    polygonEnd: function () {
                                        p.point = y, p.lineStart = v, p.lineEnd = g, c = Object(I.g)(c);
                                        var t = z(s, i);
                                        c.length ? (d || (o.polygonStart(), d = !0), k(c, a, t, e, o)) : t && (d || (o.polygonStart(), d = !0), e(null, null, 1, o)), d && (o.polygonEnd(), d = !1), c = s = null
                                    },
                                    sphere: function () {
                                        e(null, null, 1, o)
                                    }
                                };

                            function y(n, e) {
                                t(n, e) && o.point(n, e)
                            }

                            function _(t, n) {
                                l.point(t, n)
                            }

                            function v() {
                                p.point = _, l.lineStart()
                            }

                            function g() {
                                p.point = y, l.lineEnd()
                            }

                            function b(t, n, e) {
                                u.push([t, n]), h.point(t, n, e)
                            }

                            function m() {
                                h.lineStart(), u = []
                            }

                            function x() {
                                b(u[0][0], u[0][1], !0), h.lineEnd();
                                var t, n, e, r, i = h.clean(),
                                    a = f.result(),
                                    l = a.length;
                                if (u.pop(), s.push(u), u = null, l)
                                    if (1 & i) {
                                        if ((n = (e = a[0]).length - 1) > 0) {
                                            for (d || (o.polygonStart(), d = !0), o.lineStart(), t = 0; t < n; ++t) o.point((r = e[t])[0], r[1]);
                                            o.lineEnd()
                                        }
                                    } else l > 1 && 2 & i && a.push(a.pop().concat(a.shift())), c.push(a.filter(L))
                            }
                            return p
                        }
                };

            function L(t) {
                return t.length > 1
            }

            function B(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - y - h : y - t[1]) - ((n = n.x)[0] < 0 ? n[1] - y - h : y - n[1])
            }

            function F(t, n) {
                this.from = t, this.to = n, this.normal = T(t, n), this.fromNormal = T(this.normal, t), this.toNormal = T(this.normal, n), this.l = function (t) {
                    return t > 1 ? 0 : t < -1 ? p : Math.acos(t)
                }(P(t, n))
            }

            function U(t, n) {
                var e = s(t.l + n.l) - h;
                if (!(P(t.from, n.from) < e || P(t.from, n.to) < e || P(t.to, n.from) < e || P(t.to, n.to) < e)) {
                    var r = T(t.normal, n.normal);
                    C(r);
                    var i = P(r, t.fromNormal),
                        a = P(r, t.toNormal),
                        o = P(r, n.fromNormal),
                        c = P(r, n.toNormal);
                    return i > 0 && a < 0 && o > 0 && c < 0 || R(r, t.from) || R(r, t.to) || R(r, n.from) || R(r, n.to) ? r : (r[0] = -r[0], r[1] = -r[1], r[2] = -r[2], a = -a, o = -o, c = -c, (i = -i) > 0 && a < 0 && o > 0 && c < 0 || R(r, t.from) || R(r, t.to) || R(r, n.from) || R(r, n.to) ? r : void 0)
                }
            }

            function W(t, n) {
                var e = P(t, n.fromNormal),
                    r = P(t, n.toNormal);
                return t = P(t, n.normal), i(t) < d && (e > -d && r < d || e < d && r > -d)
            }
            var H = {},
                V = function (t) {
                    return t
                },
                X = function (t) {
                    return function t(n) {
                        var e;
                        if ("MultiPolygon" === n.type) e = n.coordinates;
                        else {
                            if ("Polygon" !== n.type) return V;
                            e = [n.coordinates]
                        }
                        var r = e.map(function (t) {
                                var n = function (t) {
                                        return function (n, e) {
                                            return z(t, [n, e])
                                        }
                                    }(t = t.map(Y)),
                                    e = function (t) {
                                        var n, e, r = [];
                                        return t.forEach(function (t, i) {
                                            return n = O(t), i && r.push(new F(e, n)), e = n, t
                                        }), r
                                    }(t[0]);
                                return D(n, function (t, n) {
                                    return function (e) {
                                        var r, i, a, o, h, d, y, _ = [];
                                        return {
                                            lineStart: function () {
                                                r = null, d = 1, y = []
                                            },
                                            lineEnd: function () {
                                                h && _.push(y), _.forEach(function (t) {
                                                    e.lineStart(), t.forEach(function (t) {
                                                        e.point(...t)
                                                    }), e.lineEnd()
                                                }), _ = []
                                            },
                                            point: function (e, v, g) {
                                                -1 == s(e) && (e -= 1e-5 * l(f(e))), g && (e = i, v = a);
                                                var b, m, x, w, M, k = O([e, v]),
                                                    S = h;
                                                if (r) {
                                                    var j = new F(r, k),
                                                        N = [];
                                                    for (m = 0, x = 100; m < t.length && x > 0; ++m)
                                                        if (b = U(j, w = t[m])) {
                                                            if (b === H || R(b, r) || R(b, k) || R(b, w.from) || R(b, w.to)) {
                                                                M = 1e-4, e = (e + 3 * p + J(m, x) * M) % (2 * p) - p, v = u(p / 2 - 1e-4, c(1e-4 - p / 2, v + J(m, x) * M)), j = new F(r, k = O([e, v])), m = -1, --x, N.length = 0;
                                                                continue
                                                            }
                                                            var A = E(b);
                                                            b.distance = $(r, b), b.index = m, b.t = $(w.from, b), b[0] = A[0], b[1] = A[1], b.pop(), N.push(b)
                                                        } if (N.length)
                                                        for (d = 0, N.sort(function (t, n) {
                                                                return t.distance - n.distance
                                                            }), m = 0; m < N.length; ++m) b = N[m], (S = !S) ? (y = []).push([b[0], b[1], b.index, b.t]) : (y.push([b[0], b[1], b.index, b.t]), _.push(y));
                                                    S && y.push([e, v])
                                                } else {
                                                    for (m = 0, x = 100; m < t.length && x > 0; ++m) W(k, w = t[m]) && (M = 1e-4, k = O([e = (e + 3 * p + J(m, x) * M) % (2 * p) - p, v = u(p / 2 - 1e-4, c(1e-4 - p / 2, v + J(m, x) * M))]), m = -1, --x);
                                                    o = S = n(i = e, a = v), S && (y = []).push([e, v])
                                                }
                                                r = k, h = S
                                            },
                                            clean: function () {
                                                return d | (o && h) << 1
                                            }
                                        }
                                    }
                                }(e, n), function (t, n) {
                                    return function (e, r, i, a) {
                                        if (null == e) a.polygonStart(), n.forEach(function (t) {
                                            a.lineStart(), t.forEach(function (t) {
                                                a.point(t[0], t[1])
                                            }), a.lineEnd()
                                        }), a.polygonEnd();
                                        else if (e.index !== r.index && null != e.index && null != r.index)
                                            for (var o = e.index; o !== r.index; o = (o + i + t.length) % t.length) {
                                                var s = t[o],
                                                    c = E(i > 0 ? s.to : s.from);
                                                a.point(c[0], c[1])
                                            } else if (e.index === r.index && e.t > r.t && null != e.index && null != r.index)
                                                for (o = 0; o < t.length; o++) s = t[(e.index + o * i + t.length) % t.length], c = E(i > 0 ? s.to : s.from), a.point(c[0], c[1])
                                    }
                                }(e, t), t[0][0], G)
                            }),
                            i = function (t) {
                                var n = r.map(n => n(t));
                                return {
                                    point: function (t, e) {
                                        n.forEach(n => n.point(t, e))
                                    },
                                    lineStart: function () {
                                        n.forEach(t => t.lineStart())
                                    },
                                    lineEnd: function () {
                                        n.forEach(t => t.lineEnd())
                                    },
                                    polygonStart: function () {
                                        n.forEach(t => t.polygonStart())
                                    },
                                    polygonEnd: function () {
                                        n.forEach(t => t.polygonEnd())
                                    },
                                    sphere: function () {
                                        n.forEach(t => t.sphere())
                                    }
                                }
                            };
                        return i.polygon = function (e) {
                            return e ? t(n = e) : n
                        }, i
                    }(t)
                };

            function Y(t) {
                return t.map(function (t) {
                    return [t[0] * m, t[1] * m]
                })
            }

            function G(t, n) {
                return t = t.x, n = n.x, t.index - n.index || t.t - n.t
            }

            function $(t, n) {
                var e = T(t, n);
                return o(w(P(e, e)), P(t, n))
            }

            function J(t, n) {
                return l(f(100 * t + n))
            }
            var Z = e(0),
                Q = function (t, n) {
                    var e = tt(t[1], t[0]),
                        r = tt(n[1], n[0]),
                        i = function (t, n) {
                            return o(t[0] * n[1] - t[1] * n[0], t[0] * n[0] + t[1] * n[1])
                        }(e, r),
                        a = nt(e) / nt(r);
                    return K([1, 0, t[0][0], 0, 1, t[0][1]], K([a, 0, 0, 0, a, 0], K([s(i), f(i), 0, -f(i), s(i), 0], [1, 0, -n[0][0], 0, 1, -n[0][1]])))
                };

            function K(t, n) {
                return [t[0] * n[0] + t[1] * n[3], t[0] * n[1] + t[1] * n[4], t[0] * n[2] + t[1] * n[5] + t[2], t[3] * n[0] + t[4] * n[3], t[3] * n[1] + t[4] * n[4], t[3] * n[2] + t[4] * n[5] + t[5]]
            }

            function tt(t, n) {
                return [t[0] - n[0], t[1] - n[1]]
            }

            function nt(t) {
                return w(t[0] * t[0] + t[1] * t[1])
            }
            var et = function (t, n) {
                function e(t, e) {
                    var r, i = n(t, e),
                        a = i.project([t * b, e * b]);
                    return (r = i.transform) ? [r[0] * a[0] + r[1] * a[1] + r[2], -(r[3] * a[0] + r[4] * a[1] + r[5])] : (a[1] = -a[1], a)
                }! function t(n, e) {
                    if (n.edges = function (t) {
                            for (var n = t.length, e = [], r = t[n - 1], i = 0; i < n; ++i) e.push([r, r = t[i]]);
                            return e
                        }(n.face), e.face) {
                        var r = n.shared = function (t, n) {
                                for (var e, r, i = t.length, a = null, o = 0; o < i; ++o) {
                                    e = t[o];
                                    for (var s = n.length; --s >= 0;)
                                        if (r = n[s], e[0] === r[0] && e[1] === r[1]) {
                                            if (a) return [a, e];
                                            a = e
                                        }
                                }
                            }(n.face, e.face),
                            i = Q(r.map(e.project), r.map(n.project));
                        n.transform = e.transform ? K(e.transform, i) : i;
                        for (var a = e.edges, o = 0, s = a.length; o < s; ++o) rt(r[0], a[o][1]) && rt(r[1], a[o][0]) && (a[o] = n), rt(r[0], a[o][0]) && rt(r[1], a[o][1]) && (a[o] = n);
                        for (o = 0, s = (a = n.edges).length; o < s; ++o) rt(r[0], a[o][0]) && rt(r[1], a[o][1]) && (a[o] = e), rt(r[0], a[o][1]) && rt(r[1], a[o][0]) && (a[o] = e)
                    } else n.transform = e.transform;
                    return n.children && n.children.forEach(function (e) {
                        t(e, n)
                    }), n
                }(t, {
                    transform: null
                }), it(t) && (e.invert = function (e, r) {
                    var i = function t(e, r) {
                        var i = e.project.invert,
                            a = e.transform,
                            o = r;
                        if (a && (o = [(a = function (t) {
                                var n = 1 / (t[0] * t[4] - t[1] * t[3]);
                                return [n * t[4], -n * t[1], n * (t[1] * t[5] - t[2] * t[4]), -n * t[3], n * t[0], n * (t[2] * t[3] - t[0] * t[5])]
                            }(a))[0] * o[0] + a[1] * o[1] + a[2], a[3] * o[0] + a[4] * o[1] + a[5]]), i && e === function (t) {
                                return n(t[0] * m, t[1] * m)
                            }(s = i(o))) return s;
                        for (var s, c = e.children, u = 0, l = c && c.length; u < l; ++u)
                            if (s = t(c[u], r)) return s
                    }(t, [e, -r]);
                    return i && (i[0] *= m, i[1] *= m, i)
                });
                var r = Object(Z.A)(e),
                    a = [];
                return function t(n, e, r) {
                    var a, o, s = e.edges,
                        c = s.length,
                        u = {
                            type: "MultiPoint",
                            coordinates: e.face
                        },
                        l = e.face.filter(function (t) {
                            return 90 !== i(t[1])
                        }),
                        f = Object(Z.h)({
                            type: "MultiPoint",
                            coordinates: l
                        }),
                        d = !1,
                        p = -1,
                        y = f[1][0] - f[0][0];
                    if (e.centroid = 180 === y || 360 === y ? [(f[0][0] + f[1][0]) / 2, (f[0][1] + f[1][1]) / 2] : Object(Z.i)(u), r)
                        for (; ++p < c && s[p] !== r;);
                    ++p;
                    for (var _ = 0; _ < c; ++_) o = s[(_ + p) % c], Array.isArray(o) ? (d || (n.point((a = Object(Z.v)(o[0], e.centroid)(h))[0], a[1]), d = !0), n.point((a = Object(Z.v)(o[1], e.centroid)(h))[0], a[1])) : (d = !1, o !== r && t(n, o, e))
                }({
                    point: function (t, n) {
                        a.push([t, n])
                    }
                }, t), a.push(a[0]), r.preclip(X({
                    type: "Polygon",
                    coordinates: [a]
                })), r.tree = function () {
                    return t
                }, r
            };

            function rt(t, n) {
                return t && n && t[0] === n[0] && t[1] === n[1]
            }

            function it(t) {
                return t.project.invert || t.children && t.children.some(it)
            }
            var at = [
                    [0, 90],
                    [-90, 0],
                    [0, 0],
                    [90, 0],
                    [180, 0],
                    [0, -90]
                ],
                ot = ([
                    [0, 2, 1],
                    [0, 3, 2],
                    [5, 1, 2],
                    [5, 2, 3],
                    [0, 1, 4],
                    [0, 4, 3],
                    [5, 4, 1],
                    [5, 3, 4]
                ].map(function (t) {
                    return t.map(function (t) {
                        return at[t]
                    })
                }), e(12));
            w(3);
            w(3), ot.d && Object(ot.d)(.5);
            var st = x(1 / 3),
                ct = [
                    [0, 90],
                    [-180, -st * b],
                    [-60, -st * b],
                    [60, -st * b]
                ];
            [
                [1, 2, 3],
                [0, 2, 1],
                [0, 3, 2],
                [0, 1, 3]
            ].map(function (t) {
                return t.map(function (t) {
                    return ct[t]
                })
            });
            var ut = a(v) * b,
                lt = [
                    [0, ut],
                    [90, ut],
                    [180, ut],
                    [-90, ut],
                    [0, -ut],
                    [90, -ut],
                    [180, -ut],
                    [-90, -ut]
                ];
            [
                [0, 3, 2, 1],
                [0, 1, 5, 4],
                [1, 2, 6, 5],
                [2, 3, 7, 6],
                [3, 0, 4, 7],
                [4, 5, 6, 7]
            ].map(function (t) {
                return t.map(function (t) {
                    return lt[t]
                })
            }), e.d(n, "a", function () {
                return X
            }), e.d(n, "b", function () {
                return et
            })
        },
        60: function (t, n, e) {
            "use strict";
            var r = 0;

            function i(t, n) {
                var e = n.data;
                if (Array.isArray(e) && !(e.length < 2)) {
                    var r = e[0],
                        i = e[1],
                        a = e[2],
                        o = t._callbacks[r];
                    o && (delete t._callbacks[r], o(i, a))
                }
            }

            function a(t) {
                var n = this;
                n._worker = t, n._callbacks = {}, t.addEventListener("message", function (t) {
                    i(n, t)
                })
            }
            a.prototype.postMessage = function (t) {
                var n = this,
                    e = r++,
                    a = [e, t];
                return new Promise(function (t, r) {
                    if (n._callbacks[e] = function (n, e) {
                            if (n) return r(new Error(n.message));
                            t(e)
                        }, void 0 !== n._worker.controller) {
                        var o = new MessageChannel;
                        o.port1.onmessage = function (t) {
                            i(n, t)
                        }, n._worker.controller.postMessage(a, [o.port2])
                    } else n._worker.postMessage(a)
                })
            }, t.exports = a
        },
        61: function (t, n, e) {
            var r = e(70);

            function i() {
                var t = !1,
                    n = [],
                    e = [],
                    a = [],
                    o = function (n) {
                        if (t) {
                            for (var r = a.length - 1; r >= 0; r--)
                                if (n >= a[r]) return e[r];
                            return e[0]
                        }
                    };

                function s() {
                    if (!(e.length <= 2)) {
                        var i = r(n, Math.min(n.length, e.length));
                        t = 0 !== i.length, a = [];
                        for (var o = 0; o < i.length; o++) a.push(i[o])
                    }
                }
                return o.domain = function () {
                    return arguments.length ? (n = arguments[0], s(), o) : n
                }, o.range = function () {
                    if (arguments.length) {
                        var t = arguments[0],
                            n = t.length !== e.length;
                        return e = t, n && s(), o
                    }
                    return e
                }, o.invertExtent = function (t) {
                    for (var n = NaN, r = NaN, i = 0; i < e.length; i++)
                        if (e[i] === t) {
                            n = a[i], r = i + 1 < e.length ? a[i + 1] : NaN;
                            break
                        } return [n, r]
                }, o.clusters = function () {
                    return a.slice(1)
                }, o.export = function () {
                    return {
                        isReady: t,
                        domain: n,
                        range: e,
                        breakpoints: a
                    }
                }, o.import = function (r) {
                    if (!r) throw new Error("Import requires parameters");
                    return t = r.isReady, n = r.domain, e = r.range, a = r.breakpoints, o
                }, o.copy = function () {
                    return i().domain(n).range(e)
                }, o
            }
            "object" == typeof d3 && (d3.scaleCluster = i), t.exports = i
        },
        62: function (t, n) {
            var e, r, i, a, o, s;

            function c(t, n, e, r, i, a) {
                var o, s, c, u, l, f, h, d, p, y, _, v, g, b;
                for (p = 0; p < a; p++) {
                    for (h = p, d = 0, u = l = (o = t[f = p * i]) * r[6], _ = r[0], v = r[1], g = r[4], b = r[5], y = 0; y < i; y++) c = (s = t[f]) * _ + o * v + u * g + l * b, l = u, u = c, o = s, e[d] = u, d++, f++;
                    for (d--, h += a * (i - 1), u = l = (o = t[--f]) * r[7], s = o, _ = r[2], v = r[3], y = i - 1; y >= 0; y--) c = s * _ + o * v + u * g + l * b, l = u, u = c, o = s, s = t[f], n[h] = e[d] + u, f--, d--, h -= a
                }
            }
            t.exports = function (t, n, u, l) {
                if (l) {
                    var f = new Uint16Array(t.length),
                        h = new Float32Array(Math.max(n, u)),
                        d = function (t) {
                            t < .5 && (t = .5);
                            var n = Math.exp(.527076) / t,
                                c = Math.exp(-n),
                                u = Math.exp(-2 * n),
                                l = (1 - c) * (1 - c) / (1 + 2 * n * c - u);
                            return e = l, r = l * (n - 1) * c, i = l * (n + 1) * c, a = -l * u, o = 2 * c, s = -u, new Float32Array([e, r, i, a, o, s, (e + r) / (1 - o - s), (i + a) / (1 - o - s)])
                        }(l);
                    c(t, f, h, d, n, u), c(f, t, h, d, u, n)
                }
            }
        },
        63: function (t, n, e) {
            var r, i = i || function (t) {
                "use strict";
                if (!(void 0 === t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var n = function () {
                            return t.URL || t.webkitURL || t
                        },
                        e = t.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        r = "download" in e,
                        i = /constructor/i.test(t.HTMLElement) || t.safari,
                        a = /CriOS\/[\d]+/.test(navigator.userAgent),
                        o = function (n) {
                            (t.setImmediate || t.setTimeout)(function () {
                                throw n
                            }, 0)
                        },
                        s = function (t) {
                            setTimeout(function () {
                                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                            }, 4e4)
                        },
                        c = function (t) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
                                type: t.type
                            }) : t
                        },
                        u = function (u, l, f) {
                            f || (u = c(u));
                            var h, d = this,
                                p = "application/octet-stream" === u.type,
                                y = function () {
                                    ! function (t, n, e) {
                                        for (var r = (n = [].concat(n)).length; r--;) {
                                            var i = t["on" + n[r]];
                                            if ("function" == typeof i) try {
                                                i.call(t, t)
                                            } catch (t) {
                                                o(t)
                                            }
                                        }
                                    }(d, "writestart progress write writeend".split(" "))
                                };
                            if (d.readyState = d.INIT, r) return h = n().createObjectURL(u), void setTimeout(function () {
                                var t, n;
                                e.href = h, e.download = l, t = e, n = new MouseEvent("click"), t.dispatchEvent(n), y(), s(h), d.readyState = d.DONE
                            });
                            ! function () {
                                if ((a || p && i) && t.FileReader) {
                                    var e = new FileReader;
                                    return e.onloadend = function () {
                                        var n = a ? e.result : e.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                        t.open(n, "_blank") || (t.location.href = n), n = void 0, d.readyState = d.DONE, y()
                                    }, e.readAsDataURL(u), void(d.readyState = d.INIT)
                                }
                                h || (h = n().createObjectURL(u)), p ? t.location.href = h : t.open(h, "_blank") || (t.location.href = h), d.readyState = d.DONE, y(), s(h)
                            }()
                        },
                        l = u.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, n, e) {
                        return n = n || t.name || "download", e || (t = c(t)), navigator.msSaveOrOpenBlob(t, n)
                    } : (l.abort = function () {}, l.readyState = l.INIT = 0, l.WRITING = 1, l.DONE = 2, l.error = l.onwritestart = l.onprogress = l.onwrite = l.onabort = l.onerror = l.onwriteend = null, function (t, n, e) {
                        return new u(t, n || t.name || "download", e)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
            t.exports ? t.exports.saveAs = i : null !== e(72) && null !== e(73) && (void 0 === (r = function () {
                return i
            }.call(n, e, n, t)) || (t.exports = r))
        },
        64: function (t, n, e) {
            "use strict";
            e.d(n, "a", function () {
                return a
            });
            var r = Object.assign || function (t) {
                    for (var n, e = 1, r = arguments.length; e < r; e++)
                        for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    return t
                },
                i = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    scale: 1,
                    corners: 1,
                    color: "#000",
                    fadeColor: "transparent",
                    animation: "spinner-line-fade-default",
                    rotate: 0,
                    direction: 1,
                    speed: 1,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "50%",
                    left: "50%",
                    shadow: "0 0 1px transparent",
                    position: "absolute"
                },
                a = function () {
                    function t(t) {
                        void 0 === t && (t = {}), this.opts = r({}, i, t)
                    }
                    return t.prototype.spin = function (t) {
                        return this.stop(), this.el = document.createElement("div"), this.el.className = this.opts.className, this.el.setAttribute("role", "progressbar"), o(this.el, {
                                position: this.opts.position,
                                width: 0,
                                zIndex: this.opts.zIndex,
                                left: this.opts.left,
                                top: this.opts.top,
                                transform: "scale(" + this.opts.scale + ")"
                            }), t && t.insertBefore(this.el, t.firstChild || null),
                            function (t, n) {
                                var e = Math.round(n.corners * n.width * 500) / 1e3 + "px",
                                    r = "none";
                                !0 === n.shadow ? r = "0 2px 4px #000" : "string" == typeof n.shadow && (r = n.shadow);
                                for (var i = function (t) {
                                        for (var n = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/, e = [], r = 0, i = t.split(","); r < i.length; r++) {
                                            var a = i[r].match(n);
                                            if (null !== a) {
                                                var o = +a[2],
                                                    s = +a[5],
                                                    c = a[4],
                                                    u = a[7];
                                                0 !== o || c || (c = u), 0 !== s || u || (u = c), c === u && e.push({
                                                    prefix: a[1] || "",
                                                    x: o,
                                                    y: s,
                                                    xUnits: c,
                                                    yUnits: u,
                                                    end: a[8]
                                                })
                                            }
                                        }
                                        return e
                                    }(r), a = 0; a < n.lines; a++) {
                                    var u = ~~(360 / n.lines * a + n.rotate),
                                        l = o(document.createElement("div"), {
                                            position: "absolute",
                                            top: -n.width / 2 + "px",
                                            width: n.length + n.width + "px",
                                            height: n.width + "px",
                                            background: s(n.fadeColor, a),
                                            borderRadius: e,
                                            transformOrigin: "left",
                                            transform: "rotate(" + u + "deg) translateX(" + n.radius + "px)"
                                        }),
                                        f = a * n.direction / n.lines / n.speed;
                                    f -= 1 / n.speed;
                                    var h = o(document.createElement("div"), {
                                        width: "100%",
                                        height: "100%",
                                        background: s(n.color, a),
                                        borderRadius: e,
                                        boxShadow: c(i, u),
                                        animation: 1 / n.speed + "s linear " + f + "s infinite " + n.animation
                                    });
                                    l.appendChild(h), t.appendChild(l)
                                }
                            }(this.el, this.opts), this
                    }, t.prototype.stop = function () {
                        return this.el && ("undefined" != typeof requestAnimationFrame ? cancelAnimationFrame(this.animateId) : clearTimeout(this.animateId), this.el.parentNode && this.el.parentNode.removeChild(this.el), this.el = void 0), this
                    }, t
                }();

            function o(t, n) {
                for (var e in n) t.style[e] = n[e];
                return t
            }

            function s(t, n) {
                return "string" == typeof t ? t : t[n % t.length]
            }

            function c(t, n) {
                for (var e = [], r = 0, i = t; r < i.length; r++) {
                    var a = i[r],
                        o = u(a.x, a.y, n);
                    e.push(a.prefix + o[0] + a.xUnits + " " + o[1] + a.yUnits + a.end)
                }
                return e.join(", ")
            }

            function u(t, n, e) {
                var r = e * Math.PI / 180,
                    i = Math.sin(r),
                    a = Math.cos(r);
                return [Math.round(1e3 * (t * a + n * i)) / 1e3, Math.round(1e3 * (-t * i + n * a)) / 1e3]
            }
        },
        66: function (t, n, e) {
            "use strict";
            var r = "http://www.w3.org/1999/xhtml",
                i = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: r,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                a = function (t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? {
                        space: i[n],
                        local: t
                    } : t
                },
                o = function (t) {
                    var n = a(t);
                    return (n.local ? function (t) {
                        return function () {
                            return this.ownerDocument.createElementNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            var n = this.ownerDocument,
                                e = this.namespaceURI;
                            return e === r && n.documentElement.namespaceURI === r ? n.createElement(t) : n.createElementNS(e, t)
                        }
                    })(n)
                },
                s = 0;

            function c() {
                this._ = "@" + (++s).toString(36)
            }
            c.prototype = function () {
                return new c
            }.prototype = {
                constructor: c,
                get: function (t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function (t, n) {
                    return t[this._] = n
                },
                remove: function (t) {
                    return this._ in t && delete t[this._]
                },
                toString: function () {
                    return this._
                }
            };
            var u = function (t) {
                return function () {
                    return this.matches(t)
                }
            };
            if ("undefined" != typeof document) {
                var l = document.documentElement;
                if (!l.matches) {
                    var f = l.webkitMatchesSelector || l.msMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector;
                    u = function (t) {
                        return function () {
                            return f.call(this, t)
                        }
                    }
                }
            }
            var h = u,
                d = {},
                p = null;

            function y(t, n, e) {
                return t = _(t, n, e),
                    function (n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function _(t, n, e) {
                return function (r) {
                    var i = p;
                    p = r;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        p = i
                    }
                }
            }

            function v(t) {
                return function () {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, a = n.length; r < a; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function g(t, n, e) {
                var r = d.hasOwnProperty(t.type) ? y : _;
                return function (i, a, o) {
                    var s, c = this.__on,
                        u = r(n, a, o);
                    if (c)
                        for (var l = 0, f = c.length; l < f; ++l)
                            if ((s = c[l]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = u, s.capture = e), void(s.value = n);
                    this.addEventListener(t.type, u, e), s = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: u,
                        capture: e
                    }, c ? c.push(s) : this.__on = [s]
                }
            }

            function b() {}
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (d = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));
            var m = function (t) {
                return null == t ? b : function () {
                    return this.querySelector(t)
                }
            };

            function x() {
                return []
            }
            var w = function (t) {
                return new Array(t.length)
            };

            function M(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            M.prototype = {
                constructor: M,
                appendChild: function (t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function (t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function (t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function (t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var k = "$";

            function S(t, n, e, r, i, a) {
                for (var o, s = 0, c = n.length, u = a.length; s < u; ++s)(o = n[s]) ? (o.__data__ = a[s], r[s] = o) : e[s] = new M(t, a[s]);
                for (; s < c; ++s)(o = n[s]) && (i[s] = o)
            }

            function j(t, n, e, r, i, a, o) {
                var s, c, u, l = {},
                    f = n.length,
                    h = a.length,
                    d = new Array(f);
                for (s = 0; s < f; ++s)(c = n[s]) && (d[s] = u = k + o.call(c, c.__data__, s, n), u in l ? i[s] = c : l[u] = c);
                for (s = 0; s < h; ++s)(c = l[u = k + o.call(t, a[s], s, a)]) ? (r[s] = c, c.__data__ = a[s], l[u] = null) : e[s] = new M(t, a[s]);
                for (s = 0; s < f; ++s)(c = n[s]) && l[d[s]] === c && (i[s] = c)
            }

            function N(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var A = function (t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function E(t) {
                return t.trim().split(/^|\s+/)
            }

            function O(t) {
                return t.classList || new P(t)
            }

            function P(t) {
                this._node = t, this._names = E(t.getAttribute("class") || "")
            }

            function T(t, n) {
                for (var e = O(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function C(t, n) {
                for (var e = O(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function R() {
                this.textContent = ""
            }

            function q() {
                this.innerHTML = ""
            }

            function z() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function I() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function D() {
                return null
            }

            function L() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function B(t, n, e) {
                var r = A(t),
                    i = r.CustomEvent;
                i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }
            P.prototype = {
                add: function (t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function (t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function (t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var F = [null];

            function U(t, n) {
                this._groups = t, this._parents = n
            }
            U.prototype = function () {
                return new U([
                    [document.documentElement]
                ], F)
            }.prototype = {
                constructor: U,
                select: function (t) {
                    "function" != typeof t && (t = m(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var a, o, s = n[i], c = s.length, u = r[i] = new Array(c), l = 0; l < c; ++l)(a = s[l]) && (o = t.call(a, a.__data__, l, s)) && ("__data__" in a && (o.__data__ = a.__data__), u[l] = o);
                    return new U(r, this._parents)
                },
                selectAll: function (t) {
                    "function" != typeof t && (t = function (t) {
                        return null == t ? x : function () {
                            return this.querySelectorAll(t)
                        }
                    }(t));
                    for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
                        for (var o, s = n[a], c = s.length, u = 0; u < c; ++u)(o = s[u]) && (r.push(t.call(o, o.__data__, u, s)), i.push(o));
                    return new U(r, i)
                },
                filter: function (t) {
                    "function" != typeof t && (t = h(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var a, o = n[i], s = o.length, c = r[i] = [], u = 0; u < s; ++u)(a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
                    return new U(r, this._parents)
                },
                data: function (t, n) {
                    if (!t) return d = new Array(this.size()), u = -1, this.each(function (t) {
                        d[++u] = t
                    }), d;
                    var e = n ? j : S,
                        r = this._parents,
                        i = this._groups;
                    "function" != typeof t && (t = function (t) {
                        return function () {
                            return t
                        }
                    }(t));
                    for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
                        var l = r[u],
                            f = i[u],
                            h = f.length,
                            d = t.call(l, l && l.__data__, u, r),
                            p = d.length,
                            y = s[u] = new Array(p),
                            _ = o[u] = new Array(p);
                        e(l, f, y, _, c[u] = new Array(h), d, n);
                        for (var v, g, b = 0, m = 0; b < p; ++b)
                            if (v = y[b]) {
                                for (b >= m && (m = b + 1); !(g = _[m]) && ++m < p;);
                                v._next = g || null
                            }
                    }
                    return (o = new U(o, r))._enter = s, o._exit = c, o
                },
                enter: function () {
                    return new U(this._enter || this._groups.map(w), this._parents)
                },
                exit: function () {
                    return new U(this._exit || this._groups.map(w), this._parents)
                },
                merge: function (t) {
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
                        for (var c, u = n[s], l = e[s], f = u.length, h = o[s] = new Array(f), d = 0; d < f; ++d)(c = u[d] || l[d]) && (h[d] = c);
                    for (; s < r; ++s) o[s] = n[s];
                    return new U(o, this._parents)
                },
                order: function () {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
                    return this
                },
                sort: function (t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = N);
                    for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
                        for (var o, s = e[a], c = s.length, u = i[a] = new Array(c), l = 0; l < c; ++l)(o = s[l]) && (u[l] = o);
                        u.sort(n)
                    }
                    return new U(i, this._parents).order()
                },
                call: function () {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function () {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each(function () {
                        t[++n] = this
                    }), t
                },
                node: function () {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                            var o = r[i];
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
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, a = n[e], o = 0, s = a.length; o < s; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
                    return this
                },
                attr: function (t, n) {
                    var e = a(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? function (t) {
                        return function () {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof n ? e.local ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                        }
                    } : e.local ? function (t, n) {
                        return function () {
                            this.setAttributeNS(t.space, t.local, n)
                        }
                    } : function (t, n) {
                        return function () {
                            this.setAttribute(t, n)
                        }
                    })(e, n))
                },
                style: function (t, n, e) {
                    var r;
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof n ? function (t, n, e) {
                        return function () {
                            var r = n.apply(this, arguments);
                            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                        }
                    } : function (t, n, e) {
                        return function () {
                            this.style.setProperty(t, n, e)
                        }
                    })(t, n, null == e ? "" : e)) : A(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
                },
                property: function (t, n) {
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            delete this[t]
                        }
                    } : "function" == typeof n ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? delete this[t] : this[t] = e
                        }
                    } : function (t, n) {
                        return function () {
                            this[t] = n
                        }
                    })(t, n)) : this.node()[t]
                },
                classed: function (t, n) {
                    var e = E(t + "");
                    if (arguments.length < 2) {
                        for (var r = O(this.node()), i = -1, a = e.length; ++i < a;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            (n.apply(this, arguments) ? T : C)(this, t)
                        }
                    } : n ? function (t) {
                        return function () {
                            T(this, t)
                        }
                    } : function (t) {
                        return function () {
                            C(this, t)
                        }
                    })(e, n))
                },
                text: function (t) {
                    return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function (t) {
                    return arguments.length ? this.each(null == t ? q : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function () {
                    return this.each(z)
                },
                lower: function () {
                    return this.each(I)
                },
                append: function (t) {
                    var n = "function" == typeof t ? t : o(t);
                    return this.select(function () {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function (t, n) {
                    var e = "function" == typeof t ? t : o(t),
                        r = null == n ? D : "function" == typeof n ? n : m(n);
                    return this.select(function () {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    })
                },
                remove: function () {
                    return this.each(L)
                },
                datum: function (t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function (t, n, e) {
                    var r, i, a = function (t) {
                            return t.trim().split(/^|\s+/).map(function (t) {
                                var n = "",
                                    e = t.indexOf(".");
                                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                    type: t,
                                    name: n
                                }
                            })
                        }(t + ""),
                        o = a.length;
                    if (!(arguments.length < 2)) {
                        for (s = n ? g : v, null == e && (e = !1), r = 0; r < o; ++r) this.each(s(a[r], n, e));
                        return this
                    }
                    var s = this.node().__on;
                    if (s)
                        for (var c, u = 0, l = s.length; u < l; ++u)
                            for (r = 0, c = s[u]; r < o; ++r)
                                if ((i = a[r]).type === c.type && i.name === c.name) return c.value
                },
                dispatch: function (t, n) {
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            return B(this, t, n.apply(this, arguments))
                        }
                    } : function (t, n) {
                        return function () {
                            return B(this, t, n)
                        }
                    })(t, n))
                }
            };
            var W, H = function (t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, r = t.slice(0, e);
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
                },
                V = function (t) {
                    return (t = H(Math.abs(t))) ? t[1] : NaN
                },
                X = function (t, n) {
                    var e = H(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1];
                    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
                },
                Y = {
                    "": function (t, n) {
                        t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
                            case ".":
                                a = e = i;
                                break;
                            case "0":
                                0 === a && (a = i), e = i;
                                break;
                            case "e":
                                break t;
                            default:
                                a > 0 && (a = 0)
                        }
                        return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
                    },
                    "%": function (t, n) {
                        return (100 * t).toFixed(n)
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
                    e: function (t, n) {
                        return t.toExponential(n)
                    },
                    f: function (t, n) {
                        return t.toFixed(n)
                    },
                    g: function (t, n) {
                        return t.toPrecision(n)
                    },
                    o: function (t) {
                        return Math.round(t).toString(8)
                    },
                    p: function (t, n) {
                        return X(100 * t, n)
                    },
                    r: X,
                    s: function (t, n) {
                        var e = H(t, n);
                        if (!e) return t + "";
                        var r = e[0],
                            i = e[1],
                            a = i - (W = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                            o = r.length;
                        return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + H(t, Math.max(0, n + a - 1))[0]
                    },
                    X: function (t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function (t) {
                        return Math.round(t).toString(16)
                    }
                },
                G = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i,
                $ = function (t) {
                    return new J(t)
                };

            function J(t) {
                if (!(n = G.exec(t))) throw new Error("invalid format: " + t);
                var n, e = n[1] || " ",
                    r = n[2] || ">",
                    i = n[3] || "-",
                    a = n[4] || "",
                    o = !!n[5],
                    s = n[6] && +n[6],
                    c = !!n[7],
                    u = n[8] && +n[8].slice(1),
                    l = n[9] || "";
                "n" === l ? (c = !0, l = "g") : Y[l] || (l = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = a, this.zero = o, this.width = s, this.comma = c, this.precision = u, this.type = l
            }
            J.prototype.toString = function () {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
            };
            var Z = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

            function Q(t) {
                return t
            }
            var K, tt, nt, et = function (t) {
                var n = t.grouping && t.thousands ? function (t, n) {
                        return function (e, r) {
                            for (var i = e.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(e.substring(i -= s, i + s)), !((c += s + 1) > r));) s = t[o = (o + 1) % t.length];
                            return a.reverse().join(n)
                        }
                    }(t.grouping, t.thousands) : Q,
                    e = t.currency,
                    r = t.decimal;

                function i(t) {
                    var i = (t = $(t)).fill,
                        a = t.align,
                        o = t.sign,
                        s = t.symbol,
                        c = t.zero,
                        u = t.width,
                        l = t.comma,
                        f = t.precision,
                        h = t.type,
                        d = "$" === s ? e[0] : "#" === s && /[boxX]/.test(h) ? "0" + h.toLowerCase() : "",
                        p = "$" === s ? e[1] : /[%p]/.test(h) ? "%" : "",
                        y = Y[h],
                        _ = !h || /[defgprs%]/.test(h);

                    function v(t) {
                        var e, s, v, g = d,
                            b = p;
                        if ("c" === h) b = y(t) + b, t = "";
                        else {
                            var m = ((t = +t) < 0 || 1 / t < 0) && (t *= -1, !0);
                            if (t = y(t, f), m)
                                for (e = -1, s = t.length, m = !1; ++e < s;)
                                    if (48 < (v = t.charCodeAt(e)) && v < 58 || "x" === h && 96 < v && v < 103 || "X" === h && 64 < v && v < 71) {
                                        m = !0;
                                        break
                                    } if (g = (m ? "(" === o ? o : "-" : "-" === o || "(" === o ? "" : o) + g, b = b + ("s" === h ? Z[8 + W / 3] : "") + (m && "(" === o ? ")" : ""), _)
                                for (e = -1, s = t.length; ++e < s;)
                                    if (48 > (v = t.charCodeAt(e)) || v > 57) {
                                        b = (46 === v ? r + t.slice(e + 1) : t.slice(e)) + b, t = t.slice(0, e);
                                        break
                                    }
                        }
                        l && !c && (t = n(t, 1 / 0));
                        var x = g.length + t.length + b.length,
                            w = x < u ? new Array(u - x + 1).join(i) : "";
                        switch (l && c && (t = n(w + t, w.length ? u - b.length : 1 / 0), w = ""), a) {
                            case "<":
                                return g + t + b + w;
                            case "=":
                                return g + w + t + b;
                            case "^":
                                return w.slice(0, x = w.length >> 1) + g + t + b + w.slice(x)
                        }
                        return w + g + t + b
                    }
                    return f = null == f ? h ? 6 : 12 : /[gprs]/.test(h) ? Math.max(1, Math.min(21, f)) : Math.max(0, Math.min(20, f)), v.toString = function () {
                        return t + ""
                    }, v
                }
                return {
                    format: i,
                    formatPrefix: function (t, n) {
                        var e = i(((t = $(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(V(n) / 3))),
                            a = Math.pow(10, -r),
                            o = Z[8 + r / 3];
                        return function (t) {
                            return e(a * t) + o
                        }
                    }
                }
            };
            K = et({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            }), tt = K.format, nt = K.formatPrefix;
            var rt = {
                value: function () {}
            };

            function it() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new at(r)
            }

            function at(t) {
                this._ = t
            }

            function ot(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }

            function st(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        t[r] = rt, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            at.prototype = it.prototype = {
                constructor: at,
                on: function (t, n) {
                    var e, r = this._,
                        i = function (t, n) {
                            return t.trim().split(/^|\s+/).map(function (t) {
                                var e = "",
                                    r = t.indexOf(".");
                                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                                return {
                                    type: t,
                                    name: e
                                }
                            })
                        }(t + "", r),
                        a = -1,
                        o = i.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++a < o;)
                            if (e = (t = i[a]).type) r[e] = st(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = st(r[e], t.name, null);
                        return this
                    }
                    for (; ++a < o;)
                        if ((e = (t = i[a]).type) && (e = ot(r[e], t.name))) return e
                },
                copy: function () {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new at(t)
                },
                call: function (t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
                },
                apply: function (t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
                }
            };
            var ct = it,
                ut = function (t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                lt = function (t) {
                    return 1 === t.length && (t = function (t) {
                        return function (n, e) {
                            return ut(t(n), e)
                        }
                    }(t)), {
                        left: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var a = r + i >>> 1;
                                t(n[a], e) < 0 ? r = a + 1 : i = a
                            }
                            return r
                        },
                        right: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var a = r + i >>> 1;
                                t(n[a], e) > 0 ? i = a : r = a + 1
                            }
                            return r
                        }
                    }
                }(ut),
                ft = lt.right,
                ht = (lt.left, ft),
                dt = Array.prototype,
                pt = (dt.slice, dt.map, function (t, n, e) {
                    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
                    return a
                }),
                yt = Math.sqrt(50),
                _t = Math.sqrt(10),
                vt = Math.sqrt(2),
                gt = function (t, n, e) {
                    var r = bt(t, n, e);
                    return pt(Math.ceil(t / r) * r, Math.floor(n / r) * r + r / 2, r)
                };

            function bt(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    a = r / i;
                return a >= yt ? i *= 10 : a >= _t ? i *= 5 : a >= vt && (i *= 2), n < t ? -i : i
            }
            var mt = function (t, n) {
                var e, r = 0,
                    i = t.length,
                    a = -1;
                if (null == n)
                    for (; ++a < i;)(e = +t[a]) && (r += e);
                else
                    for (; ++a < i;)(e = +n(t[a], a, t)) && (r += e);
                return r
            };
            e(6);
            var xt = Array.prototype,
                wt = xt.map,
                Mt = xt.slice,
                kt = e(5),
                St = function (t) {
                    return function () {
                        return t
                    }
                },
                jt = function (t) {
                    return +t
                },
                Nt = [0, 1];

            function At(t, n) {
                return (n -= t = +t) ? function (e) {
                    return (e - t) / n
                } : St(n)
            }

            function Et(t, n, e, r) {
                var i = t[0],
                    a = t[1],
                    o = n[0],
                    s = n[1];
                return a < i ? (i = e(a, i), o = r(s, o)) : (i = e(i, a), o = r(o, s)),
                    function (t) {
                        return o(i(t))
                    }
            }

            function Ot(t, n, e, r) {
                var i = Math.min(t.length, n.length) - 1,
                    a = new Array(i),
                    o = new Array(i),
                    s = -1;
                for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++s < i;) a[s] = e(t[s], t[s + 1]), o[s] = r(n[s], n[s + 1]);
                return function (n) {
                    var e = ht(t, n, 1, i) - 1;
                    return o[e](a[e](n))
                }
            }
            var Pt = function (t, n, e) {
                var r, i = t[0],
                    a = t[t.length - 1],
                    o = bt(i, a, null == n ? 10 : n);
                switch ((e = $(null == e ? ",f" : e)).type) {
                    case "s":
                        var s = Math.max(Math.abs(i), Math.abs(a));
                        return null != e.precision || isNaN(r = function (t, n) {
                            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(V(n) / 3))) - V(Math.abs(t)))
                        }(o, s)) || (e.precision = r), nt(e, s);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != e.precision || isNaN(r = function (t, n) {
                            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, V(n) - V(t)) + 1
                        }(o, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
                        break;
                    case "f":
                    case "%":
                        null != e.precision || isNaN(r = function (t) {
                            return Math.max(0, -V(Math.abs(t)))
                        }(o)) || (e.precision = r - 2 * ("%" === e.type))
                }
                return tt(e)
            };

            function Tt() {
                var t = function (t, n) {
                    var e, r, i, a = Nt,
                        o = Nt,
                        s = kt.interpolate,
                        c = !1;

                    function u() {
                        return e = Math.min(a.length, o.length) > 2 ? Ot : Et, r = i = null, l
                    }

                    function l(n) {
                        return (r || (r = e(a, o, c ? function (t) {
                            return function (n, e) {
                                var r = t(n = +n, e = +e);
                                return function (t) {
                                    return t <= n ? 0 : t >= e ? 1 : r(t)
                                }
                            }
                        }(t) : t, s)))(+n)
                    }
                    return l.invert = function (t) {
                        return (i || (i = e(o, a, At, c ? function (t) {
                            return function (n, e) {
                                var r = t(n = +n, e = +e);
                                return function (t) {
                                    return t <= 0 ? n : t >= 1 ? e : r(t)
                                }
                            }
                        }(n) : n)))(+t)
                    }, l.domain = function (t) {
                        return arguments.length ? (a = wt.call(t, jt), u()) : a.slice()
                    }, l.range = function (t) {
                        return arguments.length ? (o = Mt.call(t), u()) : o.slice()
                    }, l.rangeRound = function (t) {
                        return o = Mt.call(t), s = kt.interpolateRound, u()
                    }, l.clamp = function (t) {
                        return arguments.length ? (c = !!t, u()) : c
                    }, l.interpolate = function (t) {
                        return arguments.length ? (s = t, u()) : s
                    }, u()
                }(At, kt.interpolateNumber);
                return t.copy = function () {
                        return function (t, n) {
                            return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
                        }(t, Tt())
                    },
                    function (t) {
                        var n = t.domain;
                        return t.ticks = function (t) {
                            var e = n();
                            return gt(e[0], e[e.length - 1], null == t ? 10 : t)
                        }, t.tickFormat = function (t, e) {
                            return Pt(n(), t, e)
                        }, t.nice = function (e) {
                            var r = n(),
                                i = r.length - 1,
                                a = null == e ? 10 : e,
                                o = r[0],
                                s = r[i],
                                c = bt(o, s, a);
                            return c && (c = bt(Math.floor(o / c) * c, Math.ceil(s / c) * c, a), r[0] = Math.floor(o / c) * c, r[i] = Math.ceil(s / c) * c, n(r)), t
                        }, t
                    }(t)
            }
            e(3), e(22);
            var Ct = function (t) {
                    return t.match(/.{6}/g).map(function (t) {
                        return "#" + t
                    })
                },
                Rt = (Ct("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Ct("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Ct("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Ct("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), e(4));

            function qt(t) {
                var n = t.length;
                return function (e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            Object(kt.interpolateCubehelixLong)(Object(Rt.b)(300, .5, 0), Object(Rt.b)(-240, .5, 1)), Object(kt.interpolateCubehelixLong)(Object(Rt.b)(-100, .75, .35), Object(Rt.b)(80, 1.5, .8)), Object(kt.interpolateCubehelixLong)(Object(Rt.b)(260, .75, .35), Object(Rt.b)(80, 1.5, .8)), Object(Rt.b)(), qt(Ct("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), qt(Ct("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), qt(Ct("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), qt(Ct("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), e.d(n, "a", function () {
                return Ft
            });
            var zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                It = function (t) {
                    return t
                },
                Dt = function (t) {
                    for (var n = [], e = 0, r = t.length; e < r; e++) n[e] = t[r - e - 1];
                    return n
                },
                Lt = function (t, n) {
                    t.each(function () {
                        for (var t, e = function (t) {
                                return "string" == typeof t ? new U([
                                    [document.querySelector(t)]
                                ], [document.documentElement]) : new U([
                                    [t]
                                ], F)
                            }(this), r = e.text().split(/\s+/).reverse(), i = [], a = (e.attr("y"), parseFloat(e.attr("dy")) || 0), o = e.text(null).append("tspan").attr("x", 0).attr("dy", a + "em"); t = r.pop();) i.push(t), o.text(i.join(" ")), o.node().getComputedTextLength() > n && i.length > 1 && (i.pop(), o.text(i.join(" ")), i = [t], o = e.append("tspan").attr("x", 0).attr("dy", 1.2 + a + "em").text(t))
                    })
                },
                Bt = {
                    d3_drawShapes: function (t, n, e, r, i, a) {
                        "rect" === t ? n.attr("height", e).attr("width", r) : "circle" === t ? n.attr("r", i) : "line" === t ? n.attr("x1", 0).attr("x2", r).attr("y1", 0).attr("y2", 0) : "path" === t && n.attr("d", a)
                    },
                    d3_addText: function (t, n, e, r, i) {
                        n.append("text").attr("class", r + "label");
                        var a = t.selectAll("g." + r + "cell text." + r + "label").data(e).text(It);
                        return i && t.selectAll("g." + r + "cell text." + r + "label").call(Lt, i), a
                    },
                    d3_calcType: function (t, n, e, r, i, a) {
                        var o = t.invertExtent ? function (t, n, e) {
                                var r = t.range().map(function (r) {
                                    var i = t.invertExtent(r);
                                    return n(i[0]) + " " + e + " " + n(i[1])
                                });
                                return {
                                    data: t.range(),
                                    labels: r,
                                    feature: It
                                }
                            }(t, i, a) : t.ticks ? function (t, n, e) {
                                var r = [];
                                if (n.length > 1) r = n;
                                else
                                    for (var i = t.domain(), a = (i[i.length - 1] - i[0]) / (n - 1), o = 0; o < n; o++) r.push(i[0] + o * a);
                                return {
                                    data: r,
                                    labels: r.map(e),
                                    feature: function (n) {
                                        return t(n)
                                    }
                                }
                            }(t, e, i) : function (t) {
                                return {
                                    data: t.domain(),
                                    labels: t.domain(),
                                    feature: function (n) {
                                        return t(n)
                                    }
                                }
                            }(t),
                            s = t.range && t.range() || t.domain();
                        return o.labels = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = arguments[1],
                                e = arguments[2],
                                r = arguments[3],
                                i = arguments[4];
                            if ("object" === (void 0 === n ? "undefined" : zt(n))) {
                                if (0 === n.length) return t;
                                for (var a = n.length; a < t.length; a++) n.push(t[a]);
                                return n
                            }
                            if ("function" == typeof n) {
                                for (var o = [], s = t.length, c = 0; c < s; c++) o.push(n({
                                    i: c,
                                    genLength: s,
                                    generatedLabels: t,
                                    domain: e,
                                    range: r,
                                    labelDelimiter: i
                                }));
                                return o
                            }
                            return t
                        }(o.labels, r, t.domain(), s, a), n && (o.labels = Dt(o.labels), o.data = Dt(o.data)), o
                    },
                    d3_filterCells: function (t, n) {
                        var e = t.data.map(function (n, e) {
                                return {
                                    data: n,
                                    label: t.labels[e]
                                }
                            }).filter(n),
                            r = e.map(function (t) {
                                return t.data
                            }),
                            i = e.map(function (t) {
                                return t.label
                            });
                        return t.data = t.data.filter(function (t) {
                            return -1 !== r.indexOf(t)
                        }), t.labels = t.labels.filter(function (t) {
                            return -1 !== i.indexOf(t)
                        }), t
                    },
                    d3_placement: function (t, n, e, r, i, a) {
                        n.attr("transform", e), r.attr("transform", i), "horizontal" === t && r.style("text-anchor", a)
                    },
                    d3_addEvents: function (t, n) {
                        t.on("mouseover.legend", function (t) {
                            ! function (t, n, e) {
                                t.call("cellover", e, n)
                            }(n, t, this)
                        }).on("mouseout.legend", function (t) {
                            ! function (t, n, e) {
                                t.call("cellout", e, n)
                            }(n, t, this)
                        }).on("click.legend", function (t) {
                            ! function (t, n, e) {
                                t.call("cellclick", e, n)
                            }(n, t, this)
                        })
                    },
                    d3_title: function (t, n, e, r) {
                        if ("" !== n) {
                            t.selectAll("text." + e + "legendTitle").data([n]).enter().append("text").attr("class", e + "legendTitle"), t.selectAll("text." + e + "legendTitle").text(n), r && t.selectAll("text." + e + "legendTitle").call(Lt, r);
                            var i = t.select("." + e + "legendCells"),
                                a = t.select("." + e + "legendTitle").nodes().map(function (t) {
                                    return t.getBBox().height
                                })[0],
                                o = -i.nodes().map(function (t) {
                                    return t.getBBox().x
                                })[0];
                            i.attr("transform", "translate(" + o + "," + a + ")")
                        }
                    },
                    d3_defaultLocale: {
                        format: tt,
                        formatPrefix: nt
                    },
                    d3_defaultFormatSpecifier: ".01f",
                    d3_defaultDelimiter: "to"
                };

            function Ft() {
                var t = Tt(),
                    n = "rect",
                    e = 15,
                    r = 15,
                    i = 10,
                    a = 2,
                    o = [5],
                    s = void 0,
                    c = [],
                    u = "",
                    l = !1,
                    f = "",
                    h = Bt.d3_defaultLocale,
                    d = Bt.d3_defaultFormatSpecifier,
                    p = 10,
                    y = "middle",
                    _ = Bt.d3_defaultDelimiter,
                    v = void 0,
                    g = "vertical",
                    b = !1,
                    m = void 0,
                    x = void 0,
                    w = ct("cellover", "cellout", "cellclick");

                function M(M) {
                    var k = Bt.d3_calcType(t, b, o, c, h.format(d), _);
                    M.selectAll("g").data([t]).enter().append("g").attr("class", u + "legendCells"), s && Bt.d3_filterCells(k, s);
                    var S = M.select("." + u + "legendCells").selectAll("." + u + "cell").data(k.data),
                        j = S.enter().append("g").attr("class", u + "cell");
                    j.append(n).attr("class", u + "swatch");
                    var N = M.selectAll("g." + u + "cell " + n + "." + u + "swatch").data(k.data);
                    Bt.d3_addEvents(j, w), S.exit().transition().style("opacity", 0).remove(), N.exit().transition().style("opacity", 0).remove(), N = N.merge(N), Bt.d3_drawShapes(n, N, r, e, i, m);
                    var A = Bt.d3_addText(M, j, k.labels, u, v);
                    S = j.merge(S);
                    var E = A.nodes().map(function (t) {
                            return t.getBBox()
                        }),
                        O = N.nodes().map(function (t) {
                            return t.getBBox()
                        });
                    l ? N.attr("class", function (t) {
                        return u + "swatch " + k.feature(t)
                    }) : "line" == n ? N.style("stroke", k.feature) : N.style("fill", k.feature);
                    var P = void 0,
                        T = void 0,
                        C = "start" == y ? 0 : "middle" == y ? .5 : 1;
                    "vertical" === g ? function () {
                        var t = E.map(function (t, n) {
                            return Math.max(t.height, O[n].height)
                        });
                        P = function (n, e) {
                            return "translate(0, " + (mt(t.slice(0, e)) + e * a) + ")"
                        }, T = function (t, n) {
                            return "translate( " + (O[n].width + O[n].x + p) + ", " + (O[n].y + O[n].height / 2 + 5) + ")"
                        }
                    }() : "horizontal" === g && (P = function (t, n) {
                        return "translate(" + n * (O[n].width + a) + ",0)"
                    }, T = function (t, n) {
                        return "translate(" + (O[n].width * C + O[n].x) + ",\n          " + (O[n].height + O[n].y + p + 8) + ")"
                    }), Bt.d3_placement(g, S, P, A, T, y), Bt.d3_title(M, f, u, x), S.transition().style("opacity", 1)
                }
                return M.scale = function (n) {
                    return arguments.length ? (t = n, M) : t
                }, M.cells = function (t) {
                    return arguments.length ? ((t.length > 1 || t >= 2) && (o = t), M) : o
                }, M.cellFilter = function (t) {
                    return arguments.length ? (s = t, M) : s
                }, M.shape = function (t, e) {
                    return arguments.length ? (("rect" == t || "circle" == t || "line" == t || "path" == t && "string" == typeof e) && (n = t, m = e), M) : n
                }, M.shapeWidth = function (t) {
                    return arguments.length ? (e = +t, M) : e
                }, M.shapeHeight = function (t) {
                    return arguments.length ? (r = +t, M) : r
                }, M.shapeRadius = function (t) {
                    return arguments.length ? (i = +t, M) : i
                }, M.shapePadding = function (t) {
                    return arguments.length ? (a = +t, M) : a
                }, M.labels = function (t) {
                    return arguments.length ? (c = t, M) : c
                }, M.labelAlign = function (t) {
                    return arguments.length ? ("start" != t && "end" != t && "middle" != t || (y = t), M) : y
                }, M.locale = function (t) {
                    return arguments.length ? (h = et(t), M) : h
                }, M.labelFormat = function (t) {
                    return arguments.length ? (d = $(t), M) : M.locale().format(d)
                }, M.labelOffset = function (t) {
                    return arguments.length ? (p = +t, M) : p
                }, M.labelDelimiter = function (t) {
                    return arguments.length ? (_ = t, M) : _
                }, M.labelWrap = function (t) {
                    return arguments.length ? (v = t, M) : v
                }, M.useClass = function (t) {
                    return arguments.length ? (!0 !== t && !1 !== t || (l = t), M) : l
                }, M.orient = function (t) {
                    return arguments.length ? ("horizontal" != (t = t.toLowerCase()) && "vertical" != t || (g = t), M) : g
                }, M.ascending = function (t) {
                    return arguments.length ? (b = !!t, M) : b
                }, M.classPrefix = function (t) {
                    return arguments.length ? (u = t, M) : u
                }, M.title = function (t) {
                    return arguments.length ? (f = t, M) : f
                }, M.titleWidth = function (t) {
                    return arguments.length ? (x = t, M) : x
                }, M.textWrap = function (t) {
                    return arguments.length ? (textWrap = t, M) : textWrap
                }, M.on = function () {
                    var t = w.on.apply(w, arguments);
                    return t === w ? M : t
                }, M
            }
        },
        70: function (t, n, e) {
            var r = e(71);
            t.exports = r
        },
        71: function (t, n) {
            function e(t, n) {
                for (var e = [], r = 0; r < t; r++) {
                    for (var i = [], a = 0; a < n; a++) i.push(0);
                    e.push(i)
                }
                return e
            }

            function r(t, n, e, r) {
                var i;
                if (t > 0) {
                    var a = (e[n] - e[t - 1]) / (n - t + 1);
                    i = r[n] - r[t - 1] - (n - t + 1) * a * a
                } else i = r[n] - e[n] * e[n] / (n + 1);
                return i < 0 ? 0 : i
            }

            function i(t, n, e, a, o, s, c) {
                if (!(t > n)) {
                    var u = Math.floor((t + n) / 2);
                    a[e][u] = a[e - 1][u - 1], o[e][u] = u;
                    var l = e;
                    t > e && (l = Math.max(l, o[e][t - 1] || 0)), l = Math.max(l, o[e - 1][u] || 0);
                    var f, h, d, p = u - 1;
                    n < a.length - 1 && (p = Math.min(p, o[e][n + 1] || 0));
                    for (var y = p; y >= l && !((f = r(y, u, s, c)) + a[e - 1][l - 1] >= a[e][u]); --y)(h = r(l, u, s, c) + a[e - 1][l - 1]) < a[e][u] && (a[e][u] = h, o[e][u] = l), l++, (d = f + a[e - 1][y - 1]) < a[e][u] && (a[e][u] = d, o[e][u] = y);
                    i(t, u - 1, e, a, o, s, c), i(u + 1, n, e, a, o, s, c)
                }
            }
            t.exports = function (t, n) {
                if (n > t.length) throw new Error("Cannot generate more classes than there are data values");
                var a = t.length,
                    o = function (t) {
                        return t.slice().sort(function (t, n) {
                            return t - n
                        })
                    }(t),
                    s = function (t) {
                        for (var n, e = 0, r = 0; r < t.length; r++) 0 !== r && t[r] === n || (n = t[r], e++);
                        return e
                    }(o);
                if (1 === s) return [o];
                var c = e(n = Math.min(s, n), a),
                    u = e(n, a);
                ! function (t, n, e) {
                    for (var a = n[0].length, o = new Array(a), s = new Array(a), c = t[Math.floor(a / 2)], u = 0; u < a; ++u) 0 === u ? (o[0] = t[0] - c, s[0] = (t[0] - c) * (t[0] - c)) : (o[u] = o[u - 1] + t[u] - c, s[u] = s[u - 1] + (t[u] - c) * (t[u] - c)), n[0][u] = r(0, u, o, s), e[0][u] = 0;
                    for (var l = 1; l < n.length; ++l) i(l < n.length - 1 ? l : a - 1, a - 1, l, n, e, o, s)
                }(o, c, u);
                for (var l = [], f = u[0].length - 1, h = u.length - 1; h >= 0; h--) {
                    var d = u[h][f];
                    l[h] = o[d], h > 0 && (f = d - 1)
                }
                return l
            }
        },
        72: function (t, n) {
            t.exports = function () {
                throw new Error("define cannot be used indirect")
            }
        },
        73: function (t, n) {
            (function (n) {
                t.exports = n
            }).call(this, {})
        }
    }
]);