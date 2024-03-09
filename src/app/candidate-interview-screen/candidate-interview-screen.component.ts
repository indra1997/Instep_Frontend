import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApplicantDetails } from '../models/applicantDetails';
import { MatDialog } from '@angular/material/dialog';
import { DialogScheduleInterviewComponent } from '../dialog-schedule-interview/dialog-schedule-interview.component';
import { timing } from '../models/timing';
import {environment} from '../environment';

@Component({
  selector: 'app-candidate-interview-screen',
  templateUrl: './candidate-interview-screen.component.html',
  styleUrls: ['./candidate-interview-screen.component.css']
})
export class CandidateInterviewScreenComponent implements OnInit{
  candidateArray !: ApplicantDetails[];
  t !: timing;
  constructor(public dialog: MatDialog, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<ApplicantDetails[]>(environment.apiUrl+'/instep/candidates').subscribe((response)=>{
    this.candidateArray = response;
      console.log('got candidates');
  },
  (errorResponse) => {
    console.log(errorResponse)
    sessionStorage.clear();
  });
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogScheduleInterviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==undefined){
      }else{
        if(window.confirm('Are sure you want to Schedule this Interview ?')){
          this.t = result;
          this.t.to = new Date();
        this.http.post<any>(environment.apiUrl+'/instep/admins/schedule', this.t).subscribe((response)=>{
          console.log('Meeting Scheduled');
        },
        (errorResponse) => {
          console.log(errorResponse);
        });
        }
        
      }
    });
  }

  schedule(){
    this.openDialog();
  }

}
