import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from '../actions/action_weather_forecast_search';

import './SearchBar.css';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    validate = (value) => {
        return {
            text: value.length === 0
        }
    };


    handlerAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        })
    };

    search = (event) => {
      event.preventDefault();
      const { search } = this.state;
      console.log('search: ', search);
      this.props.fetchWeatherRequest(search);
      this.setState({search: ''});
    };

    render(){
        const textInputValidation = this.validate(this.state.search).text;
        return(
            <div className='row search-section'>
                <div className='col-sm-12 search-section-container'>
                    <form
                        onSubmit={this.search}
                    >
                        <div className='input-group mb-3'>
                            <input type="text"
                                   className={textInputValidation ? 'form-control error' : 'form-control'}
                                   placeholder='Search city forecast eg. London, UK'
                                   value={this.state.search}
                                   onChange={event => this.handlerAnyInputChange(event, 'search')}
                            />
                            <div className='input-group-prepend'>
                                <button className='btn btn-outline-secondary'
                                        type='submit'
                                        disabled={textInputValidation}
                                >
                                    <i className='fas fa-search'></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWeatherRequest
    }, dispatch);
};


export default connect(null, mapDispatchToProps)(SearchBar);