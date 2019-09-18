import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
  
})
export class ChildcompComponent implements OnInit {


  // @Input() parentdata:string;
  // @Input('parentdata') data:string;

  // @Input() parentdata1;

  @Input('parentArrobj') parentArrobj1;

  constructor() { 

  }

  ngOnInit() {
  }

}
