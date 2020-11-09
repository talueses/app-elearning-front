import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any;

  constructor(private router: Router) {
  }


  ngOnInit(): void {

    this.course = {
      Id_Course: 1,
      Title_Course: 'MEDIDAS PREVENTIVAS CONTRA EL CORONAVIRUS',
      Teacher_Course: 'OMAR VILLALOBOS',
      Description_Course: 'ABC',
      Entrance_Exam: {
        Id_Exam: 3
      },
      Learnings_Course: [
        {
          Id_Learning: 1,
          Name_Learning: 'CONOCIENDO EL VIRUS',
          Description_Learning: 'El objetivo de esta unidad es reforzar los principales terminos de los principios activos',
          Sessions_Learning: [
            {
              Id_Sesion: 1,
              Title_Sesion: 'TEORIA DEL NUEVO VIRUS',
              Description_Sesion: 'El objetivo de esta sección es consolidar los principales conceptos de esta pandemia y como poder prevenir al máximo la enfermedad',
              Materials_Session: [
                {
                  Name_Material: 'Google',
                  Route_Material: 'https://www.google.com/'
                },
                {
                  Name_Material: 'youtube',
                  Route_Material: 'https://www.youtube.com/'
                }
              ],
              Session_Exam: {
                Id_Exam: 1
              }
            },
            {
              Id_Sesion: 3,
              Title_Sesion: 'TEORIA DEL NUEVO VIRUS 3',
              Description_Sesion: 'El objetivo de esta sección es consolidar los principales conceptos de esta pandemia y como poder prevenir al máximo la enfermedad',
              Materials_Session: [
                {
                  Name_Material: 'Google 3',
                  Route_Material: 'https://www.google.com/'
                },
                {
                  Name_Material: 'youtube 3',
                  Route_Material: 'https://www.youtube.com/'
                }
              ],
              Session_Exam: {
                Id_Exam: 5
              }
            }
          ]
        },
        {
          Id_Learning: 2,
          Name_Learning: 'CONOCIENDO EL VIRUS 2',
          Description_Learning: 'El objetivo de esta unidad es reforzar los principales terminos de los principios activos',
          Sessions_Learning: [
            {
              Id_Sesion: 2,
              Title_Sesion: 'TEORIA DEL NUEVO VIRUS 2',
              Description_Sesion: 'El objetivo de esta sección es consolidar los principales conceptos de esta pandemia y como poder prevenir al máximo la enfermedad',
              Materials_Session: [
                {
                  Name_Material: 'Google 2',
                  Route_Material: 'https://www.google.com/'
                },
                {
                  Name_Material: 'youtube 2',
                  Route_Material: 'https://www.youtube.com/'
                }
              ],
              Session_Exam: {
                Id_Exam: 2
              }
            }
          ]
        }
      ],
      Final_Exam: {
        Id_Exam: 4
      }
    }

  }

  openExam(idExam) {
    this.router.navigate([`alumno/myCourses/${this.course.idCourse}/exam/${idExam}`]);
  }


}
