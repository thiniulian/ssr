import express from 'express';
import request from 'request';
import path from "path";
import proxy from 'http-proxy-middleware';

const server = express();

server
  .set('view engine', 'ejs')
  .set('views', path.resolve('src', 'views'));

server.get('/', (req, res) =>
  Promise.all([
    getContents('http://localhost:3001')
  ]).then(responses => {
    console.log(responses[0]);
    res.render('index', {teamBlue: responses[0]})
  }).catch(error =>
    res.send(error.message)
  )
);

const getContents = (url) => new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (error) return resolve("Error loading " + url + ": " + error.message);

    return resolve(body);
  });
});

// const createProxy = (path, target) =>
//   server.use(path, proxy({target, changeOrigin: true, pathRewrite: {[`^${path}`]: ''}}));
//
// createProxy('/main.2eb6bc28f795f26c9c7d.js', 'http://localhost:3001');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
