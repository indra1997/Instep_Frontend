import { Component, NgZone, OnInit } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment';

@Component({
  selector: 'app-search-project-screen',
  templateUrl: './search-project-screen.component.html',
  styleUrls: ['./search-project-screen.component.css']
})
export class SearchProjectScreenComponent implements OnInit{

  searchText!:string;
  flag = false;
  projectList : ProjectDetails[]=[];

  projectData ?: ProjectDetails;

  constructor(private http:HttpClient, private zone:NgZone){

  }
  ngOnInit(): void {
    this.getAllProjects();
    
  }

  getAllProjects(){

  }

  filterProjects(){

  }
  // "projectId": 1,
  //       "projectTitle": "Project1 Title",
  //       "decription": "Project 1",
  //       "requiredSkills": "JAVA",
  //       "location": "Pune",
  //       "status": "PENDING",
  //       "mentorId": 2
  getData(){
    console.log("SSFG");
    this.flag = true;
    this.http.get<ProjectDetails>(environment.apiUrl + "/get-project-details").subscribe(
      data => {
        this.projectData = data;
       console.log(this.projectData);
       this.zone.run(() => {
        console.log('enabled time travel')
    })
      },
      errorResponse =>{
        
      }
    );

  }
  
}
