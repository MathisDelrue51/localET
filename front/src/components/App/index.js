// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Map from '../../containers/mapContainer';
import Header from '../../containers/Header';
import RegisterForm from '../../containers/RegisterForm';
import CreateEventForm from '../CreateEventForm';
import Footer from '../Footer';

// == Component
const App = ({ fetchCuriosets }) => {
  // console.log(fetchCuriosets);
  useEffect(() => {
    fetchCuriosets();
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>

        <Route path="/subscribe">
          <RegisterForm />
        </Route>
        <Route path="/createEvent">
          <CreateEventForm />
        </Route>
        <Route path="/">
          <Map />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchCuriosets: PropTypes.func.isRequired,
};

// == Export
export default App;
