// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Map from "src/components/Map";

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
