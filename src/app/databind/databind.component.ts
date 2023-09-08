import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

stream:string;
myalign:string;
username:string;
selectedvalue:string;


constructor(){
  this.stream='Angular';
  this.myalign='right';
  this.username='srihari';
  this.selectedvalue='two';
}
  clickMe(){
  alert('you have clicked me ');
  }
}

