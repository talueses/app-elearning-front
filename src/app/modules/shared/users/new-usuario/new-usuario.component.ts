import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsuarioService } from '../../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {
  form: FormGroup;
  perfilUsers = [];
  id: string;
  users: any [];
  user: any [];
  maxDate: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      Perfil_User: ['', [Validators.required]],
      Nombres_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      ApMaterno_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      ApPaterno_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      Celular_User: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9)]],
      DNI_User: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8)]],
      Email_User: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      Address_User: ['', [Validators.required]],
      Birthday_User: ['', [Validators.required]]
    });
    this.maxDate = new Date().toISOString();
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    if (this.id) {
      this.usuarioService.getUser(this.id)
      .subscribe(
        res => {
          this.form.controls['Perfil_User'].setValue(res.data.role);
          this.form.controls['Nombres_User'].setValue(res.data.name);
          this.form.controls['ApPaterno_User'].setValue(res.data.lastname.split(' ')[0]);
          this.form.controls['ApMaterno_User'].setValue(res.data.lastname.split(' ')[1]);
          this.form.controls['Celular_User'].setValue(res.data.phone);
          this.form.controls['DNI_User'].setValue(res.data.idNumber);
          this.form.controls['Email_User'].setValue(res.data.email);
          this.form.controls['Address_User'].setValue(res.data.address);
          this.form.controls['Birthday_User'].setValue(res.data.birthday);
        },
        err => {
          this.toastr.error(err);
        }
      );
    }
    console.log(this.router.url);

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
    // this.usuarioService.getUsers();
    // this.usuarioService.getUsers()
    // .subscribe(perfiles => {
    //   this.perfilUsers = perfiles;
    // })
  }

  submit(): void {
    const dataForm =
      {
        email: this.form.value['Email_User'],
        name: this.form.value['Nombres_User'],
        phone: this.form.value['Celular_User'],
        idNumber: this.form.value['DNI_User'],
        lastname: `${this.form.value['ApPaterno_User']} ${this.form.value['ApMaterno_User']}`,
        password: this.form.value['DNI_User'],
        role: this.form.value['Perfil_User'],
        address: this.form.value['Address_User'],
        birthday: this.form.value['Birthday_User'],

      };
    if (this.id) {
      const profile =
      {
        id: parseInt(this.id),
        email: this.form.value['Email_User'],
        name: this.form.value['Nombres_User'],
        phone: this.form.value['Celular_User'],
        idNumber: this.form.value['DNI_User'],
        lastname: `${this.form.value['ApPaterno_User']} ${this.form.value['ApMaterno_User']}`,
        password: this.form.value['DNI_User'],
        role: this.form.value['Perfil_User'],
        address: this.form.value['Address_User'],
        birthday: this.form.value['Birthday_User'],

      };
      this.usuarioService.updateProfile(profile)
      .subscribe(
        res => {
          this.toastr.success(res.message);
          this.goback();
        },
        err => {
          this.toastr.error(err);
        }
      );
    }
    else{
      this.usuarioService.createUser(dataForm)
      .subscribe(
        res  => {
          this.toastr.success(res.message);
          this.goback();
        },
        err => {
          this.toastr.error(err);
          console.log(err);
        }
      );
    }
    // this.router.navigateByUrl('admin/usuarios');
  }

  goback() {
    this.location.back();
  }

}
