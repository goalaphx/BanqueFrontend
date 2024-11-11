// app.routes.ts
import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompteListComponent } from './components/compte-list/compte-list.component';
import { EmployesListComponent } from './components/employes-list/employes-list.component';
import { GroupListComponent } from './components/groupe-list/groupe-list.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, // Default route

  {
    path: 'employe',
    component: EmployesListComponent
  },

  {
    path: 'groupes',
    component: GroupListComponent
  },
  {
    path: 'comptes',
    component: CompteListComponent
  },
  {
    path: 'operations',
    component: OperationListComponent
  },
];
