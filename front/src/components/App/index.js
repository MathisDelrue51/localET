// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Map from "src/components/Map";
import Header from 'src/components/Header';
import RegisterForm from 'src/containers/RegisterForm'

import './styles.scss';


// == Component
const App = () => (
  <div className="app">
    <Header />
    <Map />
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
