import { Injectable } from '@angular/core';

interface todoItem {
  id: number;
  text: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // constructor() { }
  todoList = [
    { id: 1, text: 'Learn React', status: false },
    { id: 2, text: 'Learn Angular', status: false },
    { id: 3, text: 'Learn Vue', status: false },
  ];
  editedItemId: number | null = null;

  addTodoItem(item: string): void {
    // this.todoList.push(item);
    const newTodo: todoItem = {
      id: this.todoList.length + 1,
      text: item,
      status: true,
    };
    this.todoList.push(newTodo);
  }
  startEditing(id: number) {
    this.editedItemId = id;
  }
  stopEditing() {
    this.editedItemId = null;
  }
  isEditing(id: number): boolean {
    return this.editedItemId === id;
  }

  deleteItem(id: number) {
    // filtering out the deleted
    const updatedTodo = this.todoList.filter((el: todoItem) => el.id !== id);
    // updating original array
    this.todoList = updatedTodo;
  }
}
