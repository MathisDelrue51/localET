// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import SetView from 'src/components/SetView';
import CreateEventButton from 'src/components/CreateEventButton';

import Leaflet from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import streetArt from 'src/assets/icons/icons-1-neg.svg';
import music from 'src/assets/icons/icons-2-neg.svg';
import expo from 'src/assets/icons/icons-3-neg.svg';
import theater from 'src/assets/icons/icons-4-neg.svg';
import shadow from 'src/assets/icons/icons-shadow-05.svg';

// == Component
const Map = ({
  list,
  longitude,
  latitude,
  zoom,
  saveId,
  handleClick,
  isLogged,
}) => {
  const iconSA = new Leaflet.Icon({
    iconUrl: streetArt,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [40, 40],
  });
  const iconMu = new Leaflet.Icon({
    iconUrl: music,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [40, 40],
  });
  const iconEx = new Leaflet.Icon({
    iconUrl: expo,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [40, 40],
  });
  const iconTh = new Leaflet.Icon({
    iconUrl: theater,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [40, 40],
  });
  return (

    <div className="map">
      <div className="searchBar">
        <SearchBar placeholder="Cherchez une ville..." />
      </div>

      {isLogged && <CreateEventButton />}

      <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} id="mapid">
        <SetView center={[latitude, longitude]} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="mapCopyright"
        />
        { list.map((elmt) => {
          const path = `/curiosET/${elmt.id}`;
          if (elmt.category_id === 1) {
            return (
              <Marker
                key={elmt.id}
                position={[elmt.latitude, elmt.longitude]}
                eventHandlers={{
                  click: () => {
                    saveId(elmt.id);
                  },
                }}
                icon={iconSA}
              >
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
                      <button type="button" onClick={handleClick}>Page complète de l'event...</button>
                    </NavLink>
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 2) {
            return (
              <Marker
                key={elmt.id}
                position={[elmt.latitude, elmt.longitude]}
                eventHandlers={{
                  click: () => {
                    saveId(elmt.id);
                  },
                }}
                icon={iconMu}
              >
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
                      <button type="button" onClick={handleClick}>Page complète de l'event...</button>
                    </NavLink>
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 3) {
            return (
              <Marker
                key={elmt.id}
                position={[elmt.latitude, elmt.longitude]}
                eventHandlers={{
                  click: () => {
                    saveId(elmt.id);
                  },
                }}
                icon={iconEx}
              >
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
                      <button type="button" onClick={handleClick}>Page complète de l'event...</button>
                    </NavLink>
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 4) {
            return (
              <Marker
                key={elmt.id}
                position={[elmt.latitude, elmt.longitude]}
                eventHandlers={{
                  click: () => {
                    saveId(elmt.id);
                  },
                }}
                icon={iconTh}
              >
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
                      <button type="button" onClick={handleClick}>Page complète de l'event...</button>
                    </NavLink>
                  </div>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>

    </div>
  );
};

Map.propTypes = {
  list: PropTypes.array.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Map;
