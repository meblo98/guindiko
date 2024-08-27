import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostForumService {
  private apiUrl = 'http://localhost:8000/api/postes';

  constructor(private http: HttpClient) { }

  // Récupérer les posts par forum ID
  getPostsByForumId(forumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?forumId=${forumId}`);
  }

 
}
