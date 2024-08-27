import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireForumService {
  private apiUrl = 'http://localhost:8000/api/commentaires';

  constructor(private http: HttpClient) {}

  // Récupérer les commentaires par ID de post
  getCommentairesByPostId(postForumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?post_forum_id=${postForumId}`);
  }

  // Ajouter un nouveau commentaire
  addCommentaire(commentaire: { contenu: string, post_forum_id: number, user_id: number }): Observable<any> {
    console.log('envoie du commentaire au server:', commentaire);
    return this.http.post<any>(this.apiUrl, commentaire);
  }
}
