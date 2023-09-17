import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
export class AppService {
    loggedInMentorId!:number
    loggedInAdminId!:number
  
    count:number = 0;
    simpleObservable = new Subject();
    simpleObservable$ = this.simpleObservable.asObservable();

    constructor(private http: HttpClient, private auth:AuthService) { 
      this.auth.sessionMentor.subscribe(
        data => {
          this.loggedInMentorId = data.mentorId;
        })
      this.auth.sessionAdmin.subscribe(
        data => {
          this.loggedInAdminId = data.adminId;
        })
    }
  }