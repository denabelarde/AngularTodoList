import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name = 'Denver';

  constructor() {
    this.changeName('Mhely');
  }

  changeName(name: string) {
    this.name = name;
  }

}
