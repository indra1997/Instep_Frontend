import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../models/projectDetails';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<ProjectDetails[]> {
    return this.http.get<ProjectDetails[]>(environment.apiUrl + "/instep/projects");
  }
}
