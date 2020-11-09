import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { Location } from '@angular/common';
import { ConfirmPasswordValidator } from '../reset-password/confirm-password.validator';
import { UsuarioService } from '@app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pw-change',
  templateUrl: './pw-change.component.html',
  styleUrls: ['./pw-change.component.css']
})
export class PwChangeComponent implements OnInit {

  form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UsuarioService,
        private toastr: ToastrService,
        private location: Location
    ){}


  ngOnInit(): void{
    this.form = this.formBuilder.group(
      {
        current_pw: ['', Validators.required],
        new_pw: ['', [Validators.required, Validators.minLength(7)]],
        confirm_pw: ['', Validators.required]
      },
      {
        validator: ConfirmPasswordValidator('new_pw', 'confirm_pw')
      }
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.form.value.new_pw);
    this.updateFirstPassword();
  }

  updateFirstPassword(): void {
    this.userService.updateFirstPassword(this.authenticationService.user.id.toString(), this.form.value.current_pw, this.form.value.new_pw)
    .subscribe(
      res => {
        this.toastr.success('Inicie sesión nuevamente.');
        this.toastr.success(res.message);
        this.exit();
      },
      err => {
        this.toastr.error(err);
        this.form.reset();
      }
    );
  }

  exit() {
    // this.location.back();
    if (this.authenticationService.user.role === '4'){
      this.authenticationService.logout('alumno');
    }
    else{
      this.authenticationService.logout();
    }
  }

}
