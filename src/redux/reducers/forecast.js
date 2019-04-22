const defaultStartState = {
  todayForecast: {},
  fiveDaysForecast: [],
  fetching: false,
  error: null,
};

export default function origins(state = defaultStartState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_TODAY_FORECAST_ATTEMPT':
      newState.fetching = true;
      break;
    case 'GET_TODAY_FORECAST_SUCCESS':
      newState.fetching = false;
      newState.todayForecast = action.payload.response;
      break;
    case 'GET_TODAY_FORECAST_FAILURE':
      newState.fetching = false;
      newState.error = action.payload.error;
      break;
    case 'GET_FIVE_DAYS_FORECAST_ATTEMPT':
      newState.fetching = true;
      break;
    case 'GET_FIVE_DAYS_FORECAST_SUCCESS':
      newState.fetching = false;
      newState.fiveDaysForecast = action.payload.response.list;
      break;
    case 'GET_FIVE_DAYS_FORECAST_FAILURE':
      newState.fetching = false;
      newState.error = action.payload.error;
      break;
    default:
      return state;
  }
  return newState;
}
