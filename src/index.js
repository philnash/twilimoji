import config from './config';
import express from 'express';
import bodyParser from 'body-parser';

import { jwt } from 'twilio';
const AccessToken = jwt.AccessToken;
const IpMessagingGrant = AccessToken.IpMessagingGrant;

const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/token", (req, res) => {
  const identity = req.params.identity;
  const accessToken = new AccessToken(config.twilio.accountSid, config.twilio.apiKey, config.twilio.apiSecret);
  const ipMessagingGrant = new IpMessagingGrant({
    serviceSid: config.twilio.serviceSid,
    endpointId: `${identity}:browser`
  });
  accessToken.addGrant(ipMessagingGrant);
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({
    token: accessToken.toJwt(),
    identity: req.query.identity
  }));
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('Application is running on localhost:' + port); });