import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicantDetails } from '../models/applicantDetails';
import { Observable } from 'rxjs';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<ApplicantDetails[]> {
    return this.http.get<ApplicantDetails[]>(environment.apiUrl+ "/instep/candidates");
  }
}
