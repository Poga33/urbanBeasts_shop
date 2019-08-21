import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      {/* 'EXACT' -> as long as one path matches, that's the only thing that will render */ }
      <Switch>
        <Route path='/' component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
