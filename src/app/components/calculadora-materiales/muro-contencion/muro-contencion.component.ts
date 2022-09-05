import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muro-contencion',
  templateUrl: './muro-contencion.component.html',
  styleUrls: ['./muro-contencion.component.scss']
})
export class MuroContencionComponent implements OnInit {

  opciones: any = [
    'De cabezas',
    'De sogas',
    'De canto'
  ];
  valor:string = "";
  result_ladrillo: number = 1016.4;
  result_cemento: number = 30.8;
  result_arena: number = 154;
  largo : number = 5;
  ancho : number = 2.8;


  constructor() { }

  ngOnInit(): void {
    
  }

  cambiar(val: string){
    this.valor = val;
    console.log(this.valor);

    if(val == "De cabezas"){
      this.result_ladrillo = 203.28 * this.largo;
      this.result_cemento = 6.16 * this.largo;
      this.result_arena = 30.8 * this.largo;
  
    }else if(val == "De sogas"){
      this.result_ladrillo = 120.12 * this.largo;
      this.result_cemento = 3.08 * this.largo;
      this.result_arena = 15.4 * this.largo;
  
    }else if(val == "De canto"){
      this.result_ladrillo = 89.32 * this.largo;
      this.result_cemento = 1.54 * this.largo;
      this.result_arena = 7.7 * this.largo;
    }

  }
}
