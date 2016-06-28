import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export default class ReversePipe {
  transform(todos: any[]) {
    if (todos) {
      return todos.slice().reverse();
    }
  }
}
