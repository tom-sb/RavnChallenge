
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
  ###Note: Every time you create a query, mutation or subscrption run line above.

  ## Run the project
  - npm run dev
# Description
El proyecto se trata de una manejador de tareas con dos vistas Dashboard y Task.
Se usan listas de cards, cada lista es un status y los card puedes moverse atraves de estas listas.
La gestion de datos se hace con Graphql, es necesario construir queries y mutations estas estan en sus respectivos directorios.
### Drag and Drop
![ezgif com-animated-gif-maker](https://github.com/user-attachments/assets/c7e48abf-ecc5-4b39-8fd2-c670358887b2)
### Create Task
![ezgif com-animated-gif-maker (2)](https://github.com/user-attachments/assets/3936618c-f3b4-4926-9a83-7b1802875a7d)

### Edit Task
![ezgif com-animated-gif-maker (1)](https://github.com/user-attachments/assets/4fac4c79-e615-4768-b8bd-6e1b1ecda590)

### Why Vite?
- Vite is faster startup times than other tools like Webpack, focus on on-demand compilation, use of native ESModules and provides real-time reloading.
### Why Apollo Graphql?
- Because it simplifies data management in frontend applications by enabling efficient queries and mutations, and Apollo optimizes network requests through cache management, and offers advanced tools for global state management.
### Why MaterialUI?
- Because it offers pre-built and customizable UI components and it has excellent documentation making it easy to integrate and use.
### Other Libraries used
-material ui and icons-material
- formik and yup
- react-beautiful-dnd
## Visit the site:
[https://ravn-challenge.vercel.app/](https://ravn-challenge.vercel.app/)

