// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Map from "src/components/Map";
import Header from 'src/components/Header';
import Footer from 'src/components/Footer'

import './styles.scss';


// == Component
const App = () => (
  <div className="app">
    <Header />
    <Map />
    <Footer />
  </div>
);

// == Export
export default App;
