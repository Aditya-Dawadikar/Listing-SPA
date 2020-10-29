import { Component,ViewChild, ElementRef, Input, OnInit } from '@angular/core';

import {NewCardModalServiceService} from '../../../services/new-card-modal-service.service';
import {PEOPLE} from '../../../shared/mock-profiles';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  display:boolean=false;

  constructor(private el:ElementRef,private CardService:NewCardModalServiceService) { }

  ngOnInit(): void {
    /*this.CardService.display().subscribe(response=>{
      this.display=response;
    })*/
    this.el.nativeElement.addEventListener('click', ()=> {
      this.toggleDisplay();
  })
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
