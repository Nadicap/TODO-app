import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: any[] = [ 
    {id: 1, title: 'This is the First todo!', checked: false},
    {id: 2, title: 'This is the Second todo!', checked: true},
    {id: 3, title: 'This is the Third todo!', checked: false},
  ];

  constructor() { }

  getTodos(){
    return this.todos;
  }

  addTodo(id:number, title: string) {
    return this.todos.push({id: id, title: title});
  }

  editTodo(id:number, title: string) {
    const todoIndex = this.todos.findIndex(x => x.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex] = {
        ...this.todos[todoIndex],
        title
      };
    }
  }
  
  deleteTodo(id:number) {
    const todoIndex = this.todos.findIndex(x => x.id === id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
    }
    return this.todos;
  }
}