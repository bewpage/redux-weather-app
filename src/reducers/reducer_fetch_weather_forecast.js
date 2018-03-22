import {
    FETCH_WEATHER_SEARCH_PENDING,
    FETCH_WEATHER_SEARCH_ERROR,
    FETCH_WEATHER_SEARCH_SUCCESS,
    REMOVE_CITY
} from '../constants';

const removeById = (state, id) => {
    return state.filter(city => city.city.id !== id);

};

const setInitialState = {
    fetchWeatherSearchPending: false,
    fetchWeatherSearchError: false,
    data: []
};

const searchWeather = (state = setInitialState, action) => {
  switch(action.type){
      case FETCH_WEATHER_SEARCH_PENDING:
          return {
              ...state,
              fetchWeatherSearchPending: true,
          };
      case FETCH_WEATHER_SEARCH_ERROR:
          const { error } = action;
          return {
              ...state,
              fetchWeatherSearchError: true,
              error
          };
      case FETCH_WEATHER_SEARCH_SUCCESS:
          const { payload } = action;
          return {
              data: [...state.data, payload],
              fetchWeatherSearchError: false,
              fetchWeatherSearchPending: false
          };
      case REMOVE_CITY:
          const cityData = removeById(state.data, action.cityId);
          return{
              ...state,
              data: [...cityData]
          };
      default:
          return state;
  }

};



export default searchWeather;