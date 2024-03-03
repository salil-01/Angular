import { Component } from '@angular/core';
// logic for my first component
@Component({
  // selector is used as html tag in other components to render this component, naming convention is app-component name
  selector: 'app-myfirstcomponent',

  // template url which will contain the path of html file used for this component
  templateUrl: './myfirstcomponent.component.html',
  // we can write html directly in this file using template property, not recommended better to write in separate file then provide the path for it
  // i.e template `<div>Html goes here</div>`

  // styleUrls is an array so we can mulitple css files and give path inside array which get applied for the html of this component
  // we can use style property to write css directly here, not recommended better to write in separate file then provide the path for it
  styleUrls: ['./myfirstcomponent.component.css'],
})
export class MyfirstcomponentComponent {
  name: string = 'Salil';
  showName: boolean = false;
  skillItems: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];
  userDetails: any = {
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
  };

  userProfileData: any = {
    name: 'Salil Upadhyay',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    title: 'Frontend Developer',
    skillsets: [
      { icon: '', name: 'JavaScript' },
      { icon: '', name: 'Java' },
      { icon: '', name: 'Python' },
      { icon: '', name: 'C++' },
      { icon: '', name: 'Rust' },
      { icon: '', name: 'HTML' },
      { icon: '', name: 'CSS' },
    ],
  };

  handleClick = () => {
    if (this.name === 'Salil') {
      this.name = 'Salil Upadhyay';
    } else {
      this.name = 'Salil';
    }
    console.log('Button Clicked');
  };

  handleShowName = () => {
    this.showName = !this.showName;
  };
}
