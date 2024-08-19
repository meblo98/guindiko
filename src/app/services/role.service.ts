import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'http://127.0.0.1:8000/api/roles'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Obtenir tous les rôles
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Créer un nouveau rôle ou mettre à jour un rôle existant
  createOrUpdateRole(role: any): Observable<any> {
    if (role.id) {
      // Mettre à jour un rôle existant
      return this.http.put<any>(`${this.apiUrl}/${role.id}`, role);
    } else {
      // Créer un nouveau rôle
      return this.http.post<any>(this.apiUrl, role);
    }
  }

  // Supprimer un rôle
  deleteRole(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
