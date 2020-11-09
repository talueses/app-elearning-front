import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() typeUser: string;
  @Input() nav: string;
  @Input() link: string;

  navs: any = [];
  links: any = [];
  data: any = [];
  rol = '';
  urlModule: string;
  constructor(
    private auth: AuthenticationService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.data = this.auth.user;
    this.urlModule = this.router.url;
  }

  ngOnInit(): void {
    this.navs = this.nav.split('|');
    this.links = this.link.split('|');
    this.getRol();
  }

  getRol(): void {
    if (this.data) {
      switch (this.data.role){
        case '0' : {
          this.rol = 'Administrador General';
          break;
        }
        case '1': {
          this.rol = 'Administrador';
          break;
        }
        case '2': {
          this.rol = 'Coordinador';
          break;
        }
        case '3': {
          this.rol = 'Docente';
          break;
        }
        case '4': {
          this.rol = 'Alumno';
          break;
        }
      }
    }
  }

  logout(): void {
    Swal.fire({
      icon: 'warning',
      title: '¿Seguro que quieres salir?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.urlModule === '/alumno'){
          this.auth.logout('alumno');
        }else{
          this.auth.logout();
        }
      }
    });
  }

}
