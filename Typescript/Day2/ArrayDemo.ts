
var arr1=[1,2,3,4];
var arr:number[]=[1,2,3];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];  
    console.log(` arr[${index}]  ${element}`);  
}

arr1.forEach(element => {
    console.log(element);
});

arr.forEach((element,index) => {
    console.log(element);

    console.log(`Index Is ${index}`);
});

var arr2:string[]=["Sumit"," Raokhande"," Hefshine","PVT LTD"];

arr2.forEach(element1 => {
    console.log(element1);
});

console.log("");
//tuple
var arr3=["Sumit",1,true,"Raokhande"];

arr3.forEach(element => {
    console.log(element);    
});

//Map Function in array

var tempres=arr1.map(n=>{
    return n*n;
});

console.log(tempres);

var temp1res=arr1.map(n1=>{
    return n1;
});

console.log(temp1res);

var arr4=[];

arr4.push(10);
arr4.push(20);
arr4.push(30);
console.log(`Arr4 Value Is ${arr4}`);

var data=arr4.pop();
console.log(arr4);
console.log(`Data value is ${data}`);
var tempdata1=arr4.pop();
var tempdata2=arr4.pop();
var tempdata3=arr4.pop();

console.log(arr4);

console.log(`---------Array Poped data Value IS------------ 
        ${tempdata1} \t ${tempdata2}
        ${tempdata3}
`);

var arr5=["Sumit","Raokhande" ,"Spruha","Kiran"];

arr5.splice(0,1);
console.log(arr5);

arr5.splice(1);
console.log(arr5);

arr5.splice(0,0,"Sumit","Kiran","Spruha");

console.log(arr5);

arr5.splice(1,2);
console.log(arr5);
console.log("");
//derefence of array
console.log(arr5);
var [x,y]=arr5;
console.log(`Value of X is ${x}`);
console.log(`Value of y is ${y}`);







