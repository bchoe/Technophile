var Gameconsole = require('./gameConsole.js');
var Webbrowser = require('./webBrowser.js');

function Nintendods(systemName){
Gameconsole.call(this,'Nintendo DS');
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(Nintendods.prototype, Gameconsole.prototype);
extend(Nintendods.prototype, Webbrowser.prototype);

module.exports = Nintendods;