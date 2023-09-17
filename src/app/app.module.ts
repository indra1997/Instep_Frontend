import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternshipformComponent } from './internshipform/internshipform.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchProjectScreenComponent } from './search-project-screen/search-project-screen.component';
import { CandidateInterviewsComponent } from './candidate-interviews/candidate-interviews.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { ActualMentorComponent } from './actual-mentor/actual-mentor.component';
import { AddProjectComponentComponent } from './add-project-component/add-project-component.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

import {MatDividerModule} from '@angular/material/divider';
import { AddMentorComponent } from './add-mentor/add-mentor.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogOverviewAddProjectComponent } from './dialog-overview-add-project/dialog-overview-add-project.component';
import { AdminProjectApprovalComponent } from './admin-project-approval/admin-project-approval.component';
import { CandidateInterviewScreenComponent } from './candidate-interview-screen/candidate-interview-screen.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { HeaderComponent } from './header/header.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MentorScreenComponent } from './mentor-screen/mentor-screen.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { ProjectMentorStatsScreenComponent } from './project-mentor-stats-screen/project-mentor-stats-screen.component';
import { CandidateAddedSuccessScreenComponent } from './candidate-added-success-screen/candidate-added-success-screen.component';
import { AdminProfilePageComponent } from './admin-profile-page/admin-profile-page.component';




@NgModule({
  declarations: [
    AppComponent,
    InternshipformComponent,
    SearchProjectScreenComponent,
    CandidateInterviewsComponent,
    MentorProfileComponent,
    ActualMentorComponent,
    AddProjectComponentComponent,
    AddMentorComponent,
    DialogOverviewExampleDialogComponent,
    DialogOverviewAddProjectComponent,
    AdminProjectApprovalComponent,
    CandidateInterviewScreenComponent,
    MainLoginComponent,
    AdminLoginComponent,
    MentorLoginComponent,
    HeaderComponent,
    PageNotfoundComponent,
    MentorScreenComponent,
    AdminScreenComponent,
    ProjectMentorStatsScreenComponent,
    CandidateAddedSuccessScreenComponent,
    AdminProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgFor,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
