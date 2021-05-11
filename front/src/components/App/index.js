// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Map from "src/containers/mapContainer";
import Header from 'src/containers/Header';
import RegisterForm from 'src/containers/RegisterForm'
import Footer from 'src/components/Footer'


// == Component
const App = ({fetchCuriosets}) => {
  console.log(fetchCuriosets);
  useEffect(()=>{fetchCuriosets();},[]);

  return(
  <div className="app">
    <Header />
    <Switch>

      <Route path="/subscribe" >
        <RegisterForm />
      </Route> 
      <Route path="/">
        <Map />
      </Route>

    </Switch>
    <Footer />
  </div>
  )
};

App.propTypes = {
  fetchCuriosets: PropTypes.func.isRequired
};

// == Export
export default App;
