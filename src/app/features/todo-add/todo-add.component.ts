import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../core/services/todo.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {
  features = [
    'Important - Urgent',
    'Important - Not Urgent',
    'Not Important - Urgent',
    'Not Important - Not Urgent',
  ];

  todoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      feature: [''],
      dueDate: [''],
    });
  }

  onSubmit() {
    console.log(this.todoForm.value);
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value);
      this.router.navigate(['/']);
    }
  }
}
