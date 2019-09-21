import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-srvices',
  templateUrl: './srvices.component.html',
  styleUrls: ['./srvices.component.css']
})
export class SrvicesComponent implements OnInit {

  courses:string[]=[];


  constructor(private service :CourseService) { 

   // let service =new CourseService();
     this.courses= this.service.getCourse();

  }

  
  ngOnInit() {
  }

}
