import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';
import { UsuarioService } from '@app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myProfile:FormGroup;
  perfilUsers: any = [];
  constructor(
    public fb: FormBuilder,
    private usuarioService: UsuarioService,
    private auth: AuthenticationService,
    private toastr: ToastrService
    ) {
    this.myProfile = this.fb.group({
      perfilGeneral : [{value : '',disabled : true},[Validators.required]],
      emailGeneral : [{value : '',disabled : true},[Validators.required]],
      nombresGeneral : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      paternoGeneral : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      maternoGeneral : ['',[Validators.required,Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      celularGeneral : ['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(9)]],
      dniGeneral : ['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(8)]],
      // passwordGeneral : ['',[Validators.required,]],
      direccionGeneral : ['',[Validators.required,]],
      nacimientoGeneral : ['',[Validators.required,]]
    });
   }

  ngOnInit(): void {
    this.myProfile.controls.perfilGeneral.setValue(this.auth.user.role);
    this.myProfile.controls.nombresGeneral.setValue(this.auth.user.name);
    this.myProfile.controls.paternoGeneral.setValue(this.auth.user.lastname.split(' ')[0]);
    this.myProfile.controls.maternoGeneral.setValue(this.auth.user.lastname.split(' ')[1]);
    this.myProfile.controls.celularGeneral.setValue(this.auth.user.phone);
    this.myProfile.controls.dniGeneral.setValue(this.auth.user.idNumber);
    this.myProfile.controls.emailGeneral.setValue(this.auth.user.email);
    this.myProfile.controls.direccionGeneral.setValue(this.auth.user.address);
    this.myProfile.controls.nacimientoGeneral.setValue(this.auth.user.birthday);
    this.perfilUsers = [
      {
        id: 0,
        nombre: 'administrador general'
      },
      {
        id: 1,
        nombre: 'administrador'
      },
      {
        id: 2,
        nombre: 'coordinador'
      },
      {
        id: 3,
        nombre: 'docente'
      },
      {
        id: 4,
        nombre: 'alumno'
      }
    ];
  }

  onSubmit(): void {
    const dataForm =
      {
        id: this.auth.user.id,
        email: this.auth.user.email,
        name: this.myProfile.value.nombresGeneral,
        phone: this.myProfile.value.celularGeneral,
        idNumber: this.myProfile.value.dniGeneral,
        lastname: `${this.myProfile.value.paternoGeneral} ${this.myProfile.value.maternoGeneral}`,
        // password: this.myProfile.value.passwordGeneral,
        // role: this.myProfile.value.perfilGeneral,
        address: this.myProfile.value.direccionGeneral,
        birthday: this.myProfile.value.nacimientoGeneral,

      };
    this.usuarioService.updateProfile(dataForm)
    .subscribe(
      res => {
        if (this.auth.user.role === '4') {
          this.auth.logout('alumno');
        }else {
          this.auth.logout();
        }
        this.toastr.success('Por favor inicie sesión nuevamente.');
        this.toastr.success(res.message);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

}
