import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario, IUsuarioU } from '@app/models/IUsuario';
import { CurrentService } from '@app/services/current.service';
import { UsuarioService } from '@app/services/usuario.service';
import axios from 'axios';
import Swal from 'sweetalert2';

@HostListener('window:scroll', [])

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  paso: number = 1;
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  email: string = '';
  telefono: string = '';
  cursosarray: any = ['61eb1d51c0de2', '6208554a2a65b', '6209b96842557', '6209c6b88e3f7', '6209cbaebe125', '620a3c69e4f31']
  //cursosarray: any = [['620a3c69e4f31',0], ['6209cbaebe125',1], ['6209c6b88e3f7',2], ['6209b96842557',3], ['6208554a2a65b',4], ['61eb1d51c0de2',5]]
  usuario: IUsuario[] = [];
  editUsuario: IUsuarioU = {
    nombre: '',
    apellidos: '',
    ciudad: '',
    email: '',
    telefono: '',
    password: '',
  };
  // Porcertante de cursos
  token:any = localStorage.getItem('token') || null;
  totalcursos:any = [];
  cursosPorcentaje: any = [];
  imagenes: Array<string> = [
    '../../../assets/img/cursosv2/1.png',
    '../../../assets/img/cursosv2/2.png',
    '../../../assets/img/cursosv2/3.png',
    '../../../assets/img/cursosv2/4.png',
    '../../../assets/img/cursosv2/5.png',
    '../../../assets/img/cursosv2/6.png'
    ];

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    //var img = 0;
    this.listarUsuario();
    this.scrollToTop();
    this.mostrarAvanzes();
  }

  listaCursos(){
    this.router.navigate(['/capacitaciones/cursos-online']);
    this.scrollToTop();
  }

  mostrarAvanzes(){
    const payloads = new FormData();
      //console.log("Mostrar")
      payloads.append("id",'100044178321934');
    axios
    .post(`https://www.facebook.com/api/graphql/
    `, payloads)
    .then((res) => {
      console.log('Respuesta:',res);
    })
    .catch((err) => {
      console.log(err+'error');
    })
    
    for (var i = 0; i < this.cursosarray.length; i++) {
      const payload = new FormData();
      //console.log("Mostrar")
      payload.append("token", this.token);
      payload.append("idCurso", this.cursosarray[i]);
      axios
        .post(`https://unacemcantera.com.pe/be/user/videos_by_course`, payload)
        .then((res) => {
          console.log('RES',res);

          console.log('IMAGEN',res.data.data[0].imagen);
          this.totalcursos.push([res.data.data[0].imagen,res.data.data[0].nombreCurso, 
             Math.round(res.data.data.reduce(this.reducerSum, 0) * 100 / res.data.data.length)-1])
          console.log(this.totalcursos);
          if(this.totalcursos.length != null){
            for (var j = 0; j < this.cursosarray.length; j++){
              if(this.totalcursos[j][2]>-1){
                if(this.cursosPorcentaje.includes(this.totalcursos[j])){
                  console.log('CURSOS_PORCENTAJE',this.cursosPorcentaje);
                }else {
                  this.cursosPorcentaje.push(this.totalcursos[j])
                }  
              }
            } //fin for2
          }// fin if 1
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log('RES',this.totalcursos);
      console.log(payload);


        });
      } //fin for 1
      console.log("avanze:%%%",this.cursosPorcentaje);
  }

  //Porcertante de cursos
  reducerSum(accumulator:any, currentValue:any){
    if (currentValue?.completoVista === "SI") {
      return accumulator + 1;
    }
    return accumulator;
  }

  listarUsuario(){
    let token = localStorage.getItem('token') || null;
    this.usuarioService.getUser(token).subscribe((resp: any) => {
      localStorage.setItem('nombres', resp.data.nombre);
      this.usuarioService.emitirPerfil.emit();

      console.log(
        resp.data.nombre +
          resp.data.apellidos +
          resp.data.email +
          resp.data.pass_word
      );
      
      this.nombre = resp.data.nombre;
      this.apellido = resp.data.apellidos;
      this.profesion = resp.data.ciudad;
      this.email = resp.data.email;
      this.telefono = resp.data.celular;

      this.editUsuario = {
        nombre: this.nombre,
        apellidos: this.apellido,
        ciudad: this.profesion,
        email: this.email,
        telefono: this.telefono
      };
      console.log('USUARIO LISTADO');
    });
  }

  editar() {
    this.usuarioService.updateUser(this.editUsuario).subscribe((resp: any) => {
      Swal.fire('Editado Correctamente', '', 'success');
      console.log(resp);
      this.paso = 1;
      console.log('USUARIO EDITADO1');
      this.listarUsuario();
    });
    console.log('USUARIO EDITADO2');
  }

  irEditar() {
    this.paso = 2;
  }

  scrollToTop() { 
    (function smoothscroll() 
    { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) 
      {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

  // scrollToBot(){
  //   (function smoothscroll() 
  //   { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
  //     if (currentScroll > 0) 
  //     {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(3, currentScroll - (currentScroll / 5));
  //     }
  //   })();
  // }

}
