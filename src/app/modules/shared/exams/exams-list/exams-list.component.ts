import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  constructor(private location: Location) { }

  exams =  {
    Entrance_Exam : {
      id : 1,
      descripcion : 'Examen de Entrada'
    },
    Learning_Exam : [
      {
        id : 1,
        descripcion : 'Unidad de Aprendizaje 01',
        Sesion_Exam : [
          {
            id : 1,
            descripcion : 'Sesión 01'
          },
          {
            id : 2,
            descripcion : 'Sesión 02'
          }
        ] 
      },
      {
        id : 2,
        descripcion : 'Unidad de Aprendizaje 03',
        Sesion_Exam : [
          {
            id : 1,
            descripcion : 'Sesión 06'
          }
        ]
      }
    ],
    Final_Exam : {
      id : 1,
      descripcion : 'Examen Final'
    }
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
