export class Person{
    firstname:string;
    lastname:string;
    id:number;

    constructor(firstname:string,lastname:string,id:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.id=id;
    }

    display():void{
        console.log(`
        First Name is ${this.firstname}
        Last Name is ${this.lastname}
        Id Is ${this.id}
        `);
    }

}

// var aperson=new Person("Sumit","Raokhande",2);

// aperson.display();

export class Emp{
    Empid:number;
    Salary:number;
    constructor(empid:number,salary:number){
        this.Empid=empid;
        this.Salary=salary;
    }

    Display():void{
        console.log(`
            Emp id Is ${this.Empid}
            Salary of Emp ${this.Salary}
        `);
    }
   
    
}

export function Addition(a:number,b:number):void{
    console.log(`
    --------------Addition IS --------------------
                ${a+b}
    `);
}

export var PI=3.14;