import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
 
import { NavLink, useParams } from 'react-router-dom';
import SubmitButton from 'src/components/SubmitButton';
 
const EventPageFromMap = ({
 list,
}) => {
 const { id } = useParams();
 console.log(list);
 console.log('je suis un', id);
 const event = list.find((elmt) => elmt.id == id);
 console.log(event);
 return (
   <div className="event">
     <NavLink to="/" className="link">
       Retourner à l'accueil
     </NavLink>
     <div className="eventPart">
       <h1>{event.name}</h1>
       <h3>{event.category}</h3>
     </div>
 
     <div className="eventPart">
       <h2>Quoi ?</h2>
       <p>{event.description}</p>
       <a href={event.website}>Voir le site web</a>
     </div>
     <div className="eventPart eventLocation">
       <h2>Où ?</h2>
       <img src="#" alt="#" />
       <p>{event.address}</p>
     </div>
 
     <div className="eventPart eventDatePrice">
       <div className="eventDate">
         <h2>Quand ?</h2>
         <p>{event.agenda}</p>
       </div>
       <div className="eventDate">
         <h2>Comment ?</h2>
         <p>{event.price}</p>
       </div>
     </div>
  </div>
 );
};
 
EventPageFromMap.propTypes = {
 
};
 
export default EventPageFromMap;
