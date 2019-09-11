"use strict";
exports.__esModule = true;
var myclass_1 = require("./myclass");
var aperson = new myclass_1.Person("Hefshine", "PVT LTD", 1);
aperson.display();
var aemp = new myclass_1.Emp(1, 50000);
aemp.Display();
myclass_1.Addition(10, 20);
console.log("\n---------------PI Value Is--------------\n        " + myclass_1.PI + "\n");
