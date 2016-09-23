
function Gameconsole(systemName){
  this.systemName = systemName;
}

Gameconsole.prototype.play = function(game) {
  return this.systemName + ' plays ' + game.title;
};

module.exports = Gameconsole;