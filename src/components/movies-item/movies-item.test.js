import React from 'react';
import renderer from 'react-test-renderer';
import MoviesItem from './movies-item.jsx';

describe(`MoviesItem`, () => {
  it(`component is rendered correctly`, () => {
    const markup = renderer
      .create(<MoviesItem name="Test item"/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
