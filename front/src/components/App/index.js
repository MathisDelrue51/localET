// == Import npm
import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Import
import './styles.scss';
import Map from "src/components/Map";

import data from "../../data.js";
// const marker = {
//   id: 1,
//   title: 'Best of van gogh',
//   description: 'une présentation de ses meilleures oeuvres',
//   address: '12 Rue du Croissant, Nantes, France',
//   latitude: 47.23737335205078,
//   longitude: -1.5248912572860718,
//   category: "Expos",
// };

// == Component
const App = () => (
  <div className="app">
    <div>Ici, le header</div>
    <MapContainer center={[47.23737335205078, -1.5248912572860718,]} zoom={13} scrollWheelZoom={false} id="mapid">
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
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
