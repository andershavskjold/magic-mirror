/*
 * This file is part of the Puzzle 2018 application.
 *
 * (c) APT AS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './styles/main.scss';

if (process.env.NODE_ENV === 'production') {
  require('./scripts/index.prod');
} else {
  require('./scripts/index.dev');
}
