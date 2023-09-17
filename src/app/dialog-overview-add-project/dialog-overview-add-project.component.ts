import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview-add-project',
  templateUrl: './dialog-overview-add-project.component.html',
  styleUrls: ['./dialog-overview-add-project.component.css']
})
export class DialogOverviewAddProjectComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewAddProjectComponent>,
    
    fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.form = fb.group({
      projectId: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      requiredSkills: ['', Validators.required],
      location: ['', Validators.required],   
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
