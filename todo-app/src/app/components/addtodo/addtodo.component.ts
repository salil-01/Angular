import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent {
  newItemText: string = '';
  constructor(private todoService: TodoService) {}
  addItem() {
    // Add the new item to the todo list or perform any desired logic
    this.todoService.addTodoItem(this.newItemText);
    this.newItemText = '';
  }
}
