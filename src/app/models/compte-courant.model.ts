import { Compte } from './compte.model';

export interface CompteCourant extends Compte {
  decouvert: number;
}
