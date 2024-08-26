import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Rdv {
  id: number;
  sujet : string;
  date_rendezVous: string;
  statut:string;
  type:string;
  lieu:string;
  lien:string;
  duree:number;
  mentor_id: number;
  mentee_id: number;

}

import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { apiUrl } from './apiURL';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private apiUrl = 'http://127.0.0.1:8000/api/rdv';

  constructor(private http: HttpClient) { }

  // methode pour afficher les rendez vous

  getRdv(): Observable<Rdv[]> {
    return this.http.get<Rdv[]>(this.apiUrl);
  }











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
