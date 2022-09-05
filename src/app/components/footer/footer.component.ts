import { Component, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  mostrar: boolean = true;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

}
