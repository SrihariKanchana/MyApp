import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  UsersEndPoint:string;
  constructor(private httpclient:HttpClient) {
    this.UsersEndPoint='https://jsonplaceholder.typicode.com/users';
   }
    //fetching the data from the server using http get.
   getUsers(){
     return this.httpclient.get(this.UsersEndPoint);
   }
}
