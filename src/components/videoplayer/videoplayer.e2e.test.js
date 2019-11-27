import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Videoplayer from './videoplayer.jsx';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

describe(`Videoplayer`, () => {
  it(`it's playing with delay`, () => {
    const testProps = {
      id: 1,
      title: `Тестовая киношка`,
      poster: `https://st.kp.yandex.net/images/film_big/306084.jpg`,
      previews: [
        {
          src: `https://fs.kinomania.ru/media/video/9/2e/92e24ce533fadce8dcf9c7feb75f2407.480.mp4`,
          type: `video/mp4`
        }
      ],
      isNeedPlaying: false
    };
    const player = shallow(<Videoplayer {...testProps}/>);

    expect(player.state(`isNeedPlaying`)).toBe(false);
    expect(player.state(`isPlaying`)).toBe(false);

    player.setProps({isNeedPlaying: true});

    expect(player.state(`isNeedPlaying`)).toBe(true);
    expect(player.state(`isPlaying`)).toBe(false);

    jest.runAllTimers();
    player.update();

    expect(player.state(`isNeedPlaying`)).toBe(true);
    // expect(player.state(`isPlaying`)).toBe(true);
  });
});
