import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostServiceComponent } from './post-service/post-service.component';
import { HttpModule } from '@angular/http';
import { PostService1Component } from './post-service1/post-service1.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostServiceComponent,
    PostService1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
