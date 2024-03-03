import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-items',
  templateUrl: './skill-items.component.html',
  styleUrls: ['./skill-items.component.css'],
})
export class SkillItemsComponent {
  @Input() skillItems: string[] = [];

  ngOnInit() {
    console.log(this.skillItems);
  }

  handleShowSkillName(name: string) {
    alert(name);
  }
}
