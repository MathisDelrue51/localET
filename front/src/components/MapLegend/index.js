import React from 'react';

import streetArt from 'src/assets/icons/icons-1-neg.svg';
import music from 'src/assets/icons/icons-2-neg.svg';
import expo from 'src/assets/icons/icons-3-neg.svg';
import theater from 'src/assets/icons/icons-4-neg.svg';

const MapLegend = () => (
  <div className="mapLegend">
    <p className="mapLegend__type">
      <span>{streetArt}</span>
      Street Art
    </p>
    <p className="mapLegend__type">
      <span>{music}</span>
      Musique
    </p>
    <p className="mapLegend__type">
      <span>{expo}</span>
      Exposition
    </p>
    <p className="mapLegend__type">
      <span>{theater}</span>
      Théâtre
    </p>
  </div>
);

export default MapLegend;
