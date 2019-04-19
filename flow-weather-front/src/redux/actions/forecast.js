import api from '../../config/api.js'
import { 
  GET_TODAY_FORECAST_ATTEMPT, 
  GET_TODAY_FORECAST_SUCCESS,
  GET_TODAY_FORECAST_FAILURE,
  GET_FIVE_DAYS_FORECAST_ATTEMPT,
  GET_FIVE_DAYS_FORECAST_SUCCESS,
  GET_FIVE_DAYS_FORECAST_FAILURE
} from '../constants';

const getTodayForecastAttempt = () => ({
  type: GET_TODAY_FORECAST_ATTEMPT
});

const getTodayForecastSuccess = (response) => ({
  type: GET_TODAY_FORECAST_SUCCESS,
  payload: {
    response: response.data
  }
})

const getTodayForecastFailure = (error) => ({
  type: GET_TODAY_FORECAST_FAILURE,
  payload: {
    error
  }
})

export const getTodayForecastRequest = (cityId) => (dispatch) => {
  dispatch(getTodayForecastAttempt())
  return api
    .get(`weather?id=${cityId}`)
    .then(response => dispatch(getTodayForecastSuccess(response)))
    .catch(error => dispatch(getTodayForecastFailure(error)));
}


const getFiveDaysForecastAttempt = () => ({
  type: GET_FIVE_DAYS_FORECAST_ATTEMPT
});

const getFiveDaysForecastSuccess = (response) => ({
  type: GET_FIVE_DAYS_FORECAST_SUCCESS,
  payload: {
    response: response.data
  }
})

const getFiveDaysForecastFailure = (error) => ({
  type: GET_FIVE_DAYS_FORECAST_FAILURE,
  payload: {
    error
  }
})

export const getFiveDaysForecastRequest = (cityId) => (dispatch) => {
  dispatch(getFiveDaysForecastAttempt())
  return api
    .get(`forecast?id=${cityId}`)
    .then(response => dispatch(getFiveDaysForecastSuccess(response)))
    .catch(error => dispatch(getFiveDaysForecastFailure(error)));
}
