import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import moment from 'moment';
import Chart from "./Chart";
import Rechart from './Rechart';
import GoogleMap from './GoogleMap';
import { deleteCity } from "../actions/action_remove_city";

import './WeatherList.css';


class WeatherList extends Component {

    removeCity(cityId){
        // console.log('city to remove', cityId);
        this.props.deleteCity(cityId);
    }


    renderWeather = (cityData) => {
        const { city } = cityData;

        // console.log('city data', cityData);
        // data for react chart library - for test purpose
        const timeStamp = cityData.list.map(item => {
            const ts = moment.unix(item.dt);
            const windSpeed = item.wind.speed;
            return {
                name: ts._d,
                value: windSpeed
            };
        });
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const windSpeed = cityData.list.map(weather => weather.wind.speed);

        // console.log('moment time stamp', timeStamp);
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
                    {/*<div className='city-name-title'>{city.name}</div>*/}
                    <GoogleMap defaultZoom={12} lat={lat} lon={lon}/>
                </td>
                <td><Chart data={temps} color='blue' units='&#176;C'/></td>
                <td><Chart data={pressure} color='green' units='hPa'/></td>
                <td><Chart data={windSpeed} color='black' units='m/s'/></td>
                {/*<td><Rechart data={timeStamp} units='&#176;C'/></td>*/}
            </tr>
        )
    };

    render() {
        // console.log('weather list props', this.props);
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                    <tr className=''>
                        <th scope='col'>City</th>
                        <th className='thead-title' scope='col'>Temperature (&#176;C)</th>
                        <th className='thead-title' scope='col'>Pressure (hPa)</th>
                        <th className='thead-title' scope='col'>Wind speed (m/s)</th>
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
    // console.log('state in weather list', searchWeather);
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
