import { Component, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  mostrar: boolean = true;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

}
