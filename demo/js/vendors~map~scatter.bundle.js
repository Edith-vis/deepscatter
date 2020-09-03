(("undefined" != typeof self ? self : this).webpackJsonp = ("undefined" != typeof self ? self : this).webpackJsonp || []).push([
    [2], {
        24: function (t, n, e) {
            "use strict";

            function r(t) {
                return t * (2 - t)
            }

            function i(t) {
                return --t * t * t + 1
            }

            function o(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }(function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }
                return n = +n, e.exponent = t, e
            })(3),
            function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }
                return n = +n, e.exponent = t, e
            }(3),
            function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }
                return n = +n, e.exponent = t, e
            }(3);
            var u = Math.PI;

            function a(t) {
                return (1 - Math.cos(u * t)) / 2
            }(function t(n) {
                function e(t) {
                    return t * t * ((n + 1) * t - n)
                }
                return n = +n, e.overshoot = t, e
            })(1.70158),
            function t(n) {
                function e(t) {
                    return --t * t * ((n + 1) * t + n) + 1
                }
                return n = +n, e.overshoot = t, e
            }(1.70158),
            function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }
                return n = +n, e.overshoot = t, e
            }(1.70158);
            var c = 2 * Math.PI;
            (function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= c);

                function i(t) {
                    return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                }
                return i.amplitude = function (n) {
                    return t(n, e * c)
                }, i.period = function (e) {
                    return t(n, e)
                }, i
            })(1, .3),
            function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= c);

                function i(t) {
                    return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
                }
                return i.amplitude = function (n) {
                    return t(n, e * c)
                }, i.period = function (e) {
                    return t(n, e)
                }, i
            }(1, .3),
            function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= c);

                function i(t) {
                    return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
                }
                return i.amplitude = function (n) {
                    return t(n, e * c)
                }, i.period = function (e) {
                    return t(n, e)
                }, i
            }(1, .3), e.d(n, "d", function () {
                return r
            }), e.d(n, "a", function () {
                return o
            }), e.d(n, "c", function () {
                return i
            }), e.d(n, "b", function () {
                return o
            }), e.d(n, "e", function () {
                return a
            })
        },
        35: function (t, n, e) {
            "use strict";
            var r = e(1),
                i = e(23),
                o = e(15),
                u = Object(i.a)("start", "end", "interrupt"),
                a = [],
                c = 0,
                s = 1,
                h = 2,
                f = 3,
                l = 4,
                p = 5,
                d = 6,
                m = function (t, n, e, r, i, m) {
                    var v = t.__transition;
                    if (v) {
                        if (e in v) return
                    } else t.__transition = {};
                    ! function (t, n, e) {
                        var r, i = t.__transition;

                        function u(p) {
                            var m, v, y, _;
                            if (e.state !== s) return c();
                            for (m in i)
                                if ((_ = i[m]).name === e.name) {
                                    if (_.state === f) return Object(o.c)(u);
                                    _.state === l ? (_.state = d, _.timer.stop(), _.on.call("interrupt", t, t.__data__, _.index, _.group), delete i[m]) : +m < n && (_.state = d, _.timer.stop(), delete i[m])
                                } if (Object(o.c)(function () {
                                    e.state === f && (e.state = l, e.timer.restart(a, e.delay, e.time), a(p))
                                }), e.state = h, e.on.call("start", t, t.__data__, e.index, e.group), e.state === h) {
                                for (e.state = f, r = new Array(y = e.tween.length), m = 0, v = -1; m < y; ++m)(_ = e.tween[m].value.call(t, t.__data__, e.index, e.group)) && (r[++v] = _);
                                r.length = v + 1
                            }
                        }

                        function a(n) {
                            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = p, 1), o = -1, u = r.length; ++o < u;) r[o].call(null, i);
                            e.state === p && (e.on.call("end", t, t.__data__, e.index, e.group), c())
                        }

                        function c() {
                            for (var r in e.state = d, e.timer.stop(), delete i[n], i) return;
                            delete t.__transition
                        }
                        i[n] = e, e.timer = Object(o.d)(function (t) {
                            e.state = s, e.timer.restart(u, e.delay, e.time), e.delay <= t && u(t - e.delay)
                        }, 0, e.time)
                    }(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: u,
                        tween: a,
                        time: m.time,
                        delay: m.delay,
                        duration: m.duration,
                        ease: m.ease,
                        timer: null,
                        state: c
                    })
                };

            function v(t, n) {
                var e = _(t, n);
                if (e.state > c) throw new Error("too late; already scheduled");
                return e
            }

            function y(t, n) {
                var e = _(t, n);
                if (e.state > h) throw new Error("too late; already started");
                return e
            }

            function _(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var g = function (t, n) {
                    var e, r, i, o = t.__transition,
                        u = !0;
                    if (o) {
                        for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > h && e.state < p, e.state = d, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                        u && delete t.__transition
                    }
                },
                w = e(5);

            function b(t, n, e) {
                var r = t._id;
                return t.each(function () {
                        var t = y(this, r);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    }),
                    function (t) {
                        return _(t, r).value[n]
                    }
            }
            var x = e(4),
                j = function (t, n) {
                    var e;
                    return ("number" == typeof n ? w.interpolateNumber : n instanceof x.a ? w.interpolateRgb : (e = Object(x.a)(n)) ? (n = e, w.interpolateRgb) : w.interpolateString)(t, n)
                },
                z = r.i.prototype.constructor,
                O = 0;

            function k(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function M() {
                return ++O
            }
            var T = r.i.prototype;
            k.prototype = function (t) {
                return Object(r.i)().transition(t)
            }.prototype = {
                constructor: k,
                select: function (t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = Object(r.j)(t));
                    for (var i = this._groups, o = i.length, u = new Array(o), a = 0; a < o; ++a)
                        for (var c, s, h = i[a], f = h.length, l = u[a] = new Array(f), p = 0; p < f; ++p)(c = h[p]) && (s = t.call(c, c.__data__, p, h)) && ("__data__" in c && (s.__data__ = c.__data__), l[p] = s, m(l[p], n, e, p, l, _(c, e)));
                    return new k(u, this._parents, n, e)
                },
                selectAll: function (t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = Object(r.k)(t));
                    for (var i = this._groups, o = i.length, u = [], a = [], c = 0; c < o; ++c)
                        for (var s, h = i[c], f = h.length, l = 0; l < f; ++l)
                            if (s = h[l]) {
                                for (var p, d = t.call(s, s.__data__, l, h), v = _(s, e), y = 0, g = d.length; y < g; ++y)(p = d[y]) && m(p, n, e, y, d, v);
                                u.push(d), a.push(s)
                            } return new k(u, a, n, e)
                },
                filter: function (t) {
                    "function" != typeof t && (t = Object(r.d)(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                        for (var u, a = n[o], c = a.length, s = i[o] = [], h = 0; h < c; ++h)(u = a[h]) && t.call(u, u.__data__, h, a) && s.push(u);
                    return new k(i, this._parents, this._name, this._id)
                },
                merge: function (t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                        for (var c, s = n[a], h = e[a], f = s.length, l = u[a] = new Array(f), p = 0; p < f; ++p)(c = s[p] || h[p]) && (l[p] = c);
                    for (; a < r; ++a) u[a] = n[a];
                    return new k(u, this._parents, this._name, this._id)
                },
                selection: function () {
                    return new z(this._groups, this._parents)
                },
                transition: function () {
                    for (var t = this._name, n = this._id, e = M(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                        for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
                            if (u = a[s]) {
                                var h = _(u, n);
                                m(u, t, e, s, a, {
                                    time: h.time + h.delay + h.duration,
                                    delay: 0,
                                    duration: h.duration,
                                    ease: h.ease
                                })
                            } return new k(r, this._parents, t, e)
                },
                call: T.call,
                nodes: T.nodes,
                node: T.node,
                size: T.size,
                empty: T.empty,
                each: T.each,
                on: function (t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? _(this.node(), e).on.on(t) : this.each(function (t, n, e) {
                        var r, i, o = (n + "").trim().split(/^|\s+/).every(function (t) {
                            var n = t.indexOf(".");
                            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                        }) ? v : y;
                        return function () {
                            var u = o(this, t),
                                a = u.on;
                            a !== r && (i = (r = a).copy()).on(n, e), u.on = i
                        }
                    }(e, t, n))
                },
                attr: function (t, n) {
                    var e = Object(r.f)(t),
                        i = "transform" === e ? w.interpolateTransformSvg : j;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
                        var r, i, o;
                        return function () {
                            var u, a = e(this);
                            if (null != a) return (u = this.getAttributeNS(t.space, t.local)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t, n, e) {
                        var r, i, o;
                        return function () {
                            var u, a = e(this);
                            if (null != a) return (u = this.getAttribute(t)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
                            this.removeAttribute(t)
                        }
                    })(e, i, b(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
                        return function () {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            this.removeAttribute(t)
                        }
                    })(e) : (e.local ? function (t, n, e) {
                        var r, i;
                        return function () {
                            var o = this.getAttributeNS(t.space, t.local);
                            return o === e ? null : o === r ? i : i = n(r = o, e)
                        }
                    } : function (t, n, e) {
                        var r, i;
                        return function () {
                            var o = this.getAttribute(t);
                            return o === e ? null : o === r ? i : i = n(r = o, e)
                        }
                    })(e, i, n + ""))
                },
                attrTween: function (t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" != typeof n) throw new Error;
                    var i = Object(r.f)(t);
                    return this.tween(e, (i.local ? function (t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function (n) {
                                e.setAttributeNS(t.space, t.local, r(n))
                            }
                        }
                        return e._value = n, e
                    } : function (t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function (n) {
                                e.setAttribute(t, r(n))
                            }
                        }
                        return e._value = n, e
                    })(i, n))
                },
                style: function (t, n, e) {
                    var i = "transform" == (t += "") ? w.interpolateTransformCss : j;
                    return null == n ? this.styleTween(t, function (t, n) {
                        var e, i, o;
                        return function () {
                            var u = Object(r.l)(this, t),
                                a = (this.style.removeProperty(t), Object(r.l)(this, t));
                            return u === a ? null : u === e && a === i ? o : o = n(e = u, i = a)
                        }
                    }(t, i)).on("end.style." + t, function (t) {
                        return function () {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
                        var i, o, u;
                        return function () {
                            var a = Object(r.l)(this, t),
                                c = e(this);
                            return null == c && (this.style.removeProperty(t), c = Object(r.l)(this, t)), a === c ? null : a === i && c === o ? u : u = n(i = a, o = c)
                        }
                    }(t, i, b(this, "style." + t, n)) : function (t, n, e) {
                        var i, o;
                        return function () {
                            var u = Object(r.l)(this, t);
                            return u === e ? null : u === i ? o : o = n(i = u, e)
                        }
                    }(t, i, n + ""), e)
                },
                styleTween: function (t, n, e) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == n) return this.tween(r, null);
                    if ("function" != typeof n) throw new Error;
                    return this.tween(r, function (t, n, e) {
                        function r() {
                            var r = this,
                                i = n.apply(r, arguments);
                            return i && function (n) {
                                r.style.setProperty(t, i(n), e)
                            }
                        }
                        return r._value = n, r
                    }(t, n, null == e ? "" : e))
                },
                text: function (t) {
                    return this.tween("text", "function" == typeof t ? function (t) {
                        return function () {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(b(this, "text", t)) : function (t) {
                        return function () {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                remove: function () {
                    return this.on("end.remove", (t = this._id, function () {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                            if (+e !== t) return;
                        n && n.removeChild(this)
                    }));
                    var t
                },
                tween: function (t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = _(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                            if ((r = i[o]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == n ? function (t, n) {
                        var e, r;
                        return function () {
                            var i = y(this, t),
                                o = i.tween;
                            if (o !== e)
                                for (var u = 0, a = (r = e = o).length; u < a; ++u)
                                    if (r[u].name === n) {
                                        (r = r.slice()).splice(u, 1);
                                        break
                                    } i.tween = r
                        }
                    } : function (t, n, e) {
                        var r, i;
                        if ("function" != typeof e) throw new Error;
                        return function () {
                            var o = y(this, t),
                                u = o.tween;
                            if (u !== r) {
                                i = (r = u).slice();
                                for (var a = {
                                        name: n,
                                        value: e
                                    }, c = 0, s = i.length; c < s; ++c)
                                    if (i[c].name === n) {
                                        i[c] = a;
                                        break
                                    } c === s && i.push(a)
                            }
                            o.tween = i
                        }
                    })(e, t, n))
                },
                delay: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                        return function () {
                            v(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function (t, n) {
                        return n = +n,
                            function () {
                                v(this, t).delay = n
                            }
                    })(n, t)) : _(this.node(), n).delay
                },
                duration: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                        return function () {
                            y(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function (t, n) {
                        return n = +n,
                            function () {
                                y(this, t).duration = n
                            }
                    })(n, t)) : _(this.node(), n).duration
                },
                ease: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(function (t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function () {
                            y(this, t).ease = n
                        }
                    }(n, t)) : _(this.node(), n).ease
                }
            };
            var A = {
                time: null,
                delay: 0,
                duration: 250,
                ease: e(24).b
            };

            function E(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return A.time = Object(o.b)(), A;
                return e
            }
            r.i.prototype.interrupt = function (t) {
                return this.each(function () {
                    g(this, t)
                })
            }, r.i.prototype.transition = function (t) {
                var n, e;
                t instanceof k ? (n = t._id, t = t._name) : (n = M(), (e = A).time = Object(o.b)(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
                    for (var a, c = r[u], s = c.length, h = 0; h < s; ++h)(a = c[h]) && m(a, t, n, h, c, e || E(a, n));
                return new k(r, this._parents, t, n)
            }, e.d(n, "a", function () {
                return g
            })
        },
        36: function (t, n, e) {
            "use strict";
            var r = e(23),
                i = e(1);

            function o() {
                i.c.stopImmediatePropagation()
            }
            var u = function () {
                    i.c.preventDefault(), i.c.stopImmediatePropagation()
                },
                a = function (t) {
                    var n = t.document.documentElement,
                        e = Object(i.g)(t).on("dragstart.drag", u, !0);
                    "onselectstart" in n ? e.on("selectstart.drag", u, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                };

            function c(t, n) {
                var e = t.document.documentElement,
                    r = Object(i.g)(t).on("dragstart.drag", null);
                n && (r.on("click.drag", u, !0), setTimeout(function () {
                    r.on("click.drag", null)
                }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
            }
            var s = function (t) {
                return function () {
                    return t
                }
            };

            function h(t, n, e, r, i, o, u, a, c, s) {
                this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
            }

            function f() {
                return !i.c.button
            }

            function l() {
                return this.parentNode
            }

            function p(t) {
                return null == t ? {
                    x: i.c.x,
                    y: i.c.y
                } : t
            }

            function d() {
                return "ontouchstart" in this
            }
            h.prototype.on = function () {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var m = function () {
                var t, n, e, m, v = f,
                    y = l,
                    _ = p,
                    g = d,
                    w = {},
                    b = Object(r.a)("start", "drag", "end"),
                    x = 0,
                    j = 0;

                function z(t) {
                    t.on("mousedown.drag", O).filter(g).on("touchstart.drag", T).on("touchmove.drag", A).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function O() {
                    if (!m && v.apply(this, arguments)) {
                        var r = S("mouse", y.apply(this, arguments), i.e, this, arguments);
                        r && (Object(i.g)(i.c.view).on("mousemove.drag", k, !0).on("mouseup.drag", M, !0), a(i.c.view), o(), e = !1, t = i.c.clientX, n = i.c.clientY, r("start"))
                    }
                }

                function k() {
                    if (u(), !e) {
                        var r = i.c.clientX - t,
                            o = i.c.clientY - n;
                        e = r * r + o * o > j
                    }
                    w.mouse("drag")
                }

                function M() {
                    Object(i.g)(i.c.view).on("mousemove.drag mouseup.drag", null), c(i.c.view, e), u(), w.mouse("end")
                }

                function T() {
                    if (v.apply(this, arguments)) {
                        var t, n, e = i.c.changedTouches,
                            r = y.apply(this, arguments),
                            u = e.length;
                        for (t = 0; t < u; ++t)(n = S(e[t].identifier, r, i.m, this, arguments)) && (o(), n("start"))
                    }
                }

                function A() {
                    var t, n, e = i.c.changedTouches,
                        r = e.length;
                    for (t = 0; t < r; ++t)(n = w[e[t].identifier]) && (u(), n("drag"))
                }

                function E() {
                    var t, n, e = i.c.changedTouches,
                        r = e.length;
                    for (m && clearTimeout(m), m = setTimeout(function () {
                            m = null
                        }, 500), t = 0; t < r; ++t)(n = w[e[t].identifier]) && (o(), n("end"))
                }

                function S(t, n, e, r, o) {
                    var u, a, c, s = e(n, t),
                        f = b.copy();
                    if (Object(i.b)(new h(z, "beforestart", u, t, x, s[0], s[1], 0, 0, f), function () {
                            return null != (i.c.subject = u = _.apply(r, o)) && (a = u.x - s[0] || 0, c = u.y - s[1] || 0, !0)
                        })) return function l(p) {
                        var d, m = s;
                        switch (p) {
                            case "start":
                                w[t] = l, d = x++;
                                break;
                            case "end":
                                delete w[t], --x;
                            case "drag":
                                s = e(n, t), d = x
                        }
                        Object(i.b)(new h(z, p, u, t, d, s[0] + a, s[1] + c, s[0] - m[0], s[1] - m[1], f), f.apply, f, [p, r, o])
                    }
                }
                return z.filter = function (t) {
                    return arguments.length ? (v = "function" == typeof t ? t : s(!!t), z) : v
                }, z.container = function (t) {
                    return arguments.length ? (y = "function" == typeof t ? t : s(t), z) : y
                }, z.subject = function (t) {
                    return arguments.length ? (_ = "function" == typeof t ? t : s(t), z) : _
                }, z.touchable = function (t) {
                    return arguments.length ? (g = "function" == typeof t ? t : s(!!t), z) : g
                }, z.on = function () {
                    var t = b.on.apply(b, arguments);
                    return t === b ? z : t
                }, z.clickDistance = function (t) {
                    return arguments.length ? (j = (t = +t) * t, z) : Math.sqrt(j)
                }, z
            };
            e.d(n, "a", function () {
                return m
            }), e.d(n, "b", function () {
                return a
            }), e.d(n, "c", function () {
                return c
            })
        },
        42: function (t, n, e) {
            "use strict";
            var r = e(23),
                i = e(36),
                o = e(5),
                u = e(1),
                a = e(35),
                c = function (t) {
                    return function () {
                        return t
                    }
                };

            function s(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            s.prototype = {
                constructor: s,
                scale: function (t) {
                    return 1 === t ? this : new s(this.k * t, this.x, this.y)
                },
                translate: function (t, n) {
                    return 0 === t & 0 === n ? this : new s(this.k, this.x + this.k * t, this.y + this.k * n)
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
            var h = new s(1, 0, 0);

            function f() {
                u.c.stopImmediatePropagation()
            }
            s.prototype;
            var l = function () {
                u.c.preventDefault(), u.c.stopImmediatePropagation()
            };

            function p() {
                return !u.c.button
            }

            function d() {
                var t, n, e = this;
                return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
                    [0, 0],
                    [t, n]
                ]
            }

            function m() {
                return this.__zoom || h
            }

            function v() {
                return -u.c.deltaY * (u.c.deltaMode ? 120 : 1) / 500
            }

            function y() {
                return "ontouchstart" in this
            }

            function _(t, n, e) {
                var r = t.invertX(n[0][0]) - e[0][0],
                    i = t.invertX(n[1][0]) - e[1][0],
                    o = t.invertY(n[0][1]) - e[0][1],
                    u = t.invertY(n[1][1]) - e[1][1];
                return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
            }
            var g = function () {
                var t, n, e = p,
                    g = d,
                    w = _,
                    b = v,
                    x = y,
                    j = [0, 1 / 0],
                    z = [
                        [-1 / 0, -1 / 0],
                        [1 / 0, 1 / 0]
                    ],
                    O = 250,
                    k = o.interpolateZoom,
                    M = [],
                    T = Object(r.a)("start", "zoom", "end"),
                    A = 500,
                    E = 150,
                    S = 0;

                function Y(t) {
                    t.property("__zoom", m).on("wheel.zoom", V).on("mousedown.zoom", q).on("dblclick.zoom", U).filter(x).on("touchstart.zoom", B).on("touchmove.zoom", G).on("touchend.zoom touchcancel.zoom", J).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function P(t, n) {
                    return (n = Math.max(j[0], Math.min(j[1], n))) === t.k ? t : new s(n, t.x, t.y)
                }

                function X(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k;
                    return r === t.x && i === t.y ? t : new s(t.k, r, i)
                }

                function N(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function I(t, n, e) {
                    t.on("start.zoom", function () {
                        D(this, arguments).start()
                    }).on("interrupt.zoom end.zoom", function () {
                        D(this, arguments).end()
                    }).tween("zoom", function () {
                        var t = arguments,
                            r = D(this, t),
                            i = g.apply(this, t),
                            o = e || N(i),
                            u = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
                            a = this.__zoom,
                            c = "function" == typeof n ? n.apply(this, t) : n,
                            h = k(a.invert(o).concat(u / a.k), c.invert(o).concat(u / c.k));
                        return function (t) {
                            if (1 === t) t = c;
                            else {
                                var n = h(t),
                                    e = u / n[2];
                                t = new s(e, o[0] - n[0] * e, o[1] - n[1] * e)
                            }
                            r.zoom(null, t)
                        }
                    })
                }

                function D(t, n) {
                    for (var e, r = 0, i = M.length; r < i; ++r)
                        if ((e = M[r]).that === t) return e;
                    return new C(t, n)
                }

                function C(t, n) {
                    this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = g.apply(t, n)
                }

                function V() {
                    if (e.apply(this, arguments)) {
                        var t = D(this, arguments),
                            n = this.__zoom,
                            r = Math.max(j[0], Math.min(j[1], n.k * Math.pow(2, b.apply(this, arguments)))),
                            i = Object(u.e)(this);
                        if (t.wheel) t.mouse[0][0] === i[0] && t.mouse[0][1] === i[1] || (t.mouse[1] = n.invert(t.mouse[0] = i)), clearTimeout(t.wheel);
                        else {
                            if (n.k === r) return;
                            t.mouse = [i, n.invert(i)], Object(a.a)(this), t.start()
                        }
                        l(), t.wheel = setTimeout(function () {
                            t.wheel = null, t.end()
                        }, E), t.zoom("mouse", w(X(P(n, r), t.mouse[0], t.mouse[1]), t.extent, z))
                    }
                }

                function q() {
                    if (!n && e.apply(this, arguments)) {
                        var t = D(this, arguments),
                            r = Object(u.g)(u.c.view).on("mousemove.zoom", function () {
                                if (l(), !t.moved) {
                                    var n = u.c.clientX - c,
                                        e = u.c.clientY - s;
                                    t.moved = n * n + e * e > S
                                }
                                t.zoom("mouse", w(X(t.that.__zoom, t.mouse[0] = Object(u.e)(t.that), t.mouse[1]), t.extent, z))
                            }, !0).on("mouseup.zoom", function () {
                                r.on("mousemove.zoom mouseup.zoom", null), Object(i.c)(u.c.view, t.moved), l(), t.end()
                            }, !0),
                            o = Object(u.e)(this),
                            c = u.c.clientX,
                            s = u.c.clientY;
                        Object(i.b)(u.c.view), f(), t.mouse = [o, this.__zoom.invert(o)], Object(a.a)(this), t.start()
                    }
                }

                function U() {
                    if (e.apply(this, arguments)) {
                        var t = this.__zoom,
                            n = Object(u.e)(this),
                            r = t.invert(n),
                            i = t.k * (u.c.shiftKey ? .5 : 2),
                            o = w(X(P(t, i), n, r), g.apply(this, arguments), z);
                        l(), O > 0 ? Object(u.g)(this).transition().duration(O).call(I, o, n) : Object(u.g)(this).call(Y.transform, o)
                    }
                }

                function B() {
                    if (e.apply(this, arguments)) {
                        var n, r, i, o, c = D(this, arguments),
                            s = u.c.changedTouches,
                            h = s.length;
                        for (f(), r = 0; r < h; ++r) i = s[r], o = [o = Object(u.m)(this, s, i.identifier), this.__zoom.invert(o), i.identifier], c.touch0 ? c.touch1 || (c.touch1 = o) : (c.touch0 = o, n = !0);
                        if (t && (t = clearTimeout(t), !c.touch1)) return c.end(), void((o = Object(u.g)(this).on("dblclick.zoom")) && o.apply(this, arguments));
                        n && (t = setTimeout(function () {
                            t = null
                        }, A), Object(a.a)(this), c.start())
                    }
                }

                function G() {
                    var n, e, r, i, o = D(this, arguments),
                        a = u.c.changedTouches,
                        c = a.length;
                    for (l(), t && (t = clearTimeout(t)), n = 0; n < c; ++n) e = a[n], r = Object(u.m)(this, a, e.identifier), o.touch0 && o.touch0[2] === e.identifier ? o.touch0[0] = r : o.touch1 && o.touch1[2] === e.identifier && (o.touch1[0] = r);
                    if (e = o.that.__zoom, o.touch1) {
                        var s = o.touch0[0],
                            h = o.touch0[1],
                            f = o.touch1[0],
                            p = o.touch1[1],
                            d = (d = f[0] - s[0]) * d + (d = f[1] - s[1]) * d,
                            m = (m = p[0] - h[0]) * m + (m = p[1] - h[1]) * m;
                        e = P(e, Math.sqrt(d / m)), r = [(s[0] + f[0]) / 2, (s[1] + f[1]) / 2], i = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]
                    } else {
                        if (!o.touch0) return;
                        r = o.touch0[0], i = o.touch0[1]
                    }
                    o.zoom("touch", w(X(e, r, i), o.extent, z))
                }

                function J() {
                    var t, e, r = D(this, arguments),
                        i = u.c.changedTouches,
                        o = i.length;
                    for (f(), n && clearTimeout(n), n = setTimeout(function () {
                            n = null
                        }, A), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                    r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
                }
                return Y.transform = function (t, n) {
                    var e = t.selection ? t.selection() : t;
                    e.property("__zoom", m), t !== e ? I(t, n) : e.interrupt().each(function () {
                        D(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                    })
                }, Y.scaleBy = function (t, n) {
                    Y.scaleTo(t, function () {
                        return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                    })
                }, Y.scaleTo = function (t, n) {
                    Y.transform(t, function () {
                        var t = g.apply(this, arguments),
                            e = this.__zoom,
                            r = N(t),
                            i = e.invert(r),
                            o = "function" == typeof n ? n.apply(this, arguments) : n;
                        return w(X(P(e, o), r, i), t, z)
                    })
                }, Y.translateBy = function (t, n, e) {
                    Y.transform(t, function () {
                        return w(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), g.apply(this, arguments), z)
                    })
                }, Y.translateTo = function (t, n, e) {
                    Y.transform(t, function () {
                        var t = g.apply(this, arguments),
                            r = this.__zoom,
                            i = N(t);
                        return w(h.translate(i[0], i[1]).scale(r.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, z)
                    })
                }, C.prototype = {
                    start: function () {
                        return 1 == ++this.active && (this.index = M.push(this) - 1, this.emit("start")), this
                    },
                    zoom: function (t, n) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                    },
                    end: function () {
                        return 0 == --this.active && (M.splice(this.index, 1), this.index = -1, this.emit("end")), this
                    },
                    emit: function (t) {
                        Object(u.b)(new function (t, n, e) {
                            this.target = t, this.type = n, this.transform = e
                        }(Y, t, this.that.__zoom), T.apply, T, [t, this.that, this.args])
                    }
                }, Y.wheelDelta = function (t) {
                    return arguments.length ? (b = "function" == typeof t ? t : c(+t), Y) : b
                }, Y.filter = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? t : c(!!t), Y) : e
                }, Y.touchable = function (t) {
                    return arguments.length ? (x = "function" == typeof t ? t : c(!!t), Y) : x
                }, Y.extent = function (t) {
                    return arguments.length ? (g = "function" == typeof t ? t : c([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), Y) : g
                }, Y.scaleExtent = function (t) {
                    return arguments.length ? (j[0] = +t[0], j[1] = +t[1], Y) : [j[0], j[1]]
                }, Y.translateExtent = function (t) {
                    return arguments.length ? (z[0][0] = +t[0][0], z[1][0] = +t[1][0], z[0][1] = +t[0][1], z[1][1] = +t[1][1], Y) : [
                        [z[0][0], z[0][1]],
                        [z[1][0], z[1][1]]
                    ]
                }, Y.constrain = function (t) {
                    return arguments.length ? (w = t, Y) : w
                }, Y.duration = function (t) {
                    return arguments.length ? (O = +t, Y) : O
                }, Y.interpolate = function (t) {
                    return arguments.length ? (k = t, Y) : k
                }, Y.on = function () {
                    var t = T.on.apply(T, arguments);
                    return t === T ? Y : t
                }, Y.clickDistance = function (t) {
                    return arguments.length ? (S = (t = +t) * t, Y) : Math.sqrt(S)
                }, Y
            };
            e.d(n, "a", function () {
                return g
            }), e.d(n, "b", function () {
                return h
            })
        }
    }
]);