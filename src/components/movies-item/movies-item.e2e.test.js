import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesItem from './movies-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`MoviesItem`, () => {
  it(`it's clickable!`, () => {
    const clickName = jest.fn();
    const testProps = {
      movie: {
        id: 1,
        title: `Тестовая киношка`,
        poster: `images/image.jpg`,
        previews: [
          {
            src: `movies/movie.mp4`,
            type: `video/mp4`
          }
        ]
      },
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

  it(`it's hoverable`, () => {
    const onEnter = jest.fn();
    const onLeave = jest.fn();
    const testProps = {
      movie: {
        id: 1,
        title: `Тестовая киношка`,
        poster: `images/image.jpg`,
        previews: [
          {
            src: `movies/movie.mp4`,
            type: `video/mp4`
          }
        ]
      },
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
