import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

mycourse:string[]=[];

  constructor(private myservice:CourseService) { 

    this.mycourse=this.myservice.getCourse();
  }

  
  ngOnInit() {
  }

}
