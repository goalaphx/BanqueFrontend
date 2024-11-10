import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../models/employe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = 'http://localhost:8070/employes';

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.baseUrl);
  }

  // Save a new employee
  saveEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.baseUrl, employe);
  }
}
