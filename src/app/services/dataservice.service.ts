import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './apiURL';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Fetch mentees
  getMentes(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/mentes`);
  }

  // Fetch appointments
  getRendezvous(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/rendezvous`);
  }

  // Fetch requests
  getDemands(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/demands`);
  }
}
