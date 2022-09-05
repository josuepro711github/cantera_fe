import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(private router: Router){

  }
  canActivate():  boolean {
    console.log("autorizacion canactivate ", "token ",localStorage.getItem('token'))
    return ( localStorage.getItem('token')) ? true : false;
  }
  canLoad(): boolean  {
    console.log("autorizacion canLoad ", "token ",localStorage.getItem('token'))
    return ( localStorage.getItem('token')) ? true : false;
  }

  private handleErrorGoHome(){
    this.router.navigateByUrl('/constructores');
    return false;
  }
}
