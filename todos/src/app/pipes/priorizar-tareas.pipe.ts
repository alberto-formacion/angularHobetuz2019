import { Todo } from './../todos/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorizarTareas'
  // , pure: false
})
export class PriorizarTareasPipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    console.log('priorizarTareas');
    return todos.sort((a, b) => (b.importante && !a.importante) ? 1 : -1);
    /*return todos.sort(function(a,b){
      if (b.importante && !a.importante){
        return 1;
      } else {
        return -1;
      }
    });*/
  }

}
