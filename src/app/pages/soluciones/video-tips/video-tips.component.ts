import { Component, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-video-tips',
  templateUrl: './video-tips.component.html',
  styleUrls: ['./video-tips.component.scss']
})
export class VideoTipsComponent implements OnInit {

  mostrar: boolean = true;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

}
