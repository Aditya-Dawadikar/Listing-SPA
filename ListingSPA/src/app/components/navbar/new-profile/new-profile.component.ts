import { Component,ViewChild, ElementRef, Input, OnInit } from '@angular/core';

import {PEOPLE} from '../../../shared/mock-profiles';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  display:boolean=true;

  constructor(private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNewCard(name:string,age:number,gender:string,phone:number){
    let newCard ={
      _id:"11",
      name:name,
      age:age,
      gender:gender,
      phone:phone
    }

    PEOPLE.push(newCard)
    this.display=!this.display

    //navigate to listing page
    this.router.navigateByUrl('/');
  }

  toggleDisplay(){
    this.display=!this.display;
  }

}
