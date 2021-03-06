import React, { Component } from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className='container'>
          <Header />
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}

export default App;
