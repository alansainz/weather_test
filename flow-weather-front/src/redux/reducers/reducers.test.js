import reducer from './forecast.js';
import * as types from '../constants.js'
import * as actions from './forecast.js'

const { getTodayForecastRequest, getFiveDaysForecastRequest } = actions
const { 
  GET_TODAY_FORECAST_ATTEMPT,
  GET_TODAY_FORECAST_SUCCESS,  
  GET_TODAY_FORECAST_FAILURE,
  GET_FIVE_DAYS_FORECAST_ATTEMPT,
  GET_FIVE_DAYS_FORECAST_SUCCESS,  
  GET_FIVE_DAYS_FORECAST_FAILURE,
} = types

const testCityId = 5038018;

describe('forecast reducer', () => {
  xit('should return the initial state', () => {
    const defaultStartState = {
      todayForecast: {},
      fiveDaysForecast: [],
      fetching: false,
      error: null
    };
    expect(reducer(undefined, {})).toEqual(defaultStartState);
  });
  // TODAY FORECAST  
  xit('should handle GET_TODAY_FORECAST_ATTEMPT and set fetching to TRUE', () => {
    const attemptAcation = {
      type: GET_TODAY_FORECAST_ATTEMPT
    };
    const attemptState = {
      fetching: true
    };
    expect(reducer({}, attemptAcation)).toEqual(attemptState);
  });

  xit('should handle GET_TODAY_FORECAST_SUCCESS and set correct payload', () => {
    const getTodayForeCastSuccessAction = {
      type: GET_TODAY_FORECAST_SUCCESS,
      payload: {
        response: {
          id: testCityId
        }
      }
    };
    const getTodayForecastSuccessState = {
      fetching: false,
      todayForecast: {
        id: testCityId
      }
    }
    expect(reducer({}, getTodayForeCastSuccessAction)).toMatchObject(getTodayForecastSuccessState);
  });

  xit('should handle GET_TODAY_FORECAST_FAILURE', () => {
    const failAction = {
      type: GET_TODAY_FORECAST_FAILURE,
      payload: {
        error: 404
      }
    };
    const failState = {
      fetching: false,
      error: 404
    };
    expect(reducer({}, failAction)).toEqual(failState);
  });

  // FIVE DAYS FORECAST
  xit('should handle GET_FIVE_DAYS_FORECAST_ATTEMPT and set fetching to TRUE', () => {
    const attemptAcation = {
      type: GET_FIVE_DAYS_FORECAST_ATTEMPT
    };
    const attemptState = {
      fetching: true
    };
    expect(reducer({}, attemptAcation)).toEqual(attemptState);
  });

  xit('should handle GET_TODAY_FORECAST_SUCCESS and set correct payload', () => {
    const getFiveDaysForeCastSuccessAction = {
      type: GET_FIVE_DAYS_FORECAST_SUCCESS,
      payload: {
        response: {
          list: []
        }
      }
    };
    const getFiveDaysForeCastSuccessState = {
      fetching: false,
      fiveDaysForecast: []
    }
    expect(reducer({}, getFiveDaysForeCastSuccessAction)).toMatchObject(getFiveDaysForeCastSuccessState);
  });

  xit('should handle GET_FIVE_DAYS_FORECAST_FAILURE', () => {
    const failAction = {
      type: GET_FIVE_DAYS_FORECAST_FAILURE,
      payload: {
        error: 404
      }
    };
    const failState = {
      fetching: false,
      error: 404
    };
    expect(reducer({}, failAction)).toEqual(failState);
  });
});