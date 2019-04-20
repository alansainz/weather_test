import React, { Component } from 'react';
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as forecastActions from "../../redux/actions/forecast";
// components
import TodayForecast from '../../components/TodayForecast'
import FiveDayForecast from '../../components/FiveDayForecast'
// style
import { Container } from './style.js'

const mapStateToProps = (state) => ({
  todayForecast: state.forecast.todayForecast,
  fiveDayForecast: state.forecast.fiveDaysForecast
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(forecastActions, dispatch)

class Home extends Component {
  componentDidMount() {
    this.props.getTodayForecastRequest('3435910')
    this.props.getFiveDaysForecastRequest('3435910') 
  }
  render() {
    const { todayForecast, fiveDayForecast } = this.props
    if(Object.entries(todayForecast).length === 0) return <div>Loading...</div>
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
         <FiveDayForecast fiveDayForecast={fiveDayForecast} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);