import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApplicantDetails } from '../models/applicantDetails';

@Component({
  selector: 'app-candidate-interview-screen',
  templateUrl: './candidate-interview-screen.component.html',
  styleUrls: ['./candidate-interview-screen.component.css']
})
export class CandidateInterviewScreenComponent implements OnInit{
  candidateArray !: ApplicantDetails[];
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<ApplicantDetails[]>('http://localhost:8765/instep/candidates').subscribe((response)=>{
    this.candidateArray = response;
      console.log('got candidates');
  },
  (errorResponse) => {
    console.log(errorResponse)
    sessionStorage.clear();
  });
  }

}
