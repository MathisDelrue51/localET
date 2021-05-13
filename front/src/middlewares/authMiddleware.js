import axios from 'axios';

import {
  LOG_IN,
  REGISTER,
  saveUser,
  LOG_OUT,
  logOut,
  FETCH_PROFILE,
} from 'src/actions/auth';

import history from 'src/utils/history';

// here, write the backend's url :
const SERVER_URL = 'http://localhost:1234';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware AUTH: ', action);

  switch (action.type) {
    case FETCH_PROFILE: {
      console.log('authMiddleware is handling FETCH_PROFILE action');
      const { auth } = store.getState();
      console.log(auth.token);
      axios({
        method: 'GET',
        url: `${SERVER_URL}/profile/${auth.id}`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
      break;
    case REGISTER: {
      console.log('authMiddleware is handling REGISTER action');
      // getting the auth part of the state
      const { auth } = store.getState();
      console.log(auth.email);
      // connect to the backend's register route, providing email, password and alias collected
      // from the state(and so, typed by the user)
      axios({
        method: 'POST',
        url: `${SERVER_URL}/signup`,
        data: {
          email: auth.email,
          password: auth.password,
          pseudo: auth.pseudo,
        },
      })
        .then((response) => {
          console.log(response.data);
          history.push('/login');
        })
        .catch((err) => {
          console.error('ceci est mon erreur', err);
        });
      break;
    }
    case LOG_IN: {
      console.log('authMiddleware is handling LOG_IN action');

      // getting the auth part of the state
      const { auth } = store.getState();

      // connect to the backend's login route, providing the email and password collected
      // from the state (and so, typed by the user)
      axios.post(`${SERVER_URL}/login`, {
        email: auth.email,
        password: auth.password,
      })
        .then((response) => {
          console.log('Je vais changer le state');
          console.log('save user data', response);

          const actionSaveUser = saveUser(
            response.data.logged,
            response.data.token,
            response.data.pseudo,
            response.data.id,
          );

          console.log('Je viens de changer le state et je push la redirection');

          store.dispatch(actionSaveUser);
        })

        .then(() => {
          history.push('/');
          console.log('history');
        })

        .catch((error) => {
          console.log(error);
        });

      break;
    }

    case LOG_OUT: {
      console.log('authMiddleware is handling LOG_OUT action');

      axios.get(`${SERVER_URL}/logout`)

        .then(() => {
          history.push('/');
        })

        .catch((error) => {
          console.log(error);
        });

      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
