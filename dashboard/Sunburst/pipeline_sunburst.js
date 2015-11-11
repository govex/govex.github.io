! function() {
    function t(n, e) {
        return n === e ? !0 : n.children ? n.children.some(function(n) {
            return t(n, e)
        }) : !1
    }

    function n(t) {
        if (t.children) {
            var e = t.children.map(n),
                r = d3.hsl(e[0]),
                a = d3.hsl(e[1]);
            return d3.hsl((r.h + a.h) / 2, 1.2 * r.s, r.l / 1.2)
        }
        return t.colour || "#fff"
    }

    function e(t) {
        var n = r(t),
            e = d3.interpolate(d.domain(), [t.x, t.x + t.dx]),
            a = d3.interpolate(u.domain(), [t.y, n]),
            i = d3.interpolate(u.range(), [t.y ? 20 : 0, o]);
        return function(t) {
            return function(n) {
                return d.domain(e(n)), u.domain(a(n)).range(i(n)), x(t)
            }
        }
    }

    function r(t) {
        return t.children ? Math.max.apply(Math, t.children.map(r)) : t.y + t.dy
    }

    function a(t) {
        return .299 * t.r + .587 * t.g + .114 * t.b
    }
    var i = 840,
        l = i,
        o = i / 2,
        d = d3.scale.linear().range([0, 2 * Math.PI]),
        u = d3.scale.pow().exponent(1.3).domain([0, 1]).range([0, o]),
        c = 5,
        s = 1e3,
        h = d3.select("#vis");
    h.select("img").remove();
    var f = h.append("svg").attr("width", i + 2 * c).attr("height", l + 2 * c).append("g").attr("transform", "translate(" + [o + c, o + c] + ")");
    h.append("p").attr("id", "intro").text("Click to zoom!");
    var p = d3.layout.partition().sort(null).value(function(t) {
            return 5.8 - t.depth
        }),
        x = d3.svg.arc().startAngle(function(t) {
            return Math.max(0, Math.min(2 * Math.PI, d(t.x)))
        }).endAngle(function(t) {
            return Math.max(0, Math.min(2 * Math.PI, d(t.x + t.dx)))
        }).innerRadius(function(t) {
            return Math.max(0, t.y ? u(t.y) : t.y)
        }).outerRadius(function(t) {
            return Math.max(0, u(t.y + t.dy))
        });
        d3.csv("data.csv", function(data){
        var tree = DataStructures.Tree.createFromFlatTable(data),
                   root = tree.toSimpleObject(function(objectToDecorate, originalNode) {
                        objectToDecorate.size = originalNode.size;
                        if (objectToDecorate.children && objectToDecorate.children.length == 0) {
                            delete objectToDecorate.children;
                        }
                        return objectToDecorate;
                    });
      });
}();
