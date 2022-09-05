import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegistro, IUsuarioLogin } from '@app/models/IUsuario';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpHeader = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  signIn(usuario: IUsuarioLogin) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.post<any>(
      `${environment.apiServiceUrl}be/user/login_user?username=${usuario.username}&password=${usuario.password}`,
      {
        headers: headers,
      }
    );
  }

  registrar(usuario: IRegistro) {
    const params: any = usuario;
    return this.http.post<IRegistro>(
      `${environment.apiServiceUrl}be/user/new_member?nombres=${usuario.nombres}&apellidos=${usuario.apellidos}&email=${usuario.email}&password=${usuario.password}`,
      this.httpHeader
    );
  }
}
