import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  username:string="";
  username1:string="";
  ishidden:boolean=true;
  username2:string="";
  
  constructor() { }

  ngOnInit() {
  }
  ShowText(){
    this.ishidden=false;
    this.username2=this.username1;
    this.username1="";

  }

}
