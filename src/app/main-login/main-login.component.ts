import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent {

  constructor(private router: Router){}

  loginMentor(){
    this.router.navigate(["/mentorLogin"]);
  }
  loginAdmin(){
    this.router.navigate(["/adminLogin"]);
  }

  fillForm(){
    this.router.navigate(["/internshipForm"]);
  }

}
