import { Component,ViewChild, ElementRef, Input, OnInit } from '@angular/core';

import {ProfileApiService} from '../../../services/profile-api.service';
import {PEOPLE} from '../../../shared/mock-profiles';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  display:boolean=true;

  constructor(private router:Router,private activatedRouter:ActivatedRoute,private profileApi:ProfileApiService) { }

  ngOnInit(): void {
  }

  addNewCard(name:string,age:number,gender:string,phone:number,blood:string,email:string,bdate:Date){
    let newCard ={
      name:name,
      age:age,
      gender:gender,
      phone:phone,
      email:email,
      bloodGroup:blood,
      birthDate:bdate
    }

    PEOPLE.push(newCard)
    this.display=!this.display

    this.profileApi.createNew(newCard).subscribe((response:any)=>{
      console.log(response)
    })

    //navigate to listing page
    this.router.navigateByUrl('/');
  }

  toggleDisplay(){
    this.display=!this.display;
  }

}
