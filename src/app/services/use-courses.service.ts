import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UseCoursesService {

  httpHeader = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  httpHeader2 = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient) { }

  /*
  listarCursos(token): Observable<any>{
    return this.http.get(
      `${environment}`
    )
  }

  mostrarReglaPorPeriodo(periodo: any): Observable<any> {
    return this.http.get(
      `${environment.apiServiceUrl}/api/unica/periodo/${periodo}/regla`,
      this.httpHeader2
    );
  }
  */

}
