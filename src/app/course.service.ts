import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses:any=[];
  courseData:any;

  constructor() {
    this,this.courses=[
      {'cid':'C001','cname':'Angular','cduration':5,'csme':'shipra'},
      {'cid':'C002','cname':'Angular','cduration':5,'csme':'sheetal'},
      {'cid':'C003','cname':'Angular','cduration':5,'csme':'shilpa'},
      {'cid':'C004','cname':'Angular','cduration':5,'csme':'prajwal'},
      {'cid':'C005','cname':'Angular','cduration':5,'csme':'deepank'},
      {'cid':'C006','cname':'Angular','cduration':5,'csme':'ashwini'},
    ];
   }
   //metho to display the course based on course id
  getCourseById(courseid:string){
    for(let i=0;i<this.courses.length;i++){
      if(this.courses[i].cid==courseid){
        this.courseData=this.courses[i];
        return this.courseData;
      }
    }
  }

}
