import { Todo } from './../todos/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinTerminar'
  // , pure: false
})
export class SinTerminarPipe implements PipeTransform {
  transform(todos: Array<Todo>): Array<Todo> {
    console.log('sinTerminar');
    return todos.filter(todo => !todo.terminada);
    /*return todos.filter(function(todo) {
      return !todo.terminada;
    });*/
  }

}
