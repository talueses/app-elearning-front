import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  form: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private activeRoute: ActivatedRoute,
      private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.params.token;
    if (this.token) {
      // this.usuarioService.getUsers()
      // .subscribe(
      //   res => {
      //     this.users = res['data']
      //     this.user = this.users.filter(user => user.id === this.id);
      //     this.form.patchValue(this.user);
      //   }
      // );
      console.log(this.token);
      this.form = this.formBuilder.group(
        {
          new_pw: ['', [Validators.required, Validators.minLength(7)]],
          confirm_pw: ['', Validators.required]
        },
        {
          validator: ConfirmPasswordValidator('new_pw', 'confirm_pw')
        }
      );
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const password = this.form.value.new_pw;
    this.authenticationService.updatePassword(password, this.token)
    .subscribe(
      res => {
        this.toastr.success(res.message);
        // this.updatePassword(password);
      },
      err => {
        this.toastr.error(err);
        this.form.reset();
      }
    );
  }

  // updatePassword(password: string): any {
  //   this.authenticationService.updatePassword(password, this.token)
  //   .subscribe(
  //     res => {

  //       this.toastr.success(res.message);
  //     },
  //     err => {
  //       console.log(err);
  //       this.toastr.error(err);
  //     }
  //   );
  // }

  goBack() {
    // this.location.back();
    this.authenticationService.logout('alumno');
  }

}
