var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.area = function (a, b, c) {
            // Formula de Heron
            var p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));
        };
        a = a;
        b = b;
        c = c;
    }
    return Triangle;
}());
var x = new Triangle(4, 4, 4);
console.log(x.area);
