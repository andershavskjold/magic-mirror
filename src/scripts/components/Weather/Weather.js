/*
 * This file is part of the Magic Mirror application.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';

import styles from './weather.module.scss';

const openweathermapUrl = 'http://api.openweathermap.org';

/**
 * This is the Weather component.

 * @author anders.havskjold <anders@havskjold.no>
 */
export default class Weather extends Component {
  static defaultProps = {
    apikey: '5ae135ad800ce9ab2942526f2a5262ad',
    city: 'Oslo',
    units: 'metric',
    version: '2.5',
  };

  /**
   * Create Weather.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.requestWeatherData();
  }

  parseWeatherData(data) {
    this.setState({
      symbol: data['weather'][0]['icon'],
      temp: data['main']['temp'],
    });
  }

  requestWeatherData() {
    var apiCall = `${openweathermapUrl}/data/${this.props.version}/weather?q=${
      this.props.city
    }&units=${this.props.units}&appid=${this.props.apikey}`;
    fetch(apiCall)
      .then(results => {
        if (results != null && results.status == 200) {
          return results.text();
        }
        //Error
        return null;
      })
      .then(data => {
        this.parseWeatherData(JSON.parse(data));
      });
  }

  render() {
    var symbol;
    if (this.state.symbol != null) {
      return (
        <div className={styles.main}>
          <img
            src={require(`weather/${this.state.symbol}.svg`)}
            className={styles.symbol}
          />
          <p> {this.state.temp}&#8451;</p>
        </div>
      );
    }
    return <div className={styles.main} />;
  }
}
