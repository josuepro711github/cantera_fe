import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from '@app/services/switch.service';
import { ISliderItem } from '../slider-home/ISlider-item.metadata';
import { cursosServices } from './cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
  encapsulation: ViewEncapsulation.None
})

@HostListener('window:scroll', [])

export class ListaCursosComponent implements OnInit {

  paginaActual: number = 1;
  numItemsAmostrar: number = 6;
  token = localStorage.getItem('token');
  dataCurso: any;
  dataCurso2: any;

  totalDePaginas: number = 0;
  img: Array<string> = [
                        '../../../assets/img/cursos/1.png',
                        '../../../assets/img/cursos/2.png',
                        '../../../assets/img/cursos/3.png',
                        '../../../assets/img/cursos/4.png',
                        '../../../assets/img/cursos/5.png',
                        '../../../assets/img/cursos/6.png'
                        ];

  constructor(private cursos: cursosServices, 
              private router: Router,
              private switchService: SwitchService) {}

  ngOnInit(): void {
    this.obtenerCursosLista();
    //this.switchService.$modalLogin.subscribe((valor)=>{this.modalLogin = valor});
    // for(let i = 0; i < this.img.length; i++){
    //   console.log(this.img[i])
    // }
  }

  obtenerCursosLista() {
    this.cursos.getCursos().subscribe((data: any) => {
      this.dataCurso = data.data;
    });
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

  entraCurso(id: any) {
    let token = localStorage.getItem('token');
    if(token == null){
      this.switchService.$modalLogin.emit(true);
    }else{
      this.router.navigate([`capacitaciones/${token}/${id}`]);
      this.scrollToTop()
    }
  }

  // entraCurso(id: any) {
  //   let token = localStorage.getItem('token');
  //   this.router.navigate([`usuario/cursos-view/${token}/${id}`]);
  //   this.scrollToTop();
  // }

}
