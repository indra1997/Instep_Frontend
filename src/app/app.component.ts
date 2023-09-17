import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInPerson: string | undefined;
  loggedInCustomerId!:number
  loggedIn: Boolean = false;
  
  role!: string;
  cartCount!:any;
  constructor(private router: Router, private auth: AuthService, private appService: AppService, private http: HttpClient) { 
    sessionStorage.setItem("cartCounter","0");
    
  }

  ngOnInit() {
    
    this.auth.sessionMentor.subscribe(
      data => {
        this.loggedInPerson = data.name;
        this.loggedInCustomerId = data.mentorId;
        if (this.loggedInPerson != null && this.loggedInPerson != undefined) {
           this.loggedIn = true;
          this.role = "mentor";
        }
      })
      this.auth.sessionAdmin.subscribe(
        data => {
          this.loggedInPerson = data.name;
          this.loggedInCustomerId = data.adminId;
          if (this.loggedInPerson != null && this.loggedInPerson != undefined) {
             this.loggedIn = true;
            this.role = "admin";
          }
        })

      if(this.auth.mentor.mentorId!=null && this.auth.mentor.name){
        this.loggedInCustomerId = this.auth.mentor.mentorId;
        this.loggedInPerson = this.auth.mentor.name;
        if(this.loggedInPerson != null && this. loggedInPerson != undefined){
          this.loggedIn = true;
          this.role = "mentor";
        }
      }
      if(this.auth.admin.adminId!=null && this.auth.admin.name){
        this.loggedInCustomerId = this.auth.admin.adminId;
        this.loggedInPerson = this.auth.admin.name;
        if(this.loggedInPerson != null && this. loggedInPerson != undefined){
          this.loggedIn = true;
          this.role = "admin";
        }
      }
     

  }

  
  logout() {
    this.loggedIn = false;
    sessionStorage.clear();
    this.router.navigate(["/generalLogin"]);
    sessionStorage.setItem('userLoggedIn', 'false');

  }
  mentorPage(){
    this.router.navigate(["/"+ this.role+"Details"]);
  }
  mentorMainPage(){
    this.router.navigate(["/"+this.role]);
  }
}

