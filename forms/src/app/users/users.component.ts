import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {UsersService} from './../users.service';
import {StandardFormsComponent} from 'standard-forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll()
    .subscribe((data: any) => {
      console.log({data})
      this.users = data
    });
  }

}
