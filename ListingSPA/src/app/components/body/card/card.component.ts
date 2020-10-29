import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person:Person;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Output() deleteCard = new EventEmitter();

  showInfo(){
    let baseUrl="/profile/";
    let id= this.person._id;
    let url=baseUrl+String(id)
    this.router.navigateByUrl(url);
  }

  editCard(){
    let baseUrl="/edit/";
    let id= this.person._id;
    let url=baseUrl+String(id)
    this.router.navigateByUrl(url);
  }

}
