import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from '@app/services/switch.service';
import { UsuarioService } from '@app/services/usuario.service';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-programa-profesional',
  templateUrl: './programa-profesional.component.html',
  styleUrls: ['./programa-profesional.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramaProfesionalComponent implements OnInit {
  idUsuario: boolean = false;
  aprobado: number = -1;
  tituloBoton: string = 'Matricúlate aquí';

  mostrar: boolean = true;
  modalRegistro: boolean = false;

  constructor(
    private router: Router,
    private switchService: SwitchService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.switchService.$nav.subscribe((valor) => {
      this.mostrar = valor;
    });
    this.switchService.$modalMatricula.subscribe((valor2) => {
      this.modalRegistro = valor2;
    });
    this.switchService.$aprobado.subscribe((valor3)=>{this.aprobado = valor3});
    //this.listarPostula();
  }

  // openMatricula() {
  //   this.listarPostula();
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     if (this.aprobado == 0) {
  //       Swal.fire(
  //         'Información',
  //         'Tu postulación esta pendiente de aprobación',
  //         'info'
  //       );
  //     } else if (this.aprobado == 1) {
  //       window.open("https://unacemcantera.com.pe/login_alumno");
  //     } else {
  //       this.modalRegistro = true;
  //     }
  //   } else {
  //     this.switchService.$modalLogin.emit(true);
  //   }
  // }

  // listarPostula() {
  //   let token = localStorage.getItem('token') || null;
  //   this.usuarioService.getPostula(token).subscribe((resp: any) => {
  //     if (resp.success == true) {
  //       this.aprobado = resp.data.aprobado;
  //       this.tituloBoton =
  //         this.aprobado == 0
  //           ? 'Matricúlate aquí'
  //           : 'Ingresa Alumno';
  //     } else {
  //       this.aprobado = -1;
  //     }
  //   });
  // }

  openMatricula(){
    this.modalRegistro = true;
  }

}
