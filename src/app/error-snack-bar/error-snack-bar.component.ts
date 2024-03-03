import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  
})
export class ErrorSnackBarComponent {
  constructor(private _snackBar: MatSnackBar) {
    this.openSnackBar("success");
  }

  openSnackBar(com: string) {
    if(com == "success"){
      this._snackBar.open("Wrong Id or Password","",{
        verticalPosition: "bottom",
        horizontalPosition: "center",
        duration: 3000,
        panelClass: ["custom-styleSuccess"]
      });
    }
    
  }
}
