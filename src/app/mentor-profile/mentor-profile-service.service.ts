import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { ApplicantDetails } from '../models/applicantDetails';

@Injectable({
  providedIn: 'root'
})
export class MentorProfileServiceService {
  
  constructor( private http:HttpClient) { }

  getEventDetails(candidateId: number){
    return this.http.get<ProjectDetails>("url"+candidateId);
  }

  getCandidateProfileDetails(candidateId: number){
    return this.http.get<ApplicantDetails>("url"+candidateId);
  }
}
