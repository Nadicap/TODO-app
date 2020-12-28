import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  edit: boolean;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const defaultConfig: MatDialogConfig = {
      width: '350px',
      panelClass: 'add-dialog'
    };

    const dialogConfig = {
      ...defaultConfig,
      data: {
        edit: false,
      },
    };

    this.dialog.open(AddEditTaskComponent, dialogConfig);
  }
 
};