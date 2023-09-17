import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-mentor-stats-screen',
  templateUrl: './project-mentor-stats-screen.component.html',
  styleUrls: ['./project-mentor-stats-screen.component.css']
})
export class ProjectMentorStatsScreenComponent implements OnInit{
  projectArray !: ProjectDetails[];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<ProjectDetails[]>('http://localhost:8765/instep/projects').subscribe((response)=>{
      this.projectArray = response;
    },
    (errorResponse) => {
      console.log(errorResponse);
    });
  }
  


}
