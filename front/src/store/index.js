import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authMiddleware from 'src/middlewares/authMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import curiosetMiddleware from 'src/middlewares/curiosetMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    mapMiddleware,
    curiosetMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
