// import npm
import axios from 'axios';

// import
import {
  LOG_IN,
  REGISTER,
  saveUser,
  LOG_OUT,
  FETCH_PROFILE,
  fetchProfileSuccess,
  removeErrorRegister,
  handleErrorRegister,
  handleErrorLogin,
} from 'src/actions/auth';
import history from 'src/utils/history';

//For production
const SERVER_URL = 'https://apo-localet.herokuapp.com/api';

//For development
//const SERVER_URL = 'http://localhost:1234/api';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware AUTH: ', action);

  switch (action.type) {
    case FETCH_PROFILE: {
      // console.log('authMiddleware is handling FETCH_PROFILE action');
      const { auth } = store.getState();
      // connect to backend profile route to get user infos
      axios({
        method: 'get',
        url: `${SERVER_URL}/profile/${auth.id}`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          // console.log(response.data);
          const actionToDispatch = fetchProfileSuccess(
            response.data.email,
            response.data.curiosets,
            auth.id,
          );
          store.dispatch(actionToDispatch);
        })
        .catch((err) => {
          // console.log(err.response.data);
          console.error(err);
        });
    }
      break;
    case REGISTER: {
      // console.log('authMiddleware is handling REGISTER action');
      const { auth } = store.getState();
      // connect to the backend's register route, providing email, password and alias collected
      // from the state(and so, typed by the user)
      axios({
        method: 'post',
        url: `${SERVER_URL}/signup`,
        data: {
          email: auth.email,
          password: auth.password,
          pseudo: auth.pseudo,
        },
      })
        .then((response) => {
          // console.log(response.data);
          history.push('/login');
        })
        .catch((err) => {
          // console.log(err.response.data);
          const removeToDispatch = removeErrorRegister();
          store.dispatch(removeToDispatch);
          let n = 0;
          if (auth.password && auth.password2 && auth.password2 !== auth.password) {
            const errorToDispatch = handleErrorRegister(
              'password2',
              'Vos mots de passe ne correspondent pas',
            );
            store.dispatch(errorToDispatch);
          }
          // as long as there are errors in the register fields, show them all
          while (n < err.response.data.length) {
            const errorToDispatch = handleErrorRegister(
              err.response.data[n].path[0],
              err.response.data[n].message,
            );
            store.dispatch(errorToDispatch);
            n += 1;
          }
          console.error('ceci est mon erreur', err);
        });
      break;
    }
    case LOG_IN: {
      // console.log('authMiddleware is handling LOG_IN action');

      // getting the auth part of the state
      const { auth } = store.getState();

      // connect to the backend's login route, providing the email and password collected
      // from the state (and so, typed by the user)
      axios.post(`${SERVER_URL}/login`, {
        email: auth.email,
        password: auth.password,
      })
        .then((response) => {
          // console.log('save user data', response);
          const actionSaveUser = saveUser(
            response.data.logged,
            response.data.token,
            response.data.pseudo,
            response.data.id,
          );

          localStorage.setItem('token', response.data.token);
          localStorage.setItem('pseudo', response.data.pseudo);
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('logged', response.data.logged);

          store.dispatch(actionSaveUser);
        })

        .then(() => {
          history.push('/');
        })

        .catch((error) => {
          store.dispatch(handleErrorLogin());
          // console.log(error.response.data);
        });

      break;
    }
    case LOG_OUT: {
      // console.log('authMiddleware is handling LOG_OUT action');

      axios.get(`${SERVER_URL}/logout`)

        .then(() => {
          localStorage.clear();
        })
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

// export
export default authMiddleware;
