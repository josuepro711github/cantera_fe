import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columnas-placas-vigas',
  templateUrl: './columnas-placas-vigas.component.html',
  styleUrls: ['./columnas-placas-vigas.component.scss']
})
export class ColumnasPlacasVigasComponent implements OnInit {

  // radioButtons
  value175KG: string = "175KG";
  value210KG: string = "210KG";
  value285KG: string = "285KG"
  // resistencia a la compresión
  resistencia_compresion: number=175;
  // resultados KG
  result_gruesoKG: number = 1003;
  result_finoKG: number = 967;
  result_cementoKG: number = 252;
  // resultados 10% percentage
  result_gruesoPercentage: number = 7.57; //queda pendiente
  result_finoPercentage: number = 7.74; //queda pendiente
  result_cementoPercentage: number = 78.27; //queda pendiente
  // medidas
  largo: number =10;
  ancho: number=0.4;
  altura : number = 3;
  valor : number = 0;
  // Vólumen total a la obra y Agua por bolsa de cemento

  volumen_total_obra: number = 12; 
  agua_bolsa_cemento: number = 1639.44; 
  cementoPeso:number = 252;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(val: string){
    if(val == "175KG"){
      this.valor=0;
      this.resistencia_compresion = 175;
      this.result_gruesoKG = 1003;
      this.result_finoKG = 967;
      this.result_cementoKG = 252;
      this.cementoPeso=252;

      this.calcular();
    }else if(val == "210KG"){
      this.valor=0.009;
      this.resistencia_compresion = 210;
      this.result_gruesoKG = 988;
      this.result_finoKG = 954;
      this.result_cementoKG = 284;
      this.cementoPeso=284;

      this.calcular();
      
    }else if(val == "285KG"){
      this.valor=0.03;
      this.resistencia_compresion = 285;
      this.result_gruesoKG = 956;
      this.result_finoKG = 922;
      this.result_cementoKG = 358;
      this.cementoPeso=358;

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
