import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupeService } from '../../services/groupe.service';
import { Employe } from '../../models/employe.model';
import { Groupe } from '../../models/groupe.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-employee-to-group',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assign-togrp.component.html',
  styleUrls: ['./assign-togrp.component.css']
})
export class AssignToGroupComponent implements OnInit {
  @Input() employee!: Employe;
  groups: Groupe[] = [];
  selectedGroupId: number | null = null;

  constructor(
    public activeModal: NgbActiveModal,
    private groupService: GroupeService
  ) {}

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getGroupes().subscribe({
      next: (data) => (this.groups = data),
      error: (err) => console.error('Failed to load groups', err)
    });
  }

  assignGroup(): void {
    if (this.selectedGroupId) {
      this.groupService.assignEmployeToGroupe(this.selectedGroupId, this.employee.codeEmploye).subscribe({
        next: () => {
          alert(`Employee assigned to group successfully!`);
          this.activeModal.close();
        },
        error: (err) => console.error('Failed to assign group', err)
      });
    }
  }
}
