import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-cursos-online',
  templateUrl: './cursos-online.component.html',
  styleUrls: ['./cursos-online.component.scss']
})
export class CursosOnlineComponent implements OnInit {

  mostrar: boolean = true;
  
  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

}
