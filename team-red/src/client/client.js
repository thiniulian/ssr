import React from 'react';
import { hydrate } from 'react-dom';

import Layout from './components/Layout';

const app = document.getElementById('team-red-app');

hydrate(<Layout />, app);
