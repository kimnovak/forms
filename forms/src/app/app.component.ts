import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import {StandardFormsComponent} from 'standard-forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  ngOnInit() {

  }
}
