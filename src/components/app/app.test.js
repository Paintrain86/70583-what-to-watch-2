import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`component is rendered correctly`, () => {
    const testMovies = [
      {
        id: 1,
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

    const markup = renderer
      .create(<App movies={testMovies}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
