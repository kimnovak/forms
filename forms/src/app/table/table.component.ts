import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'forms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() selected;
  @Input() items: [] = [];

  @Output() selectItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(item) {
    this.selectItem.emit(item);
  }

}
