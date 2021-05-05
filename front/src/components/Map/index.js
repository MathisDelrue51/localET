// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Component
const Map = (list) => (
  <div className="map">

  {console.log(list)}
   <MapContainer center={[list.latitude, list.longitude]} zoom={13} scrollWheelZoom={false} id="mapid">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={[list.latitude, list.longitude]}>
        <Popup className="popup">
          {list.address} <br /> {list.description}
        </Popup>
      </Marker>

    </MapContainer> 
  </div>
);

export default Map;
