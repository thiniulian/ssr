import 'dotenv/config';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import SpaceshipPartsRouter from './routers/SpaceshipPartsRouter';
import StaticRouter from './routers/StaticRouter';

const server = express();

server
  .use(bodyParser.json())
  .use(express.static(path.join('dist')))
  .use('/assets', express.static(path.join('src', 'server', 'assets')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server
  .get('/api/v1/spaceship-parts', SpaceshipPartsRouter)
  .get('*', StaticRouter);

server.listen(process.env.PORT, () => {
  console.log(`Skeleton app is listening on port: ${process.env.NODE_ENV}`);
});
