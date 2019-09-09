
function add(){
    var res:number=4+5;
    console.log(res);
}

add();

function add1(a:number,b:number){
    console.log(a+b);
}

add1(10,20);

function add3(a:number,b:number){
    return (a+b);
}

var res=add3(20,30);
console.log(`------------------Result is -------------
                        ${res}             `);

function add4(a:number,b:number):number{
    return (a+b);
}

var res1=add4(40,20);
console.log(`Addition is ${res1}`);

var res3=function(a:number,b:number) :number{
    return (a*b);
}
console.log(`Multiplication is ${res3(4,2)}`);

//option parameter function
 function add5(a:number,b?:number){
     console.log(`Value of a is ${a}`);
     console.log(`Value of b is ${b}`);
     console.log(`Addition  of A & B  is ${a+b}`);
 }

 add5(2,3);
 add5(2);

 function add6(a:number,b:number,c?:number,d?:number){

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

 }

 add6(2,3);
 add6(11,12,13);
 add6(11,12,13,14);

//Default Parameter Function

function add7(basicsal:number,rate:number=0.2){
    var res=basicsal*rate;
    console.log(res);
}

//add7(10000);
add7(10000,0.3);

function add8(a:number,b:number=2,c?:number):number{
    return (a+b+c);
}

var Add=add8(10,7);

console.log(Add);

//Arrow Function
// fat Arrow Function

var res4=()=>{
    console.log(4+5);
}

// console.log(res4());
//res4();

var res5=()=>console.log(5+5);

res5();

var res6=(a:number,b:number)=>{
    console.log(a*b);
}

res6(12,12);

var res7=(a:number,b:number):number=>{
    return (a+b);
}

var tempres=res7(10,20);
console.log(tempres);

//Function Constructor

var res8=new Function("a","b","console.log(a+b)");

res8(10,100);

var res9=new Function("a","b","console.log(\"Addition is \"+(a+b))");

res9(10,200);
res9("Sumit","Raokhande");

//Rest Parameter Function
function myrestpara(...num:number[]):void{
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        console.log(`${element}`);
        
    }
}
//myrestpara(1,2,3);
myrestpara(1,2,3,5,6,7);






