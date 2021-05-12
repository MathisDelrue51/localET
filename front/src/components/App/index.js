// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Map from "src/containers/mapContainer";
import Header from 'src/containers/Header';
import RegisterForm from 'src/containers/RegisterForm';
import ProfilePage from 'src/containers/ProfilePage';
import Footer from 'src/components/Footer';


// == Component
const App = ({fetchCuriosets, pseudo, id}) => {
  console.log(fetchCuriosets);
  useEffect(()=>{fetchCuriosets();},[]);

  const path = `profile/${id}`

  return(
  <div className="app">
    <Header />
    <Switch>

      <Route path="/subscribe" >
        <RegisterForm />
      </Route> 
      <Route path={path} >
        <ProfilePage />
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
  fetchCuriosets: PropTypes.func.isRequired,
};

// == Export
export default App;
