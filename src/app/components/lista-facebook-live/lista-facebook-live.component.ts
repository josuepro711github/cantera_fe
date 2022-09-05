import { DatePipe } from '@angular/common';
import { Component, HostListener, Input, OnInit, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';
import { SwitchService } from '@app/services/switch.service';

//import $ from 'jquery';
//import * as $ from 'jquery';
@Component({
  selector: 'app-lista-facebook-live',
  templateUrl: './lista-facebook-live.component.html',
  styleUrls: ['./lista-facebook-live.component.scss'],
  encapsulation: ViewEncapsulation.None
})

@HostListener('window:scroll', [])

export class ListaFacebookLiveComponent implements OnInit{

  cargar: boolean = false;
  token = localStorage.getItem('token');
  paginaActual: number = 1;
  numItemsAmostrar: number = 6;
  totalDePaginas: number = 0;
  videosLive: any=[];
  intervalo: any;
  selector:any=[];
  valor: any='';
  constructor(private router: Router, private switchService: SwitchService) {}

  ngOnInit(): void {
    this.servicioVideos();
    this.suma();
  }
  servicioVideos(){
    console.log("FUNCION SERVICIOS VIDEOS");
    fetch(
        
"https://graph.facebook.com/v14.0/me?fields=id%2Cname%2Clive_videos%7Bembed_html%2Ccreation_time%2Ctitle%2Cdescription%2Cvideo%7Bpicture%7D%7D&access_token=EAAFmtHddzisBAP9kkl7aLIoQXhdP5ptUaFklzilftDH2hMpYE7ZAZBOxuBfFvlY4WJXpTWgsjqXLXOIb2kKhtJ0Cd2noReivSCfreIDITT6p7PnNKx3jeB1A1txfE0x20ToaN7kWaSfqXn2DJ6j6cpbXEjnxNNAmgAehCDa48TqRcZCCJAg8DxmQHZBvB8CoSpWcWZAC28QZDZD"
      )
    .then(resp => resp.json())
    .then((data) => {
        this.videosLive = data.live_videos.data;
        this.selector = this.videosLive;
        this.switchService.$lives.emit(this.selector);
        console.log('LIVES', this.selector);
        console.log("VIDEOS", this.videosLive); 
      }
    );
  }

  suma(){
    setTimeout(
      ()=>{
        console.log("FUNCION SUMA");
        for (let i = 0; i < this.videosLive.length; i++) {
          console.log(this.videosLive[i].id)
    
          $('#' + this.videosLive[i].id).append(this.videosLive[i].embed_html);
          console.log($('#' + this.videosLive[i].id).length)
        }
    }, 500
    );
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
  
  openVideo(vid: any){
    if(this.token == null){
      this.switchService.$modalLogin.emit(true);
    }else{
      this.selector = vid;
      this.switchService.$lives.emit(this.selector);
      console.log(vid)
      localStorage.setItem('numeroCuentas',JSON.stringify(vid))
      this.valor = localStorage.getItem('numeroCuentas')
      console.log(JSON.parse(this.valor).id)
      this.valor=JSON.parse(this.valor)
      this.router.navigate(['/capacitaciones/facebook-live-open']);
      this.scrollToTop();
    }
  }

  irLogin(){
    this.switchService.$modalLogin.emit(true);
  }

}
