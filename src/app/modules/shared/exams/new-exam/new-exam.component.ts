import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent implements OnInit {

  formExam: FormGroup;
  typeExam : string;

  Questions_Exam : any = [
    {
      Description_Question : 'Pregunta 01',
      Options_Question : [
        {
          Description_Option : 'A',
          Score_Option : 5
        },
        {
          Description_Option : 'A',
          Score_Option : 5
        },
        {
          Description_Option : 'A',
          Score_Option : 5
        },
        {
          Description_Option : 'A',
          Score_Option : 5
        }
      ]
    },
    {
      Description_Question : 'Pregunta 02',
      Options_Question : [
        {
          Description_Option : 'A',
          Score_Option : 5
        },
        {
          Description_Option : 'A',
          Score_Option : 5
        },
        {
          Description_Option : 'A',
          Score_Option : 5
        },
      ]
    }
  ];

  constructor(public fb: FormBuilder,private route:ActivatedRoute,private location: Location) {
    this.formExam = this.fb.group({
      Course_Exam: ['', [Validators.required]],
      Teacher_Course: ['', [Validators.required]],
      Question_Exam: this.fb.group({
        Description_Question: [''],
        Options_Question: this.fb.array([])
      }),
      Is_Time_Limited : ['',[Validators.required]],
      Time_Limited : ['',[Validators.required]],
      Is_Weight_Considered : ['',[Validators.required]],
      Weight_Considered : ['',[Validators.required]],
      Is_Question_Minimum : [false,[Validators.required]],
      Questions_Correct : ['',[Validators.required]],
      Is_Higher_Score : [false,[Validators.required]],
      Higher_Score : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.typeExam = this.route.snapshot.paramMap.get('typeexam');
    console.log(this.typeExam);
    this.initOptions();
  }

  options(): FormArray {
    return this.formExam.get("Question_Exam")['controls']['Options_Question'] as FormArray
  }

  newOption(): FormGroup {
    return this.fb.group({
      Description_Option: [''],
      Score_Option: ['']
    })
  }

  initOptions() {
    for (let index = 5; index > 0; index--) {
      let options = this.formExam.get("Question_Exam")['controls']['Options_Question'] as FormArray;
      options.push(this.newOption());
    }
  }

  deleteOption(i) {
    let options = this.formExam.get("Question_Exam")['controls']['Options_Question'] as FormArray;
    options.removeAt(i);
  }

  getValue(){
    console.log(this.formExam.value);
  }

  goBack(){
    this.location.back();
  }

  editQuestion(i){
    var question = this.Questions_Exam[i];
    this.formExam['controls']['Question_Exam'].patchValue(question); 
  }

  deleteQuestion(i){
    this.formExam.get('Question_Exam').reset();
    this.Questions_Exam.splice(i,1);
  }
  addQuestion(){
    var question = this.formExam.get('Question_Exam').value;
    this.Questions_Exam.push(question);
    this.formExam.get('Question_Exam').reset();
  }

}
