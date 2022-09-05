import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { cursosServices } from '../lista-cursos/cursos.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss'],
})
export class ViewComponentComponent implements OnInit {
  constructor(
    private cursos: cursosServices,
    private router: Router,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.idCurso = this.route.snapshot.paramMap.get('cursoid');
  }

  token = localStorage.getItem('token');
  idCurso: any;
  idNuevo: any;
  urlSafe: any;
  ngOnInit(): void {
    this.obtenerCurso();
    
    //let url = `http://localhost/?token=${this.token}&idCurso=${this.idCurso}`;

    let url = `https://unacemcantera.com.pe/cursos/?token=${this.token}&idCurso=${this.idCurso}`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  dataCurso: any;
  obtenerCurso() {
    let token = localStorage.getItem('token');
    this.cursos.getCursosWeb(token, this.idCurso).subscribe((data: any) => {
      //console.log(data, 'AAAA');
      this.dataCurso = data.data;
    });
  }

  regresaraCurso() {
    this.router.navigate([`/capacitaciones`]);
  }

  obtenerIframe() {}
}
