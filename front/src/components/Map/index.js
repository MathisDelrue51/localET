// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import SetView from 'src/components/SetView';
import CreateEventButton from 'src/components/CreateEventButton';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Component
const Map = ({
  list, longitude, latitude, zoom,
}) => (

  <div className="map">

    <SearchBar placeholder="Cherchez une ville..." />
    <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} id="mapid">
      <SetView center={[latitude, longitude]} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { list.map((elmt) => (
        <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]}>
          <Popup>
            <div className="popup">
              <div className="title">{elmt.title}</div> <br /> {elmt.address} <br /> {elmt.description}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    <CreateEventButton />
  </div>
);

Map.propTypes = {
  list: PropTypes.array.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
