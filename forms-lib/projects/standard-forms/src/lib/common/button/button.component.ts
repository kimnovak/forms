import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Output() performAction = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: Event) {
    this.performAction.emit(event);
  }

}
