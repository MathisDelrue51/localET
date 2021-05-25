// == Import npm
import React, {
  useEffect,
} from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Map from 'src/containers/mapContainer';
import Header from 'src/containers/Header';
import RegisterForm from 'src/containers/RegisterForm';
import ProfilePage from 'src/containers/ProfilePage';
import Footer from 'src/components/Footer';
import CreateEventForm from 'src/containers/CreateEventForm';
import UpdateEventForm from 'src/containers/UpdateEventForm';
import EventPage from 'src/containers/EventPage';
import ContactPage from 'src/components/ContactPage';
import Page404 from '../Page404';

// == Component
const App = ({
  fetchCuriosets,
  token,
  saveUser,
}) => {
  useEffect(() => {
    fetchCuriosets();
  }, []);

  useEffect(() => {
    if (!token) {
      const browserToken = localStorage.getItem('token');
      const browserPseudo = localStorage.getItem('pseudo');
      const browserId = localStorage.getItem('id');
      const browserLogged = localStorage.getItem('logged');
      saveUser(browserToken, browserPseudo, browserId, browserLogged);
    }
  }, []);

  const pathProfile = '/profile/:id';
  const pathCurioset = '/curiosET/:idEvent';

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
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
        <Route path="/updateEvent">
          <UpdateEventForm />
        </Route>
        <Route path="/login">
          <Map />
        </Route>
        <Route path="/logout">
          <Map />
        </Route>
        <Route path="/" exact>
          <Map />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  /** value of the token */
  token: PropTypes.string,
  /** called at page loading to retrieve all events and show them on map */
  fetchCuriosets: PropTypes.func.isRequired,
  /** called to save user info imported from localStorage in state */
  saveUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: null,
};
// == Export
export default App;
