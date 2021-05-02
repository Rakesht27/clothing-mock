import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepages/homepage'; 

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hatspage' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
