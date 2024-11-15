import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AddClientComponent } from "../add-client/add-client.component";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [NgIf, NgFor, AddClientComponent , AddClientComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    console.log("hello you are in ");

    this.fetchClients();
  }
// TrackBy function to optimize ngFor rendering
trackByFn(index: number, item: Client): number {
  return item.codeClient; // Use a unique identifier property
}
  fetchClients(): void {

    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load clients.";
        this.loading = false;
      }
    });
  }

  viewClientDetails(clientId: number): void {
    this.router.navigate(['/clients', clientId]);
  }

  deleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe({
      next: () => {
        this.clients = this.clients.filter(client => client.codeClient !== clientId);
      },
      error: () => {
        this.error = "Failed to delete the client.";
      }
    });
  }
  
}
