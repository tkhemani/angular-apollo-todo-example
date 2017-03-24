# angular-apollo-todo-example

### 1. Grab the code 🤓

First download or clone this repository by executing these commands in a terminal:

```sh
git clone https://github.com/graphcool-examples/angular-apollo-todo-example.git
cd angular-apollo-todo-example
```


### 2. Get your GraphQL endpoint with the [Graphcool CLI](https://www.npmjs.com/package/graphcool) ⚙

<details>
<summary>
What is the Graphcool CLI and how do I get it?
</summary> 
The Graphcool CLI is a command-line tool that allows to interact with our platform from a terminal. It provides similar capabalities as the <a href='https://console.graph.cool'>Graphcool console</a> and particularly makes it easy to create new projects using the 
 <code>graphcool create</code> command.
You can easily install the the Graphcool CLI by calling <code>npm install graphcool</code> in a terminal. 
<br>
</details>
<br>

This is the data model for our example app (you can find it [here](https://github.com/graphcool-examples/angular-apollo-todo-example/blob/master/todo.schema) in the repo):

```graphql
type Todo {
  text: String!
  complete: Boolean!
}
```

Next, provide this schema as an input argument to `graphcool create` in a terminal:

```sh
graphcool create todo.schema 
```

Copy the resulting endpoint for the `Simple API` and use it in the next step.


### 3. Connect the example project with the GraphQL server 🛰

Open `./src/main.js` and provide the endpoint as the `uri` argument to the `createNetworkInterface` call:

```js
// replace `__SIMPLE_API_ENDPOINT__` with the endpoint from the previous step
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })
```

Awesome! The `ApolloClient` that gets instantiated with the `networkInterface` now knows which server it can talk to.


### 4. Run the example 🎉

All that's left to do now is installing the app's dependencies and then running the application:

```sh
yarn install
yarn start
```

That's it, have fun exploring the project 🚀


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
