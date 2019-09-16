import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='text-success';
  myclass2:string="text-danger";
  haserror:boolean=false;
  haserror1:boolean=false;
  isspecial:boolean=true;

  myclassobj={
    "text-success":!this.haserror1,
    "text-danger" :this.haserror1,
    "text-style"  :this.isspecial
  };

  rating:number=13;


  constructor() { }

  ngOnInit() {
  }

}
