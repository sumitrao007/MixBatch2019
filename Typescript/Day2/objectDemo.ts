//Simple Json Object
var myobj={
    firstname:"Sumit",
    lastname:"Raokhande",
    ID:1
};

console.log(` First name Is ${myobj.firstname}
        Last name Is ${myobj.lastname}
        Id is \t ${myobj.ID}
`);

//Array of Object or Multitype Array

var arrobj=[
    {
        firstname:"Sumit",
        lastname:"Raokhande",
        id:1
    },
    {
        firstname:"Kiran",
        lastname:"Raokhande",
        id:2
    },
    {
        firstname:"Spruha",
        lastname:"Raokhande",
        id:3
    }
];

console.log(`First Object Value is ${arrobj[0].firstname}`);
console.log(`First Object Value is ${arrobj[0]}`);

var arrobjarr=[
    {
        firstname:["Sumit","Pravin","Prasad","Nilesh"],
        lastname:"Raokhande",
        id:1
    },
    {
        firstname:"Kiran",
        lastname:"Raokhande",
        id:2
    },
    {
        firstname:"Spruha",
        lastname:"Raokhande",
        id:3
    }
];


console.log(`--------------Array of Object & array---------
        ${arrobjarr[0].firstname[0]}
        ${arrobjarr[0].firstname}
`);

for (let index = 0; index < arrobjarr[0].firstname.length; index++) {
    const element = arrobjarr[0].firstname[index];
    console.log(element);    
}

var jsonobj={
    status:"Success",
    data:[
        {
            firstname:"Sumit",
            lastname:"Raokhande",
            id:1,
            sal:100000
        },
        {
            firstname:"Kiran",
            lastname:"Raokhande",
            id:2
        },
        {
            firstname:"Spruha",
            lastname:"Raokhande",
            id:3
        }
    ],
    error:"U  r error"
}

console.log(`Json Object is
        ${jsonobj.status}
        ${jsonobj.error}
        ${jsonobj.data}    
`);
console.log(`
    ${jsonobj.data[0].firstname}
    ${jsonobj.data[0].sal}
    ${jsonobj.data[1].sal}
`);

console.log(`
        ${jsonobj.data[0].firstname} ${jsonobj.data[0].lastname}
        
`);


var a=jsonobj.data[0].firstname;
var b=c;
var c=a+" "+b;
console.log(c)
       
console.log(jsonobj.data[0].firstname+" "+jsonobj.data[0].lastname);

console.log(`
------------------ Concat method------------
${jsonobj.data[0].firstname.concat(" ",jsonobj.data[0].lastname)}
`);

console.log(`
-----------Sumit Sir Logic----------------
${[jsonobj.data[0].firstname,jsonobj.data[0].lastname].join(" ")}

`);









