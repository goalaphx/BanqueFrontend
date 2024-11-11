
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteService } from '../../services/compte.service';
import { NgForOf } from '@angular/common';
import { OperationService } from '../../services/operation.service';
import { RetraitRequest } from '../../models/retrait-request';

@Component({
  selector: 'app-retrait-component',
  standalone: true,
  imports: [FormsModule ,NgForOf],
  templateUrl: './retrait-component.component.html',
  styleUrl: './retrait-component.component.css'
})
export class RetraitComponentComponent {
  retraitRequest :RetraitRequest= { compteId: '', montant: 0 };
  comptes: any[] = [];  // Array to store accounts

  constructor(private modalService: NgbModal, private compteService: CompteService , private operationService:OperationService) {}

  ngOnInit() {
    this.fetchComptes();
  }

  fetchComptes() {
    this.compteService.getComptes().subscribe(data => {
      this.comptes = data;
    });
  }

  openRetrait(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submitRetrait() {
    console.log(this.retraitRequest);

    this.operationService.retraitOperation(this.retraitRequest).subscribe(
      data => { console.log(data) }
    );
  }
}
