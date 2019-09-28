import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  productarr=[
    {id:1,name:"Sumit",description:"Product 1"},
    {id:2,name:"Kiran",description:"Product 2"},
    {id:3,name:"Spruha",description:"Product 3"},
    {id:4,name:"Sumit Raokhande",description:"Product 4"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
