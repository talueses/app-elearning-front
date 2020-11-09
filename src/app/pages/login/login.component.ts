import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '@app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    user: User;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastr: ToastrService
    ){
        this.updatePassword();
    }

ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    Email_User: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    Password_User: ['', Validators.required]
    });
}

get f(): any { return this.loginForm.controls; }

onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.login(this.f.Email_User.value, this.f.Password_User.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/alumno');
                    this.loading = false;
                },
                error: error => {
                    this.toastr.error(error);
                    this.loginForm.reset();
                    this.loading = false;
                }
            });
    }
    else{
        console.log('form invalid');
    }
}

updatePassword(): void{
    this.user = this.authenticationService.user;
    if (this.user){
        if (this.user.role === '4'){
            if (this.user.passwordUpdated){
                this.router.navigateByUrl('/pw-change');
            }
            else {
                this.router.navigateByUrl('/alumno');
            }
        }
    }
}

}
