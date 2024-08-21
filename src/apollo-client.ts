import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const url: string = import.meta.env.VITE_GQL_URL || "https://syn-api-prod.herokuapp.com/graphql";
const token: string = import.meta.env.VITE_API_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiMDU3MWIzYjAtY2JjYi00YmE0LTg1MWUtZjc4NWFkNmY4MDg5IiwicHJvamVjdElkIjoiODkzMjRmOTctMDNkNi00Y2NmLThmZjYtZDk0NDU3NTU1MzhmIiwiZnVsbE5hbWUiOiJGZXJuYW5kbyBWaWxsYW51ZXZhIFNhbmNoZXoiLCJlbWFpbCI6ImZ2aWxsYW51ZXZhbnV0QGdtYWlsLmNvbSIsImlhdCI6MTcyMzk0ODcxM30.WYvRLfcIMDcgLOv4Rhp2L7QTkcYsAuml95LxD5eRDVM";

const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;