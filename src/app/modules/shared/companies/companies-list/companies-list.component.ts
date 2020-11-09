import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  filterCompany = '';
  p: number = 0;
  companies: any = [];
  constructor() { }

  ngOnInit(): void {
    this.companies = [
      {
        id: 1,
        nombres: 'Omar',
        apellidos: 'Villalobos',
        celular: '902342349',
        email: 'ovillalobos@gmail.com'
      },
      {
        id: 2,
        nombres: 'David',
        apellidos: 'Villalobos',
        celular: '902342349',
        email: 'dvillalobos@gmail.com'
      },
      {
        id: 3,
        nombres: 'Pedro',
        apellidos: 'Páramo',
        celular: '902342349',
        email: 'pparamo@gmail.com'
      },
      {
        id: 4,
        nombres: 'Omar',
        apellidos: 'Villalobos',
        celular: '902342349',
        email: 'ovillalobos@gmail.com'
      },
      {
        id: 5,
        nombres: 'David',
        apellidos: 'Villalobos',
        perfil: 'admin',
        email: 'dvillalobos@gmail.com'
      },
      {
        id: 6,
        nombres: 'Pedro',
        apellidos: 'Páramo',
        perfil: 'coordinador',
        email: 'pparamo@gmail.com'
      },
      {
        id: 7,
        nombres: 'Omar',
        apellidos: 'Villalobos',
        perfil: 'admin',
        email: 'ovillalobos@gmail.com'
      },
      {
        id: 8,
        nombres: 'David',
        apellidos: 'Villalobos',
        perfil: 'admin',
        email: 'dvillalobos@gmail.com'
      },
      {
        id: 9,
        nombres: 'Pedro',
        apellidos: 'Páramo',
        perfil: 'coordinador',
        email: 'pparamo@gmail.com'
      },
      {
        id: 10,
        nombres: 'Omar',
        apellidos: 'Villalobos',
        perfil: 'admin',
        email: 'ovillalobos@gmail.com'
      },
      {
        id: 11,
        nombres: 'David',
        apellidos: 'Villalobos',
        perfil: 'admin',
        email: 'dvillalobos@gmail.com'
      },
      {
        id: 12,
        nombres: 'Pedro',
        apellidos: 'Páramo',
        perfil: 'coordinador',
        email: 'pparamo@gmail.com'
      }
    ];
  }

}
