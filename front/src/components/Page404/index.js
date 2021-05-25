import React from 'react';

import { NavLink } from 'react-router-dom';



import './styles.scss';

const Page404 = () => (
  <div className="wrapper404">
    <h2 className="message404Title message404">Oh oh...</h2>
    <h2 className="message404Text message404">Il semblerait que cette page n'existe pas...</h2>
    <div className="face">
      <div className="eyes">
        <div className="eye" />
        <div className="eye" />
      </div>
    </div>
      <div className="navLinkHome"><NavLink className="link" to="/">Retourner sur la carte</NavLink></div>
  </div>

);

export default Page404;
