import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className='row'>
                <div className='col-sm-12 header-section'>
                    <h3 className='header-section-title'>
                        Weather Forecast
                    </h3>
                </div>
            </header>
        )
    }

}


export default Header;