import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

import {ProfileApiService} from '../../../services/profile-api.service';
import {PEOPLE} from '../../../shared/mock-profiles';
import {Person} from '../../../shared/profiles';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  people=PEOPLE;
  person:Person;
  editForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private activatedRouter:ActivatedRoute,private profileApi:ProfileApiService) { }

  ngOnInit(): void {
    //handling path
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    let index = this.people.findIndex(person=>{
      return String(id)===String(person._id);
    })
    this.person=this.people[index];

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
    alert("profile will be editted")
    let index = this.people.findIndex(person=>{
      return String(this.person._id)===String(person._id);
    })

    console.log('Valid?', editForm.valid); // true or false

    let updatedPerson={
      name:editForm.value.name,
      age:editForm.value.age,
      gender:editForm.value.gender,
      phone:editForm.value.phone,
      email:editForm.value.email,
      bloodGroup:editForm.value.blood,
      birthDate:editForm.value.bdate
    }

    PEOPLE.splice(index,1,updatedPerson)

    this.profileApi.editProfile(this.person._id,updatedPerson).subscribe((response)=>{
      console.log(response);
    })

    //navigate to listing page
    this.router.navigateByUrl('/');
  }
}
