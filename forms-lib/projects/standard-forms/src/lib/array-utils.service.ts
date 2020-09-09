import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayUtilsService {

  constructor() { }

  getItemIndex(item, collection) {
    return collection.indexOf(item)
  }

  isLast(item, collection: any[]) {
    return this.getItemIndex(item, collection) === collection.length - 1;
  }

  isFirst(item, collection: any[]) {
    return this.getItemIndex(item, collection) === 0;
  }

  getNext(item, collection: any[]) {
    return this.isLast(item, collection) ? collection[0] : collection[this.getItemIndex(item, collection) + 1];
  }

  getPrevious(item, collection: any[]) {
    return this.isFirst(item, collection) ? collection[collection.length - 1] : collection[this.getItemIndex(item, collection) - 1];
  }
}
