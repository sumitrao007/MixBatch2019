function dispsalary(emptype, sal) {
    console.log(emptype);
    if (sal == undefined && emptype != undefined) {
        if (emptype === "manager") {
            sal = 50000;
        }
        else {
            sal = 20000;
        }
        //console.log(sal);
        return sal;
    }
    else {
        //console.log(sal);
        console.log("Passing Two Parameter Function");
        return sal;
    }
}
// console.log(dispsalary("manager"));
// console.log(dispsalary("manager",50000));
console.log(dispsalary(200000));
