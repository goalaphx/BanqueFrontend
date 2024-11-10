import { Compte } from './compte.model';
import { Employe } from './employe.model';

export interface Operation {
  numeroOperation: number;
  dateOperation: Date;
  montant: number;
  compte: Compte;
  employe: Employe;
}
