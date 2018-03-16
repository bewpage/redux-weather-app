import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
