import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IUsuario, IUsuarioU ,IPostula} from '@app/models/IUsuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  httpHeader = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  @Output() emitirPerfil = new EventEmitter<any>();

  getUser(id: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get(
      `${environment.apiServiceUrl}be/user/get_perfil?id=${id}`,
      {
        headers: headers,
      }
    );
  }

  getPostula(id: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get(
      `${environment.apiServiceUrl}be/user/get_postula?id=${id}`,
      {
        headers: headers,
      }
    );
  }

  updateUser(usuario: IUsuarioU) {
    const params: any = usuario;
    const token: any = localStorage.getItem('token');
    return this.http.put<IUsuarioU>(
      `${environment.apiServiceUrl}be/user/update_perfil?id=${token}&nombres=${usuario.nombre}&apellidos=${usuario.apellidos}&profesion=${usuario.ciudad}&telefono=${usuario.telefono}&email${usuario.email}&password=${usuario.password}`,
      this.httpHeader
    );
  }

  removeUsuario() {
    window.sessionStorage.removeItem('ulg');
  }
  
  postular(usuario:IPostula) {
    const params: any = usuario;
    console.log("postulaService",usuario);
    return this.http.post<IPostula>(
      `${environment.apiServiceUrl}be/user/new_postula?nombres=${usuario.nombres}&apellidos=${usuario.apellidos}&email=${usuario.email}&dni=${usuario.dni}&celular=${usuario.celular}&telefono=${usuario.telefono}&ocupacion=${usuario.ocupacion}&ocupacion_otros=${usuario.ocupacion_otros}&experiencia=${usuario.experiencia}&aprobado=${usuario.aprobado}&idUsuario=${usuario.idUsuario}`,
      this.httpHeader
    )
  }


}
