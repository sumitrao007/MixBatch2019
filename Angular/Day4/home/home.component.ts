import { Component, OnInit, ViewChild } from '@angular/core';
import { ListofsongsComponent } from '../listofsongs/listofsongs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ListofsongsComponent) childcomp:ListofsongsComponent;
  constructor() { }

  ngOnInit() {
  }

  onFilter(i){
    console.log("In Home Component"+i);
    this.childcomp.selectsong(i);
  }

}
