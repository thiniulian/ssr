import React from 'react';
import { hydrate } from 'react-dom';

import Products from './components/Products/Products';

const app = document.getElementById('team-red-app');

hydrate(<Products />, app);
