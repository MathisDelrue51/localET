// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import Components/Containers
import SubmitButton from "../submitButton";


// == Component
const App = () => (
  <div className="app">
    <SubmitButton buttonName="Valider"/>
    <div>Ici, le header</div>
    <div>Ici, le main</div>
    <div>Ici, le footer</div>
  </div>
);

// == Export
export default App;
