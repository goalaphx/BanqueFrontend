import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Compte } from '../../models/compte.model';
import { CompteService } from '../../services/compte.service';
import { Client } from '../../models/client.model';
import { Employe } from '../../models/employe.model';
import { ClientService } from '../../services/client.service';
import { EmployeService } from '../../services/employe.service';
import { NgFor, NgIf } from '@angular/common';
import { AddCompteRequest } from '../../models/add-compte-request';

@Component({
  selector: 'app-add-compte',
  standalone: true,
  imports: [FormsModule , NgFor , NgIf],
  templateUrl: './add-compte.component.html',
  styleUrl: './add-compte.component.css'
})
export class AddCompteComponent {
  comptes: Compte[] = [];
  clients: Client[] = [];
  employes: Employe[] = [];
  newCompte: Compte = {
    codeCompte: '',
    dateCreation: new Date(),
    solde: 0,
    client: { nomClient: '', codeClient: 0 },
    employe: { codeEmploye: 0, nomEmploye: '' },
    type : "CC"
  };
  error: string | null = null;

  constructor(
    private compteService: CompteService,
    private modalService: NgbModal,
    private clientService: ClientService,
    private employeService: EmployeService
  ) {}

  ngOnInit(): void {
    this.loadComptes();
    this.loadClients();
    this.loadEmployes();
  }

  // Load all existing accounts
  loadComptes(): void {
    this.compteService.getComptes().subscribe({
      next: (data) => this.comptes = data,
      error: (err) => {
        this.error = 'Failed to load accounts';
        console.error(err);
      }
    });
  }

  // Load all clients
  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => {
        console.error('Failed to load clients', err);
      }
    });
  }

  // Load all employees
  loadEmployes(): void {
    this.employeService.getEmployes().subscribe({
      next: (data) => this.employes = data,
      error: (err) => {
        console.error('Failed to load employees', err);
      }
    });
  }

  // Open modal
  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  // Save the new account
  saveCompte(): void {
    // Prepare the request object to match the backend expectations
    const addCompteRequest: AddCompteRequest = {
      solde: this.newCompte.solde,
      clientId: this.newCompte.client.codeClient,
      employeeId: this.newCompte.employe.codeEmploye,
      type: this.newCompte.type,
      var : this.newCompte.decouvert ?? this.newCompte.taux

    };

    console.table(addCompteRequest);  // Log the request object for debugging

    this.compteService.createCompte(addCompteRequest).subscribe({
      next: (data) => {
        this.comptes.push(data);
        this.modalService.dismissAll();
        this.resetForm();
      },
      error: (err) => {
        this.error = 'Failed to save account';
        console.error(err);
      }
    });
  }

  // Reset form
  resetForm(): void {
    this.newCompte = {
      codeCompte: '',
      dateCreation: new Date(),
      solde: 0,
      client: { nomClient: '', codeClient: 0 },
      employe: { codeEmploye: 0, nomEmploye: '' }
    };
  }
}
