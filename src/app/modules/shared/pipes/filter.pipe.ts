import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') { return value; }
    const resultUsers = [];
    for (const user of value) {
      // if (user.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      //   resultUsers.push(user);
      // }
      // if (user.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      //   resultUsers.push(user);
      // }
      if (user.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || user.lastname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUsers.push(user);
      }
      // if (user.lastname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      //   resultUsers.push(user);
      // }
    }
    return resultUsers;
  }

}
