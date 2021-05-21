import { connect } from 'react-redux';
import { deleteEvent, fetchEvent } from 'src/actions/curioset';

import EventPage from 'src/components/EventPage';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  name: state.curioset.name,
  type: state.curioset.type,
  description: state.curioset.description,
  website: state.curioset.website,
  address: state.curioset.address,
  dateTime: state.curioset.dateTime,
  price: state.curioset.price,
  longitude: state.curioset.longitude,
  latitude: state.curioset.latitude,
  idEvent: state.curioset.id,
  isLogged: state.auth.logged,
  idEventAuthor: state.curioset.idEventAuthor,
  idUser: state.auth.id,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  handleDelete: () => {
    dispatch(deleteEvent());
  },
  fetchEvent: () => {
    fetchEvent();
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
