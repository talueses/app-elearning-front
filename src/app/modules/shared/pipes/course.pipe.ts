import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') { return value; }
    const resultCourses = [];
    for (const course of value) {
      if (course.curso.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCourses.push(course);
      }
      if (course.docente.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCourses.push(course);
      }
    }
    return resultCourses;
  }

}
