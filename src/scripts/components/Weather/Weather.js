/*
 * This file is part of the Magic Mirror application.
 *
 * (c) APT AS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';

import XMLParser from 'react-xml-parser';

import styles from './weather.module.scss';

/**
 * This is the Weather component.

 * @author anders.havskjold <anders@havskjold.no>
 */
export default class Weather extends Component {
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
    var xml = new XMLParser().parseFromString(data);
    var forecast = xml.getElementsByTagName('tabular');
    var current = forecast[0].children[0];

    var symbol = current.children[0].children[0];
    var temp =
      symbol.children[0].children[0].children[0].children[0].children[0];

    console.log(temp);

    this.setState({
      symbol: symbol.attributes.var,
      temp: temp.attributes.value,
    });
  }

  requestWeatherData() {
    // fetch('https://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/varsel.xml')
    // .then(results => {
    //   console.log(results);
    // })

    this.parseWeatherData(yrXml);
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

const yrXml = `<?xml version="1.0" encoding="utf-8"?>
<weatherdata>
  <location>
    <name>Oslo</name>
    <type>By</type>
    <country>Norge</country>
    <timezone id="Europe/Oslo" utcoffsetMinutes="120" />
    <location altitude="10" latitude="59.912726542422" longitude="10.7460923576733" geobase="ssr" geobaseid="72837" />
  </location>
  <credit>
    <!--For å bruke gratis værdata fra Yr, MÅ du vise følgende tekst godt synlig på nettsiden din. Teksten skal være en lenke til URL-en som er spesifisert.-->
    <!--Les mer om vilkår for bruk av gratis værdata + retningslinjer på 
http://om.yr.no/verdata/ -->
    <link text="Værvarsel fra Yr, levert av NRK og Meteorologisk institutt" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/" />
  </credit>
  <links>
    <link id="xmlSource" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/varsel.xml" />
    <link id="xmlSourceHourByHour" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/varsel_time_for_time.xml" />
    <link id="overview" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/" />
    <link id="hourByHour" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/time_for_time.html" />
    <link id="longTermForecast" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/langtidsvarsel.html" />
    <link id="radar" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/radar.html" />
    <link id="nowcast" url="http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/varsel_nu.xml" />
  </links>
  <meta>
    <lastupdate>2018-04-18T16:28:00</lastupdate>
    <nextupdate>2018-04-19T00:00:00</nextupdate>
  </meta>
  <sun rise="2018-04-18T05:52:31" set="2018-04-18T20:41:53" />
  <forecast>
    <text>
      <location name="Oslo">
        <time from="0001-01-01" to="2018-04-19" type="obs" eventType="Landslide">
          <title>Jordskredfare gult nivå</title>
          <body>Det ventes mye snøsmelting spesielt i lavlandet og i dalstrøk, opp mot 25 mm/døgn. Vannmetningen i jorden er høy i lavlandet. Faren for jord- og flomskred vil øke gradvis med økende grunnvannsstand og vannmetning i jorden. Bratte skråninger, samt bekker og elveløp med økende vannføring er spesielt utsatt. 
Fare for utløsning av sørpeskred gjelder særlig i områder med mer enn 40-50 cm snø. Snøen er vannmettet. Sørpeskred kan løses ut i slake hellinger der vann samles opp. Skredene kanaliseres ofte ned forsenkninger og bekkeløp, og kan da utvikle seg til flomskred. Les hele varselet på Varsom.no.</body>
        </time>
        <time from="0001-01-01" to="2018-04-20" type="obs" eventType="Landslide">
          <title>Jordskredfare gult nivå</title>
          <body>Det ventes mye snøsmelting spesielt i lavlandet og i dalstrøk, opp mot 25 mm/døgn. Vannmetningen i jorden er høy i lavlandet. Faren for jord- og flomskred vil øke gradvis med økende grunnvannsstand og vannmetning i jorden. Bratte skråninger, samt bekker og elveløp med økende vannføring er spesielt utsatt. 
Fare for utløsning av sørpeskred gjelder særlig i områder med mer enn 40-50 cm snø. Snøen er vannmettet. Sørpeskred kan løses ut i slake hellinger der vann samles opp. Skredene kanaliseres ofte ned forsenkninger og bekkeløp, og kan da utvikle seg til flomskred. Les hele varselet på Varsom.no.</body>
        </time>
        <time from="0001-01-01" to="2018-04-21" type="obs" eventType="Landslide">
          <title>Jordskredfare gult nivå</title>
          <body>Det ventes mye snøsmelting spesielt i lavlandet og i dalstrøk, opp mot 25 mm/døgn. Vannmetningen i jorden er høy i lavlandet. Faren for jord- og flomskred vil øke gradvis med økende grunnvannsstand og vannmetning i jorden. Bratte skråninger, samt bekker og elveløp med økende vannføring er spesielt utsatt. 
Fare for utløsning av sørpeskred gjelder særlig i områder med mer enn 40-50 cm snø. Snøen er vannmettet. Sørpeskred kan løses ut i slake hellinger der vann samles opp. Skredene kanaliseres ofte ned forsenkninger og bekkeløp, og kan da utvikle seg til flomskred. Les hele varselet på Varsom.no.</body>
        </time>
        <time from="2018-04-18" to="2018-04-19" type="flood" eventType="Flood">
          <title>Flomfare gult nivå</title>
          <body>Det er ventet stigende temperatur, og påfølgende snøsmelting også i fjellet. Kraftig snøsmelting vil føre til betydelig økende vannføring i bekker og mindre elver, som drenerer snødekte områder opptil ca 700 - 1000 m oh. Reguleringer vil i noen tilfelle virke flomdempende, og varselet vil derfor ikke nødvendigvis gjelde i alle regulerte vassdrag. Les hele varselet på Varsom.no.</body>
        </time>
        <time from="2018-04-18" to="2018-04-20" type="flood" eventType="Flood">
          <title>Flomfare gult nivå</title>
          <body>Det er ventet stigende temperatur, og påfølgende snøsmelting også i fjellet. Kraftig snøsmelting vil føre til betydelig økende vannføring i bekker og mindre elver, som drenerer snødekte områder opptil ca 700 - 1000 m oh. Reguleringer vil i noen tilfelle virke flomdempende, og varselet vil derfor ikke nødvendigvis gjelde i alle regulerte vassdrag. Les hele varselet på Varsom.no.</body>
        </time>
        <time from="2018-04-18" to="2018-04-18">
          <title>onsdag</title>
          <body>&lt;strong&gt;Østlandet og Telemark:&lt;/strong&gt; Sørvestlig bris, på kysten opptil frisk bris. Opphold og etterhvert for det meste pent vær. Utrygt for lokal tåke, vesentlig nær kysten.</body>
        </time>
        <time from="2018-04-19" to="2018-04-19">
          <title>torsdag</title>
          <body>&lt;strong&gt;Agder, Telemark, Østlandet:&lt;/strong&gt; Overveiende sørlig bris, opptil frisk bris på kysten. Utrygt for tåke først og sist på dagen, vesentlig nær kysten, ellers for det meste pent vær.</body>
        </time>
        <time from="2018-04-20" to="2018-04-20">
          <title>fredag</title>
          <body>&lt;strong&gt;Østafjells:&lt;/strong&gt; Sørvest bris, på kysten frisk bris, om kvelden dreiende vestlig. Lokal morgentåke, nær kysten lokal tåke også utover dagen. Litt regn lengst nord, ellers opphold og for det meste pent vær.</body>
        </time>
        <time from="2018-04-21" to="2018-04-21">
          <title>lørdag</title>
          <body>&lt;strong&gt;Østafjells:&lt;/strong&gt; Vestlig bris. Lettskyet oppholdsvær.</body>
        </time>
      </location>
    </text>
    <tabular>
      <time from="2018-04-18T20:00:00" to="2018-04-19T00:00:00" period="3">
        <!-- Valid from 2018-04-18T20:00:00 to 2018-04-19T00:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-18T20:00:00 -->
        <windDirection deg="187.4" code="S" name="Sør" />
        <windSpeed mps="1.6" name="Svak vind" />
        <temperature unit="celsius" value="14" />
        <pressure unit="hPa" value="1026.4" />
      </time>
      <time from="2018-04-19T00:00:00" to="2018-04-19T06:00:00" period="0">
        <!-- Valid from 2018-04-19T00:00:00 to 2018-04-19T06:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-19T00:00:00 -->
        <windDirection deg="84.7" code="E" name="Øst" />
        <windSpeed mps="1.3" name="Flau vind" />
        <temperature unit="celsius" value="9" />
        <pressure unit="hPa" value="1028.2" />
      </time>
      <time from="2018-04-19T06:00:00" to="2018-04-19T12:00:00" period="1">
        <!-- Valid from 2018-04-19T06:00:00 to 2018-04-19T12:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-19T06:00:00 -->
        <windDirection deg="109.9" code="ESE" name="Øst-sørøst" />
        <windSpeed mps="0.7" name="Flau vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="1029.8" />
      </time>
      <time from="2018-04-19T12:00:00" to="2018-04-19T18:00:00" period="2">
        <!-- Valid from 2018-04-19T12:00:00 to 2018-04-19T18:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-19T12:00:00 -->
        <windDirection deg="257.6" code="WSW" name="Vest-sørvest" />
        <windSpeed mps="1.1" name="Flau vind" />
        <temperature unit="celsius" value="9" />
        <pressure unit="hPa" value="1029.7" />
      </time>
      <time from="2018-04-19T18:00:00" to="2018-04-20T00:00:00" period="3">
        <!-- Valid from 2018-04-19T18:00:00 to 2018-04-20T00:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-19T18:00:00 -->
        <windDirection deg="211.3" code="SSW" name="Sør-sørvest" />
        <windSpeed mps="1.8" name="Svak vind" />
        <temperature unit="celsius" value="13" />
        <pressure unit="hPa" value="1026.8" />
      </time>
      <time from="2018-04-20T00:00:00" to="2018-04-20T06:00:00" period="0">
        <!-- Valid from 2018-04-20T00:00:00 to 2018-04-20T06:00:00 -->
        <symbol number="15" numberEx="15" name="Tåke" var="15" />
        <precipitation value="0" minvalue="0" maxvalue="0.1" />
        <!-- Valid at 2018-04-20T00:00:00 -->
        <windDirection deg="170.3" code="S" name="Sør" />
        <windSpeed mps="2.9" name="Svak vind" />
        <temperature unit="celsius" value="8" />
        <pressure unit="hPa" value="1024.9" />
      </time>
      <time from="2018-04-20T06:00:00" to="2018-04-20T12:00:00" period="1">
        <!-- Valid from 2018-04-20T06:00:00 to 2018-04-20T12:00:00 -->
        <symbol number="15" numberEx="15" name="Tåke" var="15" />
        <precipitation value="0" minvalue="0" maxvalue="0.1" />
        <!-- Valid at 2018-04-20T06:00:00 -->
        <windDirection deg="168.7" code="SSE" name="Sør-sørøst" />
        <windSpeed mps="1.5" name="Flau vind" />
        <temperature unit="celsius" value="6" />
        <pressure unit="hPa" value="1021.0" />
      </time>
      <time from="2018-04-20T12:00:00" to="2018-04-20T18:00:00" period="2">
        <!-- Valid from 2018-04-20T12:00:00 to 2018-04-20T18:00:00 -->
        <symbol number="2" numberEx="2" name="Lettskyet" var="02d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-20T12:00:00 -->
        <windDirection deg="290.9" code="WNW" name="Vest-nordvest" />
        <windSpeed mps="1.2" name="Flau vind" />
        <temperature unit="celsius" value="7" />
        <pressure unit="hPa" value="1017.1" />
      </time>
      <time from="2018-04-20T18:00:00" to="2018-04-21T00:00:00" period="3">
        <!-- Valid from 2018-04-20T18:00:00 to 2018-04-21T00:00:00 -->
        <symbol number="1" numberEx="1" name="Klarvær" var="01n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-20T18:00:00 -->
        <windDirection deg="235.8" code="SW" name="Sørvest" />
        <windSpeed mps="0.8" name="Flau vind" />
        <temperature unit="celsius" value="13" />
        <pressure unit="hPa" value="1011.6" />
      </time>
      <time from="2018-04-21T00:00:00" to="2018-04-21T06:00:00" period="0">
        <!-- Valid from 2018-04-21T00:00:00 to 2018-04-21T06:00:00 -->
        <symbol number="1" numberEx="1" name="Klarvær" var="01n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-21T00:00:00 -->
        <windDirection deg="344.3" code="NNW" name="Nord-nordvest" />
        <windSpeed mps="0.4" name="Flau vind" />
        <temperature unit="celsius" value="8" />
        <pressure unit="hPa" value="1011.6" />
      </time>
      <time from="2018-04-21T08:00:00" to="2018-04-21T14:00:00" period="1">
        <!-- Valid from 2018-04-21T08:00:00 to 2018-04-21T14:00:00 -->
        <symbol number="2" numberEx="2" name="Lettskyet" var="02d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-21T08:00:00 -->
        <windDirection deg="191.5" code="SSW" name="Sør-sørvest" />
        <windSpeed mps="0.6" name="Flau vind" />
        <temperature unit="celsius" value="6" />
        <pressure unit="hPa" value="1012.9" />
      </time>
      <time from="2018-04-21T14:00:00" to="2018-04-21T20:00:00" period="2">
        <!-- Valid from 2018-04-21T14:00:00 to 2018-04-21T20:00:00 -->
        <symbol number="2" numberEx="2" name="Lettskyet" var="02d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-21T14:00:00 -->
        <windDirection deg="273.4" code="W" name="Vest" />
        <windSpeed mps="4.7" name="Lett bris" />
        <temperature unit="celsius" value="15" />
        <pressure unit="hPa" value="1012.1" />
      </time>
      <time from="2018-04-21T20:00:00" to="2018-04-22T02:00:00" period="3">
        <!-- Valid from 2018-04-21T20:00:00 to 2018-04-22T02:00:00 -->
        <symbol number="1" numberEx="1" name="Klarvær" var="01n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-21T20:00:00 -->
        <windDirection deg="285.7" code="WNW" name="Vest-nordvest" />
        <windSpeed mps="3.5" name="Lett bris" />
        <temperature unit="celsius" value="9" />
        <pressure unit="hPa" value="1012.7" />
      </time>
      <time from="2018-04-22T02:00:00" to="2018-04-22T08:00:00" period="0">
        <!-- Valid from 2018-04-22T02:00:00 to 2018-04-22T08:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-22T02:00:00 -->
        <windDirection deg="321.2" code="NW" name="Nordvest" />
        <windSpeed mps="2.6" name="Svak vind" />
        <temperature unit="celsius" value="3" />
        <pressure unit="hPa" value="1014.4" />
      </time>
      <time from="2018-04-22T08:00:00" to="2018-04-22T14:00:00" period="1">
        <!-- Valid from 2018-04-22T08:00:00 to 2018-04-22T14:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-22T08:00:00 -->
        <windDirection deg="9.3" code="N" name="Nord" />
        <windSpeed mps="1.4" name="Flau vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="1015.6" />
      </time>
      <time from="2018-04-22T14:00:00" to="2018-04-22T20:00:00" period="2">
        <!-- Valid from 2018-04-22T14:00:00 to 2018-04-22T20:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-22T14:00:00 -->
        <windDirection deg="197.0" code="SSW" name="Sør-sørvest" />
        <windSpeed mps="1.8" name="Svak vind" />
        <temperature unit="celsius" value="13" />
        <pressure unit="hPa" value="1015.1" />
      </time>
      <time from="2018-04-22T20:00:00" to="2018-04-23T02:00:00" period="3">
        <!-- Valid from 2018-04-22T20:00:00 to 2018-04-23T02:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-22T20:00:00 -->
        <windDirection deg="179.3" code="S" name="Sør" />
        <windSpeed mps="2.5" name="Svak vind" />
        <temperature unit="celsius" value="9" />
        <pressure unit="hPa" value="1012.7" />
      </time>
      <time from="2018-04-23T02:00:00" to="2018-04-23T08:00:00" period="0">
        <!-- Valid from 2018-04-23T02:00:00 to 2018-04-23T08:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-23T02:00:00 -->
        <windDirection deg="150.5" code="SSE" name="Sør-sørøst" />
        <windSpeed mps="2.2" name="Svak vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="1011.9" />
      </time>
      <time from="2018-04-23T08:00:00" to="2018-04-23T14:00:00" period="1">
        <!-- Valid from 2018-04-23T08:00:00 to 2018-04-23T14:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-23T08:00:00 -->
        <windDirection deg="166.3" code="SSE" name="Sør-sørøst" />
        <windSpeed mps="2.5" name="Svak vind" />
        <temperature unit="celsius" value="5" />
        <pressure unit="hPa" value="1004.6" />
      </time>
      <time from="2018-04-23T14:00:00" to="2018-04-23T20:00:00" period="2">
        <!-- Valid from 2018-04-23T14:00:00 to 2018-04-23T20:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-23T14:00:00 -->
        <windDirection deg="195.9" code="SSW" name="Sør-sørvest" />
        <windSpeed mps="3.9" name="Lett bris" />
        <temperature unit="celsius" value="9" />
        <pressure unit="hPa" value="997.2" />
      </time>
      <time from="2018-04-23T20:00:00" to="2018-04-24T02:00:00" period="3">
        <!-- Valid from 2018-04-23T20:00:00 to 2018-04-24T02:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-23T20:00:00 -->
        <windDirection deg="180.7" code="S" name="Sør" />
        <windSpeed mps="3.1" name="Svak vind" />
        <temperature unit="celsius" value="7" />
        <pressure unit="hPa" value="993.8" />
      </time>
      <time from="2018-04-24T02:00:00" to="2018-04-24T08:00:00" period="0">
        <!-- Valid from 2018-04-24T02:00:00 to 2018-04-24T08:00:00 -->
        <symbol number="4" numberEx="4" name="Skyet" var="04" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-24T02:00:00 -->
        <windDirection deg="340.1" code="NNW" name="Nord-nordvest" />
        <windSpeed mps="2.6" name="Svak vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="993.4" />
      </time>
      <time from="2018-04-24T08:00:00" to="2018-04-24T14:00:00" period="1">
        <!-- Valid from 2018-04-24T08:00:00 to 2018-04-24T14:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-24T08:00:00 -->
        <windDirection deg="300.4" code="WNW" name="Vest-nordvest" />
        <windSpeed mps="2.4" name="Svak vind" />
        <temperature unit="celsius" value="5" />
        <pressure unit="hPa" value="995.2" />
      </time>
      <time from="2018-04-24T14:00:00" to="2018-04-24T20:00:00" period="2">
        <!-- Valid from 2018-04-24T14:00:00 to 2018-04-24T20:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-24T14:00:00 -->
        <windDirection deg="220.3" code="SW" name="Sørvest" />
        <windSpeed mps="4.3" name="Lett bris" />
        <temperature unit="celsius" value="12" />
        <pressure unit="hPa" value="996.1" />
      </time>
      <time from="2018-04-24T20:00:00" to="2018-04-25T02:00:00" period="3">
        <!-- Valid from 2018-04-24T20:00:00 to 2018-04-25T02:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-24T20:00:00 -->
        <windDirection deg="48.4" code="NE" name="Nordøst" />
        <windSpeed mps="2.9" name="Svak vind" />
        <temperature unit="celsius" value="8" />
        <pressure unit="hPa" value="995.5" />
      </time>
      <time from="2018-04-25T02:00:00" to="2018-04-25T08:00:00" period="0">
        <!-- Valid from 2018-04-25T02:00:00 to 2018-04-25T08:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-25T02:00:00 -->
        <windDirection deg="288.6" code="WNW" name="Vest-nordvest" />
        <windSpeed mps="2.3" name="Svak vind" />
        <temperature unit="celsius" value="3" />
        <pressure unit="hPa" value="997.7" />
      </time>
      <time from="2018-04-25T08:00:00" to="2018-04-25T14:00:00" period="1">
        <!-- Valid from 2018-04-25T08:00:00 to 2018-04-25T14:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-25T08:00:00 -->
        <windDirection deg="75.1" code="ENE" name="Øst-nordøst" />
        <windSpeed mps="2.0" name="Svak vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="997.9" />
      </time>
      <time from="2018-04-25T14:00:00" to="2018-04-25T20:00:00" period="2">
        <!-- Valid from 2018-04-25T14:00:00 to 2018-04-25T20:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-25T14:00:00 -->
        <windDirection deg="0.7" code="N" name="Nord" />
        <windSpeed mps="3.3" name="Svak vind" />
        <temperature unit="celsius" value="11" />
        <pressure unit="hPa" value="997.8" />
      </time>
      <time from="2018-04-25T20:00:00" to="2018-04-26T02:00:00" period="3">
        <!-- Valid from 2018-04-25T20:00:00 to 2018-04-26T02:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-25T20:00:00 -->
        <windDirection deg="189.1" code="S" name="Sør" />
        <windSpeed mps="2.8" name="Svak vind" />
        <temperature unit="celsius" value="7" />
        <pressure unit="hPa" value="997.4" />
      </time>
      <time from="2018-04-26T02:00:00" to="2018-04-26T08:00:00" period="0">
        <!-- Valid from 2018-04-26T02:00:00 to 2018-04-26T08:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-26T02:00:00 -->
        <windDirection deg="17.5" code="NNE" name="Nord-nordøst" />
        <windSpeed mps="2.1" name="Svak vind" />
        <temperature unit="celsius" value="2" />
        <pressure unit="hPa" value="999.2" />
      </time>
      <time from="2018-04-26T08:00:00" to="2018-04-26T14:00:00" period="1">
        <!-- Valid from 2018-04-26T08:00:00 to 2018-04-26T14:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-26T08:00:00 -->
        <windDirection deg="300.8" code="WNW" name="Vest-nordvest" />
        <windSpeed mps="1.7" name="Svak vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="1002.3" />
      </time>
      <time from="2018-04-26T14:00:00" to="2018-04-26T20:00:00" period="2">
        <!-- Valid from 2018-04-26T14:00:00 to 2018-04-26T20:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-26T14:00:00 -->
        <windDirection deg="233.9" code="SW" name="Sørvest" />
        <windSpeed mps="2.6" name="Svak vind" />
        <temperature unit="celsius" value="11" />
        <pressure unit="hPa" value="1003.8" />
      </time>
      <time from="2018-04-26T20:00:00" to="2018-04-27T02:00:00" period="3">
        <!-- Valid from 2018-04-26T20:00:00 to 2018-04-27T02:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-26T20:00:00 -->
        <windDirection deg="144.5" code="SE" name="Sørøst" />
        <windSpeed mps="2.0" name="Svak vind" />
        <temperature unit="celsius" value="7" />
        <pressure unit="hPa" value="1003.2" />
      </time>
      <time from="2018-04-27T02:00:00" to="2018-04-27T08:00:00" period="0">
        <!-- Valid from 2018-04-27T02:00:00 to 2018-04-27T08:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03n" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-27T02:00:00 -->
        <windDirection deg="331.1" code="NNW" name="Nord-nordvest" />
        <windSpeed mps="2.1" name="Svak vind" />
        <temperature unit="celsius" value="2" />
        <pressure unit="hPa" value="1004.0" />
      </time>
      <time from="2018-04-27T08:00:00" to="2018-04-27T14:00:00" period="1">
        <!-- Valid from 2018-04-27T08:00:00 to 2018-04-27T14:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-27T08:00:00 -->
        <windDirection deg="161.0" code="SSE" name="Sør-sørøst" />
        <windSpeed mps="1.9" name="Svak vind" />
        <temperature unit="celsius" value="4" />
        <pressure unit="hPa" value="1007.6" />
      </time>
      <time from="2018-04-27T14:00:00" to="2018-04-27T20:00:00" period="2">
        <!-- Valid from 2018-04-27T14:00:00 to 2018-04-27T20:00:00 -->
        <symbol number="3" numberEx="3" name="Delvis skyet" var="03d" />
        <precipitation value="0" />
        <!-- Valid at 2018-04-27T14:00:00 -->
        <windDirection deg="213.0" code="SSW" name="Sør-sørvest" />
        <windSpeed mps="2.5" name="Svak vind" />
        <temperature unit="celsius" value="10" />
        <pressure unit="hPa" value="1009.3" />
      </time>
    </tabular>
  </forecast>
  <observations>
    <weatherstation stno="18700" sttype="eklima" name="Oslo (Blindern)" distance="3596" lat="59.94230" lon="10.72000" source="Meteorologisk Institutt">
      <symbol number="3" name="Delvis skyet" time="2018-04-18T15:00:00Z" />
      <temperature unit="celsius" value="16.1" time="2018-04-18T17:00:00Z" />
      <windDirection deg="276.0" code="W" name="Vest" time="2018-04-18T17:00:00Z" />
      <windSpeed mps="3.4" name="Lett bris" time="2018-04-18T17:00:00Z" />
    </weatherstation>
    <weatherstation stno="18815" sttype="eklima" name="Bygdøy" distance="3633" lat="59.90500" lon="10.68280" source="Meteorologisk Institutt">
      <temperature unit="celsius" value="15.0" time="2018-04-18T17:00:00Z" />
    </weatherstation>
    <weatherstation stno="18950" sttype="eklima" name="Tryvannshøgda" distance="9076" lat="59.98470" lon="10.66930" source="Meteorologisk Institutt">
      <temperature unit="celsius" value="11.2" time="2018-04-18T17:00:00Z" />
      <windDirection deg="279.0" code="W" name="Vest" time="2018-04-18T17:00:00Z" />
      <windSpeed mps="4.0" name="Lett bris" time="2018-04-18T17:00:00Z" />
    </weatherstation>
  </observations>
</weatherdata>`;
