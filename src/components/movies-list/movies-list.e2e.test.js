import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`MoviesList`, () => {
  it(`More button should be clickable!`, () => {
    const clickMore = jest.fn();
    const testProps = {
      movies: [
        {
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
        {
          id: 2,
          title: `Тестовая киношка2`,
          poster: `images/image2.jpg`,
          previews: [
            {
              src: `movies/movie2.mp4`,
              type: `video/mp4`
            }
          ]
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
