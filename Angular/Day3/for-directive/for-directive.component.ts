import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  mycolor:string[]=['RED','BLUE','BLACK','GREEN','YELLOW','WHITE'];

  selected;

  mycolor1=[
    {name:"Sumit",id:1,salary:500000},
    {name:"Kiran",id:2,salary:500000},
    {name:"Spruha",id:3,salary:500000}
  ];


  constructor() { }

  ngOnInit() {
  }

  onMouseover(item){
    this.selected=item.name;
  }

}
