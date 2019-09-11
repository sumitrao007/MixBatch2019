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
var Mycircle = /** @class */ (function (_super) {
    __extends(Mycircle, _super);
    function Mycircle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Mycircle.prototype.area = function () {
        this.circleare = 3.14 * this.radius * this.radius;
    };
    Mycircle.prototype.display = function () {
        console.log("\n        ----------Area of Circle is ------------------\n                    " + this.circleare + "\n\n\n        ");
    };
    return Mycircle;
}(mybaseclass2_1.MyShape));
exports.Mycircle = Mycircle;
