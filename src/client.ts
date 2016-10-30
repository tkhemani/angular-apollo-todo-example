import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface =
  createNetworkInterface('https://api.graph.cool/simple/v1/citx14nsp0kvs01223qe42aod');

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {}
    }
    req.options.headers['x-graphcool-source'] = 'example:angular-apollo-todo'
    next()
  },
}]);

export const client = new ApolloClient({
  networkInterface,
});
