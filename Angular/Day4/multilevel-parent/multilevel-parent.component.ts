import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-multilevel-parent',
  templateUrl: './multilevel-parent.component.html',
  styleUrls: ['./multilevel-parent.component.css']
})
export class MultilevelParentComponent implements OnInit {

  @ViewChild(ViewchildComponent) viewchildobj:ViewchildComponent;



  constructor() { }

  ngOnInit() {
  }

  Increment(){
    this.viewchildobj.IncrementByOne();
  }
  Decrement(){
    this.viewchildobj.DecrementByOne();
  }

}
