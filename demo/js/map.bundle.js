(("undefined" != typeof self ? self : this).webpackJsonp = ("undefined" != typeof self ? self : this).webpackJsonp || []).push([
    [4], {
        53: function (e, t, r) {
            "use strict";
            r.r(t);
            var n = {};
            r.r(n), r.d(n, "dataset", function () {
                return V
            }), r.d(n, "extantFromYearList", function () {
                return J
            }), r.d(n, "novel", function () {
                return Z
            }), r.d(n, "vanishes", function () {
                return K
            }), r.d(n, "extant", function () {
                return $
            }), r.d(n, "percent_odd", function () {
                return q
            }), r.d(n, "dominantClaimType", function () {
                return Q
            }), r.d(n, "datum", function () {
                return X
            }), r.d(n, "zpopulation", function () {
                return ee
            }), r.d(n, "populationDiff", function () {
                return te
            }), r.d(n, "PLSSTitle", function () {
                return re
            }), r.d(n, "nonUrbanPopulation", function () {
                return ne
            }), r.d(n, "region", function () {
                return ie
            }), r.d(n, "cityPopulationConflict", function () {
                return ae
            }), r.d(n, "area", function () {
                return oe
            }), r.d(n, "density", function () {
                return se
            }), r.d(n, "settled", function () {
                return ce
            }), r.d(n, "exaggeration", function () {
                return ue
            }), r.d(n, "claimPercent", function () {
                return le
            }), r.d(n, "claimShareInPeriod", function () {
                return pe
            }), r.d(n, "claimPerSquareMile", function () {
                return he
            }), r.d(n, "medianClaim", function () {
                return de
            }), r.d(n, "missingPeople", function () {
                return fe
            }), r.d(n, "maxPop", function () {
                return ge
            }), r.d(n, "averageYearWithAmortization", function () {
                return ve
            }), r.d(n, "coloradoClaims", function () {
                return me
            }), r.d(n, "averageYear", function () {
                return ye
            }), r.d(n, "maxYear", function () {
                return be
            }), r.d(n, "maxPercentYear", function () {
                return je
            }), r.d(n, "date", function () {
                return Se
            }), r.d(n, "population", function () {
                return Oe
            }), r.d(n, "populationChange", function () {
                return we
            }), r.d(n, "claimed", function () {
                return ke
            }), r.d(n, "absolutePopulationDiff", function () {
                return Ce
            }), r.d(n, "SauntTitle", function () {
                return Pe
            }), r.d(n, "identity", function () {
                return Ae
            }), r.d(n, "gainContribution", function () {
                return xe
            });
            var i = r(26),
                a = r.n(i),
                o = r(24),
                s = r(1),
                c = r(14),
                u = r(59),
                l = r(6),
                p = r(60),
                h = r.n(p),
                d = r(11),
                f = r(19),
                g = r(41),
                v = r(8),
                m = r(5),
                y = r(7),
                b = r(0),
                j = r(12),
                S = r(2),
                O = r(15),
                w = r(42),
                k = r(66),
                C = r(68),
                P = r(54),
                A = r(61),
                x = r.n(A),
                M = r(40),
                E = r(62),
                N = r.n(E),
                _ = r(44),
                T = r(56),
                I = r(51),
                D = r(63),
                L = r.n(D),
                z = r(64),
                F = r(65),
                W = r.n(F);

            function R(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var Y = function () {
                function e(t, r, n, i) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.height = r, this.width = t, this.pointToCounty = n, this.countyToPoints = i, this.size = t * r
                }
                return function (e, t, r) {
                    t && R(e.prototype, t)
                }(e, [{
                    key: "fillPointPopulations",
                    value: function (e) {
                        var t = this,
                            r = this.width,
                            n = this.height,
                            i = this.pointToCounty;
                        this.pointPopulations = new Array(r * n), Object(l.a)(this.pointToCounty).forEach(function (r) {
                            var n = e[r],
                                a = i[r].length;
                            i[r].forEach(function (e) {
                                t.pointPopulations[e] = n / a
                            })
                        })
                    }
                }, {
                    key: "buildNeighborlist",
                    value: function () {
                        var e = this;
                        console.log("Building Neighbor list");
                        var t = this.pointToCounty,
                            r = this.width,
                            n = this.height,
                            i = this.size;
                        void 0 === this.neighbors && (this.neighbors = new Array(i)), Object(S.j)(r).forEach(function (i) {
                            Object(S.j)(n).forEach(function (n) {
                                var a = i + n * r;
                                t[a] && (e.neighbors[a] = [], [
                                    [-1, 0],
                                    [1, 0],
                                    [0, 1],
                                    [0, -1]
                                ].forEach(function (o) {
                                    var s = function (e, t) {
                                            return function (e) {
                                                if (Array.isArray(e)) return e
                                            }(e) || function (e, t) {
                                                var r = [],
                                                    n = !0,
                                                    i = !1,
                                                    a = void 0;
                                                try {
                                                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                                                } catch (e) {
                                                    i = !0, a = e
                                                } finally {
                                                    try {
                                                        n || null == s.return || s.return()
                                                    } finally {
                                                        if (i) throw a
                                                    }
                                                }
                                                return r
                                            }(e, t) || function () {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                            }()
                                        }(o, 2),
                                        c = s[0],
                                        u = s[1],
                                        l = [i + c, n + u];
                                    if (l[0] > -1 && l[0] < r && l[1] > -1 && l[1] < r) {
                                        var p = l[0] + l[1] * r;
                                        t[p] && e.neighbors[a].push(p)
                                    }
                                }))
                            })
                        }), console.log("Built neighbor list")
                    }
                }, {
                    key: "interpolateOnce",
                    value: function () {
                        var e = this.countyToPoints,
                            t = this.pointPopulations,
                            r = this.size,
                            n = this.neighbors;
                        console.log("Building desired adjustments");
                        var i = new Array(r).fill(0);
                        Object(S.j)(r).forEach(function (e) {
                            if (n[e]) {
                                var r = t[e],
                                    a = Object(S.f)(n[e].map(function (e) {
                                        return t[e]
                                    }));
                                i[e] = a - r
                            }
                        }), console.log("Scaling adjustments by county"), console.log(Object(S.f)(i));
                        var a = 0,
                            o = 0;
                        Object(l.a)(e).forEach(function (r) {
                            var n = new Array(e[r].length);
                            e[r].forEach(function (e, t) {
                                n[t] = i[e]
                            });
                            var s = Object(S.f)(n),
                                c = 0,
                                u = 0;
                            e[r].forEach(function (e) {
                                var r = t[e] + (i[e] - s);
                                r >= 0 ? (u += 1, t[e] = r) : (t[e] = 0, c -= r)
                            });
                            for (var l = function () {
                                    var n = u;
                                    a += 1, e[r].forEach(function (e) {
                                        if (t[e] > 0) {
                                            var r = t[e] - c / n;
                                            r >= 0 ? (t[e] = r, c -= c / n) : (c -= t[e], t[e] = 0, u -= 1)
                                        }
                                    }), Math.abs(c) > 1e-4 && (o += 1)
                                }; Math.abs(c) > 1e-4;) l()
                        }), console.log(o, "double iterations out of ", a, "total")
                    }
                }]), e
            }();

            function H(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var B = Object(S.j)(1790, 2020, 10),
                G = {
                    1790: 3928524.0325320014,
                    1800: 5297836.2964980025,
                    1810: 7237166.801048005,
                    1820: 9652636.751391018,
                    1830: 12858375.374201003,
                    1840: 17061240.869576015,
                    1850: 23224538.547278006,
                    1860: 31435886.256719004,
                    1870: 38555723.17917905,
                    1880: 50184893.54434504,
                    1890: 62650138.850295015,
                    1900: 76197252.83788191,
                    1910: 92216805.95609605,
                    1920: 106016248.43302697,
                    1930: 123197473.99557298,
                    1940: 132158992.205124,
                    1950: 151320140.29756808,
                    1960: 179314243.83977798,
                    1970: 203201908.04152986,
                    1980: 226535146.1541158,
                    1990: 248698005.27958378,
                    2000: 281411275,
                    2010: 308731857
                },
                U = {
                    WA: {
                        division: "Pacific",
                        region: "West",
                        name: "Washington"
                    },
                    DE: {
                        division: "South Atlantic",
                        region: "South",
                        name: "Delaware"
                    },
                    DC: {
                        division: "South Atlantic",
                        region: "South",
                        name: "District of Columbia"
                    },
                    WI: {
                        division: "East North Central",
                        region: "Midwest",
                        name: "Wisconsin"
                    },
                    WV: {
                        division: "South Atlantic",
                        region: "South",
                        name: "West Virginia"
                    },
                    HI: {
                        division: "Pacific",
                        region: "West",
                        name: "Hawaii"
                    },
                    FL: {
                        division: "South Atlantic",
                        region: "South",
                        name: "Florida"
                    },
                    WY: {
                        division: "Mountain",
                        region: "West",
                        name: "Wyoming"
                    },
                    NH: {
                        division: "New England",
                        region: "Northeast",
                        name: "New Hampshire"
                    },
                    NJ: {
                        division: "Middle Atlantic",
                        region: "Northeast",
                        name: "New Jersey"
                    },
                    NM: {
                        division: "Mountain",
                        region: "West",
                        name: "New Mexico"
                    },
                    TX: {
                        division: "West South Central",
                        region: "South",
                        name: "Texas"
                    },
                    LA: {
                        division: "West South Central",
                        region: "South",
                        name: "Louisiana"
                    },
                    NC: {
                        division: "South Atlantic",
                        region: "South",
                        name: "North Carolina"
                    },
                    ND: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "North Dakota"
                    },
                    NE: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "Nebraska"
                    },
                    TN: {
                        division: "East South Central",
                        region: "South",
                        name: "Tennessee"
                    },
                    NY: {
                        division: "Middle Atlantic",
                        region: "Northeast",
                        name: "New York"
                    },
                    PA: {
                        division: "Middle Atlantic",
                        region: "Northeast",
                        name: "Pennsylvania"
                    },
                    CA: {
                        division: "Pacific",
                        region: "West",
                        name: "California"
                    },
                    NV: {
                        division: "Mountain",
                        region: "West",
                        name: "Nevada"
                    },
                    VA: {
                        division: "South Atlantic",
                        region: "South",
                        name: "Virginia"
                    },
                    CO: {
                        division: "Mountain",
                        region: "West",
                        name: "Colorado"
                    },
                    AK: {
                        division: "Pacific",
                        region: "West",
                        name: "Alaska"
                    },
                    AL: {
                        division: "East South Central",
                        region: "South",
                        name: "Alabama"
                    },
                    AR: {
                        division: "West South Central",
                        region: "South",
                        name: "Arkansas"
                    },
                    VT: {
                        division: "New England",
                        region: "Northeast",
                        name: "Vermont"
                    },
                    IL: {
                        division: "East North Central",
                        region: "Midwest",
                        name: "Illinois"
                    },
                    GA: {
                        division: "South Atlantic",
                        region: "South",
                        name: "Georgia"
                    },
                    IN: {
                        division: "East North Central",
                        region: "Midwest",
                        name: "Indiana"
                    },
                    IA: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "Iowa"
                    },
                    OK: {
                        division: "West South Central",
                        region: "South",
                        name: "Oklahoma"
                    },
                    AZ: {
                        division: "Mountain",
                        region: "West",
                        name: "Arizona"
                    },
                    ID: {
                        division: "Mountain",
                        region: "West",
                        name: "Idaho"
                    },
                    CT: {
                        division: "New England",
                        region: "Northeast",
                        name: "Connecticut"
                    },
                    ME: {
                        division: "New England",
                        region: "Northeast",
                        name: "Maine"
                    },
                    MD: {
                        division: "South Atlantic",
                        region: "South",
                        name: "Maryland"
                    },
                    MA: {
                        division: "New England",
                        region: "Northeast",
                        name: "Massachusetts"
                    },
                    OH: {
                        division: "East North Central",
                        region: "Midwest",
                        name: "Ohio"
                    },
                    UT: {
                        division: "Mountain",
                        region: "West",
                        name: "Utah"
                    },
                    MO: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "Missouri"
                    },
                    MN: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "Minnesota"
                    },
                    MI: {
                        division: "East North Central",
                        region: "Midwest",
                        name: "Michigan"
                    },
                    RI: {
                        division: "New England",
                        region: "Northeast",
                        name: "Rhode Island"
                    },
                    KS: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "Kansas"
                    },
                    MT: {
                        division: "Mountain",
                        region: "West",
                        name: "Montana"
                    },
                    MS: {
                        division: "East South Central",
                        region: "South",
                        name: "Mississippi"
                    },
                    SC: {
                        division: "South Atlantic",
                        region: "South",
                        name: "South Carolina"
                    },
                    KY: {
                        division: "East South Central",
                        region: "South",
                        name: "Kentucky"
                    },
                    OR: {
                        division: "Pacific",
                        region: "West",
                        name: "Oregon"
                    },
                    SD: {
                        division: "West North Central",
                        region: "Midwest",
                        name: "South Dakota"
                    }
                };

            function V(e) {
                return e.properties.sourceSet
            }

            function J(e, t) {
                var r = t.year;
                if (e.properties.years) return e.properties.years.filter(function (e) {
                    return e > 0 && e <= r
                }).length % 2 == 1
            }

            function Z(e, t) {
                var r = t.year,
                    n = t.changeOffset,
                    i = e.properties,
                    a = e.properties,
                    o = a.years,
                    s = a.date,
                    c = a.founded,
                    u = 8080;
                return c ? u = c : o ? u = H(o, 1)[0] : i.year ? u = i.year : s && (u = s), Math.abs(u - r) < n / 2
            }

            function K(e, t) {
                var r = Oe(e, {
                        year: t.year - t.changeOffset
                    }),
                    n = Oe(e, t);
                return r > 0 && 0 === n
            }

            function $(e, t) {
                var r = t.year,
                    n = t.changeOffset,
                    i = t.rendering.decay;
                if ("ClippedHistorical" === e.properties.sourceSet) return J(e, t) && Math.abs(r - e.properties.y) < 3;
                if (e.properties.years) {
                    if (i) {
                        var a = t.rendering.decay[e.properties.sourceSet];
                        if (a) {
                            var o = e.properties.years;
                            return J({
                                properties: {
                                    years: [o[0], o[1] + a / 365.25]
                                }
                            }, t)
                        }
                    }
                    return J(e, t)
                }
                return e.properties.date ? "PLSS" == e.properties.sourceSet ? e.properties.date <= r : Math.abs(e.properties.date - r) > n / 2 : e.properties.year ? r - e.properties.year >= 0 && r - e.properties.year < n : !!e.properties.population && Oe(e, t) > 0
            }

            function q(e, t) {
                return X("odd_share", e, t) / X("all_share", e, t)
            }

            function Q(e, t) {
                return e.properties.data.dominantClaimType || (e.properties.data.dominantClaimType = function (e) {
                    var t;
                    if (!e.properties.data) return e.properties.data = {}, [];
                    var r = ["Homestead-like acts", "Indian Acts", "Sale", "Scrip Warrant acts", "Railroad Grants"].map(function (t) {
                            var r = e.properties.data["".concat(t, "_share")];
                            return void 0 === r ? [] : r.map(function (e) {
                                return [e[0], e[1], t]
                            })
                        }),
                        n = (t = []).concat.apply(t, function (e) {
                            return function (e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                    return r
                                }
                            }(e) || function (e) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                            }(e) || function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        }(r));
                    if (0 === n.length) return [];
                    n.sort(function (e, t) {
                        return e[0] - t[0]
                    });
                    var i = H(n.shift(), 3),
                        a = i[0],
                        o = i[1],
                        s = i[2],
                        c = [
                            [a, s]
                        ],
                        u = o,
                        l = s;
                    return n.forEach(function (e) {
                        var t = H(e, 3);
                        a = t[0], o = t[1], s = t[2], o > u && (u = o, s != l && (c.push([a, s]), l = s))
                    }), c
                }(e)), X("dominantClaimType", e, t)
            }

            function X(e, t, r) {
                var n, i, a = r.year,
                    o = t.properties.data[e];
                if (void 0 !== o) {
                    var s = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var l, p = o[Symbol.iterator](); !(s = (l = p.next()).done); s = !0) {
                            var h = l.value,
                                d = H(h, 2),
                                f = d[0];
                            if (d[1], !(f < a)) {
                                i = h;
                                break
                            }
                            n = h
                        }
                    } catch (e) {
                        c = !0, u = e
                    } finally {
                        try {
                            s || null == p.return || p.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    if (void 0 !== n || void 0 !== i) {
                        if (void 0 === n) return i[1];
                        if (void 0 === i) return n[1];
                        if ("string" == typeof n[1]) return n[1];
                        var g = i[0] - n[0],
                            v = (a - n[0]) / g;
                        return i[1] * v + n[1] * (1 - v)
                    }
                }
            }

            function ee(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "epop",
                    i = t.year;
                if (r = e.properties.population, "dens" === n && (r = e.properties.density), i >= 2010) return +r[2010];
                if (i <= 1790) return +r[1790];
                var a = i % 10;
                if (0 === a) return +r[i];
                var o = +r[i + 10 - a],
                    s = a / 10,
                    c = +r[i - a],
                    u = 1 - a / 10;
                if (0 === c && e.properties.founded && +e.properties.founded > i - a && +e.properties.founded < i + 10 - a) {
                    if (+e.properties.founded > i) return 0;
                    c = 10, u = 1 - (s = (i - e.properties.founded) / (i + 10 - a - e.properties.founded))
                }
                return o * s + c * u
            }

            function te(e, t) {
                var r = t.year,
                    n = t.changeOffset,
                    i = Oe(e, t) - Oe(e, {
                        year: r - n
                    });
                return Number.isNaN(i) ? 0 : i
            }

            function re(e, t) {
                return "".concat(e.properties.names.replace(/_+/g, " "), " under ").concat(e.properties.entry_class, " on ").concat(e.properties.signature_date.slice(0, 9))
            }

            function ne(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "dens",
                    i = Oe(e, t);
                return e.properties.children && e.properties.children.forEach(function (e) {
                    var n = Oe(e, t);
                    n > r && (i -= n)
                }), "dens" === n ? i / e.properties.area : i
            }

            function ie(e) {
                var t = e.properties.state;
                return U[t] ? U[t].region : "Unclear"
            }

            function ae(e, t) {
                var r = 10 * Math.round(t.year / 10),
                    n = ["alperin", "wiki", "cesta"].map(function (t) {
                        return e.populations[t][r]
                    }).filter(function (e) {
                        return e > 0
                    });
                return Object(S.h)(n) !== Object(S.e)(n) ? "Conflicting populations" : "No conflicts"
            }

            function oe(e) {
                return e.properties.area || e.properties.AREA_SQMI
            }

            function se(e, t) {
                return void 0 === e.properties.data.density ? X("population", e, t) / oe(e) : X("density", e, t)
            }

            function ce(e, t) {
                return se(e, t) > 2
            }

            function ue(e, t) {
                var r = se(e, t);
                if (r < 2) return 2 / r
            }

            function le(e, t) {
                return void 0 === e.properties.data ? 0 : X("".concat(t.claimtype, "_share"), e, t) / e.properties.data["".concat(t.claimtype, "_count")]
            }

            function pe(e, t) {
                var r = e.properties.data["".concat(t.claimtype, "_count")];
                return (X("".concat(t.claimtype, "_share"), e, t) - X("".concat(t.claimtype, "_share"), e, {
                    year: t.year - t.yearOffset
                })) / r
            }

            function he(e, t) {
                return X("".concat(t.claimtype, "_share"), e, t) / e.properties.area
            }

            function de(e, t) {
                var r = e.properties.data["".concat(t.claimtype, "_share")].find(function (r) {
                    return r[1] > e.properties.data["".concat(t.claimtype, "_count")] / 2
                });
                if (r) return r[0]
            }

            function fe(e, t) {
                var r = 2 * e.properties.AREA_SQMI - Oe(e, t);
                return r > 0 ? r : 0
            }

            function ge(e) {
                if (e.properties.maxPop) return e.properties.maxPop;
                var t = e.properties.data.population.map(function (e) {
                    return e[1]
                });
                return e.properties.maxPop = Object(S.e)(t), e.properties.maxPop
            }

            function ve(e) {
                var t = xe(B.map(function (t) {
                        return Oe(e, {
                            year: t
                        })
                    })),
                    r = t.map(function (e, r) {
                        return e / Object(S.l)(t) * B[r]
                    });
                return e.properties.averageYear = Object(S.l)(r), e.properties.averageYear
            }

            function me(e) {
                switch (e.properties.meta_class) {
                    case "Sale":
                        return "Land sales";
                    case "Homestead-like acts":
                        return "Homestead acts";
                    case "Railroad Grants":
                        return "Railroad grants";
                    case "Indian Acts":
                        return "Native land acts";
                    case "Mineral grants":
                        return "Mineral grants";
                    default:
                        return "Other"
                }
            }

            function ye(e) {
                return e.properties.averageYear ? e.properties.averageYear : (e.properties.averageYear = ve(e), e.properties.averageYear)
            }

            function be(e) {
                if (e.properties.maxYear) return e.properties.maxYear;
                var t = B.map(function (t) {
                        return Oe(e, {
                            year: t
                        })
                    }),
                    r = t.indexOf(Object(S.e)(t));
                return e.properties.maxYear = B[r], e.properties.maxYear
            }

            function je(e) {
                if (e.properties.maxPercentYear) return e.properties.maxPercentYear;
                var t = B.map(function (t) {
                        return Oe(e, {
                            year: t
                        }) / G[t]
                    }),
                    r = t.indexOf(Object(S.e)(t));
                return e.properties.maxPercentYear = B[r], e.properties.maxPercentYear
            }

            function Se(e) {
                var t = e.properties;
                return t.date ? t.date : t.year ? t.year : t.years && t.years[0] ? t.years[0] : void 0
            }

            function Oe(e, t) {
                return X("population", e, t)
            }

            function we(e, t) {
                var r = t.year,
                    n = t.changeOffset,
                    i = Oe(e, t),
                    a = Oe(e, {
                        year: r - n
                    });
                if (i < 1 && a < 1) return 1;
                var o = i / a;
                return Number.isNaN(o) ? 1 : o - 1
            }

            function ke(e, t) {
                return e.properties.data.all_count > 100 && le(e, t) > .1
            }

            function Ce(e, t) {
                return Math.abs(te(e, t))
            }

            function Pe(e) {
                return "".concat(e.properties.TribalCededLandsTableSchdTrb, " cession of ").concat(e.properties.years[1])
            }

            function Ae(e) {
                return e
            }

            function xe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (1 === e.length) return [1];
                var r = Object(S.e)(e),
                    n = e[0],
                    i = Object(S.e)([0, n - t]) / (r - t),
                    a = 1 - i,
                    o = xe(e.slice(1), n).map(function (e) {
                        return e * a
                    }).map(function (e) {
                        return Number.isNaN(e) ? 0 : e
                    });
                return o.unshift(i), o
            }
            var Me = {
                    duration: 0,
                    year: 1890,
                    drawing: ["States"],
                    projection: {
                        proj: "albersUsa",
                        bbox: void 0
                    },
                    rendering: {
                        lineWidth: {
                            Cities: 0,
                            ModernCounties: 0,
                            CountyLines: .2,
                            StateLines: .4,
                            ExternalLines: .6,
                            CensusCurves: 3,
                            HistoricCounties: 0,
                            ClippedHistorical: 0,
                            Coastline: 1,
                            Clipped: 0
                        },
                        fillStyle: {
                            Cities: "rgba(50,50,50, .66)",
                            CensusCurves: "none",
                            HistoricCounties: "none",
                            ClippedHistorical: "none",
                            Coastline: "none",
                            Native: "rgba(240, 240, 240, .75)",
                            Clipped: "rgba(240, 240, 240, 1)",
                            background: null
                        },
                        strokeStyle: {
                            CountyLines: "rgba(0,0,0,.5)",
                            StateLines: "rgba(0,0,0,.5)",
                            ExternalLines: "rgba(0,0,0,.5)",
                            CensusCurves: "rgba(0,0,0,.5)",
                            Coastline: "black",
                            PLSS: "none",
                            Native: "none"
                        },
                        decay: {
                            Maury: 45
                        },
                        opacity: {
                            tiles: 1
                        },
                        tiles: [],
                        background: ["globe", "Continents"]
                    },
                    getters: {
                        size: {
                            Cities: "population"
                        },
                        fill: {
                            Cities: "populationChange",
                            ModernCounties: "density",
                            PLSS: "date"
                        },
                        annotation: {
                            Native: "SauntTitle",
                            PLSS: "PLSSTitle"
                        }
                    },
                    onclick: "annotate",
                    scales: {
                        size: {
                            Cities: "size"
                        },
                        fill: {
                            Cities: "change",
                            ModernCounties: "better",
                            PLSS: "homesteadYear"
                        },
                        x: {},
                        y: {}
                    },
                    filters: {
                        HistoricCounties: "extant",
                        ClippedHistorical: "extant",
                        Cities: "extant",
                        CensusCurves: "extant",
                        Whales: "extant"
                    },
                    changeOffset: 10
                },
                Ee = r(52);

            function Ne(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var _e = {
                spilhaus: {
                    projection: Object(b.D)().rotate([95, 45]).center([30, -5]).clipAngle(166),
                    bbox: "Continents"
                },
                atlantis: {
                    projection: Object(j.e)().scale(335).rotate([30, -45, 90]),
                    bbox: "Continents"
                },
                albersUsa: {
                    projection: Object(b.b)(),
                    bbox: "ExternalLines"
                },
                mercator: {
                    projection: Object(b.w)(),
                    bbox: "Continents"
                },
                oceans: {
                    projection: Object(b.d)().rotate([91, 60, 290]).clipAngle(159).angle(90),
                    bbox: "Continents"
                },
                lotus: {
                    projection: function () {
                        var e = Object(b.j)().center([-80, -90]).radius(10)().coordinates[0].reverse(),
                            t = -21,
                            r = Object(Ee.a)({
                                type: "Polygon",
                                coordinates: [
                                    [
                                        [180, t]
                                    ].concat(Ne(e), [
                                        [-180, t],
                                        [-135, 89.9],
                                        [-89.9, t],
                                        [0, 89.9],
                                        [89.9, t],
                                        [135, 89.9],
                                        [180, t]
                                    ])
                                ]
                            }),
                            n = {
                                face: [
                                    [-135, 89.9],
                                    [-89.9, t],
                                    [-180, t]
                                ],
                                project: Object(j.a)().parallel(-45).rotate([121, 0]),
                                children: []
                            },
                            i = {
                                face: [
                                    [135, 89.9],
                                    [180, t],
                                    [89.9, t]
                                ],
                                project: Object(j.a)().parallel(-45).rotate([-121, 0]),
                                children: []
                            },
                            a = {
                                face: [
                                    [0, 89.9],
                                    [89.9, t],
                                    [-89.9, t]
                                ],
                                project: Object(j.a)().parallel(-45).rotate([0, 0]),
                                children: []
                            },
                            o = {
                                face: [
                                    [-180, t],
                                    [-89.9, t],
                                    [89.9, t],
                                    [180, t]
                                ],
                                project: Object(b.l)().parallels([-51.5, -30]),
                                children: [n, i, a]
                            };
                        return Object(Ee.b)(o, function (e, r) {
                            return e *= 57.29577951308232, (r *= 57.29577951308232) < t ? o : e >= -180 && e <= -89.9 ? n : e <= 180 && e >= 89.9 ? i : a
                        }).precision(.1).preclip(r).rotate([165, 0])
                    }(),
                    bbox: "Continents"
                },
                mollweide: {
                    projection: function () {
                        var e = {
                                top: [-180, -96.18, 68.85, 180],
                                bottom: [-180, -57, 90, 180]
                            },
                            t = [Object(S.j)(e.top.length - 1).map(function (t) {
                                return [
                                    [e.top[t], 0],
                                    [(e.top[t] + e.top[t + 1]) / 2, 90],
                                    [e.top[t + 1], 0]
                                ]
                            }), Object(S.j)(e.bottom.length - 1).map(function (t) {
                                return [
                                    [e.bottom[t], 0],
                                    [(e.bottom[t] + e.bottom[t + 1]) / 2, -90],
                                    [e.bottom[t + 1], 0]
                                ]
                            })];
                        return Object(j.c)(j.f, t).rotate([-200, 0])
                    }(),
                    bbox: "Continents"
                }
            };

            function Te(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function Ie(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function De(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            r.d(t, "default", function () {
                return Ve
            });
            var Le = a()("app:log");
            a.a.enable("*");
            var ze = new h.a(new W.a),
                Fe = {
                    flame: Object(y.k)().domain([-.01, .1, .2, .4, .6]).range(["black", "purple", "red", "orange", "yellow", "white"]),
                    percent: Object(y.k)().range(Object(S.j)(0, 1.01, .1).map(function (e) {
                        return Object(v.interpolatePlasma)(1 - e)
                    })).domain(Object(S.j)(.1, 1.01, .1)),
                    gannett: Object(y.k)().range(["#EEDCBB", "#DDBC89", "#CB9A57", "#AF6331", "#7E2310", "#4A0A08"]).domain([2, 6, 18, 45, 90]),
                    exaggeration: Object(y.k)().range(Object(S.j)(0, 1.01, 1 / 6).map(function (e) {
                        return Object(v.interpolatePlasma)(1 - e)
                    })).domain([1, 1.25, 1.75, 3, 5, 10]),
                    missingPeople: Object(y.k)().range(Object(S.j)(0, 1.01, 1 / 6).map(function (e) {
                        return Object(v.interpolatePlasma)(1 - e)
                    })).domain([1, 10, 100, 300, 1e3]),
                    better: Object(y.k)().range(v.schemeYlOrBr[4]).domain([4, 16, 64]),
                    blurry: Object(y.d)().range(v.schemeYlOrBr[4]).domain([4, 16, 64]),
                    highlightBad: Object(y.e)().range([v.schemeAccent[5], "#f1027e", v.schemeAccent[0], v.schemeAccent[0], v.schemeAccent[0], v.schemeAccent[0]]).domain(["Non-Alperin-Sheriff", "Conflicting populations", "Alperin-Sheriff"]),
                    change: Object(y.k)().range(v.schemePiYG[6]).domain([-.4, -.1, -1e-4, .01, .15]),
                    simpleChange: Object(y.k)().range(["#fc8d59", "#91bfdb"]).domain([0]),
                    size: Object(y.f)().exponent(1 / 3).range([.1, 10]).domain([1, 1e6]).clamp(!0),
                    BLM_class: Object(y.e)(v.schemeSet2).domain(["Sale", "Homestead acts", "Indian Acts", "Railroad Grants", "Scrip Warrant acts", "Other"]),
                    sizeQuart: Object(y.f)().exponent(.25).range([.6, 12]).domain([1, 8e6]).clamp(!0),
                    customExplanation: Object(y.e)().range(["#66c2a5", "#8da0cb", "#fc8d62", "#fc8d62"]).domain(["CESTA detailed states", "CESTA other states", "Only Wikipedia"]),
                    averageYear: Object(y.k)().range(Object(S.j)(0, 1.01, .2).map(function (e) {
                        return Object(v.interpolatePlasma)(e)
                    })).domain([1865, 1896, 1920, 1945, 1976]),
                    maxYear: Object(y.k)().range(Object(S.j)(0, 1.01, .2).map(function (e) {
                        return Object(v.interpolatePlasma)(e)
                    })).domain([1871, 1901, 1920, 1981, 2001]),
                    homesteadYear: Object(y.k)().range(Object(S.j)(0, 1.01, 1 / 11).map(function (e) {
                        return Object(v.interpolatePlasma)(e)
                    })).domain(Object(S.j)(1821, 1932, 10)),
                    homesteadYear2: Object(y.k)().range(Object(S.j)(0, 1.01, .1).map(function (e) {
                        return Object(v.interpolatePlasma)(e)
                    })).domain(Object(S.j)(1871, 1920, 5)),
                    scheme2: Object(y.e)(v.schemeSet2),
                    identityColors: function (e) {
                        if (!Re[e.ID]) {
                            var t = new Uint8Array(new ArrayBuffer(4));
                            t[3] = 255;
                            for (var r = new Uint32Array(t.buffer); We[r];) Ye(t);
                            We[r] = e, Re[e.ID] = "rgba(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ", ").concat(t[3], ")")
                        }
                        return Re[e.ID]
                    }
                },
                We = [],
                Re = {};

            function Ye(e) {
                Object(S.j)(3).forEach(function (t) {
                    e[t] = 255 * Math.random()
                })
            }

            function He(e) {
                var t = function e(t) {
                    return "number" == typeof t[0] ? [t] : "number" == typeof t[0][0] ? t : function (e) {
                        var t;
                        return (t = Array.prototype).concat.apply(t, De(e))
                    }(t.map(function (t) {
                        return e(t)
                    }))
                }(e.geometry.coordinates).map(function (e) {
                    return {
                        x: e[0],
                        y: e[1],
                        r: 0
                    }
                });
                return Object(P.d)(t)
            }

            function Be(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "packPoints";
                if (e.properties.centroid) return e.properties.centroid;
                if ("packPoints" === t) {
                    var r = He(e),
                        n = r.x,
                        i = r.y;
                    return e.properties.centroid = [n, i], [n, i]
                }
                if ("centroid" === t) switch (e.geometry.type) {
                    case "Polygon":
                        return Object(M.b)(e.geometry.coordinates[0]);
                    case "MultiPolygon":
                        return e.geometry.coordinates.map(function (e) {
                            return Object(M.b)(e[0])
                        }).filter(function (e) {
                            return e[0]
                        })[0];
                    default:
                        return
                }
            }

            function Ge() {
                return !0
            }
            var Ue = Object(S.j)(1790, 2020, 10),
                Ve = function () {
                    function e(t) {
                        var r = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "main";
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Le("Creating ".concat(c)), this.selector = t, this.width = Math.floor(i), this.height = Math.floor(a), this.id = c, this.width = parseInt(Object(s.g)(t).style("width"), 10), this.height = parseInt(Object(s.g)(t).style("height"), 10) || Math.floor(window.innerHeight), this.scales = Fe, this.getters = n, this.actions = Qe, this.rendering = {}, this.api = Me;
                        var u = o || {};
                        Object(l.a)(u).forEach(function (e) {
                            Object(C.a)(r.api, e, u[e])
                        }), this.promises = {}, this.cartography = {}, this.cartography.features = {}, this.cartography.zoom = {
                            translate: [0, 0],
                            scale: 1
                        }, this.cartography.albersMagic = {
                            d3_origin: [58.2, -13.5],
                            zfact: 1.6228
                        };
                        var p = this.cartography.zoom,
                            h = this.cartography.zoom,
                            d = h.scale,
                            f = h.translate;
                        this.cartography.reproject = function (e) {
                            var t = Te(e, 2),
                                r = t[0],
                                n = t[1];
                            return [r * d + f[0], n * d + f[1]]
                        };
                        var g = Object(b.G)({
                                point: function (e, t, r) {
                                    if (void 0 === r || r >= 1 / p.k / p.k) return this.stream.point(e * p.scale + p.translate[0], t * p.scale + p.translate[1])
                                }
                            }),
                            v = Object(b.k)().extent([
                                [0, 0],
                                [i, a]
                            ]);
                        this.cartography.projection = {
                            stream: function (e) {
                                return g.stream(v.stream(e))
                            }
                        }, this.cartography.invert = function (e) {
                            var t = Te(e, 2),
                                r = t[0],
                                n = t[1];
                            return [(r - p.translate[0]) / p.scale, (n - p.translate[1]) / p.scale]
                        };
                        var m = function (e) {
                            var t = e.transform;
                            p.translate = [t.x, t.y], p.scale = t.k, r.rendering.svg.selectAll("path.geo").attr("d", r.rendering.svgPath), r.updateInternalZoomStates(), r.rendering.timer._time === 1 / 0 && r.rendering.timer.drawFor(500)
                        };
                        this.cartography.zoomBehavior = Object(w.a)().on("zoom", function () {
                            m(s.c)
                        }).on("end", function () {
                            m(s.c)
                        }), this.initializeRendering()
                    }
                    return function (e, t, r) {
                        t && Ie(e.prototype, t)
                    }(e, [{
                        key: "getLayers",
                        value: function (e) {
                            var t = e || this.api,
                                r = Object(l.d)([]);
                            return t.drawing && t.drawing.forEach(function (e) {
                                r.add(e)
                            }), Object(l.a)(t).forEach(function (e) {
                                var t = Te(e.split("."), 2),
                                    n = t[0],
                                    i = t[1];
                                "zoom" === n && i && r.add(i)
                            }), r.values()
                        }
                    }, {
                        key: "plotAPI",
                        value: function () {
                            var e, t, r = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                a = this.getLayers(n);
                            n.projection ? (e = n.projection.proj || this.api.projection.proj, t = n.projection.bbox || this.api.projection.bbox) : (e = n["projection.proj"] || this.api.projection.proj, t = n["projection.bbox"] || this.api.projection.bbox), this.animateStop();
                            var o = new z.a({
                                top: "".concat(this.height / 2, "px")
                            });
                            return o.spin(Object(s.g)(this.selector).node()), this.setProjection(e, t).then(function () {
                                return r.ensureFeaturesExist(a)
                            }).then(function () {
                                return r.ensureDataExists(n)
                            }).then(function () {
                                void 0 !== n.drawing && (n.drawing = n.drawing.map(function (e) {
                                    return e.replace(/\/.*/, "")
                                })), r._plotApiSync(n, i), o.stop()
                            })
                        }
                    }, {
                        key: "ensureDataExists",
                        value: function (e) {
                            var t = [];
                            return e.claimtype && t.push(this.promiseResource("CountyClaims")), Promise.all(t)
                        }
                    }, {
                        key: "transitionTiles",
                        value: function (e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.api.duration,
                                n = this.api.rendering.opacity;
                            this.rendering.fauxDOM || (this.rendering.fauxDOM = {});
                            var i = this.rendering.fauxDOM;
                            if ("string" == typeof e) throw Le("Error: string instead of array in tile API call for ".concat(e)), "".concat(e, " must be an array");
                            if ("string" == typeof t) throw alert("Error: string instead of array in tile API call for ".concat(t)), "".concat(t, " must be an array");
                            new Set(e);
                            var a = new Set(t),
                                s = new Set(De(e).concat(De(t)));
                            this.rendering.tiles = De(s), s.forEach(function (e) {
                                var t = 0;
                                a.has(e) && (t = n[e] || n.tiles), i[e] || (i[e] = {
                                    timer: Object(O.d)(function () {}),
                                    opacity: 0
                                });
                                var s = i[e].opacity,
                                    c = Object(m.interpolate)(s, t);
                                i[e].timer.restart(function (t) {
                                    var n = Object(S.h)([1, t / r]);
                                    i[e].opacity = Math.sqrt(Object(o.a)(c(n))), 1 === n && i[e].timer.stop()
                                })
                            })
                        }
                    }, {
                        key: "_plotApiSync",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.api,
                                i = (this.getters, this.rendering.timer);
                            n.annotate = void 0, n.animate = void 0;
                            var a = n.drawing,
                                o = t.drawing || n.drawing || [],
                                s = Ke(a, n),
                                c = Ke(o, t, n);
                            this.transitionTiles(s, c);
                            var u = Object(l.a)(t);
                            if (u.sort(), u.forEach(function (r) {
                                    var i = t[r],
                                        a = Te(r.split("."), 3),
                                        o = a[0],
                                        s = a[1],
                                        c = a[2];
                                    if (["scales", "getters", "filters"].indexOf(o) > -1) {
                                        var u = Te(i.split("=>"), 2),
                                            l = u[0],
                                            p = u[1];
                                        p && (p.match("return") || p.match("{") || (p = "return ".concat(p)), p = Je(p, l), l = l.replace(" ", ""), Le("instantiating", p), e["scales" === o ? "scales" : "getters"][p] = function (e) {
                                            var t = new Function(l, "disguised_api", "getters", p);
                                            return function (r, n) {
                                                return t(r, n, e)
                                            }
                                        }(e.getters), i = p)
                                    }
                                    if (("<linear>" === i || "<log>" === i || "<sqrt>" === i || "<cat>" === i) && "scales" === o) {
                                        var h = c,
                                            d = s,
                                            f = n.getters[d][h],
                                            g = "".concat(i, "-").concat(d, "-").concat(f, "-").concat(n.year);
                                        if (void 0 === e.scales[g]) {
                                            var m, b = e.getters[e.api.filters[h]] || Ge;
                                            if ("<cat>" === i) m = Object(y.e)(v.schemeSet2);
                                            else {
                                                var j, O = e.cartography.features[h].filter(function (e) {
                                                        return b(e, n)
                                                    }).map(function (t) {
                                                        return +e.getters[f](t, n)
                                                    }).filter(function (e) {
                                                        return Number.isFinite(e)
                                                    }),
                                                    w = Object(S.d)(O);
                                                if ("y" === d ? j = [550, 40] : "x" === d ? j = [40, 800] : "size" === d ? j = [.1, 10] : "fill" === d ? j = ["white", "brown"] : Le("uh oh, no vrange for aes ".concat(d)), "<linear>" === i) m = Object(y.c)();
                                                else if ("<log>" === i) m = Object(y.d)().clamp(!0), (w = Object(S.d)(e.cartography.features[h].filter(function (t) {
                                                    return b(t, e.api)
                                                }).map(function (t) {
                                                    return +e.getters[f](t, n)
                                                }).filter(function (e) {
                                                    return Number.isFinite(e) && e > 0
                                                })))[0] /= 2, w[1] *= 2;
                                                else {
                                                    if ("<sqrt>" !== i) throw new Error("uh oh, no scale");
                                                    m = Object(y.f)().exponent(.5)
                                                }
                                                m = m.domain(w).range(j)
                                            }
                                            e.scales[g] = m
                                        }
                                        i = g
                                    }
                                    "zoom" === o && (n.zoom = {}), "undefined" !== i && null !== i && "none" !== i || (i = void 0), Object(C.a)(n, r, i)
                                }), r) {
                                if (this.domifyAll(), n.zoom)
                                    if (n.zoom.scale && n.zoom.translate) {
                                        var p = this.cartography.zoom;
                                        p.scale = n.zoom.scale, p.translate = n.zoom.translate, this.updateInternalZoomStates()
                                    } else {
                                        var h = Object(l.a)(n.zoom)[0],
                                            d = n.zoom[h];
                                        d && this.zoomToFeatures(h, d, n.duration)
                                    } n.animate ? this.animationPrep(!0) : n.duration > 0 ? i.drawFor(n.duration + 250) : this.drawMap(void 0, !1)
                            }
                            this.updateAnnotations()
                        }
                    }, {
                        key: "animationPrep",
                        value: function () {
                            var e = this;
                            Le("Prepping Animation"), this.rendering.animation = {
                                scales: [],
                                stats: {
                                    prep: "foo"
                                }
                            };
                            var t = this.api,
                                r = this.rendering.animation.scales,
                                n = t.duration;
                            t.animate.forEach(function (e) {
                                var t = e.key,
                                    r = e.value,
                                    i = e.duration,
                                    a = e.delay;
                                if (void 0 === r || void 0 === t) throw e;
                                var o = i || 0,
                                    s = a || 0;
                                o + s > n && (n = o + s)
                            }), this.rendering.animation.stats.duration = n;
                            var i = {};
                            t.animate.forEach(function (a) {
                                var o = a.value,
                                    s = a.duration,
                                    c = a.delay,
                                    u = a.key;
                                if (u.startsWith("zoom")) {
                                    var p, h = u.split(".")[1],
                                        d = Object(l.a)(t.zoom)[0];
                                    d && (p = {
                                        name: d,
                                        ids: t.zoom[d]
                                    }), i.zoom = e.zoomTween({
                                        name: h,
                                        ids: o
                                    }, p), u = "zoom"
                                } else i[u] = Object(m.interpolate)(t[u], o);
                                var f = s || n,
                                    g = c || 0;
                                r.push([u, function (e) {
                                    var t = Object(y.c)().domain([g / n, g / n + f / n]).range([0, 1]).clamp(!0);
                                    if (!(t(e) > 1 || t(e) < 0)) return i[u](t(e))
                                }])
                            }), this.animateStart(n)
                        }
                    }, {
                        key: "animateStart",
                        value: function (e) {
                            var t = this.rendering.animation;
                            t.running = !0, t.timer = this.rendering.animation.timer || Object(O.d)(function () {}), t.stats.duration = e;
                            var r = t.timer;
                            r.stop(), this.api.animate_hold || (r.restart(this.timerFactory(e)), Object(O.e)())
                        }
                    }, {
                        key: "timerFactory",
                        value: function (e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = this.rendering.animation,
                                i = n.timer;
                            return function (a) {
                                n.stats.elapsed = a + r;
                                var o = (r + a) / e;
                                o > 1 && (o = 1, n.running = !1, i.stop()), t.animateAt((r + a) / e)
                            }
                        }
                    }, {
                        key: "animatePause",
                        value: function () {
                            this.rendering.animation.timer.stop()
                        }
                    }, {
                        key: "animateResume",
                        value: function () {
                            var e = this.rendering.animation;
                            if (!e.running) return this.animationPrep(), this.animateStart();
                            var t = e.timer,
                                r = e.stats,
                                n = r.duration,
                                i = r.elapsed;
                            t.restart(this.timerFactory(n, i))
                        }
                    }, {
                        key: "animateStop",
                        value: function () {
                            this.rendering && this.rendering.animation && this.rendering.animation.timer && this.rendering.animation.timer.stop(), this.rendering.animation && (this.rendering.animation.running = !1)
                        }
                    }, {
                        key: "animateAt",
                        value: function (e) {
                            var t = this,
                                r = this.rendering.animation.scales,
                                n = this.api;
                            delete n.animate, delete n.zoom, n.duration = 0, r.forEach(function (r) {
                                var n = Te(r, 2),
                                    i = n[0],
                                    a = n[1];
                                "year" === i && (t.rendering.animation.last_year = t.api.year), t.api[i] = a(e), t.rendering.sliders[i] && t.rendering.sliders[i].forEach(function (e) {
                                    e.silentValue(t.api[i])
                                })
                            }), this._plotApiSync({}, !0)
                        }
                    }, {
                        key: "updateAnnotations",
                        value: function () {
                            var e = this,
                                t = this.api,
                                r = this.getters,
                                n = this.cartography.features,
                                i = this.rendering.svg;
                            i.susielu.selectAll("g.annotation-group").remove(), i.selectAll(".highlit.geo").remove(), Object(l.a)(t.annotate).forEach(function (i) {
                                var a = Object(l.d)(t.annotate[i]);
                                n[i].filter(function (n) {
                                    return !(!a.has(n.ID) && !a.has(n.label)) && (!t.filters[i] || r[t.filters[i]](n, e.api))
                                }).forEach(function (t) {
                                    return e.annotateFeature(t, !0)
                                })
                            })
                        }
                    }, {
                        key: "initializeRendering",
                        value: function () {
                            var e = this,
                                t = this.selector,
                                r = this.width,
                                n = this.height;
                            void 0 === this.rendering.canvas && (this.rendering = {}, this.rendering.fauxDOM = {}, this.rendering.canvas = Object(s.g)(t).append("canvas").attr("width", r).attr("height", n).attr("id", "canvas-".concat(this.id)), this.rendering.canvas.call(this.cartography.zoomBehavior), this.rendering.context = this.rendering.canvas.node().getContext("2d"), "main" === this.id && (this.rendering.sliders = {}, this.rendering.svg = Object(s.g)(t).append("svg").attr("width", r).attr("height", n).attr("id", "svg-".concat(this.id)).call(this.cartography.zoomBehavior), this.rendering.svg.susielu = this.rendering.svg.append("g").attr("id", "susielu"), this.rendering.legendSVG = Object(s.g)(t).append("svg").attr("width", .8 * r).attr("height", .8 * n).attr("id", "svg-legend-".concat(this.id)).attr("class", "legendSVG"), this.rendering.svg.on("mousemove", function (t) {
                                return e.handleMouseMove()
                            }).on("tap", function (t) {
                                return e.handleMouseMove()
                            }), this.rendering.timer = Object(O.d)(function () {}), this.rendering.timer.stop(), this.rendering.timer.drawFor = function (t) {
                                e.drawMap(void 0, !1), e.rendering.timer.restart(function (r) {
                                    var n = (r + Number.MIN_VALUE) / t;
                                    if (n > 1) return n = 1, e.drawMap(void 0, !1), void e.rendering.timer.stop();
                                    try {
                                        e.drawMap(void 0, !0)
                                    } catch (t) {
                                        throw e.rendering.timer.stop(), t
                                    }
                                }), Object(O.e)()
                            }))
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function () {
                            var e = this,
                                t = {
                                    ID: void 0
                                },
                                r = Te(Object(s.a)(this.rendering.svg.node(), s.c), 2),
                                n = r[0],
                                i = r[1],
                                a = this.width,
                                o = [this.featureAtPoint(Math.floor(n) + Math.floor(i) * Math.floor(a))];
                            if (!(o.length < 1 || void 0 === o[0] || o[0].properties && ("globe" === o[0].properties.sourceSet || "Continents" === o[0].properties.sourceSet))) {
                                var c = this.drawSVGfeature(o);
                                o[0].ID !== t.ID && (this.annotateFeature(o[0], !1), t = o[0]), c.on("mousedown", function () {
                                    s.c.stopPropagation()
                                }).on("tap", function (t) {
                                    e.actions[e.api.onclick](t, e)
                                }).on("click", function (t) {
                                    e.actions[e.api.onclick](t, e)
                                })
                            }
                        }
                    }, {
                        key: "drawSVGfeature",
                        value: function (e) {
                            var t = this,
                                r = this.rendering.svg.selectAll("path.highlit").data(e, function (e) {
                                    return e.ID
                                });
                            return r.exit().remove(), r.enter().append("path").classed("highlit", !0).classed("geo", !0).style("stroke", "black").style("stroke-opacity", .2).style("stroke-width", 0).style("fill", "white").style("fill-opacity", 0).attr("d", function (e) {
                                return t.rendering.svgPath(e)
                            }).merge(r).style("stroke-width", 3), r
                        }
                    }, {
                        key: "annotateFeature",
                        value: function (e, t) {
                            var r = He(e),
                                n = r.r,
                                i = r.x,
                                a = r.y,
                                o = this.height,
                                s = this.width,
                                c = this.api,
                                u = c.scales,
                                l = c.getters,
                                p = e.properties.sourceSet;
                            p || Le("WARNING: No sourceSet defined in properties for feature", e), u.x[p] && (i = this.scales[u.x[p]](this.getters[l.x[p]](e)), a = this.scales[u.y[p]](this.getters[l.y[p]](e)));
                            var h = this.cartography.zoom,
                                d = h.translate,
                                f = h.scale,
                                g = i * f + d[0],
                                v = a * f + d[1],
                                m = "";
                            l.annotation && l.annotation[p] && (m = this.getters[l.annotation[p]](e, this.api));
                            var b = [{
                                    note: {
                                        label: m,
                                        title: e.label || e.ID,
                                        wrapSplitter: /\n/
                                    },
                                    id: e.ID,
                                    data: {
                                        x: g,
                                        y: v
                                    },
                                    dy: 30 * (v > o / 2 ? -1 : 1) + n,
                                    dx: 30 * (g > s / 2 ? -1 : 1) + n,
                                    subject: {
                                        radius: n * f < 25 ? n * f : 10,
                                        radiusPadding: 1 * f
                                    }
                                }],
                                j = Object(_.a)().editMode(!1).accessors({
                                    x: function (e) {
                                        return e.x
                                    },
                                    y: function (e) {
                                        return e.y
                                    }
                                }).type(n * f > 15 ? _.c : _.b).annotations(b);
                            this.rendering.svg.susielu.selectAll("g.annotation-group:not(.preserve)").remove();
                            var O = this.rendering.svg.susielu.append("g").attr("class", "annotation-group").classed("preserve", t).call(j);
                            if (O.selectAll("path.connector, path.subject").style("stroke-width", 5), O.select("rect.annotation-note-bg").attr("rx", 8).attr("ry", 8).style("fill-opacity", .8), void 0 !== e.properties.population) {
                                var w = O.selectAll("g.annotation-note"),
                                    k = e.properties.data.population.map(function (e) {
                                        var t = Te(e, 2);
                                        return {
                                            year: t[0],
                                            pop: t[1]
                                        }
                                    }),
                                    C = w.selectAll("rect.annotation-note-bg"),
                                    P = +C.attr("height"),
                                    A = +C.attr("width") + +C.attr("x"),
                                    x = Te(function (e) {
                                        var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
                                        t.setAttributeNS(null, "transform", e);
                                        var r = t.transform.baseVal.consolidate().matrix;
                                        return [r.e, r.f]
                                    }(w.select(".annotation-note-content").attr("transform")), 2),
                                    M = (x[0], x[1]),
                                    E = Object(y.c)().domain(Object(S.d)(k, function (e) {
                                        return e.pop
                                    })).range([0, -20]),
                                    N = Object(y.c)().domain([1785, 2015]).range([0, A]),
                                    I = Object(T.u)().y(function (e) {
                                        return E(e.pop)
                                    }).x(function (e) {
                                        return N(e.year)
                                    }),
                                    D = M > 0 ? -5 : 20 - M + 5;
                                w.select(".annotation-note-content").append("path").attr("d", I(k)).attr("transform", "translate(0,".concat(D, ")")).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3);
                                var L = -30;
                                M < 0 && (L = 0), w.select("rect.annotation-note-bg").style("height", P + 10 + 20).attr("y", L).attr("rx", 8).attr("ry", 8).style("fill-opacity", .8)
                            }
                        }
                    }, {
                        key: "loadTile",
                        value: function (e, t) {
                            var r = this;
                            return this.cartography.tiles = this.cartography.tiles || {}, this.cartography.tilePromises = this.cartography.tilePromises || {}, this.cartography.tilePromises[t] ? Promise.resolve(1) : (this.cartography.tilePromises[t] = new Promise(function (e) {
                                var n = new Image;
                                n.addEventListener("load", function () {
                                    r.cartography.tiles[t] = n, e(n)
                                }), n.src = t
                            }), this.cartography.tilePromises[t])
                        }
                    }, {
                        key: "visible_children",
                        value: function (e, t, r, n) {
                            var i = this,
                                a = Te(n, 4),
                                o = a[0],
                                s = a[1],
                                c = a[2],
                                u = a[3],
                                l = Te(this.albersTileTranslate(e, t, r), 3),
                                p = l[0],
                                h = l[1],
                                d = l[2];
                            if (p + d < o || p > s || h > u || h + d < c) return [];
                            if (2 * e > 3 * this.cartography.zoom.scale || 64 === e) return [
                                [e, t, r]
                            ];
                            var f, g = [
                                [2 * e, 2 * t, 2 * r],
                                [2 * e, 2 * t + 1, 2 * r],
                                [2 * e, 2 * t + 1, 2 * r + 1],
                                [2 * e, 2 * t, 2 * r + 1]
                            ].map(function (e) {
                                var t = Te(e, 3),
                                    r = t[0],
                                    a = t[1],
                                    o = t[2];
                                return i.visible_children(r, a, o, n)
                            }).filter(function (e) {
                                return e.length
                            });
                            return g.length ? (f = []).concat.apply(f, De(g)) : []
                        }
                    }, {
                        key: "visible_tiles",
                        value: function () {
                            var e = this.width,
                                t = this.height,
                                r = this.cartography.invert,
                                n = Te(r([0, 0]), 2),
                                i = n[0],
                                a = n[1],
                                o = Te(r([e, t]), 2),
                                s = [i, o[0], a, o[1]];
                            return this.visible_children(1, 0, 0, s)
                        }
                    }, {
                        key: "drawAllTiles",
                        value: function () {
                            var e = this;
                            if (this.rendering.tiles && !this.parent) {
                                this.createBackgroundMap();
                                var t = this.children.background.rendering.context;
                                return t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.restore(), this.rendering.tiles.map(function (t) {
                                    return e.drawTiles(t)
                                })
                            }
                        }
                    }, {
                        key: "drawTiles",
                        value: function (e) {
                            var t = this;
                            if (this.api, void 0 === e) return Promise.resolve(1);
                            var r = this.children.background.rendering.context,
                                n = this.visible_tiles(),
                                i = this.rendering.fauxDOM[e].opacity,
                                a = n.map(function (n) {
                                    var a = Te(n, 3),
                                        o = a[0],
                                        s = a[1],
                                        c = a[2],
                                        u = "/tiles/".concat(e, "/").concat(o, "/").concat(s, "/").concat(c, ".png");
                                    return t.loadTile(e, u).then(function () {
                                        return r.globalAlpha = i, t.drawTile(e, o, s, c), r.globalAlpha = 1, !0
                                    })
                                });
                            return Promise.all(a)
                        }
                    }, {
                        key: "albersTileTranslate",
                        value: function (e, t, r) {
                            var n = this.cartography.albersMagic,
                                i = n.d3_origin,
                                a = n.zfact,
                                o = i[1] + r / e * 512 * a;
                            return [i[0] + t / e * 512 * a, o, 512 / e * a]
                        }
                    }, {
                        key: "drawTile",
                        value: function (e, t, r, n) {
                            var i = this,
                                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "up",
                                o = this.children.background.rendering.context,
                                s = "/tiles/".concat(e, "/").concat(t, "/").concat(r, "/").concat(n, ".png"),
                                c = this.cartography.tiles[s];
                            if (void 0 === c && "up" === a && t > 1) return this.drawTile(e, t / 2, Math.floor(r / 2), Math.floor(n / 2), a = "down"), !1;
                            if (void 0 === c && "down" === a) {
                                var u = [0, 1];
                                u.forEach(function (o) {
                                    u.forEach(function (s) {
                                        u.forEach(function (c) {
                                            u.forEach(function (u) {
                                                return i.drawTile(e, 4 * t, 4 * r + 2 * c + o, 4 * n + 2 * u + s, a = !1), !1
                                            })
                                        })
                                    })
                                })
                            }
                            var l = Te(this.albersTileTranslate(t, r, n), 3),
                                p = l[0],
                                h = l[1],
                                d = l[2];
                            return c && o.drawImage(c, 0, 0, 512, 512, p, h, d, d), !0
                        }
                    }, {
                        key: "updateInternalZoomStates",
                        value: function () {
                            var e = this,
                                t = this.rendering,
                                r = t.canvas,
                                n = t.svg,
                                i = t.context,
                                a = this.cartography.zoom,
                                o = a.translate,
                                s = a.scale,
                                c = Te(o, 2),
                                u = c[0],
                                p = c[1],
                                h = s;
                            [r, n].forEach(function (e) {
                                e && (e.node().__zoom = w.b.translate(u, p).scale(h))
                            }), i.setTransform(h, 0, 0, h, u, p), this.children && Object(l.a)(this.children).forEach(function (t) {
                                e.children[t].rendering.context.setTransform(h, 0, 0, h, u, p)
                            })
                        }
                    }, {
                        key: "drawLegend",
                        value: function (e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.rendering.legendSVG;
                            if (this.width, (this.lastLegend !== JSON.stringify(this.api) || r) && (!((new Date).getTime() - this.rendering._last_legend_draw < 750) || r)) {
                                this.lastLegend = JSON.stringify(this.api), n.selectAll("g.legendQuant").remove();
                                var i = n.append("g").attr("class", "legendQuant").attr("transform", "translate(30, 40)").each(function () {
                                        Object(s.g)(this).append("g").attr("class", "legendbox").append("rect").style("fill", "white").style("stroke", "black").style("stroke-width", 4).style("opacity", .6).style("stroke-opacity", .1), Object(s.g)(this).append("g").attr("class", "legendipso")
                                    }),
                                    a = function (e) {
                                        var t = e.i,
                                            r = e.genLength,
                                            n = e.generatedLabels;
                                        return 0 === t ? "".concat(n[t]).replace("NaN%", "NaN").replace("NaN to", "Under ") : t === r - 1 ? ("".concat(n[r - 1]) || "").replace("NaN%", "NaN").replace(" to NaN", "") : n[t]
                                    },
                                    o = Object(c.a)(".0f"),
                                    u = Object(c.a)(".1%"),
                                    l = e,
                                    p = Object(c.a)(".2f"),
                                    h = a;
                                if (("scheme2" === e || e.startsWith("<cat>")) && (l = ""), e.endsWith("Year") && (l = "Year"), "change" === e || "simpleChange" === e) {
                                    var d = this.api,
                                        f = d.year,
                                        g = d.changeOffset;
                                    l = "Change from ".concat(f - g, " to ").concat(f), p = u, h = a
                                } else e.match("Year") && ("maxYear" === e ? l = "Year of max population" : "averageYear" === e && (l = "Average year of net population gain"), p = o, h = function (e) {
                                    var t = e.i,
                                        r = e.genLength,
                                        n = e.generatedLabels;
                                    if (0 === t) return n[t].replace("NaN to", "Before ");
                                    if (t === r - 1) {
                                        var i = n[r - 1].replace(" to NaN", "");
                                        return "After ".concat(i)
                                    }
                                    return n[t]
                                });
                                var v = this.rendering.currentlyPaintedColors;
                                this.api.labels && this.api.labels.legendTitle && (l = this.api.labels.legendTitle);
                                var m = Object(k.a)().shapePadding(0).scale(this.scales[e]).title(l).titleWidth(250).labels(h).labelFormat(p).cellFilter(function (r) {
                                    return v.has(r.data) || v.has(t.scales[e](r.data))
                                });
                                i.select(".legendipso").call(m);
                                var y = i.select("g.legendipso").node().getBBox();
                                i.selectAll("g.legendbox").selectAll("rect").attr("x", y.x - 20).attr("y", y.y - 20).attr("rx", 40 / 3).attr("ry", 40 / 3).attr("width", y.width + 40).attr("height", y.height + 40)
                            }
                        }
                    }, {
                        key: "idsToFeatureset",
                        value: function (e, t) {
                            if (void 0 !== e && void 0 !== t) return {
                                type: "FeatureCollection",
                                features: this.cartography.features[e].filter(function (e) {
                                    return t.indexOf(e.ID) > -1 || t.indexOf(e.label) > -1
                                })
                            }
                        }
                    }, {
                        key: "zoomToFeatures",
                        value: function (e, t, r) {
                            var n = this.idsToFeatureset(e, t);
                            n.features.length > 0 ? this.zoomTo(n, r) : Le("yikes, no matches for ids: ", t)
                        }
                    }, {
                        key: "zoomTween",
                        value: function (e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = this.height,
                                i = this.width;
                            t = void 0 === r ? this.rendering.svg.node().__zoom : this._zoom_for_features(this.idsToFeatureset(r.name, r.ids));
                            var a = this._zoom_for_features(this.idsToFeatureset(e.name, e.ids)),
                                o = Object(S.e)([i, n]),
                                s = [i / 2, n / 2],
                                c = Object(m.interpolateZoom)(t.invert(s).concat(o / t.k), a.invert(s).concat(o / a.k));
                            return function (e) {
                                var t = c(e),
                                    r = o / t[2];
                                return {
                                    scale: r,
                                    translate: [s[0] - t[0] * r, s[1] - t[1] * r]
                                }
                            }
                        }
                    }, {
                        key: "_zoom_for_features",
                        value: function (e) {
                            0 === e.features.length && Le("WARNING: NO FEATURES FOUND");
                            var t, r, n, i = this.width,
                                a = this.height;
                            if (e.features.length > 1 || "Point" !== e.features[0].geometry.type) {
                                var o = Object(b.u)().fitExtent([
                                    [30, 30],
                                    [i - 30, a - 30]
                                ], e);
                                n = o.scale();
                                var s = Te(o.translate(), 2);
                                t = s[0], r = s[1]
                            } else {
                                var c = Te(Be(e.features[0]), 2);
                                t = -50 * (t = c[0]) + i / 2, r = -50 * (r = c[1]) + a / 2, n = 50
                            }
                            return w.b.translate(t, r).scale(n)
                        }
                    }, {
                        key: "zoomTo",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                                r = this.cartography.zoomBehavior,
                                n = this._zoom_for_features(e),
                                i = t;
                            this.rendering.svg.transition().duration(i).call(r.transform, n), this.rendering.timer.drawFor(Object(S.e)([this.api.duration, i, 500]))
                        }
                    }, {
                        key: "createBackgroundMap",
                        value: function () {
                            var t = this.width,
                                r = this.height;
                            if (void 0 === this.children && (this.children = {}), this.children.background) return this.children.background;
                            var n = new e(this.selector, t, r, void 0, "background");
                            return this.children.background = n, n.parent = this, n.initializeRendering(), n.cartography = this.cartography, n._initializePaths(), n.rendering.canvas.style("z-index", -1), n
                        }
                    }, {
                        key: "drawLookupCanvas",
                        value: function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = this.width,
                                i = this.height,
                                a = this.api,
                                o = "lookupMap";
                            r && (o = "lookupMap".concat(r));
                            var s = void 0 === this[o];
                            s && (this[o] = new e(this.selector, n, i, void 0, o), void 0 === this.children && (this.children = {}), this.children[o] = this[o]);
                            var c = this[o];
                            if (s && (c.parent = this, c.initializeRendering(), c.cartography = this.cartography, c._initializePaths(), c.rendering.canvas.style("display", "none")), c.api = JSON.parse(JSON.stringify(this.api)), c.api.duration = 0, c.api.animate = void 0, r ? (c.api.drawing = [r], c.api.getters.fill[r] = "identity", c.api.scales.fill[r] = "identityColors") : (c.api.drawing = this.api.drawing.filter(function (e) {
                                    return !(["StateLines", "ExternalLines", "CountyLines"].indexOf(e) > -1 || "none" === a.rendering.fillStyle[e] && !a.scales.fill[e] || "Smooth" === e)
                                }), Object(l.a)(c.getters.fill).forEach(function (e) {
                                    c.getters.fill[e] = "identity", c.scales.fill[e] = "identityColors"
                                })), s || t !== c.rendering.hash) {
                                c.domifyAll(), r && c.domify(r), c.drawMap(t), c.lookup = {};
                                var u = c.lookup;
                                u.rawColor = c.rendering.context.getImageData(0, 0, n, i), u.colorIndex = new Uint32Array(u.rawColor.data.buffer)
                            }
                            this[o] = c
                        }
                    }, {
                        key: "featureAtPoint",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = "lookupMap".concat(t);
                            this[r] && this[r].rendering.hash === this.rendering.hash || this.drawLookupCanvas(this.rendering.hash, t);
                            var n = this[r].width,
                                i = this[r].lookup.colorIndex,
                                a = e;
                            Array.isArray(e) && (a = Math.floor(e[0]) + Math.floor(n * e[1]));
                            var o = [-1, -n, 1, n, -n - 1, 1 - n, n - 1, n + 1];
                            return function (e) {
                                var t = i[e];
                                if (0 !== t) {
                                    var r = We[t];
                                    return r || Object(S.j)(1, 3).forEach(function (t) {
                                        r || o.forEach(function (n) {
                                            if (!r) {
                                                var a = i[e + t * n];
                                                r = We[a]
                                            }
                                        })
                                    }), r
                                }
                            }(a)
                        }
                    }, {
                        key: "doSmoothing",
                        value: function () {
                            var e = this,
                                t = this.api.smoothing,
                                r = t.domain,
                                n = t.radius,
                                i = t.method,
                                a = this.api.smoothing.layer;
                            r = r || [0, 256], n = n || 9, i = i || "gaussian";
                            var o = this.width,
                                s = this.height,
                                c = this.getters,
                                u = this.api;
                            this.drawLookupCanvas(this.rendering.hash, a);
                            var l, p = c[u.getters.fill[a]];
                            if (this.rendering.context.fillStyle = "none", this.rendering.context.strokeStyle = "none", this.rendering.context.fill(), this.rendering.context.stroke(), "gaussian" === i) {
                                for (var h = Object(y.c)().range([0, 65535]).domain(r).clamp(!0), d = new Uint16Array(new ArrayBuffer(2 * o * s)), f = new Uint8Array(new ArrayBuffer(2 * o * s)), g = 0; g < d.length; g += 1) {
                                    var v = this.featureAtPoint(g, a);
                                    if (v) {
                                        f[g] = 1;
                                        var m = h(p(v, u));
                                        d[g] = m
                                    }
                                }
                                N()(d, o, s, n), l = d.map(function (e, t) {
                                    return h.invert(e * f[t])
                                })
                            } else if ("pycno" === i) {
                                var b;
                                if (this.pycno) b = this.pycno;
                                else {
                                    var j = [],
                                        O = {};
                                    Object(S.j)(o * s).forEach(function (t) {
                                        var r = e.featureAtPoint(t, a);
                                        r && (j[t] = r.ID, O[r.ID] || (O[r.ID] = []), O[r.ID].push(t))
                                    }), b = new Y(o, s, j, O), this.pycno = b, b.buildNeighborlist()
                                }
                                var w = {};
                                b.pointPopulations = Object(S.j)(o * s).map(function (t) {
                                        var r = e.featureAtPoint(t);
                                        if (r) return w[r.ID] || (w[r.ID] = c.fill[a](r, e.api)), w[r.ID]
                                    }),
                                    function t() {
                                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
                                        0 !== r && (b.interpolateOnce(), l = b.pointPopulations, e.drawNewContours(l, a), setTimeout(function () {
                                            t(r - 1)
                                        }, 1e3))
                                    }(50)
                            }
                            this.buildContours(l, a)
                        }
                    }, {
                        key: "buildContours",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ModernCounties",
                                r = this.cartography,
                                n = this.width,
                                i = this.height,
                                a = this.scales[this.api.scales.fill[t]],
                                o = Object(u.b)().size([n, i]).thresholds(a.domain())(e);
                            r.features.Smooth = o.map(function (e, n) {
                                return e.coordinates = e.coordinates.map(function (e) {
                                    return e.map(function (e) {
                                        return e.map(function (e) {
                                            return r.invert(e)
                                        })
                                    })
                                }), {
                                    type: "Feature",
                                    geometry: e,
                                    properties: {
                                        value: e.value,
                                        id: n,
                                        source: "Smoothed".concat(t)
                                    },
                                    ID: n
                                }
                            })
                        }
                    }, {
                        key: "promiseTownshipClaims",
                        value: function () {
                            var e = this;
                            return d.b("/data/point_claims.geojson").then(function (t) {
                                t.features.forEach(function (t) {
                                    t.geometry.coordinates = e.cartography.convertProjection(t.geometry.coordinates), t.ID = t.properties.PLSSID
                                }), e.cartography.features.TownshipClaims = t.features
                            })
                        }
                    }, {
                        key: "promiseClippedHistorical",
                        value: function () {
                            var e = this.cartography.features;
                            return this.promiseResource("HistoricCounties").then(function () {
                                return d.b("/data/ClippedHistorical.json")
                            }).then(function (t) {
                                var r = {};
                                e.HistoricCounties.forEach(function (e) {
                                    r[e.properties.ID_NUM] = e
                                }), e.ClippedHistorical = [], [1870, 1880, 1890, 1900].forEach(function (n) {
                                    Object(f.a)(t, t.objects["Historic_clipped_".concat(n)]).features.forEach(function (t) {
                                        var i = r[t.properties.ID_NUM];
                                        t.properties.data = i.properties.data, t.label = i.label, t.ID = i.ID, t.properties.sourceSet = "ClippedHistorical", t.properties.y = n, t.properties.years = i.properties.years;
                                        var a;
                                        a = qe(t.geometry) / qe(i.geometry), t.properties.areaRatio = a, t.properties.AREA_SQMI *= a, e.ClippedHistorical.push(t)
                                    })
                                })
                            })
                        }
                    }, {
                        key: "promiseResource",
                        value: function (e) {
                            var t = {
                                    States: "BaseMap",
                                    CountyLines: "BaseMap",
                                    ExternalLines: "BaseMap",
                                    ModernCounties: "SchroederPops",
                                    StateLines: "BaseMap",
                                    CensusCurves: "BaseMap"
                                } [e] || e,
                                r = Te(t.split("/"), 2),
                                n = r[0],
                                i = r[1];
                            return this.promises[t] || (this["promise".concat(n)] ? this.promises[t] = this["promise".concat(n)](i) : this.promises[t] = this.promiseGeneric(n, i)), this.promises[t]
                        }
                    }, {
                        key: "clearLayer",
                        value: function (e) {
                            var t = this;
                            Object(l.a)(this.promises).forEach(function (r) {
                                (r === e || r.startsWith("".concat(e, "/"))) && delete t.promises[r]
                            }), this.cartography.features[e] = void 0
                        }
                    }, {
                        key: "promiseglobe",
                        value: function () {
                            var e = this.cartography,
                                t = e.features,
                                r = e.convertProjection;
                            return t.globe = [{
                                type: "Feature",
                                geometry: Object(j.g)({
                                    type: "Sphere"
                                }, r),
                                ID: "GLOOOBE",
                                properties: {
                                    sourceSet: "globe"
                                }
                            }], Promise.resolve(1)
                        }
                    }, {
                        key: "promiseContinents",
                        value: function () {
                            var e = this.cartography,
                                t = e.features,
                                r = e.convertProjection;
                            return d.b("/data/maury/continents.json").then(function (e) {
                                t.Continents = e.features.map(function (e) {
                                    return Object(j.g)(e, r)
                                }), t.Continents.forEach(function (e, t) {
                                    e.ID = "continent".concat(t), e.properties.sourceSet = "Continents"
                                })
                            })
                        }
                    }, {
                        key: "promiseWhales",
                        value: function () {
                            var e = this;
                            return d.c("/data/whalinghistory_org/mauryEncounters.txt", function (t) {
                                var r = e.cartography.convertProjection([+t.Lon, +t.Lat]);
                                delete r.Lon, delete r.Lat;
                                var n = new Date;
                                return n.setFullYear(+t.Year, +t.Month, +t.Day), t.year = function (e) {
                                    var t = new Date;
                                    t.setUTCFullYear(e.getFullYear(), 1, 1);
                                    var r = new Date;
                                    r.setUTCFullYear(e.getFullYear() + 1, 1, 1);
                                    var n = (e - t) / (r - t);
                                    return e.getFullYear() + n
                                }(n), t.sourceSet = "Whales", {
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: r
                                    },
                                    ID: t.sequence,
                                    properties: t
                                }
                            }).then(function (t) {
                                e.cartography.features.Whales = t
                            })
                        }
                    }, {
                        key: "promiseGeneric",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Maury",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "miniwhaling",
                                r = this.cartography,
                                n = r.features,
                                i = r.convertProjection;
                            return ze.postMessage({
                                layer: e,
                                projname: i.projectionName,
                                fname: t
                            }).then(function (r) {
                                var i;
                                void 0 === n[e] && (n[e] = []), r.forEach(function (r) {
                                    r.properties.sourceSet = e, r.properties.sourceFile = "".concat(e, "-").concat(t)
                                }), (i = n[e]).push.apply(i, De(r))
                            })
                        }
                    }, {
                        key: "promisePostOffices",
                        value: function () {
                            var e = this;
                            return d.a("/data/post_data.csv", function (t) {
                                var r = e.cartography.convertProjection([+t.Longitude, +t.Latitude]);
                                if (r && 2 === r.length) {
                                    var n = [+t.Est, +t.Dis1, +t.Re1, +t.Dis2, +t.Re2, +t.Dis3, +t.Re3, +t.Dis4, +t.Re4];
                                    return n[0] = n[0] || 1776, t.years = n, t.sourceSet = "PostOffices", {
                                        type: "Feature",
                                        geometry: {
                                            type: "Point",
                                            coordinates: r
                                        },
                                        ID: "".concat(t.Name, "-").concat(t.Est),
                                        properties: t
                                    }
                                }
                            }).then(function (t) {
                                e.cartography.features.PostOffices = t
                            })
                        }
                    }, {
                        key: "promiseNative",
                        value: function () {
                            var e = this;
                            return d.b("/data/Native.topojson").then(function (t) {
                                e.cartography.features.Native = Object(f.a)(t, t.objects["-"]).features, e.cartography.features.Native.forEach(function (e) {
                                    if (e.ID = e.properties.TribalCededLandsNewCESSNUM, e.properties.sourceSet = "Native", e.properties.TribalCededLandsTableCessDate1) {
                                        var t = parseInt(e.properties.TribalCededLandsTableCessDate1.slice(0, 4), 10);
                                        e.properties.years = [1776, t]
                                    } else e.properties.years = [1776, 1789]
                                })
                            })
                        }
                    }, {
                        key: "promiseRail",
                        value: function () {
                            var e = this;
                            return d.b("/data/RR_features.topojson").then(function (t) {
                                e.cartography.features.Rail = Object(f.a)(t, t.objects["-"]).features, e.cartography.features.Rail.forEach(function (e, t) {
                                    e.ID = t, e.properties.sourceSet = "Rail", e.label = "".concat(e.properties.RRname, " line in ").concat(e.properties.InOpBy), e.properties.years = [e.properties.InOpBy, 2020]
                                })
                            })
                        }
                    }, {
                        key: "promiseNewspapers",
                        value: function () {
                            var e = this;
                            return d.a("/data/newspapers.csv", function (t) {
                                var r = e.cartography.convertProjection([+t.Longitude, +t.Latitude]);
                                if (r && 2 === r.length) {
                                    "1999" === t.Dis2 && "" === t.Re1 && (t.Dis2 = "");
                                    var n = [+t.Est, +t.Dis1];
                                    return n[0] = n[0] || 1776, t.years = n, t.sourceSet = "Newspapers", {
                                        type: "Feature",
                                        geometry: {
                                            type: "Point",
                                            coordinates: r
                                        },
                                        ID: "".concat(t.Name, "-").concat(t.Est),
                                        properties: t
                                    }
                                }
                            }).then(function (t) {
                                e.cartography.features.Newspapers = t
                            })
                        }
                    }, {
                        key: "ensureFeaturesExist",
                        value: function (e) {
                            var t = this,
                                r = e.map(function (e) {
                                    return t.promiseResource(e)
                                });
                            return Promise.all(r)
                        }
                    }, {
                        key: "promiseCities",
                        value: function () {
                            var e = this,
                                t = ["US State", "Region", "MSA", "CSA"],
                                r = Object(l.d)(["Colorado", "Greater Los Angeles", "Inland Empire", "Ohio", "Louisiana", "Metro Detroit"]);
                            return d.a("/data/city_pops.csv", function (n) {
                                if (!(t.indexOf(n.settlement_type) > -1 || r.has(n.name))) {
                                    var i = e.cartography.convertProjection([+n.longitude, +n.latitude]);
                                    if (i && 2 === i.length) {
                                        if (n.population = {}, n.data = {}, n.data.population = [], Ue.forEach(function (e) {
                                                +n[e] > 0 && n.data.population.push([e, +n[e]]), n.population[e] = +n[e]
                                            }), n.other_years && "NA" !== n.other_years) {
                                            var a = JSON.parse(n.other_years);
                                            n.data.population = n.data.population.concat(a), n.data.population.sort()
                                        }
                                        n.founded && n.data.population.length && +n.founded.slice(4) < n.data.population[0][0] && n.data.population[0][0] - +n.founded.slice(4) < 15 ? (n.data.population.unshift([+n.founded, 50]), n.data.population.sort()) : n.data.population.length && n.data.population.unshift([n.data.population[0][0] - 10, 0]);
                                        try {
                                            n.years = [n.data.population[0][0], n.data.population[n.data.population.length - 1][0]]
                                        } catch (e) {
                                            n.years = [1980, 1970]
                                        }
                                        var o = {};
                                        return n.popSources = [], ["alperin", "cesta", "wiki"].forEach(function (e) {
                                            var t = n["".concat(e, "_pops")].split(",").map(function (e) {
                                                return +e
                                            });
                                            Object(S.e)(t) > 0 && n.popSources.push(e), o[e] = {}, Ue.forEach(function (r, n) {
                                                o[e][r] = t[22 - n]
                                            })
                                        }), n.founded && (n.founded = +n.founded.slice(0, 4)), n.populations = o, n.sourceSet = "Cities", {
                                            type: "Feature",
                                            geometry: {
                                                type: "Point",
                                                coordinates: i
                                            },
                                            ID: n.name,
                                            properties: n
                                        }
                                    }
                                }
                            }).then(function (t) {
                                e.cartography.features.Cities = t, e.prepVariables("Cities", "averageYear")
                            })
                        }
                    }, {
                        key: "promiseSchroederPops",
                        value: function () {
                            var e = this,
                                t = this.cartography.features;
                            return Promise.all([this.promiseResource("BaseMap"), d.a("/data/schroeder_pops.csv")]).then(function (r) {
                                var n = r[1],
                                    i = Object(l.b)(n, function (e) {
                                        return e.GEOID10
                                    });
                                i.set("46102", i.get("46113")), i.set("02158", i.get("02270")), t.ModernCounties.forEach(function (e) {
                                    var t = i.get(e.properties.GEOID);
                                    e.properties.population = {}, e.properties.density = {}, e.properties.data = e.properties.data || {}, e.properties.data.population = [], t && (t.epop2010 = t.pop2010, e.properties.area = 3.86102e-7 * e.properties.ALAND, e.properties.data = e.properties.data || {}, e.properties.data.population = [], e.properties.data.density = [], Ue.forEach(function (r) {
                                        e.properties.population[r] = +t["epop".concat(r)], e.properties.density[r] = e.properties.population[r] / e.properties.area, e.properties.data.population.push([r, +t["epop".concat(r)]]), e.properties.data.density.push([r, +t["epop".concat(r)] / e.properties.area])
                                    }), e.label = "".concat(t.COUNTY, ", ").concat(t.STATE), e.ID = e.properties.GEOID)
                                }), e.prepVariables("ModernCounties", "averageYear")
                            })
                        }
                    }, {
                        key: "promiseCoastline",
                        value: function () {
                            var e = this.cartography.features;
                            return d.b("/data/pretty.json").then(function (t) {
                                e.Coastline = [], Object(l.a)(t.objects).forEach(function (r) {
                                    Object(f.a)(t, t.objects[r]).features.forEach(function (t) {
                                        t.properties.layer = r, t.sourceSet = "pretty", e.Coastline.push(t)
                                    })
                                })
                            })
                        }
                    }, {
                        key: "supplementDataset",
                        value: function (e, t, r) {
                            var n = this;
                            return d.b(e).then(function (e) {
                                n.cartography.features[r].forEach(function (r) {
                                    var n = e[r.properties[t]];
                                    n && (r.properties.data = r.properties.data || {}, Object.assign(r.properties.data, n))
                                })
                            })
                        }
                    }, {
                        key: "promiseCountyClaims",
                        value: function () {
                            return this.supplementDataset("/data/county_data.json", "GEOID", "ModernCounties")
                        }
                    }, {
                        key: "supplementHistoricCounties",
                        value: function (e) {
                            var t = this,
                                r = this.cartography;
                            return void 0 === r.data && (r.data = {}), r.data[e] ? Promise.resolve(1) : d.b("/data/ICPSR/".concat(e, ".json")).then(function (n) {
                                return r.data[e] = n, t.cartography.features.HistoricCounties.forEach(function (t) {
                                    var r = t.properties.ID;
                                    t.properties.data[e] = n[r]
                                }), 1
                            })
                        }
                    }, {
                        key: "promiseHistoricCounties",
                        value: function () {
                            var e = this,
                                t = this.cartography.features;

                            function r(e) {
                                var t = Te(e.split("/").map(function (e) {
                                        return +e
                                    }), 3),
                                    r = t[0],
                                    n = t[1],
                                    i = t[2],
                                    a = new Date(r, 0, 1);
                                return r + (new Date(r, n - 1, i) - a) / (new Date(r + 1, 0, 1) - a)
                            }
                            return d.b("/data/HistoricalCounties.json").then(function (e) {
                                window.foo = e, t.HistoricCounties = Object(f.a)(e, e.objects.US_HistCounties_Gen01).features, t.HistoricCounties.forEach(function (e) {
                                    e.label = "".concat(function (e) {
                                        return e.toLowerCase().split(" ").map(function (e) {
                                            return e.replace(e[0], e[0].toUpperCase())
                                        }).join(" ")
                                    }(e.properties.NAME), ", ").concat(e.properties.STATE_TERR), e.ID = e.properties.ID_NUM, e.properties.years = [r(e.properties.START_DATE), r(e.properties.END_DATE)], e.properties.sourceSet = "HistoricCounties", e.properties.data = {}
                                })
                            }).then(function () {
                                e.supplementHistoricCounties("population")
                            })
                        }
                    }, {
                        key: "promiseSmooth",
                        value: function (e) {
                            return e ? (this.api.smoothing = this.api.smoothing || {}, this.cartography.features.Smooth = [], this.api.smoothing.layer = e, Le("Promising to smooth ".concat(e)), this.promiseResource(e)) : Promise.resolve(null)
                        }
                    }, {
                        key: "promisePLSSState",
                        value: function (e) {
                            var t = this,
                                r = {
                                    AK: "02",
                                    AL: "01",
                                    AR: "05",
                                    AS: "60",
                                    AZ: "04",
                                    CA: "06",
                                    CO: "08",
                                    CT: "09",
                                    DC: "11",
                                    DE: "10",
                                    FL: "12",
                                    GA: "13",
                                    GU: "66",
                                    HI: "15",
                                    IA: "19",
                                    ID: "16",
                                    IL: "17",
                                    IN: "18",
                                    KS: "20",
                                    KY: "21",
                                    LA: "22",
                                    MA: "25",
                                    MD: "24",
                                    ME: "23",
                                    MI: "26",
                                    MN: "27",
                                    MO: "29",
                                    MS: "28",
                                    MT: "30",
                                    NC: "37",
                                    ND: "38",
                                    NE: "31",
                                    NH: "33",
                                    NJ: "34",
                                    NM: "35",
                                    NV: "32",
                                    NY: "36",
                                    OH: "39",
                                    OK: "40",
                                    OR: "41",
                                    PA: "42",
                                    PR: "72",
                                    RI: "44",
                                    SC: "45",
                                    SD: "46",
                                    TN: "47",
                                    TX: "48",
                                    UT: "49",
                                    VA: "51",
                                    VI: "78",
                                    VT: "50",
                                    WA: "53",
                                    WI: "55",
                                    WV: "54",
                                    WY: "56"
                                };
                            return this.promiseResource("ModernCounties").then(function () {
                                var n = t.cartography.features.ModernCounties.filter(function (t) {
                                    return t.properties.STATEFP === r[e]
                                }).map(function (e) {
                                    return e.properties.GEOID
                                }).map(function (e) {
                                    return t.promisePLSS(e)
                                });
                                return Promise.all(n)
                            })
                        }
                    }, {
                        key: "promisePLSS",
                        value: function (e) {
                            var t = this.cartography.features;
                            return t.PLSS || (t.PLSS = []), void 0 === e ? Promise.resolve(void 0) : e.match(/^[A-Z][A-Z]$/) ? this.promisePLSSState(e) : d.b("data/".concat(e, ".topojson")).catch(function () {
                                return Le("No JSON loaded for ".concat(e)), null
                            }).then(function (r) {
                                if (null === r) return null;
                                var n = Object(f.a)(r, r.objects["-"]).features;
                                return n ? (n.forEach(function (t) {
                                    t.ID = "".concat(t.properties.accession_nr, "-").concat(e), t.properties.meta_class = t.properties.meta_class.replace(/\/.*/, ""), t.properties.meta_class = {
                                        "Homestead-like acts": "Homestead acts",
                                        "Homestead-like acts w": "Homestead acts",
                                        "Misc Transactions": "Other",
                                        "College Land Grants": "State and college grants",
                                        "State grants": "State and college grants",
                                        "Mineral grants": "Other",
                                        "Spanish or Mexican Grants before 1848": "Spanish or Mexican Grants"
                                    } [t.properties.meta_class] || t.properties.meta_class, t.properties.sourceSet = "PLSS", t.properties.sourceFile = "PLSS/".concat(e)
                                }), t.PLSS = t.PLSS.concat(n), t.PLSS) : void 0
                            })
                        }
                    }, {
                        key: "promiseBaseMap",
                        value: function () {
                            var e = this,
                                t = this.cartography.features;
                            return d.b("/data/map.json").then(function (r) {
                                window.gah = r, t.ExternalLines = [{
                                    type: "Feature",
                                    geometry: Object(g.a)(r, r.objects.cb_2016_us_state_500k, function (e, t) {
                                        return e === t
                                    })
                                }], t.StateLines = [{
                                    type: "Feature",
                                    geometry: Object(g.a)(r, r.objects.cb_2016_us_state_500k, function (e, t) {
                                        return e !== t
                                    })
                                }], t.CountyLines = [{
                                    type: "Feature",
                                    geometry: Object(g.a)(r, r.objects.cb_2016_us_county_500k, function (e, t) {
                                        return e !== t && e.properties.STATEFP === t.properties.STATEFP
                                    })
                                }], t.ModernCounties = Object(f.a)(r, r.objects.cb_2016_us_county_500k).features, t.ModernCounties.forEach(function (e) {
                                    e.ID = e.properties.AFFGEOID, e.properties.sourceSet = "ModernCounties"
                                }), t.CensusCurves = Object(f.a)(r, r.objects.Clipped_including_1900).features, t.States = Object(f.a)(r, r.objects.cb_2016_us_state_500k).features.map(function (e) {
                                    return e.ID = e.properties.STUSPS, e.properties.sourceSet = "States", e
                                }), e.prepVariables("ModernCounties", "centroid")
                            })
                        }
                    }, {
                        key: "downloadFeature",
                        value: function (e) {
                            var t = this,
                                r = this.cartography.convertProjection.invert;
                            this.promiseResource(e).then(function () {
                                var n = function e(t, r) {
                                        var n = {};
                                        return Object(l.a)(t).forEach(function (i) {
                                            n[i] = "coordinates" === i ? function e(t, r) {
                                                return t === [] || t === [
                                                    []
                                                ] ? t : "number" == typeof t[0][0] ? t.map(r) : t.map(function (t) {
                                                    return e(t, r)
                                                })
                                            }(t[i], r) : "geometry" === i ? e(t[i], r) : "features" === i ? t[i].map(function (t) {
                                                return e(t, r)
                                            }) : t[i]
                                        }), n
                                    }({
                                        type: "FeatureCollection",
                                        features: t.cartography.features[e]
                                    }, r),
                                    i = JSON.stringify(n),
                                    a = new Blob([i], {
                                        type: "text/plain;charset=utf-8"
                                    });
                                L.a.saveAs(a, "".concat(e, ".geojson"))
                            })
                        }
                    }, {
                        key: "setProjection",
                        value: function (e, t) {
                            var r = this;
                            if (this.cartography.convertProjection && e === this.cartography.convertProjection.projectionName) return Promise.resolve(1);
                            if (this.cartography.convertProjection && void 0 === e) return Promise.resolve(1);
                            if (!_e[e]) throw "".concat(e, " not a valid projection name\n") + "Supported projections are: ".concat(",".join(Object(l.a)(_e)));
                            var n = t || _e[e].bbox;
                            return this.cartography.convertProjection = _e[e].projection, this.cartography.convertProjection.projectionName = e, Object(l.a)(this.cartography.features).forEach(function (e) {
                                r.promises[e] = void 0, r.cartography.features[e] = void 0
                            }), this.ensureFeaturesExist(this.api.drawing).then(function () {
                                return r.ensureFeaturesExist([n, "globe"])
                            }).then(function () {
                                return r.initializeProjections(n), 1
                            })
                        }
                    }, {
                        key: "clip_to_frontier",
                        value: function () {
                            var e = this,
                                t = this.getters.extant;
                            this.rendering.context.beginPath();
                            var r = Te(this.cartography.features.CensusCurves.filter(function (r) {
                                return t(r, e.api)
                            }), 1)[0];
                            this.rendering.path(r), this.rendering.context.clip()
                        }
                    }, {
                        key: "clip_to_globe",
                        value: function () {
                            this.rendering.context.beginPath(), this.rendering.path(this.cartography.features.globe[0]), this.rendering.context.clip()
                        }
                    }, {
                        key: "initializeProjections",
                        value: function (e) {
                            var t = this.height,
                                r = this.width,
                                n = this.cartography,
                                i = n.features,
                                a = n.zoom,
                                o = {
                                    type: "FeatureCollection",
                                    features: i[e]
                                },
                                s = Object(b.u)().fitSize([r, t], o),
                                c = s.translate();
                            a.translate = c;
                            var u = s.scale();
                            a.scale = u, a.baseScale = u, this.cartography.zoomBehavior.scaleExtent([4 * u / 5, 250 * u]), this._initializePaths()
                        }
                    }, {
                        key: "_initializePaths",
                        value: function () {
                            var e = this.rendering;
                            e.path = Object(b.z)().context(e.context), e.svgPath = Object(b.z)().projection(this.cartography.projection), this.updateInternalZoomStates()
                        }
                    }, {
                        key: "drawMap",
                        value: function (e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.rendering.hash = e || Math.random().toString(36), this.api.drawing.indexOf("Smooth") > -1 && !this.parent && !r && (Le("Smoothing"), this.doSmoothing(), this.domify("Smooth", this.api)), this.paintMap(), this.parent || (Object(l.a)(this.api.scales.fill).forEach(function (e) {
                                var r = t.api.scales.fill[e];
                                r && t.api.drawing.indexOf(e) > -1 && t.drawLegend(r)
                            }), this.updateAnnotations()), this.drawAllTiles()
                        }
                    }, {
                        key: "paintText",
                        value: function (e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 38,
                                i = this.rendering.context,
                                a = this.cartography,
                                o = a.invert,
                                s = a.zoom,
                                c = Te(o([10, n + 10]), 2),
                                u = c[0],
                                l = c[1];
                            i.font = "".concat(n / s.scale, "px Arial"), i.fillStyle = "black", i.fillText(e, u, l)
                        }
                    }, {
                        key: "paintMap",
                        value: function () {
                            var e = this,
                                t = this.rendering.context;
                            if (this.rendering.currentlyPaintedColors = Object(l.d)([]), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), this.api.rendering.fillStyle.background ? (t.fillStyle = this.api.rendering.fillStyle.background, t.fillRect(0, 0, t.canvas.width, t.canvas.height)) : t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.restore(), 0 !== this.api.drawing.length) {
                                this.rendering.context.save(), "albersUSA" !== this.cartography.convertProjection.projectionName && this.clip_to_globe(), this.rendering.context.beginPath();
                                var r = Object(l.d)([]);
                                this.api.rendering.tiles = [], this.api.drawing.forEach(function (t) {
                                    var n = Te(t.split("/"), 1)[0];
                                    if (!r.has(n) && !$e[n]) {
                                        try {
                                            e.drawLayer(n)
                                        } catch (t) {
                                            var i = "Error in drawing layer ".concat(n);
                                            throw e.parent && (i += " in lookup map"), Le(i), t
                                        }
                                        r.add(n)
                                    }
                                }), this.rendering.context.restore()
                            }
                        }
                    }, {
                        key: "customizeColorBreaks",
                        value: function (e) {
                            var t = this.api,
                                r = this.scales,
                                n = this.getters,
                                i = this.cartography.features[e].map(n[t.getters.fill[e]]),
                                a = x()().domain(i).range(Object(S.j)(0, 1.01, 1 / 6).map(function (e) {
                                    return Object(v.interpolatePlasma)(e)
                                }));
                            a.quantiles = a.clusters;
                            var o = a.clusters().join("-");
                            r[o] = a, t.scales.fill[e] = o
                        }
                    }, {
                        key: "drawSmooth",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.rendering,
                                r = t.context,
                                n = t.path,
                                i = this.cartography.features;
                            if (i.Smooth.forEach(function (e) {
                                    r.lineWidth = 2, r.strokeStyle = "rgba(10, 200, 30, .5)", r.fillStyle = "rgba(10, 200, 30, .01)", r.beginPath(), n(e), r.closePath(), r.stroke(), r.fill()
                                }), e) {
                                var a = this.rendering.svg.selectAll("path").data(i.Smooth);
                                a.enter().append("path").attr("d", this.rendering.svgPath).style("stroke", "black").style("stroke-opacity", .2).style("stroke-width", 0).style("fill", "white").style("fill-opacity", 0).merge(a).style("stroke-width", 3)
                            }
                        }
                    }, {
                        key: "domifyAll",
                        value: function () {
                            var e = this;
                            Object(l.a)(this.cartography.features).forEach(function (t) {
                                e.domify(t, e.api)
                            })
                        }
                    }, {
                        key: "domify",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Cities",
                                r = ((arguments.length > 1 ? arguments[1] : void 0) || this.api).duration,
                                n = this.api,
                                i = this.cartography.features,
                                a = this.getters[this.api.filters[t]] || Ge,
                                o = this.rendering.fauxDOM;
                            o[t] || (o[t] = {}), o[t].needsPlotting && o[t].needsPlotting.length !== i[t].length && (Le("Resetting ", t), o[t] = {});
                            var s = o[t],
                                c = -1 !== n.drawing.indexOf(t) && [n.year, Object(l.a)(n.scales).map(function (e) {
                                    return n.scales[e][t]
                                }), Object(l.a)(n.getters).map(function (e) {
                                    return n.getters[e][t]
                                }), n.filters[t]];
                            !1 !== c && JSON.stringify(c) !== JSON.stringify(s.state) && (s.state = c, s.plotting ? s.lastTime = s.plotting.map(function (e) {
                                return e
                            }) : (s.state = "enter", s.lastTime = new Array(i[t].length).fill(!1)), s.plotting = this.cartography.features[t].map(function (t) {
                                return a(t, e.api)
                            }), s.needsPlotting = s.plotting.map(function (e, t) {
                                return e || s.lastTime[t]
                            }), ["fill", "size", "x", "y"].forEach(function (i) {
                                n.scales[i][t] ? (e.updateAes(i, t, r), s[i].state = "update") : s[i] && delete s[i]
                            }))
                        }
                    }, {
                        key: "updateAes",
                        value: function (e, t, r) {
                            var n = this,
                                i = this.getters,
                                a = this.scales,
                                s = this.api,
                                c = this.rendering.fauxDOM,
                                u = c[t],
                                l = this.cartography.features[t];
                            c[t][e] || (c[t][e] = {});
                            var p = c[t][e];
                            p.timer = p.timer || Object(O.d)(function () {});
                            var h = {
                                    size: function () {
                                        return 0
                                    },
                                    fill: function () {
                                        return "rgba(0,0,0,0)"
                                    },
                                    x: function (e) {
                                        return Be(e)[0]
                                    },
                                    y: function (e) {
                                        return Be(e)[1]
                                    }
                                },
                                d = l.map(h[e]),
                                f = i[s.getters[e][t]],
                                g = a[s.scales[e][t]];
                            p.goals = d.map(function (e) {
                                return e
                            }), p.vals ? p.lastTime = p.vals.map(function (e) {
                                return e
                            }) : (p.lastTime = d.map(function (e) {
                                return e
                            }), p.vals = d.map(function (e) {
                                return e
                            })), u.plotting.forEach(function (e, t) {
                                p.goals[t] = e && void 0 !== g ? g(f(l[t], n.api, n.getters)) : d[t]
                            });
                            var v = ["size", "x", "y"].indexOf(e) > -1,
                                m = ["fill"].indexOf(e) > -1;

                            function y(e) {
                                var t = (e + Number.MIN_VALUE) / r;
                                (t = Object(o.a)(t)) >= 1 && (p.timer.stop(), t = 1), u.needsPlotting.forEach(function (e, r) {
                                    var n = 213412341 * r % 131 / 131;
                                    v && (p.vals[r] = p.lastTime[r] * (1 - t) + p.goals[r] * t), m && (1 === t || t >= n || !u.lastTime[r]) && (p.vals[r] = p.goals[r])
                                })
                            }
                            0 === r ? y(1 / 0) : (y(0), p.timer.restart(y))
                        }
                    }, {
                        key: "flush",
                        value: function () {
                            this.animateStop()
                        }
                    }, {
                        key: "buildAnimationSlider",
                        value: function (e) {
                            var t = this.animateStop,
                                r = this.animateAt,
                                n = Object(I.a)().min(0).max(1).width(400).tickFormat(Object(c.a)("d")).on("onchange", function (e) {
                                    t(), r(e)
                                }).default(0),
                                i = e.selectAll("g.slider").data([1]),
                                a = i.enter().append("g").merge(i).classed("slider", !0).attr("transform", "translate(15,5)");
                            a.call(n), a.selectAll("line.track-overlay").attr("stroke", "black").attr("opacity", 0)
                        }
                    }, {
                        key: "buildTimeSlider",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                i = arguments.length > 3 ? arguments[3] : void 0,
                                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 400,
                                o = Object(s.g)(t),
                                u = "M11,10 L17,10    17,26    11,26 M20,10    L26,10 26,26 20,26";
                            void 0 === t && (o = this.rendering.svg);
                            var l = Object(I.a)().min(+n).max(+i).width(a).tickFormat(function (e) {
                                    return Object(c.a)("d")(Math.floor(e))
                                }).on("onchange", function (t) {
                                    var n = {
                                        duration: 0,
                                        zoom: "undefined"
                                    };
                                    n[r] = t, e.plotAPI(n)
                                }).default(this.api[r]),
                                p = o.selectAll("g.slider").data([1]),
                                h = p.enter().append("g").merge(p).classed("slider", !0).attr("transform", "translate(55,5)"),
                                d = o.selectAll("g.playPause").data([1]).enter().append("g").attr("class", "playPause"),
                                f = d.append("g").attr("transform", "scale(1.5) translate(-10, -10)").append("path").classed("playing", !0).attr("d", u);
                            d.append("rect").attr("width", 40).attr("height", 40).attr("transform", "translate(-10, -10)").style("opacity", 0).on("click", function () {
                                if (f.classed("playing")) f.classed("playing", !1), e.animatePause(), f.transition().duration(500).attr("d", "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28");
                                else {
                                    if (f.classed("playing", !0), e.rendering.animation.running) e.animateResume();
                                    else {
                                        var t = l.value(),
                                            a = 3e4,
                                            o = {
                                                animate: [{
                                                    key: r,
                                                    value: +i,
                                                    duration: a = a * (+i - t) / (+i - n)
                                                }]
                                            };
                                        o[r] = t, e.plotAPI(o)
                                    }
                                    f.transition().duration(500).attr("d", u)
                                }
                            }), this.rendering.sliders[r] = this.rendering.sliders[r] || [], this.rendering.sliders[r].push(l), h.call(l), h.selectAll("line.track-overlay").attr("stroke", "black").attr("opacity", 0)
                        }
                    }, {
                        key: "promiseoriginal1870",
                        value: function () {}
                    }, {
                        key: "promiseprogress1870",
                        value: function () {}
                    }, {
                        key: "promiseprogress1890",
                        value: function () {}
                    }, {
                        key: "promiseprogress1900",
                        value: function () {}
                    }, {
                        key: "promisene",
                        value: function () {}
                    }, {
                        key: "promisebohrod",
                        value: function () {}
                    }, {
                        key: "prepVariables",
                        value: function (e, t) {
                            var r = this,
                                n = this.cartography;
                            if (void 0 === n.features[e][0].properties[t] && ("averageYear" === t && n.features[e].forEach(function (e) {
                                    return r.getters.averageYear(e)
                                }), "centroid" === t && n.features[e].forEach(function (e) {
                                    var t = He(e);
                                    e.properties.centroid = [t.x, t.y, t.r]
                                }), void 0 === n.features[e][0].properties[t])) throw new Error("could not create ".concat(t, " for ").concat(e))
                        }
                    }, {
                        key: "drawLayer",
                        value: function (e) {
                            var t = this,
                                r = this.api,
                                n = this.cartography,
                                i = this.rendering,
                                a = i.context,
                                o = i.path,
                                s = i.fauxDOM,
                                c = this.cartography.zoom,
                                u = c.scale,
                                l = c.baseScale,
                                p = n.features[e];
                            if (void 0 !== p)
                                if (0 !== p.length) {
                                    var h, d = "globe" === e ? "Polygon" : n.features[e][0].geometry.type;
                                    h = "Point" === d ? "Point" : "MultiLineString" === d || "LineString" === d ? "Line" : "Polygon", a.lineWidth = r.rendering.lineWidth[e] / u || 1 / u, this.parent && a.lineWidth < 3 / u && (a.lineWidth = 3 / u), a.strokeStyle = r.rendering.strokeStyle[e] || "rgba(0,0,255,.2)";
                                    var f = r.rendering.fillStyle[e] || "black";
                                    "Polygon" === h ? f = r.rendering.fillStyle[e] || "rgb(0,0,0,1)" : "Line" === h && (f = r.rendering.fillStyle[e] || "rgb(0,0,0,1)");
                                    for (var g, v, m, y, b = s[e], j = "Nothing at all", O = !0, w = 0; w < p.length; w += 1)
                                        if (b.needsPlotting[w]) {
                                            if (m = p[w], s[e].x ? (g = b.x.vals[w], v = b.y.vals[w]) : (g = void 0, v = void 0), s[e].fill) f = b.fill.vals[w], this.rendering.currentlyPaintedColors.add(f);
                                            else if (!s[e].plotting[w]) continue;
                                            if (f !== j && (O = !0), this.parent && (f = this.scales.identityColors(m)), O && Ze(a, j, !1), s[e].x && "Point" !== h) {
                                                m.properties.centroid = m.properties.centroid || Be(m);
                                                var k = m.properties.centroid;
                                                a.save(), a.translate(-k[0] + g, -k[1] + v)
                                            }
                                            if ("Point" === h) {
                                                var C = s[e].size ? b.size.vals[w] : 1.77;
                                                y = m.geometry.coordinates, g && (y[0] = g, y[1] = v);
                                                var P = C / u * Math.pow(u / l, 1 / 3);
                                                P * u < -1.77 ? (P *= 1.77, a.rect(y[0] - P / 2, y[1] - P / 2, P, P)) : a.arc(y[0], y[1], P, 0, 2 * Math.PI, !0)
                                            } else "Line" === h ? function () {
                                                "none" !== f && (a.strokeStyle = f);
                                                var r = void 0,
                                                    n = !1;
                                                if (t.api.rendering.decay[e]) {
                                                    var i = t.api.rendering.decay[e] / 365.25;
                                                    r = m.segments.filter(function (e) {
                                                        return e.properties.end < t.api.year && e.properties.end >= t.rendering.animation.last_year - i
                                                    }).map(function (e) {
                                                        var r = e;
                                                        return r.properties.alpha = 1 - (t.api.year - e.properties.end) / i, r.ID = m.ID, r
                                                    }).filter(function (e) {
                                                        return e.properties.alpha > 0
                                                    }), t.parent || (n = !0)
                                                } else r = [m];
                                                r.forEach(function (e) {
                                                    a.beginPath(), n && (a.globalAlpha = Object(S.h)([1, Object(S.e)([0, e.properties.alpha])])), o(e.geometry), a.stroke(), n && (a.globalAlpha = 1), a.beginPath()
                                                })
                                            }() : (a.beginPath(), o(m), "none" !== f ? (a.fillStyle = f, a.fill()) : (a.stroke(), a.beginPath()), r.rendering.lineWidth[e] && a.stroke(), s[e].x && "Point" !== h && a.restore());
                                            j = f
                                        }
                                    "none" !== f && a.fill(), a.stroke(), a.beginPath()
                                } else Le("no features for ".concat(e));
                            else {
                                if ($e[e]) return;
                                Le(e, "is undefined")
                            }
                        }
                    }]), e
                }(),
                Je = function (e, t) {
                    for (var r, n = /\$[A-Za-z][A-Za-z0-9_.]+/g; null !== (r = n.exec(e));) e = e.replace(r[0], r[0].replace("$", "disguised_api."));
                    for (var i = /@[A-Za-z][A-Za-z0-9_.]+/g; null !== (r = i.exec(e));) {
                        var a = r[0].replace("@", ""),
                            o = "getters.".concat(a, "(").concat(t, ", disguised_api)");
                        e = e.replace(r, o)
                    }
                    return e
                };

            function Ze(e, t, r) {
                t && (e.fillStyle = t, e.fill()), r && e.stroke(), e.beginPath()
            }

            function Ke(e, t, r) {
                var n = function (e) {
                    return 10 * Math.round(e / 10)
                }(t.year || r.year);
                return e.map(function (e) {
                    var t = $e[e];
                    return void 0 !== t && t.replace("$year", n)
                }).filter(function (e) {
                    return e
                })
            }
            var $e = {
                original1870: "1870_orig",
                progress1870: "$year_70",
                progress1890: "$year_90",
                progress1900: "$year",
                ne: "ne",
                bohrod: "bohrod"
            };

            function qe(e) {
                return "Polygon" == e.type ? Object(M.a)(e.coordinates[0]) : Object(S.l)(e.coordinates.map(function (e) {
                    return Object(M.a)(e[0])
                }))
            }
            var Qe = {
                annotate: function (e, t) {
                    var r = e.properties.sourceSet;
                    t.annotateFeature(e, !0), t.api.annotate || (t.api.annotate = {}), t.api.annotate[r] || (t.api.annotate[r] = []);
                    var n = t.api.annotate[r].indexOf(e.ID);
                    n > -1 ? t.api.annotate[r].splice(n, 1) : t.api.annotate[r].push(e.ID)
                },
                statePlot: function (e, t) {
                    t.clearLayer("Townships");
                    var r = e.start || 1820,
                        n = e.end || 1929,
                        i = e.ID || e.st;
                    t.plotAPI(function (e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }({
                        "zoom.States": i,
                        duration: 2e3,
                        drawing: ["StateLines", "ne", "Townships/".concat(i), "ExternalLines", "Native", "Rail"],
                        "filters.Townships": "d => d.properties && d.properties.data && d.properties.data.all_count > 50 && @claimPercent > 0.1",
                        "getters.fill.Townships": "dominantClaimType",
                        year: r,
                        claimtype: "all",
                        "filters.Rail": "extant",
                        "filters.Native": "extant",
                        "rendering.fillStyle.Native": "rgba(240, 30, 240, .75)",
                        "scales.fill.Townships": "BLM_class",
                        animate: [{
                            key: "year",
                            value: n,
                            delay: 3e3,
                            duration: 3e4
                        }]
                    }, "zoom.States", [i]))
                },
                countyPlot: function (e, t) {
                    t.clearLayer("PLSS");
                    var r = e.properties.data.all_share[2][0],
                        n = e.properties.data.all_share.slice(-3)[0][0];
                    t.plotAPI({
                        drawing: ["StateLines", "PLSS/".concat(e.ID), "ne", "ExternalLines", "StateLines", "CountyLines", "Native", "Rail"],
                        year: r - 1,
                        "filters.Cities": "d => (d.properties.ST == ".concat(e.ID, ")"),
                        "getters.fill.Cities": "undefined",
                        "scales.fill.Cities": "undefined",
                        "getters.fill.PLSS": "d => d.properties.meta_class",
                        "filters.PLSS": "extant",
                        "scales.fill.PLSS": "BLM_class",
                        "zoom.ModernCounties": e.ID,
                        animate: [{
                            key: "year",
                            value: n + 1,
                            delay: 3e3,
                            duration: 3e4
                        }],
                        duration: 2e3
                    })
                }
            }
        },
        65: function (e, t, r) {
            e.exports = function () {
                return new Worker(r.p + "358c69fb96324a0362e7.worker.js")
            }
        }
    }
]);