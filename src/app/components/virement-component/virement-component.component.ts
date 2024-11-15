import { EmployeService } from './../../services/employe.service';
import { OperationService } from './../../services/operation.service';
import { CompteService } from './../../services/compte.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VirementRequest } from '../../models/virement-request';
import { NgForOf } from '@angular/common';
import { Employe } from '../../models/employe.model';

@Component({
  selector: 'app-virement-component',
  standalone: true,
  imports: [FormsModule , NgForOf  ],
  templateUrl: './virement-component.component.html',
  styleUrl: './virement-component.component.css'
})
export class VirementComponentComponent {
  virementRequest:VirementRequest = { senderId: '', receiverId: '', money: 0 , employeId:0 };
  comptes: any[] = [];  // Store the list of accounts
  employes : Employe[] = [];
  constructor(private modalService: NgbModal, private compteService:CompteService , private operationService:OperationService , private employeService:EmployeService) {}

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

  openVirement(content: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });

  }

  submitVirement() {
    console.table(this.virementRequest)
   this.operationService.virementOperation(this.virementRequest).subscribe(response => {
      console.log('Virement Success:', response);
      this.modalService.dismissAll();
    });
  }
}
