import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar      from './components/Navbar';
import Home        from './pages/Home';
import Characters  from './pages/Characters';
import Team        from './pages/team';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact      component={Home} />
          <Route path='/characters'  component={Characters} />
          <Route path='/team'        component={Team} />
        </Switch>
      </Router>
  );
}

export default App;
