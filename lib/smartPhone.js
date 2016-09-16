var Phone = require('./phone.js');
var Tablet = require('./tablet.js');
var Gameconsole = require('./gameConsole.js');
var Webbrowser = require('./webBrowser.js');

function Smartphone(phoneNumber){
Phone.call(this,phoneNumber);
Gameconsole.call(this, 'Smart Phone');
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(Smartphone.prototype, Phone.prototype);
extend(Smartphone.prototype, Tablet.prototype);
extend(Smartphone.prototype, Gameconsole.prototype);
extend(Smartphone.prototype, Webbrowser.prototype);

module.exports = Smartphone;