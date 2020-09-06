import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { Mode } from '../app.component';

@Component({
  selector: 'forms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit, OnChanges {
  @Input() mode;
  @Input() metaData;
  @Input() selected;
  label: string = 'Test Label'
  type: string = "text"
  columns = [];
  accessors = []
  proxy = {}

  constructor() { }

  ngOnInit(): void {
    this.columns = this.metaData?.columns;
    this.accessors = this.metaData?.columns.map((column) => column.accessor);
    this.updateProxy(this.selected)
  }

  ngOnChanges(changes): void {
    this.updateProxy(changes.selected.currentValue)
  }

  updateProxy(selected) {
    const tempProxy = {};
    this.accessors.forEach((accessor: string) => {
      tempProxy[accessor] = Mode.EDIT ? selected[accessor] || '' : null;
    })
    this.proxy = tempProxy;
  }
}
