// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import data from "../../data.js";

// == Component
const Map = () => (
  <div className="map">

  {console.log(data)}
   <MapContainer center={[47.23737335205078, -1.5248912572860718]} zoom={13} scrollWheelZoom={false} id="mapid">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       { data.map(elmt => (
        <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]}>
        <Popup>
        <div className="popup"> 
          <div className="title">{elmt.title}</div> <br/> {elmt.address} <br /> {elmt.description}
        </div>
        </Popup>
      </Marker>
      ))
      }

    </MapContainer> 
  </div>
);

export default Map;
