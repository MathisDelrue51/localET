import axios from 'axios';
import {
  FETCH_CURIOSETS, SUBMIT_SEARCH, fetchCuriosetsSuccess, fetchCuriosetsError, submitSearchSuccess,
} from 'src/actions/map';

//For production
const SERVER_URL = 'https://apo-localet.herokuapp.com/api';

//For development
//const SERVER_URL = 'http://localhost:1234/api';

export default (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware MAP: ', action);
  switch (action.type) {
    case FETCH_CURIOSETS:

      console.log('Recherche curiosETs');
      // Fetch request to get curiosETs
      next(action);
      axios({
        method: 'get',
        url: `${SERVER_URL}/`,
      })
        .then((res) => { 
          console.log('je reçois ça du back', res);
          const actionToDispatch = fetchCuriosetsSuccess(res.data);
          store.dispatch(actionToDispatch);
        })
        .catch((err) => {
          console.error(err);
          const actionToError = fetchCuriosetsError();
          store.dispatch(actionToError);
        });
      
      break;
    case SUBMIT_SEARCH:
      console.log('Recherche adresses');
      const { address } = store.getState().map;
      axios({
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${address}&limit=5`,
      })
        .then((res) => {
          console.log("je reçois ça de l'api", res);
          console.log(res.data.features[0].geometry.coordinates[0]);
          const actionToDispatch = submitSearchSuccess(
            res.data.features[0].geometry.coordinates[0],
            res.data.features[0].geometry.coordinates[1],
          );
          store.dispatch(actionToDispatch);
        })
        .catch((err) => {
          console.error(err);
        });
        break;
    default:
      next(action);
  }
};
