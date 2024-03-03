import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../models/Admin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../snack-bar.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  form: FormGroup;
  admin!: Admin;
  wrongCredentials: boolean = false;

  constructor(fb: FormBuilder, private http:HttpClient, private router: Router, private auth:AuthService, private snackBarService : SnackBarService) {
   this.form = fb.group({
     adminId: ['', Validators.required],
     password: ['', Validators.required],
 });
 }

 loginAdmin() {
  var admin = new Admin();
  admin.adminId = this.form.value.adminId;
  admin.password = this.form.value.password;
  this.http.post<Admin>('http://localhost:8765/instep/admins/login', admin).subscribe((response)=>{
    this.admin = response;
    this.auth.nextAdmin(response);
      sessionStorage.setItem("mentorId", "" + response.adminId);
      sessionStorage.setItem("name", ""+ response.name);
      console.log('loggedin');
      this.router.navigate(['/admin']);
  },
  (errorResponse) => {
    console.log(errorResponse)
    sessionStorage.clear();
    this.snackBarService.error("Wrong Id or Password");
    this.wrongCredentials = true;

  });
  
}
}
