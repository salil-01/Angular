import { Component } from '@angular/core';
// logic for my first component
@Component({
  // selector is used as html tag in other components to render this component, naming convention is app-component name
  selector: 'app-myfirstcomponent',

  // template url which will contain the path of html file used for this component
  templateUrl: './myfirstcomponent.component.html',

  // styleUrls is an array so we can mulitple css files and give path inside array which get applied for the html of this component
  styleUrls: ['./myfirstcomponent.component.css'],
})
export class MyfirstcomponentComponent {
  name = 'salil';
}
