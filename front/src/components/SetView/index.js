// == Import
import {
  useMap,
} from 'react-leaflet';

// == Hook
const SetView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

// == Export
export default SetView;
