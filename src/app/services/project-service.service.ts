import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../models/projectDetails';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<ProjectDetails[]> {
    return this.http.get<ProjectDetails[]>("http://localhost:8765/instep/projects");
  }
}
