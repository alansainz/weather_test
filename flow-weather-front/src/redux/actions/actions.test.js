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
    expect(await getAction(store, GET_TODAY_FORECAST_ATTEMPT)).toEqual({type: GET_TODAY_FORECAST_ATTEMPT});
    expect(await getAction(store, GET_TODAY_FORECAST_SUCCESS)).toMatchObject({type: GET_TODAY_FORECAST_SUCCESS,
      payload: {
        response: {
          id: testCityId
        }
      }
    });
  });
});

describe("get today's forecast WRONG", () => {
  it("handles getting an error during the today's forecast request", async () => {
    const store = mockStore();
    const wrongCityId = 1234;
    store.dispatch(getTodayForecastRequest(wrongCityId));
    expect(await getAction(store, GET_TODAY_FORECAST_ATTEMPT)).toEqual({type: GET_TODAY_FORECAST_ATTEMPT});
    expect(await getAction(store, GET_TODAY_FORECAST_FAILURE)).toMatchObject({type: GET_TODAY_FORECAST_FAILURE,
      payload: {
        error: {}
      }
    });
  });
});

describe("get five days forecast OK", () => {
  it("handles getting five days forecast and fetches all necessary data", async () => {
    const store = mockStore();
    const testCityId = 5038018;
    store.dispatch(getFiveDaysForecastRequest(testCityId));
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_ATTEMPT)).toEqual({type: GET_FIVE_DAYS_FORECAST_ATTEMPT});
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_SUCCESS)).toMatchObject({type: GET_FIVE_DAYS_FORECAST_SUCCESS,
      payload: {
        response: {
          city: {
            id: testCityId
          }
        }
      }
    });
  });
});

describe("get five days forecast WRONG", () => {
  it("handles getting an error during the five days request", async () => {
    const store = mockStore();
    const wrongCityId = 1234;
    store.dispatch(getFiveDaysForecastRequest(wrongCityId));
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_ATTEMPT)).toEqual({type: GET_FIVE_DAYS_FORECAST_ATTEMPT});
    expect(await getAction(store, GET_FIVE_DAYS_FORECAST_FAILURE)).toMatchObject({type: GET_FIVE_DAYS_FORECAST_FAILURE,
      payload: {
        error: {}
      }
    });
  });
});
