var twilio = require('twilio');

var accountSid = 'AC1cb713677ce4f7b2834abb1cd90fb687'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+16468971862',  // Text this number
    from: '+12019926997' // From a valid Twilio number
})
.then((message) => console.log(message.sid));