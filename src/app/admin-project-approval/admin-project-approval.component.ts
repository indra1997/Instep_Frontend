import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment';

@Component({
  selector: 'app-admin-project-approval',
  templateUrl: './admin-project-approval.component.html',
  styleUrls: ['./admin-project-approval.component.css']
})
export class AdminProjectApprovalComponent implements OnInit{
  projectArray: ProjectDetails[] = [{projectId:12345, title:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved",mentorId:1,mentorsAllocated:0  },{projectId:67890, title:"Something",description:"bbnxo bxnogbi5747", requiredSkills:"Angular", location:"Mumbai", status:"Pending", mentorId:1,mentorsAllocated:0 },{projectId:11123, title:"Current",description:"bfionxvbxfbobbnxo bxnogbi", requiredSkills:"React", location:"Banglore", status:"Approved",mentorId:1,mentorsAllocated:0  },{projectId:13245, title:"Flash",description:"Barryxobbnxo bxnogbi", requiredSkills:"Algorithms", location:"Seattle", status:"Approved",mentorId:1 ,mentorsAllocated:0 },{projectId:64567, title:"Anything",description:"sbhohslg sgobsgb", requiredSkills:"Mongodb", location:"Kolkata", status:"Approved",mentorId:1,mentorsAllocated:0  },{projectId:12345, title:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved",mentorId:1,mentorsAllocated:0  }];
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<ProjectDetails[]>(environment.apiUrl+'/instep/projects').subscribe((response)=>{
    this.projectArray = response;
      console.log('got projects');
  },
  (errorResponse) => {
    console.log(errorResponse)
    sessionStorage.clear();
  });
  }

  approveProject(p : ProjectDetails){
    if(window.confirm('Are sure you want to Approve this project ?')){
      //put your delete method logic here
      p.status = 'Approved';
      this.http.put<ProjectDetails>(environment.apiUrl+'/instep/projects/update', p).subscribe((response)=>{
          console.log('Project Updated');
        },
        (errorResponse) => {
          console.log(errorResponse)
        });
     }
  }


}
