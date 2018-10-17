import 'dotenv/config';
import express from 'express';
import path from 'path';

import getContents from './getContents';

const server = express();

server.use(express.static(path.join('dist')));
server.use('/assets', express.static(path.join('src', 'server', 'assets')));

server
  .set('view engine', 'ejs')
  .set('views', path.join('dist'));

server.get('/', (req, res) => Promise
  .all([
    getContents(process.env.TEAM_BLUE_URL),
    getContents(process.env.TEAM_GREEN_URL),
    getContents(process.env.TEAM_RED_URL)
  ])
  .then((responses) => {
    res.render('index', {
      teamBlue: responses[0],
      teamGreen: responses[1],
      teamRed: responses[2]
    });
  }).catch(error => res.send(error.message)));

server.listen(process.env.PORT, () => {
  console.log(`Skeleton app is listening on port: ${process.env.NODE_ENV}`);
});
