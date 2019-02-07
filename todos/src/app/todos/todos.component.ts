import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo: Todo;
  todos: Array<Todo>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = [];
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      err => console.log(err)
    );
    this.todo = new Todo(0, '', false, false);
  }

  addTodo() {
    this.todoService.addTodo(this.todo).subscribe(
      todos => this.todos = todos,
      err => console.log(err)
    );
    this.todo = new Todo(0, '', false, false);
  }

  terminarTarea(todo: Todo): void {
    todo.terminada = true;
    this.todoService.deleteTodo(todo).subscribe(
      todos => this.todos = todos,
      err => console.log(err)
    );
  }

  modificarEstilos(todo: Todo) {
    const clases = {
      'estiloImportante': todo.importante,
      'estiloTerminada': todo.terminada
    };
    return clases;
  }

}
