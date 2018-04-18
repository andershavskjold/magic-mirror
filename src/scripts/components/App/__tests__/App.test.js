/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  const tree = shallow(<App />);

  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
