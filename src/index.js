require('dotenv').load();

import Express from 'express';
import bodyParser from 'body-parser';

import { jwt } from 'twilio';
const AccessToken = jwt.AccessToken;
const IpMessagingGrant = AccessToken.IpMessagingGrant;

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(AccessToken);
  console.log(IpMessagingGrant);
  res.send("Hello world!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('Application is running on localhost:' + port); });