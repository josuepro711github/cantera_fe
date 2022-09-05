import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otras-herramientas',
  templateUrl: './otras-herramientas.component.html',
  styleUrls: ['./otras-herramientas.component.scss']
})
export class OtrasHerramientasComponent implements OnInit {

  tabla_de_equivalencias: string ="https://unacemcantera.com.pe/files/tabla.pdf";
  planos: string = "https://unacemcantera.com.pe/files/tabla.pdf";
  manual_de_construccion: string = "https://unacemcantera.com.pe/files/Manual.pdf";

  constructor() { }

  ngOnInit(): void {
  }

  openPdf(url: string){
    window.open(url, "_blank")
  }

}
