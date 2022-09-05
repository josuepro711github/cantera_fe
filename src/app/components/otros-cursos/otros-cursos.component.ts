import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from '@app/services/switch.service';
import { cursosServices } from '../lista-cursos/cursos.service';

@Component({
  selector: 'app-otros-cursos',
  templateUrl: './otros-cursos.component.html',
  styleUrls: ['./otros-cursos.component.scss'],
  encapsulation: ViewEncapsulation.None
})

@HostListener('window:scroll', [])

export class OtrosCursosComponent implements OnInit {

  token = localStorage.getItem('token');
  dataCurso: any;
  img: Array<string> = [
    '../../../assets/img/cursos/1.png',
    '../../../assets/img/cursos/2.png',
    '../../../assets/img/cursos/3.png',
    '../../../assets/img/cursos/4.png',
    '../../../assets/img/cursos/5.png',
    '../../../assets/img/cursos/6.png'
    ];
  max: number = 3;
  @Input() curso: any;

  constructor(private cursosService: cursosServices,
              private switchService: SwitchService,
              private router: Router) { }

  ngOnInit(): void {
  }

  obtenerCursosLista() {
    this.cursosService.getCursos().subscribe((data: any) => {
      this.dataCurso = data.data;
      console.log(this.dataCurso);
    });
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

}
