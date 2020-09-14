import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsersService } from './../users.service';
import { StandardFormsComponent } from 'standard-forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private usersService: UsersService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.usersService.getAll()
    .subscribe((data: any) => {
      this.users = data
    });
  }


  onAdd(value) {
    this.usersService.add(value)
      .subscribe(() => {
        this.usersService.getAll()
          .subscribe((data: any) => {
            this.users = {...data}
            this.cdr.detectChanges();
          });
      });
  }

  onEdit(value) {
    this.usersService.update(value)
      .subscribe(() => {
        this.usersService.getAll()
          .subscribe((data: any) => {
            this.users = {...data}
            this.cdr.detectChanges();
          });
      });
  }

  onRemove(id) {
    this.usersService.remove(id)
      .subscribe(() => {
        this.usersService.getAll()
          .subscribe((data: any) => {
            this.users = {...data}
            this.cdr.detectChanges();
          });
      });
  }

}
