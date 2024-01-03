import { Component } from '@angular/core';
import { LoginComponent } from './Login/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
 // item='Data Transfer'

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    console.log(newItem)
    this.items.push(newItem);
  }
}
