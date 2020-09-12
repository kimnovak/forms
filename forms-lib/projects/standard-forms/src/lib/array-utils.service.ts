import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayUtilsService {

  constructor() { }

  getItemIndex(item, collection) {
    if(!item || !collection) return
    return collection.indexOf(item)
  }

  isLast(item, collection: any[]) {
    if(!item || !collection) return
    return this.getItemIndex(item, collection) === collection.length - 1;
  }

  isFirst(item, collection: any[]) {
    if(!item || !collection) return
    return this.getItemIndex(item, collection) === 0;
  }

  getNext(item, collection: any[]) {
    if(!item || !collection) return
    return this.isLast(item, collection) ? collection[0] : collection[this.getItemIndex(item, collection) + 1];
  }

  getPrevious(item, collection: any[]) {
    if(!item || !collection) return
    return this.isFirst(item, collection) ? collection[collection.length - 1] : collection[this.getItemIndex(item, collection) - 1];
  }
}
