// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Map from "src/components/Map";

// == Component
const App = () => (
  <div className="app">
    <Map />
    <div>Ici, le header</div>
    <div>Ici, le main</div>
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
