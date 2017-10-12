var upper = require('../step5');


function printHTML (html) {
    console.log(html.toUpperCase());
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  upper(requestOptions, printHTML);