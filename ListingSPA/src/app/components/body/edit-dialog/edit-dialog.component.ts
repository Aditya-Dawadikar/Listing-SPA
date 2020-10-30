import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {ProfileApiService} from '../../../services/profile-api.service';
import {PEOPLE} from '../../../shared/mock-profiles';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  people=PEOPLE;
  person:Person;

  constructor(private activatedRouter:ActivatedRoute,private profileApi:ProfileApiService) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    let index = this.people.findIndex(person=>{
      return String(id)===String(person._id);
    })

    this.person=this.people[index];
  }


  edit(name,age,gender,phone,blood,email,bdate){
    alert("profile will be editted")
    let index = this.people.findIndex(person=>{
      return String(this.person._id)===String(person._id);
    })

    let updatedPerson={
      name:name,
      age:age,
      gender:gender,
      phone:phone,
      email:email,
      bloodGroup:blood,
      birthDate:bdate
    }

    PEOPLE.splice(index,1,updatedPerson)

    this.profileApi.editProfile(this.person._id,updatedPerson).subscribe((response)=>{
      console.log(response);
    })

  }
}
