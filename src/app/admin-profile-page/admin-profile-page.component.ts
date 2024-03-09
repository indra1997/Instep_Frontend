import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/Admin';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment';

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
    this.http.get<Admin>(environment.apiUrl+"/instep/admins/" + sessionStorage.getItem("adminId")).subscribe(
      data => {
        this.adminDetails = data;
 
      },
      errorResponse =>{
        console.log(errorResponse);
      }
    );
  }
}