import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { apiUrl } from './apiURL';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MentorService {


  constructor(private http: HttpClient, private authService: AuthService) { }

  getMentors(): Observable<any> {
    return this.http.get(`${apiUrl}/mentors`);
  }


  requestMentorship(mentorId: number, menteeId: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${apiUrl}/demandes`, {
      mentor_id: mentorId,
      mente_id: menteeId
    }, { headers }).pipe(
      catchError(error => {
        console.error('Erreur lors de la demande de mentorat', error);
        return throwError(error);
      })
    );

  }

}
