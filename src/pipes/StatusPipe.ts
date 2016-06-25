import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'status'
})
export default class StatusPipe {
  transform(todos: any[], status?: string) {
    if (todos) {
      const complete = {
        ALL: undefined,
        ACTIVE: false,
        COMPLETED: true
      }[(status || '').toUpperCase()];

      return todos.filter(
        (todo) => typeof complete === 'undefined' || todo.complete === complete
      );
    }
  }
}
