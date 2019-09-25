import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {


  messsage={};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap
    .subscribe(param=>{
      this.messsage={
        order1:Number(param.get('order')),
        brand1:param.get('brand')
      };
      
    })

  }

}
