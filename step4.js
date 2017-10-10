var https = require('https');  
var host = process.argv[2];
var path  = process.argv[3];
var options = {
  host: host,
  path: path,
};

function getHTML(options, callback) {

  var data = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function() {
      callback(data)
      console.log('Response stream complete.');
  });
 }); 
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);
