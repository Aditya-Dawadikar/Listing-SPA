import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/body/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardEditComponent } from './components/body/card-edit/card-edit.component';
import { CardDeleteComponent } from './components/body/card-delete/card-delete.component';
import { EditDialogComponent } from './components/body/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CardComponent,
    CardEditComponent,
    CardDeleteComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
