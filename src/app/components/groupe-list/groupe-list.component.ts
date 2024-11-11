import { Component, OnInit, TemplateRef } from '@angular/core';
import { GroupeService } from '../../services/groupe.service';
import { Groupe } from '../../models/groupe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddGroupComponent } from '../add-groupe/add-groupe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [CommonModule, AddGroupComponent],
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css']
})
export class GroupListComponent implements OnInit {
  groupes: Groupe[] = [];
  error: string | null = null;

  constructor(private groupService: GroupeService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getGroupes().subscribe({
      next: (data) => (this.groupes = data),
      error: (err) => {
        this.error = 'Failed to load groups';
        console.error(err);
      }
    });
  }

  openAddGroupModal() {
    const modalRef = this.modalService.open(AddGroupComponent);
    modalRef.closed.subscribe((result) => {
      if (result === 'saved') {
        this.loadGroups();
      }
    });
  }
}
