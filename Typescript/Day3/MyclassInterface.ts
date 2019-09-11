import {Empolyee} from './Myinterface';

export class Department implements Empolyee{
    firstname: string;   
     lastname: string;
     salary:number;
     dept:string;
    
     constructor(fname:string,lname:string,salary:number,dept:string){
         this.firstname=fname;
         this.lastname=lname;
         this.salary=salary;
         this.dept=dept;
     }
    
     display(): void {
        console.log(`
        -------------------Empolyee Information------------
           First Name : ${this.firstname}
           Last Name : ${this.lastname}
           Salary  : ${this.salary}
           Department  : ${this.dept} 

        `);

    }

    
}