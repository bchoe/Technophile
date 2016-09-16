function Webbrowser(url){
  this.url = url;
}

Webbrowser.prototype.open = function(url) {
  return 'Browsing to ' + url;
};

module.exports = Webbrowser;