import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

name:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur assumenda ab expedita, officiis odio optio in odit sint ipsa vel. Vel laboriosam autem assumenda amet quae temporibus esse adipisci a?";

person={

  firstname:"Hefshine",
  lastname:"PVT LTD"
};
mynumber:number=0.092;

arr:number[]=[1,2,3,4,5,6,7,8,9];

  date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
