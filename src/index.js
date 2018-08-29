import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

ReactDOM.render(  
  <BrowserRouter>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </BrowserRouter>,
 document.getElementById('root'));

registerServiceWorker();
