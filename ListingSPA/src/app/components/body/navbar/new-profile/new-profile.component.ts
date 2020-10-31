import { Component,ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

import {ProfileApiService} from '../../../../services/profile-api.service';
import {PEOPLE} from '../../../../shared/mock-profiles';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  display:boolean=true;
  editForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private activatedRouter:ActivatedRoute,private profileApi:ProfileApiService) { }

  ngOnInit(): void {
    //handling form
    this.editForm=this.fb.group({
      name:['',Validators.required],
      age:[null,[Validators.required,Validators.min(0),Validators.max(120)]],
      gender:['',Validators.required],
      blood:['',Validators.required],
      bdate:[null,Validators.required],
      phone:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:[null,[Validators.required,Validators.email]],
    });
  }

  submitEditForm(editForm:FormGroup){
    console.log('Valid?', editForm.valid); // true or false
    let newCard ={
      name:editForm.value.name,
      age:editForm.value.age,
      gender:editForm.value.gender,
      phone:editForm.value.phone,
      email:editForm.value.email,
      bloodGroup:editForm.value.blood,
      birthDate:editForm.value.bdate
    }

    PEOPLE.push(newCard)
    this.display=!this.display

    this.profileApi.createNew(newCard).subscribe((response:any)=>{
      console.log(response)
    })

    //navigate to listing page
    this.router.navigateByUrl('/');
  }

}
