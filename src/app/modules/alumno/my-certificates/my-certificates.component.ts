import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../../../services/certificate.service';

@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {

  p:number = 0;

  certificates : any = [];

  constructor(private certificateService:CertificateService) { }

  ngOnInit(): void {
    this.certificates = [
      {
        id : 1,
        certificado: 'Curso COVID-19'
      },
      {
        id : 2,
        certificado: 'Curso Ética y Responsabilidad'
      },
      {
        id : 3,
        certificado: 'Curso Habilidades Blandas'
      }
    ];
  }

  openPDF(certificate){
    
    this.certificateService.createCertificate(certificate);

  }

}
