import { Component, OnInit } from '@angular/core';
import { ChartType,ChartOptions } from 'chart.js';
import { SingleDataSet, Label,monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-resume-course',
  templateUrl: './resume-course.component.html',
  styleUrls: ['./resume-course.component.css']
})
export class ResumeCourseComponent implements OnInit {

  resume = {
    'inscritos': 23,
    'terminaron': 22,
    'pendientes': 1,
    'aprobados': 20,
    'desaprobados': 3
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public resumeOneLabels: Label[] = ['Aprobados','Desaprobados'];
  public resumeOnetData: SingleDataSet = [this.resume.aprobados,this.resume.desaprobados];
  public resumeTwoLabels: Label[] = ['Terminaron','Pendientes'];
  public resumeTwotData: SingleDataSet = [this.resume.terminaron,this.resume.pendientes];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(00,97,127)', 'rgba(29,29,27)'],
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
