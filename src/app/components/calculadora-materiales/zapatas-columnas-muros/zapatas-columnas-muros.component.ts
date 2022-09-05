import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapatas-columnas-muros',
  templateUrl: './zapatas-columnas-muros.component.html',
  styleUrls: ['./zapatas-columnas-muros.component.scss']
})
export class ZapatasColumnasMurosComponent implements OnInit {

  // radioButtons
  value210KG: string = "210KG";
  value280KG: string = "280KG";
  // resistencia a la compresión
  resistencia_compresion: number = 210;
  // resultados KG
  result_gruesoKG: number = 983;
  result_finoKG: number = 10288;
  result_cementoKG: number = 263;
  // resultados 10% percentage
  result_gruesoPercentage: number = 7.41; //queda pendiente
  result_finoPercentage: number = 82.3; //queda pendiente
  result_cementoPercentage: number = 81.68; //queda pendiente
  // medidas
  largo: number = 10;
  ancho: number = 0.4;
  altura: number = 3;
  // Vólumen total a la obra y Agua por bolsa de cemento
  volumen_total_obra : number = 12; 
  agua_bolsa_cemento : number = 1639.44; 
  cementoPeso:number = 263;
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiar(val: string){
    if(val == "210KG"){
      this.resistencia_compresion = 210;
      this.result_gruesoKG = 983;
      this.result_finoKG = 10288;
      this.result_cementoKG = 263;
      this.cementoPeso=263;
      this.calcular();
    }else if(val == "280KG"){
      this.resistencia_compresion = 280;
      this.result_gruesoKG = 954;
      this.result_finoKG = 997;
      this.result_cementoKG = 332;
      this.cementoPeso=332;
      this.calcular();


    }
  }

  calcular(){
    this.volumen_total_obra = this.largo*this.ancho*this.altura;
    this.agua_bolsa_cemento =Math.round((136.62 * this.volumen_total_obra)*100)/100;
    
    this.result_gruesoPercentage = Math.round((this.result_gruesoKG/1750 * this.volumen_total_obra*1.1)*100)/100;
    this.result_finoPercentage = Math.round((this.result_finoKG/1650 * this.volumen_total_obra*1.1)*100)/100;
    this.result_cementoPercentage =Math.round((this.cementoPeso/42.5*this.volumen_total_obra)*1.1*100)/100;
  }
  

}
