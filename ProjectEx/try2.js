var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function (err) {                                
        throw err; 
    })
    .on('response', function (response) {                           // Note 3
        console.log('Response Status Code: ', response.statusMessage, response.headers['content-type']);
        console.log('Downloading image...');
    })
    .on('end', function() {
        console.log('done');
    })
    .pipe(fs.createWriteStream('./future.jpg'));

    
