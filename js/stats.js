google.maps.__gjsload__('stats', function (_) {
    'use strict';
    var i3 = function (a, b, c) {
        var d = [];
        _.Cc(a, function (a, c) {
            d.push(c + b + a)
        });
        return d.join(c)
    };
    var j3 = function (a, b, c, d) {
        var e = {};
        e.host = window.document.location && window.document.location.host || window.location.host;
        e.v = a;
        e.r = Math.round(1 / b);
        c && (e.client = c);
        d && (e.key = d);
        return e
    };
    var rda = function (a) {
        var b = {};
        _.Cc(a, function (a, d) {
            b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
        });
        return i3(b, ":", ",")
    };
    var sda = function () {
        this.j = new _.DB;
        this.O = 0
    };
    var k3 = function (a, b) {
        var c = new window.Image, d = a.O++;
        a.j.set(d, c);
        c.onload = c.onerror = function () {
            c.onload = c.onerror = _.sa;
            a.j.remove(d)
        };
        c.src = b
    };
    var tda = function (a, b, c, d) {
        var e = _.Q.N[23], f = _.Q.N[22];
        this.$ = a;
        this.na = b;
        this.oa = null != e ? e : 500;
        this.S = null != f ? f : 2;
        this.U = c;
        this.T = d;
        this.O = new _.DB;
        this.j = 0;
        this.P = _.Ba();
        l3(this)
    };
    var l3 = function (a) {
        window.setTimeout(function () {
            uda(a);
            l3(a)
        }, Math.min(a.oa * Math.pow(a.S, a.j), 2147483647))
    };
    var m3 = function (a, b, c) {
        a.O.set(b, c)
    };
    var uda = function (a) {
        var b = j3(a.na, a.U, a.T, void 0);
        b.t = a.j + "-" + (_.Ba() - a.P);
        a.O.forEach(function (a, d) {
            var e = a();
            0 < e && (b[d] = Number(e.toFixed(2)) + (_.Sk() ? "" : "-if"))
        });
        a.$.j({ev: "api_snap"}, b);
        ++a.j
    };
    var n3 = function (a, b, c, d, e) {
        this.T = a;
        this.$ = b;
        this.S = c;
        this.O = d;
        this.P = e;
        this.j = new _.DB;
        this.U = _.Ba()
    };
    var o3 = function (a, b) {
        this.S = b;
        this.P = a + "/maps/gen_204";
        this.O = new sda
    };
    var p3 = function () {
        this.N = new _.DB
    };
    var vda = function (a) {
        var b = 0, c = 0;
        a.N.forEach(function (a) {
            b += a.ar;
            c += a.Bq
        });
        return c ? b / c : 0
    };
    var q3 = function (a, b, c, d, e) {
        this.U = a;
        this.$ = b;
        this.T = c;
        this.P = d;
        this.S = e;
        this.O = {};
        this.j = []
    };
    var r3 = function (a, b, c, d) {
        this.P = a;
        _.G.bind(this.P, "set_at", this, this.S);
        _.G.bind(this.P, "insert_at", this, this.S);
        this.U = b;
        this.$ = c;
        this.T = d;
        this.O = 0;
        this.j = {};
        this.S()
    };
    var s3 = function () {
        this.j = {}
    };
    var wda = function () {
        this.j = [];
        this.O = []
    };
    var t3 = function (a, b, c) {
        this.j = a;
        this.O = b;
        this.P = c
    };
    var xda = function (a, b) {
        a.j.j.push(b);
        var c = a.O, d = _.pb(b), c = c.j;
        d in c || (c[d] = 0);
        ++c[d];
        d = a.j;
        if (d.j.length + d.O.length > a.P) {
            c = a.j;
            d = c.O;
            c = c.j;
            if (!d.length)for (; c.length;)d.push(c.pop());
            (d = d.pop()) && a.O.remove(d)
        }
    };
    var u3 = function (a, b) {
        this.T = new t3(new wda, new s3, 100);
        this.O = null;
        this.ya = [];
        this.S = a;
        _.G.bind(a, "insert_at", this, this.Se);
        _.G.bind(a, "set_at", this, this.Se);
        _.G.bind(a, "remove_at", this, this.Se);
        this.Se();
        this.j = 0;
        this.pa = b;
        this.P = 0
    };
    var v3 = function () {
        this.O = _.Ze(_.Q);
        var a;
        _.Lj() ? (a = _.Re(_.Q).N[11], a = null != a ? a : "") : a = _.Cx;
        this.j = new o3(a, _.ki);
        new r3(_.gi, (0, _.t)(this.j.j, this.j), _.Pf, !!this.O);
        a = _.Ve(_.cf());
        this.U = a.split(".")[1] || a;
        _.ji && (this.P = new tda(this.j, this.U, this.oa, this.O));
        this.$ = {};
        this.T = {};
        this.S = {};
        this.na = {};
        this.oa = _.Ye()
    };
    n3.prototype.na = function (a, b) {
        var c = _.ra(b) ? b : 1;
        this.j.isEmpty() && window.setTimeout((0, _.t)(function () {
            var a = j3(this.$, this.S, this.O, this.P);
            a.t = _.Ba() - this.U;
            var b = this.j;
            _.EB(b);
            for (var c = {}, g = 0; g < b.j.length; g++) {
                var h = b.j[g];
                c[h] = b.pa[h]
            }
            _.BA(a, c);
            this.j.clear();
            this.T.j({ev: "api_maprft"}, a)
        }, this), 500);
        c = this.j.get(a, 0) + c;
        this.j.set(a, c)
    };
    o3.prototype.j = function (a, b) {
        var c = b || {}, d = _.xj().toString(36);
        c.src = "apiv3";
        c.token = this.S;
        c.ts = d.substr(d.length - 6);
        a.cad = rda(c);
        c = i3(a, "=", "&");
        k3(this.O, this.P + "?target=api&" + c)
    };
    o3.prototype.T = function (a) {
        k3(this.O, a)
    };
    p3.prototype.j = function (a, b, c) {
        this.N.set(_.pb(a), {ar: b, Bq: c})
    };
    q3.prototype.na = function (a) {
        this.O[a] || (this.O[a] = !0, this.j.push(a), 2 > this.j.length && _.XA(this, this.oa, 500))
    };
    q3.prototype.oa = function () {
        for (var a = j3(this.$, this.T, this.P, this.S), b = 0, c; c = this.j[b]; ++b)a[c] = "1";
        a.hybrid = +((_.rk() || !_.ok()) && _.ok());
        this.j.length = 0;
        this.U.j({ev: "api_mapft"}, a)
    };
    r3.prototype.S = function () {
        for (var a; a = this.P.removeAt(0);) {
            var b = a.eq;
            a = a.timestamp - this.$;
            ++this.O;
            this.j[b] || (this.j[b] = 0);
            ++this.j[b];
            if (20 <= this.O && !(this.O % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.j[b];
                c.tr = this.O;
                c.te = a;
                c.hc = this.T ? "1" : "0";
                this.U({ev: "api_services"}, c)
            }
        }
    };
    s3.prototype.remove = function (a) {
        a = _.pb(a);
        var b = this.j;
        a in b && (--b[a], b[a] || delete b[a])
    };
    t3.prototype.contains = function (a) {
        return !!this.O.j[_.pb(a)]
    };
    _.w(u3, _.I);
    _.m = u3.prototype;
    _.m.Se = function () {
        _.E(this.ya, _.G.removeListener);
        this.ya.length = 0;
        var a = this.ya, b = (0, _.t)(this.Dg, this);
        this.S.forEach(function (c) {
            a.push(_.G.addListener(c.data, "insert", b))
        });
        b()
    };
    _.m.Dg = function () {
        var a = this.get("bounds");
        if (this.get("projection") && a && this.O) {
            var b = {};
            this.S.forEach((0, _.t)(function (c) {
                c.data.forEach((0, _.t)(function (c) {
                    var d = c.rawData;
                    if (0 == ("" + d.layer).indexOf(this.O.substr(0, 5)) && d.features) {
                        c = d.id.length;
                        for (var e = _.eJ(d.id), d = d.features, k = 0, n; n = d[k]; k++) {
                            var p = n.id, q;
                            a:{
                                q = n;
                                if (!q.latLngCached) {
                                    var r = q.a;
                                    if (!r) {
                                        q = null;
                                        break a
                                    }
                                    var v = new _.L(r[0], r[1]), r = e, v = [v.x, v.y], x = (1 << c) / 8388608;
                                    v[0] /= x;
                                    v[1] /= x;
                                    v[0] += r.ra;
                                    v[1] += r.qa;
                                    v[0] /= 8388608;
                                    v[1] /= 8388608;
                                    r = new _.L(v[0],
                                        v[1]);
                                    v = this.get("projection");
                                    q.latLngCached = v && v.fromPointToLatLng(r)
                                }
                                q = q.latLngCached
                            }
                            q && a.contains(q) && (b[p] = n)
                        }
                    }
                }, this))
            }, this));
            var c = this.T, d;
            for (d in b)c.contains(d) || (++this.j, xda(c, d));
            !this.P && this.j && (this.P = _.XA(this, this.oo, 0))
        } else _.XA(this, this.Dg, 1E3)
    };
    _.m.oo = function () {
        this.P = 0;
        this.j && (_.Al(this.pa, "smni", this.j), this.j = 0)
    };
    _.m.mapType_changed = function () {
        var a = this.get("mapType");
        this.O = a && a.Rf
    };
    _.m.bounds_changed = function () {
        this.Dg()
    };
    _.m = v3.prototype;
    _.m.en = function (a, b) {
        var c = new u3(b, a);
        c.bindTo("mapType", a.__gm);
        c.bindTo("zoom", a);
        c.bindTo("bounds", a);
        c.bindTo("projection", a)
    };
    _.m.Gn = function (a) {
        a = _.pb(a);
        this.$[a] || (this.$[a] = new q3(this.j, this.U, this.oa, this.O));
        return this.$[a]
    };
    _.m.En = function (a) {
        a = _.pb(a);
        this.T[a] || (this.T[a] = new n3(this.j, this.U, 1, this.O));
        return this.T[a]
    };
    _.m.ff = function (a) {
        if (this.P) {
            this.S[a] || (this.S[a] = new _.JC, m3(this.P, a, function () {
                return b.jd()
            }));
            var b = this.S[a];
            return b
        }
    };
    _.m.Dn = function (a) {
        if (this.P) {
            this.na[a] || (this.na[a] = new p3, m3(this.P, a, function () {
                return vda(b)
            }));
            var b = this.na[a];
            return b
        }
    };
    var yda = new v3;
    _.nc("stats", yda);
});
