import React from 'react';
import ReactDOM from 'react-dom';

import films from './mocks/films.js';
import App from './components/app/app.jsx';

const init = () => {
  ReactDOM.render(
      <App
        movies={films}
      />,
      document.querySelector(`#root`)
  );
};

init();
