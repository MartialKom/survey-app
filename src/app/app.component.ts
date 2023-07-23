import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Survey forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    {title: 'Personal information', url:'/identification', icon:'person-circle'},
    {title: 'Book of John chapter 3', url:'/bible', icon:'book'}
  ];
  constructor() {}
}
