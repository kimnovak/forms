import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './common/button/button.component';

import './../scss/index.scss';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {StandardFormsModule} from 'standard-forms'

@NgModule({
  declarations: [
    AppComponent,
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
