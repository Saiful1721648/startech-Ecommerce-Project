import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userGmail:any='';
password :any='';
  constructor() { }

  ngOnInit(): void {
  }
  logInUser(){
    if(this.userGmail =='admin'&& this.password == 'admin123'){
      console.log('welcome to startech')
    }
  }

}
