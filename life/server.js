var twilio = require('twilio');

var accountSid = 'AC1cb713677ce4f7b2834abb1cd90fb687'; // Your Account SID from www.twilio.com/console
var authToken = 'efefea32b92630cc33492db9716f0027';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

// var mediaUrl = new List<Uri>() {
//             new Uri("http://www.example.com/hearts.png");
//         };




// var message = MessageResource.Create(to,
//                                      from: new PhoneNumber("+15558675309"),
//                                      body: "Jenny please?! I love you <3",
//                                      mediaUrl: mediaUrl);

output = [{id: 123, hello: "world"}];

//storing data in a txt file
var express = require('express'),
    fs = require('fs')
    url = require('url');
    var bodyParser = require('body-parser');
var app = express();

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 
var jsonParser = bodyParser.json();

app.post('/receive', jsonParser, function(request, respond) {
		console.log(request.body)
		client.messages.create({
	    body: 'hi hi',
	    to: request.body.number,  // Text this number
	    from: '+16468469172' // From a valid Twilio number
	})
	.then((message) => console.log(message.sid));

	console.log("hi");


    var body= "";
    filePath = __dirname + '/public/data.txt';
	fs.readFile(filePath, function read(err, fileData){
		if(err){
			throw err;
		}
		body = fileData;

		request.on('data', function(data) {
	        body += data;
	    });

	    request.on('end', function (){
	        fs.appendFile(filePath, body, function() {
	            respond.end();
	        });
	    });
	})

});

app.listen(8080);