// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import SetView from 'src/components/SetView';

import Leaflet from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import streetArt from 'src/assets/icons/icons-1.svg';
import music from 'src/assets/icons/icons-2.svg';
import expo from 'src/assets/icons/icons-3.svg';
import theater from 'src/assets/icons/icons-4.svg';
import shadow from 'src/assets/icons/icons-shadow-05.svg';

// == Component
const Map = ({
  list, longitude, latitude, zoom,
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
      <SearchBar placeholder="Cherchez une ville..." className="searchBar" />
      <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} id="mapid">
        <SetView center={[latitude, longitude]} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { list.map((elmt) => {
          if (elmt.category_id === 1) {
            return (
              <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]} icon={iconSA}>
                <Popup>
                  <div className="popup">
                    <div className="title">{elmt.title}</div> <br /> {elmt.address} <br /> {elmt.description}
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 2) {
            return (
              <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]} icon={iconMu}>
                <Popup>
                  <div className="popup">
                    <div className="title">{elmt.title}</div> <br /> {elmt.address} <br /> {elmt.description}
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 3) {
            return (
              <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]} icon={iconEx}>
                <Popup>
                  <div className="popup">
                    <div className="title">{elmt.title}</div> <br /> {elmt.address} <br /> {elmt.description}
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (elmt.category_id === 4) {
            return (
              <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]} icon={iconTh}>
                <Popup>
                  <div className="popup">
                    <div className="title">{elmt.title}</div> <br /> {elmt.address} <br /> {elmt.description}
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
};

export default Map;
