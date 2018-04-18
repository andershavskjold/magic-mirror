/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Clock from '../Clock';

describe('<Clock />', () => {
  const component = shallow(<Clock />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
