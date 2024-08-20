import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        // Stocker les informations de base de l'utilisateur
        localStorage.setItem('token', response.token);
        localStorage.setItem('roles', JSON.stringify(response.user.roles));
        localStorage.setItem('userId', String(response.user.id));
      }),
      switchMap((response: any) => {
        const userId = response.user.id;

        // Récupérer les informations spécifiques en fonction du profil
        return forkJoin({
          mentee: this.getMenteInfo(userId),
          mentor: this.getMentorInfo(userId),
          admin: this.getAdminInfo(userId)
        }).pipe(
          tap(profile => {
            // Stocker les informations de profil dans le localStorage
            if (profile.mentee) {
              localStorage.setItem('mentee', JSON.stringify(profile.mentee));
            }
            if (profile.mentor) {
              localStorage.setItem('mentor', JSON.stringify(profile.mentor));
            }
            if (profile.admin) {
              localStorage.setItem('admin', JSON.stringify(profile.admin));
            }
          })
        );
      })
    );
  }

  // Méthode pour récupérer le jeton à partir du localStorage
  getToken() {
    return localStorage.getItem('token');
  }

  // Méthode pour récupérer les informations de l'utilisateur connecté
  getUserInfo(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/users`, { headers }).pipe(
      map((response: any) => response.user) // Supposons que l'API renvoie les données de l'utilisateur dans le champ `user`
    );
  }

  // Méthode pour récupérer le mentee associé à l'utilisateur connecté
  getMenteInfo(userId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/mente/by-user/${userId}`, { headers }).pipe(
      tap(response => console.log('Mentee API Response:', response)), // Log pour voir la réponse complète
      map((response: any) => response.mentee) // Assurez-vous que 'mentee' est la bonne clé
    );
  }


  // Méthode pour récupérer le mentor associé à l'utilisateur connecté
  getMentorInfo(userId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/mentor/by-user/${userId}`, { headers }).pipe(
      map((response: any) => response.mentor) // Supposons que l'API renvoie les données de mentor dans le champ `mentor`
    );
  }

  // Méthode pour récupérer l'admin associé à l'utilisateur connecté
  getAdminInfo(userId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/admin/by-user/${userId}`, { headers }).pipe(
      map((response: any) => response.admin) // Supposons que l'API renvoie les données de admin dans le champ `admin`
    );
  }

  logout(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        localStorage.clear(); // Nettoyer tout le stockage local lors de la déconnexion
        this.router.navigate(['/login']);
      })
    );
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  hasRole(role: string) {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  }
}
