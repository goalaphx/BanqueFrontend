import { Groupe } from './groupe.model';

export interface Employe {
  codeEmploye: number;
  nomEmploye: string;
  employeSup?: Employe; // Employé superviseur
  groupes?: Groupe[]; // Groupes associés
}
