import { Component, OnInit } from '@angular/core';
import { IWebinars } from '@app/components/webinars/IWebinars-item.metadata';
import { WEBINARS_DATA_ITEMS } from '@app/components/webinars/webinars.cons';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-facebook-live',
  templateUrl: './facebook-live.component.html',
  styleUrls: ['./facebook-live.component.scss']
})
export class FacebookLiveComponent implements OnInit {

  mostrar: boolean = true;
  live: boolean = true;
  webinars: boolean = false;

  public webinarsData: IWebinars[] = WEBINARS_DATA_ITEMS;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

  // irLive(){
  //   this.webinars = false;
  //   this.live = true;
  //   console.log("liveMetod", this.live)
  //   console.log("webinarMetod", this.webinars)
  // }

  // irWebinar(){
  //   this.live = false;
  //   this.webinars = true;
  //   console.log("webinar", this.webinars)
  //   console.log("live", this.live)
  // }

  cambiar(val: string){
    if(val == 'live'){
        this.live = true;
        this.webinars = false;
    }else if(val == 'webinar'){
        this.live = false;
        this.webinars = true;   
    }
  }

}
