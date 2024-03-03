import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number = 0;

  handleAdd() {
    if (this.count >= 5) {
      alert("Can't go beyond 5");
      return;
    }
    this.count = this.count + 1;
  }

  handleSubtract() {
    if (this.count <= 0) {
      alert("Can't go beyond 0");
      return;
    }
    this.count = this.count - 1;
  }
}
