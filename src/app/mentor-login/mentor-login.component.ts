import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorDetails } from '../models/mentorDetails';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent {
   form: FormGroup;
   mentor!: MentorDetails;
   wrongCredentials: boolean = false;


   constructor(fb: FormBuilder, private http:HttpClient, private router: Router, private auth:AuthService) {
    this.form = fb.group({
      mentorId: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  loginMentor() {
    var mentor = new MentorDetails();
    mentor.mentorId = this.form.value.mentorId;
    mentor.password = this.form.value.password;
    this.http.post<MentorDetails>('http://localhost:8765/instep/mentors/login', mentor).subscribe((response)=>{
      this.mentor = response;
      this.auth.nextMentor(response);
        sessionStorage.setItem("mentorId", "" + response.mentorId);
        sessionStorage.setItem("name", ""+ response.name);
        console.log('loggedin');
        this.router.navigate(['/mentor']);
    },
    (errorResponse) => {
      console.log(errorResponse)
      sessionStorage.clear();
      this.wrongCredentials = true;
    });
    
  }
}
