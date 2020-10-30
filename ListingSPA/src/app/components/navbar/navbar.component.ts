import { Component, OnInit } from '@angular/core';
import {ProfileApiService} from '../../services/profile-api.service';
import {PEOPLE} from '../../shared/mock-profiles';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private profileApi:ProfileApiService) { }

  ngOnInit(): void {

  }

  findPerson(query){
    this.profileApi.findByQuery(query).subscribe((response:any)=>{
      PEOPLE.splice(0,PEOPLE.length)
      console.log(PEOPLE)
      for(let i=0;i<response.people.length;i++){
        PEOPLE.push(response.people[i])
      }
    })
  }

}
