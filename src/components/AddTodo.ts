import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

import TodoTextInput from './TodoTextInput.ts';

@Component({
  selector: 'add-todo',
  directives: [
    TodoTextInput,
  ],
  template: `
    <todo-text-input
      className='new-todo'
      (onSave)="_handleSave($event)"
      placeholder='Add...'>
    </todo-text-input>
  `
})
export default class AddTodo {
  @Output() onSave: EventEmitter<string> = new EventEmitter();

  _handleSave (text: string) {
    this.onSave.emit(text);
  }
}
