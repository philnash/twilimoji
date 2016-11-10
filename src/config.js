require('dotenv').load();

export default {
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    apiKey: process.env.TWILIO_API_KEY,
    apiSecret: process.env.TWILIO_API_SECRET,
    serviceSid: process.env.TWILIO_IP_MESSAGING_SERVICE_SID
  }
};