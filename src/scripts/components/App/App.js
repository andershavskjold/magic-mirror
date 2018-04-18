/*
 * This file is part of the Magic Mirror application.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';

import Clock from './../Clock/Clock.js';

import styles from './app.module.scss';

/**
 * This is the App component.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */
export default class App extends Component {
  /**
   * Declare expected prop types.
   *
   * @type {Object}
   */
  // static propTypes = {};

  /**
   * Declare defaults for non-required props.
   *
   * @type {Object}
   */
  // static defaultProps = {};

  /**
   * React lifecycle method, invoked after a component is
   * instantiated as well as when it receives new props.
   *
   * It should return an object to update state, or null to indicate
   * that the new props do not require any state updates.
   *
   * @param  {Object} nextProps
   * @param  {Object} prevState
   *
   * @return {Object} nextState
   */
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  /**
   * Declare initial state.
   *
   * @type {Object}
   */
  // state = {};

  /**
   * Create App.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * React lifecycle method, invoked immediately after a component is mounted.
   * Initialization that requires DOM nodes should go here.
   */
  // componentDidMount() {}

  /**
   * React lifecycle method, invoked right before mutations are made (e.g. before the DOM is updated).
   * The return value for this lifecycle will be passed as the third parameter to componentDidUpdate.
   *
   * @param {Object} prevProps
   */
  // getSnapshotBeforeUpdate(prevProps) {}

  /**
   * React lifecycle method, invoked immediately after updating occurs.
   * This method is not called for the initial render.
   *
   * @param {Object} prevProps
   * @param {Object} prevState
   * @param {Object} snapshot
   */
  // componentDidUpdate(prevProps, prevState, snapshot) {}

  /**
   * React lifecycle method, invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup in this method.
   */
  // componentWillUnmount() {}

  /**
   * Render App.
   *
   * @return {JSX}
   */
  render() {
    return (
      <center>
        <div className={styles.main}>
          <Clock />
        </div>
      </center>
    );
  }
}
