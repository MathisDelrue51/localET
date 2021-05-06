// == Import npm
import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Import
import './styles.scss';
import Map from "src/components/Map";
import data from "../../data.js";

// == Component
const App = () => (
  <div className="app">
    <div>Ici, le header</div>
    <Map />
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
