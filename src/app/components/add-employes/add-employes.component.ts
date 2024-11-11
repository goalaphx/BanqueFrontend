import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../models/employe.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // For modal management
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel binding

@Component({
  selector: 'app-add-employee',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule, FormsModule],  // Import necessary modules
  templateUrl: './add-employes.component.html',
  styleUrls: ['./add-employes.component.css']
})
export class AddEmployesComponent implements OnInit {
  newEmployee: Employe = { codeEmploye: 0, nomEmploye: '' };
  supervisors: Employe[] = [];
  error: string | null = null;

  // Make activeModal public so it can be accessed in the template
  constructor(
    private employeService: EmployeService,
    public activeModal: NgbActiveModal // Change this from private to public
  ) {}

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
        this.activeModal.close('saved'); // Close the modal after saving
      },
      error: (err) => {
        this.error = 'Failed to add employee';
        console.error(err);
      }
    });
  }
}
