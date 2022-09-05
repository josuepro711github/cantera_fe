import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuarioLogin } from '@app/models/IUsuario';
import { AuthService } from '@app/services/auth.service';
import { SwitchService } from '@app/services/switch.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  siteKey: string = "6Ldu34AhAAAAAFeXqE2sz1hVp50i-H3ABUEEY2Qr"; //codigo para reCaptcha
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo
  modalLogin:boolean=true;
  modalRegistro:boolean=true;
  cerrar: boolean = true;

  loginUsuario: IUsuarioLogin = {
    username: '',
    password: '',
  };

  constructor(
    private modalSS: SwitchService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.pattern(this.correoPattern)],
      ],
      password: [
        null,
        [
          Validators.required
        ]
      ],
      recaptcha: [null, Validators.required],
    });
  }

  onLogin(){
    if(this.formLogin.invalid){
      Swal.fire('Complete los Datos','','error')
    }else{
      this.authService.signIn(this.loginUsuario).subscribe( resp => {
        this.router.navigate(["/perfil"])
        console.log(resp.data.token);
        Swal.fire('Logueado Correctamente','','success')
        localStorage.setItem("token",resp.data.token);
      },
      (error) => {
        Swal.fire('Credenciales incorrectas','','error')
        console.log(error);
      });
      console.log("login",this.loginUsuario);
    }
  }

  closeLogin() {
    if (this.cerrar == true) {
      this.modalSS.$modalLogin.emit(false);
    }
  }
  closeLoginMovile() {
    this.modalSS.$modalLogin.emit(false);
  }

  irRegistro() {
    this.modalSS.$modalLogin.emit(false);
    this.modalSS.$modalRegistro.emit(true);
  }

  noCerrar() {
    this.cerrar = false;
  }

  noCerrar2() {
    this.cerrar = true;
  }
}
