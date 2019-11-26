import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

describe(`MoviesList`, () => {
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
      .create(<MoviesList movies={testMovies}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
