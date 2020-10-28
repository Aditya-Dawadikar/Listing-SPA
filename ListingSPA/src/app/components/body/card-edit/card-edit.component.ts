import { Component, OnInit,Input,Output  } from '@angular/core';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  @Input() person:Person;
  constructor() { }

  ngOnInit(): void {
  }

}
