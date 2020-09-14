import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'forms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges {
  @Input() selected;
  @Input() items: [] = [];
  @Input() metaData;
  columns = []

  @Output() selectItem = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
    this.columns = this.metaData?.columns
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.items) {
      this.items = changes.items.currentValue;
    }
    if(changes.metaData) {
      this.metaData = changes.metaData.currentValue;
      this.columns = this.metaData?.columns;
    }
  }

  onSelectItem(item) {
    this.selectItem.emit(item);
  }

}
