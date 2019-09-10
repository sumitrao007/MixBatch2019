//Simple Json Object
var myobj = {
    firstname: "Sumit",
    lastname: "Raokhande",
    ID: 1
};
console.log(" First name Is " + myobj.firstname + "\n        Last name Is " + myobj.lastname + "\n        Id is \t " + myobj.ID + "\n");
//Array of Object or Multitype Array
var arrobj = [
    {
        firstname: "Sumit",
        lastname: "Raokhande",
        id: 1
    },
    {
        firstname: "Kiran",
        lastname: "Raokhande",
        id: 2
    },
    {
        firstname: "Spruha",
        lastname: "Raokhande",
        id: 3
    }
];
console.log("First Object Value is " + arrobj[0].firstname);
console.log("First Object Value is " + arrobj[0]);
var arrobjarr = [
    {
        firstname: ["Sumit", "Pravin", "Prasad", "Nilesh"],
        lastname: "Raokhande",
        id: 1
    },
    {
        firstname: "Kiran",
        lastname: "Raokhande",
        id: 2
    },
    {
        firstname: "Spruha",
        lastname: "Raokhande",
        id: 3
    }
];
console.log("--------------Array of Object & array---------\n        " + arrobjarr[0].firstname[0] + "\n        " + arrobjarr[0].firstname + "\n");
for (var index = 0; index < arrobjarr[0].firstname.length; index++) {
    var element = arrobjarr[0].firstname[index];
    console.log(element);
}
var jsonobj = {
    status: "Success",
    data: [
        {
            firstname: "Sumit",
            lastname: "Raokhande",
            id: 1,
            sal: 100000
        },
        {
            firstname: "Kiran",
            lastname: "Raokhande",
            id: 2
        },
        {
            firstname: "Spruha",
            lastname: "Raokhande",
            id: 3
        }
    ],
    error: "U  r error"
};
console.log("Json Object is\n        " + jsonobj.status + "\n        " + jsonobj.error + "\n        " + jsonobj.data + "    \n");
console.log("\n    " + jsonobj.data[0].firstname + "\n    " + jsonobj.data[0].sal + "\n    " + jsonobj.data[1].sal + "\n");
console.log("\n        " + jsonobj.data[0].firstname + " " + jsonobj.data[0].lastname + "\n        \n");
var a = jsonobj.data[0].firstname;
var b = c;
var c = a + " " + b;
console.log(c);
console.log(jsonobj.data[0].firstname + " " + jsonobj.data[0].lastname);
console.log("\n------------------ Concat method------------\n" + jsonobj.data[0].firstname.concat(" ", jsonobj.data[0].lastname) + "\n");
console.log("\n-----------Sumit Sir Logic----------------\n" + [jsonobj.data[0].firstname, jsonobj.data[0].lastname].join(" ") + "\n\n");
