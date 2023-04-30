var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var virtualPoint = /** @class */ (function () {
    function virtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return virtualPoint;
}());
var newvPoint = new virtualPoint(13, 56);
console.log(newvPoint); // logs "13, 56"
var abc = /** @class */ (function () {
    function abc(name) {
        this.name = name;
    }
    return abc;
}());
var obj = new abc("ali");
console.log(obj.name);
var abc2 = /** @class */ (function (_super) {
    __extends(abc2, _super);
    function abc2(name2) {
        var _this = _super.call(this, name2) || this;
        console.log(_this.name);
        return _this;
    }
    return abc2;
}(abc));
var deriv = new abc2("ali2");
console.log(deriv.name);
var C = /** @class */ (function () {
    function C() {
        this.a = 0;
    }
    Object.defineProperty(C.prototype, "length", {
        get: function () {
            return this.a;
        },
        set: function (value) {
            this.a = value;
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
var obj1 = new C();
console.log(obj1.length);
