import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepages/homepage'; 
import ShopPage from './Pages/Shop/ShopPage';

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
