// operations-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperationService } from '../../services/operation.service';
import { CompteService } from '../../services/compte.service';
import { Compte } from '../../models/compte.model';
import { Operation } from '../../models/operation.model';

@Component({
  selector: 'app-operations-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {
  comptes: Compte[] = [];
  operations: Operation[] | null = null;
  compteControl = new FormControl('');

  constructor(
    private operationService: OperationService,
    private compteService: CompteService
  ) {}

  ngOnInit(): void {
    // Fetch the list of comptes when the component loads
    this.compteService.getComptes().subscribe({
      next: (comptes) => (this.comptes = comptes),
      error: (err) => console.error('Failed to load comptes', err),
    });

    // Fetch operations when a compte is selected
    this.compteControl.valueChanges.subscribe((codeCompte) => {
      if (codeCompte) {
        this.operationService.getOperationsByCompte(codeCompte).subscribe({
          next: (operations) => (this.operations = operations),
          error: (err) => console.error('Failed to load operations', err),
        });
      } else {
        this.operations = null;
      }
    });
  }
}
