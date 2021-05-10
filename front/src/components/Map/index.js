// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import SearchBar from "src/containers/SearchBar"

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Component
const Map = ({list, longitude, latitude}) => (
  
  <div className="map">
  
  <SearchBar />
  <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} id="mapid">
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      { list.map(elmt => (
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

Map.propTypes = {
  list: PropTypes.array.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
}

export default Map;
