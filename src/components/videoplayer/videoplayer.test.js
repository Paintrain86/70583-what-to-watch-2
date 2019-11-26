import React from 'react';
import renderer from 'react-test-renderer';
import Videoplayer from './videoplayer.jsx';

describe(`Videoplayer`, () => {
  it(`component is rendered correctly`, () => {
    const testProps = {
      id: 1,
      title: `Тестовая киношка`,
      poster: `images/image.jpg`,
      previews: [
        {
          src: `movies/movie.mp4`,
          type: `video/mp4`
        }
      ],
      isNeedPlaying: false
    };

    const markup = renderer
      .create(<Videoplayer {...testProps}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
