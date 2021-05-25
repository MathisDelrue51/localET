import React from 'react';
import { HelpCircle } from 'react-feather';
import classNames from 'classnames';

import streetArt from 'src/assets/icons/icons-1-neg.svg';
import music from 'src/assets/icons/icons-2-neg.svg';
import expo from 'src/assets/icons/icons-3-neg.svg';
import theater from 'src/assets/icons/icons-4-neg.svg';

import './styles.scss';

const MapLegend = ({ openLegend, handleOpen }) => {
  const legendOpenState = classNames({'legendOpenVisible': openLegend}, {'legendOpenInvisible': !openLegend});
  const legendCloseState = classNames({'legendCloseVisible': !openLegend}, {'legendCloseInvisible': openLegend});
  return (
    <div className="mapLegend">
      {/* MAP LEGEND OPEN */}
      <div className={legendOpenState}>
        <div className="mapLegend__type">
          <img src={streetArt} alt="Logo street art" className="legendImg" />
          Street Art
        </div>
        <div className="mapLegend__type">
          <img src={music} alt="Logo Musique" />
          Musique
        </div>
        <div className="mapLegend__type">
          <img src={expo} alt="Logo Exposition" />
          Exposition
        </div>
        <div className="mapLegend__type">
          <img src={theater} alt="Logo Théâtre" />
          Théâtre
        </div>

        <div>
          <HelpCircle onClick={handleOpen} size={40} color="white" />
        </div>
      </div>

      {/* MAP LEGEND CLOSED */}
      <div className={legendCloseState}>
        <HelpCircle onClick={handleOpen} size={40} color="white" />
      </div>
    </div>

  );
};

export default MapLegend;
