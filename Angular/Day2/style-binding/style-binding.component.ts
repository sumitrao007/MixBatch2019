import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='green';

  haserror:boolean=false;
  rating:number=14;
  rating1:number=15;

  mystyle={
    color: 'red',
    // fontSize:'320%',  //Its Takes All Windows,Will check
    fontSize:32, 
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

}
