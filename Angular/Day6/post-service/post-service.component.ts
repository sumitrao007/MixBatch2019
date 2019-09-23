import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {

  url:string="https://jsonplaceholder.typicode.com/posts";

  posts=[];
  createdata={};

  constructor(private http:Http) { 

  }



  ngOnInit() {

    this.http.get(this.url)
    .subscribe(response=>{
      console.log(response);
      console.log(response.json());
      this.posts=response.json();      

    })

  }


  AddData(title){
   // console.log(title);

     this.createdata={"title":title};

    //  this.http.post(this.url,this.createdata)
    //  .subscribe(response=>{
    //    console.log(response.json());
    //   let id=response.json().id;
    //   let title=response.json().title;

    //   this.posts.splice(0,0,{id:id,title:title});


    //  })

    this.http.post(this.url,JSON.stringify( this.createdata))
     .subscribe(response=>{
       console.log(response.json());
      let id=response.json().id;
      let title=response.json().title;

      this.posts.splice(0,0,{id:id,title:title});

     })

  }

  UpdateData(item){

    this.http.put(this.url+"/"+item.id ,JSON.stringify(item))
    .subscribe(response=>{
      console.log(response.json());

    })

  }

  Deletedata(item){
    this.http.delete(this.url+"/"+item.id)
    .subscribe(response=>{
      console.log(response.json());

      let index=this.posts.indexOf(item);
      this.posts.splice(index,1);

    })
  }


}
