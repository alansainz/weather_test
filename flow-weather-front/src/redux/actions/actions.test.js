import * as actions from './forecast.js'
import * as types from '../constants.js'
import { mockStore, getAction } from '../../utils/tests'

const { getTodayForecastRequest, getFiveDaysForecastRequest } = actions
const { 
  GET_TODAY_FORECAST_ATTEMPT,
  GET_TODAY_FORECAST_SUCCESS,  
  GET_TODAY_FORECAST_FAILURE,
  GET_FIVE_DAYS_FORECAST_ATTEMPT,
  GET_FIVE_DAYS_FORECAST_SUCCESS,  
  GET_FIVE_DAYS_FORECAST_FAILURE,
} = types

describe("get today's forecast OK", () => {
  it("handles getting today's forecast and fetches all necessary data", async () => {
    const store = mockStore();
    const testCityId = 5038018;
    store.dispatch(getTodayForecastRequest(testCityId));
    const resultAttempt = {
      type: GET_TODAY_FORECAST_ATTEMPT
    };
    const resultSuccess = {
      type: GET_TODAY_FORECAST_SUCCESS,
      payload: {
        response: {
          id: testCityId
        }
      }
    };
    expect(await getAction(store, GET_TODAY_FORECAST_ATTEMPT)).toEqual(resultAttempt);
    expect(await getAction(store, GET_TODAY_FORECAST_SUCCESS)).toMatchObject(resultSuccess);
  });
});

describe("get today's forecast WRONG", () => {
  it("handles getting an error during the today's forecast request", async () => {
    const store = mockStore();
    const wrongCityId = 1234;
    const resultAttempt = {
      type: GET_TODAY_FORECAST_ATTEMPT
    };
    const resultFailure = {
      type: GET_TODAY_FORECAST_FAILURE,
      payload: {
        error: {}
      }
    };
    store.dispatch(getTodayForecastRequest(wrongCityId));
    expect(await getAction(store, GET_TODAY_FORECAST_ATTEMPT)).toEqual(resultAttempt);
    expect(await getAction(store, GET_TODAY_FORECAST_FAILURE)).toMatchObject(resultFailure);
  });
});

describe("get five days forecast OK", () => {
  it("handles getting five days forecast and fetches all necessary data", async () => {
    const store = mockStore();
    const testCityId = 5038018;
    store.dispatch(getFiveDaysForecastRequest(testCityId));
    const resultAttempt = {
      type: GET_FIVE_DAYS_FORECAST_ATTEMPT
    };
    const resultSuccess = {
      type: GET_FIVE_DAYS_FORECAST_SUCCESS,
      payload: {
        response: {
          city: {
            id: testCityId
          }
        }
      }
    };
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_ATTEMPT)).toEqual(resultAttempt);
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_SUCCESS)).toMatchObject(resultSuccess);
  });
});

describe("get five days forecast WRONG", () => {
  it("handles getting an error during the five days request", async () => {
    const store = mockStore();
    const wrongCityId = 1234;
    const resultAttempt = {
      type: GET_FIVE_DAYS_FORECAST_ATTEMPT
    };
    const resultFailure = {
      type: GET_FIVE_DAYS_FORECAST_FAILURE,
      payload: {
        error: {}
      }
    };
    store.dispatch(getFiveDaysForecastRequest(wrongCityId));
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_ATTEMPT)).toEqual(resultAttempt);
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_FAILURE)).toMatchObject(resultFailure);
  });
});
