import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template:`<div style='align:center'>
  <h1>welcome to login page</h1>
  <h4>Enter your credentails</h4>
  Enter your Name : <input type='text' /><br>
  Enter your password : <input type= 'password' /> <br>
  <button (click)="submit()">Submit</button>
    </div>`,
    styles: ['h1{color:orange;font-size:25px;text-align:center}'],
  //templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent {
submit(){
  alert('you credentails are submitted');
}
}
