"use strict";
exports.__esModule = true;
var Department = /** @class */ (function () {
    function Department(fname, lname, salary, dept) {
        this.firstname = fname;
        this.lastname = lname;
        this.salary = salary;
        this.dept = dept;
    }
    Department.prototype.display = function () {
        console.log("\n        -------------------Empolyee Information------------\n           First Name : " + this.firstname + "\n           Last Name : " + this.lastname + "\n           Salary  : " + this.salary + "\n           Department  : " + this.dept + " \n\n        ");
    };
    return Department;
}());
exports.Department = Department;
