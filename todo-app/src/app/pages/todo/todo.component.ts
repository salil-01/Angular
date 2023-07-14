import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
interface todoItem {
  id: number;
  text: string;
  status: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}
  // get todos
  get todoList(): todoItem[] {
    return this.todoService.todoList;
  }

  // edit todos
  startEditing(id: number) {
    this.todoService.startEditing(id);
  }
  stopEditing() {
    this.todoService.stopEditing();
  }
  isEditing(id: number): boolean {
    return this.todoService.isEditing(id);
  }

  // delete todo
  deleteItem(id: number) {
    this.todoService.deleteItem(id);
  }
}
