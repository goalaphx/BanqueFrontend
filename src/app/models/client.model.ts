import { Compte } from './compte.model';

export interface Client {
  codeClient: number;
  nomClient: string;
  comptes?: Compte[]; // Liste de comptes associés au client
  
}
