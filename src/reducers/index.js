import { combineReducers } from 'redux';
import searchWeather from './reducer_fetch_weather_forecast';


const rootReducer = combineReducers({
    searchWeather
});

export default rootReducer;