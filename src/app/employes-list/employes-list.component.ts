import { EmployeService } from './../services/employe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from '../models/employe.model';

@Component({
  selector: 'app-employes-list',
  standalone: true,
  imports: [],
  templateUrl: './employes-list.component.html',
  styleUrl: './employes-list.component.css'
})
export class EmployesListComponent implements OnInit{
  employes: Employe[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private employeService:EmployeService, private router: Router) {}

  ngOnInit(): void {

    this.fetchEmployes();
  }

  fetchEmployes(): void {

    this.employeService.getEmployes().subscribe({
      next: (data:any) => {
        this.employes = data;
        this.loading = false;
      },
      error: (err:any) => {
        this.error = "Failed to load employee.";
        this.loading = false;
      }
    });
  }


}
