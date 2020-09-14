import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


export enum Mode {
  ADD,
  EDIT,
  REMOVE,
  SEARCH
}


@Component({
  selector: 'lib-standard-forms',
  templateUrl: './standard-forms.component.html',
  styles: [
  ]
})
export class StandardFormsComponent implements OnInit, OnChanges {

  selected = null;
  metaData;
  items;

  unfilteredItems = [];

  mode = Mode.EDIT;

  @Input() data;

  @Output() add = new EventEmitter();

  @Output() edit = new EventEmitter();

  @Output() remove = new EventEmitter();

  ngOnInit() {
    this.metaData = this.data?.metaData;
    this.items = this.data?.results;
    this.selected = this.items?.[0]
    this.unfilteredItems = this.items;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({st: changes.data})
    if (changes.data) {
      this.data = changes.data.currentValue;
      this.metaData = this.data?.metaData;
      this.items = changes.data.currentValue.results;
      this.selected = this.items?.[0]
      this.unfilteredItems = this.items;
    }
  }

  onSelectItem(item) {
    this.selected = item;
  }

  onSelectMode(mode) {
    this.mode = mode;
  }

  onActionCommitted(value) {
    if (this.mode === Mode.SEARCH) {
      this.items = this.items.filter((item) => Object.keys(value).some(key => item[key]?.includes(value[key])))
    } else if (this.mode === Mode.ADD) {
      this.add.emit(value);
    } else if (this.mode === Mode.EDIT) {
      this.edit.emit(value);
    } else if (this.mode === Mode.REMOVE) {
      this.remove.emit(value?.id);
    }
  }

  onActionCanceled(event) {
    if (this.mode === Mode.SEARCH) {
      this.items = this.unfilteredItems;
    }
  }

}
