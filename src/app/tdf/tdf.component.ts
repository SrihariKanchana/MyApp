import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  login(formdata:any){
    //alert('welcome '+formdata.username+' !');
    alert('your secret OTP is:'+ formdata.Security.otp);
  }
}
