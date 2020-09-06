import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

import {ArrayUtilsService} from './../array-utils.service';
import { Mode } from '../app.component';

@Component({
  selector: 'forms-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  @Output() selectItem = new EventEmitter();
  @Input() selected;
  @Input() items;
  @Input() mode;
  @Output() selectMode = new EventEmitter();
  Mode = Mode;

  constructor(private arrayUtils: ArrayUtilsService) { }

  ngOnInit(): void {
  }

  onAdd(event: Event) {
    this.selectMode.emit(Mode.ADD)
  }

  onEdit(event: Event) {
    this.selectMode.emit(Mode.EDIT)
  }

  onRemove(event: Event) {
    this.selectMode.emit(Mode.REMOVE)
  }

  onNext(event: Event) {
    this.selectItem.emit(this.arrayUtils.getNext(this.selected, this.items));
  }

  onPrevious(event: Event) {
    this.selectItem.emit(this.arrayUtils.getPrevious(this.selected, this.items));
  }

  onSelectFirst(event: Event) {
    this.selectItem.emit(this.items[0]);
  }

  onSelectLast(event: Event) {
    this.selectItem.emit(this.items[this.items.length - 1]);
  }

  onSearch(event: Event) {
    this.selectMode.emit(Mode.SEARCH)
  }

}
