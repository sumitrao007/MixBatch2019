import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  name:string="";
  evetntType;
  evetntType1;
  name1:string="";
  mystyle:string="green";

  cnt:number=0;

  addition:number=0;
  num1:number=10;
  num2:number=20;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Click Me Event Occur");
    this.name="Welcome To My Lecture Hopes So U r Enjoying!!!!!!";

  }

  onClick1(event1){
    console.log(event1);
    this.evetntType=event1.type;
    this.evetntType1=event1.target.value;
  }

  OnInputClick(event){

    if(event.target.value=="Sumit"){
      this.name1=event.target.value;
    }else
    {
      this.name1="Invalid Username";
    }

  }
  onChange(){
    this.mystyle='red';
  }

  onKeyUp(){
    console.log("On Key Up Event Occur");
  }
  onKeydown(){
    console.log("On Key Down Event Occur");
  }

  ClickEvent(){

    if(this.cnt==0){
      console.log("ClICK Event Occur"+this.cnt);
      this.cnt++;
    }

// console.log("Click event");
// this.cnt++;

    
  }

  mycolor:string="white";
  onRed(){
    this.mycolor='red';
  }
  onBlue(){
    this.mycolor='blue';
  }

  ongreen(){
    this.mycolor='green';
  }


}
