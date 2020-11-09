import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : any = [];
  p: number = 0;
  filterCourse = '';

  constructor() { }

  ngOnInit(): void {

    this.courses = [
      {
        id : 1,
        curso : 'Coronavirus',
        docente : 'Juan Lopez',
        estado : 'A',
        inicio : '01/03/2020',
        matriculados : 45,
        progreso : 23
      },
      {
        id : 2,
        curso : 'Habilidades Blandas',
        docente : 'Pancho Fierro',
        estado : 'A',
        inicio : '01/05/2020',
        matriculados : 85,
        progreso : 12
      },
      {
        id : 3,
        curso : 'Redes y 5G',
        docente : 'Juan Lopez',
        estado : 'A',
        inicio : '01/04/2020',
        matriculados : 13,
        progreso : 0
      },
    ];

  }

}
