/*
 * This file is part of the Magic Mirror application.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';

import styles from './clock.module.scss';

/**
 * This is the Clock component.

 * @author anders.havskjold <anders@havskjold.no>
 */
export default class Clock extends Component {
  static defaultProps = {
    showHours: true,
    showMinutes: true,
    showSeconds: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Cipher
          show={this.props.showHours}
          value={this.state.time.getHours()}
        />
        <Cipher
          show={this.props.showMinutes}
          value={this.state.time.getMinutes()}
        >
          {' '}
          :
        </Cipher>
        <Cipher
          className={styles.seconds}
          show={this.props.showSeconds}
          value={this.state.time.getSeconds()}
        >
          {' '}
          :
        </Cipher>
      </div>
    );
  }
}

function Cipher(props) {
  if (props.show != null && !props.show) {
    return null;
  }

  let { value } = props;

  if (value == null) value = 0;

  return (
    <div className={styles.clockWrapper}>
      {props.children}
      <div className={`${props.className} ${styles.cipherBlock}`}>
        <div className={`${styles.cipher}`}>{parseInt(value / 10)}</div>
        <div className={`${styles.cipher}`}>{parseInt(value % 10)}</div>
      </div>
    </div>
  );
}
