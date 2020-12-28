import { Component, OnInit, Inject } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})

export class AddEditTaskComponent implements OnInit {
  edit: boolean;
  todo: any;
  form: FormGroup;
  dialogTitle: string;
  placeholder: string;

  constructor (
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private myData: TodoService
  ) {

    this.edit = data.edit;
    this.todo = data.todo;

    this.form = fb.group({
      title: [data.todo ? data.todo.title : undefined, Validators.required],
  });

    if (this.edit) {
      this.dialogTitle = 'Edit todo';
      this.placeholder = 'edit todo';
    } else {
      this.dialogTitle = 'New todo';
      this.placeholder = 'new todo';
    }
  }

  ngOnInit() {}

  todos: any[] = this.myData.getTodos();
  lastId: number = this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.edit ?
    this.myData.editTodo(this.data.todo.id, this.form.value.title)
    : this.myData.addTodo(this.lastId + 1, this.form.value.title);
    this.dialogRef.close();
  }
}