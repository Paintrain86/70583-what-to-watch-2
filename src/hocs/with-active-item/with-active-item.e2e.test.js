import React from 'react';
import Enzyme, {
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item.js';

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <section />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`WithActiveItem`, () => {
  it(`Default component state should be equal to -1`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().activeItem).toEqual(-1);
  });

  it(`Component state should be changed to 51`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.prop(`onActiveItemChange`)(51);

    expect(wrapper.state().activeItem).toEqual(51);
  });
});
