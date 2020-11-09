import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-footer-exam',
  templateUrl: './footer-exam.component.html',
  styleUrls: ['./footer-exam.component.css']
})
export class FooterExamComponent implements OnInit {

  @Input() typeExam : string;
  formExam : FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.formExam = <FormGroup>this.controlContainer.control;
  }

}
