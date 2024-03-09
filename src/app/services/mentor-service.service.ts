import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MentorDetails } from '../models/mentorDetails';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class MentorServiceService {

  constructor(private http: HttpClient) { }

  getAllMentors(): Observable<MentorDetails[]> {
    return this.http.get<MentorDetails[]>(environment.apiUrl+"/instep/mentors");
  }
}
