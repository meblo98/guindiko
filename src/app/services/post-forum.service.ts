import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




export interface PostForum{
  id: number;
  image: string;
  contenu: string;
  user_id: number;
  forum_id: number;
}
@Injectable({
  providedIn: 'root'
})
export class PostForumService {
  private apiUrl = 'http://127.0.0.1:8000/api/postes';


  constructor(private http: HttpClient) { }

  // methode pour ajouter un post dans un forum

  createPostForum(postData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
}
