import { Component } from '@angular/core';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from './features/todo-add/todo-add.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodoListComponent,
    TodoAddComponent,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public router: Router) {}
}
