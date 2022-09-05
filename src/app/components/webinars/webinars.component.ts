import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IWebinars } from './IWebinars-item.metadata';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebinarsComponent implements OnInit {

  @Input() items: IWebinars[] = [];

  token = localStorage.getItem('token');
  paginaActual: number = 1;
  numItemsAmostrar: number = 6;

  totalDePaginas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
