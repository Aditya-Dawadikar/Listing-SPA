import { Component, OnInit,Input,Output  } from '@angular/core';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {

  @Input() person:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
