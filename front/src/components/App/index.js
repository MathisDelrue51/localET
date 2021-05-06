// == Import npm
import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Import
<<<<<<< HEAD
import './styles.scss';
import Map from "src/components/Map";
import data from "../../data.js";
=======
import Field from 'src/components/Field';
import Header from 'src/components/Header';

import './styles.scss';

// == Import Components/Containers
import SubmitButton from "../SubmitButton";

>>>>>>> 05b172fb5799eda5b95507e4ef6e72584bce9a3a

// == Component
const App = () => (
  <div className="app">
<<<<<<< HEAD
    <div>Ici, le header</div>
    <Map />
=======
    <Header />
    <div>Ici, le main</div>
>>>>>>> 05b172fb5799eda5b95507e4ef6e72584bce9a3a
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
