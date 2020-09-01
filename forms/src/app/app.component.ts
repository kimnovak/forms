import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  selected = null;
  items = [
    {
      id: 1,
      label: "Test label"
    },
    {
      id: 2,
      label: "Test label"
    },
    {
      id: 3,
      label: "Test label"
    },
    {
      id: 4,
      label: "Test label"
    }
  ]

  ngOnInit() {
    this.selected = this.items?.[1]
  }

  onSelectItem(item) {
    this.selected = item;
  }


}
