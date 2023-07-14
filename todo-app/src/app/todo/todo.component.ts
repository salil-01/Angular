import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
interface todoItem {
  id: number;
  text: string;
  status: boolean;
  editing: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get todoList(): todoItem[] {
    return this.todoService.todoList;
  }
  editItem(item: any) {
    item.editing = true;
  }

  saveItem(item: any) {
    item.editing = false;
  }

  cancelEdit(item: any) {
    item.editing = false;
  }

  deleteItem(item: todoItem) {
    const index = this.todoList.indexOf(item);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
