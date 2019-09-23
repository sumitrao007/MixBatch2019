import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    // we declare that this service should be created
  // by the root application injector.
    providedIn: 'root'
  })

export class PostService{

    url:string="https://jsonplaceholder.typicode.com/posts";
    constructor(private http:Http){

    }
    getPosts(){
       return this.http.get(this.url);
    }

    addposts(createdata){
     return this.http.post(this.url,JSON.stringify( createdata))

    }

    updateposts(item){
      return  this.http.put(this.url+"/"+item.id ,JSON.stringify(item))
    }
    deletepost(item){
      return this.http.delete(this.url+"/"+item.id)
    }


}