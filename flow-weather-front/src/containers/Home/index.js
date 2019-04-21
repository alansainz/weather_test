import React, { Component } from 'react';
import cities from '../../config/cities'
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as forecastActions from "../../redux/actions/forecast";
// components
import Dropdown from '../../components/Dropdown'
import ForecastContainer from '../ForecastContainer'
// style
import { DropdownContainer } from './style.js'

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(forecastActions, dispatch)

export class Home extends Component {
  switchCity(cityId) {
    this.props.getTodayForecastRequest(cityId)
    this.props.getFiveDaysForecastRequest(cityId)
  }
  render() {
    return (
      <React.Fragment>

       <DropdownContainer>
        <Dropdown onChange={value => this.switchCity(value)} options={cities} />
       </DropdownContainer>

       <ForecastContainer />
      </React.Fragment>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);