import { Component, Inject, OnInit } from '@angular/core';
import { MentorDetails } from '../models/mentorDetails';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {NgIf} from '@angular/common';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from '../snack-bar.service';





@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})
export class AddMentorComponent implements OnInit{
  mentor: MentorDetails = {mentorId:0,
    name:"",
    password:"password",
    emailId: "",
    location: "",
    unit: "",
    noOfProjectsMentoring:0, status:""};

    form: FormGroup;

    mentorArray: MentorDetails[] = [
      {mentorId:122,
      password:"password",
      name:"Indrajit",
      emailId: "infts@fg.com",
      location: "Masur",
      unit: "STG",
      noOfProjectsMentoring:1000, status:"Approved"},
      {mentorId:123,
        password:"password",
        name:"Rushikesh",
        emailId: "inffhs@fg.com",
        location: "Ichalkaranji",
        unit: "STG",
        noOfProjectsMentoring:100,status:"Approved"},
        {mentorId:124,
          password:"password",
          name:"Mrunank",
          emailId: "indzfts@fg.com",
          location: "Mumbai",
          unit: "STG",
          noOfProjectsMentoring:10,status:"Approved"},
          {mentorId:125,
            password:"password",
            name:"Ruturaj",
            emailId: "infxfts@fg.com",
            location: "Thane",
            unit: "STG",
            noOfProjectsMentoring:1,status:"Approved"},
            {mentorId:125,
              password:"password",
              name:"Ashutosh",
              emailId: "inzdffts@fg.com",
              location: "Pune",
              unit: "STG",
              noOfProjectsMentoring:-1,status:"Approved"}];


  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private snackBarService : SnackBarService) {
    this.form = fb.group({
      mentorId: ['', Validators.required],
      name: ['', Validators.required],
      unit: ['', Validators.required],
      location: ['', Validators.required],
      noOfProjectsMentoring: ['', Validators.required],   
  });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<MentorDetails[]>('http://localhost:8765/instep/mentors').subscribe((response)=>{
    this.mentorArray = response;
      console.log('got mentors');
  },
  (errorResponse) => {
    console.log(errorResponse)
    sessionStorage.clear();
  });
  }
  
  

    openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==undefined){
        this.mentor = {mentorId:0,
          password:"password",
          name:"ha",
          emailId: "ha",
          location: "ha",
          unit: "ha",
          noOfProjectsMentoring:0, status:""};
      }else{
        this.mentor = result;
        this.http.post<MentorDetails>('http://localhost:8765/instep/mentors', result).subscribe((response)=>{
          console.log('Mentor Added');
          this.snackBarService.success("Mentor Added Successfully!");
        },
        (errorResponse) => {
          console.log(errorResponse)
        });
      }
      
    });
  }




}


