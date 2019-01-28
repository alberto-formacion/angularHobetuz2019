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
    // this.todos.push(this.todo);
    this.todos = [...this.todos, this.todo];
    this.todo = new Todo('', false, false);
  }

  terminarTarea(todo: Todo): void {
    const todoIndex = this.todos.indexOf(todo);
    const newTodo = new Todo(todo.nombre, true, todo.importante);
    this.todos = [
      ...this.todos.slice(0, todoIndex),
      newTodo,
      ...this.todos.slice(todoIndex + 1)
    ];
    // todo.terminada = true;
  }

  modificarEstilos(todo: Todo) {
    const clases = {
      'estiloImportante': todo.importante,
      'estiloTerminada': todo.terminada
    };
    return clases;
  }

}
