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

  constructor() {
    this.todos = new Array<Todo>();
  }

  ngOnInit() {
    this.todo = new Todo('', false, false);
  }

  addTodo() {
    this.todos.push(this.todo);
    this.todo = new Todo('', false, false);
  }

  terminarTarea(todo: Todo): void {
    todo.terminada = true;
  }

  modificarEstilos(todo: Todo) {
    const clases = {
      'estiloImportante': todo.importante,
      'estiloTerminada': todo.terminada
    };
    return clases;
  }

}
