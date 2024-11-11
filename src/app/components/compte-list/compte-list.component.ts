import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Compte } from '../../models/compte.model';
import { CompteService } from '../../services/compte.service';
import { NgForOf, NgIf } from '@angular/common';
import { AddCompteComponent } from "../add-compte/add-compte.component";
import { VirementComponentComponent } from "../virement-component/virement-component.component";
import { VersementComponentComponent } from "../versement-component/versement-component.component";
import { RetraitComponentComponent } from "../retrait-component/retrait-component.component";

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, AddCompteComponent, VirementComponentComponent, VersementComponentComponent, RetraitComponentComponent],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})

export class CompteListComponent {

  comptes: Compte[] = [];
  newCompte: Compte = {
    codeCompte: '',
    dateCreation: new Date(),
    solde: 0,
    client: {
      nomClient: '',
      codeClient: 0
    },
    employe: { codeEmploye: 0, nomEmploye: '' }
  };
  error: string | null = null;

  constructor(private compteService: CompteService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadComptes();
  }

  loadComptes(): void {
    this.compteService.getComptes().subscribe({
      next: (data) => this.comptes = data,
      error: (err) => {
        this.error = 'Failed to load accounts';
        console.error(err);
      }
    });
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  saveCompte(): void {
    console.info(this.newCompte);
    this.compteService.createCompte(this.newCompte).subscribe({
      next: (data:any) => {
        this.comptes.push(data);
        this.modalService.dismissAll();
        this.newCompte = { codeCompte: '', dateCreation: new Date(), solde: 0, client: {
          nomClient: '',
          codeClient: 0
        }, employe: { codeEmploye: 0, nomEmploye: '' } };
      },
      error: (err:any) => {
        this.error = 'Failed to save account';
        console.error(err);
      }
    });
  }
}
