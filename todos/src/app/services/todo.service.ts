import { Todo } from './../todos/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  todos: Array<Todo>;
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/todos';
  }

  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.url);
  }

  addTodo(todo: Todo): Observable<Array<Todo>> {
    return this.http.post<Array<Todo>>(this.url, todo);
  }

  deleteTodo(todo: Todo): Observable<Array<Todo>> {
    return this.http.put<Array<Todo>>(this.url, todo);
  }

}
