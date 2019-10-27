import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`MoviesList`, () => {
  it(`More button is clickable!`, () => {
    const clickMore = jest.fn();
    const testMovies = [`test`, `list`, `component`, `enzyme`];
    const movie = shallow(<MoviesList
      movies={testMovies}
      onMoreClick={clickMore}
    />);

    const btn = movie.find(`.catalog__button`);

    btn.simulate(`click`);
    expect(clickMore).toHaveBeenCalledTimes(1);
  });
});
