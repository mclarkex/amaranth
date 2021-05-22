import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar      from './components/Navbar';
import Footer      from './components/Footer';
import Home        from './pages/Home';
import Characters  from './pages/Characters';
import Team        from './pages/team';

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact      component={Home} />
            <Route path='/characters'  component={Characters} />
            <Route path='/team'        component={Team} />
          </Switch>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
