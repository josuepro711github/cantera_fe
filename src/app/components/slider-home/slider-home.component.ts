import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '@app/services/switch.service';
import { ISliderItem } from './ISlider-item.metadata';


@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
})
export class SliderHomeComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ISliderItem[] = [];

  /**
   *  Final Properties
   */
  i: number = 1;
  TIEMPO_INTERVALO_MILESIMAS_SEG: number = 4000;
  intervalo: any;
  public finalHeight: string | number = 0;
  public currentPosition = 0;
  hover: boolean = false; //parar mostrar las flechas

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
    this.automatico();
    console.log(this.items)
  }

  automatico() {
    this.intervalo = setInterval(() => {
      this.setNext();
    }, this.TIEMPO_INTERVALO_MILESIMAS_SEG);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
  }

  setNext() {
    console.log('setNext Activado');
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    console.log('setBack Activado');
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }

  images: any[] = [
    { id: 124, type: 'video', url: 'assets/vid/slider_video1.mp4' },

    { id: 124, type: 'video', url: 'assets/vid/slider_video2.mp4' },
  ];

}

