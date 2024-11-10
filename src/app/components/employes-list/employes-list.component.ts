import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from '../add-employes/add-employes.component'; // Import AddEmployeeComponent
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-employes-list',
  standalone: true,
  imports: [AddEmployeeComponent, NgFor, CommonModule],  // Import AddEmployeeComponent here
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  employees: Employe[] = [];
  error: string | null = null;

  constructor(private employeService: EmployeService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeService.getEmployes().subscribe({
      next: (data) => {
        this.employees = data;
        console.log('Loaded employees:', this.employees); // Inspect the fetched data
      },
      error: (err) => {
        this.error = 'Failed to load employees';
        console.error(err);
      }
    });
  }

  openAddEmployeeModal(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
}
