// import npm
import axios from 'axios';

// import
import {
  SUBMIT_ADDRESS_SEARCH,
  SUBMIT_ADDRESS_SEARCH_UPDATE,
  SUBMIT_CREATE_EVENT,
  submitCreateEvent,
  saveAddressData,
  FETCH_EVENT,
  fetchEventSuccess,
  fetchEvent,
  UPDATE_EVENT,
  updateEvent,
  updateEventSuccess,
  DELETE_EVENT,
  saveID,
  handleErrorEvent,
  removeErrorEvent,
} from 'src/actions/curioset';
import history from 'src/utils/history';

// here, write the backend's server url :
const SERVER_URL = 'http://localhost:1234';

const curiosetMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware CURIOSET: ', action);
  switch (action.type) {
    case DELETE_EVENT: {
      console.log('authMiddleware is handling DELETE_EVENT action');
      const {
        curioset, auth,
      } = store.getState();
      // connect to backend delete route to delete curiosET
      axios({
        method: 'DELETE',
        url: `${SERVER_URL}/curioset/${curioset.idEvent}`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          // console.log('élément supprimé', response.data);
        })
        .then(() => {
          history.push('/');
          window.location.reload();
        })
        .catch((err) => {
          // console.log(err.response.data);
          // console.error('ceci est mon erreur', err);
        });
    }
      break;
    case UPDATE_EVENT: {
      console.log('authMiddleware is handling UPDATE_EVENT action');
      const {
        curioset, auth,
      } = store.getState();
      const priceFloat = parseFloat(curioset.price);
      // connect to backend update route to update curiosET
      axios({
        method: 'PUT',
        url: `${SERVER_URL}/curioset/${curioset.idEvent}`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        data: {
          id: curioset.idEvent,
          title: curioset.name,
          description: curioset.description,
          address: curioset.address,
          latitude: curioset.latitude,
          longitude: curioset.longitude,
          agenda: curioset.dateTime,
          website: curioset.website,
          price: priceFloat,
          user_id: auth.id,
          category_id: curioset.category,
        },
      })
        .then((response) => {
          // console.log('élément modifié', response.data);
          store.dispatch(updateEventSuccess(response.data));
        })
        .then(() => {
          history.push('/');
          window.location.reload();
        })
        .catch((err) => {
          // console.log(err.response.data);
          const removeToDispatch = removeErrorEvent();
          store.dispatch(removeToDispatch);
          let n = 0;
          while (n < err.response.data.length) {
            // console.log(err.response.data[n]);
            const errorToDispatch = handleErrorEvent(
              err.response.data[n].path[0],
              err.response.data[n].message,
            );
            store.dispatch(errorToDispatch);
            n += 1;
          }
          // console.error('ceci est mon erreur', err);
        });
    }
      break;
    case FETCH_EVENT: {
      console.log('authMiddleware is handling FETCH_EVENT action');
      const {
        curioset,
      } = store.getState();
      // connect to backend curioset/:id route to fetch curiosET
      axios({
        method: 'get',
        url: `${SERVER_URL}/curioset/${curioset.idEvent}`,
      })
        .then((response) => {
          // console.log('data du fetch event :', response.data);
          const actionToDispatch = fetchEventSuccess(response.data);
          store.dispatch(actionToDispatch);
        })
        .then(() => {
          history.push(`/curiosET/${curioset.idEvent}`);
        })
        .catch((err) => {
          // console.error(err);
        });
    }
      break;
    case SUBMIT_ADDRESS_SEARCH_UPDATE: {
      console.log('Middleware Recherche adresse update');
      const {
        curioset,
      } = store.getState();
      // connect to .gouv API to verify address in update form
      axios({
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${curioset.address}&limit=5`,
      })

        .then((response) => {
          // console.log("RESPONSE de l'api", response);
          const actionToDispatch = saveAddressData(
            response.data.features[0].geometry.coordinates[0],
            response.data.features[0].geometry.coordinates[1],
          );
          store.dispatch(actionToDispatch);
        })
        .then(() => {
          store.dispatch(updateEvent());
        })

        .catch((error) => {
          // console.log('It must be an existing adress');
          // console.error(error);
        });
    }
      break;

    case SUBMIT_ADDRESS_SEARCH: {
      console.log('Middleware Recherche adresse');
      const {
        curioset,
      } = store.getState();
      // connect to .gouv API to verify address in create form
      axios({
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${curioset.address}&limit=5`,
      })

        .then((response) => {
          // console.log("RESPONSE de l'api", response);
          const actionToDispatch = saveAddressData(
            response.data.features[0].geometry.coordinates[0],
            response.data.features[0].geometry.coordinates[1],
          );
          store.dispatch(actionToDispatch);
        })
        .then(() => {
          store.dispatch(submitCreateEvent());
        })

        .catch((err) => {
          const actionToDispatch = handleErrorEvent(
            'address',
            'L\'adresse doit être valide',
          );
          store.dispatch(actionToDispatch);
          // console.error(err);
        });
    }
      break;

    case SUBMIT_CREATE_EVENT: {
      console.log('Middleware Create Event');
      const {
        curioset,
        auth,
      } = store.getState();
      // connect to backend curioset route to create curiosET
      const priceFloat = parseFloat(curioset.price);
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
          website: curioset.website,
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
          window.location.reload();
        })
        .catch((err) => {
          const removeToDispatch = removeErrorEvent();
          store.dispatch(removeToDispatch);
          let n = 0;
          while (n < err.response.data.length) {
            const errorToDispatch = handleErrorEvent(
              err.response.data[n].path[0],
              err.response.data[n].message,
            );
            store.dispatch(errorToDispatch);
            n += 1;
          }
          // console.error('ceci est mon erreur', err);
        });
    }
      break;

    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

// export
export default curiosetMiddleware;
