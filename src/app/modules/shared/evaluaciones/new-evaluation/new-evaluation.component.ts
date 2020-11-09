import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-evaluation',
  templateUrl: './new-evaluation.component.html',
  styleUrls: ['./new-evaluation.component.css']
})
export class NewEvaluationComponent implements OnInit {

  formEvaluation : FormGroup;

  evaluations : any = [];

  constructor(public fb:FormBuilder) { 
    this.formEvaluation = this.fb.group({
      searchData : this.fb.group({
        courseSearch : ['',[Validators.required]],
        studentSearch : ['',[Validators.required]]
      }),
      scoreStudent : this.fb.group({
        weightScore : ['',[Validators.required]],
        gradeScore : ['',[Validators.required]]
      })
    })
  }

  ngOnInit(): void {

    this.evaluations = [
      {
        code : "100",
        student : "JUAN PEREZ",
        entrance : 15,
        sesion_1 : 15,
        sesion_2 : 15,
        sesion_5 : 15,
        final : 15,
        na_1 : 15,
        na_2 : 15
      },
      {
        code : "200",
        student : "JUAN PEREZ",
        entrance : 15,
        sesion_1 : 15,
        sesion_2 : 15,
        sesion_5 : 15,
        final : 15,
        na_1 : 15,
        na_2 : 15
      },
      {
        code : "300",
        student : "JUAN PEREZ",
        entrance : 15,
        sesion_1 : 15,
        sesion_2 : 15,
        sesion_5 : 15,
        final : 15,
        na_1 : 15,
        na_2 : 15
      },
      {
        code : "400",
        student : "JUAN PEREZ",
        entrance : 15,
        sesion_1 : 15,
        sesion_2 : 15,
        sesion_5 : 15,
        final : 15,
        na_1 : 15,
        na_2 : 15
      }
    ]
  }

  get f () { return this.formEvaluation.controls; }

}
