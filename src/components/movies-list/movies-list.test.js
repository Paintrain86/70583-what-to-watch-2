import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const testMovies = [
  {
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
  },
  {
    id: 2,
    genre: `horror`,
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

describe(`MoviesList`, () => {
  it(`MoviesList should render correctly`, () => {
    const markup = renderer
      .create(<MoviesList
        movies={testMovies}
        activeItem={1}
        onActiveItemChange={jest.fn()}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
