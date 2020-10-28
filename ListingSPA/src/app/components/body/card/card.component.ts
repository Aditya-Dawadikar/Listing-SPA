import { Component, OnInit,Input,Output } from '@angular/core';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
