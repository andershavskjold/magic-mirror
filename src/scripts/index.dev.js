/*
 * This file is part of the Magic Mirror application.
 *
 * (c) APT AS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import App from './components/App/App';

/**
 * Render React.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */
const renderHot = Component => {
  render(
    <AppContainer errorReporter={Redbox}>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderHot(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderHot(App);
  });
}
