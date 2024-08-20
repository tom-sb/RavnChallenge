import { ApolloClient, InMemoryCache } from '@apollo/client';

const url: string = String(import.meta.env.VITE_GQL_URL);

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;