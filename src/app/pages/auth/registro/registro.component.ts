import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegistro, IUsuarioLogin } from '@app/models/IUsuario';
import { AuthService } from '@app/services/auth.service';
import { SwitchService } from '@app/services/switch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro!: FormGroup;
  siteKey: string = "6Ldu34AhAAAAAFeXqE2sz1hVp50i-H3ABUEEY2Qr"; //codigo para reCaptcha
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo
  modalRegistro:boolean=false;
  modalLogin:boolean=false;
  cerrar: boolean = true;
  nuevoUsuario: IRegistro = {
    nombres: "",
    apellidos: "",
    email: "",
    password: ""
  }
  loginUsuario: IUsuarioLogin = {
    username: '',
    password: '',
  };
  
  constructor(private modalSS: SwitchService, 
              private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      email: [
        null, 
        [
          Validators.required, 
          Validators.pattern(this.correoPattern)
        ]
      ],
      password: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });
  }

  registrar(){
    if(this.formRegistro.invalid){
      Swal.fire('Complete los Datos','','error')
    }else{
      this.authService.registrar(this.nuevoUsuario).subscribe( (resp: any) => { 
        console.log(resp);
        //this.router.navigate(["/usuario/perfil"])
        this.loginUsuario.username = this.nuevoUsuario.email;
        this.loginUsuario.password = this.nuevoUsuario.password;
        this.onLogin();
        Swal.fire('Registro Exitoso','','success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Ingresar datos válidos','','error')
      });
      console.log(this.formRegistro);
    }
  }

  onLogin(){
      this.authService.signIn(this.loginUsuario).subscribe( resp => {
        this.router.navigate(["/perfil"])
        console.log(resp.data.token);
        //Swal.fire('Logeado correctamente','','success') 
        localStorage.setItem("token",resp.data.token);
      },
      (error) => {
        Swal.fire('Credenciales incorrectas','','error')
        console.log(error);
      });
      console.log("login",this.loginUsuario);
  }

  closeRegistro(){
    if(this.cerrar == true){
      this.modalSS.$modalRegistro.emit(false)
    }
  }
  closeRegistroMovile(){
    this.modalSS.$modalRegistro.emit(false);
  }

  irLogin(){
    this.modalSS.$modalRegistro.emit(false)
    this.modalSS.$modalLogin.emit(true)
  }

  noCerrar(){
    this.cerrar = false;
  }
  noCerrar2(){
    this.cerrar = true;
  }

}
