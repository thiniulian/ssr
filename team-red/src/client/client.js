import React from 'react';
import { hydrate } from 'react-dom';

import { Product } from './components/Product';

const app = document.getElementById('team-red-app');

hydrate(<Product />, app);
