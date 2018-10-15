import 'dotenv/config';
import express from 'express';
import path from 'path';

import getContents from './getContents';

const server = express();

server
  .set('view engine', 'ejs')
  .set('views', path.resolve('src', 'views'));

server.get('/', (req, res) => Promise
  .all([
    getContents(process.env.TEAM_BLUE_URL)
  ])
  .then((responses) => {
    res.render('index', { teamBlue: responses[0] });
  }).catch(error => res.send(error.message)));

server.listen(process.env.PORT, () => {
  console.log(`Skeleton app is listening on port: ${process.env.NODE_ENV}`);
});
