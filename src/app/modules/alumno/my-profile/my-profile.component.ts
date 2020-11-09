import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfile:FormGroup;

  constructor(public fb:FormBuilder) { 
    this.myProfile = this.fb.group({
      perfilAlumno : [{value : '',disabled : true},[Validators.required]],
      usuarioAlumno : [{value : '',disabled : true},[Validators.required]],
      passwordAlumno : ['',[Validators.required]],
      nombreAlumno : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      paternoAlumno : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      maternoAlumno : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      celularAlumno : ['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('^[0-9]+$')]],
      direccionAlumno : ['',[Validators.required]],
      nacimientoAlumno : ['',[Validators.required]],
      dniAlumno : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]]
    });
  }

  ngOnInit(): void {
  }

}
