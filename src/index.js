import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Layout from './layout/Layout'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
console.log(createStore)
ReactDOM.render(
  <Layout/>,
  document.getElementById('root')
);
registerServiceWorker();
