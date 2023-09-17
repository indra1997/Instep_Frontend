import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MentorDetails } from '../models/mentorDetails';
import { Admin } from '../models/Admin';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    sessionMentor: BehaviorSubject<MentorDetails> = new BehaviorSubject<MentorDetails>(new MentorDetails());
    sessionAdmin: BehaviorSubject<Admin> = new BehaviorSubject<Admin>(new Admin());
    mentor!: MentorDetails;
    admin!: Admin;

    constructor(private http: HttpClient) {
        this.loadSessionMentor();
        this.loadSessionAdmin();
    }

    loadSessionMentor() {
        this.mentor = new MentorDetails();
        this.mentor.name = "";
        if(sessionStorage.getItem("mentorId")!=null){
            let check = <string>sessionStorage.getItem("mentorId");
            let name = <string>sessionStorage.getItem("name");
            this.mentor.mentorId = parseInt(check);
            this.mentor.name = name;
        }
    }
    loadSessionAdmin() {
        this.admin = new Admin();
        this.admin.name = "";
        if(sessionStorage.getItem("adminId")!=null){
            let check = <string>sessionStorage.getItem("adminId");
            let name = <string>sessionStorage.getItem("name");
            this.admin.adminId = parseInt(check);
            this.admin.name = name;
        }
    }

    nextMentor(data: MentorDetails) {
        this.mentor = data;
        this.sessionMentor.next(this.mentor);
    }
    nextAdmin(data: Admin) {
        this.admin = data;
        this.sessionAdmin.next(this.admin);
    }
 

}
