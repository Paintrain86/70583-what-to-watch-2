import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

describe(`MoviesList`, () => {
  it(`component is rendered correctly`, () => {
    const testMovies = [`test`, `list`, `component`, `snapshot`];
    const markup = renderer
      .create(<MoviesList movies={testMovies}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
