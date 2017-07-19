import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '/data/earthquakes.js';

export default class EarthquakeList extends Component {
render() {
     return (
          <section>
               <div className="col-sm-6" key={earthquakes.id}>
                 <div className="card" >
                   <div className="card-block">
                     <h4 className="card-title">{earthquakes.place}</h4>
                     <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quakes.mag}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">Time: {moment(time).format('llll')}</h6>
                     <p className="card-text">Coordinates: {earthquakes.coordinates}</p>

                     <a href={earthquakes.url} className="card-link">USGS Event Link</a>

                   </div>
                 </div>
               </div>
               </section>
          )
     }
}
