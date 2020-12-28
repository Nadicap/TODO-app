import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditTaskComponent } from '../add-edit-task/add-edit-task.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor (
    private data: TodoService,
    public dialog: MatDialog
  ) {}
  
  ngOnInit() {
  }

  todos: any[] = this.data.getTodos();

  deleteItem(id) {
    this.data.deleteTodo(id);
    return this.todos;
  }

  openEditDialog(todo) {
    const defaultConfig: MatDialogConfig = {
      width: '350px',
      panelClass: 'edit-dialog'
    };

    const dialogConfig = {
      ...defaultConfig,
      data: {
        edit: true,
        todo
      },
    };

    this.dialog.open(AddEditTaskComponent, dialogConfig);
  }

}
