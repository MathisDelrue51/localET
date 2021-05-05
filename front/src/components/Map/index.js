// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Component
const Map = () => (
  <div className="map">
   <MapContainer center={[50.70730272100729, 3.1553292274475098]} zoom={13} scrollWheelZoom={false} id="mapid">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.70730272100729, 3.1553292274475098]}>
        <Popup>
          Tourcoing <br /> Quelle ville !
        </Popup>
      </Marker>
    </MapContainer> 
  </div>
);

export default Map;
