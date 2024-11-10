import { Component } from '@angular/core';
import { Employe } from '../../models/employe.model';
import { EmployeService } from '../../services/employe.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employes',
  standalone: true,
  imports: [],
  templateUrl: './add-employes.component.html',
  styleUrl: './add-employes.component.css'
})
export class AddEmployesComponent {
  newEmploye: Employe = { codeEmploye: 0, nomEmploye: '' };
  error: string | null = null;


  constructor(private employeeService: EmployeService , private modalService : NgbModal , config : NgbModalConfig) {}



  submitClient(): void {


    this.employeeService.saveEmploye(this.newEmploye).subscribe({
      next: () => {
        alert('added succesfuly')
        this.newEmploye = { codeEmploye: 0, nomEmploye: '' }; // Reset form
      },
      error: (err) => {
        this.error = 'Failed to add employee';
        console.error(err);
      }
    });
  }
  open(content:any) {
		this.modalService.open(content);
	}

}
