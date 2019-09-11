"use strict";
exports.__esModule = true;
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.getFirstname = function () {
        return this.firstname;
    };
    StudentInfo.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    StudentInfo.prototype.getLastname = function () {
        return this.lastname;
    };
    StudentInfo.prototype.setLastname = function (lasttname) {
        this.lastname = lasttname;
    };
    StudentInfo.prototype.getRollnoname = function () {
        return this.rollno;
    };
    StudentInfo.prototype.setRollNo = function (rollno) {
        this.rollno = rollno;
    };
    StudentInfo.prototype.Display = function () {
        console.log("\n        ---------Student Information -------------\n        First name Is    " + this.firstname + "\n        Last name IS    " + this.lastname + "\n        Roll Number Is  " + this.rollno + "       \n\n        ");
    };
    return StudentInfo;
}());
exports.StudentInfo = StudentInfo;
