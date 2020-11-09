import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CertificateService } from '@app/services/certificate.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router:Router,private certificateService:CertificateService) { }

  exam : any ;

  ngOnInit(): void {
    
    this.exam = {
      Id_Exam : 1,
      Type_Exam : 3,
      Id_Course : 2,
      Id_Student : 2,
      Teacher_Course : 'OMAR VILLALOBOS',
      Title_Course : 'MEDIDAS PREVENTIVAS CONTRA EL CORONAVIRUS',
      Student_Course : 'JUAN PEREZ',
      Correct_Questions : 17,
      Incorrect_Questions : 3,
      Time_Total : '12:05',
      Passed_Exam : true,
      Passed_Course : true,
    }

  }

  createCertificate(){
    let certificate : any ;
    this.certificateService.createCertificate(certificate);
  }

}
