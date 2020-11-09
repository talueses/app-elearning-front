import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    user: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastr: ToastrService
    ){
        this.updatePassword();
    }

ngOnInit(){
    this.loginForm = this.formBuilder.group({
    Email_User: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    Password_User: ['', Validators.required]
});
}

get f() { return this.loginForm.controls; }

onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
        this.loading = true;
        this.authenticationService.loginAdmin(this.f.Email_User.value, this.f.Password_User.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    switch (this.authenticationService.user.role) {
                        case '0':
                            this.router.navigateByUrl('/administracion');
                            break;
                        case '1':
                            this.router.navigateByUrl('/administrador');
                            break;
                        case '2':
                            this.router.navigateByUrl('/coordinador');
                            break;
                        case '3':
                            this.router.navigateByUrl('/docente');
                            break;
                        // case '4':
                        //     this.authenticationService.logout('alumno');
                        //     break;
                        default:
                            break;
                    }
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
        if (!this.user.passwordUpdated){
            this.router.navigateByUrl('/pw-change');
        }
        else {
            switch (this.user.role) {
                case '0':
                    this.router.navigateByUrl('/administracion');
                    break;
                case '1':
                    this.router.navigateByUrl('/administrador');
                    break;
                case '2':
                    this.router.navigateByUrl('/coordinador');
                    break;
                case '3':
                    this.router.navigateByUrl('/docente');
                    break;
                default:
                    // this.authenticationService.logout();
                    break;
            }
        }
    }
}

}
