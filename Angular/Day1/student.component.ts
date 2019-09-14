import { Component} from '@angular/core';

@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})
export class StudentComponent{

    name:string='Sumit Raokhande';
    
    Fullname:string="Hefshine PVT LTD ";
    placeholder:string="Enter Your Good Name";
    imgurl:string="./assets/Desert.jpg";

    mytype:string='radio';
    mytype1:string='text';
    isdissabled:boolean=false;
    isdissabled1:boolean=false;

    ishidden:boolean=false;
    ishidden1:boolean=false;
    mttxt:string="This is Property + String Interpolation!!!!!!";

    getname():string{
        return this.name;
    }
    
}
