import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
import {  VersementRequest } from '../models/versement-request';
import { VirementRequest } from '../models/virement-request';
import { RetraitRequest } from '../models/retrait-request';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl = 'http://localhost:8070/operations';

  constructor(private http: HttpClient) {}

  // Récupérer les opérations d'un compte avec pagination
  getOperations(codeCompte: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?codeCompte=${codeCompte}&page=${page}&size=${size}`);
  }

  // Créer une opération
  createOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(`${this.baseUrl}`, operation);
  }

  getOperationsByCompte(codeCompte: string): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.baseUrl}/${codeCompte}`);
  }

  virementOperation(virementRequest:VirementRequest):Observable<Boolean>{
    return  this.http.post<boolean>('http://localhost:8070/virement', virementRequest)
  }

  versementOperation(versementRequest:VersementRequest):Observable<Boolean>{
    return  this.http.post<boolean>('http://localhost:8070/versement', versementRequest)
  }

  retraitOperation(retraitRequest: RetraitRequest):Observable<Boolean>{
    return  this.http.post<boolean>('http://localhost:8070/retrait', retraitRequest)
  }
}
