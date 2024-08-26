import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumMenteeService {

  private apiUrl = 'http://localhost:8000/api/forums'; // URL de l'API

  constructor(private http: HttpClient) {}

  getForums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
