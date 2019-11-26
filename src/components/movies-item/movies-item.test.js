import React from 'react';
import renderer from 'react-test-renderer';
import MoviesItem from './movies-item.jsx';

describe(`MoviesItem`, () => {
  it(`component is rendered correctly`, () => {
    const testProps = {
      movie: {
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
      isActive: false
    };

    const markup = renderer
      .create(<MoviesItem {...testProps}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
