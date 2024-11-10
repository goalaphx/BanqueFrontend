import { Client } from './client.model';
import { Employe } from './employe.model';
import { Operation } from './operation.model';

export interface Compte {
  codeCompte: string;
  dateCreation: Date;
  solde: number;
  client: Client;
  employe: Employe;
  operations?: Operation[]; // Liste d'opérations associées
}
