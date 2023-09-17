import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MentorProfileServiceService } from './mentor-profile-service.service';
import { ProjectDetails } from '../models/projectDetails';
import { ApplicantDetails } from '../models/applicantDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit{
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  changeCus: boolean = false;

  loggedInCandidateId !: number;
  applicantDetails !: ApplicantDetails;
  errorMessage !: string;
  projectDetails !: ProjectDetails;
  
  custUpdateSuccessMessage: any;
  constructor(private mentorProfileServiceService:MentorProfileServiceService , private router:Router,  private http : HttpClient){

  }
  ngOnInit(): void {

    // this.mentorProfileServiceService.getCandidateProfileDetails().subscribe(
    //   data => {
    //   // this.successMessage="Address added Successfully";
    //   this.applicantDetails = data;
    // },
    // errorResponse =>{
    //   this.errorMessage = errorResponse.error.message;
    // })

    this.mentorProfileServiceService.getEventDetails(this.loggedInCandidateId).subscribe(
      data => {
      this.projectDetails = data;
      // this.successMessage="Address added Successfully";
    },
    errorResponse =>{
      this.errorMessage = errorResponse.error.message;
    })

    
  }
  
  
  

}
