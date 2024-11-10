// app.routes.ts
import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { EmployesListComponent } from './components/employes-list/employes-list.component';


export const routes: Routes = [
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  }, // Default route

  {
    path: 'employe',
    component: EmployesListComponent
  },
];
