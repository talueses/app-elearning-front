import { Injectable } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }

  createCertificate(certificate:any){
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageOrientation('landscape');
    pdf.header('This is a header');
    pdf.add(new Txt('Hello world!').alignment('center').italics().end);
    
    pdf.footer('This is a footer');
    pdf.create().open()
  }
}
