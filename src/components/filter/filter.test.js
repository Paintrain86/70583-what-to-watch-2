import React from 'react';
import renderer from 'react-test-renderer';
import Filter from './filter.jsx';

const filters = [
  {
    genre: `crime`,
    name: `Crime`
  },
  {
    genre: `documentary`,
    name: `Documentary`
  },
  {
    genre: `drama`,
    name: `Dramas`
  }
];

describe(`Filter`, () => {
  it(`component should render correctly`, () => {
    const markup = renderer
      .create(<Filter filterItems={filters}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
