import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myLog = new BehaviorSubject<boolean>(false);
  mylog$ = this.myLog.asObservable();

  constructor() { }

  setLog(){
    this.myLog.next(true);
  }
  setLogOut(){
    this.myLog.next(false);
  }

}
