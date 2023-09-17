import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    
    fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.form = fb.group({
      mentorId: ['', Validators.required],
      mentorName: ['', Validators.required],
      unit: ['', Validators.required],
      location: ['', Validators.required],
      numberOfProjects: ['', Validators.required],
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}


