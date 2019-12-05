import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer.js';

import App from './app.jsx';

describe(`App`, () => {
  it(`component is rendered correctly`, () => {
    const testMovies = [
      {
        id: 1,
        genre: `blyat`,
        title: `Тестовая киношка`,
        poster: `images/image.jpg`,
        previews: [
          {
            src: `movies/movie.mp4`,
            type: `video/mp4`
          }
        ]
      },
      {
        id: 2,
        genre: `blyat`,
        title: `Тестовая киношка2`,
        poster: `images/image2.jpg`,
        previews: [
          {
            src: `movies/movie2.mp4`,
            type: `video/mp4`
          }
        ]
      }
    ];
    const store = createStore(reducer);

    const markup = renderer
      .create(
          <Provider store={store}>
            <App
              movies={testMovies}
            />
          </Provider>
      )
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
