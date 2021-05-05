// == Import npm
import React from 'react';

// == Import
import Field from 'src/components/Field'

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Field />
    <div>Ici, le header</div>
    <div>Ici, le main</div>
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
