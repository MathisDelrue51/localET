// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import SetView from 'src/components/SetView';
import CreateEventButton from 'src/components/CreateEventButton';

import {
  MapContainer, TileLayer, Marker, Popup, Pane,
} from 'react-leaflet';

// == Component
const Map = ({
  list, longitude, latitude, zoom,
}) => (

  <div className="map">

    <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} id="mapid">
      <SetView center={[latitude, longitude]} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
        <SearchBar placeholder="Cherchez une ville..." />
      </Pane>
      { list.map((elmt) => {
        const path = `/curiosETs/${elmt.id}`;
        return (
          <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]}>
            <Popup>
              <div className="popup">
                <div className="title">{elmt.title}</div>
                <br />
                {elmt.address}
                <br />
                {elmt.description}
                <br />
                <NavLink
                  to={path}
                  className="navLinkMap"
                  activeClassName="navLinkActive"
                  exact
                >
                  Page complète de l'event...
                </NavLink>
              </div>
            </Popup>
          </Marker>
        );
      })}
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
