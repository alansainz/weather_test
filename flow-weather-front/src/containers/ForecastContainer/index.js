import React, { Component } from 'react';
import cities from '../../config/cities'
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as forecastActions from "../../redux/actions/forecast";
// components
import TodayForecast from '../../components/TodayForecast'
import FiveDayForecast from '../../components/FiveDayForecast'
// style
import { Container, FiveDaysContainer } from './style.js'

const mapStateToProps = (state) => ({
  todayForecast: state.forecast.todayForecast,
  fiveDayForecast: state.forecast.fiveDaysForecast,
  fetching: state.forecast.fetching,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(forecastActions, dispatch)

export class ForecastContainer extends Component {
  componentDidMount() {
    this.getData()
  }
  getData() {
    const defaultCity = cities[0].id; // Buenos Aires
    this.props.getTodayForecastRequest(defaultCity)
    this.props.getFiveDaysForecastRequest(defaultCity)
  }
  render() {
    const { todayForecast, fiveDayForecast, fetching } = this.props
    const isTodayForecastLoaded = todayForecast && Object.entries(todayForecast).length;
    const isFiveDayForecastLoaded = fiveDayForecast && fiveDayForecast.length;
    if(fetching || !isTodayForecastLoaded || !isFiveDayForecastLoaded) return <div>Loading...</div>
    const todayData = {
      cityCard: {
        city: todayForecast.name,
        description: todayForecast.weather.length && todayForecast.weather[0].description,
        temperature: todayForecast.main.temp,
        maxTemp: todayForecast.main.temp_max,
        minTemp: todayForecast.main.temp_min,
      },
      dataTable: {
        windSpeed: todayForecast.wind.speed,
        humidity: todayForecast.main.humidity,
        pressure: todayForecast.main.pressure,
        visibility: todayForecast.visibility
      }
    }
    return (
      <Container>
        <TodayForecast {...todayData} />
        <FiveDaysContainer>
          <FiveDayForecast fiveDayForecast={fiveDayForecast} />
        </FiveDaysContainer>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer);