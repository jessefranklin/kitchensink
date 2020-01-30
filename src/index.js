import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import configureStore from './store/';
import './index.css';
import App from './App';

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

const httpLink = new HttpLink({ uri: 'http://localhost:8080/graphql' });

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), 
  cache: new InMemoryCache()
});

// Initialize store
const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
