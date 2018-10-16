import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Products from './client/components/Products/Products';

const app = express();

app.use(express.static(path.join('dist')));

app.set('view engine', 'ejs')
  .set('views', path.join('dist'));

app.get('/*', (req, res) => {
  res.render('index', {
    teamRed: renderToString(<Products />)
  });
});

app.listen(process.env.PORT, () => {
  console.log(`TeamRed app is listening on port: ${process.env.NODE_ENV}`);
});
