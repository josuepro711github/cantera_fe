import { Component, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-cimientos',
  templateUrl: './cimientos.component.html',
  styleUrls: ['./cimientos.component.scss']
})
export class CimientosComponent implements OnInit {

    cimientoActive: boolean = false;
    sobrecimientosActive:boolean = false;
    // resultados KG
    result_gruesoKG: number = 0;
    result_finoKG: number = 0;
    result_cementoKG: number = 0;
    // resultados 10% percentage
    result_gruesoPercentage: number = 5.26; //queda pendiente
    result_finoPercentage: number = 5.83; //queda pendiente
    result_cementoPercentage: number = 53.92; //queda pendiente
    // resistencia a la compresion
    resistencia_compresion: number = 100;
    // medidas
    largo: number = 10;
    ancho: number = 0.4;
    altura: number = 3;
    // Vólumen total a la obra y Agua por bolsa de cemento
    volumen_total_obra : number = 12; 
    agua_bolsa_cemento : number = 1533.84; 

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$cimientos.subscribe((valor)=>{this.cimientoActive = valor});
    console.log("cimientos",this.cimientoActive);
    console.log("sobrecimientos",this.sobrecimientosActive);
  } 

  calcular(){
    this.volumen_total_obra = Math.round((this.largo*this.ancho*this.altura)*100)/100;
    this.agua_bolsa_cemento =Math.round((127.82 * this.volumen_total_obra)*100)/100;

    this.result_gruesoPercentage = Math.round((698/1750*this.volumen_total_obra*1.1)*100)/100;
    this.result_finoPercentage = Math.round((729/1650* this.volumen_total_obra*1.1)*100)/100;
    this.result_cementoPercentage =Math.round((173.6/42.5*this.volumen_total_obra*1.1)*100)/100;
  }

}
