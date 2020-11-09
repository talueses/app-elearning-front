import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.css']
})
export class MyExamComponent implements OnInit {

  group: FormGroup;
  config: any;
  dateExam = new Date();

  formularioControl = {
    questionVisible: false,
    timeVisible: false,
    loading: false
  }

  exam = {
    idExam: 1,
    idCourse : 2,
    tituleExam: 'MEDIDAS PREVENTIVAS CONTRA EL CORONAVIRUS',
    descriptionExam: '',
    typeExam: 1,
    timeExam: 10,
    teacherCourse: 'Omar Villalobos',
    timeLimited: 'S',
    affectGrade: 'S',
    weightExam: '30%',
    scoreToPass: 14,
    questions: [
      {
        idQuestion: 1,
        descriptionQuestion: '¿Cuáles son los principales sintomas del COVID-19?',
        options: [
          {
            idOption: 1,
            descriptionOption: 'Stress',
            scoreOption: 0
          },
          {
            idOption: 2,
            descriptionOption: 'Dolor de estómago',
            scoreOption: 0
          },
          {
            idOption: 3,
            descriptionOption: 'Decaimiento',
            scoreOption: 0
          },
          {
            idOption: 4,
            descriptionOption: 'Vómitos',
            scoreOption: 0
          },
          {
            idOption: 5,
            descriptionOption: 'Fiebre y dolor de garganta',
            scoreOption: 10
          }
        ]
      },
      {
        idQuestion: 2,
        descriptionQuestion: '¿Cuántos tipos de coronavirus existen?',
        options: [
          {
            idOption: 1,
            descriptionOption: '01',
            scoreOption: 0
          },
          {
            idOption: 2,
            descriptionOption: '02',
            scoreOption: 0
          },
          {
            idOption: 3,
            descriptionOption: '03',
            scoreOption: 0
          }
          ,
          {
            idOption: 4,
            descriptionOption: '04',
            scoreOption: 0
          },
          {
            idOption: 5,
            descriptionOption: 'NA',
            scoreOption: 5
          }
        ]
      },
      {
        idQuestion: 2,
        descriptionQuestion: '¿De qué color es el sol?',
        options: [
          {
            idOption: 1,
            descriptionOption: 'Amarillo',
            scoreOption: 5
          },
          {
            idOption: 2,
            descriptionOption: 'Azul',
            scoreOption: 0
          },
          {
            idOption: 3,
            descriptionOption: 'Blanco',
            scoreOption: 0
          }
          ,
          {
            idOption: 4,
            descriptionOption: 'Verde',
            scoreOption: 0
          },
          {
            idOption: 5,
            descriptionOption: 'Rojo',
            scoreOption: 0
          }
        ]
      }
    ]
  }


  constructor(private location: Location, private fb: FormBuilder,private router:Router,private route:ActivatedRoute) {

    this.group = this.fb.group({
      idExam: [this.exam.idExam, [Validators.required]],
      idCourse : [this.exam.idCourse],
      percentExam: ['0', [Validators.required]],
      scoreExam: [null],
      correctQuestions: [null],
      incorrectQuestions: [null],
      passedExam: ['NO', [Validators.required]],
      timeOver: ['NO'],
      timeStarted : [0],
      timeFinished : [0],
      timeUsed : [0],
      questions: this.fb.array([])
    });

  }


  ngOnInit(): void {

    console.log(this.route.snapshot.params);

    if (this.exam.timeLimited === 'N') {
      this.formularioControl.questionVisible = true;
      this.config = {
        leftTime: this.exam.timeExam * 60,
        demand: true,
      }
    } else {
      this.formularioControl.timeVisible = true;
      this.config = {
        leftTime: this.exam.timeExam * 60,
        demand: true,
        notify: [this.exam.timeExam * 60 * 0.1]
      }
    }
    this.addControlQuestions();
  }



  questions(): FormArray {
    return this.group.get("questions") as FormArray
  }

  newQuestion(question): FormGroup {
    return this.fb.group({
      idQuestion: [question.idQuestion],
      scoreQuestion: this.getScoreQuestion(question),
      optionCorrect: this.getOptionCorrect(question),
      optionChosen: [null, [Validators.required]],
      scoreGotten: [null]
    })
  }

