import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HerramientasComponent implements OnInit {

  paso: number = 1;
  piso1: string = "https://unacemcantera.com.pe/files/CASA_TIPO1.pdf";
  piso2: string = "https://unacemcantera.com.pe/files/CASA_TIPO2.pdf";
  piso3: string = "https://unacemcantera.com.pe/files/CASA_TIPO3.pdf";

  mostrar: boolean = true;

  constructor(private pasoService: SwitchService) { }

  ngOnInit(): void {
    this.pasoService.$paso.subscribe((valor)=>{this.paso=valor});
    this.pasoService.$nav.subscribe((valor2)=>{this.mostrar = valor2})
  }

  openPdf(url: string){
    window.open(url, "_blank")
  }

  regresar(){
    this.paso = 1;
  }

}
