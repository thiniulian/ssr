import express from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from "react-dom/server";

import Layout from "./client/components/Layout";

const app = express()
  .use(express.static(path.join('dist')))
  .set('view engine', 'ejs')
  .set('views', path.resolve('dist'));

app.get("/*", (req, res) => {
  res.render('index', {
    reactDom: renderToString(<Layout/>)
  });
});

app.listen(3001, () => {
  console.log(`Server is listening on port: 3000`)
});
