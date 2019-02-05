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
    this.todos = this.todoService.getTodos();
    this.todo = new Todo('', false, false);
  }

  addTodo() {
    // this.todos.push(this.todo);
    this.todos = this.todoService.addTodo(this.todo);
    this.todo = new Todo('', false, false);
  }

  terminarTarea(todo: Todo): void {
    this.todos = this.todoService.deleteTodo(todo);
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
