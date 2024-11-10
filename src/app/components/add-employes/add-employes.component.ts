import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],  // <-- Include CommonModule here
  templateUrl: './add-employes.component.html',
  styleUrls: ['./add-employes.component.css']
})
export class AddEmployeeComponent implements OnInit {
  newEmployee: Employe = { codeEmploye: 0, nomEmploye: '' };
  supervisors: Employe[] = [];
  error: string | null = null;

  constructor(private employeService: EmployeService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadSupervisors();
  }

  loadSupervisors(): void {
    this.employeService.getEmployes().subscribe({
      next: (data) => {
        this.supervisors = data;
        console.log('Supervisors loaded:', this.supervisors);
      },
      error: (err) => {
        console.error('Failed to load supervisors', err);
      }
    });
  }

  submitEmployee(): void {
    this.employeService.saveEmploye(this.newEmployee).subscribe({
      next: () => {
        alert('Employee added successfully');
        this.newEmployee = { codeEmploye: 0, nomEmploye: '' };
      },
      error: (err) => {
        this.error = 'Failed to add employee';
        console.error(err);
      }
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
}
