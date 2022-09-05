import { Injectable, EventEmitter, Output } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class cursosServices {
  URL_BACKEND = environment.apiServiceUrl;

  constructor(private http: HttpClient) {}
  getCursos(): Observable<any> {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    /*    headers = headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('purple_token')
    ); */

    return this.http.get<any>(
      this.URL_BACKEND + `be/user/get_cursos?token=${token}`,
      {
        headers: headers,
      }
    );
  }
  getCursosWeb(token: any, idcurso: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    headers = headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('purple_token')
    );

    return this.http.get<any>(
      this.URL_BACKEND + `be/cursos/?token=${token}&=${idcurso}`,
      {
        headers: headers,
      }
    );
  }
}
