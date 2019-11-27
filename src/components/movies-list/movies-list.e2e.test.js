import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`MoviesList`, () => {
  it(`More button is clickable!`, () => {
    const clickMore = jest.fn();
    const testProps = {
      movies: [
        {
          title: `Тестовая киношка`,
          picture: `images/image.jpg`
        },
        {
          title: `Тестовая киношка2`,
          picture: `images/image2.jpg`
        },
        {
          title: `Тестовая киношка3`,
          picture: `images/image3.jpg`
        },
        {
          title: `Тестовая киношка4`,
          picture: `images/image4.jpg`
        }
      ],
      onMoreClick: clickMore
    };

    const moviesList = shallow(<MoviesList {...testProps}/>);

    const btn = moviesList.find(`.catalog__button`);

    btn.simulate(`click`);
    expect(clickMore).toHaveBeenCalledTimes(1);
  });
});
