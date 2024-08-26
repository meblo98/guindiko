import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

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
        const roles = response.user.roles; // Define roles here

        // Récupérer les informations spécifiques en fonction du profil
        if (roles.includes('menti')) {
          return this.getMenteInfo(userId).pipe(
            tap(profile => {
              // Stocker les informations de profil dans le localStorage
              localStorage.setItem('mentee', JSON.stringify(profile));
              localStorage.setItem('mentorId', String(profile.id));
              console.log('Mentee stocké :', profile);
            })
          );
        } else if (roles.includes('mentor')) {
          return this.getMentorInfo(userId).pipe(
            tap(profile => {
              // Stocker les informations de profil dans le localStorage
              localStorage.setItem('mentor', JSON.stringify(profile));
              localStorage.setItem('mentorId', String(profile.id));
              console.log('Mentor stocké :', profile);
            })
          );
        } else if (roles.includes('admin')) {
          return this.getAdminInfo(userId).pipe(
            tap(profile => {
              // Stocker les informations de profil dans le localStorage
              localStorage.setItem('admin', JSON.stringify(profile));
              console.log('Admin stocké :', profile);
            })
          );
        } else {
          return of(null); // Si l'utilisateur n'a pas de rôle correspondant, renvoyer null
        }
      }),
      catchError(error => {
        console.error('Erreur lors de la connexion:', error);
        throw error;
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
      map((response: any) => response.user), // Supposons que l'API renvoie les données de l'utilisateur dans le champ `user`
      catchError(error => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        throw error;
      })
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
      map((response: any) => response), // Assurez-vous que 'mentee' est la bonne clé
      catchError(error => {
        console.error('Erreur lors de la récupération des informations de mentee:', error);
        throw error;
      })
    );
  }

  // Méthode pour récupérer le mentor associé à l'utilisateur connecté
  getMentorInfo(userId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/mentor/by-user/${userId}`, { headers }).pipe(
      tap(response => console.log('Mentee API Response:', response)), // Log pour voir la réponse complète
      map((response: any) => response), // Supposons que l'API renvoie les données de mentor dans le champ `mentor`
      catchError(error => {
        console.error('Erreur lors de la récupération des informations de mentor:', error);
        throw error;
      })
    );
  }

  // Méthode pour récupérer l'admin associé à l'utilisateur connecté
  getAdminInfo(userId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/admin/by-user/${userId}`, { headers }).pipe(
      tap(response => console.log('Mentee API Response:', response)), // Log pour voir la réponse complète
      map((response: any) => response), // Supposons que l'API renvoie les données de admin dans le champ `admin`
      catchError(error => {
        console.error('Erreur lors de la récupération des informations de admin:', error);
        throw error;
      })
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
      }),
      catchError(error => {
        console.error('Erreur lors de la déconnexion:', error);
        throw error;
      })
    );
  }



  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getRole(): string | null {
    // Cette méthode doit retourner le rôle de l'utilisateur
    // Assurez-vous que le rôle est bien stocké dans le localStorage ou une autre source
    return localStorage.getItem('role');
  }

  hasRole(role: string): boolean {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');
    return roles.includes(role);
  }
}
