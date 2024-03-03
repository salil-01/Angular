import { Component, OnInit, Input } from '@angular/core';

interface skillSetsInterface {
  icon: string;
  name: string;
}
interface userProfileDataInterface {
  name: string;
  avatar: string;
  title: string;
  skillsets: skillSetsInterface[];
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  @Input() userProfileData: userProfileDataInterface = {
    name: '',
    avatar: '',
    title: '',
    skillsets: [{ icon: '', name: '' }],
  };

  ngOnInit() {
    console.log(this.userProfileData);
  }
}
