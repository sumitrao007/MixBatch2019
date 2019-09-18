import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  IncrementByOne(){
    this.count=this.count+1;
  }
  DecrementByOne(){
    this.count=this.count-1;
  }

}
