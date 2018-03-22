import {
    FETCH_WEATHER_SEARCH_PENDING,
    FETCH_WEATHER_SEARCH_ERROR,
    FETCH_WEATHER_SEARCH_SUCCESS
} from '../constants';
import { config } from '../config';

export const fetchWeatherSearchPending = () => ({
    type: FETCH_WEATHER_SEARCH_PENDING
});

export const fetchWeatherSearchError = (error) => ({
    type: FETCH_WEATHER_SEARCH_ERROR,
    error
});

export const fetchWeatherSearchSuccess = (data) => ({
    type: FETCH_WEATHER_SEARCH_SUCCESS,
    payload: data
});

export const fetchWeatherRequest = (request) => {
  return dispatch => {
      const WEATHER_API_URL = config.weatherApiURL;
      const SEARCH_URL = `q=${request}&units=metric&`;

      dispatch(fetchWeatherSearchPending());

      fetch(`${WEATHER_API_URL}${SEARCH_URL}APPID=${config.weatherApiKey}`)
          .then(resolve => {
              return resolve.json();
          })
          .then(data => {
              if(data.cod === '200'){
                  dispatch(fetchWeatherSearchSuccess(data));
              }
          })
          .catch(e => dispatch(fetchWeatherSearchError(e)));

  }
};