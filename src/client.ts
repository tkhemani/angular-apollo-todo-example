import { ApolloClient, createNetworkInterface } from 'apollo-client';

// replace `__SIMPLE_API_ENDPOINT__` with the your custom endpoint
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })

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
