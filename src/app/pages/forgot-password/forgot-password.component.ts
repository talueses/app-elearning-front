import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit  {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationservice: AuthenticationService,
    private route: Router,
    private location: Location,
    private toastr: ToastrService
    ) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      Email_User: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      recaptcha: ['']
    });
  }
  get f() { return this.form.controls; }
  onReset() {
    const email = this.f.Email_User.value;
    if (this.f.Email_User.valid){
      this.authenticationservice.passwordResetToken(email)
      .subscribe(
        res => {
          this.toastr.success(res.message);
          this.goBack();
        },
        err => {
          this.toastr.error(err);
        }
      );
    }
  }
  goBack() {
    this.location.back();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

}
