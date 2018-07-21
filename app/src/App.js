import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { startLoading } from './actions/actions';

import Home from './components/Home';
import Navbar from './components/Navbar';

store.dispatch(startLoading());

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;

