import { Injectable } from '@angular/core';
import { IUsuario } from '@app/models/IUsuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  private currentUsuario = new BehaviorSubject<IUsuario>({
    id: "string",
    nombre: "string",
    apellidos: "string",
    user_name: "string",
    pass_word: "String",
  });

  currentUsuario$ = this.currentUsuario.asObservable();

  constructor() { }

  setUsuario(usuario: IUsuario){
    this.currentUsuario.next(usuario);
  }

}
