import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/Admin';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.css']
})
export class AdminProfilePageComponent implements OnInit{
  adminDetails !: Admin;
  constructor(private router:Router, private http : HttpClient){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<Admin>("http://localhost:8765/instep/admins/" + sessionStorage.getItem("adminId")).subscribe(
      data => {
        this.adminDetails = data;
 
      },
      errorResponse =>{
        console.log(errorResponse);
      }
    );
  }
}