import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '@app/services/usuario.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: any = [];
  p: number = 0;
  filterUser = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {}
  // decoded() {
  //   const token = localStorage.getItem('token');
  //   const data = jwt_decode(token);
  //   console.log(data);
  // }
  ngOnInit(): void {
    // this.decoded();
    this.getUsers();
  }

  getUsers(): void {
    this.usuarioService.getUsers()
    .subscribe(
      res => {
        this.users = res['data']
      }
    );
  }

  deleteUser(id: string): void {
    Swal.fire({
      icon: 'warning',
      title: '¿Seguro que quieres eliminar este usuario?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.deleteUser(id)
        .subscribe(
          res => {
            this.toastr.success(res.message);
            this.getUsers();
          },
          err => {
            this.toastr.error(err);
          }
        );
      }
    });
  }

}
