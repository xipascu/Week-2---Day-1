var rev = require('../step5');


var printHTML = function (html) {
    console.log(html);
  }
  
function reverse(printHTML) {
    console.log(printHTML.split("").reverse().join(""));
   
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  rev(requestOptions, reverse);