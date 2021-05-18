import axios from 'axios';
import {
  SUBMIT_ADDRESS_SEARCH,
  SUBMIT_CREATE_EVENT,
  submitCreateEvent,
  saveAddressData,
  FETCH_EVENT,
  fetchEventSuccess,
  fetchEvent,
  saveID,
} from 'src/actions/curioset';

import history from 'src/utils/history';

const SERVER_URL = 'https://apo-localet.herokuapp.com';

const curiosetMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware CURIOSET: ', action);

  switch (action.type) {
    case FETCH_EVENT: {
      console.log('authMiddleware is handling FETCH_EVENT action');
      const {
        curioset,
      } = store.getState();

      axios({
        method: 'get',
        url: `${SERVER_URL}/curioset/${curioset.idEvent}`,
      })
        .then((response) => {
          console.log('data du fetch event :');
          console.log(response.data);
          const actionToDispatch = fetchEventSuccess(response.data);
          store.dispatch(actionToDispatch);
        })
        .then(() => {
          history.push(`/curiosET/${curioset.idEvent}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
      break;

    case SUBMIT_ADDRESS_SEARCH: {
      console.log('Middleware Recherche adresse');
      const {
        curioset,
      } = store.getState();

      axios({
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${curioset.address}&limit=5`,
      })

        .then((response) => {
          console.log("RESPONSE de l'api", response);

          const actionToDispatch = saveAddressData(
            response.data.features[0].geometry.coordinates[0],
            response.data.features[0].geometry.coordinates[1],
          );
          store.dispatch(actionToDispatch);
        })
        .then(() => {
          store.dispatch(submitCreateEvent());
        })

        .catch((error) => {
          console.log('It must be an existing adress');
          console.error(error);
        });
    }
      break;

    case SUBMIT_CREATE_EVENT: {
      console.log('Middleware Create Event');

      const {
        curioset,
      } = store.getState();
      const priceFloat = parseFloat(curioset.price);
      const {
        auth,
      } = store.getState();

      axios({
        method: 'post',
        url: `${SERVER_URL}/curioset`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        data: {
          title: curioset.name,
          description: curioset.description,
          address: curioset.address,
          latitude: curioset.latitude,
          longitude: curioset.longitude,
          agenda: curioset.dateTime,
          price: priceFloat,
          user_id: auth.id,
          category_id: curioset.category,
        },
      })
        .then((response) => {
          store.dispatch(saveID(response.data.id));
        })
        .then(() => {
          store.dispatch(fetchEvent());
        })
        .then(() => {
          history.push('/');
        })
        .catch((err) => {
          console.log(err.response.data);
          console.error('ceci est mon erreur', err);
        });
    }
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default curiosetMiddleware;
