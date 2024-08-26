import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiUrl } from './apiURL';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http: HttpClient) {}

  getRendezVousPourMentor(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${apiUrl}/rdv`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  createRendezVous(rendezVousData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${apiUrl}/rdv`, rendezVousData, { headers });
  }

  updateRendezVous(id: number, rdvData: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, rdvData);
  }


  private handleError(error: any) {
    console.error('Une erreur est survenue :', error);
    return throwError(() => new Error('Une erreur est survenue ; veuillez réessayer plus tard.'));
  }
}
