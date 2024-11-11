import { OperationService } from './../../services/operation.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteService } from '../../services/compte.service';
import { VersementRequest } from '../../models/versement-request';
import { NgForOf } from '@angular/common';
import { Employe } from '../../models/employe.model';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-versement-component',
  standalone: true,
  imports: [FormsModule , NgForOf],
  templateUrl: './versement-component.component.html',
  styleUrl: './versement-component.component.css'
})
export class VersementComponentComponent {
  versementRequest : VersementRequest = { compteId: '', montant: 0 , employeId:0 };
  comptes: any[] = [];  // Array to store accounts
  employes : Employe[] =[]
  constructor(private modalService: NgbModal, private compteService: CompteService , private operationService:OperationService , private employeService:EmployeService) {}

  ngOnInit() {
    this.fetchComptes();
  }

  fetchComptes() {
    this.compteService.getComptes().subscribe(data => {
      this.comptes = data;
    });
    this.employeService.getEmployes().subscribe(data=>{
      this.employes=data
    })
  }

  openVersement(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submitVersement() {
    this.operationService.versementOperation(this.versementRequest).subscribe(response => {
      console.log('Versement Success:', response);
      this.modalService.dismissAll();
    });
  }
}
