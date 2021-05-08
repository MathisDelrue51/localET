import axios from 'axios';

import {LOG_IN, saveUser} from 'src/actions/auth'

import history from "src/utils/history";

// here, write the backend's url :
const SERVER_URL = 'http://localhost:1234';

const authMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case LOG_IN: {
      console.log('authMiddleware is handling LOG_IN action');

      // getting the auth part of the state
      const { auth } = store.getState();

      // connect to the backend's login route, providing the email and password collected from the state (and so, typed by the user)
      axios.post(`${SERVER_URL}/login`, {
        email: auth.email,
        password: auth.password,
      })
        .then((response) => {

          console.log('Je vais changer le state');

          const actionSaveUser = saveUser(
            response.data.logged,
            //response.data.token,
            //response.data.pseudo,
          );
          
          console.log('Je viens de changer le state et je push la redirection');

          store.dispatch(actionSaveUser);

        })

        .then(() => {

          history.push("/"); 
          console.log('history');
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
