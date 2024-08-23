
# Challenge 
# Instrucciones
## Create project
  - install node, project use 20.12.0 but you ca use 18+ version.
  ### Create project whit Vite:
  - npm create vite nombre-proyecto --template
  - next choose react and typescript options
  ### Install apollo graphql
  - npm install @apollo/client graphql
  - npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo

## configurar apollo graphql
  - crear el file apollo-client.ts  y agregar esta configuracion:
```ts
// apollo-client.ts
const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // Reemplaza con tu endpoint GraphQL
  cache: new InMemoryCache(),
});

import { ApolloClient, InMemoryCache } from '@apollo/client';

const url: string = String(import.meta.env.VITE_GQL_URL);

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;

```
- finally run:
- npx graphql-codegen init
# Description
El proyecto se trata de una manejador de tareas con dos vistas Dashboard y Task.
Se usan listas de cards, cada lista es un status y los card puedes moverse atraves de estas listas.
La gestion de datos se hace con Graphql, es necesario construir queries y mutations estas estan en sus respectivos directorios.
### Why Vite?
- Vite is faster startup times than other tools like Webpack, focus on on-demand compilation, use of native ESModules and provides real-time reloading.
### Why Apollo Graphql?
- Because it simplifies data management in frontend applications by enabling efficient queries and mutations, and Apollo optimizes network requests through cache management, and offers advanced tools for global state management.
### Why MaterialUI?
- Because it offers pre-built and customizable UI components and it has excellent documentation making it easy to integrate and use.
### Libraries used
## Visit the site:
[https://ravn-challenge.vercel.app/](https://ravn-challenge.vercel.app/)

