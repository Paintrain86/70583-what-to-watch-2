import React from 'react';
import renderer from 'react-test-renderer';
import MoviesItem from './movies-item.jsx';

const testMoviesItem = {
  id: 1,
  genre: `documentary`,
  title: `Тестовая киношка`,
  poster: `images/image.jpg`,
  previews: [
    {
      src: `movies/movie.mp4`,
      type: `video/mp4`
    }
  ]
};

describe(`MoviesItem`, () => {
  it(`component is rendered correctly`, () => {
    const testProps = {
      movie: testMoviesItem,
      isActive: false
    };

    const markup = renderer
      .create(<MoviesItem {...testProps}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
