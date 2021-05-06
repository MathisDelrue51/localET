import axios from 'axios';
import { FETCH_CURIOSETS, fetchCuriosetsSuccess, fetchCuriosetsError } from 'src/actions/map';

const SERVER_URL = 'http://localhost:1234';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURIOSETS:
      next(action);
      console.log("Recherche recettes");
      //Lancer une requête pour récupérer les curiosETs
      axios({
        method:"get",
        url: `${SERVER_URL}/`,
      })
      .then((res) => {
        console.log(res.data);
        const actionToDispatch = fetchCuriosetsSuccess(res.data);
        store.dispatch(actionToDispatch)
      })
      .catch((err) => {
        console.error(err);
        const actionToError = fetchCuriosetsError();
        store.dispatch(actionToError);
      })
      break;
    default:
      next(action);
  }};