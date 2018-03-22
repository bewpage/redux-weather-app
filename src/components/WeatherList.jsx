import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Chart from "./Chart";
import { deleteCity } from "../actions/action_remove_city";

import './WeatherList.css';


class WeatherList extends Component {

    removeCity(cityId){
        console.log('city to remove', cityId);
        this.props.deleteCity(cityId);
    }


    renderWeather = (cityData) => {
        const { city } = cityData;
        // console.log('city data', cityData);
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const windSpeed = cityData.list.map(weather => weather.wind.speed);
        // console.log('test temp', temps);
        // console.log('test pressure', pressure);
        // console.log('test windSpeed', windSpeed);
        return (
            <tr key={city.id}>
                <td className='city-name'>
                    <div className='city-name-remove'
                         onClick={() => this.removeCity(city.id)}
                    >
                        <i className='city-name-remove-icon fas fa-trash-alt'></i>
                    </div>
                    <div className='city-name-title'>{city.name}</div>
                </td>
                <td><Chart data={temps} color='blue' units='&#176;C'/></td>
                <td><Chart data={pressure} color='green' units='hPa'/></td>
                <td><Chart data={windSpeed} color='black' units='m/s'/></td>
            </tr>
        )
    };

    render() {
        // console.log('weather list props', this.props);
        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th scope='col'>City</th>
                        <th scope='col'>Temperature (&#176;C)</th>
                        <th scope='col'>Pressure (hPa)</th>
                        <th scope='col'>Wind speed (m/s)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isEmpty(this.props.searchWeather.data) || this.props.searchWeather.fetchWeatherSearchPending === true ? null : this.props.searchWeather.data.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ searchWeather }, state) => {
    // console.log('state in weather list', state);
    return{
        searchWeather
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteCity
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
