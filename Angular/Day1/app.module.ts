import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    Course1Component,
    Course2Component,
    Course3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
