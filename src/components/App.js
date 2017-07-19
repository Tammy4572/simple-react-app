import React, { Component } from 'react';
import '../styles/App.css';
import './App.js';
import EarthquakeList from './EarthquakeList';
import EarthquakeInfo from './EarthquakeInfo';
import moment from 'moment';
// import earthquakes from './EarthquakeList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
             <div className="my-header">
             </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}


export default App;
