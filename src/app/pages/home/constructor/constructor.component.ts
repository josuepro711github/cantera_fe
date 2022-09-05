import { Component, OnInit } from '@angular/core';
import { ISliderItem } from '@app/components/slider-home/ISlider-item.metadata';
import { SLIDER_DATA_ITEMS } from '@app/components/slider-home/slider.cons';
import { SwitchService } from '@app/services/switch.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

  mostrar: boolean = true;

  public sliderData: ISliderItem[] = SLIDER_DATA_ITEMS;
  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.$nav.subscribe((valor)=>{this.mostrar = valor})
  }

}
