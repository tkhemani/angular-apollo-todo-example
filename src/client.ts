import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface =
  createNetworkInterface('https://api.graph.cool/simple/v1/__PROJECT_ID__')

export const client = new ApolloClient({
  networkInterface,
});
