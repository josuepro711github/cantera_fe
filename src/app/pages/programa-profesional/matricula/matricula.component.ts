import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwitchService } from '@app/services/switch.service';
import { IPostula } from '@app/models/IUsuario';
import axios from 'axios';
import { UsuarioService } from '@app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {

  aprobado!:number;
  idUsuario: string = "";
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  email: string = '';
  telefono: string = '';

  cerrar: boolean = true;
  modalMatricula: boolean = false;
  formMatricula!: FormGroup;

  nuevoPostula: IPostula = {
    nombres: "",
    apellidos: "",
    dni: "",
    email: "",
    celular: "",   
    telefono: "",
    ocupacion: "",
    ocupacion_otros: "",
    experiencia: "",
    aprobado: 0, 
    idUsuario: 0,
  }
  
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo
  token:any = localStorage.getItem('token') || null;

  constructor(private switchService: SwitchService,
              private router: Router,
              private usuarioService: UsuarioService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.token != null){
      this.listarUsuario();
    }
    this.formMatricula = this.fb.group({
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      dni: [null, Validators.required],
      email: [
        null,
        [Validators.required, Validators.pattern(this.correoPattern)],
      ],
      celular: [null, Validators.required],
      telefono: [null, Validators.required],
      ocupacion: [null],
      ocupacion_otros: [null],
      experiencia: [null],
    });
  }

  listarUsuario(){
    let token = localStorage.getItem('token') || null;
    if(token!=null){
      this.usuarioService.getUser(token).subscribe((resp) => {
        localStorage.setItem('nombres', resp.data.nombres);
        this.usuarioService.emitirPerfil.emit();

        this.nuevoPostula = {
        nombres: resp.data.nombre,
        apellidos: resp.data.apellidos,
        email: resp.data.email,
        ocupacion_otros: "",
        aprobado: 0,
        idUsuario: resp.data.id
        };
      });
    }
  }
  
  // listarUsuario(){
  //   let token = localStorage.getItem('token') || null;
  //   this.usuarioService.getUser(token).subscribe((resp: any) => {
  //     localStorage.setItem('nombres', resp.data.nombre);
  //     this.usuarioService.emitirPerfil.emit();

  //     this.nuevoPostula = {
  //       nombres: resp.data.nombre,
  //       apellidos: resp.data.apellidos,
  //       email: resp.data.email,
  //       ocupacion_otros: "",
  //       aprobado: 0,
  //       idUsuario: resp.data.id
  //     };

  //     console.log(this.nuevoPostula);
  //   });
  // }

  // listarPostula(){
  //   let token = localStorage.getItem('token') || null;
  //   this.usuarioService.getPostula(token).subscribe((resp: any) => { 
  //     if(resp.data){
  //       this.idUsuario = resp.data.aprobado;
  //     }else {
  //       this.idUsuario = ""
  //     }
  //   });
  // }

  closeMatricula(){
    if(this.cerrar == true){
      this.switchService.$modalMatricula.emit(false);
    }
  }
  closeMatriculaMovil(){
    this.switchService.$modalMatricula.emit(false);
  }

  postular(){
    if(this.formMatricula.invalid){
      Swal.fire('Completa los datos','','error')
    }else{
      this.usuarioService.postular(this.nuevoPostula).subscribe((resp: any) => {
        console.log(resp);
        Swal.fire('Postulación Exitosa','','success')
        this.switchService.$modalMatricula.emit(false)
        this.router.navigate(['/capacitaciones/programa_especificacion/certificacion']); //??
        this.switchService.$aprobado.emit(0);
      },
      (error)=>{
        Swal.fire('Correo ya registrado','','error')
        this.switchService.$modalMatricula.emit(true)
        console.log(error);
      });
    }
  }

  noCerrar(){
    this.cerrar = false;
  }
  noCerrar2(){
    this.cerrar = true;
  }

  

}
