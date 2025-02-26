import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

export interface Todo {
  id: number;
  feature: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  addTodo(todo: {
    feature: string;
    title: string;
    description?: string;
    dueDate?: string;
  }) {
    const currentTodos = this.todos.value;
    const newId =
      currentTodos.length > 0
        ? currentTodos[currentTodos.length - 1].id + 1
        : 1;
    const newTodo: Todo = {
      ...todo, // Copy tất cả thuộc tính từ todo truyền vào
      id: newId, // Gán id mới
      completed: false, // Mặc định false
    };
    this.todos.next([...currentTodos, newTodo]);
  }

  removeTodo(id: number) {
    this.todos.next(this.todos.value.filter((todo) => todo.id !== id));
  }
}
