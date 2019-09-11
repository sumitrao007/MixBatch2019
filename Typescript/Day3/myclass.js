"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstname, lastname, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }
    Person.prototype.display = function () {
        console.log("\n        First Name is " + this.firstname + "\n        Last Name is " + this.lastname + "\n        Id Is " + this.id + "\n        ");
    };
    return Person;
}());
exports.Person = Person;
// var aperson=new Person("Sumit","Raokhande",2);
// aperson.display();
var Emp = /** @class */ (function () {
    function Emp(empid, salary) {
        this.Empid = empid;
        this.Salary = salary;
    }
    Emp.prototype.Display = function () {
        console.log("\n            Emp id Is " + this.Empid + "\n            Salary of Emp " + this.Salary + "\n        ");
    };
    return Emp;
}());
exports.Emp = Emp;
function Addition(a, b) {
    console.log("\n    --------------Addition IS --------------------\n                " + (a + b) + "\n    ");
}
exports.Addition = Addition;
exports.PI = 3.14;
