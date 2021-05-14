// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Map from 'src/containers/mapContainer';
import Header from 'src/containers/Header';
import RegisterForm from 'src/containers/RegisterForm';
import ProfilePage from 'src/containers/ProfilePage';
import Footer from 'src/components/Footer';
import CreateEventForm from 'src/containers/CreateEventForm';
import EventPage from 'src/containers/EventPage';

// == Component
const App = ({
  fetchCuriosets,
  pseudo,
  id,
  idEvent,
}) => {
  console.log(fetchCuriosets);
  useEffect(() => {
    fetchCuriosets();
  }, []);

  const pathProfile = `/profile/${id}`;
  const pathCurioset = `/curiosET/${idEvent}`;

  return (
    <div className="app">
      <Header />
      <Switch>

        <Route path="/subscribe">
          <RegisterForm />
        </Route>
        <Route path={pathProfile}>
          <ProfilePage />
        </Route>
        <Route path="/createEvent">
          <CreateEventForm />
        </Route>
        <Route path={pathCurioset}>
          <EventPage />
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
