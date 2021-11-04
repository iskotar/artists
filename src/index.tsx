import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './components/App'
import {ApolloProvider} from '@apollo/client'
import {BrowserRouter} from "react-router-dom";
import client from "./client";


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
