import 'dotenv/config';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { Product } from './client/components/Product';

const app = express();

app.use(express.static(path.join('dist')))
  .use(express.static(path.join('src', 'client', 'assets')));

app.set('view engine', 'ejs')
  .set('views', path.join('dist'));

app.get('/*', (req, res) => {
  res.render('index', {
    teamRed: renderToString(<Product />)
  });
});

app.listen(process.env.PORT, () => {
  console.log(`TeamRed app is listening on port: ${process.env.NODE_ENV}`);
});
