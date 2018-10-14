import React from 'react';
import {hydrate} from 'react-dom';

import Layout from './components/Layout';
import Basket from "./components/Basket/Basket";

const app = document.getElementById('app');
const app2 = document.getElementById('app2');

hydrate(<Layout/>, app);
