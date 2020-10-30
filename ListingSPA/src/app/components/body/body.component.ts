import { Component, OnInit,Input,Output } from '@angular/core';

import {ProfileApiService} from '../../services/profile-api.service';
import {PEOPLE} from '../../shared/mock-profiles';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //People = PEOPLE;
  People:any;

  constructor(private profileApi:ProfileApiService) { }

  ngOnInit(): void {
    this.profileApi.getAllProfiles().subscribe((data:any)=>{
      this.People=data.people
      for(let i=0;i<data.people.length;i++){
        PEOPLE.push(data.people[i])
      }
    })

  }

  deleteCard(person){
    alert(person.name +" will be deleted permanantly")
    let index = this.People.findIndex(indexPerson=>{
      return String(person._id)===String(indexPerson._id)
    })
    this.People.splice(index,1);

    this.profileApi.deleteProfile(person._id).subscribe((response:any)=>{
      console.log(response)
    })
  }

  reInitBody(){
    this.People=PEOPLE
  }

  restore(){
    PEOPLE.splice(0,PEOPLE.length)
    this.profileApi.getAllProfiles().subscribe((data:any)=>{
      this.People=data.people
      for(let i=0;i<data.people.length;i++){
        PEOPLE.push(data.people[i])
      }
    })
  }
}
