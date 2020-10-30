import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {PEOPLE} from '../../../shared/mock-profiles';
import {Person} from '../../../shared/profiles';
import {ProfileApiService} from '../../../services/profile-api.service';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  people=PEOPLE
  person:Person

  constructor(private activatedRouter:ActivatedRoute,private router:Router,private profileApi:ProfileApiService) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log("people:",PEOPLE)

    let index = this.people.findIndex(person=>{
      return String(id)===String(person._id);
    })
    this.person=this.people[index];
    /*
    this.profileApi.getById(id).subscribe((response:any)=>{
      this.person=response.person
    })*/
  }

  editProfile(){
    let baseUrl="/edit/";
    let id= this.person._id;
    let url=baseUrl+String(id)
    this.router.navigateByUrl(url);
  }

  deleteProfile(){
    alert(this.person.name +" will be deleted permanantly")

    let index = this.people.findIndex(person=>{
      return String(this.person._id)===String(person._id);
    })
    PEOPLE.splice(index,1);

    let url="/"
    this.router.navigateByUrl(url);
  }

}
