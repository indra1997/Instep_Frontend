import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/projectDetails';
import { MentorDetails } from '../models/mentorDetails';



@Component({
  selector: 'app-actual-mentor',
  templateUrl: './actual-mentor.component.html',
  styleUrls: ['./actual-mentor.component.css']
})
export class ActualMentorComponent implements OnInit{
  changeCus: boolean = false;
  addressForm !: FormGroup;
  mentorDetails !: MentorDetails;
  constructor(private router:Router, private formBuilder: FormBuilder, private http : HttpClient){

  }
  ngOnInit(): void {
    this.http.get<MentorDetails>("http://localhost:8765/instep/mentors/" + sessionStorage.getItem("mentorId")).subscribe(
      data => {
        this.mentorDetails = data;
 
      },
      errorResponse =>{
        console.log(errorResponse);
      }
    );
  }

  addProject(){
    this.router.navigate(['/add-project']);
  }

}
