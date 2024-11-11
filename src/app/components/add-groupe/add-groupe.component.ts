import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupeService } from '../../services/groupe.service';
import { Groupe } from '../../models/groupe.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupComponent {
  newGroup: Groupe = { codeGroupe: 0, nomGroupe: '' };

  constructor(public activeModal: NgbActiveModal, private groupService: GroupeService) {}

  saveGroup(): void {
    // Ensure that only nomGroupe is being sent
    const groupData = {
      nomGroupe: this.newGroup.nomGroupe
    };
  
    this.groupService.createGroupe(groupData).subscribe({
      next: () => {
        this.activeModal.close('saved');
      },
      error: (err) => {
        console.error('Failed to save group', err);
      }
    });
  }
  
}
