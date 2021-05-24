import React from 'react';
import { BookOpen } from 'react-feather';

import streetArt from 'src/assets/icons/icons-1-neg.svg';
import music from 'src/assets/icons/icons-2-neg.svg';
import expo from 'src/assets/icons/icons-3-neg.svg';
import theater from 'src/assets/icons/icons-4-neg.svg';

import './styles.scss';

const MapLegend = ({ legendOpen }) => {
  const isOpen = { legendOpen } ? 'legendOpen' : 'legendClosed';
  return (
    <div className="mapLegend">
      <div className="openLegend">
        <BookOpen />
      </div>
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
    </div>
  );
};

export default MapLegend;
