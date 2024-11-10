import { Employe } from './employe.model';

export interface Groupe {
  codeGroupe: number;
  nomGroupe: string;
  employe?: Employe[]; // Liste des employés dans le groupe
}