  getOptionCorrect(question) {
    var correctOption = 0;
    question.options.forEach(option => {
      if (option.scoreOption != 0) {
        correctOption = option.idOption;
      }
    });
    return [correctOption, Validators.required];
  }

  getScoreQuestion(question) {
    var scoreOption = 0;
    question.options.forEach(option => {
      if (option.scoreOption != 0) {
        scoreOption = option.scoreOption;
      }
    });
    return [scoreOption, Validators.required];
  }


  addControlQuestions() {
    this.exam.questions.forEach(question => {
      let questions = this.group.get("questions") as FormArray;
      questions.push(this.newQuestion(question));
    });
  }

  submitExam() {
    if (this.group.controls['timeOver'].value == 'NO') {
      Swal.fire({
        title: 'Aviso',
        text: "Estas seguro de finalizar el examen?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SÍ'
      }).then((result) => {
        if (result.isConfirmed) {
          this.waitTime();
        }
      })
    }
  }

  getResult() {
    this.formularioControl.loading = true;
    var time = parseFloat(''+(this.group.controls['timeStarted'].value - this.group.controls['timeFinished'].value)/1000/60).toFixed(2);
    this.group.controls['timeUsed'].setValue(time);
    this.getScore();
    this.router.navigate([`alumno/myCourses/${this.route.snapshot.params.idCourse}/exam/${this.route.snapshot.params.idExam}/resultado`]);
  }

  waitTime() {
    let timerInterval
    Swal.fire({
      icon: 'success',
      title: 'Examen Terminado!',
      html: 'Espere un momento mientras se procesa su resultado',
      timer: 3000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        this.getResult();
      }
    })
  }

  notify(event) {

    //When the countdown button is pressioned it notify an event.
    var action = event.action;

    switch (action) {
      case 'resume': {
        this.formularioControl.questionVisible = true;
        this.group.controls['timeStarted'].setValue(event.left);
        break;
      }
      case 'notify': {
        Swal.fire({
          icon: 'warning',
          title: 'Alerta...!!',
          html: 'Tienes <b>' + (event.left / 10000 / 60) + '</b> minutos para terminar tu examen.'
        });
        break;
      }
      case 'done': {
        if (this.exam.timeLimited === 'S') {
          this.formularioControl.questionVisible = false;
          this.formularioControl.loading = true;
          this.waitTime();
        }
        break;
      }
      case 'stop' : {
        this.group.controls['timeFinished'].setValue(event.left);
      }
    }
  }

  getScore() {
    var scoreExam = 0;
    var correctQuestions = 0;
    var incorrectQuestions = 0;
    let questions = this.group.get('questions').value;
    questions.forEach(question => {
      if (question.optionChosen == question.optionCorrect) {
        scoreExam = scoreExam + question.scoreQuestion;
        correctQuestions = correctQuestions + 1;
      } else {
        incorrectQuestions = incorrectQuestions + 1;
      }
    });
    this.group.controls['scoreExam'].setValue(scoreExam);
    this.group.controls['correctQuestions'].setValue(correctQuestions);
    this.group.controls['incorrectQuestions'].setValue(incorrectQuestions);
    if (scoreExam > this.exam.scoreToPass) {
      this.group.controls['passedExam'].setValue('SI');
    }

  }

  updateValuesForm(option, i) {
    //Update progress with the number of answered questions
    let options = this.group.get('questions').value;
    var size = options.length;
    var numberOfOptions = 0;
    options.forEach(option => {
      if (option.optionChosen != null) {
        numberOfOptions = numberOfOptions + 1;
      }
    });
    var percent = parseFloat('' + (numberOfOptions / size) * 100).toFixed(2);
    this.group.controls['percentExam'].setValue(percent);
    //Set the got value of a question with the score of the question
    this.group.controls['questions']['controls'][i]['controls']['scoreGotten'].setValue(option.scoreOption)
  }

  goBack() {
    this.location.back();
  }

}
