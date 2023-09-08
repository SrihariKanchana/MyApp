import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
users:any=[];
constructor(private httpservice:HttpService){

}
//calling the method and subscribing it
getUsers(){
  this.httpservice.getUsers().subscribe((data)=>(this.users=data));
}

}
