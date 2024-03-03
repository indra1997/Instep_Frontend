import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar) {
  }

  error(message: string) {
    return this._snackBar.open(message, undefined, {duration: 3000,panelClass: ['snackbar-error']});
  }

  success(message: string) {
    return this._snackBar.open(message, undefined, {duration: 3000, panelClass: ['snackbar-success']});
  }

  info(message: string) {
    return this._snackBar.open(message, undefined, {duration: 3000, panelClass: ['snackbar-info']});
  }
}
