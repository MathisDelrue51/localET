import { combineReducers } from 'redux';

// on importe tous les reducers
import authReducer from 'src/reducers/authReducer';
import mapReducer from 'src/reducers/mapReducer';


// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  map: mapReducer
});

export default rootReducer;
