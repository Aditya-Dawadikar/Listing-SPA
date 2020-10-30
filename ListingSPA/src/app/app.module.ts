import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/body/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/body/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './components/body/edit-dialog/edit-dialog.component';
import { NewProfileComponent } from './components/body/navbar/new-profile/new-profile.component';
import { ProfileComponent } from './components/body/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CardComponent,
    EditDialogComponent,
    NewProfileComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
