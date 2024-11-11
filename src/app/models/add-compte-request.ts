export interface AddCompteRequest {
  solde: number;
  clientId: number;
  employeeId: number;
  type?:"CC"|"CE";
  var?: number;
}
