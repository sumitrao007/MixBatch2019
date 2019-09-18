import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {

// @Output() childdata=new EventEmitter();

@Output() childata1=new EventEmitter();

message:string="Data Comming from Child........";

childobj={
  course:"Angular",
  duration:"Depends On Person",
  fee : 20000
};

  constructor() { }

  ngOnInit() {
  }
  // SendData(){
  //   this.childdata.emit(this.message);
  // }
  SendObject(){

    this.childata1.emit(this.childobj);
  }

}
