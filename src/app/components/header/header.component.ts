import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '@app/services/store.service';
import { SwitchService } from '@app/services/switch.service';
import { TokenService } from '@app/services/token.service';
import { UsuarioService } from '@app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  menuMovil: boolean = false;
  capacitacionesMovil: boolean = false;
  solucionesMovil: boolean = false;
  programaMovil: boolean = false;
  activado: boolean = false;
  ruta:any;
  rutaLocalstorage: any;
  //Modales registro y login
  modalLogin: boolean = false;
  modalRegistro: boolean = false;
  constructor(
    private switchService: SwitchService,
    private router: Router,
    private storeService: StoreService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    
  ) {
    // this.rutaLocalstorage= localStorage.getItem('rutaColores');
    
    this.ruta= this.router.url.split("/")[2];
    // console.log("ver ruta normal 1 ",this.ruta)
    
    localStorage.setItem('rutaColores', this.ruta);
    this.rutaLocalstorage = localStorage.getItem('rutaColores');
  }
  
  ngOnInit(): void {
    this.switchService.$modalLogin.subscribe((valor) => {this.modalLogin = valor;});
    this.switchService.$modalRegistro.subscribe((valor2) => {this.modalRegistro = valor2;});

    this.storeService.mylog$.subscribe((data) => {this.isLogin = data;});
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    this.usuarioService.emitirPerfil.subscribe((eventAudio: any) => {
      this.nombres = localStorage.getItem('nombres');
    });
    
  }

  nombres = localStorage.getItem('nombres');
  token = localStorage.getItem('token');
  
  activar(){
    this.activado = true;
  }

  // irTips(){
  //   this.switchService.$videoTips.emit(true)
  // }
  // irHerramientas(){
  //   this.switchService.$videoTips.emit(false)
  // }
 
  cerrarSesion() {
    localStorage.clear();
    this.router.navigate([`/constructores`]);

    /*     this.tokenService.logOut();
    this.storeService.setLogOut();
    this.usuarioService.removeUsuario(); */
  }
  currentAlphabet: any;
  checkIfNew(title: any) {
    if (title){
      let variable = title.charAt(0).toLowerCase();
    return variable;  
    }else{
      return '';
    }
    
  }
  openMenuMovil() {
    this.menuMovil = true;
    this.switchService.$nav.emit(false);
  }

  closeMenuMovil() {
    this.menuMovil = false;
    this.switchService.$nav.emit(true);
  }

  openCapacitaciones() {
    this.capacitacionesMovil = true;
  }

  closeCapacitaciones() {
    this.capacitacionesMovil = false;
  }

  openSoluciones() {
    this.solucionesMovil = true;
  }

  closeSoluciones() {
    this.solucionesMovil = false;
  }

  openPrograma(){
    this.programaMovil = true;
  }

  closePrograma(){
    this.programaMovil = false;
  }

  openLogin() {
    this.modalLogin = true;
  }

  openRegistro() {
    this.modalRegistro = true;
  }

  openPerfil(val: string){
    if(val == 'desk'){
      this.router.navigate(['/perfil']);
    }else if(val == 'movil'){
      
    }
  }
}
