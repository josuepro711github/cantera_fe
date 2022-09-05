import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SwitchService } from '@app/services/switch.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-facebook-live-open',
  templateUrl: './facebook-live-open.component.html',
  styleUrls: ['./facebook-live-open.component.scss']
})

export class FacebookLiveOpenComponent implements OnInit {

  valor: any='';

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('numeroCuentas')
    this.valor=JSON.parse(this.valor)
    $('#videoiframe').append(this.valor.embed_html);

    console.log(this.valor.id);
  }
 
}
