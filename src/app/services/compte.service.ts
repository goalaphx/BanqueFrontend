import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:8070/comptes';

  constructor(private http: HttpClient) {}

  // Récupérer tous les comptes
  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}`);
  }

  // Récupérer un compte par codeCompte
  getCompte(codeCompte: string): Observable<Compte> {
    return this.http.get<Compte>(`${this.baseUrl}/${codeCompte}`);
  }

  // Créer un compte
  createCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(`${this.baseUrl}`, compte);
  }
}
