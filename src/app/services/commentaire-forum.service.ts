import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireForumService {

  private apiUrl = 'http://localhost:8000/api/post-commentaire'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les commentaires
  getCommentaires(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/commentaires`);
  }

  // Méthode pour récupérer un commentaire spécifique par ID
  getCommentaireById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/commentaires/${id}`);
  }

  // Méthode pour créer un nouveau commentaire
  createCommentaire(commentaire: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/commentaires`, commentaire);
  }

  // Méthode pour mettre à jour un commentaire existant
  updateCommentaire(commentaire: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/commentaires/${commentaire.id}`, commentaire);
  }

  // Méthode pour supprimer un commentaire
  deleteCommentaire(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/commentaires/${id}`);
  }
}
