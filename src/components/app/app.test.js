import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`component is rendered correctly`, () => {
    const markup = renderer
      .create(<App/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
