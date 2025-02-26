import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './features/todo-add/todo-add.component';
import { TodoListComponent } from './features/todo-list/todo-list.component';
export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
];
