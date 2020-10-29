import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EditDialogComponent} from '../app/components/body/edit-dialog/edit-dialog.component';
import {NewProfileComponent} from '../app/components/navbar/new-profile/new-profile.component';
import {ProfileComponent} from '../app/components/body/profile/profile.component';

const routes: Routes = [
  {path:'edit/:id',component:EditDialogComponent},
  {path:'new',component:NewProfileComponent},
  {path:'profile/:id',component:ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
