// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import SetView from 'src/components/SetView';
import CreateEventButton from 'src/containers/CreateEventButton';

import Leaflet from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import { MapPin } from 'react-feather';

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
    shadowSize: [39, 39],
  });
  const iconMu = new Leaflet.Icon({
    iconUrl: music,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [39, 39],
  });
  const iconEx = new Leaflet.Icon({
    iconUrl: expo,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [39, 39],
  });
  const iconTh = new Leaflet.Icon({
    iconUrl: theater,
    iconSize: [32, 32],
    shadowUrl: shadow,
    shadowSize: [39, 39],
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

          const popupTitle = ((elmt.title).length > 20) ? `${(elmt.title).slice(0, 20)}...` : elmt.title;
          const popupDescription = ((elmt.description).length > 100) ? `${(elmt.description).slice(0, 100)}...` : elmt.description;

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
                    <div className="popupTitle">{popupTitle}</div>
                    <div className="popupAddress"><MapPin size={12} className="addressIcon" />{elmt.address}</div>
                    <div className="popupDescription">{popupDescription}</div>
                    <NavLink
                      to={path}
                      className="navLinkMap"
                      exact
                    >
                      <button type="button" onClick={handleClick} className="popupButton">Voir la curiosET...</button>
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
                    <div className="popupTitle">{popupTitle}</div>
                    <div className="popupAddress"><MapPin size={12} className="addressIcon" />{elmt.address}</div>
                    <div className="popupDescription">{popupDescription}</div>
                    <NavLink
                      to={path}
                      className="navLinkMap"
                      exact
                    >
                      <button type="button" onClick={handleClick} className="popupButton">Voir la curiosET...</button>
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
                    <div className="popupTitle">{popupTitle}</div>
                    <div className="popupAddress"><MapPin size={12} className="addressIcon" />{elmt.address}</div>
                    <div className="popupDescription">{popupDescription}</div>
                    <NavLink
                      to={path}
                      className="navLinkMap"
                      exact
                    >
                      <button type="button" onClick={handleClick} className="popupButton">Voir la curiosET...</button>
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
                    <div className="popupTitle">{popupTitle}</div>
                    <div className="popupAddress"><MapPin size={12} className="addressIcon" />{elmt.address}</div>
                    <div className="popupDescription">{popupDescription}</div>
                    <NavLink
                      to={path}
                      className="navLinkMap"
                      exact
                    >
                      <button type="button" onClick={handleClick} className="popupButton">Voir la curiosET...</button>
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
  /** array of event infos */
  list: PropTypes.array.isRequired,
  /** value of the longitude */
  longitude: PropTypes.number.isRequired,
  /** value of the latitude */
  latitude: PropTypes.number.isRequired,
  /** zoom level */
  zoom: PropTypes.number.isRequired,
  /** is user logged ? */
  isLogged: PropTypes.bool.isRequired,
  /** called to save element id in state */
  saveId: PropTypes.func.isRequired,
  /** called onClock go to event button */
  handleClick: PropTypes.func.isRequired,
};

// == Export
export default Map;
