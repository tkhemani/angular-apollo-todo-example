# vue-apollo-instagram

### 1. Get your GraphQL endpoint ⚙

You first need to obtain a GraphQL endpoint so that you can connect to your own backend from the example application. You can do so using with the [Graphcool CLI](https://www.npmjs.com/package/graphcool).

Using the Graphcool CLI, you simply provide a data model and the GraphQL API will be generated for you. We already included the required [schema](https://github.com/graphcool-examples/vue-apollo-instagram-example/blob/master/instagram.schema) in this GitHub repo, here is what it looks like:

```graphql
type Post {
  description: String!
  imageUrl: String!
}
```

<details>
<summary>
What is the Graphcool CLI and how do I get it?
</summary> 
The Graphcool CLI is a command-line tool that allows to interact with our platform from a terminal. It provides similar capabalities as the <a href='https://console.graph.cool'>Graphcool console</a> and particularly makes it easy to create new projects using the 
 <code>graphcool create</code> command.
You can easily install the the Graphcool CLI by calling <code>npm install graphcool</code> in a terminal. 
</details>

After you cloned the repository, all you have to do is provide this schema as an input argument to `graphcool create` in a terminal:

```sh
git clone https://github.com/graphcool-examples/vue-apollo-instagram-example.git
cd vue-apollo-instagram-example
graphcool create instagram.schema 
```

This will generate two GraphQL endpoints:

- `Relay API`: Optimized for usage with [Relay](https://facebook.github.io/relay/)
- `Simple API`: Can be used with any GraphQL client but optimized for [Apollo](http://dev.apollodata.com/)

Since we're using Apollo in this example, we need to use the endpoint for the Simple API!


### 2. Connect the example project with the GraphQL server 🛰

You now have to tell the `ApolloClient` in the example project which GraphQL backend it should connect to. That is where we have to use the endpoint we generated in the previous step.

Open `./src/main.js` and provide the endpoint as the `uri` argument to the `createNetworkInterface` call:

```js
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })
```

Awesome! The `ApolloClient` that gets instantiated with the `networkInterface` now knows which server it can talk to.


### 3. Run the example 🎉

All that's left to do now is installing the app's dependencies and then running the application:

```sh
yarn install
yarn start
```

That's it, have fun exploring the project 🚀
