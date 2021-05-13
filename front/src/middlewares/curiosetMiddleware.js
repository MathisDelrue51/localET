import axios from 'axios';
import {
  SUBMIT_ADDRESS_SEARCH, SUBMIT_CREATE_EVENT, submitAddressSearch, submitCreateEvent, saveAddressData,
} from 'src/actions/curioset';

const SERVER_URL = 'http://localhost:1234';

const curiosetMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware CURIOSET: ', action);

  switch (action.type) {
    case SUBMIT_ADDRESS_SEARCH:
      console.log('Recherche adresse');
      const { address } = store.getState().curioset;

      axios({
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${address}&limit=5`,
      })

        .then((response) => {
          console.log("RESPONSE de l'api", response);

          const actionToDispatch = saveAddressData(
            response.data.features[0].geometry.coordinates[0],
            response.data.features[0].geometry.coordinates[1],
          );
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.error(error);
        });

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default curiosetMiddleware;
