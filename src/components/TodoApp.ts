import {
  Component
} from '@angular/core';

import {
  Apollo
} from 'angular2-apollo';

import gql from 'apollo-client/gql';

import {
  client
} from '../client.ts';

import AddTodo from './AddTodo.ts';

@Component({
  selector: 'todo-app',
  directives: [
    AddTodo,
  ],
  template: `
  <div>
    <section class='todoapp'>
      <header class='header'>
        <add-todo></add-todo>
      </header>
      <!--TodoList
        todos={this.props.todos.allTodos || []}
        filter={this.props.filter}
        renameTodo={this.props.mutations.renameTodo}
        deleteTodo={this.props.mutations.deleteTodo}
        toggleTodo={this.props.mutations.toggleTodo}
      />
      <TodoListFooter setFilter={this.props.setFilter} /-->
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
          {
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
  todos: any;
}
