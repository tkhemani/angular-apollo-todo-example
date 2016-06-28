import {
  Component
} from '@angular/core';

import {
  Apollo
} from 'angular2-apollo';

import gql from 'graphql-tag';

import {
  client
} from '../client.ts';

import AddTodo from './AddTodo.ts';
import TodoList from './TodoList.ts';
import TodoListFooter from './TodoListFooter.ts';

@Component({
  selector: 'todo-app',
  directives: [
    AddTodo,
    TodoList,
    TodoListFooter
  ],
  template: `
  <div>
    <section class='todoapp'>
      <header class='header'>
        <add-todo
          (onSave)="addTodo($event)">
        </add-todo>
      </header>
      <todo-list
        [todos]="todos.allTodos"
        [filter]="filter"
        (renameTodo)="rename($event)"
        (deleteTodo)="delete($event)"
        (toggleTodo)="toggle($event)">
      </todo-list>
      <todo-list-footer (onFilter)="onFilter($event)"></todo-list-footer>
    </section>
    <footer class='info'>
      <p>
        Double-click to edit a todo
      </p>
    </footer>
  </div>
  `
})
@Apollo({
  client,
  mutations(context: TodoApp) {
    return {
      addTodo: (text) => ({
        mutation: gql`
          mutation addTodo($text: String!) {
            createTodo(complete: false, text: $text) { id }
          }
        `,
        variables: { text },
      }),
      renameTodo: (todo, text) => ({
        mutation: gql`
          mutation renameTodo($id: ID!, $text: String!) {
            updateTodo(id: $id, text: $text) { id }
          }
        `,
        variables: {
          id: todo.id,
          text,
        },
      }),
      deleteTodo: (todo) => ({
        mutation: gql`
          mutation deleteTodo($id: ID!) {
            deleteTodo(id: $id) { id }
          }
        `,
        variables: {
          id: todo.id,
        },
      }),
      toggleTodo: (todo, complete) => ({
        mutation: gql`
          mutation toggleTodo($id: ID!, $complete: Boolean!) {
            updateTodo(id: $id, complete: $complete) { id }
          }
        `,
        variables: {
          id: todo.id,
          complete,
        },
      }),
    }
  },
  queries() {
    return {
      todos: {
        query: gql`
          query Todos {
            allTodos {
              id
              complete
              text
            }
          }
        `,
        forceFetch: false,
        pollInterval: 1000,
      }
    }
  }
})
export default class TodoApp {
  todos: any[];
  filter: string;
  renameTodo: (todo: any, text: string) => Promise<any>;
  toggleTodo: (todo: any, complete: boolean) => Promise<any>;
  deleteTodo: (todo: any) => Promise<any>;

  onFilter(filter: string) {
    this.filter = filter;
  }

  rename({
    todo,
    text
  }) {
    this.renameTodo(todo, text);
  }

  toggle({
    todo,
    complete
  }) {
    this.toggleTodo(todo, complete);
  }

  delete({
    todo
  }) {
    this.deleteTodo(todo);
  }
}
