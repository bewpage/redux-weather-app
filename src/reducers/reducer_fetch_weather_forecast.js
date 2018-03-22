import {
    FETCH_WEATHER_SEARCH_PENDING,
    FETCH_WEATHER_SEARCH_ERROR,
    FETCH_WEATHER_SEARCH_SUCCESS,
    REMOVE_CITY
} from '../constants';

const removeById = (state, id) => {
    const cityList = state.filter(city => {
        console.log('city in function removeById', city.city.id);
        console.log('city id from click in function removeById', id);
        return city.city.id !== id
    });
    console.log('remove city', cityList);
    console.log('remove city state', state);
    console.log('remove city id', id);
    return cityList;
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
          const test = removeById(state.data, action.cityId);
          console.log('remove city reducer', test);
          console.log('state city reducer', state);
          return{
              ...state,
              data: [...test]
          };
      default:
          return state;
  }

};



export default searchWeather;