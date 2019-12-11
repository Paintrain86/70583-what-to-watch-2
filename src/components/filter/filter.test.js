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
  it(`Filter should render correctly`, () => {
    const markup = renderer
      .create(<Filter
        filterItems={filters}
        onFilterChange={jest.fn()}
        activeItem={`crime`}
        onActiveItemChange={jest.fn()}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
