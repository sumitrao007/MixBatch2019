import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  myarr=['Bollywood','Punjabi Hits','Bhojpuri','Marathi Songs'];

  @Output() id=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectsong(i){
   // console.log("Value is "+i);
    this.id.emit(i);
  }

}
