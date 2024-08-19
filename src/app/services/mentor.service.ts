import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { apiUrl } from './apiURL';

@Injectable({
  providedIn: 'root'
})
export class MentorService {


  constructor(private http: HttpClient) { }

  getMentors(): Observable<any> {
    return this.http.get(`${apiUrl}/mentors`);
  }


  // Méthode pour créer une demande de mentorat
  requestMentorship(mentorId: number, menteId: number): Observable<any> {
    const url = `${apiUrl}/demandes`;
    const payload = { mentor_id: mentorId, mente_id: menteId };
    return this.http.post<any>(url, payload);
  }

}
