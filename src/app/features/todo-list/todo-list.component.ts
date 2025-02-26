import { Component, OnInit } from '@angular/core';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { TodoService } from '../../core/services/todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDetailsComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  features = [
    'Important - Urgent',
    'Important - Not Urgent',
    'Not Important - Urgent',
    'Not Important - Not Urgent',
  ];

  todos$: any;
  list: any;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
    this.getTodosByFeature('Important - Urgent');
  }

  getTodosByFeature(feature: string) {
    return this.todoService.todos$.subscribe((todos) => {
      this.list = todos;
    });
  }
}
