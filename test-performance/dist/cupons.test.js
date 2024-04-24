(() => {
    "use strict";
    var e = {
            n: t => {
                var r = t && t.__esModule ? () => t.default : () => t;
                return e.d(r, {
                    a: r
                }), r
            },
            d: (t, r) => {
                for (var o in r) e.o(r, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: r[o]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    e.r(t), e.d(t, {
        default: () => l
    });
    const r = require("k6/http");
    var o = e.n(r);
    const a = require("k6");
    class n {
        list(e) {
            let t = o().get("http://lojaebac.ebaconline.art.br/wp-json/wc/v3/products", {
                headers: {
                    Autorization: `Bearer ${e}`
                }
            });
            (0, a.check)(t, {
                "Listagem deve retornar 200": e => e && 201 === e.status
            })
        }
    }

    function l() {
        let e = new n;
        (0, a.group)("List cupons", (() => {
            e.list("YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy")
        }))
    }
    var s = exports;
    for (var u in t) s[u] = t[u];
    t.__esModule && Object.defineProperty(s, "__esModule", {
        value: !0
    })
})();