import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8070/clients';

  constructor(private http: HttpClient) {}

  // Récupérer tous les clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  // Créer un client
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }
}
