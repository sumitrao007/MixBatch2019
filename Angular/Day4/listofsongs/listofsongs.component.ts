import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent implements OnInit {
  
  mycolor:string[]=['gray','red','green','blue','yellow'];
  arrindex:number=0;

  constructor() { }

  ngOnInit() {
  }
  
  selectsong(index){
    this.arrindex=index;
  }
}
