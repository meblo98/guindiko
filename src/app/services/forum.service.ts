import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private apiUrl = 'http://localhost:8000/api'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les forums
  getForums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/forums`);
  }

  // Méthode pour récupérer les posts d'un forum spécifique
  getPosts(forumId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/post_forums?forum_id=${forumId}`);
  }

  // Méthode pour récupérer les commentaires d'un post spécifique
  getCommentaires(postId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/commentaire_forums?post_forum_id=${postId}`);
  }

  // Méthode pour créer un nouveau post
  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post_forums`, post);
  }

  // Méthode pour créer un nouveau commentaire
  createCommentaire(commentaire: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/commentaire_forums`, commentaire);
  }

  // Méthode pour mettre à jour un post
  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/post_forums/${post.id}`, post);
  }

  // Méthode pour mettre à jour un commentaire
  updateCommentaire(commentaire: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/commentaire_forums/${commentaire.id}`, commentaire);
  }

  // Méthode pour supprimer un post
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/post_forums/${id}`);
  }

  // Méthode pour supprimer un commentaire
  deleteCommentaire(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/commentaire_forums/${id}`);
  }
}
