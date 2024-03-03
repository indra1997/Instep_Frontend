import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogOverviewAddProjectComponent } from '../dialog-overview-add-project/dialog-overview-add-project.component';

@Component({
  selector: 'app-dialog-schedule-interview',
  templateUrl: './dialog-schedule-interview.component.html',
  styleUrls: ['./dialog-schedule-interview.component.css']
})
export class DialogScheduleInterviewComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewAddProjectComponent>,
    
    fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.form = fb.group({
      mentorEmail: ['', Validators.required],
      candidateEmail: ['', Validators.required], 
      from:  ['', Validators.required], 
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
