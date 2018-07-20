import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;

