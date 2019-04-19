import React, { Component } from 'react';

import CityCard from '../../components/CityCard'
import DataTable from '../../components/DataTable'

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as forecastActions from "../../redux/actions/forecast";

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
    return (
      <div style={{flexDirection: 'row', display: 'flex'}}>
        <CityCard 
          name="Buenos Aires"
          description="parcialmente nublado"
          temperature="34"
          maxTemp="23"
          minTemp="54"
        />
        <DataTable 
          windSpeed="22"
          humidity="11"
          pressure="1000"
          visibility="1100"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
