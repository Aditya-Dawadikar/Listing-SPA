import { Injectable } from '@angular/core';
import {Observable,of,from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewCardModalServiceService {

  status:boolean =false;
  constructor() { }

  display():Observable<boolean>{
    this.status=!this.status;
    console.log("setting status")
    return of(this.status);
  }
}
