import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }
  people=[]
  Content(people){
    this.people=people
    this.getPeople()
  }

  getPeople():Observable<any[]>{
    return of(this.people)
  }
}
