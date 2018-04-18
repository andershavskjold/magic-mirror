/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Weather from '../Weather';

describe('<Weather />', () => {
  const component = shallow(<Weather />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
