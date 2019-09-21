import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomPipe } from './custom.pipe';
import { SrvicesComponent } from './srvices/srvices.component';
import { CourseService } from './course.service';
import { Service2Component } from './service2/service2.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CustomPipeComponent,
    CustomPipe,
    SrvicesComponent,
    Service2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
