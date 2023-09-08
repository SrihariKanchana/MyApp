import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
courses :any=[];
constructor(private courseservice:CourseService){
  this.courses=courseservice.courses;
}
}
