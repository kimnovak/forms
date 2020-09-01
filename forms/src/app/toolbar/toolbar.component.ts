import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'forms-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event: Event) {
  }

  onEdit(event: Event) {
  }

  onRemove(event: Event) {
  }

  onNext(event: Event) {
  }

  onPrevious(event: Event) {
  }

  onSelectFirst(event: Event) {
  }

  onSelectLast(event: Event) {
  }

  onSearch(event: Event) {
  }

}
