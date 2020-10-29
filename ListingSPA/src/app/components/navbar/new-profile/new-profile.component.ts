import { Component,ViewChild, ElementRef, Input, OnInit } from '@angular/core';

import {PEOPLE} from '../../../shared/mock-profiles';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  display:boolean=false;

  constructor() { }

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

  }

  toggleDisplay(){
    this.display=!this.display;
  }

}
