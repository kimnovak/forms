import { Component, ViewEncapsulation, OnInit } from '@angular/core';

export enum Mode {
  ADD,
  EDIT,
  REMOVE,
  SEARCH
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  selected = null;
  metaData = {
    columns: [
      {
        label: "First Name",
        accessor: "firstName",
        type: "string"
      },
      {
        label: "Last Name",
        accessor: "lastName",
        type: "string"
      },
      {
        label: "Address",
        accessor: "address",
        type: "string"
      }
    ]
  }
  items = [
    {
      id: 1,
      firstName: "Petar Petrovic",
      address: "Adresa 1",
      email: "petar@petrovic.petar"
    },
    {
      id: 2,
      firstName: "Njegos Petrovic",
      address: "Adresa 2",
      email: "petar@petrovic.petar"
    },
    {
      id: 3,
      firstName: "Petar Petrovic",
      address: "Adresa 3",
      email: "petar@petrovic.petar"
    },
    {
      id: 4,
      firstName: "Petar Petrovic",
      address: "Adresa 4",
      email: "petar@petrovic.petar"
    }
  ]

  mode = Mode.EDIT;

  ngOnInit() {
    this.selected = this.items?.[1]
  }

  onSelectItem(item) {
    this.selected = item;
  }

  onSelectMode(mode) {
    this.mode = mode;
  }
}
