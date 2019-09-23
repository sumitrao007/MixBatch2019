import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    // we declare that this service should be created
  // by the root application injector.
    providedIn: 'root'
  })

export class ProductService{

    url:string="http://localhost:9090/DemoTest/DemoServlet";

    constructor(private http:Http){

    }

    getProducts(){
       return this.http.get(this.url)
    }

}