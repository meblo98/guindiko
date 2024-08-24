import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
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

 // Méthode pour récupérer les demandes de mentorat pour le mentor connecté
 getMentorshipRequests(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get(`${apiUrl}/demandes`, { headers });
}

// Méthode pour récupérer les détails d'une demande de mentorat spécifique
getMentorshipRequestById(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get(`${apiUrl}/demandes/${id}`, { headers });
}

// mentor.service.ts
updateMentorshipRequest(id: number, data: any): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.put(`${apiUrl}/demandes/${id}`, data, { headers });
}

getAcceptedRequestsForMentor(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get(`${apiUrl}/demandes-acceptee`, { headers });
}


   // Méthode pour l'inscription des mentors
   registerMentor(
    nom: string,
    prenom: string,
    numeroTelephone: string,
    email: string,
    password: string,
    domaineExpertise: string,
    experience: string,
    disponibilite: string,
    password_confirmation: string
  ): Observable<any> {
    const body = {
      nom,
      prenom,
      numeroTelephone,
      email,
      password,
      domaineExpertise,
      experience,
      disponibilite,
      password_confirmation
    };

    return this.http.post(`${apiUrl}/mentors`, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    // Gérer l'erreur de manière appropriée ici
    console.error('Une erreur est survenue', error);
    return throwError(() => new Error('Une erreur est survenue. Veuillez réessayer plus tard.'));
  }

}
