import {
  Component
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
      onSave="_handleSave($event)"
      placeholder='Add...'>
    </todo-text-input>
  `
})
export default class AddTodo {
  _handleSave (text) {
    console.log('AddTodo', text);
  }
}
