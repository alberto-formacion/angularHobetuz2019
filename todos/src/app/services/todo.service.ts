import { Todo } from './../todos/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos: Array<Todo>;

  constructor() {
    this.todos = [
      new Todo('Sacar a Goku', false, true),
      new Todo('Sacar la basura', false, false)
    ];
  }

  getTodos(): Array<Todo> {
    return this.todos;
  }

  addTodo(todo: Todo): Array<Todo> {
    this.todos = [...this.todos, todo];

    return this.todos;
  }

  deleteTodo(todo: Todo): Array<Todo> {
    const todoIndex = this.todos.indexOf(todo);
    const newTodo = new Todo(todo.nombre, true, todo.importante);
    this.todos = [
      ...this.todos.slice(0, todoIndex),
      newTodo,
      ...this.todos.slice(todoIndex + 1)
    ];

    return this.todos;
  }

}
