import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  $modalLogin = new EventEmitter<boolean>();

  $modalRegistro = new EventEmitter<boolean>();

  $paso = new EventEmitter<number>();

  $nav = new EventEmitter<boolean>();

  $cimientos = new EventEmitter<boolean>();

  $sobrecimientos = new EventEmitter<boolean>();

  $videoTips = new EventEmitter<boolean>();

  $modalMatricula = new EventEmitter<boolean>();

  $aprobado = new EventEmitter<number>();

  $lives = new EventEmitter<any>(); 

}
