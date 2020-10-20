import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x = document.getElementById("login");
  y = document.getElementById("register");
  z = document.getElementById("btn");  

  register(){
    this.x.style.left = "-400px";
    this.y.style.left = "50px";
    this.z.style.left = "110px";
  }  

  login()
  {
   this.x.style.left = "0px";
   this.y.style.left = "450px";
   this.z.style.left = "0px";
  }
}
