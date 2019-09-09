var a = 0;
// var ab;
// var a$c;
console.log(typeof (a));
var str = 'Sumit';
console.log(typeof (str));
var str1;
console.log(typeof (str1));
var myboolean = true;
console.log(typeof (myboolean));
//Type Assertion
var str3;
//1 Angle Bracket <>
// 2 as syntax 
// (<string>str3).
// (str3 as string).
// var d:any;
// (d as string).concat("jhgdchjasbd");
// (d as  number)
//opeartor
//Airthematic,logical,bitwise,relational,conditinal
var num = 4;
var res = num >= 4 ? "HI" : "bye";
console.log(res);
if (num != 4) {
    console.log(num);
}
else {
    console.log(num + " segfaskydfgah");
}
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
var fact = 1;
var i = 5;
var onum = i;
while (i >= 1) {
    fact = fact * i;
    i--;
}
console.log("Factorial of " + onum + " is " + fact);
var choice = "Yash";
switch (choice) {
    case "Sumit":
        console.log("Choice is " + choice);
        break;
    case "Yash":
        console.log("Choice is " + choice);
        break;
    default:
        console.log("Default Value ......");
        break;
}
