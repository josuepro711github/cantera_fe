import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwitchService } from "@app/services/switch.service";

@Component({
  selector: "app-herramientas-options",
  templateUrl: "./herramientas-options.component.html",
  styleUrls: ["./herramientas-options.component.scss"],
})

@HostListener('window:scroll', [])

export class HerramientasOptionsComponent implements OnInit {

  paso2: number = 1;
  planos: string = "https://unacemcantera.com.pe/files/tabla.pdf";
  manual_de_construccion: string ="https://unacemcantera.com.pe/files/Manual.pdf";
  tabla_de_equivalencias: string ="https://unacemcantera.com.pe/files/tabla.pdf";
  manual_de_manejo: string = "https://unacemcantera.com.pe/files/manejo.pdf";
  videoTips: boolean = false;

  constructor(private pasoService: SwitchService, 
              private switchService: SwitchService,
              private router: Router) {}

  ngOnInit(): void {
    this.switchService.$videoTips.subscribe((valor2)=>{this.videoTips = valor2});
    console.log("tips",this.videoTips)
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

  openHerramientas(){
    let token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['/soluciones_constructivas/calculadora']);
      this.scrollToTop();
    }else if(token == null){
      this.switchService.$modalLogin.emit(true)
    }
  }

  openPdf(url: string) {
    window.open(url, "_blank");
  }

  openPlanos() {
    this.pasoService.$paso.emit(2);
    console.log("Planos click");
    this.scrollToTop();
  }

  counter = 99;
  showTxt = "Mostrar más";

  firstCount = 100;
  last_index = 100;
  toggleSkil() {
    if (this.counter < 101) {
      this.counter = this.info.length;

      this.showTxt = "Mostrar menos";
    } else {
      this.counter = this.last_index;

      this.showTxt = "Mostrar más";
    }
  }
  showTxt2 = "Mostrar más";
  last_index2 = 100;
  counter2 = 96;

  toggleSkil2() {
    if (this.counter2 < 101) {
      this.counter2 = this.info2.length;
      
      this.showTxt2 = "Mostrar menos";
    } else {
      this.counter2 = this.last_index2;

      this.showTxt2 = "Mostrar más";
    }
  }

  showTxt3 = "Mostrar más";
  last_index3 = 100;
  counter3 = 100;

  toggleSkil3() {
    if (this.counter3 < 101) {
      this.counter3 = this.info3.length;

      this.showTxt3 = "Mostrar menos";
    } else {
      this.counter3 = this.last_index3;

      this.showTxt3 = "Mostrar más";
    }
  }

  showTxt4 = "Mostrar más";
  last_index4 = 100;
  counter4 = 95;

  toggleSkil4() {
    if (this.counter4 < 101) {
      this.counter4 = this.info4.length;

      this.showTxt4 = "Mostrar menos";
    } else {
      this.counter4 = this.last_index4;

      this.showTxt4 = "Mostrar más";
    }
  }

  showTxt5 = "Mostrar más";
  last_index5 = 100;
  counter5 = 97;

  toggleSkil5() {
    if (this.counter5 < 101) {
      this.counter5 = this.info5.length;

      this.showTxt5 = "Mostrar menos";
    } else {
      this.counter5 = this.last_index5;

      this.showTxt5 = "Mostrar más";
    }
  }

  info =
    "Determina de una manera sencilla la cantidad adecuada de cemento,agregados y agua que requerirá la mezcla de concreto para cada uno detus proyectos. Selecciona el tipo de construcción, ingresa tus datos y obtén la proporción adecuada de cada material.";
  info2 =
    "Con el objetivo de mejorar la calidad de las construcciones y combatir la construcción informal en el Perú, ponemos a tu alcance 3 planos de casas tipo con formatos de 1, 2 y 3 pisos*, los cuales tienen la característica de ser sismo resistentes. En cada uno de estos planos encontrarás la distribución de los ambientes, los detalles de construcción de cada parte del inmueble y las especificaciones técnicas a considerar.";
  info3 =
    "Encuentra aquí, una guía completa de instrucciones y recomendaciones a tomar en cuenta en cada etapa de construcción de una edificación. Desde el vaciado de concreto, la importancia de la relación agua/cemento, el uso correcto de maquinaria, entre otras más. Si buscas reforzar nociones básicas de construcción este manual es ideal para ti.";
  info4 =
    "Conoce a través de esta Tabla de Equivalencias y Dosificaciones, las cantidades y proporciones recomendadas de cada material para la construcción de una edificación. Descárgala y tenla siempre a la mano.";
  info5 =
    "Con este material ponemos a tu disposición todo lo que debes saber para el correcto traslado ​del cemento, ​su almacenamiento y manipulación, como también lo que ​se debe evitar para lograr una mayor eficiencia y rendimiento, y así obtener una mejor calidad en los concretos y morteros";
}
