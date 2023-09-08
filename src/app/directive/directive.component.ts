import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
sampledata:any=[];
flag:boolean;
attcolor:string;

constructor(){
  this.flag=true;
  this.attcolor="purple";
  this.sampledata=[
    {id:1,name:'admin1',age:20},
    {id:2,name:'admin2',age:21},
    {id:3,name:'admin3',age:22},
    {id:4,name:'admin4',age:23},
    {id:5,name:'admin5',age:24},
    {id:5,name:'admin5',age:25},
  ];
}
toggle(){
  this.flag=!this.flag;
}
}
