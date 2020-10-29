import { Component, OnInit } from '@angular/core';

import {NewCardModalServiceService} from '../../services/new-card-modal-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private CardService:NewCardModalServiceService) { }

  ngOnInit(): void {

  }

  addNewProfile(){
    this.CardService.display();
    console.log("sending show request")
  }

}
