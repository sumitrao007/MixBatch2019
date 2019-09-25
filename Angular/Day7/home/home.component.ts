import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id1:number=12;
  multiparameter={
    id:9,
    Name:"Sumit"
};

  queryobj={
    order:1,
    brand:"RenukaGroup"
  };


  constructor(private router:Router ) { }

  ngOnInit() {

  }
  
  onpage1(){
    this.router.navigate(['/page1']);
  }

  onpage2(){
  // this.router.navigate(['/page2']);

  this.router.navigate(['/page2'],{ queryParams: { order: this.id1,brand:"Sumit" } });

  // this.router.navigate(['/page2'],{ queryParams: this.queryobj });

  }

  onfollower(){
    this.router.navigate(['/follower',this.id1]);
  }
  onMultiparameter(){
    this.router.navigate(['/Multiparameter',this.multiparameter.id,this.multiparameter.Name]);

  }

}
