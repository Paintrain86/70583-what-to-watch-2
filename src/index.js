import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import {compose} from 'recompose';

import films from './mocks/films.js';
import App from './components/app/app.jsx';

import {reducer, operation} from './reducer.js';

const init = () => {
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk),
          (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(operation.loadMovies());

  ReactDOM.render(
      <Provider store={store}>
        <App
          movies={films}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
