import { Component, NgModule, TemplateRef } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [NgbDatepickerModule , FormsModule, CommonModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  newClient: Client = { codeClient: 0, nomClient: '' }; // Adjust according to your model fields
  error: string | null = null;


  constructor(private clientService: ClientService , private modalService : NgbModal , config : NgbModalConfig) {}



  submitClient(): void {

    console.table(this.newClient);
    if(this.newClient.nomClient == "" || this.newClient.nomClient==null){
      alert('please fill the name')
      return
    }

    this.clientService.createClient(this.newClient).subscribe({
      next: () => {
        alert('added succesfuly')
        this.newClient = { codeClient: 0, nomClient: '' }; // Reset form
      },
      error: (err) => {
        this.error = 'Failed to add client';
        console.error(err);
      }
    });
  }
  open(content:any) {
		this.modalService.open(content);
	}



}
