import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobrecimientos',
  templateUrl: './sobrecimientos.component.html',
  styleUrls: ['./sobrecimientos.component.scss']
})
export class SobrecimientosComponent implements OnInit {

  cimientoActive: boolean = false;
  sobrecimientosActive:boolean = false;
  // resultados KG
  result_gruesoKG: number = 0;
  result_finoKG: number = 0;
  result_cementoKG: number = 0;
  // resultados 10% percentage
  result_gruesoPercentage: number = 5.67; //queda pendiente
  result_finoPercentage: number = 6.29; //queda pendiente
  result_cementoPercentage: number = 54.51; //queda pendiente
  // resistencia a la compresion
  resistencia_compresion!: number;
  // medidas
  largo: number =10;
  ancho: number=0.4;
  altura : number = 3;
  // Vólumen total a la obra y Agua por bolsa de cemento
  volumen_total_obra: number = 12; 
  agua_bolsa_cemento: number = 1639.44; 

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    this.volumen_total_obra = Math.round((this.largo*this.ancho*this.altura*100))/100;
    this.agua_bolsa_cemento = Math.round((136.62 * this.volumen_total_obra)*100)/100;

    this.result_gruesoPercentage = Math.round((752/1750*this.volumen_total_obra*1.1)*100)/100;
    this.result_finoPercentage = Math.round((786/1650* this.volumen_total_obra*1.1)*100)/100;
    this.result_cementoPercentage =Math.round((175.5/42.5*this.volumen_total_obra*1.1)*100)/100;
  }

}
