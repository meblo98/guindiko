import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rdv {
  id: number;
  sujet : string;
  date_rendezVous: string;
  statut:string;
  type:string;
  lieu:string;
  lien:string;
  duree:number;
  mentor_id: number;
  mentee_id: number;

}


@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private apiUrl = 'http://127.0.0.1:8000/api/rdv';

  constructor(private http: HttpClient) { }

  // methode pour afficher les rendez vous

  getRdv(): Observable<Rdv[]> {
    return this.http.get<Rdv[]>(this.apiUrl);
  }










}
