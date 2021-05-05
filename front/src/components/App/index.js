// == Import npm
import React from 'react';

// == Import
import Field from 'src/components/Field';
import Header from 'src/components/Header';

import './styles.scss';

// == Import Components/Containers
import SubmitButton from "../submitButton";


// == Component
const App = () => (
  <div className="app">
    <Header />
    <Field />
    <SubmitButton buttonName="Valider"/>
    <div>Ici, le main</div>
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
