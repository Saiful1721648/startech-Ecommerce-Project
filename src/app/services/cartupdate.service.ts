import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartupdateService {
  cartSubject = new Subject<any>;
  public search =new BehaviorSubject<string>("");
  sidebarcart =new BehaviorSubject<any>("");



  constructor() { }


}
