const express = require('express');
require('dotenv').config();
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');
const cookieParser = require('cookie-parser');
const routes = require('./auth.js');

const port = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());
app.use('/auth', routes.routes);

installHandler(app);

(async function () {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}());
