import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Adjust this to your backend API URL

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  registerMentee(menteeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-mentee`, menteeData);
  }

  registerMentor(mentorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-mentor`, mentorData);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  hasRole(role: string) {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  }
}
