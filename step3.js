var https = require('https');  
var host = process.argv[2];
var path  = process.argv[3];
var options = {
  host: host,
  path: path,
};

var data = '';

function getAndPrintHTML(options) {

https.get(options, function(response) {

  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {
    data += chunk;
    console.log("Data buffered: " + data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
  console.log('Response stream complete.');
  });

}); 

};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(options);
