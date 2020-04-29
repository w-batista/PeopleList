import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: People[] = [
    {nome: 'Amaro', cpf: '40534598009', rg: '852356708', email: 'amaro@amaro.com', telefone: '1125503456', data_nasc: '01121976'},
    {nome: 'Benjamin', cpf: '00298712301', rg: '423457501', email: 'benjamin@benjamin.com', telefone: '4534570000', data_nasc: '23051981'},
    {nome: 'Carlos', cpf: '34500036576', rg: '392909112', email: 'carlos@carlos.com', telefone: '3250452020', data_nasc: '01012000'},
    {nome: 'Delfim', cpf: '876534123790', rg: '124526790', email: 'delfim@delfim.com', telefone: '1232456075', data_nasc: '10101980'},
    {nome: 'Eliomar', cpf: '39174609325', rg: '19340695x', email: 'eliomar@eliomar.com', telefone: '1140041515', data_nasc: '28021967'},
    {nome: 'Francisca', cpf: '47623098112', rg: '084389822', email: 'francisca@francisca.com', telefone: '3123309090', data_nasc: '09071990'}
  ];

  getPeople() {
    return this.people;
  }
  addPerson(person: People) :People[]{
    this.people.push(person);
    return this.people;
  }
  constructor() { }
}
