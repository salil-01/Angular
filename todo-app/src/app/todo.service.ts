import { Injectable } from '@angular/core';

interface todoItem {
  id: number;
  text: string;
  status: boolean;
  editing: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // constructor() { }
  todoList = [
    { id: 1, text: 'Learn React', status: false, editing: false },
    { id: 2, text: 'Learn Angular', status: false, editing: false },
    { id: 3, text: 'Learn Vue', status: false, editing: false },
  ];

  addTodoItem(item: string): void {
    // this.todoList.push(item);
    const newTodo: todoItem = {
      id: this.todoList.length + 1,
      text: item,
      status: true,
      editing: false,
    };
    this.todoList.push(newTodo);
  }
}
