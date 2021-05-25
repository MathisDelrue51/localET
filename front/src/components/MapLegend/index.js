import React from 'react';
import { HelpCircle } from 'react-feather';

import streetArt from 'src/assets/icons/icons-1-neg.svg';
import music from 'src/assets/icons/icons-2-neg.svg';
import expo from 'src/assets/icons/icons-3-neg.svg';
import theater from 'src/assets/icons/icons-4-neg.svg';

import './styles.scss';

const MapLegend = ({ openLegend, handleOpen }) => {
  const isOpen = { openLegend } ? '' : 'legendClosed';
  const buttonOpen = !{ openLegend } ? 'legendButton' : 'legendButton--closed';
  return (
    <div className="mapLegend">
      <div className={isOpen}>
        <div className="mapLegend__type">
          <img src={streetArt} alt="Logo street art" className="legendImg" />
          Street Art
        </div>
        <p className="mapLegend__type">
          <img src={music} alt="Logo Musique" />
          Musique
        </p>
        <p className="mapLegend__type">
          <img src={expo} alt="Logo Exposition" />
          Exposition
        </p>
        <p className="mapLegend__type">
          <img src={theater} alt="Logo Théâtre" />
          Théâtre
        </p>
      </div>
      <div className={buttonOpen}>
        <HelpCircle onClick={handleOpen} size={40} color="white" />
      </div>
    </div>
  );
};

export default MapLegend;
