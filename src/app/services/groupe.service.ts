import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from '../models/groupe.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private baseUrl = 'http://localhost:8070/groupes';

  constructor(private http: HttpClient) {}

  // Récupérer tous les groupes
  getGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(`${this.baseUrl}`);
  }

  // Affecter un employé à un groupe
  assignEmployeToGroupe(groupeId: number, employeId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${groupeId}/employes/${employeId}`, {});
  }

  // Créer un groupe
  createGroupe(groupe: Groupe): Observable<Groupe> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Groupe>(`${this.baseUrl}`, groupe, { headers });
  }
}
