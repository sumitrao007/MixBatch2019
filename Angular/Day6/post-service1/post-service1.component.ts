import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-service1',
  templateUrl: './post-service1.component.html',
  styleUrls: ['./post-service1.component.css']
})
export class PostService1Component implements OnInit {

  posts=[];
  createdata={};
  constructor(private service:PostService) { 

  }

  ngOnInit() {

    this.service.getPosts()
    .subscribe(response=>{
      console.log(response);
      console.log(response.json());
      this.posts=response.json();    
    },(error:Response)=>{
      alert('Unexpected error occur');
    })


  }

  AddData(title){

    this.createdata={"title":title};

    this.service.addposts(this.createdata)
    .subscribe(response=>{
      console.log(response.json());
     let id=response.json().id;
     let title=response.json().title;

     this.posts.splice(0,0,{id:id,title:title});

    })

  }

  UpdateData(item){
    this.service.updateposts(item)
    .subscribe(response=>{
      console.log(response.json());

    })
  }
  Deletedata(item){
    this.service.deletepost(item)
    .subscribe(response=>{
      console.log(response.json());

      let index=this.posts.indexOf(item);
      this.posts.splice(index,1);

    })
  }

}
