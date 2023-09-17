import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualMentorComponent } from './actual-mentor/actual-mentor.component';
import { AddProjectComponentComponent } from './add-project-component/add-project-component.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MentorScreenComponent } from './mentor-screen/mentor-screen.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { InternshipformComponent } from './internshipform/internshipform.component';
import { CandidateAddedSuccessScreenComponent } from './candidate-added-success-screen/candidate-added-success-screen.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { AdminProfilePageComponent } from './admin-profile-page/admin-profile-page.component';

const routes: Routes = [
  { path : '', redirectTo: 'generalLogin', pathMatch: "full" },
  { path : 'projects', component: ActualMentorComponent },
  { path : 'adminDetails', component: AdminProfilePageComponent },
  { path : 'internshipForm', component: InternshipformComponent },
  { path : 'candidateAddedSuccess', component: CandidateAddedSuccessScreenComponent },
  { path : 'adminLogin', component: AdminLoginComponent },
  { path : 'mentorLogin', component: MentorLoginComponent },
  { path : 'addProject', component:AddProjectComponentComponent},
  { path : 'generalLogin', component: MainLoginComponent },
  { path : 'mentor', component: MentorScreenComponent },
  { path : 'admin', component: AdminScreenComponent },
  { path: 'mentorDetails', component: ActualMentorComponent },
  { path: '**', component: PageNotfoundComponent },
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
