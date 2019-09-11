export interface Student{
    firstname:string;
    lastname:string;
    rollno:number;

    getFirstname():string;
    setFirstname(firstname:string):void;
    getLastname():string;
    setLastname(lasttname:string):void;

    getRollnoname():number;
    setRollNo(rollno:number):void;

    Display():void;

}