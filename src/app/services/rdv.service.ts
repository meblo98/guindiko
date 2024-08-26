import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './apiURL';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http: HttpClient ) {}

  getRendezVousPourMentor(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${apiUrl}/rdv`, { headers });
  }

  createRendezVous(rendezVousData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(apiUrl, rendezVousData, { headers });
  }

}
