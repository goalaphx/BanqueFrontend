import { Compte } from './compte.model';

export interface CompteEpargne extends Compte {
  taux: number;
}
