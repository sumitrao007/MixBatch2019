import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  UrlId:number=0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
    .subscribe(param=>{
      // console.log(param);
      console.log(param.get('id'));

      this.UrlId=+param.get('id');

    })

  }


}
