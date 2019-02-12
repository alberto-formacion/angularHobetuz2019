import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  listaTodos: Array<Todo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log('hola');
    this.todoService.getTodos()
      .subscribe(resultado => this.listaTodos = resultado);
  }
}
