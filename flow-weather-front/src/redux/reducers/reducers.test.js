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

const defaultStartState = {
  todayForecast: {},
  fiveDaysForecast: [],
  fetching: false,
  error: null
};

describe('forecast reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultStartState);
  });
  // TODAY FORECAST  
  it('should handle GET_TODAY_FORECAST_ATTEMPT and set fetching to TRUE', () => {
    const attemptAcation = {
      type: GET_TODAY_FORECAST_ATTEMPT
    };
    expect(reducer({}, attemptAcation)).toEqual({fetching: true});
  });

  it('should handle GET_TODAY_FORECAST_SUCCESS and set correct payload', () => {
    const testCityId = 5038018
    const getTodayForeCastSuccessAction = {
      type: GET_TODAY_FORECAST_SUCCESS,
      payload: {
        response: {
          id: testCityId
        }
      }
    };
    expect(reducer({}, getTodayForeCastSuccessAction)).toMatchObject({fetching: false, todayForecast: {
      id: testCityId
    }});
  });

  it('should handle GET_TODAY_FORECAST_FAILURE', () => {
    const failAction = {
      type: GET_TODAY_FORECAST_FAILURE,
      payload: {
        error: 404
      }
    };
    expect(reducer({}, failAction)).toEqual({ fetching: false, error: 404 });
  });

  // FIVE DAYS FORECAST
  it('should handle GET_FIVE_DAYS_FORECAST_ATTEMPT and set fetching to TRUE', () => {
    const attemptAcation = {
      type: GET_FIVE_DAYS_FORECAST_ATTEMPT
    };
    expect(reducer({}, attemptAcation)).toEqual({fetching: true});
  });

  it('should handle GET_TODAY_FORECAST_SUCCESS and set correct payload', () => {
    const testCityId = 5038018
    const getFiveDaysForeCastSuccessAction = {
      type: GET_FIVE_DAYS_FORECAST_SUCCESS,
      payload: {
        response: {
          list: []
        }
      }
    };
    expect(reducer({}, getFiveDaysForeCastSuccessAction)).toMatchObject({fetching: false, fiveDaysForecast: []});
  });

  it('should handle GET_FIVE_DAYS_FORECAST_FAILURE', () => {
    const failAction = {
      type: GET_FIVE_DAYS_FORECAST_FAILURE,
      payload: {
        error: 404
      }
    };
    expect(reducer({}, failAction)).toEqual({ fetching: false, error: 404 });
  });

});