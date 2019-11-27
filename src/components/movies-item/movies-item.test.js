import React from 'react';
import renderer from 'react-test-renderer';
import MoviesItem from './movies-item.jsx';

describe(`MoviesItem`, () => {
  it(`component is rendered correctly`, () => {
    const testProps = {
      movie: {
        title: `Тестовая киношка`,
        picture: `images/image.jpg`
      },
      isActive: false
    };
    const markup = renderer
      .create(<MoviesItem {...testProps}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
