import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
// import App from './App';
import Layout from './layout/Layout'
import registerServiceWorker from './registerServiceWorker';
// console.log(<App/>)
ReactDOM.render(
  <Layout/>,
  document.getElementById('root')
);
registerServiceWorker();
