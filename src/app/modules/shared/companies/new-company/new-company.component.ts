import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  companyForm: FormGroup;
  id: string;

  constructor(
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {
    this.companyForm = this.formBuilder.group({
      RUC_Company: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(11), Validators.maxLength(11)]],
      Name_Company: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
      Address_Company: ['', Validators.required],
      contactCompanyForm: this.formBuilder.group({
        Email_User: ['', [Validators.required, Validators.email]],
        Password_User: ['', Validators.required],
        Nombres_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
        ApMaterno_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
        ApPaterno_User: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑÁÉÍÓÚáéíóú ]+$')]],
        Celular_User: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9), Validators.maxLength(9)]],
      })
    });
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
  }
  submit(){
    console.log(this.companyForm.value);
  }
  goback() {
    this.location.back();
  }

}
