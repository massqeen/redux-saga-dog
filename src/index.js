import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import watchFetchDog from './sagas/watchFetchDog';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const enhancerSaga = applyMiddleware(sagaMiddleware);
const enhancerReduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(enhancerSaga, enhancerReduxDevtools)
);
sagaMiddleware.run(watchFetchDog);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
