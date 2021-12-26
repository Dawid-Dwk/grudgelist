import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './styles.css';
import { GrudgeProvider } from './GrudgeContex';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <GrudgeProvider>
    <Application />
  </GrudgeProvider>,
  rootElement
);
