// app.routes.ts
import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompteListComponent } from './components/compte-list/compte-list.component';
import { EmployesListComponent } from './employes-list/employes-list.component';


export const routes: Routes = [
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: '',
    redirectTo: 'comptes',
    pathMatch: 'full'
  }, // Default route

  {
    path: 'employe',
    component: EmployesListComponent
  },
  {
    path: 'comptes',
    component: CompteListComponent
  },
];
