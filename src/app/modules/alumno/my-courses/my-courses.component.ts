import { Component, OnInit } from '@angular/core';
import { CursoService } from './../../../services/curso.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private cursoService:CursoService) { }

  courses : any = [];
  p:number = 0;

  ngOnInit(): void {
    //formato de dato
    
    this.courses = [
      {
        id: 1,
        nombre: 'COVID-19 - Prevención y Cuidados',
        avance: '70%',
        docente: 'Ruben Dario'
      },
      {
        id: 2,
        nombre: 'ética y Responsabilidad - Habilidades Blandas',
        avance: '0%',
        docente: 'Ruben Dario'
      },
      {
        id: 3,
        nombre: 'Liderazgo y Dirección de Proyectos',
        avance: '50%',
        docente: 'Maribel Galvez'
      }
    ];

    //this.getMyCourses();

  }

  getMyCourses(){
    //obtner el id del usuario logueado
    var idUsuario = 1;
    this.cursoService.getMyCursos(idUsuario).subscribe(
      res => {
        this.courses = res;
      },
      err => console.error(err)
    );

  }

}
