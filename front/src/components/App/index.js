// == Import npm
import React, {
  useEffect,
} from 'react';
import {
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

// == Component
const App = ({
  fetchCuriosets,
  token,
  saveUser,
}) => {
  console.log(fetchCuriosets);
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
  }, [token]);

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
        <Route path="/">
          <Map />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  token: PropTypes.string,
  fetchCuriosets: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: null,
};
// == Export
export default App;
