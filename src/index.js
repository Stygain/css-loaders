/** @jsx jsx */
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { jsx, Global, css } from '@emotion/core';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App.js';


const globalStyles = css`
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
`;

ReactDOM.render(
  <div>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
