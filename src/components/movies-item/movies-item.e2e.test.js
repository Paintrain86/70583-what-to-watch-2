import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesItem from './movies-item.jsx';

Enzyme.configure({adapter: new Adapter()});

const testMoviesItem = {
  id: 1,
  genre: `documentary`,
  title: `Тестовая киношка`,
  poster: `images/image.jpg`,
  previews: [
    {
      src: `movies/movie.mp4`,
      type: `video/mp4`
    }
  ]
};

describe(`MoviesItem`, () => {
  it(`MoviesItem should be clickable!`, () => {
    const clickName = jest.fn();
    const testProps = {
      movie: testMoviesItem,
      isActive: false,
      onNameClick: clickName
    };
    const movie = shallow(<MoviesItem {...testProps}/>);

    const btn = movie.find(`.small-movie-card__link`);

    btn.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(clickName).toHaveBeenCalledTimes(1);
  });

  it(`MoviesItem should be hoverable`, () => {
    const onEnter = jest.fn();
    const onLeave = jest.fn();
    const testProps = {
      movie: testMoviesItem,
      isActive: false,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    };

    const movie = shallow(<MoviesItem {...testProps}/>);

    expect(movie.state(`isActive`)).toBe(false);

    movie.simulate(`mouseenter`);
    expect(movie.state(`isActive`)).toBe(true);

    movie.simulate(`mouseleave`);
    expect(movie.state(`isActive`)).toBe(false);
  });
});
