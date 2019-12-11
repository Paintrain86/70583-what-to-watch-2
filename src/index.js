import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import films from './mocks/films.js';
import App from './components/app/app.jsx';

import {reducer} from './reducer.js';

const init = () => {
  const store = createStore(
      reducer,
      (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

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
