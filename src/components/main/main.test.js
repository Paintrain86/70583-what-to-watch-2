import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

describe(`Main`, () => {
  it(`component is rendered correctly`, () => {
    const testMovies = [`test`, `main`, `component`, `snapshot`];
    const markup = renderer
      .create(<Main movies={testMovies}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
