import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  courseForm : FormGroup;
  learningIncorrect : boolean = true;

  Learnings_Course : any = [
    {
      id : 1
    }
  ];
  Sesions_Course : any = [
    {
      id : 1
    }
  ];
  Materials_Course : any = [
    {
      id : 1
    }
  ];

  constructor(public fb:FormBuilder,private location: Location) {
    this.courseForm = this.fb.group({
      Title_Course : ['',[Validators.required]],
      Description_Course : ['',[Validators.required]],
      Teacher_Course : ['',[Validators.required]],
      Entrance_Exam : [false],
      Final_Exam : [false],
      Learning_Course : this.fb.group({
        Id_Learning : [''],
        Title_Learning : ['',[Validators.required]],
        Description_Learning : ['',[Validators.required]]
      }),
      Sesion_Course : this.fb.group({
        Id_Sesion : [''],
        Title_Sesion : ['',[Validators.required]],
        Description_Sesion : ['',[Validators.required]],
        Exam_Sesion : [false],
        Id_Learning : ['']
      }),
      Material_Course : this.fb.group({
        Id_Material : [''],
        Name_Material : ['',[Validators.required]],
        Route_Material : ['',[Validators.required]],
        Id_Sesion : ['']
      })
    })
  }

  ngOnInit(): void {
    console.log(this.courseForm.controls);
  }

  get f() { return this.courseForm.controls; }

  goBack(){
    this.location.back();
  }

  addLearning(){
    this.Learnings_Course.push(this.courseForm.get('Learning_Course').value);
    this.courseForm.get('Learning_Course').reset();
  }

  editLearning(i){
    var learning = this.Learnings_Course[i];
    this.courseForm['controls']['Learning_Course'].patchValue(learning); 
  }

  

}
