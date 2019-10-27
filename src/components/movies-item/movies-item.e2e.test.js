import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesItem from './movies-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`MoviesItem`, () => {
  it(`it's clickable!`, () => {
    const clickName = jest.fn();
    const movie = shallow(<MoviesItem
      name="Тестовая киношка"
      onNameClick={clickName}
    />);

    const btn = movie.find(`.small-movie-card__link`);

    btn.simulate(`click`);
    expect(clickName).toHaveBeenCalledTimes(1);
  });
});
