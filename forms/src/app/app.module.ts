import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import {StandardFormsModule} from 'standard-forms';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    StandardFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
