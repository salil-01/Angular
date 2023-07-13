import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  maxx = 10;
  count = 0;
  isDisabled = false;
  increment() {
    if (this.count < this.maxx) {
      this.count++;
    }
    this.updateButton();
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
    this.updateButton();
  }
  private updateButton() {
    this.isDisabled = this.count === this.maxx;
  }
}
