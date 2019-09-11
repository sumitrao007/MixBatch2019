import {Student} from './StudentInterface';

export class StudentInfo implements Student{
    firstname: string;   
     lastname: string;
    rollno: number;
    getFirstname(): string {
        return this.firstname;
    }
    setFirstname(firstname: string): void {
        this.firstname=firstname
    }
    getLastname(): string {
        return this.lastname;
    }
    setLastname(lasttname: string): void {
        this.lastname=lasttname;
    }
    getRollnoname(): number {
        return this.rollno;
    }
    setRollNo(rollno: number): void {
        this.rollno=rollno;
    }
    Display(): void {

        console.log(`
        ---------Student Information -------------
        First name Is    ${this.firstname}
        Last name IS    ${this.lastname}
        Roll Number Is  ${this.rollno}       

        `);
        
    }

    
}