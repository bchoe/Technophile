var Watch = require('./watch.js');
var Tablet = require('./tablet.js');

function Smartwatch(){
Watch.call(this,'watch');
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(Smartwatch.prototype, Watch.prototype);
extend(Smartwatch.prototype, Tablet.prototype);

module.exports = Smartwatch;