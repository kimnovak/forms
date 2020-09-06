import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'forms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  @Input() mode;
  label: string = 'Test Label'
  type: string = "text"

  constructor() { }

  ngOnInit(): void {
  }

}
