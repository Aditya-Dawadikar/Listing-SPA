import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Person} from '../shared/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:3000/api/person/"

  getAllProfiles(){
    return this.httpClient.get(this.baseUrl)
  }

  getById(id:string){
    return this.httpClient.get(this.baseUrl+id)
  }

  createNew(person:any){
    let reqBody=person;
    return this.httpClient.post(this.baseUrl,reqBody)
  }

  editProfile(id:string,updatedPerson:any){
    let url= this.baseUrl + id
    return this.httpClient.put(url,updatedPerson)
  }

  deleteProfile(id:string){
    return this.httpClient.delete(this.baseUrl+id)
  }

  findByQuery(query:string){
    let url= this.baseUrl+ "find?name="+query
    return this.httpClient.get(url)
  }
}
