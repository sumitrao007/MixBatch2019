"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mybaseclass2_1 = require("./mybaseclass2");
var MyRectangle = /** @class */ (function (_super) {
    __extends(MyRectangle, _super);
    function MyRectangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        return _this;
    }
    MyRectangle.prototype.area = function () {
        this.rectarea = this.length * this.breadth;
    };
    MyRectangle.prototype.display = function () {
        console.log("\n    ------------Area of Rectangle is -----------\n        " + this.rectarea + "\n    ");
    };
    return MyRectangle;
}(mybaseclass2_1.MyShape));
exports.MyRectangle = MyRectangle;
