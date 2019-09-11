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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.Display = function () {
        console.log(" You Are in Base Class Shape");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.CircleDisplay = function () {
        console.log(" You Are in Derived Class Circle");
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.RectangleDisplay = function () {
        console.log(" You Are in Derived Class Rectangle");
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.squaredisplay = function () {
        console.log("\n        You are in Square\n        ");
    };
    return Square;
}(Rectangle));
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Polygon;
}(Shape));
var circle = new Circle();
circle.CircleDisplay();
circle.Display();
var rectangle = new Rectangle();
rectangle.RectangleDisplay();
rectangle.Display();
var square = new Square();
square.squaredisplay();
var polygon = new Polygon();
// polygon.Display();
var basepolygon = new Polygon();
basepolygon.Display();
