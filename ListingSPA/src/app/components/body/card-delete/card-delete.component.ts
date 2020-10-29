import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {

  @Input() person:Person;
  @Output() deleteCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
