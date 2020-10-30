import { Component, OnInit,Input,Output, EventEmitter,ElementRef,ViewChild } from '@angular/core';
import {ProfileApiService} from '../../../services/profile-api.service';
import {PEOPLE} from '../../../shared/mock-profiles';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(elem:ElementRef,private profileApi:ProfileApiService) { }

  ngOnInit(): void {

  }

  @Output() queryResponse=new EventEmitter();
  @Output() clearResponse= new EventEmitter();

  @ViewChild('query') searchbox:ElementRef;

  clearDisplay=true;

  findPerson(query){
    this.profileApi.findByQuery(query).subscribe((response:any)=>{
      PEOPLE.splice(0,PEOPLE.length)
      for(let i=0;i<response.people.length;i++){
        PEOPLE.push(response.people[i])
      }
    })
    this.clearDisplay=!this.clearDisplay
    this.queryResponse.emit();
  }

  clearResults(){
    this.clearResponse.emit()
    this.searchbox.nativeElement.value=""
    this.clearDisplay=!this.clearDisplay
  }

}
