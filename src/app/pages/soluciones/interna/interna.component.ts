import { Component, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';
import { CalculadoraMateriales } from './calculadora-materiales';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {
  
  mostrar: boolean = true;

  calculadoraMateriales!: CalculadoraMateriales[];
  calculadoraMaterialesSelected!:Number;

  zapatas:boolean = false;
  cimientos:boolean = false;
  sobrecimientos:boolean = false;
  columnas:boolean = false;
  muro:boolean = false;
  //
  img1:boolean = false;
  img2:boolean = false;
  img3:boolean = false;
  img4:boolean = false;
  img5:boolean = false;
  img6:boolean = false;
  img7:boolean = false;
  img8:boolean = false;
  
  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {

    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})

    this.calculadoraMateriales = [
      {Id:1,Name:"Zapatas para columnas"},
      {Id:2,Name:"Zapatas para muros"},
      {Id:3,Name:"Cimientos"},
      {Id:4,Name:"Sobrecimientos"},
      {Id:5,Name:"Vigas"},
      {Id:6,Name:"Columnas"},
      {Id:7,Name:"Placas"},
      {Id:8,Name:"Muro de contención"},
    ];
    this.calculadoraMaterialesSelected=1;
    this.zapatas = true;
    this.img1 = true;

    //this.cimientos = true;
    //this.img3 = true;
  }

  valorSeleccionado(val:any){
    if(val == 1 || val ==2){
      this.zapatas = true;
      this.cimientos = false;
      this.columnas = false;
      this.muro = false;
      this.sobrecimientos = false;
      if(val == 1){
        this.img1 = true;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
      }else if(val == 2){
        this.img1 = false;
        this.img2 = true;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
      } 
    }
    else if(val == 3){
      this.cimientos = true;
      this.zapatas = false;
      this.columnas = false;
      this.muro = false;
      this.sobrecimientos = false;
      //imagenes
      this.img1 = false;
      this.img2 = false;
      this.img3 = true;
      this.img4 = false;
      this.img5 = false;
      this.img6 = false;
      this.img7 = false;
      this.img8 = false;
    }
    else if(val == 4){
      this.sobrecimientos = true;
      this.cimientos = false;
      this.zapatas = false;
      this.columnas = false;
      this.muro = false;
      //imagenes
      this.img1 = false;
      this.img2 = false;
      this.img3 = false;
      this.img4 = true;
      this.img5 = false;
      this.img6 = false;
      this.img7 = false;
      this.img8 = false;
    }
    else if(val == 5 || val == 6 || val == 7){
      this.columnas = true;
      this.zapatas = false;
      this.cimientos = false;
      this.muro = false;
      this.sobrecimientos = false;
      if(val == 5){
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = true;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
      }else if(val == 6){
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = true;
        this.img7 = false;
        this.img8 = false;
      }else if(val == 7){
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = true;
        this.img8 = false;
      }
    }
    else if(val == 8){
      this.columnas = false;
      this.zapatas = false;
      this.cimientos = false;
      this.muro = true;
      this.sobrecimientos = false;
      //imagenes
      this.img1 = false;
      this.img2 = false;
      this.img3 = false;
      this.img4 = false;
      this.img5 = false;
      this.img6 = false;
      this.img7 = false;
      this.img8 = true;
    }
  }
}
