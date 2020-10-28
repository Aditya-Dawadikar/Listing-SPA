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

}
