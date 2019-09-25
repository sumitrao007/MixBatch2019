import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiparameter',
  templateUrl: './multiparameter.component.html',
  styleUrls: ['./multiparameter.component.css']
})
export class MultiparameterComponent implements OnInit {

  ID:number=0;
  MyName:String="";

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
    .subscribe(param=>{
      this.ID=+param.get('id');
      this.MyName=param.get('username');

    })
  }

}
