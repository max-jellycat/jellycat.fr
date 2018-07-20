import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/global.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(fab, faEnvelope);

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
