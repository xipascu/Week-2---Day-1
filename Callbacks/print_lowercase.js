var lower = require('../step5');


function printHTML (html) {
    console.log(html.toLowerCase());
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  lower(requestOptions, printHTML);