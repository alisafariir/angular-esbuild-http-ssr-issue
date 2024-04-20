import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
export interface Todo {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  todo: Todo = {};
  http: HttpClient = inject(HttpClient);

  getData() {
    this.todo.title = 'Not ssr';
    this.http
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .subscribe((res) => (this.todo = res));
  }

  ngOnInit(): void {
    this.getData();
  }
}
