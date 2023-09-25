import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ASM';
  myName: string = 'Le Thị Thanh';
  myInfo: { name: string, age: number } = {
    name: "Thanh",
    age: 21
  }
}