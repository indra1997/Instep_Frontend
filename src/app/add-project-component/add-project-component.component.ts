import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewAddProjectComponent } from '../dialog-overview-add-project/dialog-overview-add-project.component';
import { ProjectServiceService } from '../services/project-service.service';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment';

@Component({
  selector: 'app-add-project-component',
  templateUrl: './add-project-component.component.html',
  styleUrls: ['./add-project-component.component.css']
})
export class AddProjectComponentComponent implements OnInit{
  errorMessage: string | undefined;
  projectArray: ProjectDetails[] = [{projectId:12345, title:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved", mentorId:1,mentorsAllocated:0 },{projectId:67890, title:"Something",description:"bbnxo bxnogbi5747", requiredSkills:"Angular", location:"Mumbai", status:"Pending", mentorId:1,mentorsAllocated:0 },{projectId:11123, title:"Current",description:"bfionxvbxfbobbnxo bxnogbi", requiredSkills:"React", location:"Banglore", status:"Approved", mentorId:1,mentorsAllocated:0 },{projectId:13245, title:"Flash",description:"Barryxobbnxo bxnogbi", requiredSkills:"Algorithms", location:"Seattle", status:"Approved", mentorId:1,mentorsAllocated:0  },{projectId:64567, title:"Anything",description:"sbhohslg sgobsgb", requiredSkills:"Mongodb", location:"Kolkata", status:"Approved",mentorId:1,mentorsAllocated:0  },{projectId:12345, title:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved",mentorId:1,mentorsAllocated:0  }];
  project = {projectId:0, projectTitle:"Nothing",description:"Nothing", requiredSkills:"Nothing", location:"Nothing", status:"Nothing", mentorId:0 };

  constructor(public dialog: MatDialog, private projectService: ProjectServiceService, private http: HttpClient) {
    
  }
  ngOnInit(): void {
    
    this.getAllProjects();

  }

  getAllProjects(){
    this.projectService.getAllProjects().subscribe(
      projects =>{ this.projectArray = projects},
      errorResponse =>{this.errorMessage = errorResponse.error.message;}
    )
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewAddProjectComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==undefined){
        this.project = {projectId:0, projectTitle:"Nothing",description:"Nothing", requiredSkills:"Nothing", location:"Nothing", status:"Nothing", mentorId:0 };
      }else{
        this.project = result;
        this.project.status = "Pending";
        this.http.post<ProjectDetails>(environment.apiUrl+'/instep/projects', this.project).subscribe((response)=>{
          console.log('Project Added');
        },
        (errorResponse) => {
          console.log(errorResponse);
        });
      }
      this.getAllProjects();
    });
  }

  editProject(){
    console.log("edit clicked");
  }

  deleteProject(){

  }

}
