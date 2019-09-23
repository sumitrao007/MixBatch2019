import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css']
})
export class DemoServiceComponent implements OnInit {

  products=[];
  constructor(private service:ProductService) { }

  ngOnInit() {

    this.service.getProducts()
    .subscribe(response=>{
      console.log(response.json());
      this.products=response.json().products;
      //console.log("Product is "+this.products);

    })

  }

}
