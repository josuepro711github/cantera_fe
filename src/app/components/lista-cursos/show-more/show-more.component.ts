import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
})
export class ShowMoreComponent implements OnInit {
  constructor() {

  }
  @Input() curso: any;
  palabra: any = 159;
  ngOnInit(): void {
    this.quitar();
  }
  showMore = false;
  
  quitar(){
    //console.log(this.curso.descripcion[161])
      if(this.curso.descripcion[159]=="n"){
        this.palabra=157
      }
      if(this.curso.descripcion[159]=="u"){
        this.palabra=158
      }
      if(this.curso.descripcion[161]=="E"){
        this.palabra=174
      }
  }

  onShow() {
    this.showMore = !this.showMore;
  }
}
