import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { USERS } from 'src/app/USERS';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Column } from 'src/app/interfaces/column';

function defineColumn<T extends Column>(column: T): T {
  return column;
}

const COLUMNS = [
  defineColumn({
    name: 'id' as const,
    title: "Id",
  }),
  defineColumn({
    name: 'name' as const,
    title: 'Name',
  }),
  defineColumn({
    name: 'birthday' as const,
    title: 'Birthday',
  }),
  defineColumn({
    name: 'sex' as const,
    title: 'Sex',
  }),
  defineColumn({
    name: 'risk' as const,
    title: 'Risk',
  }),
  defineColumn({
    name: 'card' as const,
    title: 'Card',
  }),
  defineColumn({
    name: 'registered' as const,
    title: 'Registered',
  }),
  defineColumn({
    name: 'points' as const,
    title: 'Points',
  })
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements AfterViewInit {
  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource(USERS);
  }

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'name', 'birthday', 'sex', 'risk', 'card', 'registered', 'points'];
  users: User[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
