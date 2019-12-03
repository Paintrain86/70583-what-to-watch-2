import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Videoplayer from './videoplayer.jsx';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

describe(`Videoplayer`, () => {
  const testProps = {
    id: 1,
    title: `Тестовая киношка`,
    poster: `https://st.kp.yandex.net/images/film_big/306084.jpg`,
    previews: [
      {
        src: `https://fs.kinomania.ru/media/video/9/2e/92e24ce533fadce8dcf9c7feb75f2407.480.mp4`,
        type: `video/mp4`
      }
    ]
  };

  it(`video should play with delay`, () => {
    const playStub = jest
      .spyOn(global.HTMLMediaElement.prototype, `play`)
      .mockImplementation(() => {});
    const player = mount(<Videoplayer isNeedPlaying={false} {...testProps}/>);

    player.setProps({
      isNeedPlaying: true
    });

    jest.advanceTimersByTime(1000);
    expect(playStub).toHaveBeenCalled();
  });

  it(`video should reset after changing props to false`, () => {
    const loadStub = jest
      .spyOn(global.HTMLMediaElement.prototype, `load`)
      .mockImplementation(() => {});
    const player = mount(<Videoplayer isNeedPlaying={true} {...testProps}/>);

    jest.advanceTimersByTime(1000);

    player.setProps({
      isNeedPlaying: false
    });
    expect(loadStub).toHaveBeenCalled();
  });
});
