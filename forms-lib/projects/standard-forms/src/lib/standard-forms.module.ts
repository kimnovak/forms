import { NgModule } from '@angular/core';
import { StandardFormsComponent } from './standard-forms.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './common/button/button.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StandardFormsComponent, ToolbarComponent, TableComponent, FormComponent, ButtonComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [StandardFormsComponent]
})
export class StandardFormsModule { }
