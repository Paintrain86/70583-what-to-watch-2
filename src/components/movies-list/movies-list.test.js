import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

describe(`MoviesList`, () => {
  it(`component is rendered correctly`, () => {
    const testMovies = [
      {
        title: `Тестовая киношка`,
        picture: `images/image.jpg`
      },
      {
        title: `Тестовая киношка2`,
        picture: `images/image2.jpg`
      },
      {
        title: `Тестовая киношка3`,
        picture: `images/image3.jpg`
      },
      {
        title: `Тестовая киношка4`,
        picture: `images/image4.jpg`
      }
    ];
    const markup = renderer
      .create(<MoviesList movies={testMovies}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
