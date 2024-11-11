import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployesComponent } from '../add-employes/add-employes.component'; // Import standalone component
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding

@Component({
  selector: 'app-employes-list',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule, FormsModule],  // Import necessary modules
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
        console.log('Loaded employees:', this.employees); 
      },
      error: (err) => {
        this.error = 'Failed to load employees';
        console.error(err);
      }
    });
  }

  openAddEmployeeModal() {
    const modalRef = this.modalService.open(AddEmployesComponent); // Open AddEmployesComponent dynamically
    modalRef.result.then((result) => {
      if (result === 'saved') {
        this.loadEmployees(); // Reload the employee list after adding
      }
    }).catch((error) => {
      console.error('Modal closed with error:', error);
    });
  }
}
