import { apiUrl } from './apiURL';
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
  // private apiUrl = 'http://127.0.0.1:8000/api/postes';
  // private apiUrl = 'http://localhost:8000/api/post_forums'; // URL de l'API



  // constructor(private http: HttpClient) { }

  // methode pour ajouter un post dans un forum

  createPostForum(postData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);}
  private apiUrl = 'http://localhost:8000/api/post_forums'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer tous les posts
  getPosts(): Observable<any[]> {
    console.log('Fetching posts...');

    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un post spécifique par ID
  getPost(id: number): Observable<any> {
    console.log(`Fetching post with ID ${id}...`);

    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau post
  createPost(post: any): Observable<any> {
    console.log('Creating post...', post);

    return this.http.post<any>(this.apiUrl, post);
  }

  // Mettre à jour un post existant
  updatePost(post: any): Observable<any> {
    console.log(`Updating post with ID ${post.id}...`, post);

    return this.http.put<any>(`${this.apiUrl}/${post.id}`, post);
  }

  // Supprimer un post
  deletePost(id: number): Observable<any> {
    console.log(`Deleting post with ID ${id}...`);

    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

