import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import client from './apollo-client.ts'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
//import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
)
