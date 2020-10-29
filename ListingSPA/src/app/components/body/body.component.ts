import { Component, OnInit,Input,Output } from '@angular/core';

import {PEOPLE} from '../../shared/mock-profiles';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  People = PEOPLE;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(person){
    alert(person.name +" will be deleted permanantly")
    let index = this.People.findIndex(indexPerson=>{
      return String(person._id)===String(indexPerson._id)
    })
    this.People.splice(index,1);
  }

}
