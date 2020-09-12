import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Mode } from '../standard-forms.component';

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
  emptyProxy = {}
  @Output() commitAction = new EventEmitter();
  @Output() cancelAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.columns = this.metaData?.columns;
    this.accessors = this.metaData?.columns.map((column) => column?.accessor);
    this.updateProxy(this.selected)
    Object.keys(this.proxy).forEach(key => {
      this.emptyProxy[key] = '';
    })
  }

  ngOnChanges(changes): void {
    if(changes.metaData) {
      this.metaData = changes.metaData.currentValue;
      this.columns = this.metaData?.columns;
      this.accessors = this.metaData?.columns.map((column) => column?.accessor);
      Object.keys(this.proxy).forEach(key => {
        this.emptyProxy[key] = '';
      })
    }
    if (changes.selected) {
      this.updateProxy(changes.selected.currentValue)
    }
    if (changes.mode) {
      this.mode = changes?.mode?.currentValue;
      this.updateProxy(this.selected);
    }
  }

  updateProxy(selected) {
    const tempProxy = {};
    this.accessors?.forEach((accessor: string) => {
      tempProxy[accessor] = this.mode === Mode.ADD ? null : selected?.[accessor] || '';
    })
    this.proxy = tempProxy;
  }

  onSubmit() {
    let submitData = {};
    if(this.mode === Mode.ADD || this.mode === Mode.SEARCH) {
      submitData = this.proxy;
    } else if (this.mode === Mode.EDIT) {
      submitData = {
        ...this.selected,
        ...this.proxy
      }
    } else if(this.mode === Mode.REMOVE) {
      submitData = this.selected;
    }
    this.commitAction.emit(submitData);
  }

  onCancel() {
    if (this.mode === Mode.EDIT) {
      this.proxy = this.selected;
    }
    if (this.mode === Mode.ADD) {
      console.log(this.emptyProxy)
      this.proxy = { ...this.emptyProxy }
    }
    if (this.mode === Mode.SEARCH) {
      this.proxy = { ...this.emptyProxy }
      this.cancelAction.emit();
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
}
