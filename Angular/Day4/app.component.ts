import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutput-demo';

  msg:string="Message Comming From Parent Component";

  parentobj={
    product:"Perfume",
    price:120,
    quantity:"50ml"
  };

  arrobj=[
    {
      product:"Perfume",
      price:120,
      quantity:"50ml"
  },
  {
    product:"Utane",
    price:30,
    quantity:"30Gm"
  },
  {
    product:"Shahi Utane",
    price:50,
    quantity:"50Gm"
  }
  ];

  parentmessage:string;
  parentobj1={};


}
